# B.I.B. — handover notes

*Paste this at the start of a new chat. It is everything a fresh session needs
to pick the project up without re-reading the whole archive.*

Last updated: 12 September 2026, after writing the statements onto JM-04's two sheets.

---

## 1. What this is

**B.I.B. — The Bible Investigation Bureau.** A Bible mystery-box investigation
app for Year 7–8 students. A student takes a case down off the shelf, reads the
documents on a desk, breaks two locks, eliminates four wrong explanations on a
pinboard, and writes an accusation the evidence will actually carry. Fifty cases
is the target; nineteen are built.

Single-page vanilla JS, HTML and CSS. **No frameworks, no accounts, no server,
no build tooling beyond one Python script.** Progress is saved to
`localStorage` and nothing ever leaves the browser. It has to work on a school
Chromebook, offline, from a file on a USB stick.

Written for a Year 7–8 New Zealand classroom. NZ spelling and date format
throughout.

## 2. How the students actually use it — read this before building anything

**They open it in Chrome on an iPad.** That is the primary device, not a
laptop. It sets a standing requirement on everything, and it is the easiest
thing in this project to forget, because it all works fine on the machine you
are building it on:

- **Nothing may depend on a keyboard.** Three of the walk-in experiences moved
  on the arrow keys only, which on a tablet means they did not move at all.
- **Nothing may depend on hover.** There is no hover on a touch screen; a
  hover-only affordance is invisible.
- **Touch targets want to be ~44px or more**, and a drag must not turn into
  the page scrolling underneath it.
- **Test it on a touch device before calling it done.** Emulating a coarse
  pointer catches almost everything; §7 has the harness.

Chromebooks and laptops are still used, so a keyboard must keep working — the
touch answer is *as well as*, never *instead of*.

## 3. Where it lives and how to change it

Everything is on the Mac at:

```
/Users/l.clark/Desktop/claude_auto/investigate
```

Public repo: <https://github.com/aurabotproject-ctrl/bible_mysteries>

To ship a change:

```bash
cd /Users/l.clark/Desktop/claude_auto/investigate
./push.sh "what changed"
```

`push.sh` runs `src/build.py`, then `git add -A`, commit, push. **Never edit
anything in `dist/`, `single/`, `standalone/` or the root `index.html`** — the
build rewrites all of them from `src/`. Edit `src/` and rebuild.

Git auth is a fine-grained PAT read by a `credential.helper` shell function in
`.git/config`, which tries `~/Desktop/claude_auto/github-token.txt` and then
the sandbox mount path, so the same repo pushes from a Terminal or from a
Claude session. The token file lives **outside the repo**. Do not open it,
print it, or paste it into a chat.

## 4. The four build outputs

`python3 src/build.py` writes all four from the same source:

| Output | What it is | Notes |
|---|---|---|
| `dist/` | **the deploy build** | `index.html` ~259 KB, plus one `.js` per case fetched on demand, plus `images/` and `bible.json`. Upload the *contents* of `dist/` to the repo root. Stays small as cases are added. |
| `single/<case>.html` | one self-contained file per case | 4–6 MB. Hand out, email, USB stick. Works offline with no other files. |
| `standalone/index.html` | the whole shelf in one file | ~54 MB. Gitignored — local use only. |
| `index.html` (root) | the front door | Redirects to `dist/`, falls back to `standalone/`. Carries the build stamp. |

Not in the public repo (see `.gitignore`): `docs/` and `print/` — **they contain
every lock code and answer key** — plus `single/`, `standalone/`, `_to_delete/`
and the raw PNGs under `tobuild/`.

## 5. Source layout

```
src/
  build.py            the whole build
  part_style.html     main stylesheet + <title>
  part_css_extra.css  everything added since: strings, reader, tours, sign, tint, JM-01
  part_shell.html     HTML skeleton, including the top bar
  part_assets.js      SVG plates and every case's poster art
  part_registry.js    case stubs, lazy loader, reading-level merge
  part_bible.js       Bible reader + reference auto-linker
  part_print.js       paper edition, certificates, folder pack
  part_engine.js      desk, locks, pinboard, strings, crossword, saves (~1650 lines)
  part_invite.js      JM-01 only — the invitation, welcome, certificate, note
  part_caseN.js       one per case
  part_caseN.easy.js  easy reading-level overlay for that case
  prompts.py          writes the image-prompt sheets into tobuild/
  gridgen.py          crossword grid generator
  split4.py           cuts a 2x2 contact sheet into separate plates
  tools/patch_touch.py  adds touch controls to a walk-in experience (§8)
```

Case file → case id (the numbering is historical, not sequential):

| File | Case | | File | Case |
|---|---|---|---|---|
| `part_case0.js` | JM-01 The Ransom | | `part_case9.js` | JM-06 The Walls |
| `part_case1.js` | JM-33 The Empty Tomb | | `part_case10.js` | JM-09 The Mouldy Bread |
| `part_case2.js` | JM-47 The Leak | | `part_case11.js` | JM-10 The Ten Blows |
| `part_case3.js` | JM-19 The Broken Riddle | | `part_case12.js` | JM-11 The Cart |
| `part_case4.js` | JM-08 The Stolen Plunder | | `part_case13.js` | JM-13 The Twelve Reports |
| `part_case5.js` | JM-02 The Missing Boy | | `part_case14.js` | JM-14 The Crossing |
| `part_case6.js` | JM-03 The Bush | | `part_case15.js` | JM-15 The Witnesses |
| `part_case7.js` | JM-04 The Judgment | | `part_case16.js` | JM-16 The Bread on the Ground |
| `part_case8.js` | JM-05 The Writing on the Wall | | `part_case18.js` | JM-18 Carmel |
| | | | `part_case20.js` | JM-20 The Rock at Meribah |

**Adding a case means touching `build.py` in three places**: `CASE_FILES`,
`NAMES` (its image names) and, if it has an easy pack, `EASY_FILES`.

`tobuild/` holds 47 folders — one per case, each with an `image-prompts.md`
carrying the ready-to-paste art prompts for that case. 28 are designed but not
yet built.

## 6. How a case is put together

A case is one big object: `items` (the documents on the desk), `theories` (the
pinboard — each names the single item that closes it), `locks` (two, each with
exactly **two** hints), `verdicts`, `correct`, `debrief`, `teacher`, plus one
mechanic. `stage` on an item controls when it appears: 0 from the start, 1 after
lock one, 2 after lock two.

Reusable mechanics, all in `part_engine.js`:

- **matrix** — a grid the student fills in: hypothesis table, testimony grid,
  object study, document comparison. The workhorse.
- **crossword** — answers are words from the documents; numbered squares spell
  the lock-two keyword. A case may override the top-bar label with
  `crossword.button`. Keep every answer inside the documents available at the
  stage the student reaches it: an answer that only appears in a stage-2 card
  makes the sheet unsolvable, because the sheet is how lock two opens.
- **elimination ladder**
- **balance scales**

## 7. Conventions that will bite you if you don't know them

**Reading levels.** Every case is written once at *medium*. An easy pack
(`part_caseN.easy.js`) is **wording only**, keyed by the same ids, merged over
an untouched deep clone at load. Ids, lock codes, keywords, matrix `truth`
cells, ladder options and scales targets are identical at both levels — a
mechanical checker enforces this. Easy packs exist for the first ten cases on
the shelf plus JM-20; **no more are planned** (deliberate: easy trains them up,
then they work harder).

> An easy `body` replaces the medium `body` **outright**. Add a plate or an
> element to a medium item and you must add it to the easy version too, or it
> silently vanishes for easy readers.

**Artwork and labels.** AI art is generated with **blank** plaques. Labels are
measured to each plaque afterwards and typeset as real SVG `<text>` over the
JPEG, using `textLength` + `lengthAdjust="spacingAndGlyphs"`. That is why they
stay crisp at any zoom and can be re-lettered (te reo, say) without regenerating
art. House pattern: `font-family:'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif`,
bold label in `#4a3520`, italic sub-line in `#7d4a24`. One type size per plate.

**Image files may be `.jpg` or `.png`.** `build.py` looks for either and picks
whichever exists (`img_ext()`), so a name in `NAMES` carries no extension. Use a
JPEG for photographs and plates; keep PNG only where alpha matters, as the wax
seal does. Two files with the same stem and different extensions is a mistake
waiting to happen — there is only ever one.

**The certificate prints landscape, on its own page.** `@page cert{size:A4
landscape}` plus `page:cert` on `.pp-cert` — a *named page* is the only way to
mix orientations in one document, and Chromium honours it with
`preferCSSPageSize`. Two traps, both already paid for: give `.pp-cert .cert` a
fixed `height` inside the 186 mm short edge (a `min-height` that overshoots
silently spills onto a second, blank landscape page), and do **not** add
`break-before:page` — `.pp-page` already breaks after, so a second forced break
opens an empty page. Inside `.cert-in` the children are flex items, so an empty
ruled line like `.cert-names` needs a real `width`, not `max-width`, or it
shrinks to nothing and the rule disappears.

**Nothing in a printable may span two pages.** Cutting is fine; taping two
halves together is not. Every cut-out carries `break-inside:avoid`, which the
browser can only honour if the piece actually fits one page — so the audit is
that no `.pp-card:not(.sheet)`, `.pp-theory`, `.pp-env`, `.pp-slip`, `.pp-tag`,
`.pp-step`, `.pp-spine`, `.pp-ldr`, `table.ppmx` or `.ppcw` exceeds 1039 px
(275 mm) tall under `emulateMedia({media:'print'})` at A4 content width. All 19
cases were clean as of this pass; re-run it after adding a long document.
`.pp-card.sheet` is the deliberate exception — a read-aloud sheet may flow.

The house style prompt block is already folded into every `image-prompts.md`.
Say "no text" twice, and for ledger plates add "illegible scribble" — models
badly want to write real words on an account page.

**One photograph, several plates.** JM-04 needs the same picture of two blank
sheets four times over, with different words written on it each time (each
woman's statement, at each reading level). Don't copy the plate - derive it:

```js
SVG.j04sheetsA = SVG.j04sheets.replace('</svg>', `…<text …>…</text></svg>`);
```

`__IMG_j04sheets__` then appears once in the source, so `build.py` inlines the
JPEG once and the variants cost only their own text. Worth remembering: the
naive version would have put four copies of a 221 KB photograph into the
offline handout.

**A written plate needs an easy twin.** The reading-level merge does not touch
`SVG.*`, so a plate carrying prose has to be generated at both levels
(`j04sheetsA` / `j04sheetsAe`) or the paper and the transcript beneath it
disagree for easy readers.

**Where an SVG plate is defined matters.** If a plate's `SVG.x` lives in the
shared `part_assets.js`, `build.py` has to know the case wants it, or the
offline single-file build ships a blank pixel. `build.py` now scans each case
source for both `__IMG_x__` **and** `SVG.x`, so this works — but it is the kind
of thing that fails silently.

**CSS goes before the final `</style>` in `part_css_extra.css`.** `build.py`
hard-fails otherwise.

**`.chip` is not yours.** It also matches the top-bar "Wrong" counter. Scope new
rules to `.chips .chip`. Chip state rules (`used`, `reading`, `sel`) must win
over decoration, so put decoration *earlier* in the file, not later.

**The desk is bigger than the window.** `#stage` is the window; `#desk` is a
table `--tbl` (currently **2**) windows wide and 2 tall - four times the area -
panned and scaled inside it by `applyView()`. Card positions are still
percentages, but now of *the table*, so at 100% zoom, centred, the window shows
exactly table% 25-75 and the layout is pixel-for-pixel what it always was.
`tmap()` folds an old one-window percentage into that middle window;
`migrateTable()` runs it once per case over a save made before the table grew
and marks it `CS.tv = 2`. Anything that gives a card a default position must go
through `tmap(item.x)`. Two things to remember: **`#strings` now lives inside
`#desk`** so it is scaled with it (which is why `desk.innerHTML = ""` is gone -
use `deskCards()`), and anything measured with `getBoundingClientRect()` on the
desk is in *scaled* pixels, so a table coordinate needs `/ view.z`. Zoom floors
at whole-table and ceilings at 140%; it is remembered per case in `CS.view` as
the table percentage under the middle of the window, so a rotation keeps it.
Bare wood drags the table, two fingers pinch it, the wheel zooms, and `+ - 0`
do it from a keyboard.

**Cache.** Every build stamps a version into the front door and the page, so a
stale tab is forced to refetch. If something "has disappeared", it is almost
always an un-refreshed tab — check the build stamp bottom-right before hunting.

**The top bar wraps below 1180px.** It used to be one non-wrapping row and the
controls on the right ran off the edge unreachable. Anything added to it should
be checked from 1600px down to 400px.

## 8. Walk-in experiences (the tours)

A card declares `tour:{href:"../tours/x.html", label:"…", note:"…"}`. The deploy
build fetches the file on demand; the offline builds inline it into
`window.__TOURS__` and open it in an iframe with `srcdoc`. Adding one needs
**nothing** in `build.py` — drop a self-contained HTML file into `tours/` and
point a card at it. A tour survives the easy-level merge untouched, so it needs
nothing in the easy pack.

Eight exist: `jerusalem-ad33.html` (JM-33), `aram-campaign.html` (JM-47),
`timnah-road.html` (JM-19), `temple-courts.html` (JM-02),
`jericho-spoil.html` (JM-08), `book-of-life.html` (JM-01),
`horeb-walk.html` (JM-03), `house-investigation.html` (JM-04, *Plan of the
House*) and `writing-on-the-wall.html` (JM-05, *The Wall Report* — pick up the
lampstand, carry it across the plaster, and the four words light as you go).

**A tour that brings its own touch controls still needs reading.**
`house-investigation.html` arrived with a joystick, a look-drag and an Examine
button already built, so it goes in `patch_touch.py`'s `SKIP` set beside
`jerusalem-ad33.html` — the pad would only duplicate what it has. What it did
still need was the wording: every standing hint named a keyboard and a mouse,
and the Examine disc sat on top of its own Case Notes button. Both are fixed in
a clearly marked block appended at the end of the file rather than edited into
the scene, so a new version of the scene stays easy to diff. Check those two
things on every handover, whatever touch layer it claims to have.

**Never make the mouse click its way back into look mode.** The same tour
released pointer lock every time an exhibit opened, so reading one and closing
it left the mouse out of look mode and cost a click to get back in — once per
exhibit, eight exhibits a visit. A second marked block holds the lock through
`openPanel()` (it swaps `document.exitPointerLock` for a no-op for the length of
the call), makes a second press of **E** close the panel, and freezes the look
with a capturing `mousemove` listener so the view does not swing about behind
what is being read. The pattern is worth copying: a walk-in scene should take
the lock once, at the door, and keep it until the visitor presses Esc.

**A walked tour needs more than the pad.** `horeb-walk.html` arrived using
pointer lock for mouse-look, which does not exist on iOS — so the intro card
could never be dismissed and the tour was unusable on the device it is meant
for. Any tour built that way needs three things adding inside its own script,
not just the pad: a `COARSE` check that skips `requestPointerLock`, a first tap
that opens the scene directly, and a one-finger drag on the canvas that turns
`yaw`/`pitch`. Rewrite its intro card too — the pad only rewrites the words
"arrow keys", so "move the mouse" and "click anywhere" survive it.

**Match the three revision.** Bundle the revision the scene was written
against, not the newest. `horeb-walk.html` is tuned for r128; r152 turned
colour management on by default and r155 changed light intensities, so a newer
build would quietly relight the whole scene. r128 ships a UMD `three.min.js`
that can simply be inlined — no esbuild needed.

**Weigh a tour before you wire it in.** The others are 0.5-1.9 MB. A scene
handed over as a 30 MB file is almost always eight AI textures saved as
full-size PNG: they sit on 3D surfaces a metre away, so 1024px JPEG at q82
costs nothing visible and took `book-of-life.html` from 30 MB to 2.5 MB. Keep
any texture with real alpha as a PNG (its seal does), give back the resolution
of the one texture a student leans in to read (its ledger spread), and remember
every byte is inlined into that case's offline handout.

A card that declares one is drawn on faintly coloured paper — `renderDesk` adds
`.walkin` to the card and to its pinboard chip — so a student can see at a
glance which cards have something to walk into. Which colour is the teacher's
choice: a **Tint** switch in the top bar offers red (the default), blue, green
and yellow, saved per device under `bib-walkin-tint`. Each colour is one block
of CSS variables on `:root[data-tint="…"]`. Nothing names a case or a card: the
tint follows the `tour` key.

### Two checks every new tour has to pass

**1. It must be genuinely self-contained.** The offline builds inline it into a
`srcdoc` iframe and a handout may be opened from a USB stick with no network at
all, so a CDN `<script src>` or an importmap pointing at unpkg leaves a blank
page — silently, with no error. `jericho-spoil.html` needed three.js: it was
bundled in with esbuild (`--bundle --format=iife --minify`) and the importmap
dropped. Grep any new tour for `http` before wiring it up.

**2. It must be usable with a finger.** Run it through:

```bash
python3 src/tools/patch_touch.py tours/<new-tour>.html
```

That script is idempotent and does three things: adds a viewport meta (without
one an iPad renders at desktop width and zooms out), adds page-level touch CSS
(no rubber-band scroll, no long-press callout, `touch-action:none` on the
canvas/stage), and — for a tour that moves on the arrow keys — adds an
on-screen D-pad at bottom centre. The pad knows nothing about the tour it sits
on: it dispatches the very same `keydown`/`keyup` the tour already listens for,
so it works whatever the movement code looks like and the keyboard still works
too. It also rewrites any "use the arrow keys" text on a touch device.

The pad appears only under `@media (pointer:coarse)`, so a laptop sees nothing.
Bottom centre because every one of these tours keeps its legend in a bottom
corner. Two exceptions are encoded in the script: `jericho-spoil.html` is
dragged rather than walked so it gets no pad, and `jerusalem-ad33.html` already
carries a purpose-built touch layer of its own (joystick, look-drag, run and map
buttons) and is skipped entirely.

## 9. JM-01 — The Ransom (handle with care)

The salvation case, and the one the whole archive is pointed at. Same machinery
as the others — a debt opened in a garden, a ledger where every payment ever
offered came back *insufficient*, and an account struck through. Its second lock
opens on **The Clerk's Sheet**, a crossword whose five numbered squares spell
the keyword. (It used to be a payment-test grid; that was confusing in class and
was replaced.) It is also the only case with `gold:true` in its header, which
gives it a gilt trim on the shelf.

On the debrief there is a door: *one question, and it is yours.* Three answers —
yes, not now, I already have. "Yes" walks four steps (Admit, Believe, Receive,
Tell), a prayer page that says plainly the words are not magic, a welcome
screen, a dated certificate and a note they can give to somebody.

**Safeguarding, and it is not negotiable:** the decision is written to
`localStorage` on that one device and nowhere else. No list, no export, nothing
a teacher can look up, nothing transmitted. "Not now" saves nothing at all. The
teacher notes explain the framing to use out loud. Keep it that way.

Its art: `poster_jm01`, `j01hill` (The Payment), `j01gate` (The Charge),
`j01ledger` (The Account), `j01paid` (The Word Written), `j01cert` (the
certificate seal). The label wording is listed at the bottom of
`tobuild/JM-01 — THE RANSOM/image-prompts.md`.

## 10. Working notes for the assistant

- The Mac is reached over the device bridge. **Each `device_bash` call is its
  own fresh sandbox — background jobs do not survive between calls.** Long
  pushes run in the foreground with a raised timeout.
- Do the work on the Mac where the files are. Only stage a file into the cloud
  container when you need to *look* at an image, or need a library that is not
  on the Mac (esbuild and PIL, for instance, live there).
- **Deleting is not permitted on the Mac by default.** `build.py` no longer
  needs it, but git does — if a commit leaves `.git/index.lock` behind, every
  later git command fails until it is removed, which needs a delete-permission
  request.
- **Verify, don't trust.** The habit that has caught nearly every bug on this
  project: a headless-Chromium test that drives the real interface end to end.
  The test rig lives in the cloud container, which is ephemeral — a new session
  starts without it. Rebuilding it is quick: serve the folder
  (`python3 -m http.server 8899`), drive it with Playwright against
  `/opt/pw-browsers/chromium`, and assert on real state (`C`, `CS`, the DOM),
  not on screenshots alone. Always listen for `pageerror` and 4xx responses.
- **Touch testing.** A Playwright context with
  `{hasTouch:true, isMobile:true, viewport:{width:1024,height:768}}` reports a
  coarse pointer, which is what the pad and the CSS key off. Use
  `page.touchscreen.tap(x, y)` for real taps — `element.click()` does **not**
  produce a `pointerup`, and cards open on `pointerup`, so a click-based test
  will report a false failure. For 3D scenes launch Chromium with
  `--use-gl=swiftshader --enable-unsafe-swiftshader`.
- Test-rig drift is a recurring false alarm: several scripts pick a case by
  poster **index**, and adding a case to the front of the shelf shifts every
  one. If a test suddenly fails on the wrong case, check the index first.
- `docs/chronicle-society-production-guide.md` (1,484 lines, local only) is the
  design bible: every case's design, lock codes and answers.
  `docs/case-builder.md` is the how-to for building a new one.

## 11. Recent work, newest first

- The lampstand and the plaster on JM-05's *The Wall Report* - carry the lamp
  across the wall and MENE, MENE, TEKEL, PARSIN lights a word at a time.

- The house walk holds mouse-look through an exhibit: E opens it, E closes it,
  and there is no clicking back in.

- A walk through the two-room house on JM-04's *Plan of the House* - one door,
  both mats, both cradles, eight exhibits to examine.

- A new wax seal (`images/bibseal.png`, `SVG.finalSeal`) replaces the old
  B.I.B. stamp on the certificate, and the certificate is now a full A4
  landscape page of its own. Every printable was audited for cut-outs that
  cross a page break; none do.

- JM-04 - each woman's statement is now written onto her own sheet, in the
  registrar's hand, at both reading levels. The Second Woman's card had no
  plate at all before.

- The walk up to Horeb on JM-03's *The Mountain and the Grazing Grounds* - dusk
  on the mountain road, sheep grazing in the valley below, and a bush that
  burns without being consumed. Three r128 inlined, and a touch layer added so
  it works on an iPad at all.

- The Book of Life on JM-01's *The Account, As Found* - a table you can turn
  round, with the ledger, the four payments that came back, and the seal.
  Bundled and recompressed from 30 MB to 2.5 MB.
- A tap on a card used to send a second, ghost click into the reader that had
  just opened on top of it. On an iPad that meant a plate flew open over the
  document, or the backdrop was hit and the reader shut again before a word was
  read - some cards simply would not open. `eatNextClick()` swallows it.

- The desk zooms and pans. The table is four times the area it was, so on an
  iPad the cards can actually be spread out instead of stacked; zoomed out you
  see the whole table, zoomed in you can read a card. Bare wood drags it, two
  fingers pinch it, and the zoom cluster sits bottom right.
- The walk-in experiences work on an iPad: an on-screen pad for the three that
  were keyboard-only, touch CSS and a viewport meta for all of them, and a
  guard on the desk's pointer capture so an interrupted touch cannot leave a
  card stuck.
- A Tint switch in the top bar picks the walk-in card colour; red is the
  default. The top bar now wraps below 1180px, which also rescued the reading
  switch and the menu.
- Cards carrying a walk-in experience are drawn on faintly coloured paper.
- JM-08 — The Merchant's Table, a 3D table of Achan's spoil, on the treasury card.
- JM-01 — the payment-test grid replaced by a crossword, The Clerk's Sheet.
- A gilt trim on The Ransom's shelf card.
- JM-02 — the temple courts walk-in map.
- JM-19 — the Zorah-to-Timnah walk-in map.
- JM-01 — the six generated plates in, plaques measured and labelled.
- JM-01 built from scratch, medium and easy, with the invitation.
- Strikes: five wrong answers fails the case. Two hints per lock.
- Pin and string on the desk; the pinboard evidence reader.

## 12. What is worth doing next

- **More cases.** 28 designed folders sit in `tobuild/` with their prompts
  already written. That is the main road.
- **README refresh.** It still describes eighteen cases and does not mention
  strikes, reading levels, tours, the tint, or JM-01.
- **Production guide.** Same gaps.
- Not planned: any more easy packs.
