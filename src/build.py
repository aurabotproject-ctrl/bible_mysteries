#!/usr/bin/env python3
"""
B.I.B. — The Bible Investigation Bureau — build script.

    cd /path/to/investigate
    python3 src/build.py

Assembles the source parts and writes:

    index.html    a front door at the top of the folder, so GitHub Pages always
                  finds one at the repo root. It sends the browser to dist/.
    dist/         index.html + cases/<id>.js + bible.json + images/
                  <- the recommended deploy. Upload the CONTENTS of this folder.
    single/       one self-contained .html per case, a few MB each
                  <- hand one case to a student, a relief teacher or a USB stick.
                     Each file is small enough for GitHub's 25 MB web uploader.
    standalone/   index.html, every case in one file, everything inlined
                  <- the whole shelf offline. Far too big for the web uploader;
                     push it with git, or just use single/ instead.

HOW CASES ARE LOADED
--------------------
The shelf runs on a small manifest of case *stubs* (code, title, period, colour,
poster, teaser) compiled into the page. The full case — every document, lock and
verdict — lives in its own file, dist/cases/<id>.js, and is fetched only when
somebody opens that case. So index.html stays small no matter how many cases
exist. The standalone build inlines everything instead, because it has to work
with no server at all.

ADDING A CASE
-------------
1. Write src/part_caseN.js, ending with  registerCase(CASE_JMxx);
2. Add it to CASE_FILES below, and any new artwork to NAMES.
3. Put the case's poster SVG in part_assets.js, not in the case file — the shelf
   draws every poster before any case has been loaded.
"""
import base64, gzip, json, os, re, shutil, sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)                 # the /investigate folder

PARTS   = ['part_style.html', 'part_css_extra.css', 'part_shell.html']
SCRIPTS = ['part_assets.js', 'part_registry.js', 'part_bible.js',
           'part_print.js', 'part_engine.js', 'part_invite.js']
# Easy-level wording packs. One per case that has one; a case with no entry
# here simply stays at the medium reading level.
EASY_FILES = {'jm01': 'part_case0.easy.js',
              'jm33': 'part_case1.easy.js',
              'jm47': 'part_case2.easy.js',
              'jm19': 'part_case3.easy.js',
              'jm08': 'part_case4.easy.js',
              'jm02': 'part_case5.easy.js',
              'jm03': 'part_case6.easy.js',
              'jm04': 'part_case7.easy.js',
              'jm05': 'part_case8.easy.js',
              'jm06': 'part_case9.easy.js',
              'jm09': 'part_case10.easy.js',
              'jm20': 'part_case20.easy.js'}

CASE_FILES = ['part_case0.js', 'part_case1.js', 'part_case2.js', 'part_case3.js', 'part_case4.js',
              'part_case5.js', 'part_case6.js', 'part_case7.js',
              'part_case8.js', 'part_case9.js', 'part_case10.js',
              'part_case11.js', 'part_case12.js', 'part_case13.js', 'part_case14.js', 'part_case15.js', 'part_case16.js', 'part_case18.js', 'part_case20.js']


# Most plates are photographs and ship as JPEG. The wax seal has to keep its
# transparent surround, so it is a PNG - look the extension up rather than
# assume one, and any future asset with an alpha channel just works.
MIME = {'.jpg': 'image/jpeg', '.png': 'image/png'}
def img_ext(n):
    for e in ('.jpg', '.png'):
        if os.path.exists(os.path.join(IMAGES, n + e)):
            return e
    sys.exit('images/%s: expected a .jpg or a .png' % n)

NAMES = ['bibsign', 'bibseal', 'btncontinue', 'btntake', 'btnprint', 'btnrestart', 'poster_jm01', 'j01hill', 'j01gate', 'j01ledger', 'j01paid', 'j01cert',
         'map', 'tomb', 'stone', 'seal', 'roster', 'cipher', 'decoder',
         'j47map', 'j47chamber', 'j47disp', 'j47dothan',
         'poster_jm33', 'poster_jm47', 'poster_jm19', 'poster_jm08',
         'poster_jm02', 'poster_jm03', 'poster_jm04', 'poster_jm05', 'poster_jm06', 'poster_jm09', 'poster_jm10', 'poster_jm11', 'poster_jm13', 'poster_jm14', 'poster_jm15', 'poster_jm16', 'poster_jm18', 'poster_jm20',
         'j19road', 'j19carcass', 'j19linen',
         'j08field', 'j08spoil', 'j08camp',
         'j02road', 'j02courts', 'j02log',
         'j03branch', 'j03mount', 'j03fire',
         'j04house', 'j04sheets', 'j04sword',
         'j05wall', 'j05weights', 'j05vessels',
         'j06city', 'j06section', 'j06ruins',
         'j09props', 'j09map', 'j09treaty',
         'j10delta', 'j10instr', 'j10water',
         'j11road', 'j11cart', 'j11temple',
         'j13grapes', 'j13route', 'j13reports',
         'j14delta', 'j14section', 'j14wheel',
         'j15chamber', 'j15rule', 'j15statements',
         'j16jar', 'j16camp', 'j16log',
         'j18altar', 'j18mount', 'j18stones',
         'j20orders', 'j20rock', 'j20map']

BIBLE_JSON = os.path.join(ROOT, 'bible.json')
IMAGES     = os.path.join(ROOT, 'images')
DIST       = os.path.join(ROOT, 'dist')
STANDALONE = os.path.join(ROOT, 'standalone')
SINGLE     = os.path.join(ROOT, 'single')

BLANK_PIXEL = ('data:image/gif;base64,'
               'R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7')

HEAD = ('<!doctype html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n'
        '<meta name="viewport" content="width=device-width,initial-scale=1">\n'
        '<meta name="description" content="Bible mystery-box investigations for Years 7-8: '
        'read the evidence, break the codes, eliminate every explanation the file will not support.">\n')
RESET = ('<style>*{box-sizing:border-box}html,body{height:100%;margin:0}'
         'img{max-width:100%}[hidden]{display:none!important}</style>\n</head>\n<body>\n')

# The front door. Whatever the repo looks like, GitHub Pages finds an index.html
# at the root and this sends the browser on to the real build.
# A stamp that changes every build. It goes in the front door's redirect so a
# browser holding an old copy of dist/index.html is forced to fetch the new one,
# and into the page itself so you can see which build you are looking at.
BUILD = __import__('datetime').datetime.now().strftime('%Y%m%d-%H%M')

FRONT_DOOR = """<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>B.I.B. &mdash; The Bible Investigation Bureau</title>
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate">
<meta http-equiv="Pragma" content="no-cache">
<noscript><meta http-equiv="refresh" content="0;url=dist/index.html"></noscript>
<style>body{margin:0;min-height:100vh;display:grid;place-items:center;background:#efe4cb;
color:#4a3a26;font:400 16px/1.5 Georgia,'Iowan Old Style',serif;text-align:center;padding:24px}
a{color:#6b4a2a}</style>
</head>
<body>
<div>
  <p>Opening the case archive&hellip;</p>
  <p><a href="dist/index.html">B.I.B. &mdash; The Bible Investigation Bureau</a></p>
</div>
<script>
var V = "?v=__BUILD__";
fetch("dist/index.html" + V, {method:"HEAD", cache:"no-store"})
  .then(function(r){ location.replace((r.ok ? "dist/index.html" : "standalone/index.html") + V); })
  .catch(function(){ location.replace("standalone/index.html" + V); });
</script>
</body>
</html>
"""


def wrap(body):
    title, rest = body.split('\n', 1)
    return HEAD + title + '\n' + RESET + rest + '\n</body>\n</html>\n'


def read(name):
    with open(os.path.join(HERE, name), encoding='utf-8') as f:
        return f.read()


def stub_of(name, src):
    """Pull the shelf metadata out of a case file, without running it.

    Every case declares these on the first three lines of its CASE_ object, so a
    missing one means the house style has slipped — which is worth failing on."""
    m = re.search(r'const (CASE_[A-Z0-9_]+)\s*=\s*\{(.*?)\bitems\s*:', src, re.S)
    if not m:
        sys.exit('%s: could not find the "const CASE_... = {" header' % name)
    head, stub = m.group(2), {}
    for key in ('id', 'code', 'title', 'period', 'colour', 'poster', 'teaser'):
        f = re.search(r'\b%s\s*:\s*"((?:[^"\\]|\\.)*)"' % key, head)
        if not f:
            sys.exit('%s: the case header is missing %s:"..."' % (name, key))
        stub[key] = f.group(1)
    # The house style is always two locks and five explanations; the real case
    # replaces these the moment it is loaded, so they only shape the shelf label.
    stub['nlocks'], stub['ntheories'] = 2, 5
    # Optional. A case may ask for a gilt trim on the shelf by declaring
    # gold:true in its header. The shelf draws posters before any case is
    # fetched, so the flag has to travel in the stub.
    g = re.search(r'\bgold\s*:\s*(true|false)', head)
    if g and g.group(1) == 'true':
        stub['gold'] = True
    return stub


def main():
    missing = [p for p in PARTS + SCRIPTS + CASE_FILES
               if not os.path.exists(os.path.join(HERE, p))]
    if missing:
        sys.exit('missing source parts: ' + ', '.join(missing))

    # A CSS part is pasted into the page raw, inside a <style> element the parts
    # open and close between them. Anything after the last </style> lands in the
    # body as plain text and is silently never applied - which has happened once,
    # so the build now refuses rather than shipping styles that do nothing.
    for part in PARTS:
        if not part.endswith('.css'):
            continue
        text = read(part)
        i = text.rfind('</style>')
        if i >= 0 and text[i + len('</style>'):].strip():
            sys.exit('%s: there is CSS after the final </style>. It would land in the '
                     'body and never apply - move it above that tag.' % part)

    cases = [(n, read(n)) for n in CASE_FILES]
    for n, src in cases:
        if 'registerCase(' not in src:
            sys.exit('%s: must end with registerCase(CASE_JMxx);' % n)
    stubs = [stub_of(n, s) for n, s in cases]

    # ---- easy-level wording packs -------------------------------------
    easy = {}
    for cid, fname in sorted(EASY_FILES.items()):
        path = os.path.join(HERE, fname)
        if not os.path.exists(path):
            sys.exit('%s: listed in EASY_FILES but not on disk' % fname)
        src = read(fname)
        if ('registerEasy("%s"' % cid) not in src and ("registerEasy('%s'" % cid) not in src:
            sys.exit('%s: must end with registerEasy("%s", ...);' % (fname, cid))
        easy[cid] = src
    known = {s['id'] for s in stubs}
    for cid in easy:
        if cid not in known:
            sys.exit('EASY_FILES names %s, which is not a case on the shelf' % cid)

    # The shelf draws teasers before any case is fetched, so the couple of
    # strings it needs travel in the page itself rather than in the pack.
    easy_stubs = {}
    for cid, src in easy.items():
        picked = {}
        for key in ('teaser', 'introSub'):
            m = re.search(r'\b%s\s*:\s*"((?:[^"\\]|\\.)*)"' % key, src)
            if m:
                # Unescape by hand. .encode().decode('unicode_escape') would
                # read the UTF-8 bytes as latin-1 and mangle every em dash.
                picked[key] = re.sub(
                    r'\\(.)',
                    lambda e: {'n': '\n', 't': '\t'}.get(e.group(1), e.group(1)),
                    m.group(1))
        if picked:
            easy_stubs[cid] = picked

    ids = [s['id'] for s in stubs]
    if len(set(ids)) != len(ids):
        sys.exit('two cases share an id: ' + ', '.join(ids))
    for s in stubs:
        if ('__IMG_%s__' % s['poster']) not in read('part_assets.js'):
            sys.exit('%s: poster "%s" is not in part_assets.js — the shelf draws '
                     'posters before any case is loaded' % (s['code'], s['poster']))

    # 1. assemble the page. `case_tags` is empty for the split build (cases are
    #    fetched) and holds every case for the standalone one. Either way the
    #    cases sit directly after the registry that they call into, and before
    #    the engine that reads them.
    parts = [read(p).replace('__BUILD__', BUILD) for p in PARTS]

    def assemble(case_tags, shelf=None):
        tags = []
        for name in SCRIPTS:
            s = read(name)
            if name == 'part_registry.js':
                s = (s.replace('__CASE_STUBS__',
                               json.dumps(shelf if shelf is not None else stubs,
                                          ensure_ascii=False))
                      .replace('__EASY_AVAILABLE__',
                               json.dumps(sorted(easy), ensure_ascii=False))
                      .replace('__EASY_STUBS__',
                               json.dumps(easy_stubs, ensure_ascii=False))
                      .replace('__BUILD__', BUILD))
            tags.append("<script>\n" + s + "\n</script>")
            if name == 'part_registry.js' and case_tags:
                tags.append(case_tags)
        return "\n".join(parts + tags)

    main_bundle = assemble(None)

    def swap(text, how):
        for n in NAMES:
            text = text.replace('__IMG_%s__' % n, how(n))
        return text


    b64 = {}
    for n in NAMES:
        e = img_ext(n)
        with open(os.path.join(IMAGES, n + e), 'rb') as f:
            b64[n] = 'data:%s;base64,' % MIME[e] + base64.b64encode(f.read()).decode()

    # ---- walk-in experiences -------------------------------------------
    # A card declares  tour:{href:"../tours/x.html"}.  The deploy build fetches
    # that file when a student opens it, so dist/index.html stays small.  The
    # offline builds have nowhere to fetch from, so the pages they need are
    # inlined and the app reads them out of window.__TOURS__ instead.  Adding
    # another experience needs nothing here: drop the file in tours/ and point
    # a card at it.
    TOUR_RE = re.compile(r'tour:\s*\{[^}]*?href:\s*"([^"]+)"')

    def tours_in(src):
        return sorted(set(TOUR_RE.findall(src)))

    def tour_tag(hrefs):
        out = {}
        for href in hrefs:
            path = os.path.normpath(os.path.join(DIST, href))   # ../tours/x.html
            if not os.path.exists(path):
                sys.exit('a card asks for %s, which is not there' % href)
            with open(path, encoding='utf-8') as f:
                out[href] = f.read()
        if not out:
            return ''
        # </script> inside the page would end this tag early
        blob = json.dumps(out, ensure_ascii=False).replace('</', '<\\/')
        return '<script>window.__TOURS__=' + blob + ';</script>\n'

    with open(BIBLE_JSON, 'rb') as f:
        bible_tag = ('<script>window.__BIBLE_GZ__="' +
                     base64.b64encode(gzip.compress(f.read(), 9)).decode() + '";</script>\n')

    # 2. the offline single file — cases, images and the Bible all inlined
    case_tags = "\n".join(["<script>\n" + s + "\n</script>" for _, s in cases] +
                          ["<script>\n" + easy[c] + "\n</script>" for c in sorted(easy)])
    inline = swap(assemble(case_tags), lambda n: b64[n])

    all_tours = sorted({h for _, cs in cases for h in tours_in(cs)}
                       | {h for cs in easy.values() for h in tours_in(cs)})
    os.makedirs(STANDALONE, exist_ok=True)
    with open(os.path.join(STANDALONE, 'index.html'), 'w', encoding='utf-8') as f:
        f.write(wrap(bible_tag + tour_tag(all_tours) + inline))
    open(os.path.join(STANDALONE, '.nojekyll'), 'w').close()

    # 2b. one self-contained file per case. Same page, but the shelf holds only
    #     that case and only its own artwork is inlined - so each file is a few
    #     megabytes rather than forty, and stays that way however many cases the
    #     archive grows to. This is the copy to hand out, upload or put on a USB.
    # Each file below is rewritten in place, so nothing here needs deleting
    # except a leftover from a case that is no longer built. Some machines
    # (and some sandboxes) refuse deletes outright, and a stale handout is not
    # worth failing a build over - say so and carry on.
    os.makedirs(SINGLE, exist_ok=True)
    keep = {s['id'] + '.html' for s in stubs}
    for old in os.listdir(SINGLE):
        if old.endswith('.html') and old not in keep:
            try:
                os.remove(os.path.join(SINGLE, old))
            except OSError:
                print('  note: single/%s belongs to a case that is no longer '
                      'built and could not be removed here - delete it by hand.'
                      % old)
    single_sizes = []
    for stub, (_, src) in zip(stubs, cases):
        one = "<script>\n" + src + "\n</script>"
        if stub['id'] in easy:
            one += "\n<script>\n" + easy[stub['id']] + "\n</script>"
        body = assemble(one, shelf=[stub])
        # part_assets.js carries every case's poster, so without this each single
        # file would drag in all eighteen of them. Only this case's artwork is
        # inlined; the other slots get a 1x1 placeholder nothing ever draws.
        # 'bibsign' is the shelf sign in the shared bundle rather than in any
        # one case, so it has to be asked for by name or it lands as a blank pixel.
        # A case needs an image if it carries the token itself, or if it draws
        # a plate whose SVG is defined in the shared part_assets.js.  Without
        # the second test a shared plate lands here as a blank pixel.
        need = ({n for n in NAMES
                 if ('__IMG_%s__' % n) in src
                 or re.search(r'SVG\.%s\b' % re.escape(n), src)}
                | {stub['poster'], 'bibsign', 'bibseal', 'j01cert',
                   'btncontinue', 'btntake', 'btnprint', 'btnrestart'})
        body = swap(body, lambda n: b64[n] if n in need else BLANK_PIXEL)
        body = body.replace('<title>B.I.B. \u2014 The Bible Investigation Bureau</title>',
                            '<title>%s &mdash; %s</title>' % (stub['code'], stub['title']))
        mine = tours_in(src) + tours_in(easy.get(stub['id'], ''))
        path = os.path.join(SINGLE, stub['id'] + '.html')
        with open(path, 'w', encoding='utf-8') as f:
            f.write(wrap(bible_tag + tour_tag(sorted(set(mine))) + body))
        single_sizes.append((stub, os.path.getsize(path)))
    open(os.path.join(SINGLE, '.nojekyll'), 'w').close()

    # 3. the deploy build — one file per case, images and the Bible beside it
    os.makedirs(os.path.join(DIST, 'images'), exist_ok=True)
    os.makedirs(os.path.join(DIST, 'cases'), exist_ok=True)
    with open(os.path.join(DIST, 'index.html'), 'w', encoding='utf-8') as f:
        f.write(wrap(swap(main_bundle, lambda n: 'images/%s%s' % (n, img_ext(n)))))
    for stub, (_, src) in zip(stubs, cases):
        with open(os.path.join(DIST, 'cases', stub['id'] + '.js'), 'w', encoding='utf-8') as f:
            f.write(swap(src, lambda n: 'images/%s%s' % (n, img_ext(n))))
    for cid, src in easy.items():
        with open(os.path.join(DIST, 'cases', cid + '.easy.js'), 'w', encoding='utf-8') as f:
            f.write(swap(src, lambda n: 'images/%s%s' % (n, img_ext(n))))
    for n in NAMES:
        shutil.copy(os.path.join(IMAGES, n + img_ext(n)),
                    os.path.join(DIST, 'images', n + img_ext(n)))
    shutil.copy(BIBLE_JSON, os.path.join(DIST, 'bible.json'))
    open(os.path.join(DIST, '.nojekyll'), 'w').close()

    # 4. the front door at the top of the folder
    with open(os.path.join(ROOT, 'index.html'), 'w', encoding='utf-8') as f:
        f.write(FRONT_DOOR.replace('__BUILD__', BUILD))
    open(os.path.join(ROOT, '.nojekyll'), 'w').close()

    kb = lambda p: round(os.path.getsize(p) / 1024)
    casedir = os.path.join(DIST, 'cases')
    case_kb = sum(os.path.getsize(os.path.join(casedir, f)) for f in os.listdir(casedir)) // 1024
    print()
    print('  index.html                       front door -> dist/, at the top of the folder')
    print()
    print('  dist/index.html            %5d KB  + %d case files (%d KB), bible.json, %d images'
          % (kb(os.path.join(DIST, 'index.html')), len(stubs), case_kb, len(NAMES)))
    print('    -> upload everything INSIDE dist/ to the repo root. Recommended.')
    print('       A case is fetched only when a student opens it, so this stays small.')
    print()
    biggest = max(single_sizes, key=lambda z: z[1])
    print('  single/<case>.html         %5d KB  largest of %d, one file per case'
          % (biggest[1] // 1024, len(single_sizes)))
    print('    -> hand out or upload individually. Every one is well under the')
    print('       25 MB GitHub web-upload limit, and stays that way as cases are added.')
    print()
    print('  standalone/index.html      %5d KB  every case in one file'
          % kb(os.path.join(STANDALONE, 'index.html')))
    print('    -> the whole shelf offline. Too big for the web uploader (25 MB);')
    print('       push it with git, or use single/ instead.')
    print()
    print('  reading levels: medium everywhere; easy written for %s'
          % (', '.join(sorted(easy)) if easy else 'no cases yet'))
    print()
    print('  %d cases on the shelf: %s' % (len(stubs), ', '.join(s['code'] for s in stubs)))


if __name__ == '__main__':
    main()
