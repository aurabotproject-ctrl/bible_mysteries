"use strict";
/* ============================================================
   CASE JM-19 — THE BROKEN RIDDLE
   Timnah, Philistia, in the days of the judges.  Source: Judges 14.
   ============================================================ */

SVG.j19road = `<svg viewBox="0 0 1536 1024" xmlns="http://www.w3.org/2000/svg"><image href="__IMG_j19road__" x="0" y="0" width="1536" height="1024"/><text x="391" y="82" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="26" font-weight="600" fill="#4a3520" textLength="120" lengthAdjust="spacingAndGlyphs">ZORAH</text><text x="391" y="105" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="13" font-weight="500" fill="#4a3520" font-style="italic" opacity=".85">Samson&#8217;s home, up in the hills</text><text x="186" y="412" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="24" font-weight="600" fill="#7d2b1b" textLength="148" lengthAdjust="spacingAndGlyphs">THE CARCASS</text><text x="960" y="619" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="23" font-weight="600" fill="#3f5a30" textLength="188" lengthAdjust="spacingAndGlyphs">VINEYARD TERRACES</text><text x="1281" y="283" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="26" font-weight="600" fill="#4a3520" textLength="132" lengthAdjust="spacingAndGlyphs">TIMNAH</text><text x="830" y="430" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="18" font-weight="600" fill="#4a3520" font-style="italic" opacity=".9" transform="rotate(21 830 430)" paint-order="stroke" stroke="#f2e7cc" stroke-width="4" stroke-linejoin="round">the road down to Timnah</text><text x="300" y="470" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="15" font-weight="600" fill="#7d2b1b" font-style="italic" opacity=".95" paint-order="stroke" stroke="#f2e7cc" stroke-width="4" stroke-linejoin="round">off the path &#183; screened by the rising ground</text></svg>`;

SVG.j19carcass = `<svg viewBox="0 0 1536 1024" xmlns="http://www.w3.org/2000/svg"><image href="__IMG_j19carcass__" x="0" y="0" width="1536" height="1024"/><text x="1053" y="129" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="24" font-weight="600" fill="#4a3520" textLength="196" lengthAdjust="spacingAndGlyphs">THE TERRACE WALL</text><text x="557" y="375" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="24" font-weight="600" fill="#4a3520" textLength="198" lengthAdjust="spacingAndGlyphs">HONEY IN THE RIBS</text><text x="1075" y="190" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="16" font-weight="600" fill="#7d2b1b" font-style="italic" opacity=".95" paint-order="stroke" stroke="#f2e7cc" stroke-width="4" stroke-linejoin="round">nothing of the valley below can be seen from here</text><text x="330" y="790" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="16" font-weight="600" fill="#4a3520" font-style="italic" opacity=".9" paint-order="stroke" stroke="#f2e7cc" stroke-width="4" stroke-linejoin="round">picked bare, long dry &#8212; no blood, no flesh</text></svg>`;

SVG.j19linen = `<svg viewBox="0 0 1536 1024" xmlns="http://www.w3.org/2000/svg"><image href="__IMG_j19linen__" x="0" y="0" width="1536" height="1024"/><text x="888" y="104" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="22" font-weight="600" fill="#4a3520" textLength="212" lengthAdjust="spacingAndGlyphs">THIRTY LINEN GARMENTS</text></svg>`;

const JM19_ITEMS = [

/* ---------------- STAGE 0 ---------------- */
{
  id:"j19letter", stage:0, notEvidence:true, kind:"Briefing", title:"Letter from the Case Supervisor",
  sub:"The Bible Investigation Bureau · Department of Unsolved Antiquities",
  prev:"A riddle only one man on earth could answer — answered by thirty.",
  x:24, y:28, rot:-3, w:216,
  body:`
    <p><b>To the investigating team,</b></p>
    <p>A wedding feast at Timnah, in Philistine country, in the days when Israel had no king. Seven days of eating and drinking, and thirty young Philistine men brought in to keep the bridegroom company — whether he wanted them or not.</p>
    <p>On the first day the bridegroom, an Israelite named Samson, set them a riddle and staked a great deal of expensive cloth on it. <b>For three days they had nothing.</b> On the seventh day, with the light going, they gave him the answer — and they gave it perfectly.</p>
    <p>That should not have been possible. The riddle was not a puzzle about the world. It was a puzzle about <b>one private thing that had happened to one man, with no one else there</b>. You cannot reason your way to it. You can only be told.</p>
    <h4>Your task</h4>
    <p>Work out <b>how the answer got out</b>. Five explanations have been offered. Test each against the file and throw out the ones it will not carry.</p>
    <h4>How the file works</h4>
    <ul>
      <li>Read everything on the desk before you decide anything.</li>
      <li>The first locked bundle opens on a <b>four-digit code</b>, and every digit is answerable from the documents you already have.</li>
      <li>The second opens on a <b>keyword that is written nowhere in the file</b>. You will have to build it yourself, on the <b>Riddle Sheet</b> — the crossword in the top bar. Its answers all come from the evidence, and six numbered squares spell the word you need.</li>
      <li>Then take it to the <b>Pinboard</b> and eliminate.</li>
    </ul>
    <p class="margin-note">A secret has no legs. If it moved, somebody carried it — and somebody had a reason to.</p>
    <div class="sig">Luke</div>
    <div class="small" style="color:#5b4a35">Case Supervisor</div>
    <div class="ref">Reconstructed from Judges 14, with background from Judges 13 and 15.</div>`
},
{
  id:"j19riddle", stage:0, kind:"Terms of wager", title:"The Riddle and the Wager",
  sub:"Set on the first day of the feast",
  prev:"Thirty linen garments and thirty changes of clothes, on seven days.",
  x:57, y:24, rot:3, w:214,
  body:`
    <div class="doc-body">
      <p>The bridegroom put it to the thirty companions in front of the whole company, and the terms were agreed out loud, so that nobody could argue about them afterwards.</p>
      <h4>The riddle, word for word</h4>
      <p style="font-size:19px;text-align:center;font-style:italic">"Out of the eater, something to eat.<br>Out of the strong, something sweet."</p>
      <h4>The terms</h4>
      <table class="ledger">
        <tr><th>Term</th><th>Agreed</th></tr>
        <tr><td>Time allowed</td><td><b>The seven days of the feast</b></td></tr>
        <tr><td>If they answer it</td><td>Samson gives them thirty linen garments and thirty changes of clothes</td></tr>
        <tr><td>If they cannot</td><td>They give him the same</td></tr>
      </table>
      <p>That is a serious sum of cloth — the sort of stake that would empty a young man's household either way. Whoever lost this wager was going to feel it for years.</p>
      <p class="margin-note">Note who is carrying the risk here: thirty of them, one of him. And they are on their own ground.</p>
    </div>
    <div class="ref">Background: Judges 14:12–14.</div>`
},
{
  id:"j19feast", stage:0, kind:"Day log", title:"Log of the Seven Days",
  sub:"Reconstructed from the accounts",
  prev:"Three days of nothing. Then everything, in a single afternoon.",
  x:41, y:60, rot:2, w:212,
  body:`
    <table class="ledger">
      <tr><th>Day</th><th>What is recorded</th></tr>
      <tr><td>1</td><td>The riddle is set. The thirty begin work on it.</td></tr>
      <tr><td>2</td><td>Nothing.</td></tr>
      <tr><td>3</td><td>Nothing. <b>Three days gone and they cannot expound it.</b></td></tr>
      <tr><td>4</td><td>The thirty go to Samson's wife — privately, away from him.</td></tr>
      <tr><td>5</td><td>She begins to weep in front of Samson and press him for the answer.</td></tr>
      <tr><td>6</td><td>She weeps. He does not tell her.</td></tr>
      <tr><td>7</td><td><b>He tells her, because she pressed him hard.</b> She goes to the thirty. Before the sun goes down, they give him the answer.</td></tr>
    </table>
    <h4>What the log shows about the shape of it</h4>
    <p>Six days of open eating and drinking with the thirty produced <b>nothing at all</b>. Samson sat with these men, day after day, and the answer never came out of him.</p>
    <p>Then, within hours of the weeping stopping, they had it — complete, exact, and delivered right on the deadline.</p>
    <p class="margin-note">Ask the question a detective always asks about a timeline: what changed on the day it worked?</p>
    <div class="ref">Background: Judges 14:14–18. Some manuscripts put the approach to the wife on the fourth day, others on the seventh; either way the pattern of the week is the same.</div>`
},
{
  id:"j19samson", stage:0, kind:"Statement", title:"Statement — Samson of Zorah",
  sub:"The bridegroom, and the only man who knew",
  prev:"“I turned aside on my own. Both times.”",
  x:20, y:64, rot:-6, w:206,
  body:`
    <div class="doc-body">
      <p>"I went down to Timnah twice before the feast. The first time was to see the woman. <b>A young lion came roaring at me out of the vineyards</b>, off the road, and I killed it with nothing in my hands. There was no one with me. My father and mother were on the road, and they never saw it.</p>
      <p>I did not tell them. I did not tell anybody. Not that day, not after.</p>
      <p>The second journey was later, to fetch her. <b>I turned aside on my own to look at the carcass</b> — and there were bees in it, and honey. I scraped it out with my hands and ate as I walked. I gave some to my father and mother when I caught them up, and they ate it, and <b>I did not tell them where it came from either</b>.</p>
      <p>So when they sat there on the seventh day and gave me my own riddle back, word for word, I knew exactly what had happened. There was one person on this earth I had told, and I had told her that morning.</p>
      <p>That is what I said to them, in front of everybody: <b>if you had not ploughed with my heifer, you would not have found out my riddle.</b>"</p>
      <div class="sig">Samson</div>
    </div>
    <div class="ref">Background: Judges 14:5–9, 14:18. "Ploughed with my heifer" is his own phrase — an accusation about whose animal did the work.</div>`
},
{
  id:"j19parents", stage:0, kind:"Statement", title:"Statement — Samson's Father and Mother",
  sub:"Taken separately, at Zorah",
  prev:"“He never told us what he had done.”",
  x:73, y:58, rot:5, w:202,
  body:`
    <div class="doc-body">
      <p>"We were on that road with him both times. We did not want the marriage and we said so, and he went anyway.</p>
      <p>The first journey he left us for a while among the vineyards and came back to us and said nothing at all. We did not know a lion had come near him until long afterwards. <b>He never told us what he had done.</b></p>
      <p>The second time he handed us honey in his hands and we ate it, standing on the road. We asked where he had got it. <b>He would not say.</b> We assumed a hive in the rocks, because where else does honey come from?</p>
      <p>So no — we could not have told those thirty men the answer. We did not have it ourselves. Whatever the riddle meant, we learned it the same evening they did, and we learned it from the shouting."</p>
      <div class="sig">the father and mother of Samson</div>
    </div>
    <div class="ref">Background: Judges 14:6, 14:9 — "he did not tell them" is stated twice in the account, about both journeys.</div>`
},
{
  id:"j19road", stage:0, kind:"Plan", title:"The Road Down to Timnah",
  sub:"Where the lion was killed, and what could be seen", thumb:"j19road",
  tour:{href:"../tours/timnah-road.html", label:"\ud83d\udeb6 Walk the road to Timnah",
        note:"Zorah to Timnah, past the terraces and the carcass"},
  prev:"The vineyard terraces stand above the road and cannot be seen into.",
  x:38, y:32, rot:-2, w:222,
  body:`
    <div class="plate">${SVG.j19road}<div class="cap">Click the plan to enlarge it.</div></div>
    <h4>What the ground tells you</h4>
    <ul>
      <li>The road from Zorah down to Timnah runs along open valley floor. The <b>vineyard terraces stand above it</b>, cut back into the slope.</li>
      <li>From the road you cannot see into the terraces. <b>From the terraces you can see anyone coming.</b> Samson would have known at once if he were being followed.</li>
      <li>The carcass lay <b>off the path</b>, in among the vines. It was not somewhere a traveller passes; it is somewhere you go on purpose.</li>
      <li>Both times, Samson left the road <b>alone</b> and rejoined his parents afterwards.</li>
    </ul>
    <p class="margin-note">A witness would have had to leave the road, climb into a private vineyard, and watch a man kill a lion — and then say nothing about it for months.</p>
    <div class="ref">Background: Judges 14:5–9.</div>`
},
{
  id:"j19thirty", stage:0, kind:"Statement", title:"Statement — One of the Thirty",
  sub:"Name withheld at his own request",
  prev:"“We worked it out. Riddles are made to be worked out.”",
  x:64, y:78, rot:6, w:200,
  body:`
    <div class="doc-body">
      <p>"We worked it out. That is what a riddle is for.</p>
      <p>He set it on the first day and we sat with it. Thirty men, seven days, plenty of wine and nothing else to do. Eventually somebody says the right thing and everybody goes quiet. That is how it always happens.</p>
      <p>No, I will not say which of us said it first. No, nobody paid anyone. No, we did not speak to his wife — and if she says otherwise she is a frightened girl who will say whatever is put in front of her.</p>
      <p>You want to know why we cared so much about some cloth? Then you have never stood surety for thirty changes of clothes on the word of a man from the hills who thinks he is funny. <b>Ask what it would have cost each of us to lose.</b> Then ask what a man will do to get out of paying it."</p>
      <div class="stamp">DENIES ALL CONTACT WITH THE BRIDE</div>
      <div class="sig">a companion of the feast</div>
    </div>
    <div class="ref">Background: Judges 14:11–18. The account records the thirty approaching the bride; this statement is the case file's reconstruction of their denial.</div>`
},

/* ---------------- STAGE 1 — released by the numbers lock ---------------- */
{
  id:"j19carcass", stage:1, kind:"Field report", title:"Report on the Carcass",
  sub:"Bundle B · the vineyard terrace",
  prev:"Dry bones, a bees' nest, and nobody else's footprints.", thumb:"j19carcass",
  x:28, y:26, rot:-4, w:206,
  body:`
    <div class="plate">${SVG.j19carcass}<div class="cap">Click to enlarge. The site as the Bureau recorded it.</div></div>
    <p>The Bureau examined the site and what was left of it.</p>
    <table class="ledger">
      <tr><th>Finding</th><th>Detail</th></tr>
      <tr><td>Location</td><td>Inside a terraced vineyard, above and away from the road</td></tr>
      <tr><td>Condition when Samson returned</td><td>Dried out — enough time had passed for a swarm to settle in it</td></tr>
      <tr><td>Occupants</td><td>A colony of bees and a comb of honey</td></tr>
      <tr><td>Honey</td><td><b>Taken by hand.</b> No tool marks, no jar, no second visitor</td></tr>
      <tr><td>Other tracks at the site</td><td><b>None recorded</b></td></tr>
      <tr><td>Reported to anyone at the time</td><td><b>No</b> — no owner, no watchman, no complaint</td></tr>
    </table>
    <h4>Why a stranger could not have built the riddle from this</h4>
    <p>Suppose a passing Philistine did climb up and find a dead lion full of bees. What would he have? A dead lion full of bees.</p>
    <p>The riddle is not about a lion, and it is not about honey. <b>It is about a man taking food out of a killer he had beaten himself.</b> To turn this site into that riddle you would need to know who killed the lion, that he came back, and that he ate from it. None of that is lying on the ground.</p>
    <div class="ref">Background: Judges 14:8–9.</div>`
},
{
  id:"j19analysis", stage:1, kind:"Analysis", title:"Could the Riddle Be Reasoned Out?",
  sub:"Bundle B · the Bureau's assessment",
  prev:"A riddle about a private event has no path in from outside.",
  x:57, y:22, rot:3, w:206,
  body:`
    <h4>What a fair riddle looks like</h4>
    <p>A fair riddle describes something everybody has access to — a door, a river, a shadow. Anyone patient enough can reach the answer, because the answer is in the world.</p>
    <h4>What this one is</h4>
    <p>"Out of the eater, something to eat. Out of the strong, something sweet." Read it cold, knowing nothing. <b>What is the eater?</b> Any animal. Any person. Death itself. <b>What is the sweet thing?</b> Anything at all.</p>
    <p>There is no chain of reasoning from those two lines to <i>a young lion Samson killed in a vineyard, and honey he later scraped out of its dried carcass with his hands.</i> That is not a deduction. That is a memory — and it is one man's memory.</p>
    <h4>What the pattern of the week shows</h4>
    <ul>
      <li>Thirty men, three full days, no progress whatsoever.</li>
      <li>Nothing they did on days four, five or six moved them any closer.</li>
      <li>Then, on the last afternoon, a complete and exact answer.</li>
    </ul>
    <p><b>Reasoning does not behave like that.</b> Reasoning creeps. Being told arrives all at once.</p>
    <p class="margin-note">If they had truly reasoned it out, the answer would have come to one of them slowly and been argued over. Instead it arrived finished.</p>
    <div class="ref">Background: Judges 14:14, 14:17–18.</div>`
},
{
  id:"j19answer", stage:1, kind:"Record", title:"The Answer, As It Was Given",
  sub:"Bundle B · seventh day, before sundown",
  prev:"Two questions, thrown back at him, in his own shape.",
  x:79, y:36, rot:-6, w:202,
  body:`
    <div class="doc-body">
      <p>They did not walk up and say "a lion and some honey". They said this, and the record is careful to keep the wording:</p>
      <p style="font-size:19px;text-align:center;font-style:italic">"What is sweeter than honey?<br>What is stronger than a lion?"</p>
      <h4>Three things worth noticing about it</h4>
      <ul>
        <li><b>It is in his own form.</b> Two lines, sweet and strong, in the same order he used. That is the shape of someone repeating something they have been handed, not the shape of someone who has just worked something out.</li>
        <li><b>It is exact.</b> Not "a beast", not "some animal" — a lion. Not "something sweet" — honey.</li>
        <li><b>It is late.</b> Delivered on the seventh day <b>before the sun went down</b>: as late as it could possibly be given, and still inside the terms.</li>
      </ul>
      <p>An answer arrived at over seven days would have been offered the moment it was found. This one was held until the last hour — as if it had only just been received.</p>
    </div>
    <div class="ref">Background: Judges 14:18.</div>`
},
{
  id:"j19wager", stage:1, kind:"Valuation", title:"What the Wager Was Worth",
  sub:"Bundle B · the motive",
  prev:"Thirty men, each facing a bill they could not pay.", thumb:"j19linen",
  x:66, y:70, rot:5, w:200,
  body:`
    <div class="plate">${SVG.j19linen}<div class="cap">Click to enlarge. Cloth of the kind staked on the riddle.</div></div>
    <table class="ledger">
      <tr><th>Stake</th><th>Amount</th></tr>
      <tr><td>Linen garments</td><td class="n">30</td></tr>
      <tr><td>Changes of clothes</td><td class="n">30</td></tr>
      <tr><td>Men liable if they lost</td><td class="n">30</td></tr>
      <tr><td>Roughly, per man</td><td>one full outfit of good cloth — a serious expense for a young man of no property</td></tr>
    </table>
    <h4>Investigator's remark</h4>
    <p>Cloth of this kind was not a trinket. It was woven by hand over weeks and it held its value like coin. Thirty young men who had cheerfully accepted a wager on the first day were, by the fourth, staring at a bill they had no way of meeting — <b>and at the humiliation of paying it to an Israelite in front of their own town.</b></p>
    <p>That is motive. It does not tell you what they did. It tells you how badly they needed to do something.</p>
    <div class="ref">Background: Judges 14:12–13. Compare Judges 14:19, where Samson eventually settles the wager by force at Ashkelon.</div>`
},

/* ---------------- STAGE 2 — released by the keyword lock ---------------- */
{
  id:"j19threat", stage:2, kind:"Testimony", title:"What the Thirty Said to Her",
  sub:"Sealed Bundle C · recorded afterwards by those who overheard",
  prev:"“Coax him — or we will burn you and your father's house.”",
  x:26, y:26, rot:-3, w:206,
  body:`
    <div class="doc-body">
      <p>They did not offer her money. They did not reason with her. The record of what they put to her is short, and this is the whole of it:</p>
      <div class="stamp">RECORDED WORDS OF THE THIRTY</div>
      <p style="font-size:18px"><b>"Coax your husband into telling us the riddle, or we will burn you and your father's house with fire. Did you invite us here to make us poor?"</b></p>
      <h4>What was actually being said</h4>
      <ul>
        <li>They went to her <b>privately</b>, away from Samson, on their own ground, where her family lived and his did not.</li>
        <li>They did not ask. <b>They threatened her home and her father's household.</b></li>
        <li>And the threat was not an empty one. Not long afterwards, in the quarrel that followed all this, it was carried out.</li>
      </ul>
      <p class="margin-note">This is the fact that reorders the whole case. She was not curious. She was frightened.</p>
    </div>
    <div class="ref">Background: Judges 14:15; the outcome referred to is Judges 15:6.</div>`
},
{
  id:"j19wife", stage:2, kind:"Statement", title:"Statement — Samson's Wife",
  sub:"Sealed Bundle C · taken at Timnah",
  prev:"“I wept in front of him for the rest of the feast.”",
  x:57, y:30, rot:4, w:206,
  body:`
    <div class="doc-body">
      <p>"They came to me on my own. You already know what they said to me; I am not going to say it again.</p>
      <p>My father's house is in this town. Their fathers' houses are in this town. Samson's is not.</p>
      <p>So I went to him and I wept. I told him he hated me, that he did not love me, that he had put a riddle to my people and would not tell me the answer. <b>I wept in front of him for the rest of the feast</b>, because I did not know what else to do and because I could not tell him why.</p>
      <p>On the last day he gave it to me. He was worn out with me. And I went straight out and told them, and I have not stopped thinking about the look on his face when they said it back to him.</p>
      <p>You may write down that I told them. I did. <b>Write down as well what they said they would do to my family if I did not.</b>"</p>
      <div class="sig">the wife of Samson</div>
    </div>
    <div class="ref">Background: Judges 14:16–17.</div>`
},
{
  id:"j19after", stage:2, kind:"Follow-up file", title:"What Happened Afterwards",
  sub:"Sealed Bundle C",
  prev:"Everything that followed came out of one week.",
  x:44, y:70, rot:2, w:208,
  body:`
    <h4>Immediately</h4>
    <p>Samson paid the wager — by going down to Ashkelon and taking the cloth from thirty other Philistines by force. Then he went home to his father's house in a rage, and his wife was given to the companion who had been his best man.</p>
    <h4>Then</h4>
    <p>He came back for her, found her married to someone else, and burned the Philistine grain fields. The Philistines answered by carrying out on her family exactly the threat the thirty had made in the first place. Samson answered that. And so on, and on.</p>
    <h4>Why the Bureau keeps this page in the file</h4>
    <p>A wager about cloth turned into a feud that ran for years and cost a great many lives. Every step of it can be traced back to <b>one afternoon, one frightened person, and one secret that was worth more to somebody else than it was to the man who owned it</b>.</p>
    <p class="margin-note">Nobody in this case set out to start a war. They set out to avoid paying for some clothes.</p>
    <div class="ref">Background: Judges 14:19–20; 15:1–8.</div>`
}
];

const JM19_THEORIES = [
  {
    id:"followed",
    title:"1. Somebody followed him and saw it",
    claim:"A Philistine on the road watched Samson kill the lion, and later watched him take the honey.",
    answer:"j19road",
    verdict:"The ground kills it. The vineyard terraces stand above the road and cannot be seen into from it — while anyone up in them can see the whole road. Samson left the path alone on both journeys and rejoined his parents afterwards. A witness would have had to leave the road, climb into a private vineyard, watch a man kill a lion bare-handed, come back months later to watch him eat honey out of it, and then say nothing to anybody until the seventh day of a wedding feast."
  },
  {
    id:"parents",
    title:"2. His father and mother told them",
    claim:"They were on the road both times. Parents talk.",
    answer:"j19parents",
    verdict:"Their statement kills it. They were on the road, but they were not in the vineyard — and Samson told them nothing on either journey. He handed them honey and refused to say where it came from, and they assumed a hive in the rocks. They could not pass on an answer they did not have; they learned what the riddle meant on the seventh evening, from the shouting, along with everyone else."
  },
  {
    id:"stranger",
    title:"3. A traveller found the carcass and worked it out",
    claim:"Somebody stumbled on a dead lion full of bees and put two and two together.",
    answer:"j19carcass",
    verdict:"The field report kills it. A stranger finding that site has a dead lion full of bees — and nothing else. The riddle is not about a lion or about honey; it is about a man taking food out of a killer he had beaten himself. To build the riddle you would have to know who killed it, that he came back, and that he ate from it. None of that is lying on the ground, and no tracks, tools or reports place anyone else at the site."
  },
  {
    id:"reasoned",
    title:"4. The thirty solved it fairly",
    claim:"Thirty men, seven days, and a riddle is made to be solved.",
    answer:"j19analysis",
    verdict:"The analysis kills it. Read cold, 'the eater' could be any animal, any person, or death itself, and 'something sweet' could be anything at all — there is no chain of reasoning from those lines to one particular carcass in one particular vineyard. And the shape of the week gives it away: three days of nothing, then a complete, exact answer inside a single afternoon. Reasoning creeps. Being told arrives all at once."
  },
  {
    id:"slipped",
    title:"5. Samson let it slip himself",
    claim:"Seven days of drinking with thirty companions. Sooner or later he talked.",
    answer:"j19feast",
    verdict:"The day log kills it. He sat with those thirty men for six days of open eating and drinking and the answer never came out of him. What changed on the seventh day was not the wine — it was that the weeping stopped. The answer surfaced within hours of his wife finally getting it out of him, and it came back to him in his own two-line form, exact and complete. He did not leak it to the room; he gave it to one person."
  }
];

const JM19_LOCKS = [
  {
    id:"l1", type:"number", code:"7320", len:4,
    wrong:"Not that. Each digit comes from the documents on the desk — one of the four is wrong.",
    name:"Bundle B — the site and the sums",
    blurb:"A four-digit lock. Four questions, four single-digit answers, in order. Every one of them can be read off a document you already have.",
    questions:[
      "How many days was the wedding feast to last?",
      "For how many days could the thirty not solve the riddle?",
      "How many journeys did Samson make down to Timnah before the feast?",
      "How many people had Samson told about the lion?"
    ],
    hints:[
      "The questions are in order — question one gives the first digit. Every answer is a single digit.",
      "Question 1 is on the terms of the wager. Question 2 is on the day log. Questions 3 and 4 are both in Samson's own statement — and his parents confirm the last one."
    ],
    reward:"Bundle B is open: the report on the carcass, the assessment of the riddle, the answer as it was given, and what the wager was worth."
  },
  {
    id:"l2", type:"word", code:"HEIFER", len:6,
    wrong:"Not that. Six numbered squares on the Riddle Sheet, read in number order — check you have those six answers right.",
    name:"Sealed Bundle C — what was said in private",
    blurb:"A six-letter keyword. It is not written anywhere in this file, and no document will give it to you. You have to build it on the <b>Riddle Sheet</b> — the crossword in the top bar.",
    questions:[
      "Open the Riddle Sheet from the top bar.",
      "Every answer in it is a word you can find by reading the documents on your desk. None of it is general knowledge.",
      "Six squares carry a small number. Collect the letters in those squares, in number order.",
      "That is your keyword. Enter it here."
    ],
    hints:[
      "You do not need the whole grid — only the six numbered squares. But they sit in six different answers, so you will need six different clues right.",
      "Start with the easy counting clues: how many days, how many companions. They cross other answers and open the grid up."
    ],
    reward:"Sealed Bundle C is open: what the thirty said to her, her own statement, and what all of it led to."
  }
];

const JM19_VERDICTS = [
  {id:"followed", text:"Somebody followed Samson and saw the lion and the honey."},
  {id:"parents",  text:"His father and mother passed the answer on."},
  {id:"stranger", text:"A traveller found the carcass and worked the riddle out from it."},
  {id:"reasoned", text:"The thirty solved the riddle fairly, by reasoning."},
  {id:"slipped",  text:"Samson let the answer slip himself during the drinking."},
  {id:"wife",     text:"The thirty threatened his wife with fire, she wept the answer out of Samson, and she carried it to them."}
];

const CASE_JM19 = {
  id:"jm19", code:"CASE JM-19", title:"The Broken Riddle",
  period:"Timnah, Philistia · c. 1100 BC", colour:"#8a6a24", poster:"poster_jm19",
  teaser:"A riddle only one man on earth could answer — and thirty men answered it, perfectly, an hour before the deadline. Nobody saw. Nobody was told. Somebody is lying.",
  introSub:"One private memory. Thirty men who needed it. Seven days.",
  items:JM19_ITEMS, theories:JM19_THEORIES, locks:JM19_LOCKS, verdicts:JM19_VERDICTS,
  correct:"wife",
  crossword:{
    title:"The Riddle Sheet",
    blurb:"Every answer is a word you can find in the documents on your desk. Six squares carry a small number — collect those letters in number order and you have the keyword for the second lock.",
    W:10, H:11,
    hidden:"HEIFER",
    entries:[
      {n:1,d:"A",r:0,c:4,a:"SEVEN",q:"How many days the feast was to last"},
      {n:3,d:"A",r:2,c:1,a:"VINEYARD",q:"Where the young lion came roaring at Samson"},
      {n:4,d:"A",r:4,c:4,a:"THIRTY",q:"How many companions were brought to the feast"},
      {n:9,d:"A",r:7,c:2,a:"FIRE",q:"What the thirty threatened Samson's wife with"},
      {n:10,d:"A",r:9,c:6,a:"BEES",q:"What had made a nest inside the dead lion"},
      {n:11,d:"A",r:10,c:0,a:"TIMNAH",q:"The Philistine town where the wedding feast was held"},
      {n:1,d:"D",r:0,c:4,a:"SWEET",q:"'Out of the strong, something ____'"},
      {n:2,d:"D",r:1,c:2,a:"LION",q:"What Samson killed with his bare hands"},
      {n:5,d:"D",r:4,c:5,a:"HONEY",q:"What Samson scraped out of the carcass"},
      {n:6,d:"D",r:4,c:7,a:"RIDDLE",q:"What Samson set before the thirty men"},
      {n:7,d:"D",r:5,c:0,a:"SUNSET",q:"The deadline on the seventh day"},
      {n:8,d:"D",r:6,c:3,a:"LINEN",q:"The kind of garments staked in the wager"},
    ],
    marks:[{i:1,r:10,c:5},{i:2,r:0,c:5},{i:3,r:4,c:6},{i:4,r:7,c:2},{i:5,r:9,c:8},{i:6,r:2,c:7}]
  },
  boardTitle:"Five Ways a Secret Travels",
  boardIntro:"Only one man knew the answer, and the answer got out. Five routes have been offered. For each one, pin the <b>single</b> piece of evidence that closes it. When all five are closed, the accusation form opens.",
  accusationIntro:"You have closed every route by which the answer could have reached the thirty by accident, observation or fair reasoning. It reached them anyway, on the last afternoon, in Samson's own words. Say plainly how.",
  debrief:{
    lead:"Nobody saw the lion. Nobody was told but one person, and she was told on the last morning of the feast. Every other route is shut: the ground hides the vineyard, the parents never knew, the site gives nothing away, the riddle cannot be reasoned out, and six days of drinking produced nothing at all. What is left is not a clever deduction by thirty men. It is a frightened young woman, a threat against her family, and a secret that was worth more to somebody else than it was to the man who owned it.",
    questions:[
      "Samson called it betrayal. She said she was threatened with fire. Can both of those be true at the same time?",
      "The thirty never touched Samson. They went after the person with the least power in the room. Why is that so often how pressure works?",
      "Samson kept the lion secret even from his parents, then gave it away in a week to someone he had known barely longer. What does the case suggest about him?",
      "A wager about clothes ended in years of killing. At which single point in the week could somebody have stopped it — and what would that have cost them?"
    ],
    refs:"Judges 14 (the whole chapter) · Judges 15:1–8 · Judges 13:1–5 for the background"
  },
  teacher:{
    answers:"Lock 1 code <b>7320</b> (7 days of feast · 3 days of failure · 2 journeys to Timnah · 0 people told). Lock 2 keyword <b>HEIFER</b>, built on the Riddle Sheet crossword: the six numbered squares sit in TIMNAH, SEVEN, THIRTY, FIRE, BEES and VINEYARD.",
    pairs:"followed → The Road Down to Timnah; parents → Statement of the Father and Mother; stranger → Report on the Carcass; reasoned → Could the Riddle Be Reasoned Out?; slipped → Log of the Seven Days.",
    conclusion:"The thirty threatened Samson's wife with fire; she wept the answer out of him and took it to them.",
    prompts:"\"Who had something to lose in that week, and how much?\" · \"What changed on the seventh day?\" · \"Why does the wording of their answer matter?\" · For the crossword: \"every answer is in a document — which one would tell you this?\"",
    extra:"This case is heavier than the other two: the thirty threaten to burn the bride and her father's house, and Judges 15:6 records that it was later carried out. The file states this soberly and without detail, but it is worth knowing before you set it, and it makes the debrief question about pressure and power a real discussion rather than a comprehension exercise."
  }
};

registerCase(CASE_JM19);
