"use strict";
/* ============================================================
   CASE JM-15 — THE WITNESSES WHO WOULD NOT AGREE
   Jerusalem.  Source: Mark 14:53-65 and parallels.
   ============================================================ */

SVG.j15chamber = `<svg viewBox="0 0 1536 1024" xmlns="http://www.w3.org/2000/svg"><image href="__IMG_j15chamber__" x="0" y="0" width="1536" height="1024"/><text x="347" y="107" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="17" font-weight="600" fill="#4a3520" textLength="214" lengthAdjust="spacingAndGlyphs">THE TIERED BENCHES</text><text x="347" y="128" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="11" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".92" textLength="168" lengthAdjust="spacingAndGlyphs">the council in session</text><text x="1069" y="513" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="21" font-weight="600" fill="#4a3520" textLength="120" lengthAdjust="spacingAndGlyphs">THE TABLE</text><text x="1069" y="534" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="10" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".92" textLength="212" lengthAdjust="spacingAndGlyphs">where the statements were laid</text><text x="383" y="842" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="19" font-weight="600" fill="#4a3520" textLength="164" lengthAdjust="spacingAndGlyphs">THE ENTRANCE</text><text x="383" y="863" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="10" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".92" textLength="208" lengthAdjust="spacingAndGlyphs">brought in from the courtyard</text></svg>`;
SVG.j15rule = `<svg viewBox="0 0 1536 1024" xmlns="http://www.w3.org/2000/svg"><image href="__IMG_j15rule__" x="0" y="0" width="1536" height="1024"/><text x="236" y="98" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="18" font-weight="600" fill="#4a3520" textLength="236" lengthAdjust="spacingAndGlyphs">THE FIRST WITNESS</text><text x="236" y="119" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="11" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".92" textLength="222" lengthAdjust="spacingAndGlyphs">what he saw, in his own words</text><text x="1299" y="97" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="17" font-weight="600" fill="#4a3520" textLength="238" lengthAdjust="spacingAndGlyphs">THE SECOND WITNESS</text><text x="1299" y="118" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="10" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".92" textLength="232" lengthAdjust="spacingAndGlyphs">heard separately, never together</text><text x="1146" y="800" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="20" font-weight="600" fill="#4a3520" textLength="150" lengthAdjust="spacingAndGlyphs">THE BALANCE</text><text x="1146" y="821" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="11" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".92" textLength="190" lengthAdjust="spacingAndGlyphs">the accounts must agree</text></svg>`;
SVG.j15statements = `<svg viewBox="0 0 1536 1024" xmlns="http://www.w3.org/2000/svg"><image href="__IMG_j15statements__" x="0" y="0" width="1536" height="1024"/><text x="290" y="246" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="30" font-weight="600" fill="#4a3520" textLength="300" lengthAdjust="spacingAndGlyphs">WITNESS I</text><text x="290" y="284" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="15" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".9" textLength="250" lengthAdjust="spacingAndGlyphs">brought forward first</text><text x="766" y="246" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="30" font-weight="600" fill="#4a3520" textLength="300" lengthAdjust="spacingAndGlyphs">WITNESS II</text><text x="766" y="284" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="15" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".9" textLength="250" lengthAdjust="spacingAndGlyphs">heard second</text><text x="1250" y="252" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="30" font-weight="600" fill="#4a3520" textLength="300" lengthAdjust="spacingAndGlyphs">WITNESS III</text><text x="1250" y="290" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="15" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".9" textLength="250" lengthAdjust="spacingAndGlyphs">heard third</text><text x="290" y="726" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="30" font-weight="600" fill="#4a3520" textLength="300" lengthAdjust="spacingAndGlyphs">WITNESS IV</text><text x="290" y="764" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="15" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".9" textLength="250" lengthAdjust="spacingAndGlyphs">heard fourth</text><text x="766" y="732" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="30" font-weight="600" fill="#4a3520" textLength="300" lengthAdjust="spacingAndGlyphs">WITNESS V</text><text x="766" y="770" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="15" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".9" textLength="250" lengthAdjust="spacingAndGlyphs">the fullest account</text><text x="1250" y="732" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="30" font-weight="600" fill="#4a3520" textLength="300" lengthAdjust="spacingAndGlyphs">WITNESS VI</text><text x="1250" y="770" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="15" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".9" textLength="250" lengthAdjust="spacingAndGlyphs">the last called</text></svg>`;

const JM15_ITEMS = [

/* ---------------- STAGE 0 ---------------- */
{
  id:"j15letter", stage:0, notEvidence:true, kind:"Briefing", title:"Letter from the Case Supervisor",
  sub:"The Bible Investigation Bureau · Department of Unsolved Antiquities",
  prev:"A court with plenty of witnesses and no case, because no two of them said the same thing.",
  x:22, y:26, rot:-3, w:216,
  body:`
    <p><b>To the investigating team,</b></p>
    <p>A council sits at night to hear a capital charge. Under its own law it needs <b>two witnesses whose accounts agree</b> — not two witnesses, two <i>agreeing</i> witnesses. Anything less and the case fails.</p>
    <p>Witnesses are produced. Several of them. They all describe the same alleged sentence, spoken about the temple. And when the statements are laid side by side, <b>no two of them match.</b></p>
    <p>The case collapses on its own evidence. What finally goes to the Roman governor comes from somewhere else entirely.</p>
    <h4>Your task</h4>
    <p>Five explanations are on the board. Close all five. Then think about the odd, backwards conclusion this file points to: <b>a prosecution that could not manufacture two matching accounts tells you something useful about accounts that do match.</b></p>
    <h4>A note on fairness</h4>
    <p>This file is about <b>procedure</b>, and about a handful of named men making decisions at two in the morning. It is not about a people. The record itself is written by insiders, it names council members who dissented, and it is careful to say that the court failed by <i>its own</i> law — which is a standard worth admiring, not sneering at.</p>
    <h4>How the file works</h4>
    <ul>
      <li>Two parts of the file are <b>locked</b>. Both codes are in documents you have or will have.</li>
      <li>The second lock opens with the <b>testimony grid</b> — the 📑 button in the top bar, once the first lock is open.</li>
      <li>When all five explanations are closed, go to the <b>Pinboard</b>.</li>
    </ul>
    <div class="sig">Mordecai ben Jair</div>
    <div class="small" style="color:#5b4a35">Case Supervisor</div>
    <div class="ref">This case is reconstructed from Mark 14:53–65, with Matthew 26:57–68 and Luke 22:66–71.</div>`
},
{
  id:"j15statements", stage:0, kind:"Statements", title:"The Six Statements",
  sub:"Taken separately, on the same alleged sentence", thumb:"j15statements",
  prev:"Six accounts of one sentence. Read them line by line; no two are the same.",
  x:52, y:22, rot:3, w:218,
  body:`
    <div class="plate">${SVG.j15statements}<div class="cap">Click the plate to enlarge it. The statement sheets as filed.</div></div>
    <p>Every witness was asked about the same reported saying about the temple. Here is what each of them actually put:</p>
    <table class="ledger">
      <tr><th>Witness</th><th>Statement as given</th></tr>
      <tr><td>I</td><td>"He said he would destroy this temple."</td></tr>
      <tr><td>II</td><td>"He said <b>this temple</b> would fall, and in <b>three days</b> it would be raised up again."</td></tr>
      <tr><td>III</td><td>"He said he would pull it down in <b>three days</b>."</td></tr>
      <tr><td>IV</td><td>"He said <b>this temple made with hands</b> would go, and another would be built."</td></tr>
      <tr><td>V</td><td>"I heard him say: I will destroy this temple that is <b>made with hands</b>, and within <b>three days</b> I will build another <b>made without hands</b>."</td></tr>
      <tr><td>VI</td><td>"Something about <b>three days</b>. I could not say more than that."</td></tr>
      <tr><td><b>Statements that agree</b></td><td class="n"><b>0</b></td></tr>
    </table>
    <h4>Two numbers for the first lock</h4>
    <p>How many of these statements agree with another one? <b>None.</b> And how many days does the alleged saying mention? <b>Three</b> — that is the one element more than half of them have in common, and it is not enough, because agreement in law means the whole account, not one shared word.</p>
    <p class="margin-note">Notice that the witnesses are not obviously lying about nothing. They are all circling something real that was said. They just cannot reproduce it.</p>
    <div class="ref">Background: Mark 14:56–59 · Matthew 26:60–61.</div>`
},
{
  id:"j15rule", stage:0, kind:"Law", title:"The Two-Witness Rule",
  sub:"The standard this court was working to", thumb:"j15rule",
  prev:"Two agreeing witnesses, or nothing. Numbers do not substitute for agreement.",
  x:78, y:26, rot:-4, w:216,
  body:`
    <div class="plate">${SVG.j15rule}<div class="cap">Click the diagram to enlarge it.</div></div>
    <p>This is not a modern standard imposed on an ancient court. It is the court's own written law, and it is unusually strict.</p>
    <table class="ledger">
      <tr><th>Requirement</th><th>Detail</th></tr>
      <tr><td>Witnesses required for a capital charge</td><td class="n"><b>2</b>, at least — three is better</td></tr>
      <tr><td>One witness alone</td><td>Never sufficient, however respectable</td></tr>
      <tr><td>The witnesses must</td><td><b>Agree</b> — their accounts are compared and must stand together</td></tr>
      <tr><td>Examined</td><td>Separately, so that agreement cannot be arranged in the room</td></tr>
      <tr><td>A false witness in a capital case</td><td>Receives the penalty he sought for the accused</td></tr>
      <tr><td>Weight of numbers</td><td class="n"><b>irrelevant</b> — twenty who differ are worth less than two who match</td></tr>
    </table>
    <h4>Why "the charge was proved by weight of numbers" fails</h4>
    <p>Under this law, six witnesses who each say something slightly different do not make a strong case; <b>they make no case at all.</b> The rule is designed exactly to stop a crowd of half-remembered impressions from convicting somebody. The number in the top row is the first digit of the first lock.</p>
    <p class="margin-note">Worth pausing on the last row of that table. A false witness in a capital case faced the penalty he was trying to obtain. That is a serious deterrent, and it may be part of why the statements wobble.</p>
    <div class="ref">Background: Deuteronomy 17:6 · 19:15–19 · Numbers 35:30.</div>`
},
{
  id:"j15chamber", stage:0, kind:"Plan", title:"The Chamber, and the Hour",
  sub:"Where it was held, and when", thumb:"j15chamber",
  prev:"A night sitting, at speed, on the eve of a festival. Every one of those is irregular.",
  x:26, y:56, rot:5, w:216,
  body:`
    <div class="plate">${SVG.j15chamber}<div class="cap">Click the plan to enlarge it.</div></div>
    <table class="ledger">
      <tr><th>Element</th><th>Recorded</th><th>Ordinary practice</th></tr>
      <tr><td>Hour</td><td><b>Night</b>, after the arrest</td><td>Capital cases heard in daytime</td></tr>
      <tr><td>Day</td><td>The eve of a festival</td><td>Not on the eve of a sabbath or feast</td></tr>
      <tr><td>Duration</td><td>Hours, not days</td><td>A capital verdict of guilt must wait until the following day</td></tr>
      <tr><td>Place</td><td>The high priest's house, then the council chamber at first light</td><td>The council's own chamber</td></tr>
      <tr><td>Defence case</td><td class="n">none called</td><td>The defence is heard first</td></tr>
      <tr><td>Verdict</td><td>Reached the same night</td><td>Slept on, then re-taken</td></tr>
    </table>
    <h4>Why "the trial was properly conducted" fails</h4>
    <p>Take the irregularities one at a time and any one of them might be argued. Together they describe a proceeding run <b>fast, in the dark, out of order, and finished before morning</b> — and the record's own account of the sequence is the evidence for it. The court's ordinary standards are known, written and high; this sitting did not meet them.</p>
    <p class="margin-note">The interesting question for your team is not "was it fair?" but "why the hurry?" Ask them what a hurry usually means.</p>
    <div class="ref">Background: Mark 14:53–65 · 15:1 · Luke 22:66.</div>`
},
{
  id:"j15recruit", stage:0, kind:"Recruitment record", title:"How the Witnesses Were Found",
  sub:"The court went looking",
  prev:"They did not come forward. They were sought, in advance, to fit a decision already made.",
  x:56, y:52, rot:-2, w:210,
  body:`
    <p>The first explanation on the board is the kindest one: honest people remembering the same thing differently. The record does not support it, and it says so in plain words.</p>
    <div class="doc-body">
      <p>"The chief priests and all the council <b>sought witness against him to put him to death, and found none.</b> For many bore false witness against him, but their witness agreed not together."</p>
    </div>
    <table class="ledger">
      <tr><th>Question</th><th>Record</th></tr>
      <tr><td>Did witnesses come forward of their own accord?</td><td class="n"><b>no</b> — they were sought</td></tr>
      <tr><td>What were they sought <i>for</i>?</td><td>To produce a death sentence — the outcome was fixed first</td></tr>
      <tr><td>How does the record describe their evidence?</td><td><b>False witness</b></td></tr>
      <tr><td>Was any of it usable?</td><td class="n"><b>none</b></td></tr>
    </table>
    <h4>Why "they were honest and simply differed" fails</h4>
    <p>Honest witnesses to a real event do differ, and courts expect it. But these were <b>recruited to support a conclusion</b> that had already been reached, and the account calls their evidence false without hedging. That is a different thing from imperfect memory — and it is the account's own word, not the Bureau's.</p>
    <p class="margin-note">The record is not flattering to the men running this court, and it was written by people from inside that world. Keep that in view.</p>
    <div class="ref">Background: Mark 14:55–57 · Matthew 26:59–60.</div>`
},
{
  id:"j15council", stage:0, kind:"Council note", title:"The Council, and What Held",
  sub:"Who sat, who dissented, and what survived the night",
  prev:"Not unanimous, and in the end not one charge from a witness was left standing.",
  x:80, y:56, rot:4, w:206,
  body:`
    <table class="ledger">
      <tr><th>Element</th><th>Record</th></tr>
      <tr><td>The body</td><td>The council — chief priests, elders and scribes</td></tr>
      <tr><td>Presiding</td><td>The high priest</td></tr>
      <tr><td>Unanimous?</td><td class="n"><b>no</b> — at least one member, Joseph of Arimathea, is recorded as not consenting to their counsel and deed</td></tr>
      <tr><td>Another member</td><td>Nicodemus, elsewhere on record arguing that the law does not judge a man before hearing him</td></tr>
      <tr><td><b>Charges from the witnesses that finally held</b></td><td class="n"><b>0</b></td></tr>
      <tr><td>What was sent to the governor instead</td><td>A political charge — claiming to be a king — not the temple saying at all</td></tr>
    </table>
    <h4>Two things worth holding on to</h4>
    <ul>
      <li><b>Zero.</b> After a night of searching, not one witness charge survived. That number is the last digit of the first lock.</li>
      <li>The council was <b>divided</b>. Files like this are often read as one group against another; the record itself refuses that reading, by name.</li>
    </ul>
    <p class="margin-note">When a case changes charge between courts, the change is usually the most informative thing in the file.</p>
    <div class="ref">Background: Mark 14:55 · 15:1–3 · Luke 23:50–51 · John 7:50–51.</div>`
},

/* ---------------- STAGE 1 — released by the numbers lock ---------------- */
{
  id:"j15transcript", stage:1, kind:"Transcript", title:"The Question That Ended It",
  sub:"Field Chest B · where the final charge came from",
  prev:"The witnesses had failed. The high priest asked him directly, and he answered.",
  x:28, y:26, rot:-3, w:212,
  body:`
    <div class="doc-body">
      <p>The witnesses having failed, the high priest stood up in the middle and asked:</p>
      <p>"Answerest thou nothing? What is it which these witness against thee?" <i>— no answer.</i></p>
      <p>Then, directly: "<b>Art thou the Christ, the Son of the Blessed?</b>"</p>
      <p>And he said: "<b>I am.</b>"</p>
      <p>The high priest tore his clothes and said: "<b>What need we any further witnesses?</b> You have heard the blasphemy."</p>
    </div>
    <h4>Why "the charge came from the witnesses" fails</h4>
    <p>The high priest's own sentence settles it: <i>what need we any further witnesses?</i> The charge that carried the room was <b>not produced by any witness at all.</b> It came from a direct question put to the accused, and from his answer to it, after the witness evidence had already collapsed.</p>
    <table class="ledger">
      <tr><th>Charge</th><th>Source</th><th>Held?</th></tr>
      <tr><td>Threatening the temple</td><td>Witnesses</td><td class="n"><b>no</b></td></tr>
      <tr><td>The claim under direct question</td><td><b>The accused</b></td><td>Yes — this is what the council acted on</td></tr>
      <tr><td>Claiming to be a king</td><td>Reframed for the governor</td><td>The charge that went to Rome</td></tr>
    </table>
    <p class="margin-note">Three courts, three different charges, one outcome decided before the first of them sat. That sequence is the case.</p>
    <div class="ref">Background: Mark 14:60–64 · Luke 22:67–71.</div>`
},
{
  id:"j15silence", stage:1, kind:"Note", title:"The Silence, and What a Defence Would Have Cost the Court",
  sub:"Field Chest B · testing the guilt reading",
  prev:"He answered the one question that mattered and nothing else. That is not the same as saying nothing.",
  x:58, y:24, rot:4, w:210,
  body:`
    <p>"He would not defend himself, so he must have been guilty" is a natural reaction, and the file gives you three reasons it does not work.</p>
    <table class="ledger">
      <tr><th>Point</th><th>Detail</th></tr>
      <tr><td>He was not silent throughout</td><td>He answered the high priest's direct question immediately and plainly</td></tr>
      <tr><td>What he was silent about</td><td>The witness statements — the ones that <b>did not agree with each other</b></td></tr>
      <tr><td>What a defence would have required</td><td>Answering six accounts that contradicted one another. There was nothing coherent to answer</td></tr>
      <tr><td>Whose job it was</td><td><b>The court's.</b> Under its own law the burden sat with the prosecution, not the accused</td></tr>
      <tr><td>What the court did instead</td><td>Abandoned the witnesses and questioned the accused directly</td></tr>
    </table>
    <h4>The procedural point</h4>
    <p>A defendant does not have to disprove testimony that has already failed its own test. <b>Silence in the face of incoherent evidence is not a confession; it is a correct reading of where the burden lies.</b> And the moment a real question was put, it was answered.</p>
    <p class="margin-note">Useful to separate for a class: refusing to answer a muddle, and refusing to answer a question. Only one of those looks like evasion, and it is not the one that happened.</p>
    <div class="ref">Background: Mark 14:60–62 · compare Isaiah 53:7.</div>`
},
{
  id:"j15hostile", stage:1, kind:"Bureau analysis", title:"What a Failed Frame-Up Proves",
  sub:"Field Chest B · the backwards argument",
  prev:"They could not get two men to tell one lie the same way. Hold that thought.",
  x:80, y:44, rot:-6, w:208,
  body:`
    <p>This is the transferable idea in the file, and it runs the opposite way to what students expect.</p>
    <h4>The observation</h4>
    <p>A group with authority, motive, time and a fixed intention set out to produce <b>two matching false statements</b> — the minimum their law required. It is not a difficult task. Two men, one room, one afternoon of rehearsal.</p>
    <p><b>They failed.</b> Repeatedly, and in public, in front of a council that included members who did not agree with the proceeding.</p>
    <h4>What that tells you about coordinated testimony</h4>
    <ul>
      <li>Manufacturing agreement is <b>harder than it looks</b>, because details multiply: who, what building, how long, made with hands or not, destroy or let fall.</li>
      <li>The more circumstantial the account, the more places it can fail to match.</li>
      <li>So when several independent accounts <i>do</i> line up on circumstantial detail, coordination is a costly explanation — this file is the price list.</li>
    </ul>
    <h4>Stated honestly</h4>
    <p>This is not a proof of anything. It is a piece of evidence about how hard invented agreement is to sustain, produced by the people best placed to try it and recorded by their opponents. Weigh it as that.</p>
    <p class="margin-note">Test it in class: send two students out to invent a matching account of an event, question them separately, and see how long it survives.</p>
    <div class="ref">Background: Mark 14:55–59. The reasoning is the Bureau's own.</div>`
},
{
  id:"j15saying", stage:1, kind:"Source note", title:"What Was Actually Said",
  sub:"Field Chest B · the original sentence, three years earlier",
  prev:"“Destroy this temple, and in three days I will raise it up.” Said of himself.",
  x:46, y:62, rot:3, w:206,
  body:`
    <p>The witnesses were not inventing from nothing. There is a recorded saying behind their statements, and it is worth setting beside them.</p>
    <div class="doc-body">
      <p>"<b>Destroy this temple, and in three days I will raise it up.</b>"</p>
      <p>Those who heard it answered: "Forty and six years was this temple in building, and wilt thou rear it up in three days?"</p>
      <p>The record adds, plainly: <b>"But he spake of the temple of his body."</b></p>
    </div>
    <h4>What the witnesses did to it</h4>
    <table class="ledger">
      <tr><th>Original</th><th>As reported at the trial</th></tr>
      <tr><td>A conditional — "<i>destroy</i> this temple" — addressed to them</td><td>Turned into a threat: "<b>I will</b> destroy"</td></tr>
      <tr><td>Said about himself</td><td>Applied to the building</td></tr>
      <tr><td>Three days</td><td>Three days — the one part they mostly kept</td></tr>
      <tr><td>Nothing about hands</td><td>"Made with hands" / "without hands" added by some</td></tr>
    </table>
    <p>Every statement is a distortion of the same sentence, and each one distorts it differently. <b>That is exactly the pattern you get when several people half-remember one striking remark and are then encouraged to make it damning.</b></p>
    <p class="margin-note">Worth teaching directly: this is how a quotation degrades. One conditional becomes a threat in four steps, and nobody involved has to be a professional liar.</p>
    <div class="ref">Background: John 2:19–21.</div>`
},

/* ---------------- STAGE 2 — released by the keyword lock ---------------- */
{
  id:"j15after", stage:2, kind:"Follow-up", title:"The Charge That Went to Rome",
  sub:"Sealed Pouch C",
  prev:"The temple saying vanished. What reached the governor was a political charge.",
  x:26, y:28, rot:-3, w:210,
  body:`
    <table class="ledger">
      <tr><th>Court</th><th>Charge put</th><th>Outcome</th></tr>
      <tr><td>The council, at night</td><td>Threatening the temple</td><td><b>Failed</b> — the witnesses did not agree</td></tr>
      <tr><td>The council, at first light</td><td>The claim made under direct question</td><td>Held, within that court</td></tr>
      <tr><td>The governor</td><td><b>Claiming to be a king</b> — a charge against Rome, not against the temple</td><td>The charge that produced the sentence</td></tr>
      <tr><td>The governor's own finding</td><td colspan="2">"I find no fault in this man"</td></tr>
      <tr><td>The written notice fixed to the cross</td><td colspan="2">Named the political charge, in three languages</td></tr>
    </table>
    <h4>Why the change of charge matters</h4>
    <p>A blasphemy finding meant nothing to a Roman governor and everybody in the room knew it. <b>So the charge was translated into something Rome would act on.</b> The temple saying — the thing six witnesses were produced about — plays no part in the outcome at all.</p>
    <div class="ref">Background: Luke 23:1–4 · John 18:29–31 · 19:19–20.</div>`
},
{
  id:"j15stephen", stage:2, kind:"Later file", title:"The Same Charge, Used Again",
  sub:"Sealed Pouch C · a few years later",
  prev:"The temple accusation reappears — and the record flags it as false a second time.",
  x:56, y:30, rot:4, w:208,
  body:`
    <p>The Bureau keeps this page because it shows the pattern rather than the incident.</p>
    <table class="ledger">
      <tr><th>Element</th><th>Record</th></tr>
      <tr><td>Accused</td><td>Stephen, brought before the same council</td></tr>
      <tr><td>Charge</td><td>"We have heard him say that this Jesus of Nazareth shall <b>destroy this place</b>, and change the customs Moses delivered us"</td></tr>
      <tr><td>How the record describes the witnesses</td><td><b>Suborned</b> — set up in advance</td></tr>
      <tr><td>Same accusation as</td><td>The temple saying, recycled</td></tr>
      <tr><td>Outcome</td><td>Not a lawful verdict but a killing outside the process</td></tr>
    </table>
    <h4>What this adds</h4>
    <p>The temple charge was a <b>useful</b> accusation — easy to make, hard to disprove, and inflammatory. It was used twice, and both times the record that preserves it says the witnesses were arranged. That is an odd thing for a document to say twice about its own side's opponents unless it is trying to be accurate about procedure.</p>
    <div class="ref">Background: Acts 6:11–14 · 7:57–60.</div>`
},
{
  id:"j15lesson", stage:2, kind:"Bureau analysis", title:"Agreement Is the Test, Not Volume",
  sub:"Sealed Pouch C",
  prev:"Six witnesses, one sentence, no agreement — and one word for what was missing.",
  x:80, y:34, rot:-4, w:212,
  body:`
    <p>Everything in this file turns on one distinction, and it is worth making your team say it aloud.</p>
    <h4>The distinction</h4>
    <p><b>Many witnesses is not the same as corroboration.</b> Six people saying six different things is not six times the evidence of one person; under this court's own law it is <i>less</i> than the evidence of two who match. The grid you filled in shows it as a shape: every row different, nothing lining up.</p>
    <h4>Three habits to take away</h4>
    <ul>
      <li>When several accounts are offered, <b>lay them out line by line</b> before you weigh them. Agreement is visible in a grid and invisible in a paragraph.</li>
      <li>Ask <b>where the charge came from.</b> In this file it did not come from any witness, and the man running the court said so out loud.</li>
      <li>Ask <b>who went looking</b> for the evidence, and what they wanted it to show.</li>
    </ul>
    <h4>And the backwards point</h4>
    <p>A determined prosecution with every advantage could not produce two matching false statements. Whatever else you make of this file, <b>it is a measured demonstration of how expensive invented agreement is</b> — recorded, unhelpfully for them, by the side that failed to manage it.</p>
    <p class="margin-note">Pair this with JM-13. There, twelve honest men agreed on every fact and split on the conclusion. Here, six recruited witnesses cannot agree on a single sentence. Between them they cover most of what a student needs to know about testimony.</p>
    <div class="ref">Background: Mark 14:53–65 · Deuteronomy 19:15 · Acts 6:11–14.</div>`
}
];

const JM15_THEORIES = [
  {
    id:"honest",
    title:"1. The witnesses were honest and simply differed",
    claim:"Real memories of a real remark, remembered imperfectly. Courts see this every day.",
    answer:"j15recruit",
    verdict:"The recruitment record kills it. They did not come forward — the council <i>sought</i> witnesses, and sought them for a stated purpose: to obtain a death sentence. The account calls what they produced false witness, without hedging. Honest people do differ, but these were recruited to support a conclusion already reached, which is a different thing."
  },
  {
    id:"numbers",
    title:"2. The charge was proved by weight of numbers",
    claim:"Six witnesses all describing the same threat is powerful evidence, whatever the wording.",
    answer:"j15rule",
    verdict:"The law kills it. This court required <b>two agreeing witnesses</b>, examined separately, and it treated one witness alone as worth nothing however respectable. Numbers are explicitly not the test: twenty who differ are worth less than two who match. Six statements that no two of which agree do not make a weak case — they make no case at all."
  },
  {
    id:"proper",
    title:"3. The trial was properly conducted",
    claim:"An ordinary hearing, a little rushed because of the festival, but within the rules.",
    answer:"j15chamber",
    verdict:"The chamber note kills it. A capital case, heard at night, on the eve of a festival, with no defence called, and a verdict of guilt reached the same sitting rather than slept on and re-taken the next day. Any one of those might be argued; together they describe a proceeding run fast, in the dark and out of order — measured against the court's own known standards, not ours."
  },
  {
    id:"fromwitness",
    title:"4. The final charge came from the witnesses",
    claim:"The temple threat is what convicted him — the witnesses' evidence did its work in the end.",
    answer:"j15transcript",
    verdict:"The transcript kills it, in the high priest's own words: <i>what need we any further witnesses?</i> The witness evidence had already collapsed. What carried the room was a direct question put to the accused and his answer to it — no witness produced that charge, and the charge that eventually went to the governor was different again."
  },
  {
    id:"guilt",
    title:"5. He refused to defend himself because he was guilty",
    claim:"An innocent man answers the accusations. He said nothing.",
    answer:"j15silence",
    verdict:"The note on the silence kills it. He was not silent throughout — the moment a coherent question was put, he answered it at once and plainly. What he did not answer was six statements that contradicted one another, and under that court's own law the burden of producing agreeing evidence sat with the prosecution. Declining to untangle a muddle you are not required to answer is not a confession."
  }
];

const JM15_LOCKS = [
  {
    id:"l1", type:"number", code:"2030", len:4,
    wrong:"Not that. Each digit comes from a different document — one of the four is wrong.",
    name:"Field Chest B — the court papers",
    blurb:"A four-digit lock. Four questions about what the court needed and what it got. Two of the answers are zero, and between them they are the whole case.",
    questions:[
      "How many agreeing witnesses did the law require?",
      "How many of the statements agreed with another?",
      "How many days does the alleged saying mention?",
      "How many charges from the witnesses finally held?"
    ],
    hints:[
      "The questions are in order: question one gives the first digit. Every answer is a single digit.",
      "Question 1 is the two-witness rule. Questions 2 and 3 are the statement sheets. Question 4 is the council note."
    ],
    reward:"Field Chest B is open: the transcript of the question that ended it, the note on the silence, the Bureau's analysis of the failed frame-up, and the saying the witnesses were mangling. The 📑 Testimony grid in the top bar is live."
  },
  {
    id:"l2", type:"word", code:"AGREE", len:5,
    wrong:"Not that. Fill in the testimony grid — the 📑 button in the top bar. Then name the one thing the law required that no two rows manage.",
    name:"Sealed Pouch C — the missing word",
    blurb:"A five-letter keyword. Break the alleged sentence into its parts and mark which parts each witness actually said. Then look for two rows that are the same. When you cannot find any, you have the answer — it is the verb in the law.",
    questions:[
      "Open the 📑 Testimony grid from the top bar.",
      "Six witnesses down the side, five elements of the saying across the top.",
      "Tick a box only where that witness genuinely said that part.",
      "Now find two identical rows. The word for what they fail to do is the keyword."
    ],
    hints:[
      "Work witness by witness from the statement sheets. Witness VI said almost nothing; witness V said almost everything.",
      "Some rows overlap — several mention three days — but overlapping on one element is not matching."
    ],
    reward:"Sealed Pouch C is open: the charge that went to Rome, the same accusation used again a few years later, and the Bureau's analysis of agreement versus volume."
  }
];

const JM15_MATRIX = {
  button:"📑 Testimony grid",
  title:"The Testimony Grid",
  blurb:"The alleged sentence, broken into its parts. Six witnesses down the side; five elements across the top. Tick a box only where that witness's statement actually contains that element — then look for two rows that match each other.",
  corner:"The witness",
  verify:"Check the grid",
  mark:"✔",
  cols:[
    {id:"i",       label:"“I will destroy”",  note:"he does it himself"},
    {id:"temple",  label:"“This temple”",     note:"the building named"},
    {id:"three",   label:"“Three days”",      note:"the timing"},
    {id:"hands",   label:"“Made with hands”", note:"the added phrase"},
    {id:"build",   label:"“I will build another”", note:"a replacement"}
  ],
  rows:[
    {id:"w1", label:"Witness I",   note:"“he would destroy this temple”"},
    {id:"w2", label:"Witness II",  note:"“it would fall, and in three days be raised”"},
    {id:"w3", label:"Witness III", note:"“he would pull it down in three days”"},
    {id:"w4", label:"Witness IV",  note:"“made with hands would go, another built”"},
    {id:"w5", label:"Witness V",   note:"the fullest account"},
    {id:"w6", label:"Witness VI",  note:"“something about three days”"}
  ],
  truth:[
    "w1|i","w1|temple",
    "w2|temple","w2|three","w2|build",
    "w3|i","w3|three",
    "w4|temple","w4|hands","w4|build",
    "w5|i","w5|temple","w5|three","w5|hands","w5|build",
    "w6|three"
  ],
  foot:{
    label:"Witnesses who said this",
    note:"and none of them in the same combination",
    cells:{i:"three", temple:"four", three:"four", hands:"two", build:"three"}
  },
  note:"Be exact. Witness I never mentions three days; witness III never mentions the temple by name; witness VI could not say more than the timing. Sharing one element with somebody else is not the same as agreeing with them.",
  reveal:{
    lead:"Six rows, and no two of them the same. Four witnesses mention the temple, four mention three days, three have him destroying it himself — and yet not one pair of statements matches across the whole line. That is the finding, and by the court's own law it is fatal: it needed two witnesses whose accounts stood together, and after a night of searching it had none. The one word for what every one of these statements fails to do is the word the law itself uses.",
    answer:"AGREE",
    caption:"“Their witness agreed not together.” Notice what follows from it: a council with authority, motive and the whole night could not get two men to tell one lie the same way. Manufactured agreement is much harder than it looks — which is worth remembering the next time several independent accounts of something do line up."
  }
};

const JM15_VERDICTS = [
  {id:"honest",     text:"Honest witnesses to a real remark, differing as honest witnesses do."},
  {id:"numbers",    text:"Six witnesses saying much the same thing proved the charge well enough."},
  {id:"proper",     text:"A properly conducted hearing, only hurried a little by the festival."},
  {id:"fromwitness",text:"The witnesses' evidence is what finally convicted him."},
  {id:"guilt",      text:"He had no defence to offer, which is why he stayed silent."},
  {id:"failed",     text:"A prosecution that had already decided the outcome went looking for evidence, could not get two statements to match, abandoned the witnesses entirely, and convicted on an answer it obtained by questioning the accused directly."}
];

const CASE_JM15 = {
  id:"jm15", code:"CASE JM-15", title:"The Witnesses Who Would Not Agree",
  period:"Jerusalem · c. AD 30", colour:"#5c3a3a", poster:"poster_jm15",
  teaser:"A court needs two witnesses whose accounts agree. It has plenty of witnesses, a whole night, and every advantage — and it cannot get two of them to say the same thing.",
  introSub:"Six statements about one sentence, and no two alike.",
  items:JM15_ITEMS, theories:JM15_THEORIES, locks:JM15_LOCKS, verdicts:JM15_VERDICTS,
  matrix:JM15_MATRIX,
  correct:"failed",
  boardTitle:"A Night Sitting",
  boardIntro:"Five explanations have been offered for what happened in that chamber. For each one, pin the <b>single</b> document that makes it impossible. When all five are closed, the accusation form opens.",
  accusationIntro:"The witnesses were sought, the law was not satisfied, the sitting was irregular, the final charge came from somewhere else, and the silence was not a confession. State what the file will actually support about how this case was built.",
  debrief:{
    lead:"A council that had already decided the outcome sent for witnesses. Several came, all describing the same remark about the temple, and no two of their statements matched — which under that court's own strict law meant there was no case. So the witnesses were abandoned, the accused was questioned directly, and the charge that carried the room came from his own answer. A different charge again was the one sent to the governor. The record that preserves all this was written by people from inside that world, names council members who dissented, and calls the proceeding what it was.",
    questions:[
      "Why does a law demand two <i>agreeing</i> witnesses rather than simply several witnesses? What is it protecting against?",
      "They had motive, authority and all night, and still could not produce two matching statements. Why is coordinating a lie harder than it sounds?",
      "The charge changed between courts — temple, then blasphemy, then kingship. What does a changing charge usually tell you about a case?",
      "Is staying silent ever the right response to an accusation? When is it, and when does it look like something else?",
      "The account is preserved by people who were not on the council's side. Does that make it more or less believable to you — and why?"
    ],
    refs:"Mark 14:53–65 · Matthew 26:57–68 · Luke 22:66–71 · John 2:19–21 · Deuteronomy 19:15–19 · Acts 6:11–14"
  },
  teacher:{
    answers:"Lock 1 code <b>2030</b> (2 agreeing witnesses required · 0 statements agreed · 3 days in the alleged saying · 0 witness charges held). Lock 2 keyword <b>AGREE</b>, from the 📑 Testimony grid: sixteen ticks scattered so that no two rows are identical. The word is the law's own verb.",
    pairs:"Honest but differing → How the Witnesses Were Found; weight of numbers → The Two-Witness Rule; properly conducted → The Chamber, and the Hour; the charge came from the witnesses → The Question That Ended It; silence means guilt → The Silence, and What a Defence Would Have Cost the Court.",
    conclusion:"The outcome was fixed before the evidence was sought; the evidence failed the court's own test; and the conviction rested on an answer obtained by questioning the accused, not on any witness.",
    prompts:"\"Lay the six statements out in a line. Now find two that match.\" · \"Why does the law want them examined separately?\" · \"Who went looking for these witnesses, and what were they looking for?\" · \"Which charge actually killed him?\"",
    extra:"Handle the framing carefully and keep it on procedure: this is a file about a handful of named men at two in the morning, not about a people, and the briefing says so — the account itself is written by insiders and records dissenting council members by name. The best activity in the archive sits here: send two students out to invent a matching account of a staged incident, then question them separately in front of the class. They almost never survive four questions, which makes the 'failed frame-up' analysis land on its own. Pair with JM-13 as a two-case unit on testimony: honest men agreeing on facts and splitting on conclusions, against recruited witnesses who cannot agree on anything."
  }
};

registerCase(CASE_JM15);
