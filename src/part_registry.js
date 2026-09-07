"use strict";
/* ============================================================
   THE CASE REGISTRY

   The shelf runs on stubs — just enough about each case to draw its poster and
   its progress stamp. The case itself (every document, lock, theory and verdict)
   lives in its own file and is fetched the moment somebody takes the case down
   off the board. That is what keeps the page small as the archive grows.

   In the single-file build every case is already inlined, so registerCase() has
   run for all of them before anybody clicks anything and nothing is fetched.
   ============================================================ */

const CASE_STUBS = __CASE_STUBS__;

const CASE_REG = {};        // id -> the case as the reader should see it
const CASE_BASE = {};       // id -> the untouched medium-level case
const CASE_PENDING = {};    // id -> the promise fetching it

/* ------------------------------------------------------------------
   READING LEVEL

   Every case is written once, at "medium" — the Year 7-8 voice. An easy
   pack (cases/<id>.easy.js) carries nothing but replacement wording, keyed
   by the same ids: same evidence, same logic, same lock codes, shorter
   sentences. Switching level rebuilds the case from the untouched base and
   lays the easy wording over the top, so nothing is ever lost by toggling
   back and forth.
   ------------------------------------------------------------------ */
const EASY_REG = {};        // id -> the easy wording pack, once it is here
const EASY_PENDING = {};
const LEVEL_KEY = "cs-reading-level";

let LEVEL = "medium";
try{ if(localStorage.getItem(LEVEL_KEY) === "easy") LEVEL = "easy"; }catch(e){}

function clone(o){ return JSON.parse(JSON.stringify(o)); }

/* Lay an easy pack over a case.

   Objects merge key by key. An array in the case that is addressed by an
   object in the pack is matched up by id — so items, theories, locks,
   verdicts and the grid's own rows and columns can all be rewritten by
   naming the ones you want to change and leaving the rest alone. */
function mergeEasy(base, easy){
  for(const k in easy){
    const e = easy[k], b = base[k];
    if(Array.isArray(b) && e && typeof e === "object" && !Array.isArray(e)){
      b.forEach(row => { if(row && row.id && e[row.id]) mergeEasy(row, e[row.id]); });
    } else if(Array.isArray(e)){
      base[k] = clone(e);
    } else if(e && typeof e === "object" && b && typeof b === "object"){
      mergeEasy(b, e);
    } else {
      base[k] = e;
    }
  }
  return base;
}

function buildCase(id){
  const base = CASE_BASE[id];
  if(!base) return null;
  if(LEVEL !== "easy" || !EASY_REG[id]) return base;
  return mergeEasy(clone(base), EASY_REG[id]);
}

/* Called at the foot of every case file. */
function registerCase(c){
  CASE_BASE[c.id] = c;
  CASE_REG[c.id]  = buildCase(c.id);
}

/* Called at the foot of every easy pack. */
function registerEasy(id, pack){
  EASY_REG[id] = pack;
  if(CASE_BASE[id]) CASE_REG[id] = buildCase(id);
}

function hasEasy(id){ return !!EASY_REG[id] || (EASY_AVAILABLE.indexOf(id) >= 0); }

/* Which cases have an easy pack written, and the handful of strings the shelf
   needs before any case has been fetched. Both filled in by the build. */
const EASY_AVAILABLE = __EASY_AVAILABLE__;
const EASY_STUBS     = __EASY_STUBS__;

/* A shelf stub at the level in force. */
function stubAtLevel(cdef){
  if(LEVEL !== "easy" || !EASY_STUBS[cdef.id]) return cdef;
  return Object.assign({}, cdef, EASY_STUBS[cdef.id]);
}

function loadEasy(id){
  if(EASY_REG[id]) return Promise.resolve(EASY_REG[id]);
  if(EASY_AVAILABLE.indexOf(id) < 0) return Promise.resolve(null);
  if(EASY_PENDING[id]) return EASY_PENDING[id];
  EASY_PENDING[id] = new Promise(resolve=>{
    const s = document.createElement("script");
    s.src = "cases/" + id + ".easy.js";
    s.async = true;
    s.onload  = ()=> resolve(EASY_REG[id] || null);
    s.onerror = ()=> resolve(null);          // fall back to the medium wording
    document.head.appendChild(s);
  });
  return EASY_PENDING[id];
}

/* Set the level, refit every case already in memory, and report whether the
   caller needs to redraw. */
function setLevel(lvl){
  LEVEL = (lvl === "easy") ? "easy" : "medium";
  try{ localStorage.setItem(LEVEL_KEY, LEVEL); }catch(e){}
  Object.keys(CASE_BASE).forEach(id => { CASE_REG[id] = buildCase(id); });
}

function caseLoaded(id){ return !!CASE_REG[id]; }

/* Fetch the case itself. */
function fetchCase(id){
  if(CASE_REG[id]) return Promise.resolve(CASE_REG[id]);
  if(CASE_PENDING[id]) return CASE_PENDING[id];
  CASE_PENDING[id] = new Promise((resolve, reject)=>{
    const s = document.createElement("script");
    s.src = "cases/" + id + ".js";
    s.async = true;
    s.onload = ()=> CASE_REG[id]
      ? resolve(CASE_REG[id])
      : reject(new Error("the case file loaded but registered nothing"));
    s.onerror = ()=> reject(new Error("could not fetch cases/" + id + ".js"));
    document.head.appendChild(s);
  });
  CASE_PENDING[id].catch(()=>{ delete CASE_PENDING[id]; });   // let them try again
  return CASE_PENDING[id];
}

/* What the rest of the app calls: the case, at the reading level in force. A
   missing easy pack is not an error — the case simply stays at medium. */
function loadCase(id){
  return fetchCase(id).then(()=>{
    if(LEVEL !== "easy" || EASY_REG[id]) return CASE_REG[id];
    return loadEasy(id).then(()=>{ CASE_REG[id] = buildCase(id); return CASE_REG[id]; });
  });
}

/* Shown when a case file cannot be fetched — nearly always because the page was
   opened straight off the disk rather than through a web address. */
const CASE_LOAD_HELP =
  "This build keeps every case in its own file, so it needs to be served from a " +
  "web address — GitHub Pages, or a local server — rather than opened straight " +
  "from the disk. The single file in standalone/ has everything inside it and " +
  "works anywhere, including off a USB stick.";
