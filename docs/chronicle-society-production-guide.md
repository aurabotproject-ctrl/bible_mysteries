# The Chronicle Society — Production Guide

**Bible mystery-box investigations for Years 7–8.**
Three cases built. Forty-seven designed and ready to build. Fifty in all — a year's worth.

This file exists so that any future session can pick the project up cold. It carries the architecture, the house style, the prompt templates, and the full design of all forty-seven cases still to come. Hand this file over, upload the images, and the work continues without re-deciding anything.

---

## 1 · How we work — the loop

Building one case is four passes. Each takes one exchange.

1. **Design.** The case is already designed in §11 or §12 below: the premise, the five explanations, the decisive evidence for each, both lock codes, and any special mechanic. Adjust if you want; otherwise it's settled.
2. **Write.** Claude writes the case as a `part_caseN.js` file — the documents, the theories, the locks, the debrief, the teacher notes — and wires it into the build.
3. **Illustrate.** You paste the prompts from this file into ChatGPT, one per image, and upload the results. Claude measures the blank label plaques, typesets the labels as live SVG text, and embeds the images.
4. **Test and ship.** Claude plays the case end to end in a headless browser, checks both locks, the board and the accusation, rebuilds both deliverables and renders the paper edition to PDF.

**The one rule that makes this work:** images are always generated with **blank label plaques and no text of any kind**. Claude adds every label afterwards as real text. Image models cannot spell reliably at small sizes, and students read these labels under time pressure on Chromebooks.

---

## 2 · Where everything lives

The project lives on the Mac at **`~/Desktop/claude_auto/investigate`**. That folder is the source of truth — build it, deploy from it, and make every change there.

```
investigate/
├── README.md
├── bible.json                   World English Bible, 31,103 verses (public domain)
├── index.html                   generated: front door — redirects to dist/
├── dist/                        generated: DEPLOY THIS
│   ├── index.html               the app (~146 KB — does not grow with cases)
│   ├── cases/<id>.js            one file per case, fetched when it is opened
│   ├── bible.json
│   └── images/
├── standalone/                  generated: alternative deploy / offline copy
│   └── index.html               single self-contained file, everything inlined
├── tobuild/                     one folder per unbuilt case
│   └── JM-xx — TITLE/           its artwork, plus a generated image-prompts.md
├── images/                      source artwork (optimised JPEGs)
├── print/                       ready-to-print paper editions (PDF)
├── docs/                        this guide + the case builder prompt
└── src/
    ├── part_style.html          main stylesheet + <title>
    ├── part_css_extra.css       poster board, crossword, Bible, answer sheet, paper edition
    ├── part_shell.html          HTML skeleton — top bar, desk, board, notes
    ├── part_assets.js           SVG plates and every case's poster art (__IMG_name__)
    ├── part_registry.js         case stubs + the lazy loader
    ├── part_bible.js            Bible reader, reference parser and auto-linker
    ├── part_print.js            paper edition, certificates, folder pack
    ├── part_case1.js            JM-33 The Empty Tomb
    ├── part_case2.js            JM-47 The Leak
    ├── part_case3.js            JM-19 The Broken Riddle
    ├── part_case4.js            JM-08 The Stolen Plunder
    ├── part_engine.js           desk, locks, pinboard, crossword, accusation, saves
    ├── build.py                 the build
    ├── prompts.py               writes the prompt sheets into tobuild/
    ├── gridgen.py               crossword grid generator
    └── single/<case>.html           generated: body only, for publishing as an artifact
```

**Build — one command, from the `investigate` folder:**

```bash
python3 src/build.py
```

It assembles the parts and writes both deliverables:

- **`dist/`** — `index.html` (~146 KB), `cases/<id>.js`, `bible.json` and `images/`. **Recommended for GitHub Pages:** upload everything *inside* `dist/` to the repo root. The shelf runs on a compiled-in manifest of case *stubs* (code, title, period, colour, poster, teaser); the case itself is fetched only when a student opens it, so the page stays the same size whether there are four cases or fifty. This build needs a web address — opened straight off the disk the case files will not load.
- **`standalone/`** — `index.html` with everything inlined, including the Bible as a compressed blob. One file, nothing beside it: upload just that file, or open it straight off a USB stick with no internet at all. About 7.5 MB, so the first load is slow.

Both builds are named `index.html`, so GitHub Pages serves either one straight from the repo root (**Settings → Pages → Deploy from a branch → main → / (root)**). Both also carry a `.nojekyll` file so GitHub skips Jekyll. **Do not publish the whole `investigate` folder** — `docs/` and `print/` contain the answer keys and every lock code.

**`python3 src/prompts.py`** writes an `image-prompts.md` into every folder under `tobuild/`: the poster and every plate for that case, complete and paste-ready, with the file name to save each one under. Cases 4–10 use the full prompts written out in section 11; cases 11–50 are assembled from their **Plates** brief in section 12 and the templates in section 5, so a short brief there becomes a finished prompt here. That means artwork can be generated months before the case is written — fill a folder, and the case can be built straight from it. The script overwrites the sheets and leaves everything else in the folder alone, so improving a prompt in the guide and re-running is the way to fix one.

**`docs/case-builder.md`** is a separate, self-contained prompt: paste it into any Claude chat with a topic, a unit plan or a set of readings, and it builds a case on that subject in this format — including for subjects that have nothing to do with the Bible. Useful for testing a unit of work.

**The root `index.html`** is generated too: a front door at the top of the folder that sends the browser on to `dist/`. It exists because GitHub Pages needs an `index.html` at the root of whatever is published, and most people push the whole `investigate` folder.

**Adding a case:** write `src/part_caseN.js` ending with `registerCase(CASE_JMxx);`, add it to `CASE_FILES` and any new artwork to `NAMES` in `src/build.py`, and put the case's **poster** SVG in `part_assets.js` (not in the case file — the shelf draws every poster before any case is loaded). Nothing in `part_engine.js` needs touching any more: the shelf is built from the manifest the build compiles. Rebuild, and the build will tell you if any of that has been missed. The poster board, paper edition, certificate and answer sheet all generate themselves from the case object.

## 3 · The shape of a case

Every case is one object with this shape. The engine reads it; nothing else needs changing.

```js
const CASE_JMxx = {
  id, code, title, period, colour, poster,     // poster = key in SVG
  teaser,          // 2 sentences, shown on the poster board
  introSub,        // one line under the title on the case file
  items,           // the documents (stage 0 / 1 / 2)
  theories,        // the five explanations + the item that kills each
  locks,           // two locks
  verdicts,        // six accusation options
  correct,         // id of the true one
  boardTitle, boardIntro, accusationIntro,
  debrief:{ lead, questions[], refs },
  teacher:{ answers, pairs, conclusion, prompts, extra? },
  crossword?       // optional — see §5
}
```

**Documents** carry `stage` (0 = in the file from the start, 1 = released by lock 1, 2 = by lock 2), a `kind` label, `title`, `sub`, `prev` (the teaser on the desk card), `body` (HTML), and `x`/`y`/`rot`/`w` for where they land on the desk. Add `thumb:"svgKey"` for a picture. Add `notEvidence:true` to keep something off the pinboard (briefings and tools).

**The standing structure**, which all ten cases share:

- Read everything → four-digit lock → more evidence → keyword lock → the rest of the evidence → pinboard → accusation → debrief.
- **Lock 1 is always four single-digit answers**, each from a *different* document, listed in order on the lock panel. At least one answer should be **zero** where the story allows — "he told nobody", "no seals were broken" — because that's the fact the case turns on and students assume the question is broken.
- **Lock 2 is always a keyword** that is written nowhere in the file. It is built by doing something: a cipher, a register, a crossword.
- **Three graduated hints per lock.** The third hint effectively gives it away. That's deliberate — nobody should be stuck at 40 minutes.
- **Five explanations, one decisive document each.** Not "supporting evidence" — the single item that makes that explanation impossible.
- **The sixth option is the answer**, and it is always the one that survives elimination rather than the one that sounds sensible.

---

## 4 · The house style — paste this into every image prompt

> **STYLE:** Hand-drawn antique illustration on aged cream parchment, in the manner of a 19th-century archaeological field plate. Sepia, ochre, tan and faded ink-brown palette with muted olive-green accents. Fine pen cross-hatching and light watercolour wash. Visible paper grain, foxing spots, softly worn deckled edges. No people unless asked for. Wide landscape format, 3:2.

**Rules that have proved to matter:**

- **Always 3:2 landscape**, except paper props photographed flat, which can be portrait or a wide strip.
- **"Absolutely no text, letters, numbers or writing anywhere in the image."** Say it every time. Say it twice for maps.
- **Blank label plaques**: *"Add N blank rectangular label plaques with thin dark borders and empty cream interiors, each connected by a fine leader line with a small dot to [what]."* Three or four is the reliable maximum. Beyond that, ask for no plaques at all and specify *"leave clear, uncluttered areas of blank parchment beside each feature."*
- **Posters** must read at about 250 px wide. Ask for "bold, simple composition that reads clearly at small size."
- **Paper props** (rosters, scraps, tablets) are generated **empty** and typeset afterwards. Never ask a model to write a document.
- Nothing gruesome. Where a case touches violence, the image shows the aftermath or the setting, never the act.

---

## 5 · Prompt templates

Nearly every plate is one of six shapes. Paste the **house style block** from §4, then the template, then the case's subject line from §8. This keeps fifty cases looking like one archive.

**T1 · SCENE** — posters and dramatic plates.
> [STYLE] A dramatic single image for a case poster. {SUBJECT}. No people. Absolutely no text, letters, numbers or writing anywhere. Bold, simple composition that reads clearly at small size. Wide landscape format, 3:2.

**T2 · SURVEY MAP** — country, routes, distances.
> [STYLE] An oblique bird's-eye survey map. {SUBJECT}. {PLAQUES, or: Leave clear, uncluttered areas of blank parchment beside each named feature.} Absolutely no text, letters, numbers, grid references or writing anywhere in the image.

**T3 · FLOOR PLAN** — rooms, buildings, who could be where.
> [STYLE] A precise overhead floor plan, walls drawn with hatched infill, fine dashed measurement lines with plain arrowheads. {SUBJECT}. {PLAQUES} Absolutely no text, letters, numbers or writing anywhere — plaques and measurement lines completely blank.

**T4 · OBJECT STUDY** — physical evidence, flat from above.
> [STYLE] A flat evidence study photographed from directly above on a dark wooden surface, warm raking lamplight. {SUBJECT}. {PLAQUES} Absolutely no text, letters, numbers, stamps, inscriptions or writing anywhere in the image.

**T5 · TECHNICAL PLATE** — how a thing worked, with measurements.
> [STYLE] A draughtsman's technical plate against blank parchment, fine dashed measurement lines with plain arrowheads. {SUBJECT}. {PLAQUES} Absolutely no text, letters, numbers or writing anywhere — plaques and all measurement lines completely blank.

**T6 · BLANK PAPER PROP** — rosters, registers, letters. Generated empty; Claude typesets the content.
> [STYLE, as a straight-on flat scan] {SUBJECT}, photographed flat from directly above, filling the frame. Completely blank — no text, letters, numbers, marks or writing of any kind.

**{PLAQUES}** is always: *Add N blank rectangular label plaques with thin dark borders and empty cream interiors, each connected by a fine leader line with a small dot: one to X, one to Y, one to Z.* Three or four is the reliable maximum.

## 6 · The mechanics available

**Standard.** Desk with draggable documents, magnifiable plates, two locks, elimination pinboard, accusation, debrief, printable answer sheet. Nothing to do — it comes free.

**Crossword** (built, used by JM-19). Add a `crossword` block to the case:

```js
crossword:{ title, blurb, W, H, hidden:"WORD",
  entries:[{n, d:"A"|"D", r, c, a:"ANSWER", q:"clue"}, ...],
  marks:[{i:1, r, c}, ...] }
```

Grids are generated by `gridgen.py` — put twelve answers and clues in its `WORDS` list and run it; it places them, validates the crossings, and prints the grid plus ready-made JS. Then pick six cells containing the letters of the hidden word, **each in a different answer**, so six separate clues must be right. The engine renders the grid, checks letters, strikes through solved clues, and fills a strip showing the hidden word as it emerges.

**Elimination ladder** (built, used by JM-08). Add a `ladder` block to the case:

```js
ladder:{ title, blurb, keyword:"ACHAN", strip:"…",
  rounds:[{n, field, doc, clue, options:[…], answer, wrong, after}, …],
  done:"…" }
```

Four rounds of narrowing, each settled by a named document rather than by guessing. Rounds unlock in order; a wrong option strikes itself out and prints that round's `wrong` line; the surviving name at the end is the keyword for lock 2. The engine renders it, the paper edition prints it as a tick-and-fill sheet, and the top-bar button appears once lock 1 is open. Cases with a `crossword` get 🧩 Riddle; cases with a `ladder` get ⚖ Enquiry.

**The matrix** (built, used by JM-02, JM-03, JM-04 and JM-06). One mechanic covering the search grid, the hypothesis table, the pattern chart, the testimony grid and the ledger. Add a `matrix` block:

```js
matrix:{ button:"🗺 Search grid", title, blurb, corner, verify, mark:"✔",
  cols:[{id, label, note}, …], rows:[{id, label, note}, …],
  truth:["rowid|colid", …],
  foot:{label, note, cells:{colid:"none", …}},   // optional comparison row
  note, reveal:{lead, answer:"TEMPLE", caption}, fromStage:1 }
```

The team transfers what a document says into a grid, and the shape that appears — a column ticked all the way down, a row of blanks, one square standing alone — is the keyword. Checking marks wrong cells with a cross and outlines missing ones; the keyword only appears when every square is right. It prints blank in the paper edition, and the top-bar button carries whatever label the case gives it.

**The balance scales** (built, used by JM-05). Add a `scales` block:

```js
scales:{ button:"⚖ The balance", title, blurb, unit:"shekels", unitOne:"shekel",
  stones:[{id, label, value}, …],
  rounds:[{n, word, meaning, target, prompt, note}, …],
  keyword:"WEIGHED", reveal:{lead, caption}, fromStage:1 }
```

Rounds unlock in order. The team adds stones from the tray until the pan matches the target; an SVG beam tilts by the difference and settles level when the arithmetic is right. Real number work — building 60 out of 30/20/10/5/2/1 stones is genuine practice — and it prints as a weighing sheet with the stone set and blank lines for the working.

**Mechanics still to build** — each is a self-contained overlay like the crossword, roughly one exchange of work, and each is then reused by several later cases:

- **Document forensics** (JM-62) — three drafts side by side; mark what differs.
- **Seal comparison** (JM-52) — match wax impressions and hands.
- **Hypothesis table variant** (JM-11) — what each outcome would prove, *before* seeing the outcome. The built matrix covers the retrospective version; this one hides the result column until the table is filled.
- **Ledger reconciliation** (JM-38) — what left against what arrived.

---

## 7 · The Bible

**Translation: the World English Bible (WEB).** Public domain — no licence, no attribution requirement, no permission needed to ship it inside an app or hand it to a class. It is a modern-English revision of the American Standard Version, complete at 66 books and 31,103 verses, and it reads at a level Year 7–8 can handle without simplification.

**One thing to know before a class uses it.** WEB prints God's personal name as *Yahweh* where most classroom Bibles print *the LORD*. The reader has a labelled tick-box that swaps it, with a one-line explanation underneath, so it is a teaching moment rather than a surprise. The default is the published text; to make "the LORD" the default instead, change `pref: { lord: false, … }` to `true` in `part_bible.js`.

**How it loads.** The text is never downloaded until somebody opens the Bible or clicks a reference.

- Split build: `bible.json` sits beside `index.html` and is fetched on first use (4 MB raw, about 1.1 MB gzipped by the host, then cached).
- Single-file build: the same data is inlined as a gzipped base64 blob and unpacked in the browser with `DecompressionStream`. Adds about 1.5 MB.

Because the book list is compiled into the JavaScript, **references are clickable before anything is downloaded** — the fetch only happens when one is clicked.

**Automatic cross-references.** Every overlay's body is passed through `linkifyRefs()`, which finds scripture references in the text and turns them into links. It handles `Judges 14`, `Judges 14:12–14`, `1 Corinthians 15:3–8`, `Psalm 139:1–12` and cross-chapter spans like `Matthew 27:57 – 28:15`. Clicking one opens the reader at that chapter with the cited verses highlighted.

**This means the `<div class="ref">` line at the foot of every document is now live.** Keep writing them exactly as before — full book name, chapter, colon, verse range with an en dash — and they link themselves. Nothing in a case file needs to know the Bible exists.

**Where it opens from:** the 📖 Bible button in a case's top bar, the *Read the Bible* button on the poster board, or any reference in any document. It has book and chapter navigation, previous/next chapter, and a whole-Bible search.

## 8 · The paper edition

Every case prints as a complete no-device version, generated from the same case object. **A new case gets its paper edition for nothing** — write the case, and the pack builds itself.

**Where to print from:** the 🖨 button on any poster, or Teacher Notes → *Print the paper edition*. It opens a preview; print to paper or to PDF.

**What comes out** (about 29 pages for a full case):

| Page | What it is |
|---|---|
| Cover | Case title, poster art, and a cut-out label for the front of the folder |
| Preparing the pack | Ten-minute teacher setup: what to cut, what goes in which envelope |
| The investigator's manuscript | The nine-step walkthrough the team runs itself from |
| Open file cards | Every starting document as a cut-out card with a dashed border |
| Plate sheets | Any document carrying artwork prints as a **full A4 sheet**, not a cut-out card, so the typeset labels are readable — about 167 mm across, two-thirds the width of the page. The team lays these on the desk whole. |
| Envelope labels + slips | Eight labels and six "not this one" slips |
| Bundle B / Bundle C | The locked evidence, behind big SEALED banners so it is easy to separate |
| Riddle sheet | The crossword, printed with its grid and numbered squares (cases that have one) |
| Elimination board | The five explanations with glue-down slots |
| Evidence tags | Every document title as a cut-out tag, including ones that belong nowhere |
| Accusation form | Tick-boxes and ruled lines for the reasoning |
| Certificate | Blank, for the teacher to sign |
| Answer key | Codes, board pairs, conclusion, full eliminations — marked REMOVE THIS PAGE |

**How the locks work without a device.** This is the one part that needed real redesign. Typing a code into a box does not translate to paper, so instead the pack prints **eight identical envelopes**: two carry the real bundles and are labelled with the correct code and keyword, and six carry a slip reading *"Not this one — your working is wrong somewhere."* The team's answer tells them which envelope to open. Physical, tactile, and no way to cheat except by deciding to.

Decoy labels are generated automatically — digit permutations of the real code, and same-length words for the keyword.

**The certificate** also prints on its own from the debrief when a team finishes on screen, filled in with the names from their answer sheet.

**The folder pack** (poster board → *Folder pack*) is the scrapbook starter: a cover sheet for the student's name and class, an index of all fifty cases with tick boxes and a column for the conclusion they reached, and spine labels. Each finished case adds the case record, the certificate and whatever evidence they want to keep.

**Writing cases with paper in mind.** Nothing special is needed, but three habits help: keep documents to about a page so they cut into sensible cards; keep `teacher.prompts` and `teacher.extra` genuinely useful, because they print into the answer key; and remember that **a document with a plate becomes a full sheet**, so its body can run a little longer than a card's — but keep it under about 220 words or the sheet spills onto a second page.

**How plates are sized on paper.** The print CSS reads each plate's `viewBox` and classes it `wideplate` (3:2 field plates, 168 mm), `squareplate` (128 mm) or `tallplate` (upright paper props, 96 mm). Width is the lever, because width sets the height and height is what has to fit the page. A sheet also sets its text slightly tighter than a card does, and that is what buys the plate its size. If you add artwork in a new shape, check one printed pack — the build will not warn you.

---

## 9 · The fifty cases

Fifty is roughly one a week across four New Zealand terms with room to spare. They are grouped below in fives, roughly by difficulty and by how much reading each demands, but the codes are archive numbers rather than lesson numbers — run them in any order.

**Built (3)**

| # | Code | Title | Passage | Mechanic |
|---|---|---|---|---|
| 1 | JM-33 | The Empty Tomb | Matthew 27–28, John 19–20 | standard |
| 2 | JM-47 | The Leak | 2 Kings 6:8–23 | standard |
| 3 | JM-19 | The Broken Riddle | Judges 14 | crossword |

**Designed in full, §9 (7)**

| # | Code | Title | Passage | Mechanic |
|---|---|---|---|---|
| 4 | JM-08 | The Stolen Plunder | Joshua 7 | elimination ladder |
| 5 | JM-05 | The Writing on the Wall | Daniel 5 | balance scales |
| 6 | JM-62 | The Frame-Up | Daniel 6 | document forensics |
| 7 | JM-23 | The Vanishing Prophet | 2 Kings 2:1–18 | search grid |
| 8 | JM-52 | The Forged Letter | Nehemiah 6 | seal comparison |
| 9 | JM-11 | The Cart That Chose Its Own Road | 1 Samuel 5–6 | hypothesis table |
| 10 | JM-38 | The Servant's Silver | 2 Kings 5:20–27 | ledger reconciliation |

**Designed, §12 (40)**

| # | Code | Title | Passage | Mechanic |
|---|---|---|---|---|
| 11 | JM-72 | The Silver Cup | Genesis 44 | document forensics |
| 12 | JM-37 | The Bloodied Coat | Genesis 37 | object study |
| 13 | JM-29 | The Substituted Bride | Genesis 29 | testimony grid |
| 14 | JM-31 | The Household Gods | Genesis 31 | search grid |
| 15 | JM-27 | The Blessing | Genesis 27 | testimony grid |
| 16 | JM-32 | The Golden Calf | Exodus 32 | document forensics |
| 17 | JM-03 | The Bush That Would Not Burn | Exodus 3 | hypothesis table |
| 18 | JM-10 | The Ten Blows | Exodus 7–12 | pattern chart |
| 19 | JM-14 | The Crossing | Exodus 14 | route reconstruction |
| 20 | JM-16 | The Bread on the Ground | Exodus 16 | hypothesis table |
| 21 | JM-13 | The Twelve Reports | Numbers 13–14 | testimony grid |
| 22 | JM-22 | Balaam's Fee | Numbers 22–24 | ledger reconciliation |
| 23 | JM-20 | The Rock at Meribah | Numbers 20 | document forensics |
| 24 | JM-21 | The Bronze Serpent | Numbers 21 · 2 Kings 18:4 | timeline builder |
| 25 | JM-06 | The Walls | Joshua 6 | hypothesis table |
| 26 | JM-09 | The Mouldy Bread | Joshua 9 | object study |
| 27 | JM-40 | The Long Day | Joshua 10 | document forensics |
| 28 | JM-25 | The Fleece | Judges 6 | hypothesis table |
| 29 | JM-30 | Naboth's Vineyard | 1 Kings 21 | seal comparison |
| 30 | JM-04 | The Judgment | 1 Kings 3 | testimony grid |
| 31 | JM-18 | The Contest on Carmel | 1 Kings 18 | hypothesis table |
| 32 | JM-42 | The Widow's Oil | 2 Kings 4:1–7 | ledger reconciliation |
| 33 | JM-28 | The Woman at Endor | 1 Samuel 28 | testimony grid · **see note** |
| 34 | JM-44 | The Vanished Army | 2 Kings 18–19 | document forensics |
| 35 | JM-34 | The Furnace | Daniel 3 | object study |
| 36 | JM-02 | The Missing Boy | Luke 2:41–52 | search grid |
| 37 | JM-26 | The Star and the King | Matthew 2 | document forensics |
| 38 | JM-15 | The Witnesses Who Would Not Agree | Mark 14:55–59 | testimony grid |
| 39 | JM-46 | The Thirty Pieces | Matthew 26–27 | ledger reconciliation |
| 40 | JM-24 | The Man Born Blind | John 9 | testimony grid |
| 41 | JM-64 | The Locked Room | John 20:19–29 | hypothesis table |
| 42 | JM-49 | The Road to Emmaus | Luke 24:13–35 | timeline builder |
| 43 | JM-51 | The Great Catch | John 21 | inventory audit |
| 44 | JM-53 | The Prison Doors | Acts 12 | floor plan · search |
| 45 | JM-56 | The Earthquake | Acts 16:16–40 | hypothesis table |
| 46 | JM-59 | The Silversmiths | Acts 19:23–41 | ledger reconciliation |
| 47 | JM-67 | The Shipwreck | Acts 27 | route reconstruction |
| 48 | JM-45 | The Two Statements | Acts 5:1–11 | testimony grid |
| 49 | JM-60 | The Loaves | John 6:1–14 | inventory audit |
| 50 | JM-50 | The Damascus Road | Acts 9 · 22 · 26 | testimony grid |

**Nine mechanics carry all fifty cases.** Build each one once and it serves four to seven cases. The order worth building them in: testimony grid (8 cases), hypothesis table (7), document forensics (6), ledger reconciliation (5), object study (3), search grid (3), route reconstruction (2), inventory audit (2), timeline builder (2), elimination ladder, balance scales, seal comparison, pattern chart (1 each).

**JM-50 is the capstone.** The same man tells the same story three times with real differences, and students who have spent a year comparing testimony discover that variation is what honest memory looks like. Save it for the end of the year.

## 10 · The nine built cases

### JM-33 · The Empty Tomb — *Jerusalem, c. AD 33* — `#8c2f1f`

Locks **4332** (4 soldiers · 3 days · 3 women · 2 spices) and **LINEN** (Caesar shift back three from OLQHQ).
Board: followers→Inside the Tomb · authorities→Council Ledger · Joseph→Joseph's Deposition · wrong tomb→Mary's Statement · robbers→Evidence Inventory.
Conclusion: the resurrection — the only explanation left standing.

*Images done:* poster, Jerusalem map, tomb interior, sealing stone, broken seal, blank papyrus (Watch Order), torn scrap (cipher), wooden tablet (decoder).

### JM-47 · The Leak — *Aram and Israel, c. 850 BC* — `#2f5c7d`

Locks **5260** (5 plans · 2 never written · 6 councillors · 0 successful ambushes) and **HORSE** (companies number gives the letter position: REHOB³=H, GOLAN²=O, KARNAIM³=R, ASHTAROTH²=S, HELAM²=E).
Board: Naaman→Council Roster · dispatches→Scribe's Dispatch Book · servant→The King's Inner Chamber · scouts→Were They Simply Watching the Roads? · Hazael→Hazael's Statement.
Conclusion: Elisha — a source with no route into the room at all.

*Images done:* poster, campaign map, chamber plan, sealed dispatch, Dothan at dawn.

### JM-19 · The Broken Riddle — *Timnah, Philistia, c. 1100 BC* — `#8a6a24`

Locks **7320** (7 days · 3 days of failure · 2 journeys · 0 people told) and **HEIFER** (six numbered crossword squares, in TIMNAH, SEVEN, THIRTY, FIRE, BEES, VINEYARD).
Board: followed→The Road Down to Timnah · parents→Father and Mother's Statement · stranger→Report on the Carcass · reasoned→Could the Riddle Be Reasoned Out? · slipped→Log of the Seven Days.
Conclusion: the thirty threatened his wife with fire; she wept the answer out of him.

*Images done:* poster, road to Timnah, the carcass site, the staked linen.

**Note before setting JM-19:** the thirty threaten to burn the bride and her father's house, and Judges 15:6 records that it was later carried out. The file states this soberly and without detail. It makes the debrief question about pressure and power a real discussion.

---

### JM-08 · The Stolen Plunder — *Jericho and Ai, c. 1400 BC* — `#6b4a2a`

Joshua 6–8. Jericho falls under a ban; days later tiny Ai routs Israel and thirty-six men die running. **Lock 1 `3341`** (3 thousand men recommended · 3 shortfalls in the treasury inventory · 4 rounds in the enquiry protocol · 1 man, as Joshua says). **Lock 2 `ACHAN`**, built with the **elimination ladder**: Judah (the only tribe inside the walls) → the Zerahites (the quarter holding the treasure houses) → the household of Zabdi (the carrying party) → Achan (the only disturbed tent floor). Eighteen documents. The real work of the case is the debrief question about whether a group should suffer for what one member does in secret — the file argues both sides deliberately and does not resolve it.

---

### JM-06 · The Walls — *Jericho, c. 1400 BC* — `#8a6a4a`

Joshua 6. **Lock 1 `6771`** (6 days of one circuit · 7 circuits on the seventh day · 7 priests with trumpets · 1 house left standing). **Lock 2 `SCARLET`** on the **matrix**, as a hypothesis table: five explanations against five findings from the site, with a comparison row for what the rubble actually shows. Two columns come out empty — the outward collapse and the single standing section — and the second points at the marked house. Sixteen documents. The earthquake row is the strongest wrong answer and deserves real class time: it explains the rubble but not the pattern. **Runs as a prequel to JM-08** — the standing order about the plunder in Sealed Pouch C is the order Achan breaks.

### JM-05 · The Writing on the Wall — *Babylon, 539 BC* — `#4a2f6b`

Daniel 5. A hand writes four words on the plaster of a banqueting hall and the finest scholars in the empire can pronounce every one of them and say nothing. **Lock 1 `4032`** (4 words · 0 interpreters · 3rd place offered · the first word written 2 times). **Lock 2 `WEIGHED`** on the **balance scales**: MENE = a mina = 60 shekels, MENE again = 60, TEKEL = 1, PARSIN = half-minas = 30. Sixteen documents. The case's real subject is the difference between decoding and understanding — the third explanation, "it was in a language nobody knew", is the one nearly every class picks and it is wrong because they could all read it perfectly.

### JM-04 · The Judgment — *Jerusalem, c. 960 BC* — `#7d6b4a`

1 Kings 3:16–28. Two women, one living child, no witness, no document, no mark. **Lock 1 `2101`** (2 women · 1 living child · 0 others in the house · 1 test proposed). **Lock 2 `SWORD`** on the **matrix**, as a testimony grid: nine claims against three columns — what each woman says, and what anything else confirms. Both women's columns tick all nine; the third stays empty. Fifteen documents. The case's real subject is the difference between *finding* evidence and *making* it, and the fifth explanation — "no decision was possible" — is deliberately the strongest wrong answer in the archive. Carries a sensitivity note in the teacher panel: a baby dies, and the sword is proposed but never used.

### JM-02 · The Missing Boy — *Jerusalem, c. AD 8* — `#5c7d8a`

Luke 2:41–52. A twelve-year-old is missing from a festival caravan and it takes his parents three days to find him. **Lock 1 `1321`** (1 day out · 3 days searching · 2 parents · 1 feast a year). **Lock 2 `TEMPLE`** on the **matrix**, as a search grid: eight districts against three days, seven of them filling the first two days and the temple courts standing alone on the third. Sixteen documents. The case contains no crime, no harm and nobody at fault — the whole thing turns on the order of the search, and the debrief asks why the biggest, most public place in the city was the last one looked in.

### JM-03 · The Bush That Would Not Burn — *Horeb* — `#7d5c2f`

Exodus 3:1 – 4:17. **Lock 1 `2530`** (name called 2× · 5 refusals · 3 signs · 0 of the bush consumed). **Lock 2 `ASHES`** on the **matrix**, as a hypothesis table: five ways a bush could genuinely be alight against the five traces fire leaves, with the site report as a comparison row showing none of them. Sixteen documents. The case deliberately stops where the evidence stops — it closes five explanations and names a *property* (burning without consuming) rather than a cause, and the teacher notes say so out loud.

---

## 11 · Cases 4–10 — full designs

Each block below is enough to build from: the design, both locks, the board pairings, and every image prompt. Prompts assume the house style block from §4 is pasted in first.

---

### 4 · JM-08 — THE STOLEN PLUNDER — **BUILT**
*Jericho and Ai · Joshua 7 · colour `#6b4a2a`* · **complete** — built as `src/part_case4.js`, artwork generated and plaques typeset (`poster_jm08`, `j08field`, `j08spoil`, `j08camp`)

**Premise.** Jericho falls and everything in it is placed under a ban — nothing to be taken, all metal to the treasury. Days later, tiny Ai routs Israel and thirty-six men die running. The army that could not be stopped has been stopped by a village.

**The five explanations**

| # | Explanation | Killed by |
|---|---|---|
| 1 | Ai was simply stronger than the scouts thought | The scouts' report — "only a few men there, don't trouble the whole army" |
| 2 | The commanders' plan was bad | The battle report — the line broke *before contact*; this is not a tactical defeat |
| 3 | An outsider or camp follower looted Jericho | The camp muster — no outsiders; the spoil was under guard the whole time |
| 4 | The metal burned up and the count is simply wrong | The treasury inventory — silver and gold went in by weight, and the count is short by exactly one man's carry |
| 5 | A whole clan was in it together | The elimination record — the narrowing cleared every group but one, and ended on a single man |

**Answer.** One man, acting alone, took a robe, two hundred shekels of silver and a bar of gold, and buried them under his tent.

**Lock 1 — `3341`**
1. In thousands, how many men did the scouts say would be enough to take Ai? → 3
2. How many separate things did the thief take? → 3
3. How many times was the lot cast to narrow the search? → 4
4. How many men did the narrowing end with? → 1

**Lock 2 — `ACHAN`**, built on the **elimination ladder** (now a built mechanic — see §6): four rounds (tribe → clan → household → man), each resolved from a document, and the surviving name is the keyword. As built, the supporting documents are the Jericho duty rolls (rounds 1–2), the carrying parties (round 3) and the tent search report (round 4). Revealing the name here is deliberate: the five explanations are about *what kind of failure this was*, not who, so the accusation still has work to do.

**Documents.** Briefing · the ban order from Jericho · the scouts' report · the battle report of Ai · the treasury inventory · the camp muster · *(lock 1)* Joshua's account of the enquiry · the elimination record · the tent search report · the value of what was taken · *(lock 2)* Achan's own statement ("I saw, I coveted, I took") · what it cost · why one man's theft counted against everybody.

**Images**

**Poster** — > [STYLE] A dramatic single image for a case poster. A plain goat-hair tent standing alone on stony ground at the edge of a great camp of tents at dusk. The ground immediately inside the tent's open doorway has been dug up, the earth turned and heaped to one side, leaving a dark empty hollow. A soldier's spear stands upright in the ground beside the entrance. Long shadows, low amber light, the rest of the camp small and quiet in the distance. No people. Absolutely no text, letters, numbers or writing anywhere. Bold, simple composition that reads clearly at small size. Wide landscape format, 3:2.

**Plate 1 — the field before Ai** — > [STYLE] An oblique bird's-eye survey plan of a small walled hill town on a ridge, with a narrow rocky pass leading up to its gate from a broad valley floor below. Steep broken ground and boulders flank the pass on both sides. A dashed line marks a route coming up the valley toward the pass, and a second dashed line marks the same route turning back on itself and running away downhill. Add three blank rectangular label plaques with thin dark borders and empty cream interiors, each on a fine leader line with a small dot: one to the walled town, one to the narrow pass, one to the point where the dashed line turns back. Absolutely no text, letters, numbers or writing anywhere. The plaques must be completely blank.

**Plate 2 — what was taken** — > [STYLE, as a flat evidence study photographed from directly above on dark wood] A fine woven robe in deep patterned red and gold, folded once and laid out flat. Beside it, a heap of small rough silver pieces of irregular ancient shape, and a single narrow bar of gold, plain and unmarked. A set of bronze balance scales with small stone weights stands at one side. Warm raking lamplight. Add three blank rectangular label plaques with thin dark borders and empty cream interiors, each on a fine leader line: one to the robe, one to the silver, one to the gold bar. Absolutely no text, letters, numbers, patterns resembling writing, or stamped marks anywhere in the image. The plaques must be completely blank.

**Plate 3 — the camp** — > [STYLE] A high oblique view over a vast ordered camp of goat-hair tents on a plain, arranged in regular blocks around a large open square at the centre. A broad empty avenue runs from the square out to the camp's edge. Dawn light, long shadows, thin smoke from cooking fires. No people. Add two blank rectangular label plaques with thin dark borders and empty cream interiors, each on a fine leader line: one to the open square at the centre, one to a single tent standing at the outer edge of the camp. Absolutely no text, letters, numbers or writing anywhere. The plaques must be completely blank.

---

### 5 · JM-05 — THE WRITING ON THE WALL — **BUILT**
*Babylon · Daniel 5 · colour `#4a2f6b`*

**Premise.** A thousand nobles at a feast. A hand appears and writes four words on the plaster, and the greatest scholars in the empire cannot read them. By morning the king is dead and the city has changed hands.

**The five explanations**

| # | Explanation | Killed by |
|---|---|---|
| 1 | A rival painted it as a trick | The wall report — writing above the lampstand where no ladder was, no marks below, no vessel of pigment anywhere |
| 2 | The wise men could read it and were afraid to say | The court record — the third place in the kingdom was offered publicly, and still nobody spoke |
| 3 | It was in a language nobody present knew | The language note — the words are ordinary weights and every scribe there knew them; what they could not do was say what they *meant* |
| 4 | The king imagined it in drink | The witness statements — the whole hall saw it, and the queen came in because of the uproar |
| 5 | Daniel arranged it to win office | Daniel's record — retired, forgotten, sent for by the queen, and he refused the reward before he read a word |

**Answer.** The writing was a judgement on the kingdom, and it was carried out that night.

**Lock 1 — `4032`**
1. How many words were written on the wall? → 4
2. How many of the king's wise men could read it? → 0
3. What place in the kingdom was offered to whoever could? → 3
4. How many times is the first word repeated? → 2

**Lock 2 — `WEIGHED`**, built on the **balance scales**: each of the four words is a unit of weight; students place the right stones on a pan to balance each word, and the correct arrangement releases the letters.

**Documents.** Briefing · the guest list and the vessels · the wall report · statements from three witnesses at different tables · the language note · the table of weights · *(lock 1)* the court record of the offer · the queen's statement · Daniel's file · the refusal · *(lock 2)* the reading of the words · the night the city fell · what the vessels had to do with it.

**Images**

**Poster** — > [STYLE] A dramatic single image for a case poster. A great banqueting hall at night, seen from the far end. In the centre of a long plastered wall, high up and lit by a tall many-branched lampstand below it, is a broad panel of bare pale plaster, blank and empty, catching the light. Below, a long table of gold and silver vessels stands abandoned, cups overturned. Deep shadow in the corners of the hall. No people, and nothing written on the wall. Absolutely no text, letters, numbers, symbols or writing anywhere in the image — the plaster panel must be completely blank. Bold, simple composition that reads clearly at small size. Wide landscape format, 3:2.

**Plate 1 — the wall** — > [STYLE, as a close architectural survey] A close, straight-on study of a section of ancient plastered wall above a tall bronze lampstand. The plaster is smooth, pale and entirely blank. The floor below is clean stone with no marks, no ladder feet, no scaffold holes, no spilled pigment. Fine measurement guide lines with plain arrowheads indicate the height of the blank panel above the floor. Add three blank rectangular label plaques with thin dark borders and empty cream interiors, each on a fine leader line: one to the blank plaster panel, one to the lampstand, one to the clean floor beneath. Absolutely no text, letters, numbers or writing anywhere — the plaster and all measurement lines must be completely blank.

**Plate 2 — the weights** — > [STYLE, as a flat study from directly above on dark wood] A set of ancient stone and bronze balance weights of graded sizes, arranged in a row from largest to smallest, beside a pair of bronze balance scales with empty pans. The weights are plain, worn and completely unmarked. A small drawstring pouch lies open at one side. Warm lamplight, hard shadows. Add two blank rectangular label plaques with thin dark borders and empty cream interiors, each on a fine leader line: one to the largest weight, one to the balance pans. Absolutely no text, letters, numbers, stamps or engraved marks anywhere in the image.

**Plate 3 — the vessels** — > [STYLE] A study of temple vessels being used as tableware. Tall gold and silver cups, bowls and a wide two-handled basin of clearly sacred workmanship, standing among the disorder of a feast — spilled wine, scattered fruit, a fallen cup. The vessels are finely made and quite out of place among the debris. Warm lamplight from one side. No people. Add one blank rectangular label plaque with a thin dark border and an empty cream interior, on a fine leader line to the large two-handled basin. Absolutely no text, letters, numbers, inscriptions or writing anywhere in the image.

---

### 6 · JM-62 — THE FRAME-UP
*Babylon under Persia · Daniel 6 · colour `#2f5c4a`*

**Premise.** A new decree appears from nowhere. For thirty days no one may ask anything of any god or man except the king. It is worded so that exactly one man in the empire must break it.

**The five explanations**

| # | Explanation | Killed by |
|---|---|---|
| 1 | The king wanted him gone | The king's own record — he spent the whole day trying to find a way out, then fasted all night |
| 2 | It was a genuine religious law | The decree analysis — it names no god and honours no festival; no religion in the empire works this way |
| 3 | He broke a fair law and was fairly convicted | The drafting date — the decree was drawn up the week after his promotion was announced |
| 4 | The satraps found real corruption | The audit — they went through his whole administration and found nothing to report |
| 5 | The decree came up from the provinces | The drafting record — "all the administrators have agreed" but three of the signatures are in one hand |

**Answer.** The two other administrators and the satraps drafted the decree specifically to trap the one man it could catch.

**Lock 1 — `3300`**
1. How many administrators were set over the satraps? → 3
2. How many times a day did Daniel pray? → 3
3. How many faults did the audit find in his work? → 0
4. Once sealed, how many times could a law of the Medes and Persians be changed? → 0

**Lock 2 — `WINDOWS`**, built on **document forensics**: three drafts of the decree are laid side by side; students mark every word that differs between them, and the marked words in order give the keyword. (It is also *how he was caught* — he prayed with his windows open toward Jerusalem, and did not close them.)

**Documents.** Briefing · the decree as published · the promotion announcement with its date · the audit report · the list of signatories · the plan of Daniel's house · *(lock 1)* three drafts of the decree · the king's own account of the day · the arrest record · the law on irrevocability · *(lock 2)* the night at the den · the king's proclamation afterwards · what happened to the accusers.

**Images**

**Poster** — > [STYLE] A dramatic single image for a case poster. A great sealed stone slab covering the mouth of a pit cut into rock, at first light. A heavy cord runs across the stone and is fixed at both ends with discs of wax pressed with a royal device. Steps lead down to it. Beyond, the walls and towers of a great city catch the dawn. Nothing visible inside the pit. No people, nothing gruesome, no animals. Absolutely no text, letters, numbers or writing anywhere. Bold, simple composition that reads clearly at small size. Wide landscape format, 3:2.

**Plate 1 — the upper room** — > [STYLE, as an architect's cutaway] A cutaway view of the upper room of a fine city house, seen from the side with the near wall removed. A plain room with a low table and a mat on the floor. In the far wall, three tall arched windows stand wide open, looking out over rooftops toward distant hills. A stairway runs down the outside of the house to a courtyard below, in full public view. Fine dashed sight-lines run from the open windows out through the rooftops and from the courtyard up to the windows. Add three blank rectangular label plaques with thin dark borders and empty cream interiors, each on a fine leader line: one to the open windows, one to the outside stairway, one to the courtyard below. Absolutely no text, letters, numbers or writing anywhere in the image.

**Plate 2 — the sealed decree** — > [STYLE, as a flat study from directly above on dark wood] A formal document of state: a wide sheet of stiff pale parchment, entirely blank, lying flat and weighted at the corners. Along its lower edge, a row of five heavy wax seal discs on short cords, each pressed with a different abstract device, all intact. A signet ring and a stick of sealing wax lie beside it. Warm raking lamplight showing the texture of the parchment. Add two blank rectangular label plaques with thin dark borders and empty cream interiors, each on a fine leader line: one to the row of seals, one to the signet ring. Absolutely no text, letters, numbers or writing anywhere — the parchment must be completely blank and the seal devices must be abstract patterns containing no letters.

**Plate 3 — the palace plan** — > [STYLE, as a precise overhead floor plan] Overhead plan of a palace administrative wing, walls drawn with hatched infill. A large central chamber opens onto a corridor, off which are three smaller offices of equal size on one side and a row of many small identical rooms on the other. A single doorway at one end leads out toward a separate walled enclosure containing a circular pit. Fine dashed measurement lines throughout. Add three blank rectangular label plaques with thin dark borders and empty cream interiors, each on a fine leader line: one to the central chamber, one to the three equal offices, one to the walled enclosure with the pit. Absolutely no text, letters, numbers or writing anywhere in the image.

---

### 7 · JM-23 — THE VANISHING PROPHET
*The Jordan valley · 2 Kings 2:1–18 · colour `#3f6b7d`*

**Premise.** Two men walk out of camp toward the river, watched from a distance by fifty others. One comes back. Fifty strong men then search the country for three days and find nothing at all.

**The five explanations**

| # | Explanation | Killed by |
|---|---|---|
| 1 | He drowned crossing the Jordan | The river report — the crossing point, the depth, and a dry cloak recovered on the near bank |
| 2 | He walked away to another country | The search record — fifty men, three days, every valley and hilltop within reach, and no track, no sighting, no report |
| 3 | Elisha killed him and took the cloak | The watchers' statements — fifty men had the pair in sight from open ground the whole way |
| 4 | He is hiding | The character file — he had just handed his office over publicly, in front of witnesses. There was nothing left to hide from |
| 5 | The company of prophets made it up | Their own behaviour — they refused to believe it and insisted on searching until Elisha was embarrassed into letting them |

**Answer.** Taken. The only physical evidence in the case is a cloak lying on a riverbank.

**Lock 1 — `3321`**
1. How many times did Elisha refuse to be left behind? → 3
2. How many days did the fifty search? → 3
3. What share of the spirit did Elisha ask for? → 2
4. How many things were left behind? → 1

**Lock 2 — `JORDAN`**, built on the **search grid**: a map divided into lettered squares and a search log saying which were covered on which day. Students shade the searched squares; the unsearched ones are all water, and the keyword is what they are.

**Documents.** Briefing · the route out of camp · the watchers' statements · the search log · the river report · the cloak, examined · *(lock 1)* Elisha's account of the walk · the handover, witnessed · the character file · the map of the search area · *(lock 2)* what the fifty concluded · what Elisha did next · why the cloak matters.

**Images**

**Poster** — > [STYLE] A dramatic single image for a case poster. A wide slow river seen from its bank at midday, low hills beyond. On the near bank, on bare stones at the water's edge, a single heavy rolled-up cloak of coarse dark cloth lies abandoned. Two sets of footprints lead down to the water and stop. Nothing else — no boat, no people, no marks on the far bank. Empty sky. Absolutely no text, letters, numbers or writing anywhere. Bold, simple composition that reads clearly at small size. Wide landscape format, 3:2.

**Plate 1 — the search country** — > [STYLE] An oblique bird's-eye survey map of a river valley: a broad river running through the middle, a walled town on rising ground to one side, a range of dry hills and ravines on the other, and open plain between. A faint rectangular grid of thin ruled lines is drawn over the whole map like a survey overlay. Small tent symbols mark a camp near the town. Absolutely no text, letters, numbers, grid references or writing anywhere in the image — the grid lines must be plain and unlabelled. Leave clear, uncluttered areas of blank parchment beside the town, the camp and the river.

**Plate 2 — the cloak** — > [STYLE, as a flat evidence study from directly above on dark wood] A single heavy garment of coarse dark woven cloth, laid out flat and slightly rumpled, worn thin at the shoulders and frayed at the hem. The cloth is completely dry, with no mud, no water staining and no tearing. A measuring rod lies alongside it for scale. Cold even light. Add two blank rectangular label plaques with thin dark borders and empty cream interiors, each on a fine leader line: one to the worn shoulder, one to the dry unstained hem. Absolutely no text, letters, numbers or writing anywhere in the image.

**Plate 3 — the crossing** — > [STYLE, as a surveyor's cross-section] A cutaway section through a river at a shallow crossing, showing the water depth against the two banks, with the riverbed drawn beneath. One bank is stony and open; the far bank rises into scrub. Fine dashed depth lines with plain arrowheads mark the depth at three points across the channel. A dotted line marks a route from bank to bank. Add three blank rectangular label plaques with thin dark borders and empty cream interiors, each on a fine leader line: one to the near bank, one to the deepest point of the channel, one to the far bank. Absolutely no text, letters, numbers or writing anywhere — plaques and depth lines completely blank.

---

### 8 · JM-52 — THE FORGED LETTER
*Jerusalem · Nehemiah 6 · colour `#7d5c2f`*

**Premise.** The wall is nearly finished. A letter arrives accusing the governor of building it to make himself king — and it arrives **unsealed**, carried openly in a servant's hand, so that everyone who handled it could read it.

**The five explanations**

| # | Explanation | Killed by |
|---|---|---|
| 1 | The letter is true — he is planning a rebellion | The works record — timber for gates, no weapons, no muster, no allies contacted |
| 2 | A worker overheard a real plot and reported it | The roster — no such meeting is recorded, no informant is named, and the letter names no witness |
| 3 | It came down from the king's own court | The seal analysis — no royal seal, no courier's mark, and no court sends a letter open |
| 4 | One enemy wrote it alone | The correspondence file — letters from the city nobles to the same man use the same phrasing and the same scribe's hand |
| 5 | The prophet who warned him was warning him honestly | The payment record — the prophet had been hired, and his advice would have put the governor inside the temple where he could be accused |

**Answer.** It was written by the circle around Sanballat and left unsealed on purpose. The letter was never meant to persuade the governor. It was meant to be read by everyone carrying it.

**Lock 1 — `4501`**
1. How many times was the governor invited to meet on the plain? → 4
2. Counting the open letter, how many messages were sent in all? → 5
3. How many seals were on the letter? → 0
4. How many prophets were found to have been hired against him? → 1

**Lock 2 — `OPEN`**, built on **seal comparison**: five letters, each with its seal and hand; students match which came from the same source. The one with nothing to match is the answer.

**Documents.** Briefing · the open letter itself · the four earlier invitations · the works record · the roster of builders · the seal and hand comparison sheet · *(lock 1)* the correspondence file · the prophet's warning · the payment record · the temple plan · *(lock 2)* what the governor wrote back · the wall finished in fifty-two days · what the neighbours understood by it.

**Images**

**Poster** — > [STYLE] A dramatic single image for a case poster. A half-rebuilt city wall of pale stone on a ridge at dusk, scaffolding of rough timber still standing against it and a gap where a gateway is not yet finished. Building tools and dressed stones lie where work has stopped. In the foreground, on a flat stone, a single sheet of parchment lies fully open and unrolled, held down by a pebble, with a broken cord beside it and no seal. Empty of people. Absolutely no text, letters, numbers or writing anywhere — the parchment must be completely blank. Bold, simple composition that reads clearly at small size. Wide landscape format, 3:2.

**Plate 1 — five letters** — > [STYLE, as a flat evidence study from directly above on dark wood] Five separate documents laid out in a row on a dark table. Four are rolled or folded and closed, each fastened with a disc of coloured wax pressed with a different abstract device — two of the devices are clearly identical to each other. The fifth document lies completely open and flat with no wax, no cord and no fastening at all. All five sheets are entirely blank. Warm raking lamplight. Add two blank rectangular label plaques with thin dark borders and empty cream interiors, each on a fine leader line: one to the pair of matching seals, one to the open unsealed sheet. Absolutely no text, letters, numbers or writing on any document, and the seal devices must be abstract patterns containing no letters.

**Plate 2 — the wall and the gate** — > [STYLE, as an oblique survey drawing] A section of city wall under reconstruction, drawn from outside and slightly above. New pale stonework rises on older darker foundations. A gateway stands unfinished, its timber doors leaning unhung against the wall beside it. Ropes, baskets and a stone-dressing area sit at the foot. Beyond the wall, rooftops. No people. Add three blank rectangular label plaques with thin dark borders and empty cream interiors, each on a fine leader line: one to the new stonework, one to the unhung timber doors, one to the older foundation course. Absolutely no text, letters, numbers or writing anywhere in the image.

**Plate 3 — the plain of Ono** — > [STYLE] An oblique bird's-eye map of a walled city on high ground at one edge of the image, and a wide flat open plain a long way off at the other, with empty country between them crossed by a single road. Small clusters of buildings dot the plain. The distance between city and plain is emphasised by the empty ground. Absolutely no text, letters, numbers or writing anywhere. Leave clear, uncluttered areas of blank parchment beside the city, beside the plain, and along the road.

---

### 9 · JM-11 — THE CART THAT CHOSE ITS OWN ROAD — **BUILT**
*Philistia · 1 Samuel 5–6 · colour `#8a4a2f`*

**Premise.** The Philistines capture the ark of Israel and take it home in triumph. Then things start going wrong in every city that houses it. Their own priests design a test to settle whether this is coincidence — and the test is a genuinely good one.

**The five explanations**

| # | Explanation | Killed by |
|---|---|---|
| 1 | An ordinary epidemic | The pattern report — the trouble moved city to city in step with the ark, not with trade or travel |
| 2 | Bad water at Ashdod | The three city reports — three cities, three water sources, the same outcome |
| 3 | Israelite sabotage | The guard record — the ark was under Philistine guard, in Philistine temples, the whole seven months |
| 4 | Coincidence, and the priests panicked | The design of the test — two cows never yoked, calves shut up at home, no driver, and a fork in the road |
| 5 | The priests rigged the test to get rid of it | The priests' own written conditions — they wrote down in advance what each outcome would prove, including the outcome that would have proved them wrong |

**Answer.** The test was designed so it could fail, and it did not.

**Lock 1 — `3720`**
1. How many Philistine cities did the ark pass through? → 3
2. How many months was it in Philistine country? → 7
3. How many cows pulled the cart? → 2
4. How many drivers were on the cart? → 0

**Lock 2 — `LOWING`**, built on the **hypothesis table**: students fill in, for each possible outcome, what it would have proved — *before* being shown what happened. The correct row gives the keyword. (The cows went straight up the road, lowing as they went, and did not turn aside.)

**Documents.** Briefing · the capture report · the three city reports · the guard record · the priests' written conditions for the test · the plan of the road and the fork · *(lock 1)* the cart, described · the calves, penned · the diviners' recommendation · the pattern analysis · *(lock 2)* what the watchers on the ridge saw · what the men of Beth Shemesh did · why the Philistines never tried again.

**Images**

**Poster** — > [STYLE] A dramatic single image for a case poster. A plain wooden ox-cart standing alone on a dirt road at dawn, harnessed to two cows, with nobody driving and no reins held. On the cart, a plain covered chest and a small closed box. The road runs straight ahead toward distant hills and a clear fork branches away to one side, untaken. Long shadows. No people anywhere. Absolutely no text, letters, numbers or writing anywhere. Bold, simple composition that reads clearly at small size. Wide landscape format, 3:2.

**Plate 1 — the road and the fork** — > [STYLE, as an oblique survey map] A bird's-eye survey map of open farmland. A single road runs across the map and divides clearly at a fork: one branch continues straight toward a small town in a valley of standing grain, the other turns sharply back toward a walled city in the opposite direction. A large flat rock stands in a field beside the straight branch. Dashed route lines mark both possible ways. Add three blank rectangular label plaques with thin dark borders and empty cream interiors, each on a fine leader line: one to the fork itself, one to the town in the grain valley, one to the walled city. Absolutely no text, letters, numbers or writing anywhere in the image.

**Plate 2 — the cart, described** — > [STYLE, as a draughtsman's technical plate] A side-on measured drawing of a simple two-wheeled wooden farm cart with a yoke pole, drawn as a clean engineering study against blank parchment. Fine dashed measurement lines with plain arrowheads indicate the wheel diameter, the height of the bed and the length of the pole. A plain rectangular chest with carrying rings sits on the bed, and a small closed box beside it. Nothing else. Add three blank rectangular label plaques with thin dark borders and empty cream interiors, each on a fine leader line: one to the yoke pole, one to the chest, one to the small box. Absolutely no text, letters, numbers or writing anywhere — plaques and measurement lines completely blank.

**Plate 3 — the temple at Ashdod** — > [STYLE, as an architectural interior study] The interior of a Philistine temple at dawn, seen from the doorway. A wide stone-flagged floor leads to a raised plinth at the far end, which stands empty. Beside the plinth, on the floor, lies a heavy overturned stone statue base, plain and unfigured, with the threshold of the doorway in the foreground. Shafts of early light from high windows. No people, no idol figure, nothing gruesome. Add two blank rectangular label plaques with thin dark borders and empty cream interiors, each on a fine leader line: one to the empty plinth, one to the doorway threshold. Absolutely no text, letters, numbers or writing anywhere in the image.

---

### 10 · JM-38 — THE SERVANT'S SILVER
*Samaria · 2 Kings 5:20–27 · colour `#5c5c2f`*

**Premise.** A foreign general goes home cured, and the prophet who cured him refuses every gift, publicly and absolutely. Somewhere on the road, two talents of silver and two changes of clothes leave the general's baggage anyway.

*Note: this is the companion piece to JM-47. The general is Naaman, and students who have played The Leak will already know him. Worth running them close together.*

**The five explanations**

| # | Explanation | Killed by |
|---|---|---|
| 1 | The general gave them away on the road | His own statement — he gave them to a named man who came after him with a request, and he says who |
| 2 | Bandits took them | The road report — nothing else was touched, and no laden traveller was seen leaving the road |
| 3 | The prophet accepted them after all | The refusal record — refused twice, in front of the whole company, before any gift was unpacked |
| 4 | Someone in the general's own household took them | The loading manifest — the bags were counted off at both ends and the count only fails after one stop |
| 5 | They were never loaded in the first place | The same manifest, signed at loading by two men |

**Answer.** The prophet's own servant ran after the chariot, invented two young men from the hill country who needed help, took the silver, hid it at home, and denied all of it to his master's face.

**Lock 1 — `1221`**
1. How many talents of silver did the servant ask for? → 1
2. How many was he given? → 2
3. How many young men did he say had arrived? → 2
4. How many times did he deny it? → 1

**Lock 2 — `CHARIOT`**, built on **ledger reconciliation**: two columns, what left and what arrived, with a stop recorded between them. The row that will not reconcile gives the keyword — and the answer to the case is in the same row, because the theft happened at a chariot halted on the road.

**Documents.** Briefing · the general's statement · the refusal, witnessed · the loading manifest · the road report · the value of two talents · *(lock 1)* the servant's account · the two young men, searched for · the household inventory at the prophet's house · the timeline of the afternoon · *(lock 2)* the confrontation · what the servant said when asked where he had been · what it cost him.

**Images**

**Poster** — > [STYLE] A dramatic single image for a case poster. A halted chariot on an empty dirt road between fields at late afternoon, its horses standing still, nobody aboard. On the ground beside a wheel sit two heavy tied bags, sagging with weight, and two folded garments laid on top of them. The road runs empty in both directions to low hills. Long shadows. No people. Absolutely no text, letters, numbers or writing anywhere. Bold, simple composition that reads clearly at small size. Wide landscape format, 3:2.

**Plate 1 — what two talents look like** — > [STYLE, as a flat study from directly above on dark wood] Two large coarse cloth bags, open at the neck, spilling small rough pieces of ancient silver onto a dark table — a genuinely heavy quantity, clearly more than one person could carry easily. Beside them, two neatly folded changes of fine clothing. A pair of bronze balance scales with large stone weights stands at one side, and a plain wooden carrying yoke leans against the table. Warm raking lamplight. Add two blank rectangular label plaques with thin dark borders and empty cream interiors, each on a fine leader line: one to the open silver bags, one to the carrying yoke. Absolutely no text, letters, numbers, stamps or marks anywhere in the image.

**Plate 2 — the road and the hill** — > [STYLE, as an oblique survey map] A survey map of a stretch of country road running from a walled city on a hill, down across open farmland, to a low rise crowned by a modest house with an enclosed yard. The distance is short — a walk, not a journey. A dashed line marks a route out from the city and a second dashed line marks the same route returning. A small mark on the road partway along shows where something halted. Add three blank rectangular label plaques with thin dark borders and empty cream interiors, each on a fine leader line: one to the walled city, one to the halt mark on the road, one to the house on the rise. Absolutely no text, letters, numbers or writing anywhere in the image.

**Plate 3 — the storeroom** — > [STYLE, as an architectural interior study] A small plain domestic storeroom of stone and mud brick, seen from the doorway. Shelves of clay jars along one wall, a few baskets, and a rolled sleeping mat. In one corner the floor is disturbed, with a flat stone slab lifted aside and set against the wall, revealing a dark empty recess beneath. Everything else is tidy. A single shaft of light from a high slot window. No people. Add two blank rectangular label plaques with thin dark borders and empty cream interiors, each on a fine leader line: one to the lifted floor slab, one to the empty recess beneath. Absolutely no text, letters, numbers or writing anywhere in the image.

---

---

## 12 · Cases 11–50 — designs

Each block is a build order. The §9 cases show the depth these expand to; everything needed to write one is here. Plates are given as template codes from §5 plus a subject line — assemble the prompt by pasting the house style block, the template, and the subject.

---

### 11 · JM-72 — THE SILVER CUP
*Egypt · Genesis 44 · `#4a6b7d` · document forensics*

**Premise.** Eleven brothers clear the city gate for home and are overtaken on the road. The governor's steward searches their sacks in front of them and finds the governor's own silver cup in the youngest one's grain.

**Eliminate** — 1. *Benjamin stole it* → the loading record: sacks were filled and closed by the steward's own men, and Benjamin never entered the house. · 2. *Another brother planted it on him* → the search order: the steward searched strictly oldest to youngest, and a planter could not have known he would. · 3. *A servant took it and hid it to escape blame* → the household roster: nobody is missing, and of eleven sacks it went into the one that mattered. · 4. *It was packed by accident* → the steward's written instructions, dated before the caravan left. · 5. *The brothers conspired to be rid of Benjamin* → their own behaviour: every one of them tore his clothes and turned back, and not one ran.

**Answer.** The governor ordered it planted. It was a test, and the brothers passed it.

**Lock 1 `2055`** — How many times had the brothers come down to Egypt? → 2 · How many of them ran when the cup was found? → 0 · How many extra portions was Benjamin given at the meal? → 5 · How many years of famine were still to come? → 5

**Lock 2 `BROTHER`** — document forensics: three versions of the steward's orders, one of them written before the caravan left. The words that appear in only the earliest copy give the keyword — and it is also the answer nobody in the room has guessed yet.

**Plates** — T1 poster · T4 the cup among spilled grain · T3 the governor's house and the road out · T6 blank tally sheet (loading record).

**Poster:** > [T1] Eleven grain sacks standing open in a line on a dusty road at midday, their contents spilling. Beside the last one, on the ground, a single ornate silver cup lies on its side in the grain. Pack donkeys wait in the background. Long shadows, empty road, distant city walls.

---

### 12 · JM-37 — THE BLOODIED COAT
*Dothan · Genesis 37 · `#7d3a2f` · object study*

**Premise.** Ten brothers come home from the pastures with their father's favourite son's coat, torn and soaked in blood, and ask him to identify it. He does, and concludes what they want him to conclude.

**Eliminate** — 1. *A wild animal* → the coat examined: the tears are cuts, the edges clean, and the blood is applied on the outside, not spattered from within. · 2. *Bandits on the road* → the report from the caravan route: nothing was stolen and no body was found. · 3. *He ran away* → the pit report: an empty dry cistern with no way out and the marks of a rope. · 4. *One brother acted alone* → the statements: ten accounts that agree suspiciously exactly. · 5. *Traders seized him by force* → the traders' record: he was bought, and there is a price.

**Answer.** They sold him to a passing caravan and staged the coat with a goat's blood.

**Lock 1 `2101`** — How many dreams had he told his brothers? → 2 · How many brothers spoke against killing him? → 1 · How much water was in the pit? → 0 · How many animals' blood was used on the coat? → 1

**Lock 2 `GOAT`** — object study: the blood on the coat is compared against samples from three animals. Only one matches, and it is not a predator.

**Plates** — T1 poster · T4 the coat laid flat, cut not torn · T5 section through the dry cistern · T2 the pasture route and the caravan road crossing.

**Poster:** > [T1] A long richly coloured woven coat laid out flat on bare ground in harsh midday sun, torn and darkly stained. Beside it, a dry stone-lined pit with a rope end coiled at its edge. Sheep scattered on hills in the far distance. Nothing else.

---

### 13 · JM-29 — THE SUBSTITUTED BRIDE
*Haran · Genesis 29 · `#6b4a6b` · testimony grid*

**Premise.** A man works seven years for the woman he was promised. On the morning after the wedding, the woman in the tent is her sister.

**Eliminate** — 1. *He was drunk and mistaken* → the feast record: he had worked seven years to know her face. · 2. *The sisters swapped it between themselves* → their separate statements. · 3. *A genuine misunderstanding of custom* → the custom, examined: if the elder must marry first, that was true seven years ago too. · 4. *He agreed and changed his mind* → the terms as witnessed at the start. · 5. *The bride's father was forced by the family* → his own second offer, made the same week and on the same terms.

**Answer.** The father knew the custom all along and said nothing, because seven more years of free labour were worth more than an honest agreement.

**Lock 1 `7720`** — How many years did he serve for the first agreement? → 7 · How many days did the wedding feast last? → 7 · How many wives did he end up with? → 2 · How many times was the agreement written down? → 0

**Lock 2 `VEIL`** — testimony grid: four accounts of the wedding night, and the only fact all four agree on is the one nobody thought to question.

**Plates** — T1 poster · T4 a bridal veil and two identical wedding garments · T3 plan of the tents and the feast ground · T6 blank clay tablet (for the agreement that was never written).

**Poster:** > [T1] A wedding tent at first light, its entrance flap open, the feast ground outside strewn with the wreckage of a long celebration. Two identical veils hang side by side on a line. Empty of people. Cold early light.

---

### 14 · JM-31 — THE HOUSEHOLD GODS
*Gilead · Genesis 31 · `#4a5c3a` · search grid*

**Premise.** A man flees his father-in-law's household with his wives, his flocks and his family. Pursued and overtaken, he is accused of stealing the household gods. He offers a search of everything he owns, and stakes a life on it.

**Eliminate** — 1. *He took them himself* → his own offer: he invited the search and set the penalty. · 2. *A servant took them to sell* → the inventory: nothing else of value is missing. · 3. *They were left behind in the move* → the father's own household search, made before he set out. · 4. *The father invented the theft as a pretext to pursue* → the pursuit record: he rode seven days, which is a great deal of trouble for a pretext. · 5. *They were destroyed on the road* → the search log: every tent, every pack, every beast.

**Answer.** They were in the camel's saddle, and his daughter was sitting on it.

**Lock 1 `3740`** — How many days' start did the fleeing party have? → 3 · How many days did the pursuit take? → 7 · How many tents were searched? → 4 · How many gods were found? → 0

**Lock 2 `SADDLE`** — search grid: the search log marks off every place looked in. One place in the camp was never searched, and the reason it was skipped is the answer.

**Plates** — T1 poster · T3 plan of the camp, tent by tent · T4 a camel's litter saddle, cut away · T2 the seven days' route from Haran to Gilead.

**Poster:** > [T1] A camp of tents on a high stony plateau at dusk, packs and bundles opened and their contents strewn on the ground beside each one, as after a thorough search. Camels kneeling at the edge of the camp, one still saddled. Empty of people.

---

### 15 · JM-27 — THE BLESSING
*Beersheba · Genesis 27 · `#8a5c2f` · testimony grid*

**Premise.** A blind old man tests the son in front of him four ways before giving away everything he has to give. Three of the four tests pass. The fourth one tells him the truth and he ignores it.

**Eliminate** — 1. *He knew and did not care* → his reaction afterwards: he trembled violently. · 2. *The younger son acted alone* → the kitchen record: the meal was prepared by someone who knew the recipe. · 3. *The elder son was late through his own fault* → the hunting record: he was sent out and went. · 4. *The blessing could simply be repeated* → the law of it: there was one, and it was gone. · 5. *The servants were in on it* → the household roster: two people were involved and both were family.

**Answer.** The mother planned it and the younger son carried it out — and the one sense that was not fooled was overruled by the three that were.

**Lock 1 `4112`** — How many senses did the old man test him with? → 4 · How many of those four gave the right answer? → 1 · How many blessings were there to give? → 1 · How many young goats were cooked? → 2

**Lock 2 `VOICE`** — testimony grid: four "witnesses" — hearing, touch, smell, taste — three of them deceived and one of them right. Students weigh a majority against a single reliable source, which is the whole lesson of the case.

**Plates** — T1 poster · T4 goatskin sleeves beside a bowl of stew and a garment · T3 plan of the tent, showing who was where · T5 the four senses as a comparison plate.

**Poster:** > [T1] A dim tent interior at evening. An empty low bed with rumpled coverings, a wooden bowl and cup pushed aside on a stool, and a fine cloak thrown over the bed's end. Across the tent's threshold, bright daylight and an empty doorway. Nobody present.

---

### 16 · JM-32 — THE GOLDEN CALF
*Sinai · Exodus 32 · `#8a7020` · document forensics*

**Premise.** The leader comes down the mountain to find the camp worshipping a golden calf. His brother, left in charge, explains: *I threw the gold into the fire, and out came this calf.*

**Eliminate** — 1. *The people made it without him* → the gold record: the collection was organised, and somebody organised it. · 2. *It formed in the fire as he says* → the metalwork report: the piece is cast in a mould and finished with a tool. · 3. *It was brought from Egypt* → the inventory of what came out of Egypt. · 4. *It was meant as a symbol, not a god* → the altar record and the proclamation of a feast. · 5. *A craftsman acted on his own* → the statement: he names no craftsman, because naming one would invite questions.

**Answer.** He collected the gold, cast the calf, built the altar, and then described it as something that happened to him.

**Lock 1 `2110`** — How many stone tablets were broken? → 2 · How many altars were built for the calf? → 1 · How many calves were made? → 1 · How many craftsmen does his statement name? → 0

**Lock 2 `TOOL`** — document forensics: his spoken account set beside the metalwork report. One word in the record of how the calf was made contradicts the whole story.

**Plates** — T1 poster · T5 casting a metal figure: mould, crucible, graving tool · T4 the broken tablets · T3 plan of the camp and the mountain.

**Poster:** > [T1] A stone altar on open desert ground at dawn, the ashes of a great fire still smoking around it, and an empty pedestal on top. Scattered on the ground: gold earrings, a crucible, and a small sharp graving tool. Bare mountain rising behind. No people, no idol figure.

---

### 17 · JM-03 — THE BUSH THAT WOULD NOT BURN — **BUILT**
*Horeb · Exodus 3 · `#7d5c2f` · hypothesis table*

**Premise.** A shepherd turns aside to look at a burning bush and comes back with a commission he spends the rest of the chapter trying to refuse. The Society's interest is narrower: what was burning?

**Eliminate** — 1. *An ordinary brush fire* → the site report: no ash, no charring, no scorched ground. · 2. *A trick of the light at sunrise* → the timing and the bearing. · 3. *He invented it to justify leaving* → his own five attempts to get out of the commission. · 4. *A natural gas seep alight* → the botanical note: the bush is intact and still growing. · 5. *He was seeing things in the heat* → the duration: long enough for a conversation, and he approached it deliberately.

**Answer.** Something that burned without consuming, which is the one property every ordinary explanation cannot produce.

**Lock 1 `2530`** — How many times was his name called? → 2 · How many excuses did he make? → 5 · How many signs was he given? → 3 · How much of the bush was consumed? → 0

**Lock 2 `ASHES`** — hypothesis table: for each explanation, what should have been found at the site. The column that is empty for every natural explanation is the keyword.

**Plates** — T1 poster · T4 an unburnt thorn branch beside charred samples · T2 the mountain and the grazing grounds · T5 what fire leaves behind: a comparison plate.

**Poster:** > [T1] A low desert thorn bush on bare stony ground, entirely green and whole, standing in bright golden light that seems to come from within it rather than from the sky. The ground around it is completely unmarked — no ash, no scorching. A shepherd's staff and a pair of sandals lie a few paces away on the stones. Bare mountain slopes behind.

---

### 18 · JM-10 — THE TEN BLOWS — **BUILT**
*Egypt · Exodus 7–12 · `#6b2f2f` · pattern chart*

**Premise.** Ten disasters strike Egypt in sequence. The court magicians reproduce the first two, fail at the third, and by the fourth something changes that no natural cascade can account for.

**Eliminate** — 1. *A natural chain reaction from a red silt flood* → the pattern chart: a cascade cannot skip a region. · 2. *Coincidence over a bad year* → the timing record: each one announced in advance, by name and by day. · 3. *Egyptian records show nothing, so it did not happen* → the note on royal inscriptions: no Egyptian king records a defeat. · 4. *The magicians were doing all of it* → the court record: they stopped at the third and were themselves struck by the sixth. · 5. *Israel suffered too and later edited it out* → the regional reports.

**Answer.** From the fourth onward the blows fall on one region and not on another, on demand, with warning. That is a pattern, not a cascade.

**Lock 1 `2301`** — How many of the blows did the magicians reproduce? → 2 · At which blow did they give up? → 3 · How many blows struck Goshen from the fourth onward? → 0 · How many warnings came before the last one? → 1

**Lock 2 `GOSHEN`** — pattern chart: students plot which blows struck which region. One region has a column of blanks, and its name is the keyword.

**Plates** — T2 map of the delta showing the two regions · T1 poster · T4 the magicians' instruments and staffs · T5 comparison plate of river water samples.

**Poster:** > [T1] A wide river delta seen from above at dusk, the water running dark red. On one bank, fields stripped bare and dead cattle lying in them; on the other bank across a narrow channel, green standing crops and healthy herds, entirely untouched. The dividing line between the two is unnaturally sharp.

---

### 19 · JM-14 — THE CROSSING — **BUILT**
*The Sea of Reeds · Exodus 14 · `#2f5c6b` · route reconstruction*

**Premise.** A column of refugees is trapped between an army and deep water, and by morning the refugees are across and the army is not.

**Eliminate** — 1. *They found a ford and the Egyptians were careless* → the depth survey. · 2. *A freak low tide* → the tidal note: there is no tide there of that size. · 3. *They went round the northern end* → the route reconstruction: the pursuing column would have simply followed. · 4. *The army turned back and the story grew* → the muster: not one chariot returned to Egypt. · 5. *A strong wind pushed the water back naturally* → the wind analysis: a wind that could do it would have flattened the people walking into it.

**Answer.** Two walls of water and a dry bed, and a pursuing army that entered the same gap and did not come out.

**Lock 1 `1302`** — How many nights did the pillar of cloud stand between the two camps? → 1 · How many days out from Egypt was the camp by the sea? → 3 · How many of the pursuing force returned home? → 0 · How many walls of water are described? → 2

**Lock 2 `WIND`** — route reconstruction: three candidate crossing points on the map, each tested against the depth survey and the marching times. Only one fits, and the label on it is the keyword.

**Plates** — T2 the delta, the camp and three candidate crossings · T5 depth section across the water · T1 poster · T4 chariot wheel and harness fittings recovered.

**Poster:** > [T1] A wide corridor of bare wet seabed running between two towering dark walls of standing water, seen from the shore end at night under a strange pale light. Footprints and cart ruts lead into it. At the far end, faint dawn. Nobody in the frame.

---

### 20 · JM-16 — THE BREAD ON THE GROUND — **BUILT**
*The wilderness of Sin · Exodus 16 · `#8a7a4a` · hypothesis table*

**Premise.** A substance appears on the ground each morning and feeds a nation for forty years. Every proposed natural explanation fits — until the seventh day.

**Eliminate** — 1. *Tamarisk secretions* → the quantity: enough for a nation, daily. · 2. *A wind-borne lichen* → the spoilage note: it bred worms overnight, except when it did not. · 3. *Trade with local tribes* → the trade record: no caravans, no payments. · 4. *Stored supplies rationed out* → the load-out from Egypt. · 5. *It appeared irregularly and the record was tidied up* → the daily gathering log.

**Answer.** Six mornings it came, on the sixth it came double and kept overnight, and on the seventh there was none. No natural process keeps a calendar.

**Lock 1 `1260`** — How many omers per person on an ordinary day? → 1 · How many on the sixth day? → 2 · On how many days of the week did it appear? → 6 · How much appeared on the seventh day? → 0

**Lock 2 `SABBATH`** — hypothesis table: every explanation is tested against seven days of data, and only one column of the table has an entry that no natural process can produce.

**Plates** — T4 the substance in a jar, with a measuring omer · T6 blank gathering log · T1 poster · T2 the camp and the gathering ground.

**Poster:** > [T1] Open desert ground at dawn covered in a fine even layer of small pale flakes, stretching to the horizon, undisturbed. A single empty clay jar and a wooden measure stand on the ground in the foreground. Long dawn shadows. No people, no footprints.

---

### 21 · JM-13 — THE TWELVE REPORTS — **BUILT**
*Kadesh · Numbers 13–14 · `#5c6b3a` · testimony grid*

**Premise.** Twelve men are sent to survey a country. They come back with one bunch of grapes so large it takes two of them to carry it, and two irreconcilable reports.

**Eliminate** — 1. *The ten lied about what they saw* → the testimony grid: every fact in both reports is identical. · 2. *The two exaggerated the good* → the grapes, produced in evidence. · 3. *They surveyed different regions* → the route log: one party, one route, forty days. · 4. *The two had orders to give a good report* → the sealed instructions given to all twelve. · 5. *The people decided before hearing either* → the assembly record: they heard both, and chose.

**Answer.** Nobody lied. Twelve men saw exactly the same country, and ten of them measured the giants against themselves while two measured them against God.

**Lock 1 `2120`** — How many of the twelve brought back a good report? → 2 · How many things did all twelve agree the land was? → 1 · How many of that generation entered the land? → 2 · How many facts differ between the two reports? → 0

**Lock 2 `AGREED`** — testimony grid: the two reports laid side by side, fact against fact. Marking every line where they match fills the whole grid, and the keyword is what that proves.

**Plates** — T4 the great cluster of grapes on a carrying pole · T2 the survey route through the land · T6 two blank report sheets · T1 poster.

**Poster:** > [T1] An enormous single cluster of dark grapes slung from a stout wooden carrying pole, resting on the ground where it has been set down, with pomegranates and figs beside it. Beyond, a dry camp of tents under a hard blue sky. The fruit is impossibly abundant and nobody is touching it.

---

### 22 · JM-22 — BALAAM'S FEE
*Moab · Numbers 22–24 · `#7d6b2f` · ledger reconciliation*

**Premise.** A king pays a famous prophet a great deal of money to curse an invading nation. The prophet takes the journey, builds the altars, opens his mouth, and blesses them. Three times.

**Eliminate** — 1. *He was never paid* → the ledger: two delegations, two offers, and the second larger than the first. · 2. *He tried to curse and failed* → the record of what he actually said. · 3. *He was honest throughout* → the second journey, taken after a clear answer the first time. · 4. *The king got what he paid for* → the outcome and the king's fury. · 5. *He was a fraud with no gift at all* → the accuracy of what he did say.

**Answer.** A man who could not say the words he was paid to say, and who went back for the money anyway.

**Lock 1 `2337`** — How many delegations did the king send? → 2 · How many times did the donkey turn aside? → 3 · How many times did he bless instead of curse? → 3 · How many altars were built at each site? → 7

**Lock 2 `WAGES`** — ledger reconciliation: the fee offered, the journeys made, and what was delivered. The line that will not balance names what he was really working for.

**Plates** — T2 the road from Pethor, the three high places · T4 the fee: silver, gold and honours laid out · T5 seven altars on a ridge, plan and section · T1 poster.

**Poster:** > [T1] Seven small stone altars standing in a row along a bare ridge at dusk, each with a fire burning low on it, overlooking a vast camp of tents spread across the plain far below. A donkey stands untethered at the end of the row. Nobody present.

---

### 23 · JM-20 — THE ROCK AT MERIBAH — **BUILT** — *easy level written*
*Kadesh · Numbers 20 · `#6b5c4a` · document forensics*

**Premise.** Water comes out of a rock in front of the whole nation, and the man who produced it is told he will not enter the country he has spent forty years walking toward. The Society is asked why.

**Eliminate** — 1. *The water failed to come* → the supply record: it came, and plentifully. · 2. *He acted without orders* → the order, recorded. · 3. *He was punished for the people's rebellion* → the wording of the sentence. · 4. *It was the same as the first time at Horeb* → the two orders compared. · 5. *It was the anger, not the act* → the sentence names what was not done.

**Answer.** He was told to speak to the rock and he struck it, twice, as he had been told to do thirty-eight years earlier for a different rock — and said *shall we bring water out?*

**Lock 1 `1212`** — How many times was he told to speak to the rock? → 1 · How many times did he strike it? → 2 · How many times had he been told to strike a rock before? → 1 · How many leaders were barred from the land? → 2

**Lock 2 `SPEAK`** — document forensics: the order at Horeb and the order at Kadesh set side by side. One verb differs, and it is the whole case.

**Plates** — T6 two blank order tablets · T5 the rock and the watercourse, section · T2 Horeb and Kadesh, thirty-eight years apart · T1 poster.

**Poster:** > [T1] A great split rock face in a dry desert basin, water pouring from a fissure at its base and running away in a wide stream across the sand. A wooden staff lies abandoned on the stones in the foreground. Vast empty camp ground beyond. No people.

---

### 24 · JM-21 — THE BRONZE SERPENT
*Wilderness, then Jerusalem · Numbers 21 · 2 Kings 18:4 · `#5c7d6b` · timeline builder*

**Premise.** An object made to save lives is still in use seven hundred years later — and a reforming king smashes it. Two facts, seven centuries apart, and the Society is asked whether he was right.

**Eliminate** — 1. *It never healed anyone* → the field record from the wilderness. · 2. *It healed by its own power* → the instruction: they were to look, not to touch. · 3. *The later king destroyed it out of ignorance* → his record: he knew exactly what it was and named it. · 4. *It was a different object by then* → the chain of custody. · 5. *Nothing had changed in how it was used* → the temple inventory: incense was being burned to it.

**Answer.** The object never changed. What people did with it did — and the same king who broke it is the one the record calls faithful.

**Lock 1 `0171`** — How many had to touch it to be healed? → 0 · How many were made? → 1 · Roughly how many centuries later was it destroyed? → 7 · How many kings destroyed it? → 1

**Lock 2 `NEHUSHTAN`** — timeline builder: students place the recorded events on one line spanning seven centuries. The name the king gave the object — *a piece of bronze* — is the keyword, and it is his verdict on it.

**Plates** — T4 the bronze serpent on its pole, corroded with age · T5 timeline plate, blank · T3 the temple court showing where it stood · T1 poster.

**Poster:** > [T1] A weathered bronze serpent coiled on a tall wooden pole, standing alone in a stone temple courtyard at dusk, green with age. At its foot, a small incense burner still smoking and offerings of food laid on the flagstones. Empty of people.

---

### 25 · JM-06 — THE WALLS — **BUILT**
*Jericho · Joshua 6 · `#8a6a4a` · hypothesis table*

**Premise.** A walled city falls to an army that never touches the wall. For six days they walk round it in silence.

**Eliminate** — 1. *Sappers undermined the wall during the marches* → the engineering survey: no tunnels, no spoil. · 2. *An earthquake* → the collapse pattern: one section standing, the rest flat outward. · 3. *Somebody inside opened the gates* → the gate, found still barred. · 4. *A long siege starved them out* → the granary report: the city's stores were full. · 5. *The marching was a cover for an assault at night* → the watch record from the walls.

**Answer.** The walls fell outward, all at once, on the seventh day — except one house.

**Lock 1 `6771`** — How many days did they march once around? → 6 · How many circuits on the seventh day? → 7 · How many priests carried trumpets? → 7 · How many houses on the wall were left standing? → 1

**Lock 2 `SCARLET`** — hypothesis table: each explanation checked against the collapse pattern, the granaries and the one standing house. What was hanging in that house's window is the keyword.

**Plates** — T2 the city, the plain and the line of march · T5 wall section showing collapse outward · T3 plan of the ruins with one section intact · T1 poster.

**Poster:** > [T1] The ruins of a city wall seen from outside at dawn: a vast ring of collapsed masonry lying fallen outward in a heap, with the city visible over the rubble. One short section of wall still stands upright and unbroken, with a house built into it and a length of cord hanging from a window. No people.

---

### 26 · JM-09 — THE MOULDY BREAD — **BUILT**
*Gibeon · Joshua 9 · `#7d7a4a` · object study*

**Premise.** Ambassadors arrive from a country said to be very far away, with worn-out sacks, cracked wineskins, patched sandals and dry crumbling bread as proof of the journey. A treaty is signed. Three days later they turn out to live down the road.

**Eliminate** — 1. *They really had come a long way* → the object study: the bread is dry but not old, and the patches are freshly stitched. · 2. *A local guide misled the delegation* → the treaty text: they described their own country. · 3. *Israel's leaders were bribed* → the accounts. · 4. *The treaty was invalid and could be voided* → the oath record and what the leaders decided. · 5. *One clever ambassador acted alone* → four cities named in the treaty.

**Answer.** Everything in the sacks was staged. The one check that would have caught it — asking — was never made.

**Lock 1 `3404`** — How many days after the treaty was the truth discovered? → 3 · How many kinds of worn-out props did they bring? → 4 · How many times did Israel ask counsel before signing? → 0 · How many cities were in on it? → 4

**Lock 2 `MOULDY`** — object study: four props examined against a genuinely old comparison set. Each one fails a different test, and the tests spell the keyword.

**Plates** — T4 the props laid out: sacks, wineskins, sandals, bread · T2 how near the four cities actually were · T6 blank treaty parchment · T1 poster.

**Poster:** > [T1] A flat evidence table on dark wood: split and re-tied wineskins, a torn sack, a pair of worn sandals with obviously new stitching, and dry cracked flatbread — all arranged in a row as exhibits. Warm raking lamplight, hard shadows.

---

### 27 · JM-40 — THE LONG DAY
*Gibeon · Joshua 10 · `#4a5c7d` · document forensics*

**Premise.** After a night march and a running battle, the record says the sun stopped. The Society's brief is narrower than the miracle: what exactly does the source say, and who else says it?

**Eliminate** — 1. *A later addition to the text* → the citation: the account quotes an older book by name. · 2. *An eclipse misremembered* → an eclipse shortens the day. · 3. *Poetic language for a swift victory* → the prose sentence that follows the poetry, which is not poetic. · 4. *A local atmospheric effect* → the geography of the two places named. · 5. *The battle took two days and was compressed* → the march log.

**Answer.** The account cites a second, older source by name — which is the one thing a fabricator does not do, because it invites checking.

**Lock 1 `5120`** — How many kings allied against Gibeon? → 5 · How many nights did Joshua march to reach them? → 1 · How many separate sources does the account cite? → 2 · How many other days like it are recorded? → 0

**Lock 2 `JASHAR`** — document forensics: the passage separated into what is quoted and what is narrated. The name of the cited book is the keyword — and the case is really about how to read a source honestly.

**Plates** — T2 the night march route from Gilgal to Gibeon · T6 blank scroll (the older book) · T5 sun positions over a valley, diagram · T1 poster.

**Poster:** > [T1] A wide valley between two ridges at midday, with the sun standing high and unnaturally bright, and a full moon also clearly visible low over the opposite ridge at the same time. Long hailstones scattered on the ground. An abandoned battlefield of dropped shields and spears, no bodies, no people.

---

### 28 · JM-25 — THE FLEECE
*Ophrah · Judges 6 · `#6b7d4a` · hypothesis table*

**Premise.** A frightened farmer asks for a sign, gets it, and then asks for the same sign again backwards. The Society is interested in the second request, because that is the one that makes it a test.

**Eliminate** — 1. *Dew on wool and not on ground is ordinary* → true, which is exactly why he ran it twice. · 2. *He faked both* → the witnesses at the threshing floor. · 3. *One test would have been enough* → the design note: one test proves nothing, because wool holds dew anyway. · 4. *He was testing God out of unbelief* → his own words, and what happened next. · 5. *The army's size shows he trusted the sign* → the reduction from thirty-two thousand to three hundred.

**Answer.** He reversed the conditions, which is what turns a coincidence into an experiment — and it is the same instinct that later let him take three hundred men against an army.

**Lock 1 `2330`** — How many times was the fleece test run? → 2 · In hundreds, how many men were left after the water test? → 3 · How many things did each man carry into battle? → 3 · How many of Gideon's men fought with swords? → 0

**Lock 2 `REVERSE`** — hypothesis table: what each outcome of each run would have proved. Only the second run has a column that rules anything out, and the word for what he did to the conditions is the keyword.

**Plates** — T5 the two runs of the test, as a comparison diagram · T4 trumpet, clay jar and torch · T2 the valley of Jezreel and the camp positions · T1 poster.

**Poster:** > [T1] A stone threshing floor at dawn, a single sheepskin fleece lying in the middle of it. The fleece is heavy and dark with dew; the stone all around it is bone dry. A wooden bowl stands beside it. Hills beyond in flat early light. No people.

---

### 29 · JM-30 — NABOTH'S VINEYARD
*Jezreel · 1 Kings 21 · `#5c2f2f` · seal comparison*

**Premise.** A king wants a vineyard next to his palace. The owner will not sell. Within a fortnight the owner is convicted of a capital crime by two witnesses and the king has the land.

**Eliminate** — 1. *The charge was genuine* → the trial record: two witnesses, no cross-examination, sentence the same day. · 2. *The king ordered it* → the letters: his seal, but not his hand. · 3. *The city elders acted on their own* → the letters they received, kept. · 4. *The witnesses came forward freely* → the payment record. · 5. *The refusal to sell was unreasonable* → the land law: it was not the owner's to sell.

**Answer.** The letters went out under the king's seal in the queen's handwriting, and the elders did exactly what they were told.

**Lock 1 `2122`** — How many witnesses did the law require for a capital charge? → 2 · How many days of fasting were proclaimed? → 1 · How many times was the vineyard offered for? → 2 · How many charges were brought? → 2

**Lock 2 `SEAL`** — seal comparison: five letters from the palace, all bearing the same seal, in two different hands. The word for what makes a letter official — and what does not make it true — is the keyword.

**Plates** — T4 sealed letters and a signet ring · T2 the palace, the vineyard and the city gate · T6 blank letter parchment · T1 poster.

**Poster:** > [T1] A small walled vineyard of old vines on a slope, immediately beside the high wall of a grand palace, seen at dusk. The vineyard gate stands open and unattended, its latch broken. Palace windows lit above. Nobody in the frame.

---

### 30 · JM-04 — THE JUDGMENT — **BUILT**
*Jerusalem · 1 Kings 3 · `#7d6b4a` · testimony grid*

**Premise.** Two women, one living child, one dead one, and no witnesses of any kind. Both tell exactly the same story with the names reversed. The Society regards this as the hardest evidential problem in the archive.

**Eliminate** — 1. *One story is more detailed and so more likely* → the transcripts: they are identical in structure. · 2. *A neighbour could settle it* → the house record: they lived alone. · 3. *The child's appearance settles it* → the note on newborns. · 4. *The first to speak is more likely truthful* → the order of speaking was not chosen. · 5. *No decision was possible on the evidence* → the outcome.

**Answer.** With no evidence at all, the king made some — by proposing an action that only one of the two could bear to allow.

**Lock 1 `2101`** — How many women came before the king? → 2 · How many living children were in the case? → 1 · How many witnesses were in the house? → 0 · How many tests did the king need? → 1

**Lock 2 `SWORD`** — testimony grid: both statements side by side, matched line for line, until students see there is nothing to choose between them. The instrument the king called for is the keyword — and the point is that he never intended to use it.

**Plates** — T6 two blank statement sheets · T3 plan of the house with two rooms and one door · T1 poster · T4 a plain sword laid on a table beside an empty cradle.

**Poster:** > [T1] A stone judgment hall, austere and almost empty, with a raised seat at one end. On the flagstones before it, two identical low sleeping mats laid side by side, one with a folded blanket and one empty. A plain sword rests across a small table to one side. Cold light from high windows. Nobody present.

---

### 31 · JM-18 — THE CONTEST ON CARMEL — **BUILT**
*Mount Carmel · 1 Kings 18 · `#8a4a2f` · hypothesis table*

**Premise.** One prophet against four hundred and fifty, one altar each, and a rule agreed in front of the whole nation: the god who answers by fire is God. Then the challenger soaks his own altar until the trench around it fills with water.

**Eliminate** — 1. *Hidden fire under the altar* → the water, three times, twelve jars. · 2. *The other side was never given a fair chance* → the timing: they had from morning until afternoon. · 3. *Lightning at the right moment* → the weather record: not a cloud until later. · 4. *The crowd was primed to see it* → the crowd's own position beforehand, which was neutral to the point of sullen. · 5. *The challenger controlled both altars* → the choice of bulls, given away first.

**Answer.** He gave away every advantage he could give away, and set a test that could only be passed one way.

**Lock 1 `2341`** — How many bulls were prepared? → 2 · How many times was water poured over the altar? → 3 · How many jars each time? → 4 · How many times did Elijah pray? → 1

**Lock 2 `TRENCH`** — hypothesis table: each explanation checked against each precaution. The precaution that no explanation survives is the keyword.

**Plates** — T5 the altar, the stones and the water trench, plan and section · T2 the mountain top and the two altar sites · T4 twelve stones and four water jars · T1 poster.

**Poster:** > [T1] A stone altar on a bare mountain top at late afternoon, wood stacked on it and a cut trench dug all the way round, brimming with water that is running over onto the rock. A second altar stands abandoned some distance away, cold and untouched. The sea far below on one side. No people.

---

### 32 · JM-42 — THE WIDOW'S OIL
*Israel · 2 Kings 4:1–7 · `#6b5c2f` · ledger reconciliation*

**Premise.** A widow owes money she cannot pay and the creditor is coming for her two sons. Her entire estate is one small jar of oil. She is told to borrow empty vessels from the neighbours — as many as she can get.

**Eliminate** — 1. *She had more oil than she declared* → the estate inventory, sworn. · 2. *The neighbours gave oil, not just vessels* → the borrowing record: vessels went out empty and came back full. · 3. *The debt was smaller than claimed* → the loan record. · 4. *The oil was thinned* → the sale record and the price obtained. · 5. *The creditor was bought off privately* → the settlement account.

**Answer.** The oil ran until there was nothing left to put it in — so the only limit on it was how many vessels she had thought to borrow.

**Lock 1 `1230`** — How many jars of oil did she begin with? → 1 · How many sons were to be taken? → 2 · How many people were shut in the room? → 3 · How many borrowed vessels were left empty at the end? → 0

**Lock 2 `VESSELS`** — ledger reconciliation: what came in, what went out, what was sold, what the debt was. The only column that explains the total is the one nobody thought was the point.

**Plates** — T4 rows of borrowed clay vessels of every size · T6 blank debt tablet · T3 the small house with the door shut · T1 poster.

**Poster:** > [T1] The interior of a poor one-room house, its door closed, packed wall to wall with clay jars and vessels of every shape and size, all brimming with oil. In the middle of the floor stands one very small empty flask, tipped on its side. A shaft of light from a high slot window. Nobody present.

---

### 33 · JM-28 — THE WOMAN AT ENDOR
*Endor · 1 Samuel 28 · `#3a3a4a` · testimony grid*
> **Content note.** This is the darkest case in the set — a king who has outlawed mediums consults one in disguise on the night before he dies. The file treats it as an investigation into whether she was a fraud, and her own terror is the key evidence. Read it before you set it, and consider it for a senior group or for a class you know well. It is the one case in the fifty that is easy to skip.

**Premise.** A king who cannot get an answer any lawful way disguises himself and goes at night to a woman he has himself made illegal.

**Eliminate** — 1. *She was a fraud giving him what he wanted* → her reaction: she screamed, and she was the one frightened. · 2. *She recognised him from the start* → the disguise record and when she names him. · 3. *He imagined it, exhausted and unfed* → the two companions who went with him. · 4. *She used a hidden accomplice* → the house plan. · 5. *The message was vague enough to fit anything* → what was said, and what happened the next day.

**Answer.** She got something she was not expecting and did not control, and the message was specific, dated, and correct.

**Lock 1 `3211`** — In how many ways had the king already tried to get an answer? → 3 · How many men went with him? → 2 · How many disguises did he wear? → 1 · How many days until the battle? → 1

**Lock 2 `DISGUISE`** — testimony grid: her statement, the two companions' statements, and the king's, compared for what each person knew and when. The moment her account changes is the moment she stops performing.

**Plates** — T3 plan of the house at Endor · T2 the night route around the enemy camp · T4 a plain cloak and a change of clothes · T1 poster.

**Poster:** > [T1] A low stone house on a dark hillside at night, one small window lit from within by a single lamp. A steep path leads up to the door. Beyond and below, the watchfires of a great army camp spread across the plain. Nobody outside.

---

### 34 · JM-44 — THE VANISHED ARMY
*Jerusalem · 2 Kings 18–19 · `#4a4a6b` · document forensics*

**Premise.** The greatest army in the world surrounds Jerusalem, sends a letter demanding surrender, and then goes home. The Society has two independent records of the campaign: the Hebrew account, and the Assyrian king's own annals carved on a clay prism.

**Eliminate** — 1. *The city surrendered and paid* → both records agree tribute was paid earlier, and the siege came after. · 2. *Plague in the camp, ordinary and unremarkable* → the timing: one night. · 3. *The Assyrians won and the Hebrew record hides it* → the Assyrian record, which does not claim the city. · 4. *The army was recalled to deal with a revolt* → the annals' own account of the year. · 5. *Both records are propaganda and neither can be used* → the point where the two agree against their own interest.

**Answer.** Two hostile sources agree on the one fact that embarrasses one of them: the city was not taken. The Assyrian king says he shut the king of Judah up "like a bird in a cage" — and that is all he says.

**Lock 1 `1210`** — How many letters did Hezekiah receive? → 1 · How many times did the Assyrian envoy address the wall? → 2 · How many nights did it take? → 1 · How many arrows were shot into the city? → 0

**Lock 2 `NINEVEH`** — document forensics: the two records set in parallel columns. The place the king went home to, and where he died, is the keyword.

**Plates** — T4 a clay prism covered in unreadable cuneiform · T2 the campaign and the cities taken · T5 Hezekiah's water tunnel in section · T1 poster.

**Poster:** > [T1] A vast abandoned military camp on a plain at dawn, seen from the walls of a city above it: hundreds of empty tents still standing in ordered rows, cooking fires burnt out, siege equipment left where it stood, and not a soul anywhere. Untouched city walls in the foreground.

---

### 35 · JM-34 — THE FURNACE
*Babylon · Daniel 3 · `#7d3a2f` · object study*

**Premise.** Three men are thrown into a furnace heated so far past its working temperature that it kills the soldiers who carry them to it. They walk out. The Society's brief is the physical evidence.

**Eliminate** — 1. *The furnace was not really that hot* → the guards who died at the door. · 2. *They were pulled out at once* → the king's account of what he watched. · 3. *Fire-resistant garments* → the clothes, examined: ordinary, and unmarked. · 4. *A different three men came out* → the identification by the king, who knew them personally. · 5. *There were only ever three, and the fourth is a flourish* → the king's own statement, made against his own religion's interest.

**Answer.** Not a hair singed, not a garment scorched, and no smell of fire on them at all. That last detail is the one no fire in the world leaves out.

**Lock 1 `3470`** — How many men were thrown in? → 3 · How many were seen walking in the fire? → 4 · How many times hotter was the furnace made? → 7 · How many hairs were singed? → 0

**Lock 2 `SMELL`** — object study: their clothing examined against three controls exposed to ordinary fire. Every control fails on the same property, and the name of that property is the keyword.

**Plates** — T5 the furnace in section, with its charging door · T4 unmarked garments beside scorched controls · T3 plan of the plain of Dura with the image and the furnace · T1 poster.

**Poster:** > [T1] A great brick furnace on an open plain at night, its charging door standing open and white-hot light blazing out of it onto the ground. Four long shadows are cast away from the doorway across the sand, though nobody is visible. A gold-plated pedestal stands empty in the distance.

---

### 36 · JM-02 — THE MISSING BOY — **BUILT**
*Jerusalem · Luke 2:41–52 · `#5c7d8a` · search grid*

**Premise.** A family leaves a festival in a large travelling company. A day out, the parents discover their twelve-year-old is not with any of the relatives. They go back. It takes them three days to find him.

**Eliminate** — 1. *He was taken* → the search record: no ransom, no report, no sighting on the roads. · 2. *He was lost and frightened* → where he was found, and what he was doing. · 3. *He ran away from the family* → his own return with them afterwards. · 4. *The parents were careless* → the caravan custom: children travelled in the group, not with parents. · 5. *He had told them and they forgot* → both parents' accounts.

**Answer.** He never left the city, and he was exactly where the one thing he cared about was — which is the first place a search should have started and the last place it did.

**Lock 1 `1321`** — How many days out was the caravan before he was missed? → 1 · How many days did the search take? → 3 · How many parents searched? → 2 · How many feasts a year required the journey? → 1

**Lock 2 `TEMPLE`** — search grid: the city divided into districts and a search log for three days. The district that was searched last is the keyword, and the debrief asks why.

**Plates** — T2 the road north and the caravan's day-one camp · T3 plan of the temple courts · T6 blank search log · T1 poster.

**Poster:** > [T1] A great temple court at evening, its wide stone pavement almost empty as the last of a festival crowd disperses through the far gates. In one shaded corner, a low semicircle of stone benches stands occupied only by scattered scrolls and cushions. Long shadows. No people.

---

### 37 · JM-26 — THE STAR AND THE KING
*Jerusalem and Bethlehem · Matthew 2 · `#3a4a6b` · document forensics*

**Premise.** Foreign scholars arrive asking where a king has been born. The king on the throne calls in his own experts, gets an address, passes it on, and asks the visitors — privately — to come back and tell him exactly where the child is, so that he may worship him too.

**Eliminate** — 1. *The king meant what he said* → what he did when they did not come back. · 2. *The scholars were sent by him* → they arrive asking, publicly, which is not how a spy arrives. · 3. *The address was a guess* → the prophecy his experts cited, by chapter and line. · 4. *Three kings came* → the record: it names the gifts, not the number of visitors, and never calls them kings. · 5. *The star was a story added later* → the dating question he asks privately, which only makes sense if he believed it.

**Answer.** The most important sentence in the case is the friendliest one, and everything in the file is arranged to show that the visitors saw through it.

**Lock 1 `0311`** — How many visitors does the account actually number? → 0 · How many gifts are named? → 3 · How many times did the king enquire privately about when the star appeared? → 1 · How many routes home did the visitors take? → 1

**Lock 2 `HEROD`** — document forensics: the king's public instruction and his private question set side by side with what he did afterwards. Three columns, one name.

**Plates** — T2 the road from Jerusalem to Bethlehem, and the eastern approach · T4 the three gifts as objects · T6 blank court minute · T1 poster.

**Poster:** > [T1] A palace balcony at night looking out over a sleeping city toward hills, with one unusually bright star low on the horizon. On a table on the balcony, an unrolled blank scroll weighted at the corners, an oil lamp, and three small closed caskets set to one side. Nobody present.

---

### 38 · JM-15 — THE WITNESSES WHO WOULD NOT AGREE — **BUILT**
*Jerusalem · Mark 14:55–59 · `#5c3a3a` · testimony grid*

**Premise.** A court needs two witnesses whose accounts agree. It has plenty of witnesses. It cannot get two of them to say the same thing.

**Eliminate** — 1. *The witnesses were honest and simply differed* → the recruitment record. · 2. *The charge was proved by weight of numbers* → the law: two agreeing, or nothing. · 3. *The trial was properly conducted* → the hour it was held and the speed of it. · 4. *The final charge came from the witnesses* → the transcript: it came from the accused, under direct question. · 5. *The accused refused to defend himself out of guilt* → the silence, and what a defence would have required of the court.

**Answer.** The prosecution could not manufacture two matching lies, which is the strongest evidence in the file that the accounts we do have were not manufactured either.

**Lock 1 `2030`** — How many agreeing witnesses did the law require? → 2 · How many of the statements agreed? → 0 · How many days did the alleged saying mention? → 3 · How many charges from the witnesses finally held? → 0

**Lock 2 `AGREE`** — testimony grid: six statements about the same alleged sentence, laid out line by line. No two rows match, and the word for what the law required is the keyword.

**Plates** — T3 plan of the council chamber at night · T6 six blank statement sheets · T5 the two-witness rule as a diagram · T1 poster.

**Poster:** > [T1] A stone council chamber lit by lamps in the middle of the night, tiered benches in a semicircle around an empty floor. On a table at the centre, a scatter of blank statement sheets, several crumpled and pushed aside. Cold shadows between the pillars. Nobody present.

---

### 39 · JM-46 — THE THIRTY PIECES
*Jerusalem · Matthew 26–27 · `#4a5c4a` · ledger reconciliation*

**Premise.** Money is paid for information. Within two days it is brought back, refused, thrown on the floor of the temple, picked up by the people who paid it, and spent on a field — because they will not put it in the treasury.

**Eliminate** — 1. *The money was never paid* → the ledger entry. · 2. *He kept it and disappeared* → the return, witnessed in the temple. · 3. *The priests kept it* → their own ruling on why they could not. · 4. *The field purchase is unconnected* → the accounts, dated. · 5. *He was paid to give false evidence* → what he actually did, which required no evidence at all.

**Answer.** Follow the money and it goes out, comes straight back, and cannot be put away — and the people who paid it write down why.

**Lock 1 `3011`** — How many times did the money change hands? → 3 · How many people would take it back? → 0 · How many fields were bought with it? → 1 · How many prophecies are cited about the sum? → 1

**Lock 2 `POTTER`** — ledger reconciliation: temple accounts before and after, with one entry that cannot be filed under any lawful heading. What the field was used for names the keyword.

**Plates** — T4 thirty rough silver pieces scattered on stone paving · T6 blank temple account tablet · T2 the city and the field outside the wall · T1 poster.

**Poster:** > [T1] Thirty rough silver coins scattered across the polished stone floor of a great columned hall, some still rolling, cast down and left. Deep shadow between the columns, a single shaft of daylight across the coins. Nobody present.

---

### 40 · JM-24 — THE MAN BORN BLIND
*Jerusalem · John 9 · `#6b5c7d` · testimony grid*

**Premise.** A man who has been blind from birth can see. The authorities conduct a formal investigation: they question him, question his parents, and then question him again. The Society reproduces the transcripts and asks students to do what the court failed to do.

**Eliminate** — 1. *It is a different man who looks similar* → the neighbours' statements, and his own. · 2. *He was never actually blind* → his parents, on the one point they will confirm. · 3. *His parents arranged it* → their evident fear and what they refuse to say. · 4. *He was cured gradually by ordinary means* → the record of previous cases: none. · 5. *He is repeating a story he was taught* → the second interview, where he argues back and is thrown out for it.

**Answer.** The investigation established the fact three times over and then expelled the only witness for refusing to explain it away.

**Lock 1 `2220`** — How many times was the man questioned? → 2 · How many other witnesses were called? → 2 · How many questions did his parents refuse to answer? → 2 · How many comparable cases were on record? → 0

**Lock 2 `WASHED`** — testimony grid: four interview transcripts, with every question and answer matched. The one action the man describes the same way every single time is the keyword.

**Plates** — T3 plan of the pool of Siloam and its steps · T6 four blank interview sheets · T2 the city, the pool and the synagogue · T1 poster.

**Poster:** > [T1] A deep rectangular stone-cut pool at the bottom of a flight of worn steps, half in shadow, still water reflecting a bright strip of sky. A rough beggar's mat and an empty bowl lie abandoned on the top step. Nobody there.

---

### 41 · JM-64 — THE LOCKED ROOM
*Jerusalem · John 20:19–29 · `#5c4a6b` · hypothesis table*

**Premise.** Ten frightened men are shut in a room with the doors locked. Someone is suddenly among them. One man is absent, hears the account from all ten, and refuses to accept it without physical evidence — which is exactly what the Society would have demanded.

**Eliminate** — 1. *Someone had a key* → the room plan and the reason the doors were locked. · 2. *They were mistaken in poor light* → the duration and the conversation. · 3. *They agreed a story while Thomas was out* → his own conditions, which they could not have met. · 4. *An impostor* → the specific evidence Thomas asked for, and got. · 5. *Thomas was persuaded by pressure from the group* → he held out a full week against all ten.

**Answer.** The one man in the room who behaved like an investigator is the reason the account is worth anything.

**Lock 1 `2821`** — How many appearances in that room are recorded? → 2 · How many days between them? → 8 · How many things did Thomas demand as evidence? → 2 · How many of the eleven were absent the first time? → 1

**Lock 2 `HANDS`** — hypothesis table: Thomas's two conditions set against each explanation. Only one explanation survives both, and what he asked to see is the keyword.

**Plates** — T3 plan of the upper room, one stair, one barred door · T5 the evidence standard, as a diagram · T4 a heavy door bar and its brackets · T1 poster.

**Poster:** > [T1] An upper room at night, lamps low, its single heavy door barred shut with a timber beam across brackets. Cushions and a low table with the remains of a meal. An empty place at the table with a cup still standing at it. Shuttered window. Nobody present.

---

### 42 · JM-49 — THE ROAD TO EMMAUS
*Judea · Luke 24:13–35 · `#7d6b5c` · timeline builder*

**Premise.** Two people walk seven miles with a stranger who explains the entire week to them and then disappears the moment they recognise him. They walk the seven miles straight back the same night.

**Eliminate** — 1. *They mistook a stranger for someone they knew* → they did not recognise him for the whole journey; the identification came last, not first. · 2. *They invented it* → the return journey at night, which nobody undertakes for a story. · 3. *They were told what to say in Jerusalem* → they arrive to find the others already saying it. · 4. *The stranger was a follower repeating teaching* → what he knew, and where he began. · 5. *It was dark and they were tired* → the timeline: they walked in daylight and talked for hours.

**Answer.** Two independent parties reached the same conclusion the same day, in different places, without conferring — and each was surprised to find the other had.

**Lock 1 `2731`** — How many travellers were on the road? → 2 · How many miles was Emmaus from Jerusalem? → 7 · How many days since the crucifixion? → 3 · After how many shared meals did they recognise him? → 1

**Lock 2 `BREAD`** — timeline builder: students place both parties' events on one line and find the two independent reports crossing. The moment of recognition is the keyword.

**Plates** — T2 the road from Jerusalem to Emmaus with distances · T5 the day as a timeline plate, blank · T4 a broken loaf and two cups on a table · T1 poster.

**Poster:** > [T1] A country road at late afternoon winding between low stone walls and olive groves, with a walled city small on the horizon behind. Two long shadows are cast forward along the road by an unseen low sun, though no figures are visible. Empty road, warm light.

---

### 43 · JM-51 — THE GREAT CATCH
*The Sea of Galilee · John 21 · `#3a6b6b` · inventory audit*

**Premise.** Seven professional fishermen work all night and catch nothing. At dawn a man on the shore tells them to try the other side of the boat. The Society's interest is that somebody stopped to count the fish.

**Eliminate** — 1. *Ordinary luck at first light* → the night's log: nothing at all, all night, by professionals on their own lake. · 2. *He could see a shoal from the shore* → the distance, and the light. · 3. *The number was invented* → the counting itself, which is what people do with real catches and not with invented ones. · 4. *The net should have broken and the story is wrong* → the net, examined. · 5. *They did not recognise him and it was a stranger* → who spoke first, and what he had already prepared on the shore.

**Answer.** The detail that authenticates the whole account is the boring one: somebody landed the net, sat down, and counted.

**Lock 1 `7003`** — How many disciples were in the boat? → 7 · How many fish were caught during the night? → 0 · How many tears were found in the net? → 0 · How many times was Peter asked the same question? → 3

**Lock 2 `RIGHT`** — inventory audit: the night's catch against the morning's, by hour. The only variable that changed is which side of the boat the net went over, and that word is the keyword.

**Plates** — T4 a hauled net full of fish on a shingle beach, and a tally board · T5 the boat in section showing both sides · T2 the lake shore and the fishing grounds · T1 poster.

**Poster:** > [T1] A wooden fishing boat drawn up on a shingle shore at sunrise, its net still heavy and dripping over the side, packed with fish. On the beach a small charcoal fire burns with fish and bread laid on it, prepared and waiting. Flat calm water and low golden light. Nobody in the frame.

---

### 44 · JM-53 — THE PRISON DOORS
*Jerusalem · Acts 12 · `#4a4a5c` · floor plan · search*

**Premise.** A prisoner is held under four squads of soldiers, chained between two guards, behind three successive gates. In the morning the chains are on the floor, the guards are still at their posts, and the prisoner is not there.

**Eliminate** — 1. *The guards were bribed* → what happened to them afterwards, which no bribe covers. · 2. *He picked the locks* → the chains, examined, and the fact that he was chained to two sleeping men. · 3. *The church organised a rescue* → their own reaction when he knocked: they did not believe it was him. · 4. *He was released quietly and it was dressed up* → the search ordered the next morning. · 5. *He escaped during a shift change* → the watch roster.

**Answer.** He himself thought he was dreaming until he was two streets away — which is the detail an escape planner would never invent.

**Lock 1 `4230`** — How many squads guarded him? → 4 · How many chains? → 2 · How many gates lay between him and the street? → 3 · How many guards saw him leave? → 0

**Lock 2 `SANDALS`** — floor plan and search: the route out, gate by gate, against the watch roster. The one instruction he was given that makes no sense for an escape — and every sense for a man who is not in a hurry — is the keyword.

**Plates** — T3 plan of the prison: cells, two guard posts, iron gate, street · T4 two open chains and a set of iron fetters · T2 the route from the prison to the house · T1 poster.

**Poster:** > [T1] A narrow stone prison corridor at night, lit by one guttering torch, with a heavy iron gate standing wide open at the far end and the empty street visible beyond it. On the flagstones in the foreground, two open chains lie where they have fallen. No people.

---

### 45 · JM-56 — THE EARTHQUAKE
*Philippi · Acts 16:16–40 · `#5c5c6b` · hypothesis table*

**Premise.** An earthquake at midnight opens every door in a prison and loosens every prisoner's chains. Not one prisoner leaves. The Society is interested in why not.

**Eliminate** — 1. *They were too frightened to move* → open doors and darkness are what escapes are made of. · 2. *The doors did not really open* → the jailer's own account and his reaction. · 3. *They were recaptured and the record is tidy* → the roll call. · 4. *There were no other prisoners* → the register. · 5. *The two missionaries held the others back by force* → they were the ones in the inner cell, in the stocks.

**Answer.** Two men who had been beaten without trial and locked in the stocks spent the night singing, and when the doors opened they stayed — which is why the man holding the keys asked them a question instead of running.

**Lock 1 `0212`** — How many prisoners escaped? → 0 · How many men were singing at midnight? → 2 · How many times was the jailer about to harm himself? → 1 · How many Roman citizens had been beaten without trial? → 2

**Lock 2 `STOCKS`** — hypothesis table: each explanation checked against the roll call, the open doors and the jailer's reaction. The one restraint the earthquake did not need to break is the keyword.

**Plates** — T3 plan of the prison with the inner cell · T4 a set of wooden stocks · T5 the earthquake's effect on the doors, diagram · T1 poster.

**Poster:** > [T1] A prison courtyard at night after an earthquake: cell doors hanging open all around, cracks running up the stone walls, dust still in the air. Inside every open doorway, darkness. A ring of keys lies on the ground in the middle of the courtyard. Nobody has moved.

---

### 46 · JM-59 — THE SILVERSMITHS
*Ephesus · Acts 19:23–41 · `#6b6b3a` · ledger reconciliation*

**Premise.** A city riot in defence of a goddess. Two hours of shouting in the theatre. The town clerk eventually points out that no charge has actually been brought — and the man who started it makes silver shrines for a living.

**Eliminate** — 1. *A spontaneous religious protest* → the trade accounts, falling for two years. · 2. *The preachers had insulted the temple* → the clerk's statement: no blasphemy, no robbery. · 3. *The crowd knew what it was protesting about* → the record: most of them did not know why they were there. · 4. *The guild had no organiser* → the meeting, minuted, before the riot. · 5. *It was about the city's honour* → the speech that started it, which mentions the takings first and the goddess second.

**Answer.** Read the opening speech in order. The wealth comes first, the trade second, the goddess third — and the crowd never got past the third.

**Lock 1 `2020`** — For how many hours did the crowd shout? → 2 · How many of the crowd knew why they had come? → 0 · How many of Paul's companions were seized? → 2 · How many charges did the town clerk say had been brought? → 0

**Lock 2 `SHRINES`** — ledger reconciliation: the guild's takings by year against the growth of the new movement. The product line that collapsed is the keyword.

**Plates** — T4 small silver model shrines and a craftsman's tools · T3 plan of the great theatre · T6 blank guild account tablet · T1 poster.

**Poster:** > [T1] A vast open-air stone theatre seen from the top tier, its tiered seats entirely empty, the round floor below littered with dropped cloaks and torn banners. Early morning light across the empty seating. A great temple visible beyond the city rooftops. Nobody present.

---

### 47 · JM-67 — THE SHIPWRECK
*Malta · Acts 27 · `#2f4a5c` · route reconstruction*

**Premise.** A grain ship carrying two hundred and seventy-six people is driven across the open sea for a fortnight without sun or stars, and is wrecked on an island. Everybody survives. The account reads like a ship's log because it is one.

**Eliminate** — 1. *The details are invented* → the seamanship: soundings, sea anchors, undergirding the hull, four anchors from the stern. · 2. *They were close to land the whole time* → the soundings, taken twice. · 3. *The crew abandoned ship and the passengers were left* → the boat, cut adrift deliberately. · 4. *The prisoners were killed as ordered* → the centurion's decision, recorded. · 5. *The wreck was avoidable and the master was blamed unfairly* → the vote taken at Fair Havens.

**Answer.** A man with no nautical training gave advice twice, was overruled the first time, and was right both times — and the log records the vote that overruled him.

**Lock 1 `4031`** — How many anchors were dropped from the stern? → 4 · How many lives were lost? → 0 · How many times was the ship lightened? → 3 · How many warnings had been given before they sailed on? → 1

**Lock 2 `ANCHORS`** — route reconstruction: the log's wind directions and running times plotted across the chart. The plot lands on the right island, and the item dropped four times over is the keyword.

**Plates** — T2 chart of the Mediterranean with the drift track · T5 the ship in section: holds, anchors, sea anchor, rudders · T4 sounding lead and line, with markings unlabelled · T1 poster.

**Poster:** > [T1] A wooden merchant ship aground on a sandbar in a shallow bay at dawn, its bow fast and its stern breaking apart in the surf, four anchor cables trailing from the stern into the water. Wreckage and grain sacks washing toward a beach. Nobody visible in the water or on the shore.

---

### 48 · JM-45 — THE TWO STATEMENTS
*Jerusalem · Acts 5:1–11 · `#5c3a4a` · testimony grid*

**Premise.** A couple sell a property, keep back part of the money, and bring the rest as though it were all of it. They are interviewed separately, three hours apart, and give the same false figure.

**Eliminate** — 1. *They were required to give everything* → the rule, stated plainly: the land was theirs and the money was theirs. · 2. *They miscounted* → the sale price, on record. · 3. *One acted without the other's knowledge* → the two statements, matching to the coin. · 4. *They were punished for keeping money* → the charge, which is about the lie and not the amount. · 5. *The second interview was influenced by news of the first* → the timing, and what she was asked.

**Answer.** Giving was voluntary, so nothing they kept was wrong. What they did was arrange a figure between them and offer it as the truth — and the second interview shows the arrangement, because she names the same false number without being told it.

**Lock 1 `2310`** — How many people were involved? → 2 · How many hours between the two interviews? → 3 · How many properties were sold? → 1 · How much were they required to give? → 0

**Lock 2 `PORTION`** — testimony grid: two statements taken separately and compared. They match perfectly, which is the problem, and the word for what was held back is the keyword.

**Plates** — T6 two blank statement sheets and a deed of sale · T4 a bag of silver, a set of scales, and a smaller bag set apart · T3 plan of the meeting house with the two interview times · T1 poster.

**Poster:** > [T1] A plain stone hall with a low table at one end, on which sits an open bag of silver coins. On the floor beside the table, half hidden behind a pillar, a second smaller bag sits closed and tied. Long shadows from a doorway. Nobody present.

---

### 49 · JM-60 — THE LOAVES
*Beside the Sea of Galilee · John 6:1–14 · `#6b7d5c` · inventory audit*

**Premise.** A crowd of five thousand men, plus women and children, on a hillside a long way from anywhere at the end of the day. The available catering is one boy's packed lunch. Afterwards there is more food than there was at the start.

**Eliminate** — 1. *Everyone shared what they had brought* → the survey: one person in the crowd had food. · 2. *The numbers are rounded up from a few hundred* → the seating arrangement, counted in fifties and hundreds. · 3. *Food was bought from nearby villages* → the accounts, and the distance. · 4. *The leftovers were the original supply, uneaten* → the leftovers: twelve baskets from five loaves. · 5. *A cache was prepared in advance* → the question asked before it started, and who asked it.

**Answer.** An audit that starts with five loaves and two fish and ends with twelve baskets left over does not balance in any direction a natural explanation can push it.

**Lock 1 `5281`** — How many loaves? → 5 · How many fish? → 2 · Roughly how many months' wages would have been needed to buy bread for them? → 8 · How many people in the crowd had brought food? → 1

**Lock 2 `BASKETS`** — inventory audit: in, consumed, out. The out column is larger than the in column, and what the surplus was collected into is the keyword.

**Plates** — T4 five small barley loaves, two dried fish, and a boy's cloth bag · T2 the hillside, the lake and the nearest villages with distances · T5 the seating plan in fifties and hundreds · T1 poster.

**Poster:** > [T1] A wide grassy hillside above a lake at evening, marked out in neat rectangular blocks of flattened grass where a huge crowd has been seated in ordered groups and has now gone. In the foreground, twelve full wicker baskets stand in a row. Low golden light. Nobody there.

---

### 50 · JM-50 — THE DAMASCUS ROAD
*Damascus · Acts 9 · 22 · 26 · `#7d4a5c` · testimony grid* — **the capstone**

**Premise.** One man, one event, three accounts given years apart to three different audiences — and they do not match in every particular. A hostile investigator would call that a contradiction. The Society ends the year by asking students to do better than that.

**Eliminate** — 1. *He made it up* → what it cost him, for the rest of his life, and what he gave up to say it. · 2. *Sunstroke or a seizure* → the blindness, dated and witnessed, and a second party sent to him independently. · 3. *He was persuaded gradually and dramatised it* → the diary: he was carrying arrest warrants that week. · 4. *The three accounts contradict, so none can be used* → the testimony grid: they differ where audience and purpose differ and agree on every load-bearing fact. · 5. *His companions saw nothing* → all three accounts place them there and describe them reacting.

**Answer.** Three tellings of one event by one honest witness. The variations are what real memory does; the core is identical in all three; and a fabricator would have made them match.

**Lock 1 `3311`** — How many accounts of the event are in the record? → 3 · How many days was he blind? → 3 · How many letters of authority was he carrying? → 1 · How many people were sent to him? → 1

**Lock 2 `WITNESS`** — testimony grid: the three accounts in three columns, fact by fact. Rows that agree in all three are marked; rows that differ are marked differently. What the marked pattern shows him to be is the keyword.

**Plates** — T2 the road from Jerusalem to Damascus, with the day's stages · T6 three blank statement sheets side by side · T4 a sealed letter of authority and a travelling cloak · T1 poster.

**Poster:** > [T1] A dusty road running straight across open country toward a great walled city shimmering in the distance at noon. In the middle of the empty road lie a dropped travelling cloak and a scattered handful of sealed letters, as though set down suddenly. Harsh overhead light, very short shadows. No people.

---

## 13 · Running the year

Fifty cases is about one a week with a fortnight spare. Some pairings and orderings that work:

- **Start with JM-33.** It teaches the method, and everything after it is a variation.
- **JM-47 then JM-19** back to back: the first says close every human route and you may be left with something else; the second says close every human route and you may be left with a frightened girl. Students who over-apply the lesson of one get caught by the other, which is the point.
- **JM-13 (The Twelve Reports) early.** It is the cleanest lesson in the archive on the difference between a fact and a conclusion, and it makes every later case easier.
- **JM-09 (The Mouldy Bread) before any case with planted evidence** — JM-72, JM-37, JM-30 all become sharper afterwards.
- **JM-04 (The Judgment) when a class complains there isn't enough evidence.** There genuinely isn't. That is the case.
- **JM-50 last.** After a year of comparing testimony, three accounts of one event by one man is the exam.
- **JM-28 (Endor) is the one to skip** if you are unsure. Nothing else depends on it.

---

## 14 · The quality bar

Things that have made these cases work, worth holding onto:

- **Every document is worth reading on its own.** No filler. If a page exists only to pad the desk, cut it.
- **Statements are voices, not summaries.** People deny things, get defensive, admit awkward facts, and say more than they mean to.
- **The obvious suspect is a real suspect.** Naaman has motive and connection; the thirty companions really do deny everything. The evidence, not the framing, is what clears them.
- **Every elimination is a single decisive fact**, not a weight of opinion — a man not in the room, a plan never written down, spices left behind.
- **The margin notes** (the handwritten-looking lines) are where the investigator nudges. One per document at most.
- **Scripture references at the foot of every document**, so a student who wants to check can.
- **The debrief asks four questions and answers none of them.**
- **Teacher notes carry the answers**, timings, board pairings and discussion prompts — plus a warning where a case is heavier than it looks.

## 15 · Decisions already made

- Progress saves per case in `localStorage` under `jm_cases_v2`. Restart clears one case; teacher notes clears all.
- No accounts, no server, no internet needed once loaded.
- The poster board is the landing page. Cases can be taken in any order.
- Deploy the **zip** version: `index.html`, `bible.json` and `images/`. The single-file build is the offline fallback and is now about 7.4 MB.
- Case artwork is AI-generated to a fixed house style, with all labels typeset afterwards in SVG so they stay sharp and editable — including for a te reo Māori or bilingual label set later, which would reuse the same artwork.
