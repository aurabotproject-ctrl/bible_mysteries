"use strict";
/* ============================================================
   ENGINE — multi-case
   ============================================================ */
const $ = s => document.querySelector(s);
const el = (t,c,h) => { const n=document.createElement(t); if(c)n.className=c; if(h!=null)n.innerHTML=h; return n; };
const esc = s => (s||"").replace(/[<>&]/g, c => ({"<":"&lt;",">":"&gt;","&":"&amp;"}[c]));

const SAVE_KEY = "jm_cases_v2";
const OLD_KEY  = "jm33_v1";

const CASES = CASE_STUBS;                       // metadata only — see part_registry.js
const caseById = id => CASE_REG[id] || CASES.find(c=>c.id===id);

const NEW_CASE_STATE = () => ({
  opened:false, pos:{}, pins:{}, locked:{}, notes:"", hints:{},
  solved:false, reasoning:"", sheet:{}, cw:{}, ld:{},
  wrong:0, failed:false, snapshot:null, strings:[]
});

/* How many wrong answers a team is allowed before the case is failed.
   Only the two things a student should be sure about before committing count:
   entering a lock code, and choosing a group in the enquiry. The grids, the
   crossword and the pinboard are working tools — checking them is free. */
const WRONG_ALLOWED = 5;

let S = { v:2, cases:{} };
let C = null;   // current case definition
let CS = null;  // current case state

/* ---------------- save / load ---------------- */
function save(){ try{ localStorage.setItem(SAVE_KEY, JSON.stringify(S)); }catch(e){} }
function stateFor(id){
  if(!S.cases[id]) S.cases[id] = NEW_CASE_STATE();
  const st = S.cases[id];
  st.pos = st.pos||{}; st.pins = st.pins||{}; st.locked = st.locked||{};
  st.hints = st.hints||{}; st.sheet = st.sheet||{}; st.cw = st.cw||{}; st.ld = st.ld||{};
  st.wrong = st.wrong||0; st.failed = st.failed||false;
  if(st.snapshot === undefined) st.snapshot = null;
  return st;
}
function load(){
  try{
    const raw = localStorage.getItem(SAVE_KEY);
    if(raw){ const p = JSON.parse(raw); if(p && p.cases) S = p; }
  }catch(e){ S = { v:2, cases:{} }; }
  // carry over progress saved by the original single-case version
  try{
    const old = localStorage.getItem(OLD_KEY);
    if(old && !S.cases.jm33){
      const o = JSON.parse(old);
      S.cases.jm33 = Object.assign(NEW_CASE_STATE(), o, {hints:o.hints||{}});
      save();
    }
  }catch(e){}
}

/* ---------------- case progress helpers ---------------- */
function locksDone(cdef, st){
  const ids = cdef.locks ? cdef.locks.map(L=>L.id) : ["l1","l2"];
  return ids.filter(id=>st[id]).length;
}
function pinsDone(cdef, st){ return Object.keys(st.locked||{}).length; }
function nLocks(cdef){ return cdef.locks ? cdef.locks.length : (cdef.nlocks||2); }
function nTheories(cdef){ return cdef.theories ? cdef.theories.length : (cdef.ntheories||5); }
function progressLabel(cdef){
  const st = stateFor(cdef.id);
  if(st.solved) return {txt:"Case closed", detail:"conclusion filed", cls:"done"};
  if(!st.opened) return {txt:"Not started", detail:"", cls:""};
  return {txt:"In progress", cls:"wip",
    detail:`${locksDone(cdef,st)} of ${nLocks(cdef)} locks · ${pinsDone(cdef,st)} of ${nTheories(cdef)} eliminated`};
}

/* ============================================================
   THE SHELF
   ============================================================ */
const shelf = $("#shelf");
function showShelf(){
  C = null; CS = null;
  $("#app").classList.add("hidden");
  shelf.classList.remove("hidden");
  renderShelf();
  paintLevel();
}
function posterArt(cdef){
  if(cdef.poster && SVG[cdef.poster]) return SVG[cdef.poster];
  // placeholder until the case has its own poster plate
  return `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
    <rect width="300" height="200" fill="#e4d5b4"/>
    <circle cx="150" cy="96" r="46" fill="${cdef.colour}" opacity=".85"/>
    <circle cx="150" cy="96" r="37" fill="none" stroke="#f4e7cd" stroke-width="2"/>
    <text x="150" y="106" text-anchor="middle" font-family="Georgia,serif" font-size="20" letter-spacing="1" fill="#f6ead2">B.I.B.</text>
    <text x="150" y="172" text-anchor="middle" font-family="Georgia,serif" font-size="13"
      fill="#7a6238" letter-spacing="3">${cdef.code}</text>
  </svg>`;
}

function renderShelf(){
  const tilt = [-1.6, 1.3, -0.9, 1.8, -1.2];
  const posters = CASES.map((stub,i)=>{
    const cdef = stubAtLevel(stub);
    const st = stateFor(cdef.id), p = progressLabel(cdef);
    const cls = p.cls || "new";
    return `<div class="poster${cdef.gold ? " gold" : ""}" style="--fc:${cdef.colour};--r:${tilt[i%tilt.length]}deg">
      <div class="p-soc">B.I.B.</div>
      <div class="p-code">${cdef.code}</div>
      <div class="p-hr"></div>
      <div class="art">${posterArt(cdef)}</div>
      <div class="p-title">${cdef.title}</div>
      <div class="p-where">${cdef.period}</div>
      <div class="p-hr thin"></div>
      <div class="p-teaser">${cdef.teaser}</div>
      <div class="p-stamp ${cls}">${p.txt}</div>
      ${p.detail?`<div class="p-sub">${p.detail}</div>`:""}
      ${LEVEL === "easy" && !hasEasy(cdef.id)
        ? `<div class="p-easysoon">Medium only &middot; this one reads at full strength</div>` : ""}
      <div class="p-acts">
        <button class="p-open" data-case="${cdef.id}">${st.opened ? "Continue" : "Take this case"}</button>
        <button class="p-restart" data-pp="${cdef.id}" title="Print this case to run on paper">🖨</button>
        ${st.opened ? `<button class="p-restart" data-restart="${cdef.id}" title="Clear this case and start again">Restart</button>` : ""}
      </div>
    </div>`;
  }).join("");

  shelf.innerHTML = `
    <div class="boardsign">
      <h1 class="sr-only">B.I.B. — The Bible Investigation Bureau. Take down a case and work it.
        Read everything, break the locks, and throw out every explanation the evidence will not
        carry — then file what is left.</h1>
      <img class="bibsign" src="__IMG_bibsign__" alt="" decoding="async">
      <p class="signline">Take down a case and work it. Read everything, break the locks, and throw
        out every explanation the evidence will not carry &mdash; then file what is left.</p>
      <div class="lvl shelf-lvl" id="lvlShelf" title="Reading level — the same cases, in plainer words">
        <span class="lvl-cap">Reading level</span>
        <button class="lvl-b" data-lvl="easy">Easy</button>
        <button class="lvl-b" data-lvl="medium">Medium</button>
      </div>
    </div>
    <div class="shelfwrap">
    <div class="cases">${posters}
      <div class="poster soon" style="--fc:#5c5346;--r:1.1deg">
        <div class="p-soc">B.I.B.</div>
        <div class="p-code">Case JM-??</div>
        <div class="p-hr"></div>
        <div class="art"><svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
          <rect width="300" height="200" fill="#ddcfb2"/>
          <text x="150" y="112" text-anchor="middle" font-family="Georgia,serif" font-size="72" fill="#8d7d5e" opacity=".55">?</text>
        </svg></div>
        <div class="p-title">Not yet released</div>
        <div class="p-where">&nbsp;</div>
        <div class="p-hr thin"></div>
        <div class="p-teaser">Another file is being prepared for the archive.</div>
        <div class="p-stamp new">Sealed</div>
      </div>
    </div>
    <div class="boardfoot">
      <button class="btn ghost" id="shelfBible">📖 Read the Bible</button>
      <button class="btn ghost" id="shelfFolder">🗂 Folder pack</button>
      <button class="btn ghost" id="shelfTeacher">Teacher notes</button>
      <span class="small">Progress is saved on this device, so you can close the tab and come back.</span>
    </div>
  </div>`;

  shelf.querySelectorAll("[data-case]").forEach(b=>
    b.addEventListener("click", ()=>{
      b.disabled = true; b.textContent = "Opening…";
      withCase(b.dataset.case, openCase).catch(()=>{
        b.disabled = false; renderShelf();
      });
    }));
  shelf.querySelectorAll("[data-pp]").forEach(b=>
    b.addEventListener("click", e=>{ e.stopPropagation(); withCase(b.dataset.pp, printPack); }));
  shelf.querySelectorAll("[data-restart]").forEach(b=>
    b.addEventListener("click", e=>{ e.stopPropagation(); restartCase(b.dataset.restart); }));
  shelf.querySelector("#shelfBible").addEventListener("click", ()=>openBible());
  shelf.querySelector("#shelfFolder").addEventListener("click", folderPack);
  shelf.querySelector("#shelfTeacher").addEventListener("click", teacherNotes);
}

function restartCase(id){
  const cdef = caseById(id);
  if(!confirm(`Restart ${cdef.code} — ${cdef.title}?\n\nThis clears the locks, the pinboard, your notes and the answer sheet for this case only. Other cases are not affected.`)) return;
  delete S.cases[id];
  save();
  renderShelf();
}

/* ============================================================
   OPENING A CASE
   ============================================================ */
/* Fetch a case, then hand it to fn. Everything that needs a whole case — opening
   it, printing its paper edition, showing its answers — goes through here. */
function withCase(id, fn){
  return loadCase(id).then(fn).catch(err=>{
    const stub = caseById(id);
    alert("Could not open " + (stub ? stub.code : id) + ".\n\n" + CASE_LOAD_HELP);
    throw err;
  });
}

function openCase(cdef){
  const id = cdef.id;
  C  = cdef;
  CS = stateFor(id);
  shelf.classList.add("hidden");
  $("#app").classList.remove("hidden");
  $("#caseCode").textContent = C.code;
  $("#caseName").textContent = C.title;
  document.documentElement.style.setProperty("--accent", C.colour);
  desk.innerHTML = ""; zTop = 10;
  board.classList.add("hidden");
  $("#btnBoard").classList.remove("on");
  $("#deskHint").classList.remove("hidden");
  toolBtn();
  $("#notesPane").classList.add("hidden");
  $("#notesArea").value = CS.notes || "";
  lockPip(); wrongPip();
  if(CS.opened){ renderDesk(); }
  else { runIntro(); }
  paintLevel();
}

function runIntro(){
  const intro = el("div", null, `
    <div id="intro">
      <div>
        <div class="kicker">${C.code} &middot; ${C.period}</div>
        <h1>${C.title}</h1>
        <div class="sub">${C.introSub}</div>
        <div class="folder" id="folder">
          <div class="back"></div>
          <div class="stack"><i></i><i></i><i></i><i></i><i></i><i></i></div>
          <div class="cover" style="--fc:${C.colour}">
            <div class="f-label">
              <div class="l1">B.I.B. &middot; Bible Investigation Bureau</div>
              <div class="l2">${C.title}</div>
              <div class="l3">${C.code} &middot; ${C.period}</div>
            </div>
            <div class="f-stamp">CONFIDENTIAL</div>
            <div class="f-string"></div>
            <div class="f-button"></div>
          </div>
        </div>
        <div class="tap" id="tapLine">Click the file to untie it</div>
      </div>
    </div>`).firstElementChild;
  document.body.appendChild(intro);
  const folder = intro.querySelector("#folder");
  const go = ()=>{
    if(folder.classList.contains("open")) return;
    folder.classList.add("open");
    intro.querySelector("#tapLine").textContent = "Tipping the contents onto the desk…";
    setTimeout(()=>{
      intro.classList.add("leaving");
      setTimeout(()=>intro.remove(), 700);
      renderDesk();
      CS.opened = true; save();
      setTimeout(()=>openItem(C.items[0]), 1100);
    }, 1150);
  };
  folder.addEventListener("click", go);
  intro.querySelector("#tapLine").addEventListener("click", go);
}

/* ============================================================
   THE DESK
   ============================================================ */
const desk = $("#desk");
const board = $("#board");
let zTop = 10;
function raise(n){
  if(++zTop > 400){                       // keep desk cards below the pinboard
    zTop = 10;
    [...desk.children].forEach(c=>c.style.zIndex = ++zTop);
  }
  n.style.zIndex = zTop;
}

const byId = id => C.items.find(i=>i.id===id);
function stageNow(){
  let n = 0;
  for(const L of C.locks){ if(CS[L.id]) n++; else break; }
  return n;
}
function available(){ return C.items.filter(i=>i.stage<=stageNow()); }

function renderDesk(){
  const have = new Set([...desk.children].map(n=>n.dataset.id));
  available().forEach(item=>{
    if(have.has(item.id)) return;
    desk.appendChild(makeItem(item, CS.pos[item.id]===undefined));
  });
  drawStrings();
}
function makeItem(item, isNew){
  const p = CS.pos[item.id] || {x:item.x, y:item.y, rot:item.rot};
  CS.pos[item.id] = p;
  const n = el("div","item"+(isNew?" new":""));
  n.dataset.id = item.id;
  n.style.width = (item.w||200)+"px";
  place(n,p);
  raise(n);
  n.innerHTML = `
    <div class="tape"></div>
    <div class="pinpt"></div>
    <div class="card">
      <div class="kind">${item.kind}</div>
      <div class="ttl">${item.title}</div>
      ${item.thumb?`<div class="thumb">${SVG[item.thumb]}</div>`:""}
      <div class="prev">${item.prev||""}</div>
      <div class="open">Click to read</div>
    </div>`;
  attachDrag(n,item);
  return n;
}
function place(n,p){
  n.style.left = p.x+"%"; n.style.top = p.y+"%";
  n.style.transform = `translate(-50%,-50%) rotate(${p.rot}deg)`;
}
function attachDrag(n,item){
  let sx=0, sy=0, ox=0, oy=0, moved=false, id=null;
  n.addEventListener("pointerdown", e=>{
    if(e.button!==undefined && e.button!==0) return;
    id=e.pointerId; moved=false;
    n._r = desk.getBoundingClientRect();
    sx=e.clientX; sy=e.clientY;
    ox=CS.pos[item.id].x; oy=CS.pos[item.id].y;
    n.setPointerCapture(id);
    n.classList.add("dragging");
    raise(n);
    e.preventDefault();
  });
  n.addEventListener("pointermove", e=>{
    if(id===null || e.pointerId!==id) return;
    const dx=e.clientX-sx, dy=e.clientY-sy;
    if(Math.abs(dx)>5 || Math.abs(dy)>5) moved=true;
    if(!moved) return;
    const r=n._r, p=CS.pos[item.id];
    p.x = Math.min(98, Math.max(2, ox + dx/r.width*100));
    p.y = Math.min(97, Math.max(3, oy + dy/r.height*100));
    place(n,p);
    drawStrings();
  });
  n.addEventListener("pointerup", ()=>{
    if(id===null) return;
    n.classList.remove("dragging");
    try{ n.releasePointerCapture(id); }catch(err){}
    id=null;
    if(moved){ save(); drawStrings(); return; }
    if(strMode === "add"){ pickString(item.id); return; }
    if(strMode === "cut") return;
    openItem(item);
  });
  n.addEventListener("pointercancel", ()=>{ n.classList.remove("dragging"); id=null; });
}


/* ============================================================
   PIN AND STRING
   A string is just a pair of item ids. Everything about where it
   is drawn is worked out from where the two cards are sitting at
   that moment, so a string follows its cards around the desk.
   ============================================================ */
const strings = $("#strings");
let strMode  = null;   // null | "add" | "cut"
let strFrom  = null;   // the card the loose end is pinned to
let strGhost = null;   // where the loose end is right now
let cutFX    = [];     // the two halves of a string that has just been cut

function strList(){ if(!CS) return []; if(!CS.strings) CS.strings = []; return CS.strings; }
function strKey(a,b){ return [a,b].sort().join("~"); }
function strHas(a,b){ return strList().some(s=>strKey(s.a,s.b) === strKey(a,b)); }

/* Where the pin sits, in desk pixels. Read from the card itself, so
   the card's rotation and size are already accounted for. */
function anchorOf(id){
  const n = desk.querySelector('.item[data-id="' + id + '"]');
  if(!n) return null;
  const pt = n.querySelector(".pinpt");
  if(!pt) return null;
  const r = pt.getBoundingClientRect(), d = desk.getBoundingClientRect();
  return {x: r.left + r.width/2 - d.left, y: r.top + r.height/2 - d.top};
}
function curveOf(a,b){
  const len = Math.hypot(b.x-a.x, b.y-a.y);
  const sag = Math.min(90, 18 + len*0.16);         // longer string, deeper sag
  // A quadratic only reaches halfway to its control point, so put the
  // control twice as far down as the sag we actually want to see.
  return {x:(a.x+b.x)/2, y:(a.y+b.y)/2 + sag};
}
function pathOf(a,b){ const c = curveOf(a,b); return `M${a.x} ${a.y} Q${c.x} ${c.y} ${b.x} ${b.y}`; }
function pinSvg(p){
  return `<g class="pin" transform="translate(${p.x} ${p.y})">
    <circle class="pin-sh" cx="1.5" cy="3" r="5.4"/>
    <circle class="pin-a" r="5.4"/>
    <circle class="pin-b" cx="-1.7" cy="-1.9" r="1.9"/></g>`;
}

function drawStrings(){
  if(!strings || !C || !CS) return;
  const d = desk.getBoundingClientRect();
  if(!d.width) return;
  strings.setAttribute("viewBox", `0 0 ${d.width} ${d.height}`);
  strings.setAttribute("width", d.width);
  strings.setAttribute("height", d.height);

  const live = strList().filter(s => anchorOf(s.a) && anchorOf(s.b));
  if(live.length !== strList().length) CS.strings = live;   // a card went away

  const pins = {};
  let out = "";
  live.forEach(s=>{
    const a = anchorOf(s.a), b = anchorOf(s.b);
    pins[s.a] = a; pins[s.b] = b;
    const dpath = pathOf(a,b);
    out += `<path class="str-shadow" d="${dpath}"/>`
         + `<path class="str" d="${dpath}" data-k="${strKey(s.a,s.b)}"><title>`
         + `${byId(s.a) ? byId(s.a).title : ""} — ${byId(s.b) ? byId(s.b).title : ""}</title></path>`;
  });
  if(strFrom && strGhost){
    const a = anchorOf(strFrom);
    if(a){ pins[strFrom] = a; out += `<path class="str loose" d="${pathOf(a, strGhost)}"/>`; }
  }
  cutFX.forEach(f=>{
    if(f.snip) out += `<text class="snip" x="${f.snip.x}" y="${f.snip.y}" text-anchor="middle">✂</text>`;
    else out += `<path class="str ${f.side}" d="${f.d}"/>`;
  });
  Object.keys(pins).forEach(id=>{ out += pinSvg(pins[id]); });
  strings.innerHTML = out;
}

function pickString(id){
  const n = desk.querySelector('.item[data-id="' + id + '"]');
  if(!strFrom){
    strFrom = id; strGhost = anchorOf(id);
    if(n) n.classList.add("strfrom");
    hintText();
    drawStrings();
    return;
  }
  if(strFrom !== id && !strHas(strFrom, id)){ strList().push({a:strFrom, b:id}); save(); }
  clearPick();
}
function clearPick(){
  desk.querySelectorAll(".item.strfrom").forEach(n=>n.classList.remove("strfrom"));
  strFrom = null; strGhost = null;
  hintText(); drawStrings();
}

/* Cut it in half, let both halves drop, then it is gone. */
function cutString(key){
  const list = strList();
  const i = list.findIndex(s => strKey(s.a,s.b) === key);
  if(i < 0) return;
  const s = list[i], a = anchorOf(s.a), b = anchorOf(s.b);
  if(a && b){
    const c  = curveOf(a,b);
    const m1 = {x:(a.x+c.x)/2,  y:(a.y+c.y)/2};
    const m2 = {x:(c.x+b.x)/2,  y:(c.y+b.y)/2};
    const md = {x:(m1.x+m2.x)/2, y:(m1.y+m2.y)/2};
    cutFX = [{d:`M${a.x} ${a.y} Q${m1.x} ${m1.y} ${md.x} ${md.y}`, side:"cut-l"},
             {d:`M${md.x} ${md.y} Q${m2.x} ${m2.y} ${b.x} ${b.y}`, side:"cut-r"},
             {snip:md}];
    setTimeout(()=>{ cutFX = []; drawStrings(); }, 640);
  }
  list.splice(i,1);
  save(); drawStrings();
}

function setStrMode(m){
  strMode = (strMode === m) ? null : m;
  clearPick();
  const sb = $("#btnString"), cb = $("#btnCut");
  if(sb) sb.classList.toggle("on", strMode === "add");
  if(cb) cb.classList.toggle("on", strMode === "cut");
  desk.classList.toggle("mode-add", strMode === "add");
  desk.classList.toggle("mode-cut", strMode === "cut");
  strings.classList.toggle("cutting", strMode === "cut");
  hintText();
}
function hintText(){
  const h = $("#deskHint"); if(!h) return;
  h.textContent =
    strMode === "add"
      ? (strFrom ? "Now click the card you want to join it to · click the same card again to cancel"
                 : "Click a card to pin one end of the string to it")
   : strMode === "cut"
      ? "Click a string to cut it in half"
      : "Drag items around the desk · click an item to read it";
}

if(strings){
  desk.addEventListener("pointermove", e=>{
    if(strMode !== "add" || !strFrom) return;
    const d = desk.getBoundingClientRect();
    strGhost = {x:e.clientX - d.left, y:e.clientY - d.top};
    drawStrings();
  });
  desk.addEventListener("pointerdown", e=>{
    if(strMode === "add" && strFrom && !e.target.closest(".item")) clearPick();
  });
  strings.addEventListener("click", e=>{
    if(strMode !== "cut") return;
    const p = e.target.closest("path.str");
    if(p && p.dataset.k) cutString(p.dataset.k);
  });
  window.addEventListener("resize", drawStrings);
  document.addEventListener("keydown", e=>{
    if(e.key !== "Escape" || !strMode) return;
    if(document.querySelector(".overlay")) return;   // the overlay handler has it
    setStrMode(null);
  });
}

/* ============================================================
   OVERLAYS
   ============================================================ */
function overlay(html, cls){
  const o = el("div","overlay");
  o.innerHTML = `<div class="sheet ${cls||""}"><button class="x" aria-label="Close">✕</button><div class="body">${html}</div></div>`;
  o.addEventListener("click", e=>{ if(e.target===o) o.remove(); });
  o.querySelector(".x").addEventListener("click", ()=>o.remove());
  document.body.appendChild(o);
  if(!(cls||"").includes("bibsheet")) linkifyRefs(o.querySelector(".body"));
  return o;
}
document.addEventListener("keydown", e=>{
  if(e.key==="Escape"){ const os=document.querySelectorAll(".overlay"); if(os.length) os[os.length-1].remove(); }
});
/* Some documents open out into a place you can walk about in. It opens over
   the case rather than in a tab, so a team never loses the file it is working
   on -- and so a handout file that carries the page inside it works the same
   way as the website, with nothing to fetch. */
const TOURS = (typeof window !== "undefined" && window.__TOURS__) || {};
function tourLink(item){
  if(!item.tour) return "";
  const held = !!TOURS[item.tour.href];
  const btn = held
    ? `<button class="tourbtn" data-tour="${item.id}">${item.tour.label}</button>`
    : `<a class="tourbtn" data-tour="${item.id}" href="${item.tour.href}">${item.tour.label}</a>`;
  return `<div class="tourbar">${btn}
    <span class="tournote">${item.tour.note || ""}</span></div>`;
}
function openTour(item){
  if(!item || !item.tour) return;
  const o = el("div","overlay tourview", `
    <div class="tourwrap">
      <div class="tourhead">
        <span class="tourttl">${item.tour.label}</span>
        <span class="toursub">${item.title}</span>
        <button class="btn ghost tourclose">Close</button>
      </div>
      <iframe class="tourframe" title="${item.tour.label}"></iframe>
    </div>`);
  document.body.appendChild(o);
  const f = o.querySelector(".tourframe");
  const held = TOURS[item.tour.href];
  if(held) f.srcdoc = held; else f.src = item.tour.href;
  o.querySelector(".tourclose").addEventListener("click", ()=>o.remove());
}
document.addEventListener("click", e=>{
  const b = e.target.closest("[data-tour]");
  if(!b) return;
  if(e.metaKey || e.ctrlKey || e.shiftKey) return;   // let a real link open a tab
  e.preventDefault();
  openTour(byId(b.dataset.tour));
});
function wirePlates(root, title){
  root.querySelectorAll(".plate").forEach(pl=>{
    pl.classList.add("zoomable");
    pl.addEventListener("click", ()=>{
      const g = pl.querySelector("svg,img");
      if(g) overlay(`<div class="doc-kind">Enlarged</div><div class="doc-title">${title}</div><div class="plate">${g.outerHTML}</div>`, "wide");
    });
  });
}
function openItem(item){
  const o = overlay(`
    <div class="doc-kind">${item.kind}</div>
    <div class="doc-title">${item.title}</div>
    <div class="doc-sub">${item.sub||""}</div>
    <div class="rule"></div>
    ${tourLink(item)}
    <div class="doc-body">${item.body}</div>`);
  wirePlates(o, item.title);
}

/* ============================================================
   LOCKS
   ============================================================ */
function lockPip(){ $("#lockPip").textContent = locksDone(C,CS) + "/" + C.locks.length; }

/* ---------- wrong answers ---------- */
function wrongTail(){
  const left = WRONG_ALLOWED - (CS.wrong||0) + 1;
  return left <= 0 ? "" :
    ` (Wrong answer ${CS.wrong} of ${WRONG_ALLOWED + 1}. ${left} left.)`;
}
function wrongPip(){
  const el = $("#wrongPip"); if(!el || !CS) return;
  el.textContent = CS.failed ? "failed" :
                   Math.min(CS.wrong||0, WRONG_ALLOWED) + "/" + WRONG_ALLOWED;
  const bar = $("#btnWrong");
  if(bar){
    bar.classList.toggle("warn", (CS.wrong||0) >= WRONG_ALLOWED - 1 && !CS.failed);
    bar.title = "Wrong answers used. " + (WRONG_ALLOWED - (CS.wrong||0)) +
                " left before the case is failed. Only lock codes and enquiry " +
                "choices count \u2014 checking a grid or the pinboard is free.";
  }
}

/* The chip in the top bar explains itself, and gives a teacher a way back in
   even after a team has restarted the case. */
function openWrong(){
  if(!CS) return;
  const left = Math.max(0, WRONG_ALLOWED - (CS.wrong||0));
  const o = overlay(`
    <div class="doc-kind">B.I.B. &middot; Standing order 5</div>
    <div class="doc-title">Wrong answers</div>
    <div class="rule"></div>
    <div class="doc-body">
      <p>An investigator may be wrong <b>${WRONG_ALLOWED} times</b> on a case. This team
         has used <b>${CS.wrong||0}</b>${CS.failed ? " and the case has been failed." :
         `, so <b>${left}</b> ${left===1?"is":"are"} left.`}</p>
      <p><b>What costs you one:</b> entering a lock code that is wrong, and choosing
         the wrong name or answer in an enquiry.</p>
      <p><b>What is free:</b> reading any document, opening the folder, taking notes,
         and checking a grid, a crossword or the pinboard. Checking your working is
         never punished \u2014 only committing to an answer is.</p>
    </div>
    <div class="row" id="wrongRow"></div>`);
  const row = o.querySelector("#wrongRow");
  if(CS.snapshot){
    const b = el("button","btn ghost","Teacher: restore earlier progress");
    b.addEventListener("click", ()=>{
      if(!confirm("Restore this team's earlier progress and give them five more wrong answers?\n\nThis is a teacher decision \u2014 it puts back every document, pin and code they had before the case was failed.")) return;
      const snap = CS.snapshot;
      S.cases[C.id] = Object.assign(NEW_CASE_STATE(), snap,
                                    {wrong:0, failed:false, snapshot:null});
      CS = stateFor(C.id); save();
      o.remove(); openCase(CASE_REG[C.id] || C);
    });
    row.appendChild(b);
  }
}

/* Called when a student commits to an answer and it is wrong. Returns true if
   that was the one that failed the case. */
function strike(){
  if(!CS || CS.failed) return false;
  CS.wrong = (CS.wrong||0) + 1;
  if(CS.wrong > WRONG_ALLOWED){
    // Keep everything as it stands so a teacher can put it back.
    CS.snapshot = JSON.parse(JSON.stringify(
      Object.assign({}, CS, {snapshot:null})));
    CS.failed = true;
    save(); wrongPip();
    setTimeout(failCase, 900);
    return true;
  }
  save(); wrongPip();
  return false;
}

function failCase(){
  document.querySelectorAll(".overlay").forEach(o=>o.remove());
  const o = el("div","overlay fail", `
    <div class="sheet">
      <div class="x">&times;</div>
      <div class="doc-kind">B.I.B. &middot; Department of Unsolved Antiquities</div>
      <div class="doc-title">The case has been taken off you</div>
      <div class="rule"></div>
      <div class="doc-body">
        <p>You have used <b>${WRONG_ALLOWED + 1} wrong answers</b> on ${C.code}. The Bureau
           does not let a team keep guessing at a file: every wrong code and every
           wrong name in an enquiry is a decision you committed to before you had
           read enough.</p>
        <p><b>The case has been closed and reset.</b> Everything you had opened is
           locked again, and the board is cleared. You may take it down off the
           shelf and work it properly from the beginning.</p>
        <p class="margin-note">Reading the documents costs nothing. Checking a grid,
           a crossword or the pinboard costs nothing. Only committing to an answer
           costs you one of your five.</p>
      </div>
      <div class="row">
        <button class="btn" id="failRestart">Start the case again</button>
        <button class="btn ghost" id="failTeacher">Teacher: restore this case</button>
      </div>
    </div>`);
  document.body.appendChild(o);
  o.querySelector(".x").addEventListener("click", ()=>o.remove());
  o.querySelector("#failRestart").addEventListener("click", ()=>{
    const snap = CS.snapshot;
    S.cases[C.id] = NEW_CASE_STATE();
    S.cases[C.id].snapshot = snap;      // a teacher can still put it back
    CS = stateFor(C.id); save();
    o.remove(); showShelf();
  });
  o.querySelector("#failTeacher").addEventListener("click", ()=>{
    if(!confirm("Restore this team's progress and give them five more wrong answers?\n\nThis is a teacher decision \u2014 it puts back every document, pin and code they had before the case was failed.")) return;
    const snap = CS.snapshot;
    if(snap){
      S.cases[C.id] = Object.assign(NEW_CASE_STATE(), snap,
                                    {wrong:0, failed:false, snapshot:null});
    } else {
      CS.wrong = 0; CS.failed = false;
    }
    CS = stateFor(C.id); save();
    o.remove(); openCase(CASE_REG[C.id] || C);
  });
}

function openLocks(){
  const o = overlay(`<div class="doc-kind" style="color:var(--accent-2)">Sealed</div>
    <div class="doc-title" style="color:#f3e8d4">Locked parts of the file</div>
    <div class="doc-sub" style="color:#a08d6d">Every code is hidden in the documents you already have.</div>
    <div id="lockList"></div>`);
  const sh = o.querySelector(".sheet");
  sh.style.background = "#1b1410"; sh.style.color = "#f0e6d6";
  const list = o.querySelector("#lockList");
  C.locks.forEach(L=>list.appendChild(lockCard(L)));
}
function lockCard(L){
  const done = CS[L.id];
  const c = el("div","lockcard"+(done?" done":""));
  c.innerHTML = `<div class="st">${done?"● Open":"● Sealed"}</div>
    <h3>${L.name}</h3><p>${done ? L.reward : L.blurb}</p>`;
  if(done) return c;

  const ul = el("ul","qs");
  L.questions.forEach(q=>ul.appendChild(el("li",null,q)));
  c.appendChild(ul);

  const box = el("div","codebox");
  const inp = el("input");
  inp.maxLength = L.len;
  inp.placeholder = L.type==="number" ? "0".repeat(L.len) : "?".repeat(L.len);
  if(L.type==="number") inp.inputMode = "numeric";
  const go = el("button","btn", L.type==="number"?"Enter code":"Enter keyword");
  const hb = el("button","btn ghost","Need a hint");
  box.append(inp, go, hb);
  c.appendChild(box);
  const msg = el("div","msg"); c.appendChild(msg);
  const hw  = el("div","hintwrap"); c.appendChild(hw);

  CS.hints[L.id] = CS.hints[L.id] || 0;
  const showHints = ()=>{
    hw.innerHTML = "";
    for(let i=0;i<CS.hints[L.id];i++) hw.appendChild(el("div","hint",`<b>Hint ${i+1}.</b> ${L.hints[i]}`));
    if(CS.hints[L.id] >= L.hints.length){ hb.disabled = true; hb.textContent = "No hints left"; }
  };
  showHints();
  hb.addEventListener("click", ()=>{
    if(CS.hints[L.id] < L.hints.length){ CS.hints[L.id]++; save(); showHints(); }
  });

  const attempt = ()=>{
    const v = inp.value.trim().toUpperCase();
    if(v.length < L.len){ msg.className="msg bad"; msg.textContent = `That is not a complete ${L.type==="number"?"code":"keyword"} yet.`; return; }
    if(v === L.code){
      CS[L.id] = true; save();
      msg.className="msg good"; msg.textContent = "Open. " + L.reward;
      renderDesk(); lockPip(); toolBtn();
      setTimeout(()=>c.replaceWith(lockCard(L)), 1400);
    } else {
      const dead = strike();
      msg.className="msg bad";
      msg.textContent = L.wrong + (dead ? "" : wrongTail());
      inp.select();
    }
  };
  go.addEventListener("click", attempt);
  inp.addEventListener("keydown", e=>{ if(e.key==="Enter") attempt(); });
  return c;
}

/* ============================================================
   THE ELIMINATION BOARD
   ============================================================ */
let selChip = null;
let readChip = null;   // the evidence opened out under the rail
function showBoard(show){
  board.classList.toggle("hidden", !show);
  $("#btnBoard").classList.toggle("on", show);
  $("#deskHint").classList.toggle("hidden", show);
  $("#stringTools").classList.toggle("hidden", show);
  if(show && strMode) setStrMode(null);
  if(show) renderBoard(); else drawStrings();
}
function renderBoard(keepScroll){
  const sy = (keepScroll === false) ? 0 : board.scrollTop;
  const allPinned = C.theories.every(t=>CS.locked[t.id]);
  board.innerHTML = `<div class="inner">
    <div class="boardhead"><div>
      <h2>${C.boardTitle}</h2>
      <p>${C.boardIntro}</p>
    </div></div>
    <div class="theories" id="theories"></div>
    <div class="rail">
      <h5>Evidence available</h5>
      <div class="sub">Tap a piece of evidence, then tap the explanation it destroys. Tap a filled slot to take it back.</div>
      <div class="chips" id="chips"></div>
      <div class="railread" id="railRead"></div>
    </div>
    <div class="boardbar">
      <button class="btn" id="checkBtn">Test the board</button>
      <button class="btn ghost" id="clearBtn">Clear unlocked slots</button>
      <button class="btn" id="accuseBtn" ${allPinned?"":"disabled"}>${allPinned?"Open the accusation form":"Accusation form — locked"}</button>
      <span class="small" id="boardMsg"></span>
    </div>
  </div>`;
  const tw = board.querySelector("#theories");
  C.theories.forEach(t=>{
    const done = CS.locked[t.id], pinned = CS.pins[t.id];
    const c = el("div","theory");
    c.innerHTML = `<div class="pin"></div>
      <h4>${t.title}</h4>
      <div class="claim">${t.claim}</div>
      <div class="slot ${pinned?"filled":""} ${done?"right":""}" data-t="${t.id}">
        ${pinned ? byId(pinned).title : "Pin the evidence that disproves this"}
      </div>
      ${done?`<div class="verdict right">${t.verdict}</div>`:""}`;
    c.querySelector(".slot").addEventListener("click", ()=>{
      if(CS.locked[t.id]) return;
      if(selChip){ CS.pins[t.id] = selChip; selChip = null; save(); renderBoard(); }
      else if(CS.pins[t.id]){ delete CS.pins[t.id]; save(); renderBoard(); }
    });
    tw.appendChild(c);
  });
  const used = new Set(Object.values(CS.pins));
  const chips = board.querySelector("#chips");
  available().filter(i=>!i.notEvidence).forEach(i=>{
    const ch = el("div","chip"+(used.has(i.id)?" used":"")+(selChip===i.id?" sel":"")
                        +(readChip===i.id?" reading":""), i.title);
    ch.addEventListener("click", ()=>{
      // Reading a piece of evidence is always free. Picking it up to pin
      // only applies while it is still spare.
      readChip = (readChip === i.id && !used.has(i.id) && selChip === i.id) ? null : i.id;
      if(!used.has(i.id)) selChip = (selChip === i.id ? null : i.id);
      renderBoard();
      // If the reader has opened below the fold, bring it into view.
      if(readChip){
        const box = board.querySelector("#railRead");
        if(box) requestAnimationFrame(()=>box.scrollIntoView({block:"nearest", behavior:"smooth"}));
      }
    });
    chips.appendChild(ch);
  });
  drawRailRead();
  board.querySelector("#checkBtn").addEventListener("click", checkBoard);
  board.scrollTop = sy;
  board.querySelector("#clearBtn").addEventListener("click", ()=>{
    C.theories.forEach(t=>{ if(!CS.locked[t.id]) delete CS.pins[t.id]; });
    selChip=null; save(); renderBoard();
  });
  if(allPinned) board.querySelector("#accuseBtn").addEventListener("click", openAccusation);
}

/* The evidence you have tapped, opened out under the rail so you can read
   it without leaving the board. */
function drawRailRead(){
  const box = board.querySelector("#railRead");
  if(!box) return;
  const item = readChip && byId(readChip);
  if(!item){
    box.innerHTML = `<div class="rr-empty">Tap any piece of evidence to read it here without leaving the board.</div>`;
    return;
  }
  const used = Object.entries(CS.pins).find(([t,v])=>v===item.id);
  const th   = used && C.theories.find(t=>t.id===used[0]);
  box.innerHTML = `
    <div class="rr-paper">
      <button class="rr-x" title="Close">&times;</button>
      <div class="doc-kind">${item.kind}</div>
      <div class="doc-title">${item.title}</div>
      <div class="doc-sub">${item.sub||""}</div>
      ${th ? `<div class="rr-where">Pinned to &ldquo;${th.title}&rdquo;</div>` : ""}
      <div class="rule"></div>
      ${tourLink(item)}
      <div class="doc-body">${item.body}</div>
    </div>`;
  wirePlates(box, item.title);
  box.querySelector(".rr-x").addEventListener("click", ()=>{ readChip = null; renderBoard(); });
}
function checkBoard(){
  let right=0, wrong=0, empty=0;
  C.theories.forEach(t=>{
    if(CS.locked[t.id]){ right++; return; }
    const p = CS.pins[t.id];
    if(!p){ empty++; return; }
    if(p===t.answer){ CS.locked[t.id]=true; right++; }
    else { delete CS.pins[t.id]; wrong++; }
  });
  save(); renderBoard();
  const m = board.querySelector("#boardMsg"), n = C.theories.length;
  if(right===n){ m.style.color="#1f4d2b"; m.textContent = "All eliminated. The accusation form is open."; }
  else {
    m.style.color="#5c2016";
    m.textContent = `${right} of ${n} correct. ${wrong?wrong+" wrong pin"+(wrong>1?"s":"")+" removed. ":""}${empty?empty+" still empty. ":""}Go back to the desk and read again.`;
  }
}

/* ============================================================
   ACCUSATION + DEBRIEF
   ============================================================ */
function openAccusation(){
  let pick = null;
  const o = overlay(`
    <div class="doc-kind">Final step</div>
    <div class="doc-title">Accusation Form — ${C.code}</div>
    <div class="doc-sub">You have eliminated every explanation on the board. State your conclusion.</div>
    <div class="rule"></div>
    <div class="doc-body"><p>${C.accusationIntro}</p></div>
    <div class="choices" id="ch"></div>
    <p class="doc-body" style="margin-bottom:6px"><b>Give your reasoning.</b> Name at least two pieces of evidence.</p>
    <textarea id="why" placeholder="We concluded this because…"></textarea>
    <div style="margin-top:14px"><button class="btn" id="submit">File the conclusion</button> <span class="msg" id="am"></span></div>`);
  const ch = o.querySelector("#ch");
  C.verdicts.forEach(v=>{
    const b = el("button","choice",v.text);
    b.addEventListener("click", ()=>{
      pick = v.id;
      ch.querySelectorAll(".choice").forEach(x=>x.classList.remove("sel"));
      b.classList.add("sel");
    });
    ch.appendChild(b);
  });
  const why = o.querySelector("#why");
  why.value = CS.reasoning || "";
  why.addEventListener("input", ()=>{ CS.reasoning = why.value; save(); });
  o.querySelector("#submit").addEventListener("click", ()=>{
    const m = o.querySelector("#am");
    if(!pick){ m.className="msg bad"; m.textContent="Choose a conclusion first."; return; }
    if(why.value.trim().length < 40){ m.className="msg bad"; m.textContent="Write your reasoning first — at least a couple of sentences."; return; }
    if(pick!==C.correct){
      m.className="msg bad";
      m.textContent="You pinned the evidence that destroys that explanation yourself. Look at your own board again.";
      return;
    }
    CS.solved = true; save();
    o.remove(); debrief();
  });
}
function debrief(){
  const verdicts = C.theories.map(t=>`<h4>${t.title}</h4><p>${t.verdict}</p>`).join("");
  const qs = C.debrief.questions.map(q=>`<li>${q}</li>`).join("");
  overlay(`
    ${SVG.finalSeal}
    <div class="doc-kind" style="text-align:center">Case closed</div>
    <div class="doc-title" style="text-align:center">${C.code} — Conclusion Filed</div>
    <div class="doc-sub" style="text-align:center">The Bible Investigation Bureau · Department of Unsolved Antiquities</div>
    <div class="rule"></div>
    <div class="doc-body">
      <p>${C.debrief.lead}</p>
      <h4>Your reasoning, as filed</h4>
      <p style="font-family:var(--hand);font-size:19px;white-space:pre-wrap">${esc(CS.reasoning)}</p>
      <div class="rule"></div>
      <h4 style="font-size:13px">The full elimination</h4>
      ${verdicts}
      <div class="rule"></div>
      <h4>Now think about it</h4>
      <ul>${qs}</ul>
      <h4>Read it for yourself</h4>
      <p>${C.debrief.refs}</p>
    </div>
    ${C.invite ? `<div class="inv-door">
      <div class="inv-door-h">Before you file this one</div>
      <p>This file ends with a question, and it is not about the evidence. It is
         about you, nobody can see your answer, and any answer you give is a real one.</p>
      <button class="btn inv-yes" id="dbInvite">Open the last page</button>
    </div>` : ""}
    <div style="margin-top:16px;display:flex;gap:10px;flex-wrap:wrap">
      <button class="btn" id="dbCert">🏅 Print your certificate</button>
      <button class="btn ghost" id="dbSheet">Open the answer sheet</button>
      <button class="btn ghost" id="dbHome">Back to the case shelf</button>
    </div>`, "wide");
  if(C.invite) $("#dbInvite").addEventListener("click", openInvite);
  $("#dbCert").addEventListener("click", ()=>openCertificate(C));
  $("#dbSheet").addEventListener("click", answerSheet);
  $("#dbHome").addEventListener("click", ()=>{
    document.querySelectorAll(".overlay").forEach(o=>o.remove());
    showShelf();
  });
}

/* ============================================================
   THE CASE TOOL BUTTON — crossword or enquiry, depending on the case
   ============================================================ */
function caseTool(){
  if(!C) return null;
  if(C.crossword) return {open:openCrossword, label:"\uD83E\uDDE9 Riddle", ready:true};
  if(C.ladder)    return {open:openLadder,   label:"\u2696 Enquiry",
                          ready:stageNow() >= 1};
  if(C.matrix)    return {open:openMatrix,   label:C.matrix.button || "\uD83D\uDCCA Grid",
                          ready:stageNow() >= (C.matrix.fromStage === undefined ? 1 : C.matrix.fromStage)};
  if(C.scales)    return {open:openScales,   label:C.scales.button || "\u2696 The scales",
                          ready:stageNow() >= (C.scales.fromStage === undefined ? 1 : C.scales.fromStage)};
  return null;
}
function toolBtn(){
  const b = $("#btnRiddle"), t = caseTool();
  if(t && t.ready){ b.classList.remove("hidden"); b.textContent = t.label; }
  else b.classList.add("hidden");
}
function openTool(){ const t = caseTool(); if(t && t.ready) t.open(); }


/* ============================================================
   THE BALANCE SCALES

   Four words, each of them a unit of weight. The team puts stones on the pan
   until the beam sits level, one word at a time. Nothing here is guesswork: the
   table of weights on the desk gives every value, and the balance simply refuses
   to lie about the arithmetic.
   ============================================================ */
function scalesTotal(n){
  const SC = C.scales, put = (CS.sc && CS.sc[n]) || [];
  return put.reduce((t,id)=>{
    const st = SC.stones.find(s=>s.id===id);
    return t + (st ? st.value : 0);
  }, 0);
}
function scalesDone(){
  const SC = C.scales; let n = 0;
  for(const r of SC.rounds){ if(scalesTotal(r.n) === r.target) n++; else break; }
  return n;
}
function openScales(){
  const SC = C.scales;
  CS.sc = CS.sc || {};
  const o = overlay("<div id='scwrap'></div>", "wide");
  const wrap = o.querySelector("#scwrap");

  const unitName = v => v === 1 ? (SC.unitOne || SC.unit.replace(/s$/, "")) : SC.unit;

  const beam = (diff, target)=>{
    const t = Math.max(-1, Math.min(1, diff / Math.max(target, 1))) * 13;
    const dy = t * 1.6;
    return `<svg class="scsvg" viewBox="0 0 300 132" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="140" y="34" width="20" height="76" rx="4" fill="#8a7551"/>
      <rect x="112" y="110" width="76" height="10" rx="4" fill="#8a7551"/>
      <g transform="rotate(${t} 150 34)">
        <rect x="34" y="30" width="232" height="8" rx="4" fill="#a08a63"/>
        <circle cx="150" cy="34" r="9" fill="#6d5a3d"/>
        <line x1="50" y1="36" x2="50" y2="66" stroke="#a08a63" stroke-width="3"/>
        <line x1="250" y1="36" x2="250" y2="66" stroke="#a08a63" stroke-width="3"/>
        <path d="M22 66 h56 a34 34 0 0 1 -56 0 z" fill="#c9ab6f" stroke="#8a7551" stroke-width="2"/>
        <path d="M222 66 h56 a34 34 0 0 1 -56 0 z" fill="#c9ab6f" stroke="#8a7551" stroke-width="2"/>
      </g>
      <text x="50" y="${124 - dy}" text-anchor="middle" font-family="Georgia,serif" font-size="13" fill="#6d5a3d">the word</text>
      <text x="250" y="${124 + dy}" text-anchor="middle" font-family="Georgia,serif" font-size="13" fill="#6d5a3d">your stones</text>
    </svg>`;
  };

  function draw(){
    const done = scalesDone(), finished = done === SC.rounds.length;
    const rounds = SC.rounds.map(r=>{
      const total = scalesTotal(r.n), solved = total === r.target;
      if(solved && r.n <= done) return `<div class="scr done">
        <div class="scn">Word ${r.n} &middot; balanced</div>
        <h4>${r.word}</h4>
        <p><b>${r.meaning}</b> &mdash; ${r.target} ${unitName(r.target)}. ${r.note||""}</p></div>`;
      if(r.n !== done + 1) return `<div class="scr sealed">
        <div class="scn">Word ${r.n} &middot; sealed</div>
        <h4>${r.n <= done ? r.word : "&mdash;"}</h4>
        <p>This word comes up when word ${r.n-1} balances.</p></div>`;
      const put = (CS.sc[r.n] || []);
      return `<div class="scr live">
        <div class="scn">Word ${r.n} &middot; on the scales</div>
        <h4>${r.word}</h4>
        <p>${r.prompt}</p>
        ${beam(total - r.target, r.target)}
        <div class="scpan">
          <div class="scsum ${total===r.target?"ok":""}">On the pan: <b>${total}</b> ${unitName(total)}</div>
          <div class="scput">${put.length
            ? put.map((id,i)=>{ const st=SC.stones.find(s=>s.id===id);
                return `<button class="scstone in" data-drop="${i}">${st.label}</button>`; }).join("")
            : `<span class="scempty">the pan is empty</span>`}</div>
        </div>
        <div class="sctray">${SC.stones.map(s=>
          `<button class="scstone" data-add="${s.id}">${s.label}</button>`).join("")}</div>
        <div class="msg" id="scm"></div></div>`;
    }).join("");

    const strip = finished
      ? `<div class="mxdone"><p>${SC.reveal.lead}</p>
         <div class="mxkey">${[...SC.keyword].map(ch=>`<span>${ch}</span>`).join("")}</div>
         ${SC.reveal.caption?`<p class="mxcap">${SC.reveal.caption}</p>`:""}</div>`
      : "";

    wrap.innerHTML = `
      <div class="doc-kind">${C.code}</div>
      <div class="doc-title">${SC.title}</div>
      <div class="doc-sub">${SC.blurb}</div>
      <div class="rule"></div>
      <div class="scrounds">${rounds}</div>
      ${strip}
      <div style="margin-top:16px;display:flex;gap:10px;flex-wrap:wrap;align-items:center">
        <button class="btn ghost" id="scReset">Clear the scales</button>
        <span class="small">Every value is on <b>The Table of Weights</b>. The beam will not settle until the arithmetic is right.</span>
      </div>`;

    const cur = done + 1;
    wrap.querySelectorAll("[data-add]").forEach(b=>b.addEventListener("click", ()=>{
      CS.sc[cur] = (CS.sc[cur] || []).concat([b.dataset.add]);
      save(); draw();
    }));
    wrap.querySelectorAll("[data-drop]").forEach(b=>b.addEventListener("click", ()=>{
      const arr = (CS.sc[cur] || []).slice();
      arr.splice(+b.dataset.drop, 1);
      CS.sc[cur] = arr; save(); draw();
    }));
    wrap.querySelector("#scReset").addEventListener("click", ()=>{
      if(!confirm("Clear every word and start the weighing again?")) return;
      CS.sc = {}; save(); draw();
    });
    linkifyRefs(wrap);
  }
  draw();
}

/* ============================================================
   THE MATRIX — a grid the team fills in from a document

   One mechanic, several uses. A search grid (which district was searched on
   which day), a hypothesis table (what each explanation predicts would be
   found), a pattern chart, a testimony grid. In every case the team transfers
   what a document says into a grid, and the shape that appears — a row of
   blanks, a column ticked all the way down — is the answer.
   ============================================================ */
function matrixKey(r, c){ return r + "|" + c; }
function matrixRight(){
  const MX = C.matrix, want = new Set(MX.truth), got = CS.mx || {};
  const marked = Object.keys(got).filter(k=>got[k]);
  return marked.length === want.size && marked.every(k=>want.has(k));
}
function openMatrix(){
  const MX = C.matrix;
  CS.mx = CS.mx || {};
  const o = overlay("<div id='mxwrap'></div>", "wide");
  const wrap = o.querySelector("#mxwrap");

  function draw(msg){
    const solved = matrixRight();
    const head = MX.cols.map(c=>`<th><span>${c.label}</span>${c.note?`<i>${c.note}</i>`:""}</th>`).join("");
    const body = MX.rows.map(r=>`<tr>
        <th class="mxrow">${r.label}${r.note?`<i>${r.note}</i>`:""}</th>
        ${MX.cols.map(c=>{
          const k = matrixKey(r.id, c.id), on = !!CS.mx[k];
          return `<td><button class="mxc${on?" on":""}" data-k="${k}"
            aria-pressed="${on}" aria-label="${r.label} — ${c.label}">${on?MX.mark||"✔":""}</button></td>`;
        }).join("")}
      </tr>`).join("");
    const foot = MX.foot ? `<tr class="mxfoot">
        <th class="mxrow">${MX.foot.label}${MX.foot.note?`<i>${MX.foot.note}</i>`:""}</th>
        ${MX.cols.map(c=>`<td><span class="mxf">${MX.foot.cells[c.id]||""}</span></td>`).join("")}
      </tr>` : "";
    const reveal = solved ? `
      <div class="mxdone">
        <p>${MX.reveal.lead}</p>
        <div class="mxkey">${[...MX.reveal.answer].map(ch=>`<span>${ch}</span>`).join("")}</div>
        ${MX.reveal.caption?`<p class="mxcap">${MX.reveal.caption}</p>`:""}
      </div>` : "";

    wrap.innerHTML = `
      <div class="doc-kind">${C.code}</div>
      <div class="doc-title">${MX.title}</div>
      <div class="doc-sub">${MX.blurb}</div>
      <div class="rule"></div>
      <div class="mxscroll">
        <table class="mx">
          <tr><th class="mxcorner">${MX.corner||""}</th>${head}</tr>
          ${body}${foot}
        </table>
      </div>
      ${MX.note?`<p class="mxnote">${MX.note}</p>`:""}
      ${reveal}
      <div style="margin-top:16px;display:flex;gap:10px;flex-wrap:wrap;align-items:center">
        <button class="btn" id="mxCheck">${MX.verify||"Check the grid"}</button>
        <button class="btn ghost" id="mxClear">Clear</button>
        <span class="msg" id="mxMsg">${msg||""}</span>
      </div>`;

    wrap.querySelectorAll(".mxc").forEach(b=>b.addEventListener("click", ()=>{
      const k = b.dataset.k;
      if(CS.mx[k]) delete CS.mx[k]; else CS.mx[k] = 1;
      save(); draw();
    }));
    wrap.querySelector("#mxCheck").addEventListener("click", ()=>{
      const want = new Set(MX.truth);
      let wrong = 0, missing = 0;
      wrap.querySelectorAll(".mxc").forEach(b=>{
        const k = b.dataset.k, on = !!CS.mx[k], should = want.has(k);
        b.classList.toggle("bad", on && !should);
        b.classList.toggle("gap", !on && should);
        if(on && !should) wrong++;
        if(!on && should) missing++;
      });
      const m = wrap.querySelector("#mxMsg");
      if(!wrong && !missing){ draw(); }
      else {
        m.className = "msg bad";
        m.textContent =
          (wrong ? wrong + " mark" + (wrong>1?"s":"") + " the document does not support" : "") +
          (wrong && missing ? ", and " : "") +
          (missing ? missing + " still missing" : "") + ". Read it again, line by line.";
      }
    });
    wrap.querySelector("#mxClear").addEventListener("click", ()=>{
      if(!confirm("Clear the whole grid?")) return;
      CS.mx = {}; save(); draw();
    });
    linkifyRefs(wrap);
  }
  draw();
}

/* ============================================================
   THE ELIMINATION LADDER (THE ENQUIRY)
   ============================================================ */
function ladderDone(){
  const LD = C.ladder; let n = 0;
  for(const r of LD.rounds){ if(CS.ld[r.n]) n++; else break; }
  return n;
}
function openLadder(){
  const LD = C.ladder;
  CS.ld = CS.ld || {};
  const o = overlay("<div id='ldwrap'></div>", "wide");
  const wrap = o.querySelector("#ldwrap");

  function draw(){
    const done = ladderDone(), finished = done === LD.rounds.length;
    const rounds = LD.rounds.map(r=>{
      if(CS.ld[r.n]) return `<div class="ldr done">
        <div class="ldn">Round ${r.n} &middot; settled</div>
        <h4>${r.field}</h4>
        <div class="ldpick">${CS.ld[r.n]}</div>
        <p>${r.after}</p></div>`;
      if(r.n === done + 1) return `<div class="ldr live">
        <div class="ldn">Round ${r.n} &middot; open</div>
        <h4>${r.field}</h4>
        <div class="lddoc">Settled by <b>${r.doc}</b></div>
        <p>${r.clue}</p>
        <div class="ldopts">${r.options.map(op=>
          `<button class="ldopt" data-r="${r.n}" data-v="${op}">${op}</button>`).join("")}</div>
        <div class="msg" id="ldm"></div></div>`;
      return `<div class="ldr sealed">
        <div class="ldn">Round ${r.n} &middot; sealed</div>
        <h4>${r.field}</h4>
        <p>This round opens when round ${r.n-1} has been settled.</p></div>`;
    }).join("");
    const strip = finished
      ? `<div class="ldkey">${[...LD.keyword].map(ch=>`<span>${ch}</span>`).join("")}</div>
         <p class="ldfin">${LD.done}</p>`
      : `<div class="ldkey blank">${[...LD.keyword].map(()=>`<span>&nbsp;</span>`).join("")}</div>
         <p class="ldfin muted">The name appears here when all four rounds have been settled.</p>`;
    wrap.innerHTML = `
      <div class="doc-kind">${C.code}</div>
      <div class="doc-title">${LD.title}</div>
      <div class="doc-sub">${LD.blurb}</div>
      <div class="rule"></div>
      <div class="ldrounds">${rounds}</div>
      <div class="rule"></div>
      <div class="doc-body" style="margin:0"><b>${LD.strip}</b></div>
      ${strip}
      <div style="margin-top:16px;display:flex;gap:10px;flex-wrap:wrap;align-items:center">
        <button class="btn ghost" id="ldReset">Start the enquiry again</button>
        <span class="small">Each round is settled by a document on your desk. Read it before you choose.</span>
      </div>`;
    wrap.querySelectorAll(".ldopt").forEach(b=>b.addEventListener("click", ()=>{
      const r = LD.rounds.find(x=>x.n === +b.dataset.r);
      if(b.dataset.v === r.answer){ CS.ld[r.n] = r.answer; save(); draw(); }
      else {
        const dead = strike();
        b.classList.add("no");
        const m = wrap.querySelector("#ldm");
        if(m){ m.className = "msg bad"; m.textContent = r.wrong + (dead ? "" : wrongTail()); }
      }
    }));
    wrap.querySelector("#ldReset").addEventListener("click", ()=>{
      if(!confirm("Clear the enquiry and run all four rounds again?")) return;
      CS.ld = {}; save(); draw();
    });
    linkifyRefs(wrap);
  }
  draw();
}

/* ============================================================
   THE CROSSWORD (RIDDLE SHEET)
   ============================================================ */
function cwSolution(){
  const sol = {};
  C.crossword.entries.forEach(en=>{
    const dr = en.d==="A"?0:1, dc = en.d==="A"?1:0;
    [...en.a].forEach((ch,i)=> sol[(en.r+dr*i)+","+(en.c+dc*i)] = ch);
  });
  return sol;
}
function openCrossword(){
  const CW = C.crossword, sol = cwSolution();
  CS.cw = CS.cw || {};
  const markAt = {}; CW.marks.forEach(m=> markAt[m.r+","+m.c] = m.i);
  const startAt = {}; CW.entries.forEach(en=> startAt[en.r+","+en.c] = en.n);

  let cells = "";
  for(let r=0;r<CW.H;r++) for(let c=0;c<CW.W;c++){
    const k = r+","+c;
    if(!sol[k]){ cells += `<div class="cwc block"></div>`; continue; }
    cells += `<div class="cwc ${markAt[k]?"mark":""}" data-k="${k}">
      ${startAt[k]?`<span class="cn">${startAt[k]}</span>`:""}
      ${markAt[k]?`<span class="cm">${markAt[k]}</span>`:""}
      <input maxlength="1" data-k="${k}" value="${CS.cw[k]||""}" aria-label="row ${r+1} column ${c+1}">
    </div>`;
  }
  const clueList = d => CW.entries.filter(en=>en.d===d).sort((a,b)=>a.n-b.n)
    .map(en=>`<li data-e="${en.n}${en.d}"><b>${en.n}</b>${en.q} <i>(${en.a.length})</i></li>`).join("");
  const boxes = CW.marks.slice().sort((a,b)=>a.i-b.i)
    .map(m=>`<div class="cwbox" data-mk="${m.r},${m.c}"><span>${m.i}</span></div>`).join("");

  const o = overlay(`
    <div class="doc-kind">${C.code}</div>
    <div class="doc-title">${CW.title}</div>
    <div class="doc-sub">${CW.blurb}</div>
    <div class="rule"></div>
    <div class="cwwrap">
      <div class="cwgrid" style="--n:${CW.W}">${cells}</div>
      <div class="cwclues">
        <div class="cwcol"><h5>Across</h5><ol>${clueList("A")}</ol></div>
        <div class="cwcol"><h5>Down</h5><ol>${clueList("D")}</ol></div>
      </div>
    </div>
    <div class="rule"></div>
    <div class="doc-body" style="margin:0"><b>The numbered squares, in order:</b></div>
    <div class="cwstrip">${boxes}</div>
    <div style="margin-top:18px;display:flex;gap:10px;flex-wrap:wrap;align-items:center">
      <button class="btn" id="cwCheck">Check the sheet</button>
      <button class="btn ghost" id="cwClear">Clear</button>
      <span class="msg" id="cwMsg"></span>
    </div>`, "wide");

  const inputs = [...o.querySelectorAll(".cwc input")];
  const refreshStrip = ()=>{
    o.querySelectorAll(".cwbox").forEach(b=>{
      const v = (CS.cw[b.dataset.mk]||"").toUpperCase();
      b.childNodes.forEach(n=>{ if(n.nodeType===3) n.remove(); });
      if(v) b.appendChild(document.createTextNode(v));
      b.classList.toggle("full", !!v);
    });
    // strike through clues that are fully and correctly filled
    C.crossword.entries.forEach(en=>{
      const dr = en.d==="A"?0:1, dc = en.d==="A"?1:0;
      const got = [...en.a].every((ch,i)=> (CS.cw[(en.r+dr*i)+","+(en.c+dc*i)]||"") === ch);
      const li = o.querySelector(`[data-e="${en.n}${en.d}"]`);
      if(li) li.classList.toggle("got", got);
    });
  };
  inputs.forEach((inp,idx)=>{
    inp.addEventListener("input", ()=>{
      const v = inp.value.replace(/[^a-zA-Z]/g,"").toUpperCase();
      inp.value = v;
      if(v) CS.cw[inp.dataset.k] = v; else delete CS.cw[inp.dataset.k];
      inp.closest(".cwc").classList.remove("bad");
      save(); refreshStrip();
      if(v && inputs[idx+1]) inputs[idx+1].focus();
    });
    inp.addEventListener("keydown", e=>{
      if(e.key==="Backspace" && !inp.value && inputs[idx-1]){ inputs[idx-1].focus(); }
    });
  });
  o.querySelector("#cwCheck").addEventListener("click", ()=>{
    let wrong=0, blank=0, right=0;
    inputs.forEach(inp=>{
      const k = inp.dataset.k, v = (CS.cw[k]||"").toUpperCase(), cell = inp.closest(".cwc");
      cell.classList.remove("bad");
      if(!v){ blank++; return; }
      if(v===sol[k]) right++; else { wrong++; cell.classList.add("bad"); }
    });
    const m = o.querySelector("#cwMsg");
    if(!wrong && !blank){ m.className="msg good"; m.textContent="Every square is right. Read the numbered squares in order."; }
    else if(wrong){ m.className="msg bad"; m.textContent=`${wrong} letter${wrong>1?"s are":" is"} wrong (shown in red). ${blank?blank+" still empty.":""}`; }
    else { m.className="msg bad"; m.textContent=`Nothing wrong so far — ${blank} square${blank>1?"s":""} still empty.`; }
  });
  o.querySelector("#cwClear").addEventListener("click", ()=>{
    if(!confirm("Clear the whole sheet?")) return;
    CS.cw = {}; save();
    inputs.forEach(i=>{ i.value=""; i.closest(".cwc").classList.remove("bad"); });
    refreshStrip();
    o.querySelector("#cwMsg").textContent = "";
  });
  refreshStrip();
}

/* ============================================================
   PRINTABLE ANSWER SHEET
   ============================================================ */
function answerSheet(){
  const line = (id, label, rows) =>
    `<div class="fld"><label>${label}</label><div class="wl" contenteditable="true" data-f="${id}" style="min-height:${rows*26}px"></div></div>`;
  const rowsHtml = C.theories.map((t,i)=>`
    <tr>
      <td class="th">${t.title}</td>
      <td><div class="wl" contenteditable="true" data-f="ev${i}" style="min-height:52px"></div></td>
      <td><div class="wl" contenteditable="true" data-f="wh${i}" style="min-height:52px"></div></td>
    </tr>`).join("");
  const lockRows = C.locks.map((L,i)=>`
    <tr>
      <td class="th">${L.name}</td>
      <td style="width:110px"><div class="wl" contenteditable="true" data-f="lc${i}" style="min-height:34px"></div></td>
      <td><div class="wl" contenteditable="true" data-f="lh${i}" style="min-height:34px"></div></td>
    </tr>`).join("");

  const o = overlay(`
    <div class="sheetdoc">
      <div class="sd-head">
        <div>
          <div class="doc-kind">The Bible Investigation Bureau · Case Record</div>
          <div class="doc-title" style="margin:2px 0 0">${C.code} — ${C.title}</div>
        </div>
        <div class="sd-names">
          <div class="fld inline"><label>Investigators</label><div class="wl" contenteditable="true" data-f="names"></div></div>
          <div class="fld inline"><label>Date</label><div class="wl" contenteditable="true" data-f="date"></div></div>
        </div>
      </div>
      <div class="rule"></div>

      <h4 class="sd-h">1 · The locks</h4>
      <table class="sd-table"><tr><th>Locked file</th><th>Code</th><th>How we worked it out</th></tr>${lockRows}</table>

      <h4 class="sd-h">2 · Eliminating the explanations</h4>
      <table class="sd-table"><tr><th style="width:26%">Explanation</th><th style="width:30%">Evidence that destroys it</th><th>Why that settles it</th></tr>${rowsHtml}</table>

      <h4 class="sd-h">3 · Our conclusion</h4>
      ${line("concl","What actually happened, in one sentence", 2)}
      ${line("why","Our reasoning — name at least two pieces of evidence", 5)}

      <h4 class="sd-h">4 · The hardest part</h4>
      ${line("hard","Which single piece of evidence was hardest to explain away, and why?", 3)}

      <div class="sd-foot">${C.code} · ${C.period} · ${C.debrief.refs}</div>
    </div>
    <div class="noprint" style="margin-top:16px;display:flex;gap:10px;flex-wrap:wrap;align-items:center">
      <button class="btn" id="asPrint">Print this sheet</button>
      <span class="small">Type straight into the boxes, or print it blank and write on it. Anything you type is saved.</span>
    </div>`, "wide sheetmode");
  o.classList.add("printme");

  o.querySelectorAll("[data-f]").forEach(n=>{
    const k = n.dataset.f;
    if(CS.sheet[k]) n.textContent = CS.sheet[k];
    n.addEventListener("input", ()=>{ CS.sheet[k] = n.textContent; save(); });
  });
  o.querySelector("#asPrint").addEventListener("click", ()=>window.print());
}

/* ============================================================
   TEACHER NOTES / MENU
   ============================================================ */
function teacherNotes(){
  const blocks = CASES.map(cdef=>`
    <details class="tnotes" data-tn="${cdef.id}">
      <summary>${cdef.code} — ${cdef.title} <span>${cdef.period}</span></summary>
      <div class="tnbody">Loading the case…</div>
    </details>`).join("");
  const o = overlay(`
    <div class="doc-kind">The Bible Investigation Bureau</div>
    <div class="doc-title">Teacher Notes</div>
    <div class="rule"></div>
    <div class="doc-body">
      <h4>For students</h4>
      <p>Work in pairs or threes. Read everything on the desk first. Drag documents around to group them. Click any picture to enlarge it. Progress saves on this device, so a group can stop mid-lesson and pick it up next time.</p>
      <h4>Running it</h4>
      <p><b>Time:</b> 60–100 minutes per case, or two lessons. <b>Level:</b> Years 7–8. No accounts, and no internet needed once the page has loaded.</p>
      <p><b>Skills:</b> reading for detail across multiple sources, telling evidence apart from assertion, cross-referencing, elimination reasoning, and writing a justified conclusion. The printable answer sheet (top bar, inside a case) gives you their reasoning to mark, not just their final answer.</p>
      ${blocks}
      <h4>Running it on paper</h4>
      <p>Every case prints as a full <b>paper edition</b>: cut-out evidence cards, sealed bundle envelopes, the board, the accusation form, a walkthrough manuscript the team runs itself from, and an answer key for you. No device needed at all once it is printed — which also covers the day the Chromebooks are booked out.</p>
      <p><button class="btn ghost" id="folderBtn">🗂 Print the Investigator's File starter pack</button> — folder cover, index of every case, and spine labels for the scrapbook.</p>
      <h4>Reset</h4>
      <p>This clears every case's progress on this device.</p>
      <button class="btn ghost" id="resetBtn">Clear all progress</button>
    </div>`, "wide");
  const fillNotes = (d)=>{
    const id = d.dataset.tn, body = d.querySelector(".tnbody");
    if(d.dataset.done) return;
    d.dataset.done = "1";
    loadCase(id).then(c=>{
      body.innerHTML = `
        <p><b>Answers:</b> ${c.teacher.answers}</p>
        <p><b>Board pairs:</b> ${c.teacher.pairs}</p>
        <p><b>Conclusion:</b> ${c.teacher.conclusion}</p>
        <p><b>If a group gets stuck:</b> ${c.teacher.prompts}</p>
        ${c.teacher.extra?`<p>${c.teacher.extra}</p>`:""}
        <p><button class="btn ghost" data-pp="${c.id}">🖨 Print the paper edition of ${c.code}</button></p>`;
      linkifyRefs(body);
      body.querySelector("[data-pp]").addEventListener("click", ()=>{
        document.querySelectorAll(".overlay").forEach(x=>x.remove());
        withCase(c.id, printPack);
      });
    }).catch(()=>{
      d.dataset.done = "";
      body.textContent = CASE_LOAD_HELP;
    });
  };
  o.querySelectorAll("details[data-tn]").forEach(d=>
    d.addEventListener("toggle", ()=>{ if(d.open) fillNotes(d); }));
  o.querySelector("#folderBtn").addEventListener("click", ()=>{
    document.querySelectorAll(".overlay").forEach(x=>x.remove()); folderPack();
  });
  o.querySelector("#resetBtn").addEventListener("click", ()=>{
    if(confirm("Clear progress on every case on this device?")){
      try{ localStorage.removeItem(SAVE_KEY); localStorage.removeItem(OLD_KEY); }catch(e){}
      location.reload();
    }
  });
}

/* ============================================================
   READING LEVEL

   The same case in plainer words. Nothing about the investigation changes —
   same evidence, same reasoning, same lock codes — so a class can run both
   levels side by side and still be solving one case.
   ============================================================ */
function paintLevel(){
  // A case with no easy version of its own is genuinely being read at medium,
  // so the switch says medium however the shelf is set.
  const reading = (C && !hasEasy(C.id)) ? "medium" : LEVEL;
  document.querySelectorAll(".lvl").forEach(bar=>{
    const lvl = (bar.id === "lvlBar") ? reading : LEVEL;
    bar.querySelectorAll(".lvl-b").forEach(b=>
      b.classList.toggle("on", b.dataset.lvl === lvl));
  });
  // In the top bar, a case with no easy version of its own says so rather
  // than offering a switch that would do nothing. Everything still reads at
  // medium — no case is ever short of content.
  const bar = $("#lvlBar");
  if(!bar) return;
  const soon = !!C && !hasEasy(C.id);
  bar.classList.toggle("soon", soon);
  const note = bar.querySelector(".lvl-soon");
  if(soon && !note){
    bar.insertAdjacentHTML("beforeend",
      `<span class="lvl-soon">Medium only</span>`);
  } else if(!soon && note){
    note.remove();
  }
  bar.title = soon
    ? "This case has not been rewritten at the easy level yet — it reads at medium"
    : "Reading level — the same case, in plainer words";
}

function setReadingLevel(lvl){
  if(lvl === LEVEL) return;
  const openId = C && C.id;
  const finish = ()=>{
    setLevel(lvl);
    document.querySelectorAll(".overlay").forEach(o=>o.remove());
    if(openId && CASE_REG[openId]){
      const wasBoard = !board.classList.contains("hidden");
      openCase(CASE_REG[openId]);
      if(wasBoard) showBoard(true);
    } else {
      renderShelf();
    }
    paintLevel();
  };
  if(lvl === "easy"){
    const need = openId ? [openId] : Object.keys(CASE_BASE);
    Promise.all(need.map(loadEasy)).then(finish).catch(finish);
  } else {
    finish();
  }
}

document.addEventListener("click", e=>{
  const b = e.target.closest(".lvl-b");
  if(b) setReadingLevel(b.dataset.lvl);
});

/* ============================================================
   BOOT
   ============================================================ */
load();
biblePrefLoad();
const notesArea = $("#notesArea");
notesArea.addEventListener("input", ()=>{ if(CS){ CS.notes = notesArea.value; save(); } });
$("#notesClose").addEventListener("click", ()=>$("#notesPane").classList.add("hidden"));
$("#btnNotes").addEventListener("click", ()=>$("#notesPane").classList.toggle("hidden"));
$("#btnLocks").addEventListener("click", openLocks);
const _bw = $("#btnWrong"); if(_bw) _bw.addEventListener("click", openWrong);
$("#btnSheet").addEventListener("click", answerSheet);
$("#btnBible").addEventListener("click", ()=>openBible());
$("#btnRiddle").addEventListener("click", openTool);
$("#btnMenu").addEventListener("click", ()=>{
  // On the one case that asks a personal question, the menu offers the way
  // back to it -- for the reader who said "not now" and changed their mind.
  if(C && C.invite) return openMenuJM01();
  teacherNotes();
});
function openMenuJM01(){
  const o = overlay(`
    <div class="doc-kind">${C.code}</div>
    <div class="doc-title">This case</div>
    <div class="rule"></div>
    <div class="doc-body"><p>The last page of this file asks you a question about
      your own life. You can open it whenever you like, as many times as you like,
      and nobody can see what you answer.</p></div>
    <div class="inv-row">
      <button class="btn inv-yes" id="mnInv">Open the last page</button>
      <button class="btn ghost" id="mnTeach">Teacher notes</button>
    </div>`, "wide");
  o.querySelector("#mnInv").addEventListener("click", ()=>{ o.remove(); openInvite(); });
  o.querySelector("#mnTeach").addEventListener("click", ()=>{ o.remove(); teacherNotes(); });
}
$("#btnBoard").addEventListener("click", ()=>showBoard(board.classList.contains("hidden")));
$("#btnDesk").addEventListener("click", ()=>showBoard(false));
$("#btnString").addEventListener("click", ()=>setStrMode("add"));
$("#btnCut").addEventListener("click", ()=>setStrMode("cut"));
$("#btnHome").addEventListener("click", showShelf);
showShelf();
paintLevel();
