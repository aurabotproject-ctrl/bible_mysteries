"use strict";
/* ============================================================
   CASE JM-20 — THE ROCK AT MERIBAH
   Kadesh.  Source: Numbers 20, with Exodus 17.
   ============================================================ */

SVG.j20rock = `<svg viewBox="0 0 1536 1024" xmlns="http://www.w3.org/2000/svg"><image href="__IMG_j20rock__" x="0" y="0" width="1536" height="1024"/><text x="237" y="94" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="24" font-weight="600" fill="#4a3520" textLength="132" lengthAdjust="spacingAndGlyphs">THE ROCK</text><text x="237" y="115" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="10" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".92" textLength="232" lengthAdjust="spacingAndGlyphs">struck twice, before the assembly</text><text x="1272" y="527" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="22" font-weight="600" fill="#4a3520" textLength="158" lengthAdjust="spacingAndGlyphs">THE STREAM</text><text x="1272" y="548" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="10" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".92" textLength="206" lengthAdjust="spacingAndGlyphs">it ran away across the basin</text><text x="377" y="881" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="19" font-weight="600" fill="#4a3520" textLength="214" lengthAdjust="spacingAndGlyphs">THE WATERCOURSE</text><text x="377" y="902" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="11" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".92" textLength="178" lengthAdjust="spacingAndGlyphs">cut, and running deep</text></svg>`;
SVG.j20map = `<svg viewBox="0 0 1536 1024" xmlns="http://www.w3.org/2000/svg"><image href="__IMG_j20map__" x="0" y="0" width="1536" height="1024"/><text x="501" y="76" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="24" font-weight="600" fill="#4a3520" textLength="116" lengthAdjust="spacingAndGlyphs">HOREB</text><text x="501" y="97" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="11" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".92" textLength="140" lengthAdjust="spacingAndGlyphs">the first rock</text><text x="1369" y="524" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="24" font-weight="600" fill="#4a3520" textLength="134" lengthAdjust="spacingAndGlyphs">KADESH</text><text x="1369" y="545" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="10" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".92" textLength="232" lengthAdjust="spacingAndGlyphs">the second rock, and the sentence</text><text x="757" y="602" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="16" font-weight="600" fill="#4a3520" textLength="214" lengthAdjust="spacingAndGlyphs">THIRTY-EIGHT YEARS</text><text x="757" y="623" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="11" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".92" textLength="178" lengthAdjust="spacingAndGlyphs">between the two orders</text></svg>`;
SVG.j20orders = `<svg viewBox="0 0 1536 1024" xmlns="http://www.w3.org/2000/svg"><image href="__IMG_j20orders__" x="0" y="0" width="1536" height="1024"/><text x="435" y="300" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="33" font-weight="600" fill="#4a3520" textLength="430" lengthAdjust="spacingAndGlyphs">THE ORDER AT HOREB</text><text x="435" y="338" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="17" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".9" textLength="330" lengthAdjust="spacingAndGlyphs">Exodus 17 &#183; the first rock</text><text x="1091" y="300" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="32" font-weight="600" fill="#4a3520" textLength="430" lengthAdjust="spacingAndGlyphs">THE ORDER AT KADESH</text><text x="1091" y="338" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="17" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".9" textLength="350" lengthAdjust="spacingAndGlyphs">Numbers 20 &#183; the second rock</text><text x="435" y="790" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="18" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".85" textLength="310" lengthAdjust="spacingAndGlyphs">as it was given, and carried out</text><text x="1091" y="790" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="17" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".85" textLength="330" lengthAdjust="spacingAndGlyphs">as given &#8212; compare what was done</text></svg>`;

const JM20_ITEMS = [

/* ---------------- STAGE 0 ---------------- */
{
  id:"j20letter", stage:0, notEvidence:true, kind:"Briefing", title:"Letter from the Case Supervisor",
  sub:"The Chronicle Society · Department of Unsolved Antiquities",
  prev:"The water came. He was barred from the country anyway. The file is asked why.",
  x:22, y:26, rot:-3, w:216,
  body:`
    <p><b>To the investigating team,</b></p>
    <p>A nation is out of water at Kadesh. There is a rock. There is an order. Water comes out of the rock, plentifully, in front of everybody, and the herds drink.</p>
    <p>And the man who produced it is told, that same day, that <b>he will not bring the assembly into the land</b> — after forty years of walking toward it.</p>
    <p>This case has been sent to the Society repeatedly by people who think the sentence is out of proportion. That is a fair reaction and the Society does not want you to suppress it. But before you argue about whether it was fair, <b>find out precisely what happened</b>, because most people arguing about this case have never compared the two orders.</p>
    <h4>Your task</h4>
    <p>Five explanations are on the board. Close all five. This is a <b>document forensics</b> case: the answer is a difference between two pieces of text, and it is one word long.</p>
    <h4>How the file works</h4>
    <ul>
      <li>Everything on the desk now is yours.</li>
      <li>Two parts of the file are <b>locked</b>. Both codes are in documents you have or will have.</li>
      <li>The second lock opens with the <b>document comparison</b> — the 📜 button in the top bar, once the first lock is open.</li>
      <li>When all five explanations are closed, go to the <b>Pinboard</b>.</li>
    </ul>
    <p class="margin-note">Read the two orders slowly, side by side, with a finger on each line. That is the whole method here.</p>
    <div class="sig">A. Thorne</div>
    <div class="small" style="color:#5b4a35">Case Supervisor</div>
    <div class="ref">This case is reconstructed from Numbers 20:1–13, with Exodus 17:1–7.</div>`
},
{
  id:"j20orders", stage:0, kind:"Orders", title:"The Two Orders",
  sub:"Horeb and Kadesh, set side by side", thumb:"j20orders",
  prev:"Almost the same order, thirty-eight years apart. One verb is different.",
  x:52, y:22, rot:3, w:218,
  body:`
    <div class="plate">${SVG.j20orders}<div class="cap">Click the plate to enlarge it. The two orders as filed.</div></div>
    <table class="ledger">
      <tr><th></th><th>At Horeb (Exodus 17)</th><th>At Kadesh (Numbers 20)</th></tr>
      <tr><td>Take the rod</td><td><b>yes</b> — "thy rod, wherewith thou smotest the river"</td><td><b>yes</b> — "take the rod"</td></tr>
      <tr><td>Who to bring</td><td>The elders of Israel</td><td><b>Gather the assembly</b>, thou and Aaron</td></tr>
      <tr><td>The instruction about the rock</td><td><b>"Thou shalt smite the rock"</b></td><td><b>"Speak ye unto the rock before their eyes"</b></td></tr>
      <tr><td>Promised result</td><td>Water will come out</td><td>"It shall give forth his water"</td></tr>
      <tr><td>Times the order was given</td><td class="n"><b>1</b> — strike</td><td class="n"><b>1</b> — speak</td></tr>
    </table>
    <h4>The comparison to hold on to</h4>
    <p>Everything else matches. The rod, the assembly, the rock, the promise of water. <b>One verb changes: smite becomes speak.</b> That is the entire difference between the two documents, and this case has nothing else in it.</p>
    <h4>Why "he acted without orders" fails</h4>
    <p>He had an order. It is on the file, it is specific, and it names the rod, the audience and the action. <b>The problem is not the absence of an instruction; it is the presence of one.</b></p>
    <p class="margin-note">Two numbers for the first lock: how many times he was told to speak to the rock, and — over on the map — how many times he had ever been told to strike one.</p>
    <div class="ref">Background: Exodus 17:5–6 · Numbers 20:7–8.</div>`
},
{
  id:"j20account", stage:0, kind:"Account", title:"What Was Said and Done",
  sub:"At the rock, before the assembly",
  prev:"“Must we fetch you water out of this rock?” Then he struck it — twice.",
  x:78, y:26, rot:-4, w:210,
  body:`
    <div class="doc-body">
      <p>They gathered the congregation together before the rock, and he said to them:</p>
      <p>"Hear now, you rebels; <b>must we fetch you water out of this rock?</b>"</p>
      <p>And he lifted up his hand, and <b>with his rod he smote the rock twice</b>: and the water came out abundantly, and the congregation drank, and their beasts.</p>
    </div>
    <table class="ledger">
      <tr><th>Ordered</th><th>Done</th></tr>
      <tr><td>Take the rod</td><td>Took the rod</td></tr>
      <tr><td>Gather the assembly</td><td>Gathered the assembly</td></tr>
      <tr><td><b>Speak to the rock</b></td><td><b>Spoke to the people</b> — and called them rebels</td></tr>
      <tr><td>(nothing about striking)</td><td><b>Struck the rock — twice</b></td></tr>
      <tr><td>"It shall give forth his water"</td><td>Water came out abundantly</td></tr>
    </table>
    <h4>The pronoun</h4>
    <p>"<b>Must <i>we</i> fetch you water</b>" is the other half of the problem, and it is easy to read past. The order was to speak to the rock so that the assembly would see where the water came from. What the assembly heard instead was two men taking the credit and losing their temper.</p>
    <p class="margin-note">Count the strikes. That number is the second digit of the first lock, and the fact that it is <i>two</i> rather than one matters — this was not a slip.</p>
    <div class="ref">Background: Numbers 20:9–11.</div>`
},
{
  id:"j20rock", stage:0, kind:"Supply record", title:"The Rock and the Watercourse",
  sub:"How much water actually came", thumb:"j20rock",
  prev:"It came abundantly. The whole assembly drank, and so did the herds.",
  x:26, y:56, rot:5, w:216,
  body:`
    <div class="plate">${SVG.j20rock}<div class="cap">Click the section to enlarge it.</div></div>
    <table class="ledger">
      <tr><th>Measured</th><th>Finding</th></tr>
      <tr><td>Water produced</td><td><b>Abundantly</b> — the record's own word</td></tr>
      <tr><td>Who drank</td><td>The whole congregation, <b>and their livestock</b></td></tr>
      <tr><td>Watercourse below the rock</td><td>Cut, and running deep enough to carry a herd's worth</td></tr>
      <tr><td>Any shortfall recorded</td><td class="n"><b>none</b></td></tr>
      <tr><td>Any complaint about the water afterwards</td><td class="n"><b>none</b></td></tr>
      <tr><td>The place was named</td><td>Meribah — "strife" — after the argument, not after any failure</td></tr>
    </table>
    <h4>Why "the water failed to come" fails</h4>
    <p>It is the neatest explanation available — a man punished for a promise that did not deliver — and the record simply does not support it. <b>The water came, in quantity, immediately, and nobody in the file ever suggests otherwise.</b> Whatever went wrong went wrong on the human side of the transaction.</p>
    <p class="margin-note">Worth sitting with: the thing worked, and the man was still barred. That is what makes people call the case unfair, and it is the right place for the argument to start.</p>
    <div class="ref">Background: Numbers 20:11–13.</div>`
},
{
  id:"j20map", stage:0, kind:"Plan", title:"Horeb and Kadesh",
  sub:"Two rocks, thirty-eight years apart", thumb:"j20map",
  prev:"The first rock was at the start of the journey. The second is at the end of it.",
  x:56, y:52, rot:-2, w:216,
  body:`
    <div class="plate">${SVG.j20map}<div class="cap">Click the plan to enlarge it.</div></div>
    <table class="ledger">
      <tr><th></th><th>Horeb</th><th>Kadesh</th></tr>
      <tr><td>When</td><td>Weeks out of Egypt</td><td><b>Thirty-eight years later</b></td></tr>
      <tr><td>Who is there</td><td>The generation that left Egypt</td><td>Mostly their children; the older generation has died in the wilderness</td></tr>
      <tr><td>The complaint</td><td>No water</td><td>No water</td></tr>
      <tr><td>Order given</td><td><b>Smite the rock</b></td><td><b>Speak to the rock</b></td></tr>
      <tr><td><b>Times he had ever been told to strike a rock</b></td><td colspan="2" class="n"><b>1</b> — at Horeb, and only there</td></tr>
      <tr><td>Place name given afterwards</td><td>Massah and Meribah</td><td>Meribah</td></tr>
    </table>
    <h4>Why the gap matters</h4>
    <p>Thirty-eight years is long enough for a method to become a habit. The situation at Kadesh looks identical — same complaint, same rock, same man, same rod — and the instruction is <b>not</b> identical. <b>The most human mistake in the archive is doing the thing that worked last time without reading the new order.</b></p>
    <p class="margin-note">The number in the bold row is the third digit of the first lock.</p>
    <div class="ref">Background: Exodus 17:1–7 · Numbers 20:1 · Deuteronomy 2:14.</div>`
},
{
  id:"j20sentence", stage:0, kind:"Sentence", title:"The Sentence, As Worded",
  sub:"Exactly what it says, and who it names",
  prev:"“Because ye believed me not, to sanctify me in the eyes of the children of Israel.”",
  x:80, y:56, rot:4, w:210,
  body:`
    <div class="doc-body">
      <p>"<b>Because ye believed me not, to sanctify me in the eyes of the children of Israel</b>, therefore ye shall not bring this congregation into the land which I have given them."</p>
    </div>
    <table class="ledger">
      <tr><th>Element of the sentence</th><th>What it says</th></tr>
      <tr><td>Who it is addressed to</td><td><b>2</b> — Moses and Aaron. Nobody else</td></tr>
      <tr><td>Stated grounds</td><td>Not believing; not sanctifying God <b>in the eyes of the people</b></td></tr>
      <tr><td>Anger mentioned?</td><td class="n"><b>no</b></td></tr>
      <tr><td>The water mentioned as a failure?</td><td class="n"><b>no</b></td></tr>
      <tr><td>The people's rebellion mentioned?</td><td class="n"><b>no</b> — they are not sentenced here at all</td></tr>
      <tr><td>What is missing from the account</td><td>The one thing he was told to do <b>before their eyes</b></td></tr>
    </table>
    <h4>Why two of the explanations die on this page</h4>
    <p><b>"He was punished for the people's rebellion"</b> — the sentence names two men and gives grounds personal to them. The congregation is not sentenced; the generation being barred from the land had already been sentenced thirty-eight years earlier, in a different file.</p>
    <p><b>"It was the anger, not the act"</b> — the anger is real and it is in the account, but the sentence does not mention it. It names a <i>failure to do something in front of the people</i>, and the thing that was not done in front of the people is in the orders.</p>
    <p class="margin-note">"In the eyes of the children of Israel" is the phrase to underline. This is about what the assembly saw, and what they were shown instead.</p>
    <div class="ref">Background: Numbers 20:12 · compare Numbers 14:26–35.</div>`
},

/* ---------------- STAGE 1 — released by the numbers lock ---------------- */
{
  id:"j20horeb", stage:1, kind:"Earlier order", title:"The Order at Horeb, In Full",
  sub:"Field Chest B · thirty-eight years earlier",
  prev:"“Thou shalt smite the rock.” He did, and it was right.",
  x:28, y:26, rot:-3, w:212,
  body:`
    <div class="doc-body">
      <p>"Go on before the people, and take with thee of the elders of Israel; and <b>thy rod, wherewith thou smotest the river, take in thine hand, and go.</b></p>
      <p>Behold, I will stand before thee there upon the rock in Horeb; and <b>thou shalt smite the rock</b>, and there shall come water out of it, that the people may drink."</p>
      <p>And Moses did so in the sight of the elders of Israel.</p>
    </div>
    <h4>What this document establishes</h4>
    <ul>
      <li>Striking a rock <b>was once the correct action</b>, given as an explicit instruction, and carrying it out was obedience.</li>
      <li>He is not being punished at Kadesh for doing something inherently wrong. He is being held to <b>the order he was actually given that day.</b></li>
      <li>The rod is the same rod. The situation rhymes. The instruction does not.</li>
    </ul>
    <h4>Why "it was the same as the first time" fails</h4>
    <p>Lay the two side by side and the difference is a single verb — <b>smite</b> at Horeb, <b>speak</b> at Kadesh. Everything a casual reader remembers about the two events is identical, which is exactly why the case is worth a lesson: <b>the resemblance is the trap.</b></p>
    <p class="margin-note">This is the page students should be made to read twice, slowly, with the Kadesh order beside it.</p>
    <div class="ref">Background: Exodus 17:5–6.</div>`
},
{
  id:"j20people", stage:1, kind:"Record", title:"The People's Complaint",
  sub:"Field Chest B · what the congregation did, and what happened to them",
  prev:"They complained, hard. And no sentence is passed on them anywhere in this file.",
  x:58, y:24, rot:4, w:210,
  body:`
    <p>The third explanation is that the leader carried the punishment for the crowd's behaviour. The record of the crowd's behaviour is here, and so is the record of what followed for them — which is nothing.</p>
    <table class="ledger">
      <tr><th>Step</th><th>Recorded</th></tr>
      <tr><td>1</td><td>No water at Kadesh. The congregation gathers against Moses and Aaron</td></tr>
      <tr><td>2</td><td>"Why have you brought the assembly into this wilderness, that we and our cattle should die here?"</td></tr>
      <tr><td>3</td><td>Moses and Aaron go to the door of the tabernacle and fall on their faces</td></tr>
      <tr><td>4</td><td>The order is given: take the rod, gather them, <b>speak to the rock</b></td></tr>
      <tr><td>5</td><td>The rock is struck. The water comes. Everyone drinks</td></tr>
      <tr><td>6</td><td>The sentence is passed — <b>on Moses and Aaron only</b></td></tr>
      <tr><td><b>Sentence passed on the congregation</b></td><td class="n"><b>none</b></td></tr>
    </table>
    <h4>Why the substitution reading fails</h4>
    <p>Nothing happens to the people at Kadesh. No plague, no rebuke, no sentence — they are given water and the file moves on. And the older generation's exclusion from the land was already settled thirty-eight years before, at the twelve reports. <b>There is no punishment here for anyone to be carrying on somebody else's behalf.</b></p>
    <p class="margin-note">Compare JM-13, where that earlier sentence was passed. The two files are thirty-eight years and one chapter apart.</p>
    <div class="ref">Background: Numbers 20:2–13 · compare Numbers 14:26–35.</div>`
},
{
  id:"j20anger", stage:1, kind:"Society analysis", title:"The Anger Question",
  sub:"Field Chest B · was it the temper or the act?",
  prev:"The anger is real, and it is not what the sentence names.",
  x:80, y:44, rot:-6, w:208,
  body:`
    <p>The Society takes this explanation seriously, because a later record does mention the anger and students will find it.</p>
    <table class="ledger">
      <tr><th>Source</th><th>What it says</th></tr>
      <tr><td>The sentence itself</td><td>"Because ye <b>believed me not, to sanctify me</b> in the eyes of the children of Israel"</td></tr>
      <tr><td>A later psalm</td><td>"They provoked his spirit, so that <b>he spake unadvisedly with his lips</b>"</td></tr>
      <tr><td>A later summary</td><td>"Ye rebelled against my commandment"</td></tr>
    </table>
    <h4>How to weigh these together</h4>
    <ul>
      <li>The anger is in the file. Nobody is pretending "hear now, you rebels" was calm.</li>
      <li>But the sentence <b>gives its own grounds</b>, and they are about what the people were shown — "in the eyes of the children of Israel" — not about a mood.</li>
      <li>The later summary uses the word <b>commandment</b>, which points at an instruction, not at a temper.</li>
      <li>And the psalm describes the anger as the <i>route</i> to the mistake: provoked, therefore spoke rashly, therefore did the old thing instead of the new one.</li>
    </ul>
    <h4>The Society's reading, stated as a reading</h4>
    <p>The anger explains <b>how</b> it happened. The sentence names <b>what</b> happened: an order given in front of the whole nation, and a different action performed in front of the whole nation. Both are in the file; only one is in the verdict.</p>
    <p class="margin-note">This is a good place to let a class disagree with the Society. The evidence is all on the page and the reading is arguable.</p>
    <div class="ref">Background: Numbers 20:12 · 27:14 · Psalm 106:32–33.</div>`
},
{
  id:"j20aaron", stage:1, kind:"Record", title:"The Other Man Named",
  sub:"Field Chest B · Aaron, and what followed",
  prev:"Two leaders were barred, and the second one died before the year was out.",
  x:46, y:62, rot:3, w:206,
  body:`
    <table class="ledger">
      <tr><th>Element</th><th>Record</th></tr>
      <tr><td>Named in the sentence</td><td><b>2</b> — Moses and Aaron</td></tr>
      <tr><td>Aaron's part</td><td>Present, gathered the assembly, named in the order and in the verdict</td></tr>
      <tr><td>Aaron's death</td><td>At Mount Hor, the same year, before the land was reached</td></tr>
      <tr><td>Moses' death</td><td>On Nebo, in sight of the land, forty years' walk from Egypt</td></tr>
      <tr><td>Was either man dismissed?</td><td class="n"><b>no</b> — both continued in office to the end</td></tr>
      <tr><td>Was the promise to the nation affected?</td><td class="n"><b>no</b> — the congregation entered</td></tr>
    </table>
    <h4>Two things this fixes</h4>
    <ul>
      <li><b>The number two</b> — the last digit of the first lock. It was not a sentence on one man.</li>
      <li><b>The scope.</b> Neither man lost his position, his standing or the nation's future. What they lost was <b>the arrival</b> — which for a leader forty years into a journey is a heavy thing, and is meant to read that way.</li>
    </ul>
    <div class="ref">Background: Numbers 20:12, 22–29 · Deuteronomy 34:1–5.</div>`
},

/* ---------------- STAGE 2 — released by the keyword lock ---------------- */
{
  id:"j20appeal", stage:2, kind:"Follow-up", title:"The Appeal",
  sub:"Sealed Pouch C · he asked to be let in, and was refused",
  prev:"“Let me go over and see the good land.” The answer was: look, but do not cross.",
  x:26, y:28, rot:-3, w:210,
  body:`
    <div class="doc-body">
      <p>"I besought the LORD at that time, saying… <b>let me go over, and see the good land that is beyond Jordan</b>, that goodly mountain, and Lebanon.</p>
      <p>But the LORD was wroth with me for your sakes, and would not hear me: and the LORD said unto me, <b>Let it suffice thee; speak no more unto me of this matter.</b></p>
      <p>Get thee up into the top of Pisgah, and lift up thine eyes… and behold it with thine eyes: for thou shalt not go over this Jordan."</p>
    </div>
    <h4>What the appeal page adds</h4>
    <ul>
      <li>He <b>did</b> think it was worth appealing, which tells you he felt the weight of it too.</li>
      <li>The refusal is firm and the reason is not re-argued.</li>
      <li>He is nevertheless taken up the mountain and <b>shown the whole country</b>, by name, region by region.</li>
      <li>He keeps his office to the last day, hands over to a successor he appoints himself, and the record calls him unequalled.</li>
    </ul>
    <p class="margin-note">Students often find this page harder than the sentence. It is honest about what it cost and does not soften it.</p>
    <div class="ref">Background: Deuteronomy 3:23–28 · 34:1–12.</div>`
},
{
  id:"j20eyes", stage:2, kind:"Society analysis", title:"In the Eyes of the People",
  sub:"Sealed Pouch C · why the audience is in the verdict",
  prev:"The order was public, so the failure was public. That is the whole logic of the sentence.",
  x:56, y:30, rot:4, w:210,
  body:`
    <p>Every element of both orders is about <b>what the assembly would see</b>, and once you notice that, the sentence stops looking arbitrary — whether or not you end up thinking it fair.</p>
    <table class="ledger">
      <tr><th>Element of the order</th><th>Who it was for</th></tr>
      <tr><td>"Gather the assembly"</td><td>The people — this was to be watched</td></tr>
      <tr><td>"Speak to the rock <b>before their eyes</b>"</td><td>The people</td></tr>
      <tr><td>"It shall give forth his water"</td><td>The people, and their herds</td></tr>
      <tr><td>The stated grounds of the sentence</td><td><b>"to sanctify me in the eyes of the children of Israel"</b></td></tr>
    </table>
    <h4>What the assembly actually saw</h4>
    <p>They saw two leaders call them rebels, ask "<b>must we</b> fetch you water", and hit a rock twice with a stick. Water came out. <b>The lesson the demonstration was designed to teach was not the lesson the demonstration taught</b> — and the audience was the entire nation, at the exact moment they were about to be handed over to a new leader for the crossing.</p>
    <p class="margin-note">This is the point where students usually stop calling the sentence arbitrary, even the ones who still call it harsh. Both reactions are worth having.</p>
    <div class="ref">Background: Numbers 20:8, 12 · Deuteronomy 34:9.</div>`
},
{
  id:"j20lesson", stage:2, kind:"Society analysis", title:"Read the New Order",
  sub:"Sealed Pouch C",
  prev:"The situation repeated. The instruction did not. Almost nobody checks.",
  x:80, y:34, rot:-4, w:212,
  body:`
    <p>The Society files this as its principal <b>document forensics</b> case, and the method transfers to anything with instructions in it.</p>
    <h4>The method</h4>
    <ol>
      <li><b>Get both documents in front of you.</b> Most of the argument about this case is conducted by people working from memory of one of them.</li>
      <li><b>Line them up element by element</b> — not paragraph by paragraph. Rod, audience, action, promise.</li>
      <li><b>Mark what matches.</b> Almost everything will.</li>
      <li><b>Then look for the single line that does not</b>, and ask what turns on it.</li>
    </ol>
    <h4>Why this failure is so easy</h4>
    <p>Because the two situations are nearly identical, and <b>the old method worked</b>. Thirty-eight years earlier, striking that rock was obedience. The trap is not laziness or malice; it is the reasonable assumption that a familiar problem takes the familiar answer.</p>
    <h4>The habit</h4>
    <p>When something looks exactly like a thing you have done before, that is the moment to <b>re-read the instruction</b> — not the moment to skip it. Recognising the situation is what makes people stop reading.</p>
    <p class="margin-note">Good extension: give students two nearly identical sets of instructions with one word changed and see how many notice. Most will not, which is the point, and it makes the case land without anybody feeling lectured.</p>
    <div class="ref">Background: Numbers 20:1–13 · Exodus 17:1–7 · Psalm 106:32–33.</div>`
}
];

const JM20_THEORIES = [
  {
    id:"failed",
    title:"1. The water failed to come",
    claim:"He promised water, nothing happened, and he was held responsible for a promise that did not deliver.",
    answer:"j20rock",
    verdict:"The supply record kills it. The water came <i>abundantly</i> — the record's own word — the whole congregation drank and so did their livestock, and no shortfall or later complaint about the water appears anywhere in the file. The place was named for the argument, not for a failure. Whatever went wrong went wrong on the human side."
  },
  {
    id:"noorders",
    title:"2. He acted without orders",
    claim:"He improvised in a crisis, with no instruction to work from, and was blamed for it afterwards.",
    answer:"j20orders",
    verdict:"The two orders kill it. He had a specific instruction that day — take the rod, gather the assembly, speak to the rock before their eyes — and the record gives it in full before anything happens. The difficulty in this file is not the absence of an order but the presence of one, and what was done instead."
  },
  {
    id:"scapegoat",
    title:"3. He was punished for the people's rebellion",
    claim:"The congregation had behaved badly and the leader carried it for them.",
    answer:"j20people",
    verdict:"The record of the complaint kills it. Nothing happens to the congregation at Kadesh at all — no plague, no rebuke, no sentence; they are given water and the account moves on. The sentence names two men and gives grounds personal to them, and the older generation's exclusion had already been settled thirty-eight years earlier in a different file."
  },
  {
    id:"same",
    title:"4. It was the same as the first time at Horeb",
    claim:"He did exactly what he had been told to do before and was punished for consistency.",
    answer:"j20horeb",
    verdict:"The Horeb order kills it. At Horeb the instruction was <b>smite the rock</b>, and striking it was obedience. At Kadesh the instruction was <b>speak to the rock</b>. Every other element matches — the rod, the assembly, the rock, the promise of water — which is precisely the trap: the resemblance is what stops people reading the new order."
  },
  {
    id:"anger",
    title:"5. It was the anger, not the act",
    claim:"He lost his temper and called the people rebels; the sentence was for the outburst.",
    answer:"j20sentence",
    verdict:"The wording of the sentence kills it. The anger is real and the file does not hide it, but the verdict never mentions it: it names a failure \"to sanctify me <b>in the eyes of the children of Israel</b>\" — something not done in front of the watching nation. A later summary calls it rebelling against a <i>commandment</i>. The temper explains how it happened; the order explains what happened."
  }
];

const JM20_LOCKS = [
  {
    id:"l1", type:"number", code:"1212", len:4,
    wrong:"Not that. Each digit comes from a different document — one of the four is wrong.",
    name:"Field Chest B — the comparison papers",
    blurb:"A four-digit lock. Four counts: what he was told to do, what he did, what he had been told before, and how many people the sentence names.",
    questions:[
      "How many times was he told to speak to the rock?",
      "How many times did he strike it?",
      "How many times had he been told to strike a rock before?",
      "How many leaders were barred from the land?"
    ],
    hints:[
      "The questions are in order: question one gives the first digit. Every answer is a single digit.",
      "Question 1 is the two orders. Question 2 is the account. Question 3 is the Horeb/Kadesh plan. Question 4 is the sentence.",
      "Told once to speak. Struck it twice. Told once, thirty-eight years earlier, to strike a rock. And two men were named."
    ],
    reward:"Field Chest B is open: the Horeb order in full, the record of the people's complaint, the Society's note on the anger question, and the record of the other man named. The 📜 Document comparison in the top bar is live."
  },
  {
    id:"l2", type:"word", code:"SPEAK", len:5,
    wrong:"Not that. Run the document comparison — the 📜 button in the top bar — and find the one line that is in the order and not in what was done.",
    name:"Sealed Pouch C — the word that was not obeyed",
    blurb:"A five-letter keyword. Lay the Horeb order, the Kadesh order and the account of what was done side by side and mark every element that appears in each. Nearly everything matches. One row does not — and the missing word is the answer.",
    questions:[
      "Open the 📜 Document comparison from the top bar.",
      "Five elements down the side, three documents across the top.",
      "Tick a box wherever that element genuinely appears in that document.",
      "Find the row with a gap in the last column. That verb is the keyword."
    ],
    hints:[
      "Be exact about the rod and the assembly — those appear everywhere, and that is why the difference is so easy to miss.",
      "Two rows are uneven. One has ticks at Horeb and in what was done, but not in the Kadesh order. The other is the mirror image.",
      "He was told to do it, before their eyes, and he did not. Five letters."
    ],
    reward:"Sealed Pouch C is open: the appeal and its refusal, the Society's note on why the audience is in the verdict, and the analysis of how to read a new order."
  }
];

const JM20_MATRIX = {
  button:"📜 Document comparison",
  title:"The Document Comparison",
  blurb:"Five elements down the side; three documents across the top — the order at Horeb, the order at Kadesh, and the account of what was actually done. Tick a box wherever that element really appears in that document, then look for the rows that do not line up.",
  corner:"The element",
  verify:"Check the comparison",
  mark:"✔",
  cols:[
    {id:"horeb", label:"The order at Horeb",  note:"Exodus 17, thirty-eight years earlier"},
    {id:"kadesh",label:"The order at Kadesh", note:"Numbers 20, that morning"},
    {id:"done",  label:"What was done",       note:"before the assembly"}
  ],
  rows:[
    {id:"rod",    label:"Take the rod",           note:"the same rod, both times"},
    {id:"gather", label:"Gather the assembly",    note:"an audience, on purpose"},
    {id:"strike", label:"Strike the rock",        note:"with the rod"},
    {id:"speak",  label:"Speak to the rock",      note:"before their eyes"},
    {id:"water",  label:"Water comes out",        note:"for the people and the herds"}
  ],
  truth:[
    "rod|horeb","rod|kadesh","rod|done",
    "gather|kadesh","gather|done",
    "strike|horeb","strike|done",
    "speak|kadesh",
    "water|horeb","water|kadesh","water|done"
  ],
  foot:{
    label:"The line that differs",
    note:"one verb, and the whole case",
    cells:{horeb:"smite", kadesh:"speak", done:"smote &#8212; twice"}
  },
  note:"Take it slowly and do not tick from memory — that is the mistake the case is about. The rod row and the water row are full, and they are what makes the two events feel identical. The interesting rows are the two in the middle.",
  reveal:{
    lead:"Eleven ticks, and almost all of them line up. The rod is in all three. The water is in all three. Gathering the assembly is in the Kadesh order and in what was done. Then there are the two rows that do not match: <b>strike</b> is ticked at Horeb and in what was done, but not in the order he was actually given — and <b>speak</b> is ticked in the Kadesh order and nowhere else. He carried out the instruction from thirty-eight years earlier, twice, in front of the whole nation, and left out the one thing he had been told to do that morning.",
    answer:"SPEAK",
    caption:"\"Speak ye unto the rock before their eyes.\" The situation repeated, the old method had worked, and the new order went unread. The sentence names exactly that gap — something not done in the sight of the people who had been gathered to watch it."
  }
};

const JM20_VERDICTS = [
  {id:"failed",    text:"The water did not come, and he was held responsible for the failure."},
  {id:"noorders",  text:"He improvised without instructions and was blamed afterwards."},
  {id:"scapegoat", text:"He carried the punishment for the congregation's rebellion."},
  {id:"same",      text:"He did exactly what he had been told to do at Horeb, and was punished for consistency."},
  {id:"anger",     text:"The sentence was for calling the people rebels and losing his temper."},
  {id:"verb",      text:"He was told to speak to the rock in front of the assembly and instead struck it twice, as he had been told to do for a different rock thirty-eight years earlier — and said \"must we fetch you water\", so what the nation was shown was not what the order was for."}
];

const CASE_JM20 = {
  id:"jm20", code:"CASE JM-20", title:"The Rock at Meribah",
  period:"Kadesh · c. 1407 BC", colour:"#6b5c4a", poster:"poster_jm20",
  teaser:"Water comes out of a rock in front of the whole nation, and the man who produced it is told he will not enter the country he has spent forty years walking toward. The Society is asked why.",
  introSub:"Two orders, thirty-eight years apart, and one verb between them.",
  items:JM20_ITEMS, theories:JM20_THEORIES, locks:JM20_LOCKS, verdicts:JM20_VERDICTS,
  matrix:JM20_MATRIX,
  correct:"verb",
  boardTitle:"Why He Was Not Allowed In",
  boardIntro:"Five explanations have been offered for the sentence at Meribah. For each one, pin the <b>single</b> document that makes it impossible. When all five are closed, the accusation form opens.",
  accusationIntro:"The water came, the order existed, the people were not sentenced, Horeb was not the same order, and the verdict does not mention the temper. State precisely what was ordered and what was done.",
  debrief:{
    lead:"Everything about the two events matches except one line. At Horeb the order was to strike the rock, and striking it was obedience. Thirty-eight years later, at a rock that looked the same, with the same rod, the same complaint and the same man, the order was to <i>speak</i> to it in front of the gathered nation. He called the people rebels, asked whether \"we\" should fetch them water, and hit the rock twice. The water came anyway. The sentence names two men and gives its grounds as a failure to sanctify God in the eyes of the people — which is precisely the part of the order that was not carried out.",
    questions:[
      "Does the sentence seem proportionate to you? Argue it honestly — the file will support a real disagreement.",
      "Why do you think the new order was to speak rather than strike? What would the crowd have seen differently?",
      "The old method had worked. When is 'we did it this way last time' good reasoning, and when is it a trap?",
      "\"Must <i>we</i> fetch you water out of this rock?\" What does that pronoun change?",
      "He appealed and was refused, then was shown the whole country from a mountain. What do you make of that ending?"
    ],
    refs:"Numbers 20:1–13 · Exodus 17:1–7 · Numbers 27:12–14 · Deuteronomy 3:23–28 · 34:1–12 · Psalm 106:32–33"
  },
  teacher:{
    answers:"Lock 1 code <b>1212</b> (told once to speak · struck it twice · told once before, at Horeb, to strike · two leaders named). Lock 2 keyword <b>SPEAK</b>, from the 📜 Document comparison: eleven ticks, with only the 'strike' and 'speak' rows failing to line up.",
    pairs:"The water failed → The Rock and the Watercourse; he acted without orders → The Two Orders; punished for the people → The People's Complaint; the same as Horeb → The Order at Horeb, In Full; it was the anger → The Sentence, As Worded.",
    conclusion:"He was given a new instruction for a familiar situation, carried out the old one instead — twice, in front of the assembly the order had been designed for — and the sentence names exactly that.",
    prompts:"\"Read both orders out loud. What is different?\" · \"Why gather everybody, if the point is just water?\" · \"Who is 'we' in that sentence?\" · \"Was that fair? Say why, and then argue the other side.\"",
    extra:"Run the instruction experiment before the file: hand out two nearly identical sets of instructions with one word changed and see how many students notice. Almost none do, and the case then teaches itself without anyone feeling judged. Expect and welcome the argument about proportion — several students will think the sentence harsh, and the archive deliberately leaves that open; the useful move is to separate \"what happened\" from \"was it fair\", and only argue the second once the first is settled. Note the link to JM-13: the thirty-eight years between the two rocks is exactly the sentence passed in that file, and running the two cases in order makes the wilderness period land properly."
  }
};

registerCase(CASE_JM20);
