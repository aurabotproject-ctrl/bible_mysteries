"use strict";
/* ============================================================
   THE PAPER EDITION
   Every case can be printed, cut out and run with no device at all.
   Everything here is generated from the case object, so a new case
   gets its paper edition for nothing.
   ============================================================ */

const forPrint = html => (html||"")
  .replace(/Click (?:the [a-z ]+|to)[^<.]*enlarge[^<.]*\.?/gi, "")
  .replace(/<div class="cap">\s*<\/div>/g, "")
  .replace(/<div class="plate">\s*<svg viewBox="0 0 (\d+(?:\.\d+)?) (\d+(?:\.\d+)?)"/g,
    (m, w, h) => m.replace('class="plate"', 'class="plate ' + plateShape(+w / +h) + '"'));

/* On paper a plate is sized by its width, because that is what the page limits.
   Its shape decides how wide it can be before it grows too tall for one sheet. */
function plateShape(ratio){
  if(ratio >= 1.3) return "wideplate";     // the 3:2 field plates
  if(ratio >= 0.9) return "squareplate";
  return "tallplate";                      // upright paper props
}

const stageItems = (cdef, s) => cdef.items.filter(i=>i.stage===s);

/* decoy labels so the envelope you open is not simply the only one there */
function decoyCodes(code){
  const d = new Set([code]);
  const digits = code.split("");
  while(d.size < 4){
    const a = digits.slice();
    const i = Math.floor(Math.random()*a.length), j = Math.floor(Math.random()*a.length);
    [a[i],a[j]] = [a[j],a[i]];
    d.add(a.join(""));
    if(d.size < 4) d.add(String((parseInt(code,10) + 1 + d.size) % 10000).padStart(code.length,"0"));
  }
  return [...d].sort();
}
function decoyWords(word){
  const pool = ["HARVEST","LANTERN","MEASURE","SHUTTER","GARLAND","TRAVAIL","CISTERN","MANTLE",
                "PLEDGE","FURROW","BRAZIER","THISTLE","QUARRY","VESTURE","SANDAL","BEACON"];
  const same = pool.filter(w=>w.length===word.length && w!==word);
  const out = [word, ...same.slice(0,3)];
  while(out.length < 4) out.push(pool.find(w=>!out.includes(w)));
  return out.sort();
}

/* ---------------- the certificate ---------------- */
function certificateHtml(cdef, names, dateStr, verdict){
  return `<section class="pp-page pp-cert">
    <div class="cert">
      <div class="cert-in">
        ${SVG.finalSeal}
        <div class="cert-soc">The Bible Investigation Bureau · Department of Unsolved Antiquities</div>
        <div class="cert-h">Certificate of Investigation</div>
        <div class="cert-sub">This is to record that the case below was opened, worked and closed</div>
        <div class="cert-names">${names || "&nbsp;"}</div>
        <div class="cert-nl">investigator${(names||"").includes(",")||(names||"").includes("&")?"s":""}</div>
        <div class="cert-case">${cdef.code}</div>
        <div class="cert-title">${cdef.title}</div>
        <div class="cert-where">${cdef.period}</div>
        <div class="cert-verdict"><b>Conclusion filed:</b> ${verdict || cdef.teacher.conclusion}</div>
        <div class="cert-sign">
          <div><div class="cert-line"></div><span>A. Thorne · Case Supervisor</span></div>
          <div><div class="cert-line"></div><span>Teacher</span></div>
          <div><div class="cert-line">${dateStr||""}</div><span>Date closed</span></div>
        </div>
      </div>
    </div>
  </section>`;
}

function openCertificate(cdef){
  const st = stateFor(cdef.id);
  const names = (st.sheet && st.sheet.names) ? st.sheet.names : "";
  const d = new Date();
  const date = `${d.getDate()} ${["January","February","March","April","May","June","July",
    "August","September","October","November","December"][d.getMonth()]} ${d.getFullYear()}`;
  const o = overlay(`<div class="ppdoc">${certificateHtml(cdef, names, date)}</div>
    <div class="noprint" style="margin-top:16px;display:flex;gap:10px;flex-wrap:wrap;align-items:center">
      <button class="btn" id="certPrint">Print the certificate</button>
      <span class="small">It fills in the names from your answer sheet. Print it and put it in your case folder.</span>
    </div>`, "wide bibsheet");
  o.classList.add("printme");
  o.querySelector("#certPrint").addEventListener("click", ()=>window.print());
}

/* ---------------- the whole paper pack ---------------- */
function printPack(cdef){
  const L1 = cdef.locks[0], L2 = cdef.locks[1];
  const s0 = stageItems(cdef,0), s1 = stageItems(cdef,1), s2 = stageItems(cdef,2);
  /* A document carrying a plate prints as a full sheet rather than a cut-out
     card. The plates carry typeset labels that have to be readable on paper, so
     they run the full width of the page — which makes those documents taller
     than a card can be. The team lays the sheet on the desk whole. */
  const card = (it, band) => {
    const sheet = /class="plate"/.test(it.body);
    return `
    <article class="pp-card${sheet ? " sheet" : ""}">
      ${band?`<div class="pp-band">${band}</div>`:""}
      <div class="doc-kind">${it.kind}</div>
      <div class="pp-ct">${it.title}</div>
      ${it.sub?`<div class="doc-sub">${it.sub}</div>`:""}
      ${sheet ? `<div class="pp-keep">◻ A full sheet — use it whole, do not cut it up</div>` : ""}
      <div class="doc-body">${forPrint(it.body)}</div>
      ${sheet ? "" : `<div class="pp-cut">✂ cut here</div>`}
    </article>`;
  };

  const step = (n, h, body) => `<div class="pp-step"><b>${n}</b><div><h5>${h}</h5>${body}</div></div>`;

  const codes = decoyCodes(L1.code);
  const words = decoyWords(L2.code);

  const html = `<div class="ppdoc">

  <!-- ============ COVER ============ -->
  <section class="pp-page pp-cover">
    <div class="pp-soc">The Bible Investigation Bureau · Department of Unsolved Antiquities</div>
    <div class="pp-code">${cdef.code}</div>
    <h1>${cdef.title}</h1>
    <div class="pp-where">${cdef.period}</div>
    <div class="pp-art">${cdef.poster && SVG[cdef.poster] ? SVG[cdef.poster] : ""}</div>
    <p class="pp-teaser">${cdef.teaser}</p>
    <div class="pp-stamp">PAPER EDITION · NO DEVICE REQUIRED</div>
    <div class="pp-label">
      <div class="pp-labelin">
        <div class="pp-soc">The Bible Investigation Bureau</div>
        <div class="pp-code">${cdef.code}</div>
        <div class="pp-labeltitle">${cdef.title}</div>
        <div class="pp-labelline">Investigators: ....................................................</div>
        <div class="pp-labelline">Opened: ....................  Closed: ....................</div>
      </div>
      <div class="pp-cut">✂ cut out and stick on the front of your case folder</div>
    </div>
  </section>

  <!-- ============ PREPARING ============ -->
  <section class="pp-page">
    <div class="pp-h">Before the lesson — preparing the pack</div>
    <p class="pp-lead">Ten minutes with a pair of scissors and four envelopes, and this case runs with no screen at all.</p>
    <div class="pp-step"><b>1</b><div><h5>Print the whole pack</h5>
      <p>Single sided is easiest for cutting. Card stock makes better evidence but ordinary paper is fine.</p></div></div>
    <div class="pp-step"><b>2</b><div><h5>Remove the answer key</h5>
      <p>The last page is the teacher's answer key. Take it out before anything else, or the case is over before it starts.</p></div></div>
    <div class="pp-step"><b>3</b><div><h5>Cut out the open evidence</h5>
      <p>The ${s0.length} cards marked <b>OPEN FILE</b> go loose into the case folder. These are what the team starts with.</p></div></div>
    <div class="pp-step"><b>4</b><div><h5>Make up the sealed bundles</h5>
      <p>You need <b>eight envelopes</b>. Cut out the labels on the envelope-label sheet and stick one on each.</p>
      <ul>
        <li>Into the envelope labelled <b>${L1.code}</b>, put the ${s1.length} cards marked <b>BUNDLE B</b>.</li>
        <li>Into the envelope labelled <b>${L2.code}</b>, put the ${s2.length} cards marked <b>BUNDLE C</b>.</li>
        <li>Into each of the other six envelopes, put one of the small "not this one" slips.</li>
      </ul>
      <p>Every envelope should look the same from the outside. That is the whole point.</p></div></div>
    <div class="pp-step"><b>5</b><div><h5>Set the desk</h5>
      <p>Put the folder, the eight envelopes, the elimination board sheet, the evidence tags, the accusation form and a case record sheet on the table. Give each team scissors, a pen and a glue stick.</p></div></div>
    <div class="pp-note"><b>Time:</b> 60–100 minutes, or two lessons. <b>Teams of two or three.</b> Any more and somebody stops reading.</div>
  </section>

  <!-- ============ WALKTHROUGH ============ -->
  <section class="pp-page">
    <div class="pp-h">The investigator's manuscript</div>
    <p class="pp-lead">Read this out, or hand it to the team and let them run themselves. Do not read ahead.</p>
    ${step(1,"Open the folder and read everything",
      `<p>Spread the ${s0.length} documents across the desk so you can see them all at once. Read every one before you decide anything at all. Move them around. Put the ones that seem to belong together next to each other.</p>
       <p class="pp-tip">Do not skip this. Teams that skip it lose more time later than the reading would have cost.</p>`)}
    ${step(2,"Work out the first seal",
      `<p>Four questions. Each answer is a single digit, and each one is answerable from a different document you already have.</p>
       <ol class="pp-qs">${L1.questions.map(q=>`<li>${q}<span class="pp-blank"></span></li>`).join("")}</ol>
       <p>Write the four digits in order. That is your seal number.</p>`)}
    ${step(3,"Open the sealed bundle",
      `<p>Find the envelope with your seal number on it and open <b>that one only</b>. If the slip inside says you are wrong, go back and check each digit against its own document.</p>
       <p class="pp-tip">The other envelopes hold nothing but a note telling you to think again. Opening them all only spoils it for yourselves.</p>`)}
    ${step(4,"Read the new evidence",
      `<p>Add the ${s1.length} new documents to the desk. Read them the same way — all of them, before deciding anything.</p>`)}
    ${step(5, cdef.crossword ? "Fill in the riddle sheet"
             : cdef.ladder ? "Run the enquiry"
             : cdef.matrix ? cdef.matrix.title
             : cdef.scales ? cdef.scales.title
             : "Build the keyword",
      cdef.crossword
        ? `<p>Every answer on the riddle sheet is a word you can find in the documents on your desk. Six squares carry a small number: collect those letters in number order and you have the keyword.</p>`
        : cdef.ladder
        ? `<p>Take the enquiry sheet. It has four rounds on it, and each round names the document that settles it. Read that document, tick the one group it points to, and write the survivor on the line before you go on to the next round. The name still standing at the end of round four is your keyword.</p>
           <p class="pp-tip">Do not guess a round and move on. If a later round makes no sense, an earlier one is wrong.</p>`
        : cdef.matrix
        ? `<p>Take the grid sheet. ${cdef.matrix.blurb.replace(/<[^>]+>/g,"")}</p>
           <p class="pp-tip">Fill it in from the document, not from memory. The answer is a shape in the grid, and you will not see the shape until every square is right.</p>`
        : cdef.scales
        ? `<p>Take the weighing sheet. ${cdef.scales.blurb.replace(/<[^>]+>/g,"")}</p>
           <p class="pp-tip">Every value you need is on the table of weights in the open file. Work one word at a time and write down the stones you used.</p>`
        : `<p>${L2.blurb.replace(/<[^>]+>/g,"")}</p><ol class="pp-qs">${L2.questions.map(q=>`<li>${q}</li>`).join("")}</ol>`)}
    ${step(6,"Open the second bundle",
      `<p>Find the envelope with your keyword on it. Open that one only. Add the ${s2.length} documents to the desk.</p>`)}
    ${step(7,"Close the routes on the board",
      `<p>Lay out the elimination board sheet. Cut out the evidence tags. For each of the five explanations, place the <b>one</b> tag naming the document that destroys it — not evidence that argues against it, the single fact that makes it impossible.</p>
       <p>When you are all agreed, glue them down.</p>`)}
    ${step(8,"File the conclusion",
      `<p>Fill in the accusation form. Choose one conclusion and write your reasoning, naming at least two pieces of evidence. Then complete the case record and hand it in.</p>`)}
    ${step(9,"Close the case",
      `<p>Your teacher will check the board and sign the certificate. Put the certificate, your case record and anything else you want to keep into your case folder.</p>`)}
  </section>

  <!-- ============ OPEN EVIDENCE ============ -->
  <section class="pp-sec"><div class="pp-h">The open file — cut these out</div>
    <p class="pp-lead">These ${s0.length} documents go loose in the folder. The team starts with all of them.
    Most are cut-out cards; the ones with a plate on them are full sheets and are used whole, because the labels on
    the artwork have to be readable.</p></section>
  <section class="pp-cards">${s0.map(i=>card(i,"OPEN FILE")).join("")}</section>

  <!-- ============ ENVELOPE LABELS ============ -->
  <section class="pp-page">
    <div class="pp-h">Envelope labels — cut out and stick on</div>
    <p class="pp-lead">Eight envelopes, all looking the same from the outside. Only two of them hold anything.</p>
    <div class="pp-labels">
      ${codes.map(c=>`<div class="pp-env"><div class="pp-envk">Sealed bundle</div><div class="pp-envc">${c}</div>
        <div class="pp-envn">The Bible Investigation Bureau · ${cdef.code}</div></div>`).join("")}
      ${words.map(w=>`<div class="pp-env"><div class="pp-envk">Sealed bundle</div><div class="pp-envc">${w}</div>
        <div class="pp-envn">The Bible Investigation Bureau · ${cdef.code}</div></div>`).join("")}
    </div>
    <div class="pp-h" style="margin-top:22px">Slips for the six empty envelopes</div>
    <div class="pp-slips">
      ${Array.from({length:6},()=>`<div class="pp-slip">Not this one.<br><span>Your working is wrong somewhere. Go back to the documents and check it line by line.</span></div>`).join("")}
    </div>
  </section>

  <!-- ============ BUNDLE B ============ -->
  <section class="pp-page pp-seal">
    <div class="pp-sealbig">BUNDLE ${L1.code}</div>
    <div class="pp-sealsub">${L1.name}</div>
    <p class="pp-lead">Everything after this page and before the next sealed banner goes inside the envelope marked <b>${L1.code}</b>.</p>
    <div class="pp-stamp">DO NOT PUT THIS IN THE FOLDER</div>
  </section>
  <section class="pp-cards">${s1.map(i=>card(i,"BUNDLE "+L1.code)).join("")}</section>

  <!-- ============ RIDDLE SHEET ============ -->
  ${cdef.crossword ? crosswordPrint(cdef) : cdef.ladder ? ladderPrint(cdef)
    : cdef.matrix ? matrixPrint(cdef) : cdef.scales ? scalesPrint(cdef) : ""}

  <!-- ============ BUNDLE C ============ -->
  <section class="pp-page pp-seal">
    <div class="pp-sealbig">BUNDLE ${L2.code}</div>
    <div class="pp-sealsub">${L2.name}</div>
    <p class="pp-lead">Everything after this page goes inside the envelope marked <b>${L2.code}</b>.</p>
    <div class="pp-stamp">DO NOT PUT THIS IN THE FOLDER</div>
  </section>
  <section class="pp-cards">${s2.map(i=>card(i,"BUNDLE "+L2.code)).join("")}</section>

  <!-- ============ THE BOARD ============ -->
  <section class="pp-page">
    <div class="pp-h">${cdef.boardTitle}</div>
    <p class="pp-lead">${cdef.boardIntro.replace(/<[^>]+>/g,"")}</p>
    <div class="pp-board">
      ${cdef.theories.map(t=>`<div class="pp-theory">
        <div class="pp-tt">${t.title}</div>
        <div class="pp-tc">${t.claim}</div>
        <div class="pp-slot">glue the evidence tag here</div>
      </div>`).join("")}
    </div>
  </section>
  <section class="pp-page">
    <div class="pp-h">Evidence tags — cut these out</div>
    <p class="pp-lead">One of these goes on each explanation. Some of them belong nowhere.</p>
    <div class="pp-tags">
      ${cdef.items.filter(i=>!i.notEvidence).map(i=>`<div class="pp-tag">${i.title}</div>`).join("")}
    </div>
  </section>

  <!-- ============ ACCUSATION ============ -->
  <section class="pp-page">
    <div class="pp-h">Accusation form — ${cdef.code}</div>
    <p class="pp-lead">${cdef.accusationIntro}</p>
    <div class="pp-choices">
      ${cdef.verdicts.map(v=>`<div class="pp-choice"><span class="pp-box"></span>${v.text}</div>`).join("")}
    </div>
    <div class="pp-h" style="margin-top:18px">Our reasoning</div>
    <p class="pp-lead">Name at least two pieces of evidence.</p>
    ${Array.from({length:7},()=>`<div class="pp-rule"></div>`).join("")}
    <div class="pp-sign2">
      <div><div class="pp-rule"></div><span>Investigators</span></div>
      <div><div class="pp-rule"></div><span>Date</span></div>
    </div>
  </section>

  <!-- ============ CERTIFICATE ============ -->
  ${certificateHtml(cdef, "", "")}

  <!-- ============ ANSWER KEY ============ -->
  <section class="pp-page pp-key">
    <div class="pp-stamp">TEACHER — REMOVE THIS PAGE BEFORE THE LESSON</div>
    <div class="pp-h">Answer key — ${cdef.code} · ${cdef.title}</div>
    <p><b>Locks.</b> ${cdef.teacher.answers.replace(/<[^>]+>/g,"")}</p>
    <p><b>Board.</b> ${cdef.teacher.pairs}</p>
    <p><b>Conclusion.</b> ${cdef.teacher.conclusion}</p>
    <p><b>If a team is stuck.</b> ${cdef.teacher.prompts.replace(/\\"/g,'"')}</p>
    ${cdef.teacher.extra?`<p><b>Before you set this one.</b> ${cdef.teacher.extra}</p>`:""}
    <div class="pp-h" style="margin-top:18px">The eliminations in full</div>
    ${cdef.theories.map(t=>`<p><b>${t.title}</b> — ${t.verdict}</p>`).join("")}
    <div class="pp-h" style="margin-top:18px">Afterwards</div>
    <ul>${cdef.debrief.questions.map(q=>`<li>${q}</li>`).join("")}</ul>
    <p class="pp-lead">${cdef.debrief.refs}</p>
  </section>
  </div>`;

  const o = overlay(html + `<div class="noprint" style="margin-top:18px;display:flex;gap:10px;flex-wrap:wrap;align-items:center">
      <button class="btn" id="ppPrint">Print the pack</button>
      <span class="small">Print to paper, or to PDF if you want to keep it. Single sided is easiest to cut.</span>
    </div>`, "wide bibsheet");
  o.classList.add("printme");
  o.querySelector("#ppPrint").addEventListener("click", ()=>window.print());
}




/* the balance scales, on paper */
function scalesPrint(cdef){
  const SC = cdef.scales;
  const stones = SC.stones.map(s=>`<span class="pp-ldopt">${s.label}</span>`).join("");
  const rounds = SC.rounds.map(r=>`
    <div class="pp-ldr">
      <div class="pp-ldn">Word ${r.n}</div>
      <h5>${r.word}</h5>
      <p>${r.prompt}</p>
      <div class="pp-ldline"><span>Stones used:</span><i></i></div>
      <div class="pp-ldline"><span>Total, in ${SC.unit}:</span><i></i></div>
    </div>`).join("");
  return `<section class="pp-page">
    <div class="pp-h">${SC.title}</div>
    <p class="pp-lead">${SC.blurb.replace(/<[^>]+>/g,"")}</p>
    <div class="pp-h" style="margin-top:10px">The stones in the box</div>
    <div class="pp-ldopts">${stones}</div>
    ${rounds}
    <div class="pp-h" style="margin-top:14px">The keyword</div>
    <div class="pp-keyboxes">${[...SC.keyword].map(()=>`<div class="pp-kb"></div>`).join("")}</div>
  </section>`;
}

/* the matrix, on paper — printed blank for the team to fill in */
function matrixPrint(cdef){
  const MX = cdef.matrix;
  const head = MX.cols.map(c=>`<th>${c.label}${c.note?`<i>${c.note}</i>`:""}</th>`).join("");
  const body = MX.rows.map(r=>`<tr><th>${r.label}${r.note?`<i>${r.note}</i>`:""}</th>
    ${MX.cols.map(()=>`<td></td>`).join("")}</tr>`).join("");
  const foot = MX.foot ? `<tr class="ppmxf"><th>${MX.foot.label}</th>
    ${MX.cols.map(c=>`<td>${MX.foot.cells[c.id]||""}</td>`).join("")}</tr>` : "";
  return `<section class="pp-page">
    <div class="pp-h">${MX.title}</div>
    <p class="pp-lead">${MX.blurb.replace(/<[^>]+>/g,"")}</p>
    <table class="ppmx">
      <tr><th>${MX.corner||""}</th>${head}</tr>
      ${body}${foot}
    </table>
    ${MX.note?`<p class="pp-lead">${MX.note.replace(/<[^>]+>/g,"")}</p>`:""}
    <div class="pp-h" style="margin-top:14px">The keyword</div>
    <div class="pp-keyboxes">${[...MX.reveal.answer].map(()=>`<div class="pp-kb"></div>`).join("")}</div>
  </section>`;
}

/* the elimination ladder, on paper */
function ladderPrint(cdef){
  const LD = cdef.ladder;
  const rounds = LD.rounds.map(r=>`
    <div class="pp-ldr">
      <div class="pp-ldn">Round ${r.n}</div>
      <h5>${r.field}</h5>
      <div class="pp-lddoc">Settled by <b>${r.doc}</b></div>
      <p>${r.clue}</p>
      <div class="pp-ldopts">${r.options.map(op=>`<span class="pp-ldopt">&#9744; ${op}</span>`).join("")}</div>
      <div class="pp-ldline"><span>Still standing after round ${r.n}:</span><i></i></div>
    </div>`).join("");
  return `<section class="pp-page">
    <div class="pp-h">${LD.title}</div>
    <p class="pp-lead">${LD.blurb.replace(/<[^>]+>/g,"")}</p>
    ${rounds}
    <div class="pp-h" style="margin-top:14px">${LD.strip}</div>
    <div class="pp-keyboxes">${[...LD.keyword].map(()=>`<div class="pp-kb"></div>`).join("")}</div>
  </section>`;
}

/* the crossword, on paper */
function crosswordPrint(cdef){
  const CW = cdef.crossword, sol = {};
  CW.entries.forEach(en=>{
    const dr = en.d==="A"?0:1, dc = en.d==="A"?1:0;
    [...en.a].forEach((ch,i)=> sol[(en.r+dr*i)+","+(en.c+dc*i)] = ch);
  });
  const markAt = {}; CW.marks.forEach(m=> markAt[m.r+","+m.c]=m.i);
  const startAt = {}; CW.entries.forEach(en=> startAt[en.r+","+en.c]=en.n);
  let cells = "";
  for(let r=0;r<CW.H;r++) for(let c=0;c<CW.W;c++){
    const k=r+","+c;
    cells += sol[k]
      ? `<div class="ppc${markAt[k]?" mk":""}">${startAt[k]?`<span class="n">${startAt[k]}</span>`:""}${markAt[k]?`<span class="m">${markAt[k]}</span>`:""}</div>`
      : `<div class="ppc bl"></div>`;
  }
  const clues = d => CW.entries.filter(e=>e.d===d).sort((a,b)=>a.n-b.n)
    .map(e=>`<li><b>${e.n}</b> ${e.q} <i>(${e.a.length})</i></li>`).join("");
  return `<section class="pp-page">
    <div class="pp-h">${CW.title}</div>
    <p class="pp-lead">${CW.blurb}</p>
    <div class="ppcw">
      <div class="ppgrid" style="--n:${CW.W}">${cells}</div>
      <div class="ppclues">
        <div><h6>Across</h6><ol>${clues("A")}</ol></div>
        <div><h6>Down</h6><ol>${clues("D")}</ol></div>
      </div>
    </div>
    <div class="pp-h" style="margin-top:14px">The numbered squares, in order</div>
    <div class="pp-keyboxes">${CW.marks.slice().sort((a,b)=>a.i-b.i).map(m=>`<div class="pp-kb"><span>${m.i}</span></div>`).join("")}</div>
  </section>`;
}

/* ---------------- the folder / scrapbook starter ---------------- */
function folderPack(){
  const rows = CASES.map(c=>({code:c.code, title:c.title, where:c.period}));
  const blanks = Math.max(0, 50 - rows.length);
  const html = `<div class="ppdoc">
    <section class="pp-page pp-cover">
      <div class="pp-soc">The Bible Investigation Bureau · Department of Unsolved Antiquities</div>
      <h1 style="margin-top:18px">Investigator's File</h1>
      <div class="pp-where">Keep every case you close in this folder</div>
      <div class="pp-art" style="max-width:300px;margin:26px auto">${SVG.finalSeal}</div>
      <div class="pp-fill">
        <div><span>Name</span><div class="pp-rule"></div></div>
        <div><span>Class</span><div class="pp-rule"></div></div>
        <div><span>Year</span><div class="pp-rule"></div></div>
      </div>
      <p class="pp-teaser" style="margin-top:26px">Every case you finish adds three things to this folder: the case record in your own handwriting, the certificate your teacher signs, and whatever evidence you decide is worth keeping. By the end of the year it is the record of everything you worked out.</p>
      <div class="pp-stamp">CONFIDENTIAL — PROPERTY OF THE INVESTIGATOR NAMED ABOVE</div>
    </section>
    <section class="pp-page">
      <div class="pp-h">Index of cases</div>
      <p class="pp-lead">Tick a case when you close it, and write the conclusion you reached in your own words.</p>
      <table class="pp-index">
        <tr><th>✓</th><th>Case</th><th>Title</th><th>Closed</th><th>What we concluded</th></tr>
        ${rows.map(r=>`<tr><td class="tick"></td><td>${r.code}</td><td>${r.title}</td><td></td><td></td></tr>`).join("")}
        ${Array.from({length:blanks},()=>`<tr><td class="tick"></td><td></td><td></td><td></td><td></td></tr>`).join("")}
      </table>
    </section>
    <section class="pp-page">
      <div class="pp-h">Spine labels</div>
      <p class="pp-lead">Cut out and stick along the spine of the folder or the edge of a scrapbook.</p>
      <div class="pp-spines">
        ${Array.from({length:3},()=>`<div class="pp-spine"><b>THE CHRONICLE SOCIETY</b><span>Investigator's File · Department of Unsolved Antiquities</span></div>`).join("")}
      </div>
    </section>
  </div>`;
  const o = overlay(html + `<div class="noprint" style="margin-top:18px;display:flex;gap:10px;align-items:center;flex-wrap:wrap">
      <button class="btn" id="fpPrint">Print the folder pack</button>
      <span class="small">Cover, index of all cases, and spine labels.</span>
    </div>`, "wide bibsheet");
  o.classList.add("printme");
  o.querySelector("#fpPrint").addEventListener("click", ()=>window.print());
}
