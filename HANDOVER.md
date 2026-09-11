# B.I.B. — handover notes

*Paste this at the start of a new chat. It is everything a fresh session needs
to pick the project up without re-reading the whole archive.*

Last updated: 10 September 2026, after wiring the real artwork into JM-01 and
adding the Timnah walk-in map to JM-19.

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

## 2. Where it lives and how to change it

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

Git auth is a fine-grained PAT read by a `credential.helper` shell function.
The token file lives at `~/Desktop/claude_auto/github-token.txt`, **outside the
repo**. Do not open it, print it, or paste it into a chat.

## 3. The four build outputs

`python3 src/build.py` writes all four from the same source:

| Output | What it is | Notes |
|---|---|---|
| `dist/` | **the deploy build** | `index.html` ~251 KB, plus one `.js` per case fetched on demand, plus `images/` and `bible.json`. Upload the *contents* of `dist/` to the repo root. Stays small as cases are added. |
| `single/<case>.html` | one self-contained file per case | 3–6 MB. Hand out, email, USB stick. Works offline with no other files. |
| `standalone/index.html` | the whole shelf in one file | ~52 MB. Gitignored — local use only. |
| `index.html` (root) | the front door | Redirects to `dist/`, falls back to `standalone/`. Carries the build stamp. |

Not in the public repo (see `.gitignore`): `docs/` and `print/` — **they contain
every lock code and answer key** — plus `single/`, `standalone/`, `_to_delete/`
and the raw PNGs under `tobuild/`.

## 4. Source layout

```
src/
  build.py            the whole build
  part_style.html     main stylesheet + <title>
  part_css_extra.css  everything added since: strings, reader, tours, sign, JM-01
  part_shell.html     HTML skeleton
  part_assets.js      SVG plates and every case's poster art
  part_registry.js    case stubs, lazy loader, reading-level merge
  part_bible.js       Bible reader + reference auto-linker
  part_print.js       paper edition, certificates, folder pack
  part_engine.js      desk, locks, pinboard, strings, crossword, saves (~1600 lines)
  part_invite.js      JM-01 only — the invitation, welcome, certificate, note
  part_caseN.js       one per case
  part_caseN.easy.js  easy reading-level overlay for that case
  prompts.py          writes the image-prompt sheets into tobuild/
  gridgen.py          crossword grid generator
  split4.py           cuts a 2×2 contact sheet into separate plates
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
carrying the ready-to-paste art prompts for that case. 28 of them are designed
but not yet built.

## 5. How a case is put together

A case is one big object: `items` (the documents on the desk), `theories` (the
pinboard — each names the single item that closes it), `locks` (two, each with
exactly **two** hints), `verdicts`, `correct`, `debrief`, `teacher`, plus one
mechanic. `stage` on an item controls when it appears: 0 from the start, 1 after
lock one, 2 after lock two.

Reusable mechanics, all in `part_engine.js`:

- **matrix** — the workhorse. A grid the student fills in: hypothesis table,
  testimony grid, object study, document comparison, payment test. Used by most
  cases.
- **crossword** — answers are words from the documents; numbered squares spell
  the lock-two keyword. A case may override the top-bar label with
  `crossword.button`. Keep every answer inside the documents available at the
  stage the student reaches it: an answer that only appears in a stage-2 card
  makes the sheet unsolvable, because the sheet is how lock two opens.
- **elimination ladder**
- **balance scales**

## 6. Conventions that will bite you if you don't know them

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

The house style prompt block is already folded into every `image-prompts.md`.
Say "no text" twice, and for ledger plates add "illegible scribble" — models
badly want to write real words on an account page.

**Where an SVG plate is defined matters.** If a plate's `SVG.x` lives in the
shared `part_assets.js`, `build.py` has to know the case wants it, or the
offline single-file build ships a blank pixel. `build.py` now scans each case
source for both `__IMG_x__` **and** `SVG.x`, so this works — but it is the kind
of thing that fails silently.

**CSS goes before the final `</style>` in `part_css_extra.css`.** `build.py`
hard-fails otherwise.

**`.chip` is not yours.** It also matches the top-bar "Wrong" counter. Scope new
rules to `.chips .chip`.

**Cache.** Every build stamps a version into the front door and the page, so a
stale tab is forced to refetch. If something "has disappeared", it is almost
always an un-refreshed tab — check the build stamp bottom-right before hunting.

**A gilt case.** A case can ask for a gold trim on the shelf with `gold:true`
in its header. `build.py` copies the flag into the shelf stub (the shelf draws
posters before any case is fetched) and `renderShelf` adds `.gold`. Only JM-01
uses it, and it should stay that way — the trim means *this one is different*,
and two of them means nothing.

**Walk-in experiences (tours).** A card declares
`tour:{href:"../tours/x.html", label:"…", note:"…"}`. The deploy build fetches
the file on demand; the offline builds inline it into `window.__TOURS__` and
open it in an iframe with `srcdoc`. Adding one needs **nothing** in `build.py` —
drop a self-contained HTML file into `tours/` and point a card at it. Four exist:
`jerusalem-ad33.html` (JM-33), `aram-campaign.html` (JM-47),
`timnah-road.html` (JM-19) and `temple-courts.html` (JM-02). A tour survives
the easy-level merge untouched, so it needs nothing in the easy pack.

## 7. JM-01 — The Ransom (handle with care)

The salvation case, and the one the whole archive is pointed at. Same machinery
as the others — a debt opened in a garden, a ledger where every payment ever
offered came back *insufficient*, a payment test whose "paid by someone who owes
nothing" column is empty, and an account struck through.

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
certificate seal). All labelled; the label wording is listed at the bottom of
`tobuild/JM-01 — THE RANSOM/image-prompts.md`.

## 8. Recent work, newest first

- JM-01 — the payment-test grid replaced by a crossword, The Clerk's Sheet.
  The matrix was confusing in class. Same keyword, same lock, same documents.
- JM-02 — the temple courts walk-in map on *Plan of the Temple Courts*.
- JM-01 — a gold trim on its shelf card, driven by a `gold:true` header flag.
- JM-19 — the Zorah-to-Timnah interactive map wired to *The Road Down to Timnah*.
- JM-01 — the six generated plates in, plaques measured and labelled, mirrored
  into the easy pack; the certificate seal replaced the typeset cross; print
  window given a `<base href>` so a printed certificate keeps its seal.
- JM-01 built from scratch, medium and easy, with the invitation.
- Walk-in tours inlined for offline handouts.
- The banner sign artwork, bleeding to the screen edges with a floor size.
- Pinboard evidence reader — tap a chip, read the whole card below.
- Pin and string on the desk, with cut-with-scissors.
- Strikes: five wrong answers fails the case. Two hints per lock (the third was
  removed — it gave too much away).
- Easy packs completed for the first ten cases on the shelf.

## 9. Working notes for the assistant

- The Mac is reached over the device bridge. **Each `device_bash` call is its
  own fresh sandbox — background jobs do not survive between calls.** Long
  pushes run in the foreground with a raised timeout.
- Do the work on the Mac where the files are. Only stage a file into the cloud
  container when you need to *look* at an image, or need a library that is not
  on the Mac.
- **Verify, don't trust.** The habit that has caught nearly every bug on this
  project: a headless-Chromium test that drives the real interface end to end.
  The test rig lives in the cloud container, which is ephemeral — a new session
  starts without it. Rebuilding it is quick: serve the folder
  (`python3 -m http.server`), drive it with Playwright against
  `/opt/pw-browsers/chromium`, and assert on real state (`C`, `CS`, the DOM),
  not on screenshots alone. Always listen for `pageerror` and 4xx responses.
- Test-rig drift is a recurring false alarm: several scripts pick a case by
  poster **index**, and adding a case to the front of the shelf shifts every
  one. If a test suddenly fails on the wrong case, check the index first.
- `docs/chronicle-society-production-guide.md` (1,484 lines, local only) is the
  design bible: every case's design, lock codes and answers. `docs/case-builder.md`
  is the how-to for building a new one.

## 10. What is worth doing next

- **More cases.** 28 designed folders sit in `tobuild/` with their prompts
  already written. That is the main road.
- **README refresh.** It still describes eighteen cases and does not mention
  strikes, reading levels, tours or JM-01.
- **Production guide.** Same gaps.
- Not planned: any more easy packs.
