# The Chronicle Society — Bible mystery cases

Bible mystery-box investigations for Years 7–8. Eighteen cases built, thirty-two designed.

## Build

```bash
cd investigate
python3 src/build.py
```

That's the whole build. It assembles the source parts and writes both deliverables.

## What's here

```
investigate/
├── README.md                    this file
├── index.html                   generated: front door — sends the browser to dist/
├── bible.json                   World English Bible, 31,103 verses (public domain)
├── dist/                        ← DEPLOY THIS (recommended)
│   ├── index.html               the app (~146 KB — does not grow with cases)
│   ├── cases/                   one .js per case, fetched when it is opened
│   ├── bible.json
│   └── images/
├── single/                      one self-contained .html per case (a few MB each)
│   └── jm20.html                ← hand out, upload or copy to a USB stick
├── standalone/
│   └── index.html               every case in one file — big; local use only
├── images/                      source artwork (optimised JPEGs)
├── print/                       ready-to-print paper editions (PDF)
├── tobuild/                     one folder per unbuilt case
│   └── JM-xx — TITLE/
│       └── image-prompts.md     generated: every prompt for that case
├── docs/
│   └── chronicle-society-production-guide.md
└── src/
    ├── part_style.html          main stylesheet + <title>
    ├── part_css_extra.css       poster board, crossword, Bible, answer sheet, paper edition
    ├── part_shell.html          HTML skeleton
    ├── part_assets.js           SVG plates and every case's poster art
    ├── part_registry.js         case stubs + the lazy loader
    ├── part_bible.js            Bible reader + reference auto-linker
    ├── part_print.js            paper edition, certificates, folder pack
    ├── part_case1.js            JM-33 The Empty Tomb
    ├── part_case2.js            JM-47 The Leak
    ├── part_case3.js            JM-19 The Broken Riddle
    ├── part_case4.js            JM-08 The Stolen Plunder
    ├── part_case5.js            JM-02 The Missing Boy
    ├── part_case6.js            JM-03 The Bush That Would Not Burn
    ├── part_case7.js            JM-04 The Judgment
    ├── part_case8.js            JM-05 The Writing on the Wall
    ├── part_case9.js            JM-06 The Walls
    ├── part_case10.js …          JM-09, JM-10, JM-11, JM-13, JM-14, JM-15,
    │                             JM-16, JM-18, JM-20
    ├── part_engine.js           desk, locks, pinboard, crossword, saves
    ├── build.py                 the build
    ├── prompts.py               writes the prompt sheets into tobuild/
    ├── split4.py                cuts a 2x2 contact sheet into separate plates
    └── gridgen.py               crossword grid generator
```

## Deploying to GitHub Pages

**The repo root must contain an `index.html`.** That is the whole trick — GitHub
Pages serves `index.html` from the root of whatever you publish, and shows a 404
if there isn't one. The build now writes three of them, so you have three ways to
get it right:

**Recommended — publish `dist/`.** Upload everything *inside* `dist/` to the repo
root: `index.html`, the `cases/` folder, `bible.json` and `images/`. The page
loads in a moment; each case is fetched only when a student opens it, and the
Bible only when somebody reads it.

**For handing out one case — use `single/<case>.html`.** Each of these is the
whole app with a shelf of exactly one case, and only that case's artwork inside
it: two to five megabytes, no server, no internet, nothing beside it. Email one
to a relief teacher, drop one on a USB stick, or upload them to the repo
individually. They stay small however many cases the archive grows to.

**`standalone/index.html`** is the same idea with every case in it at once. It is
the nicest offline copy — the whole shelf, no server — but it is over 40 MB and
grows with each case.

### A note on GitHub's 25 MB limit

The **web uploader** (drag-and-drop in the browser) refuses any single file over
25 MB. Every file in `dist/` and every file in `single/` is comfortably under it.
`standalone/index.html` is not, and never will be again — if you want it in the
repo, push it with git rather than the web page, or simply leave it out and use
`single/` instead. Nothing on the deployed site depends on it.

**If you have pushed the whole `investigate` folder** (which is what most people
do), the generated `index.html` at the top of the folder is your root page: it
sends the browser straight on to `dist/`. Nothing else to do.

Then: repo **Settings → Pages → Source: Deploy from a branch → main → / (root)**.

**Do not publish `docs/`, `print/` or `src/` if you can avoid it.** They contain
the answer keys and every lock code. Publishing the whole folder is convenient
but it does put the answers online, so prefer uploading the contents of `dist/`
for anything students will find by searching.

Every generated folder includes a `.nojekyll` file, which stops GitHub running
Jekyll over the site.

## How cases are loaded

The shelf runs on a small manifest of case **stubs** — code, title, period,
colour, poster and teaser — compiled into `index.html`. The case itself (every
document, lock, theory and verdict) lives in `dist/cases/<id>.js` and is fetched
the moment somebody takes that case down off the board.

That is what keeps the page small: `index.html` is ~146 KB and grows by about a
quarter of a kilobyte per case, so fifty cases will still open instantly. The
standalone build inlines everything instead, because it has to work with no
server at all.

Two consequences worth knowing:

- The split build needs a **web address** — GitHub Pages, or a local server. Open
  `dist/index.html` straight off the disk and the case files will not load. Use
  `standalone/index.html` for that.
- A case's **poster** goes in `part_assets.js`, not in the case file, because the
  shelf draws every poster before any case has been loaded. The build refuses to
  run if a poster is in the wrong place.

## Generating a case's artwork ahead of time

```bash
python3 src/prompts.py
```

Writes an `image-prompts.md` into every folder under `tobuild/` — the poster and
every plate, complete and ready to paste, with the file name to save each one
under. Cases 4–10 use the full prompts written into the guide; the rest are built
from the guide's plate briefs and the six templates in section 5.

So the artwork for a case can be made long before the case is written. Generate
the images, drop them in that case's folder under the names the sheet gives, and
the case can be built straight from the folder. Re-run the script any time — it
overwrites the sheets and touches nothing else.

## Adding a case

1. Write `src/part_caseN.js` (the design is in the production guide).
2. Add it to `SCRIPTS` in `src/build.py`.
3. Add any new image names to `NAMES` in `src/build.py`.
4. Add the case to `CASES` at the top of `src/part_engine.js`.
5. Rebuild.

The poster board, the paper edition, the certificate and the answer sheet are all
generated from the case object — none of them need touching.

## The production guide

`docs/chronicle-society-production-guide.md` is the working document: architecture,
house style, prompt templates, and the full design of all fifty cases with locks,
eliminations and image prompts. Hand it to a new session and the work continues.
