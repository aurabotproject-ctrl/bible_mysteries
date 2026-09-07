"use strict";
/* ============================================================
   THE BIBLE
   World English Bible (WEB) — public domain, no permission needed.
   Loaded on demand: fetched as bible.json in the split build,
   or decoded from an inlined gzip blob in the single-file build.
   ============================================================ */

const BIBLE_BOOKS = [{"n":"Genesis","a":"Gen","t":"OT","c":50},{"n":"Exodus","a":"Ex","t":"OT","c":40},{"n":"Leviticus","a":"Lev","t":"OT","c":27},{"n":"Numbers","a":"Num","t":"OT","c":36},{"n":"Deuteronomy","a":"Deut","t":"OT","c":34},{"n":"Joshua","a":"Josh","t":"OT","c":24},{"n":"Judges","a":"Judg","t":"OT","c":21},{"n":"Ruth","a":"Ruth","t":"OT","c":4},{"n":"1 Samuel","a":"1Sam","t":"OT","c":31},{"n":"2 Samuel","a":"2Sam","t":"OT","c":24},{"n":"1 Kings","a":"1Kgs","t":"OT","c":22},{"n":"2 Kings","a":"2Kgs","t":"OT","c":25},{"n":"1 Chronicles","a":"1Chr","t":"OT","c":29},{"n":"2 Chronicles","a":"2Chr","t":"OT","c":36},{"n":"Ezra","a":"Ezra","t":"OT","c":10},{"n":"Nehemiah","a":"Neh","t":"OT","c":13},{"n":"Esther","a":"Est","t":"OT","c":10},{"n":"Job","a":"Job","t":"OT","c":42},{"n":"Psalms","a":"Ps","t":"OT","c":150},{"n":"Proverbs","a":"Prov","t":"OT","c":31},{"n":"Ecclesiastes","a":"Eccl","t":"OT","c":12},{"n":"Song of Solomon","a":"Song","t":"OT","c":8},{"n":"Isaiah","a":"Isa","t":"OT","c":66},{"n":"Jeremiah","a":"Jer","t":"OT","c":52},{"n":"Lamentations","a":"Lam","t":"OT","c":5},{"n":"Ezekiel","a":"Ezek","t":"OT","c":48},{"n":"Daniel","a":"Dan","t":"OT","c":12},{"n":"Hosea","a":"Hos","t":"OT","c":14},{"n":"Joel","a":"Joel","t":"OT","c":3},{"n":"Amos","a":"Amos","t":"OT","c":9},{"n":"Obadiah","a":"Obad","t":"OT","c":1},{"n":"Jonah","a":"Jonah","t":"OT","c":4},{"n":"Micah","a":"Mic","t":"OT","c":7},{"n":"Nahum","a":"Nah","t":"OT","c":3},{"n":"Habakkuk","a":"Hab","t":"OT","c":3},{"n":"Zephaniah","a":"Zeph","t":"OT","c":3},{"n":"Haggai","a":"Hag","t":"OT","c":2},{"n":"Zechariah","a":"Zech","t":"OT","c":14},{"n":"Malachi","a":"Mal","t":"OT","c":4},{"n":"Matthew","a":"Matt","t":"NT","c":28},{"n":"Mark","a":"Mark","t":"NT","c":16},{"n":"Luke","a":"Luke","t":"NT","c":24},{"n":"John","a":"John","t":"NT","c":21},{"n":"Acts","a":"Acts","t":"NT","c":28},{"n":"Romans","a":"Rom","t":"NT","c":16},{"n":"1 Corinthians","a":"1Cor","t":"NT","c":16},{"n":"2 Corinthians","a":"2Cor","t":"NT","c":13},{"n":"Galatians","a":"Gal","t":"NT","c":6},{"n":"Ephesians","a":"Eph","t":"NT","c":6},{"n":"Philippians","a":"Phil","t":"NT","c":4},{"n":"Colossians","a":"Col","t":"NT","c":4},{"n":"1 Thessalonians","a":"1Thess","t":"NT","c":5},{"n":"2 Thessalonians","a":"2Thess","t":"NT","c":3},{"n":"1 Timothy","a":"1Tim","t":"NT","c":6},{"n":"2 Timothy","a":"2Tim","t":"NT","c":4},{"n":"Titus","a":"Titus","t":"NT","c":3},{"n":"Philemon","a":"Phlm","t":"NT","c":1},{"n":"Hebrews","a":"Heb","t":"NT","c":13},{"n":"James","a":"Jas","t":"NT","c":5},{"n":"1 Peter","a":"1Pet","t":"NT","c":5},{"n":"2 Peter","a":"2Pet","t":"NT","c":3},{"n":"1 John","a":"1John","t":"NT","c":5},{"n":"2 John","a":"2John","t":"NT","c":1},{"n":"3 John","a":"3John","t":"NT","c":1},{"n":"Jude","a":"Jude","t":"NT","c":1},{"n":"Revelation","a":"Rev","t":"NT","c":22}];

const BIBLE = {
  books: BIBLE_BOOKS,
  data: null,          // {text:{abbr:[[verse,…],…]}} — fetched on demand
  loading: null,
  byName: {},          // lower-case name/alias -> abbr
  pref: { lord: false, book: "Gen", chapter: 1 }
};

const BIBLE_PREF_KEY = "jm_bible_v1";

function biblePrefLoad(){
  try{ Object.assign(BIBLE.pref, JSON.parse(localStorage.getItem(BIBLE_PREF_KEY)||"{}")); }catch(e){}
}
function biblePrefSave(){
  try{ localStorage.setItem(BIBLE_PREF_KEY, JSON.stringify(BIBLE.pref)); }catch(e){}
}

/* ---------------- loading ---------------- */
async function bibleLoad(){
  if(BIBLE.data) return BIBLE.data;
  if(BIBLE.loading) return BIBLE.loading;
  BIBLE.loading = (async ()=>{
    let json;
    if(typeof window.__BIBLE_GZ__ === "string"){
      if(!("DecompressionStream" in window)) throw new Error("nostream");
      const bin = atob(window.__BIBLE_GZ__);
      const bytes = new Uint8Array(bin.length);
      for(let i=0;i<bin.length;i++) bytes[i] = bin.charCodeAt(i);
      const ds = new DecompressionStream("gzip");
      const stream = new Blob([bytes]).stream().pipeThrough(ds);
      json = await new Response(stream).text();
    } else {
      const r = await fetch("bible.json");
      if(!r.ok) throw new Error("fetch " + r.status);
      json = await r.text();
    }
    BIBLE.data = JSON.parse(json);
    return BIBLE.data;
  })();
  return BIBLE.loading;
}

/* ---------------- name index (available before the text is fetched) ---------------- */
(function(){
  BIBLE.books.forEach(b=>{
    BIBLE.byName[b.n.toLowerCase()] = b.a;
    BIBLE.byName[b.a.toLowerCase()] = b.a;
  });
  Object.entries({
    "psalm":"Ps", "song of songs":"Song", "canticles":"Song",
    "revelations":"Rev", "acts of the apostles":"Acts",
    "1 kgs":"1Kgs", "2 kgs":"2Kgs", "1 sam":"1Sam", "2 sam":"2Sam",
    "1 cor":"1Cor", "2 cor":"2Cor", "1 chron":"1Chr", "2 chron":"2Chr"
  }).forEach(([k,v])=>{ BIBLE.byName[k]=v; });
})();

/* ---------------- text helpers ---------------- */
const bookByAbbr = a => BIBLE.books.find(b=>b.a===a);
function bibleVerses(abbr, ch){
  const b = BIBLE.data.text[abbr];
  return (b && b[ch-1]) ? b[ch-1] : [];
}
function divineName(t){
  if(!BIBLE.pref.lord) return t;
  return t.replace(/\bLord Yahweh\b/g, "Lord GOD")
          .replace(/\bYahweh\b/g, "the LORD")
          .replace(/\bYah\b/g, "the LORD");
}

/* ---------------- reference parsing ---------------- */
function bibleBookPattern(){
  const names = BIBLE.books.map(b=>b.n).concat(["Psalm","Song of Songs"]);
  names.sort((a,b)=>b.length-a.length);
  return names.map(n=>n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")).join("|");
}
let BIBLE_RE = null;
function bibleRegex(){
  if(!BIBLE_RE){
    // Book 12  ·  Book 12:3  ·  Book 12:3–8  ·  Book 12:3 – 13:8  ·  Book 12–13
    BIBLE_RE = new RegExp(
      "\\b(" + bibleBookPattern() + ")\\s+(\\d+)" +
      "(?::(\\d+))?" +
      "(?:\\s*[–—-]\\s*(?:(\\d+):)?(\\d+))?", "g");
  }
  return BIBLE_RE;
}
function parseRefMatch(m){
  const abbr = BIBLE.byName[m[1].toLowerCase()];
  if(!abbr) return null;
  const bk = bookByAbbr(abbr);
  const ch = Math.min(parseInt(m[2],10), bk.c);
  const v1 = m[3] ? parseInt(m[3],10) : null;
  let v2 = null, ch2 = null;
  if(m[5]){                      // there is a range end
    if(m[4]) { ch2 = parseInt(m[4],10); v2 = parseInt(m[5],10); }
    else if(v1 !== null) v2 = parseInt(m[5],10);
  }
  return {abbr, ch, v1, v2, ch2, label:m[0]};
}

/* Wrap every scripture reference in a container with a clickable link. */
const SKIP_TAGS = new Set(["A","TEXTAREA","INPUT","SCRIPT","STYLE","BUTTON","SELECT"]);
function linkifyRefs(root){
  if(!root) return;
  const re = bibleRegex();
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(n){
      if(!n.nodeValue || n.nodeValue.length < 5) return NodeFilter.FILTER_REJECT;
      let p = n.parentElement;
      while(p && p !== root){
        if(SKIP_TAGS.has(p.tagName) || p.isContentEditable) return NodeFilter.FILTER_REJECT;
        p = p.parentElement;
      }
      return NodeFilter.FILTER_ACCEPT;
    }
  });
  const targets = [];
  let n; while((n = walker.nextNode())) targets.push(n);
  targets.forEach(node=>{
    re.lastIndex = 0;
    if(!re.test(node.nodeValue)) return;
    re.lastIndex = 0;
    const frag = document.createDocumentFragment();
    let last = 0, m;
    while((m = re.exec(node.nodeValue))){
      const ref = parseRefMatch(m);
      if(!ref) continue;
      if(m.index > last) frag.appendChild(document.createTextNode(node.nodeValue.slice(last, m.index)));
      const a = document.createElement("a");
      a.className = "bref";
      a.textContent = m[0];
      a.title = "Open the Bible here";
      a.addEventListener("click", e=>{ e.preventDefault(); e.stopPropagation(); openBible(ref); });
      frag.appendChild(a);
      last = m.index + m[0].length;
    }
    if(!frag.childNodes.length) return;
    if(last < node.nodeValue.length) frag.appendChild(document.createTextNode(node.nodeValue.slice(last)));
    node.parentNode.replaceChild(frag, node);
  });
}

/* ---------------- the reader ---------------- */
async function openBible(ref){
  const o = overlay(`<div class="bibloading">Opening the Bible…</div>`, "wide bibsheet");
  try{ await bibleLoad(); }
  catch(err){
    o.querySelector(".body").innerHTML =
      `<div class="doc-kind">Bible</div><div class="doc-title">The Bible could not be loaded</div>
       <div class="doc-body"><p>${err.message==="nostream"
        ? "This browser is too old to unpack the built-in Bible. Use the version hosted on the web, which loads it as a separate file."
        : "The Bible file could not be fetched. If you are opening this page straight from your hard drive, use the single-file version instead, or put the folder on a web server."}</p></div>`;
    return;
  }
  if(ref){ BIBLE.pref.book = ref.abbr; BIBLE.pref.chapter = ref.ch; biblePrefSave(); }
  const state = { abbr: BIBLE.pref.book, ch: BIBLE.pref.chapter, hit: ref || null, mode: "read" };

  const rail = () => ["OT","NT"].map(t=>
    `<h6>${t==="OT"?"Old Testament":"New Testament"}</h6>` +
    BIBLE.books.filter(b=>b.t===t).map(b=>
      `<button data-b="${b.a}" class="${b.a===state.abbr?"on":""}">${b.n}</button>`).join("")
  ).join("");

  const chapters = () => {
    const bk = bookByAbbr(state.abbr);
    return Array.from({length:bk.c},(_,i)=>
      `<button data-c="${i+1}" class="${i+1===state.ch?"on":""}">${i+1}</button>`).join("");
  };

  const chapterHtml = () => {
    const bk = bookByAbbr(state.abbr);
    const vs = bibleVerses(state.abbr, state.ch);
    const h = state.hit && state.hit.abbr===state.abbr && state.hit.ch===state.ch ? state.hit : null;
    const from = h && h.v1 ? h.v1 : 0;
    const to   = h && h.v1 ? (h.ch2 ? vs.length : (h.v2 || h.v1)) : -1;
    return `<div class="bibref">${bk.n} ${state.ch}</div><div class="bibbody">` +
      vs.map((t,i)=>{
        const n = i+1, on = n>=from && n<=to;
        return `<span class="bv${on?" hit":""}" id="v${n}"><sup>${n}</sup>${esc(divineName(t))}</span>`;
      }).join("") + `</div>`;
  };

  const draw = ()=>{
    const bk = bookByAbbr(state.abbr);
    o.querySelector(".body").innerHTML = `
      <div class="bibhead">
        <div>
          <div class="doc-kind">The Chronicle Society Reading Room</div>
          <div class="doc-title">The Bible</div>
        </div>
        <div class="bibtools">
          <input class="bibsearch" id="bibQ" placeholder="Search the Bible…" value="">
          <label class="bibtoggle"><input type="checkbox" id="bibLord" ${BIBLE.pref.lord?"checked":""}> print “the LORD”</label>
        </div>
      </div>
      <div class="rule"></div>
      <div class="bibwrap">
        <div class="bibrail">${rail()}</div>
        <div class="bibmain" id="bibMain">
          <div class="bibchaps">${chapters()}</div>
          ${chapterHtml()}
        </div>
      </div>
      <div class="bibfoot">
        <button class="btn ghost" id="bibPrev">‹ Previous chapter</button>
        <button class="btn ghost" id="bibNext">Next chapter ›</button>
        <span class="bibnote">World English Bible — public domain. This translation prints God's personal name as “Yahweh”; tick the box above to read “the LORD” instead, as most classroom Bibles do.</span>
      </div>`;
    wire();
    const main = o.querySelector("#bibMain");
    const hit = o.querySelector(".bv.hit");
    if(hit) main.scrollTop = Math.max(0, hit.offsetTop - main.offsetTop - 70);
    else main.scrollTop = 0;
  };

  const go = (abbr, ch, hit)=>{
    state.abbr = abbr; state.ch = ch; state.hit = hit || null;
    BIBLE.pref.book = abbr; BIBLE.pref.chapter = ch; biblePrefSave();
    draw();
  };

  const step = d => {
    const list = BIBLE.books;
    let i = list.findIndex(b=>b.a===state.abbr), ch = state.ch + d;
    if(ch < 1){ i = (i-1+list.length)%list.length; ch = list[i].c; }
    else if(ch > list[i].c){ i = (i+1)%list.length; ch = 1; }
    go(list[i].a, ch);
  };

  const search = q =>{
    const needle = q.trim().toLowerCase();
    if(needle.length < 3) return;
    const out = [];
    outer:
    for(const b of BIBLE.books){
      const chs = BIBLE.data.text[b.a];
      for(let c=0;c<chs.length;c++){
        const vs = chs[c];
        for(let v=0;v<vs.length;v++){
          const t = divineName(vs[v]);
          if(t.toLowerCase().includes(needle)){
            out.push({b:b.a, n:b.n, c:c+1, v:v+1, t});
            if(out.length >= 120) break outer;
          }
        }
      }
    }
    const mark = t =>{
      const i = t.toLowerCase().indexOf(needle);
      if(i < 0) return esc(t);
      const s = Math.max(0, i-70);
      return (s?"… ":"") + esc(t.slice(s,i)) + "<mark>" + esc(t.slice(i,i+needle.length)) + "</mark>" +
             esc(t.slice(i+needle.length, i+needle.length+110)) + "…";
    };
    o.querySelector(".bibwrap").innerHTML =
      `<div class="bibresults" style="flex:1">
        <div class="bibref">${out.length ? out.length + (out.length>=120?"+":"") + " results for “" + esc(q) + "”" : "Nothing found for “" + esc(q) + "”"}</div>
        ${out.map((r,i)=>`<button class="bibresult" data-i="${i}"><b>${r.n} ${r.c}:${r.v}</b>${mark(r.t)}</button>`).join("")}
      </div>`;
    o.querySelectorAll(".bibresult").forEach(btn=>{
      btn.addEventListener("click", ()=>{
        const r = out[+btn.dataset.i];
        go(r.b, r.c, {abbr:r.b, ch:r.c, v1:r.v, v2:r.v});
      });
    });
  };

  function wire(){
    o.querySelectorAll(".bibrail button").forEach(b=>
      b.addEventListener("click", ()=>go(b.dataset.b, 1)));
    o.querySelectorAll(".bibchaps button").forEach(b=>
      b.addEventListener("click", ()=>go(state.abbr, +b.dataset.c)));
    o.querySelector("#bibPrev").addEventListener("click", ()=>step(-1));
    o.querySelector("#bibNext").addEventListener("click", ()=>step(1));
    o.querySelector("#bibLord").addEventListener("change", e=>{
      BIBLE.pref.lord = e.target.checked; biblePrefSave(); draw();
    });
    const q = o.querySelector("#bibQ");
    q.addEventListener("keydown", e=>{ if(e.key==="Enter") search(q.value); });
  }

  draw();
}
