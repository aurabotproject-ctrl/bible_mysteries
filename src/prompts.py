#!/usr/bin/env python3
"""
Write an image-prompt sheet into every folder under tobuild/.

    cd /path/to/investigate
    python3 src/prompts.py

One `image-prompts.md` per case, built from the production guide, so the artwork
for a case can be generated long before the case itself is written. Re-runnable:
it overwrites the sheets and leaves everything else in the folder alone.

Cases 4-10 carry full, hand-written prompts in the guide and those are copied out
word for word. Cases 11-50 carry a full poster prompt plus a one-line brief for
each plate; those briefs are expanded into complete prompts using the templates
in section 5 of the guide. Either way the sheet is paste-ready.
"""
import io, os, re, sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
GUIDE = os.path.join(ROOT, 'docs', 'chronicle-society-production-guide.md')
TOBUILD = os.path.join(ROOT, 'tobuild')

STYLE = ("Hand-drawn antique illustration on aged cream parchment, in the manner of a "
         "19th-century archaeological field plate. Sepia, ochre, tan and faded ink-brown "
         "palette with muted olive-green accents. Fine pen cross-hatching and light "
         "watercolour wash. Visible paper grain, foxing spots, softly worn deckled edges. "
         "No people unless asked for. Wide landscape format, 3:2.")

NO_TEXT = "Absolutely no text, letters, numbers or writing anywhere in the image."

TEMPLATES = {
    'T1': ("SCENE", "A dramatic single image for a case poster. {S}. No people. " + NO_TEXT +
           " Bold, simple composition that reads clearly at small size. Wide landscape format, 3:2."),
    'T2': ("SURVEY MAP", "An oblique bird's-eye survey map. {S}. {P} "
           "Absolutely no text, letters, numbers, grid references or writing anywhere in the image."),
    'T3': ("FLOOR PLAN", "A precise overhead floor plan, walls drawn with hatched infill, fine "
           "dashed measurement lines with plain arrowheads. {S}. {P} Absolutely no text, letters, "
           "numbers or writing anywhere — the plaques and measurement lines must be completely blank."),
    'T4': ("OBJECT STUDY", "A flat evidence study photographed from directly above on a dark wooden "
           "surface, warm raking lamplight. {S}. {P} Absolutely no text, letters, numbers, stamps, "
           "inscriptions or writing anywhere in the image."),
    'T5': ("TECHNICAL PLATE", "A draughtsman's technical plate against blank parchment, fine dashed "
           "measurement lines with plain arrowheads. {S}. {P} Absolutely no text, letters, numbers or "
           "writing anywhere — the plaques and all measurement lines must be completely blank."),
    'T6': ("BLANK PAPER PROP", "{S}, photographed flat from directly above, filling the frame, as a "
           "straight-on flat scan. Completely blank — no text, letters, numbers, marks or writing of "
           "any kind. The Chronicle Society typesets the contents afterwards."),
}

PLAQUES = {
    'T2': ("Add three blank rectangular label plaques with thin dark borders and empty cream "
           "interiors, each connected by a fine leader line with a small dot to one of the main "
           "features. The plaques must be completely blank."),
    'T3': ("Add three blank rectangular label plaques with thin dark borders and empty cream "
           "interiors, each connected by a fine leader line with a small dot to one of the main "
           "spaces. The plaques must be completely blank."),
    'T4': ("Add three blank rectangular label plaques with thin dark borders and empty cream "
           "interiors, each connected by a fine leader line with a small dot to one of the main "
           "objects. The plaques must be completely blank."),
    'T5': ("Add three blank rectangular label plaques with thin dark borders and empty cream "
           "interiors, each connected by a fine leader line with a small dot to one of the main "
           "parts. The plaques must be completely blank."),
    'T6': "",
}

HOUSE_RULES = """## Before you hand the folder back

- **Every plaque comes out blank.** The labels are typeset afterwards as real SVG
  text, measured to the plaque. That is why they read crisply at any zoom, and why
  they can be re-labelled later — in te reo Māori, say — without regenerating art.
- **3:2 landscape**, 1536 × 1024, for everything except a blank paper prop, which
  can be portrait or a wide strip.
- **Say "no text" twice for maps.** Image models will sneak lettering into terrain.
- If a prompt keeps producing text, ask for **no plaques at all** and instead
  *"leave clear, uncluttered areas of blank parchment beside each feature"*.
- Nothing gruesome. Where a case touches violence, the image shows the aftermath
  or the setting, never the act.
- Save the files in this folder under the names given above, then tell Claude the
  folder is ready.
"""


def blocks(text):
    """Split the guide into (n, code, title, subtitle, body, already-built)."""
    out = []
    pat = re.compile(r'^### (\d+) · (JM-\d+) — (.+?)( — \*\*BUILT\*\*)?\s*$', re.M)
    hits = list(pat.finditer(text))
    for i, m in enumerate(hits):
        end = hits[i + 1].start() if i + 1 < len(hits) else len(text)
        body = text[m.end():end]
        sub = ''
        first = body.strip().split('\n', 1)[0].strip()
        if first.startswith('*') and first.endswith('*'):
            sub = first.strip('*').strip()
        out.append((int(m.group(1)), m.group(2), m.group(3).strip(), sub, body,
                    bool(m.group(4))))
    return out


def expand_style(prompt):
    """Swap the guide's [STYLE] marker — and its variants like
    [STYLE, as a flat study from directly above] — for the real house style block."""
    def rep(m):
        extra = m.group(1).strip().lstrip(',').strip().rstrip('.')
        return STYLE if not extra else STYLE.rstrip('.') + ', ' + extra + '.'
    return re.sub(r'\[STYLE([^\]]*)\]', rep, prompt).replace('  ', ' ').strip()


def full_prompts(body):
    """Cases 4-10: the guide already holds finished prompts. Copy them out."""
    if '**Images**' not in body:
        return None
    found = []
    for m in re.finditer(r'^\*\*(Poster|Plate \d+ — [^*]+)\*\* — > (.+?)\s*$', body, re.M):
        found.append((m.group(1), expand_style(m.group(2))))
    return found or None


def brief_prompts(body):
    """Cases 11-50: a finished poster prompt, plus one-line briefs for the plates."""
    found = []
    pm = re.search(r'^\*\*Poster:\*\*\s*>\s*\[T1\]\s*(.+?)\s*$', body, re.M)
    if pm:
        found.append(('Poster', STYLE + ' ' + TEMPLATES['T1'][1].format(S=pm.group(1).rstrip('.'))))
    pl = re.search(r'^\*\*Plates\*\*\s*—\s*(.+?)\s*$', body, re.M)
    if pl:
        for item in pl.group(1).rstrip('.').split(' · '):
            t = re.match(r'^(T[1-6])\s+(.*)$', item.strip())
            if not t:
                continue
            tmpl, subject = t.group(1), t.group(2).strip()
            if tmpl == 'T1':
                continue                       # already covered by the poster prompt
            subject = subject[0].upper() + subject[1:]
            text = TEMPLATES[tmpl][1].format(S=subject.rstrip('.'), P=PLAQUES[tmpl]).replace('  ', ' ')
            found.append(('Plate — ' + t.group(2).strip(), STYLE + ' ' + text))
    return found or None


def sheet(n, code, title, sub, prompts):
    slug = code.lower().replace('-', '')          # JM-72 -> jm72
    lines = ['# %s — %s' % (code, title), '']
    if sub:
        lines += ['*%s*' % sub, '']
    lines += [
        'Image prompts for this case, ready to paste. Generate each one, save it in',
        'this folder under the file name given, and the case can be built the moment',
        'the artwork is here.', '',
        'The house style block is already folded into every prompt below, so there is',
        'nothing to paste in front of them.', '',
        '---', '']
    i = 0
    for label, prompt in prompts:
        if label == 'Poster':
            fname = 'poster_%s.jpg' % slug
        else:
            i += 1
            fname = '%s_%d.jpg' % ('j' + slug[2:], i)
        lines += ['## %s — save as `%s`' % (label, fname), '',
                  '> ' + prompt, '', '---', '']
    lines += [HOUSE_RULES.rstrip(), '',
              '*Generated from `docs/chronicle-society-production-guide.md`, case %d of 50. '
              'Re-run `python3 src/prompts.py` to refresh every sheet.*' % n, '']
    return '\n'.join(lines)


def main():
    if not os.path.isdir(TOBUILD):
        sys.exit('no tobuild/ folder beside the guide')
    guide = io.open(GUIDE, encoding='utf-8').read()
    folders = {d: os.path.join(TOBUILD, d) for d in os.listdir(TOBUILD)
               if os.path.isdir(os.path.join(TOBUILD, d))}

    written, skipped, thin = 0, [], []
    for n, code, title, sub, body, built in blocks(guide):
        match = [d for d in folders if d.startswith(code + ' ')]
        if not match:
            continue                              # built already, or no folder wanted
        if built:
            continue                          # the case exists; its folder is just the artwork
        prompts = full_prompts(body) or brief_prompts(body)
        if not prompts:
            skipped.append(code)
            continue
        if not full_prompts(body):
            thin.append(code)
        path = os.path.join(folders[match[0]], 'image-prompts.md')
        io.open(path, 'w', encoding='utf-8').write(sheet(n, code, title, sub, prompts))
        written += 1

    print('  wrote %d prompt sheets into tobuild/ (built cases skipped)' % written)
    print('  %d with full hand-written prompts, %d expanded from the plate briefs'
          % (written - len(thin), len(thin)))
    if skipped:
        print('  no prompts found for: ' + ', '.join(skipped))


if __name__ == '__main__':
    main()
