"use strict";
/* ============================================================
   THE INVITATION
   Only CASE JM-01 sets invite:true, and this only ever opens when
   a reader chooses to open it.

   Three rules this code exists to keep:
     1. Nothing leaves the device. A decision is written to this
        browser's own storage and nowhere else. There is no list,
        no export, and no way for a teacher to see who pressed what.
     2. "Not now" is a real answer, and it is answered warmly. It is
        not a wrong turn to be nudged out of.
     3. No step is a payment and no words are magic. The prayer is
        offered, never required, and it says so.
   ============================================================ */

const DEC_KEY = "bib-decision";

/* The invitation follows the reading level like everything else, because this
   is the one page in the archive where being understood matters more than
   anywhere. E() picks the easy wording when the switch is on; nothing is left
   out of it and nothing is softened -- shorter sentences, plainer words, the
   same four steps and the same honesty about what they cost. */
function E(medium, easy){
  return (typeof LEVEL !== "undefined" && LEVEL === "easy") ? easy : medium;
}

function decisionGet(){
  try{ return JSON.parse(localStorage.getItem(DEC_KEY) || "null"); }
  catch(e){ return null; }
}
function decisionSet(d){
  try{ localStorage.setItem(DEC_KEY, JSON.stringify(d)); }catch(e){}
}
const DAYS   = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const MONTHS = ["January","February","March","April","May","June",
                "July","August","September","October","November","December"];
/* Written out by hand rather than by locale, so a school laptop set to
   somebody else's country still gives a New Zealand date. */
function todayLong(){
  const d = new Date();
  return DAYS[d.getDay()] + ", " + d.getDate() + " " + MONTHS[d.getMonth()] + " " + d.getFullYear();
}
function todayIso(){ return new Date().toISOString().slice(0,10); }

/* A quiet way back in, for the reader who said "not now" and changed
   their mind. Sits under the case menu once the case has been opened. */
function inviteReopenable(){ return !!(C && C.invite); }

/* ------------------------------------------------------------------ */
/*  the door                                                          */
/* ------------------------------------------------------------------ */
function openInvite(){
  const had = decisionGet();
  const o = overlay(`
    <div class="inv">
      <div class="inv-kind">Not part of the case</div>
      <div class="inv-title">${E("One question, and it is yours", "One question, and it is yours")}</div>
      <div class="rule"></div>
      <div class="doc-body">
${E(
  `<p>Every other file in this archive is about somebody else. You have just spent an hour on the one file that has your name in it: a charge that is real, a ledger where nothing you could offer was ever accepted, and an account marked <b>paid in full</b> by somebody who did not owe it.</p>
   <p>The record says that a gift, however completely it is paid for, is still not yours until you take it. So the file ends by asking you something, and then it stops asking.</p>`,
  `<p>Every other file here is about somebody else. You have just spent an hour on the one file with your name in it: a debt that is real, an account book where nothing you could offer was ever taken, and one page marked <b>paid in full</b> by somebody who did not owe it.</p>
   <p>The record says a gift is still not yours until you take it, no matter how completely it has been paid for. So the file ends by asking you something. Then it stops asking.</p>`)}
        <p class="inv-q">${E("Would you like to take that step yourself, today?",
                             "Would you like to take that step yourself, today?")}</p>
        <p class="inv-small">${E(
  "Nobody can see your answer. Nothing is sent anywhere. Your teacher cannot look it up, and there is no right answer to give to please anybody — which is exactly why it is worth answering honestly.",
  "Nobody can see your answer. Nothing is sent anywhere. Your teacher cannot look it up. There is no answer here that will make anybody pleased with you — which is exactly why it is worth being honest.")}</p>
      </div>
      <div class="inv-row">
        <button class="btn inv-yes" id="invYes">Yes — I want to take this step</button>
        <button class="btn ghost" id="invNot">Not now — I am still thinking</button>
        <button class="btn ghost" id="invAlready">I already have</button>
      </div>
      ${had && had.made ? `<p class="inv-small" style="margin-top:14px">You opened this door before, on ${esc(had.dateLong || "")}. You are welcome back in it any time.</p>` : ""}
    </div>`, "wide inviteview");
  o.querySelector("#invYes").addEventListener("click", ()=>{ o.remove(); inviteSteps(0); });
  o.querySelector("#invNot").addEventListener("click", ()=>{ o.remove(); inviteNotNow(); });
  o.querySelector("#invAlready").addEventListener("click", ()=>{ o.remove(); inviteAlready(); });
}

/* ------------------------------------------------------------------ */
/*  the four steps                                                    */
/* ------------------------------------------------------------------ */
const INV_STEPS = [
  {
    n:1, word:"Admit",
    head:"That the charge sheet has my name on it too",
    body:E(
      `<p>Not "I am as bad as anybody else" — that is a comparison, and the audit already closed comparisons. Just the plain thing the audit asked: <b>I have not always done what I myself knew was right.</b></p>
       <p>This is the step people find hardest, and it is the one that costs nothing. You are not confessing to being a monster. You are agreeing with a ledger you have already read.</p>`,
      `<p>Not "I am as bad as everyone else" — that is comparing yourself to people, and the audit already closed that. Just the plain thing the audit asked: <b>I have not always done what I knew was right.</b></p>
       <p>People find this step the hardest, and it is the one that costs nothing. You are not saying you are a monster. You are agreeing with an account book you have already read.</p>`),
    verse:"“If we confess our sins, he is faithful and just to forgive us our sins, and to cleanse us from all unrighteousness.”",
    ref:"1 John 1:9 · Romans 3:23",
    tick:"I admit it. I have broken what I knew was right."
  },
  {
    n:2, word:"Believe",
    head:"That he died in my place, was buried, and rose again",
    body:E(
      `<p>All three parts, because the record never gives two of them without the third. He died — the debt was actually paid, not waved away. He was buried — he was really dead. He rose on the third day — the payment was accepted, and there are named witnesses.</p>
       <p>Believing this is not deciding to feel certain. It is deciding that you think it is <b>true</b>, the way you decided about every other case on that shelf.</p>`,
      `<p>All three parts, because the record never gives two of them without the third. He died — so the debt was really paid, not just let off. He was buried — so he was really dead. He rose on the third day — so the payment was accepted, and the record names people who saw him.</p>
       <p>Believing this does not mean deciding to feel sure. It means deciding you think it is <b>true</b>, the same way you decided about every other case on that shelf.</p>`),
    verse:"“God commends his own love toward us, in that while we were yet sinners, Christ died for us.”",
    ref:"Romans 5:8 · 1 Corinthians 15:3–4",
    tick:"I believe it. He died for me, was buried, and rose again."
  },
  {
    n:3, word:"Receive",
    head:"I stop trying to pay, and I take what he has paid",
    body:E(
      `<p>This is the step in the file that everyone skips. Somebody has paid your fine in full and the money is sitting with the clerk — and if you never sign for it you walk out still owing, not because the payment was too small but because you never took it.</p>
       <p>So: ask him. Ask him to forgive what is on the charge sheet, and ask him to be your Saviour — the one who paid it — and your Lord — the one you now follow. <b>And stop adding your own payments to a bill that is marked paid in full.</b></p>`,
      `<p>This is the step everybody skips. Somebody has paid your fine in full and the money is sitting with the clerk. If you never sign for it, you walk out still owing — not because the money was not enough, but because you never took it.</p>
       <p>So ask him. Ask him to forgive what is on your page. Ask him to be your Saviour — the one who paid it — and your Lord — the one you follow now. <b>And stop trying to add your own payments to a bill that already says paid in full.</b></p>`),
    verse:"“To as many as received him, to them he gave the right to become God’s children.”",
    ref:"John 1:12 · Ephesians 2:8–9",
    tick:"I receive him. I am not paying for this. I am taking it."
  },
  {
    n:4, word:"Tell",
    head:"Out loud, to a real person",
    body:E(
      `<p>The record treats this as part of it rather than an extra, and there is a good reason: a decision nobody ever hears about is very easy to quietly un-decide next week.</p>
       <p>It does not have to be a speech, and it does not have to be today. It has to be a real person — your teacher, a parent, somebody at church, somebody who follows Jesus and will be glad. <b>Say it in your own words.</b> You will be given something to help with that at the end.</p>`,
      `<p>The record treats this as part of it, not an extra, and there is a good reason. A decision nobody ever hears about is very easy to quietly un-decide next week.</p>
       <p>It does not have to be a speech and it does not have to be today. It does have to be a real person — your teacher, a parent, somebody at church, somebody who follows Jesus and will be glad. <b>Say it in your own words.</b> There is something at the end to help if that is hard.</p>`),
    verse:"“If you will confess with your mouth that Jesus is Lord, and believe in your heart that God raised him from the dead, you will be saved.”",
    ref:"Romans 10:9–10 · Matthew 10:32",
    tick:"I will tell somebody. I am not keeping this to myself."
  }
];

function inviteSteps(i){
  const s = INV_STEPS[i];
  const o = overlay(`
    <div class="inv">
      <div class="inv-kind">Step ${s.n} of 4</div>
      <div class="inv-title">${s.word}</div>
      <div class="inv-sub">${s.head}</div>
      <div class="inv-dots">${INV_STEPS.map((x,k)=>
        `<span class="inv-dot${k < i ? " done" : k === i ? " here" : ""}"></span>`).join("")}</div>
      <div class="rule"></div>
      <div class="doc-body">
        ${s.body}
        <div class="inv-verse">${s.verse}<div class="inv-ref">${s.ref}</div></div>
      </div>
      <div class="inv-row">
        <button class="btn inv-yes" id="invNext">${s.tick}</button>
        <button class="btn ghost" id="invBack">${i ? "Back a step" : "Not yet — take me back"}</button>
      </div>
      <p class="inv-small" style="margin-top:12px">You can stop at any step. Nothing is saved until the end, and stopping here is not a failure — it is you being honest, which is the whole point.</p>
    </div>`, "wide inviteview");
  o.querySelector("#invNext").addEventListener("click", ()=>{
    o.remove();
    if(i + 1 < INV_STEPS.length) inviteSteps(i + 1); else invitePrayer();
  });
  o.querySelector("#invBack").addEventListener("click", ()=>{
    o.remove();
    if(i) inviteSteps(i - 1); else openInvite();
  });
}

/* ------------------------------------------------------------------ */
/*  the prayer — offered, never required                              */
/* ------------------------------------------------------------------ */
function invitePrayer(){
  const o = overlay(`
    <div class="inv">
      <div class="inv-kind">The four steps, said to him</div>
      <div class="inv-title">You can use these words, or your own</div>
      <div class="rule"></div>
      <div class="doc-body">
        ${E(
  `<p><b>There is nothing magic in this prayer.</b> No sentence has power in it, and God is not listening for a particular form of words. He is listening for whether you mean it. If your own words are better, use your own words — they will be better, because they are yours.</p>`,
  `<p><b>There is nothing magic in this prayer.</b> No sentence has power in it. God is not listening for the right words. He is listening for whether you mean it. If you would rather use your own words, use them — they will be better, because they are yours.</p>`)}
        <div class="inv-prayer">
          <p>Jesus,</p>
          <p>I have not always done what I knew was right. I have broken it, and I am not going to pretend otherwise or argue that it is small.</p>
          <p>I believe you died in my place, that you were buried, and that you rose again on the third day — and that this, and nothing I could bring, is what settles it.</p>
          <p>I stop trying to pay. I take what you have paid. Please forgive me, and be my Saviour and my Lord from today.</p>
          <p>I will tell somebody.</p>
          <p>Thank you.</p>
        </div>
        <p class="inv-small">Read it slowly. Read it again if you want to. Nobody is timing you, and nobody is watching.</p>
      </div>
      <div class="inv-row">
        <button class="btn inv-yes" id="invMean">I have prayed this, and I mean it</button>
        <button class="btn ghost" id="invWait">I am not ready to say this yet</button>
      </div>
    </div>`, "wide inviteview");
  o.querySelector("#invMean").addEventListener("click", ()=>{ o.remove(); inviteWelcome(true); });
  o.querySelector("#invWait").addEventListener("click", ()=>{ o.remove(); inviteNotNow(); });
}

/* ------------------------------------------------------------------ */
/*  welcome                                                           */
/* ------------------------------------------------------------------ */
function inviteWelcome(fresh){
  const had = decisionGet();
  if(fresh && !(had && had.made)){
    decisionSet({made:true, date:todayIso(), dateLong:todayLong(), name:(had && had.name) || ""});
  }
  const d = decisionGet() || {};
  const o = overlay(`
    <div class="inv welcome">
      ${SVG.finalSeal || ""}
      <div class="inv-kind">${esc(d.dateLong || todayLong())}</div>
      <div class="inv-title big">Welcome to the family</div>
      <div class="rule"></div>
      <div class="doc-body">
        <p class="inv-lead">${E(
  "Whatever else is true about today, this is: you are not settling that account any more, because it is settled. That is not a feeling and it does not depend on how you feel tomorrow morning. It is a receipt with somebody else's name on the payment line.",
  "Whatever else is true about today, this is true: you are not paying that debt any more, because it is paid. That is not a feeling, and it does not depend on how you feel tomorrow morning. It is a receipt with somebody else's name on the line where the payer signs.")}</p>
        <div class="inv-verse">“To as many as received him, to them he gave the right to become God’s children.”<div class="inv-ref">John 1:12</div></div>
        <p>The record says three things happen at this point, and none of them is about you trying harder.</p>
        <ul>
          <li><b>You are forgiven</b> — all of it, the whole page, not the parts you have owned up to. <span class="inv-ref-in">1 John 1:9 · Colossians 2:13–14</span></li>
          <li><b>You are adopted.</b> The word the record uses is not <i>member</i> or <i>follower</i>. It is <i>child</i>, and it says you can speak to God the way a child speaks to a father. <span class="inv-ref-in">Romans 8:15–16 · Galatians 4:4–7</span></li>
          <li><b>You are not alone in being glad.</b> The record says there is joy in heaven over one person turning round — over you, today. <span class="inv-ref-in">Luke 15:7, 15:10</span></li>
        </ul>
        <h4>What happens now</h4>
        ${E(
  `<p><b>Step four is still waiting, and it is the important one today: tell somebody.</b> A real person, out loud — your teacher, a parent, somebody at church. Not because it makes it more true, but because a decision nobody ever hears about is very easy to quietly un-decide. There is a note below you can print and hand to somebody if saying it out loud is hard.</p>
   <p>After that, three ordinary things, none of them complicated: <b>talk to him</b> (that is all prayer is — no special voice), <b>read what he said</b> (the 📖 Bible is in the top bar of every case; John's account is a good place to start), and <b>find people who are doing the same</b>, because nobody keeps this up alone.</p>
   <p class="margin-note">One last thing, because somebody should say it plainly. You will have a bad day, probably quite soon, and you will wonder whether today counted. It did. The account was not settled by how you were feeling — it was settled outside a city on a Friday, and your feelings on Tuesday do not reopen it.</p>`,
  `<p><b>Step four is still waiting, and today it is the important one: tell somebody.</b> A real person, out loud — your teacher, a parent, somebody at church. Not because it makes it more true, but because a decision nobody ever hears about is very easy to quietly un-decide. If saying it out loud is hard, there is a note below you can print and hand to somebody.</p>
   <p>After that, three ordinary things, and none of them are complicated. <b>Talk to him</b> — that is all praying is, and you do not need a special voice. <b>Read what he said</b> — the 📖 Bible is at the top of every case, and John's account is a good place to start. <b>Find other people doing the same</b>, because nobody keeps this going on their own.</p>
   <p class="margin-note">One last thing, because somebody should say it plainly. You will have a bad day, probably quite soon, and you will wonder if today really counted. It did. The debt was not paid off by how you were feeling. It was paid outside a city on a Friday, and how you feel on Tuesday does not open it back up.</p>`)}
      </div>
      <div class="inv-row">
        <button class="btn inv-yes" id="invCert">🏅 My certificate</button>
        <button class="btn ghost" id="invNote">✉ A note I can give to somebody</button>
        <button class="btn ghost" id="invClose">Close</button>
      </div>
    </div>`, "wide inviteview");
  o.querySelector("#invCert").addEventListener("click", inviteCert);
  o.querySelector("#invNote").addEventListener("click", inviteNote);
  o.querySelector("#invClose").addEventListener("click", ()=>o.remove());
}

/* ------------------------------------------------------------------ */
/*  the other two answers                                             */
/* ------------------------------------------------------------------ */
function inviteNotNow(){
  const o = overlay(`
    <div class="inv">
      <div class="inv-kind">Answer received</div>
      <div class="inv-title">${E("That is an honest answer, and honest is what this file asked for",
                                   "That is an honest answer, and honest is what this file asked for")}</div>
      <div class="rule"></div>
      <div class="doc-body">
        ${E(
  `<p>We meant it when we said all three answers were real. Saying yes to something you do not yet believe would not make it true, and it would not fool anybody worth fooling. <b>Not yet is a better answer than a yes you do not mean.</b></p>
   <p>So nothing is saved, nothing is marked, and nobody will be told. You worked the case, you weighed the evidence and you said what you actually think, which is exactly what every other file in this archive asks of you.</p>`,
  `<p>We meant it when we said all three answers were real. Saying yes to something you do not believe yet would not make it true, and it would not fool anybody worth fooling. <b>Not yet is a better answer than a yes you do not mean.</b></p>
   <p>So nothing is saved, nothing is marked, and nobody is told. You worked the case, you weighed up the evidence, and you said what you really think. That is exactly what every other file here asks of you.</p>`)}
        <h4>If you want to keep going with it</h4>
        <ul>
          <li><b>Go back to the document that was hardest to get past.</b> Everyone has one. That is usually where the real question is hiding.</li>
          <li><b>Work JM-33 — The Empty Tomb.</b> This file assumes the resurrection; that one puts it on trial properly, with every alternative explanation tested.</li>
          <li><b>Read one of the accounts for yourself</b>, in the 📖 Bible at the top of any case. John's is short and it is the one that says most plainly what it is claiming.</li>
          <li><b>Ask somebody the hard question</b> — the actual one, not a polite version of it. A question you are embarrassed to ask is usually the one worth asking.</li>
        </ul>
        <p class="margin-note">The door does not close and nobody is counting how long you take. When you want it again, open the ☰ menu in this case and it will be there, exactly as it is now.</p>
      </div>
      <div class="inv-row"><button class="btn ghost" id="invClose">Close</button></div>
    </div>`, "wide inviteview");
  o.querySelector("#invClose").addEventListener("click", ()=>o.remove());
}

function inviteAlready(){
  const had = decisionGet() || {};
  const o = overlay(`
    <div class="inv">
      <div class="inv-kind">Answer received</div>
      <div class="inv-title">Then this file is your own story, told back to you</div>
      <div class="rule"></div>
      <div class="doc-body">
        <p>Good. Then you have already seen the thing this case exists to show, and there is nothing here you need to do again — you cannot be adopted twice, and nothing on this screen adds to a receipt that already says <i>paid in full</i>.</p>
        <p>Two things worth doing anyway. <b>Could you say why?</b> Not the feeling — the reasoning, the way you just did for five explanations on a board. Being able to say plainly what you believe and why is worth more than most of what school will teach you.</p>
        <p>And <b>who told you?</b> Somebody did step four in your direction once. It is worth remembering that, and it is worth being that person for somebody else.</p>
        <p>If you would like a certificate with the date you remember, put it in below. If you do not know the date, that does not matter in the slightest — plenty of people cannot name the day, and the receipt is not signed by your memory.</p>
        <div class="inv-fields">
          <label>The date, if you know it<input id="invDate" type="text" placeholder="e.g. sometime in Year 4, or 12 March 2023"></label>
        </div>
      </div>
      <div class="inv-row">
        <button class="btn inv-yes" id="invSave">Make my certificate</button>
        <button class="btn ghost" id="invClose">Close</button>
      </div>
    </div>`, "wide inviteview");
  o.querySelector("#invSave").addEventListener("click", ()=>{
    const when = (o.querySelector("#invDate").value || "").trim();
    decisionSet({made:true, date:todayIso(), dateLong: when || "a day I could not tell you the date of",
                 name: had.name || "", earlier:true});
    o.remove(); inviteCert();
  });
  o.querySelector("#invClose").addEventListener("click", ()=>o.remove());
}

/* ------------------------------------------------------------------ */
/*  certificate and the note                                          */
/* ------------------------------------------------------------------ */
function decCertHtml(name, when){
  return `
  <div class="deccert">
    <div class="dc-rule"></div>
    <div class="dc-kind">B.I.B. &middot; The Bible Investigation Bureau</div>
    <div class="dc-h">The Ransom</div>
    <div class="dc-sub">Case JM-01 &middot; the file with your name in it</div>
    <img class="dc-seal" src="__IMG_j01cert__" alt="">
    <div class="dc-line">This is to record that</div>
    <div class="dc-name">${esc(name) || "&nbsp;"}</div>
    <div class="dc-line">read the charge, weighed the ledger, and on</div>
    <div class="dc-date">${esc(when)}</div>
    <div class="dc-line">stopped trying to pay, and received the gift of God
      &mdash; forgiveness and eternal life through the death, burial and
      resurrection of Jesus Christ.</div>
    <div class="dc-verse">“To as many as received him, to them he gave the right to become God’s children.”<br><span>John 1:12</span></div>
    <div class="dc-foot">
      <div><span class="dc-sig"></span>Signed</div>
      <div><span class="dc-sig"></span>Witnessed by</div>
    </div>
    <div class="dc-tiny">Not a certificate of achievement. Nothing on this page was earned, and that is the point of it.</div>
    <div class="dc-rule"></div>
  </div>`;
}

function inviteCert(){
  const d = decisionGet() || {};
  const o = overlay(`
    <div class="inv">
      <div class="inv-kind">For your case folder</div>
      <div class="inv-title">Your certificate</div>
      <div class="rule"></div>
      <div class="doc-body">
        <div class="inv-fields">
          <label>Your name, as you want it written<input id="dcName" type="text" value="${esc(d.name||"")}" placeholder="Your name"></label>
        </div>
        <div id="dcPrev" class="dc-prev">${decCertHtml(d.name || "", d.dateLong || todayLong())}</div>
      </div>
      <div class="inv-row">
        <button class="btn" id="dcPrint">Print it</button>
        <button class="btn ghost" id="dcClose">Close</button>
      </div>
    </div>`, "wide inviteview");
  const name = o.querySelector("#dcName"), prev = o.querySelector("#dcPrev");
  const redraw = ()=>{
    const dd = decisionGet() || {};
    prev.innerHTML = decCertHtml(name.value, dd.dateLong || todayLong());
    decisionSet(Object.assign({}, dd, {name:name.value}));
  };
  name.addEventListener("input", redraw);
  o.querySelector("#dcPrint").addEventListener("click", ()=>{
    const dd = decisionGet() || {};
    printSheet("Certificate", decCertHtml(name.value, dd.dateLong || todayLong()));
  });
  o.querySelector("#dcClose").addEventListener("click", ()=>o.remove());
}

function decNoteHtml(name){
  return `
  <div class="decnote">
    <div class="dn-h">I have something to tell you</div>
    <div class="dn-body">
      <p>I have been working <b>Case JM-01 — The Ransom</b>, and at the end of it I made a decision I would like you to know about.</p>
      <p><b>Today I trusted Jesus Christ as my Saviour.</b> I admitted I had done wrong, I believe he died and rose again for me, and I have asked him to forgive me and to be my Lord.</p>
      <p>The last of the four steps was to tell somebody. This is me doing that. I would like to talk about it when you have time.</p>
      <div class="dn-from">— ${esc(name) || "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"}</div>
    </div>
    <div class="dn-note">If you are reading this and you are not sure what to say: “I’m really glad you told me” is enough to start with.</div>
  </div>`;
}

function inviteNote(){
  const d = decisionGet() || {};
  const o = overlay(`
    <div class="inv">
      <div class="inv-kind">Step four</div>
      <div class="inv-title">A note you can hand to somebody</div>
      <div class="rule"></div>
      <div class="doc-body">
        <p>Saying it out loud is better, and you can still do that afterwards. But if the words will not come, print this, write your name on it, and give it to somebody you trust. That counts.</p>
        <div class="inv-fields">
          <label>Your name<input id="dnName" type="text" value="${esc(d.name||"")}" placeholder="Your name"></label>
        </div>
        <div id="dnPrev" class="dc-prev">${decNoteHtml(d.name || "")}</div>
      </div>
      <div class="inv-row">
        <button class="btn" id="dnPrint">Print it</button>
        <button class="btn ghost" id="dnClose">Close</button>
      </div>
    </div>`, "wide inviteview");
  const name = o.querySelector("#dnName"), prev = o.querySelector("#dnPrev");
  name.addEventListener("input", ()=>{
    prev.innerHTML = decNoteHtml(name.value);
    decisionSet(Object.assign({}, decisionGet() || {}, {name:name.value}));
  });
  o.querySelector("#dnPrint").addEventListener("click", ()=>
    printSheet("A note", decNoteHtml(name.value)));
  o.querySelector("#dnClose").addEventListener("click", ()=>o.remove());
}

/* One small print helper, so the certificate and the note do not depend on
   the paper-edition machinery. */
function printSheet(title, html){
  const w = window.open("", "_blank", "width=900,height=1200");
  if(!w){ alert("Your browser blocked the print window. Allow pop-ups for this page and try again."); return; }
  const css = [...document.querySelectorAll("style")].map(s=>s.textContent).join("\n");
  w.document.write(`<!doctype html><html><head><meta charset="utf-8"><title>${title}</title>
    <base href="${location.href}">
    <style>${css}
      body{background:#fff;margin:0;padding:26px;font-family:Georgia,serif}
      .overlay,.topbar,#shelf{display:none!important}
      @page{margin:14mm}
    </style></head><body>${html}</body></html>`);
  w.document.close();
  setTimeout(()=>{ w.focus(); w.print(); }, 350);
}
