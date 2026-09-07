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

const CASE_REG = {};        // id -> the full case, once it is here
const CASE_PENDING = {};    // id -> the promise fetching it

/* Called at the foot of every case file. */
function registerCase(c){ CASE_REG[c.id] = c; }

function caseLoaded(id){ return !!CASE_REG[id]; }

function loadCase(id){
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

/* Shown when a case file cannot be fetched — nearly always because the page was
   opened straight off the disk rather than through a web address. */
const CASE_LOAD_HELP =
  "This build keeps every case in its own file, so it needs to be served from a " +
  "web address — GitHub Pages, or a local server — rather than opened straight " +
  "from the disk. The single file in standalone/ has everything inside it and " +
  "works anywhere, including off a USB stick.";
