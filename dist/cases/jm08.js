"use strict";
/* ============================================================
   CASE JM-08 — THE STOLEN PLUNDER
   Jericho and Ai, about 1400 BC.  Source: Joshua 6–8.
   ============================================================ */

SVG.j08field = `<svg viewBox="0 0 1536 1024" xmlns="http://www.w3.org/2000/svg"><image href="images/j08field.jpg" x="0" y="0" width="1536" height="1024"/><text x="872" y="65" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="27" font-weight="600" fill="#4a3520">AI</text><text x="872" y="85" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="13" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".92" textLength="155" lengthAdjust="spacingAndGlyphs">a small ridge town</text><text x="1293" y="320" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="24" font-weight="600" fill="#4a3520" textLength="118" lengthAdjust="spacingAndGlyphs">THE PASS</text><text x="1293" y="340" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="12" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".92" textLength="180" lengthAdjust="spacingAndGlyphs">one narrow way to the gate</text><text x="555" y="539" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="21" font-weight="600" fill="#4a3520" textLength="178" lengthAdjust="spacingAndGlyphs">THE LINE BROKE</text><text x="555" y="559" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="12" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".92" textLength="182" lengthAdjust="spacingAndGlyphs">below the gate &#8212; before contact</text></svg>`;
SVG.j08spoil = `<svg viewBox="0 0 1536 1024" xmlns="http://www.w3.org/2000/svg"><image href="images/j08spoil.jpg" x="0" y="0" width="1536" height="1024"/><text x="265" y="139" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="24" font-weight="600" fill="#4a3520" textLength="124" lengthAdjust="spacingAndGlyphs">THE ROBE</text><text x="265" y="159" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="12" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".92" textLength="216" lengthAdjust="spacingAndGlyphs">one garment, unaccounted for</text><text x="609" y="839" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="24" font-weight="600" fill="#4a3520" textLength="152" lengthAdjust="spacingAndGlyphs">THE SILVER</text><text x="609" y="859" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="13" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".92" textLength="178" lengthAdjust="spacingAndGlyphs">two hundred shekels</text><text x="1304" y="828" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="24" font-weight="600" fill="#4a3520" textLength="128" lengthAdjust="spacingAndGlyphs">THE GOLD</text><text x="1304" y="848" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="13" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".92" textLength="186" lengthAdjust="spacingAndGlyphs">one bar, fifty shekels</text></svg>`;
SVG.j08camp = `<svg viewBox="0 0 1536 1024" xmlns="http://www.w3.org/2000/svg"><image href="images/j08camp.jpg" x="0" y="0" width="1536" height="1024"/><text x="1042" y="219" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="21" font-weight="600" fill="#4a3520" textLength="210" lengthAdjust="spacingAndGlyphs">THE MUSTER GROUND</text><text x="1042" y="239" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="11" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".92" textLength="214" lengthAdjust="spacingAndGlyphs">the camp is counted here every morning</text><text x="1312" y="734" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="18" font-weight="600" fill="#4a3520" textLength="190" lengthAdjust="spacingAndGlyphs">ONE TENT AT THE EDGE</text><text x="1312" y="754" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="12" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".92" textLength="160" lengthAdjust="spacingAndGlyphs">the floor had been dug</text></svg>`;

const JM08_ITEMS = [

/* ---------------- STAGE 0 ---------------- */
{
  id:"j08letter", stage:0, notEvidence:true, kind:"Briefing", title:"Letter from the Case Supervisor",
  sub:"The Bible Investigation Bureau · Department of Unsolved Antiquities",
  prev:"An army that walked through Jericho has just been beaten by a village.",
  x:22, y:26, rot:-3, w:216,
  body:`
    <p><b>To the investigating team,</b></p>
    <p>Jericho fell without a fight worth the name. The city was placed under a <b>ban</b> — nothing whatever to be carried off, every scrap of silver, gold, bronze and iron to go straight into the treasury. The order was given publicly, twice, and every officer signed for it.</p>
    <p>Days later Israel sent three thousand men against <b>Ai</b>, a small hill town the scouts had described as barely worth the trouble. Israel lost. Thirty-six men died, and the rest ran.</p>
    <p>That is the fact the whole file turns on. <b>An army that took a walled city in a week has just been driven off a village.</b> Joshua wants to know why, and so do we.</p>
    <h4>Your task</h4>
    <p>Five explanations have been put forward. Your job is not to pick the one you like. It is to <b>destroy four of them with documents</b> and see what is still standing when you have finished.</p>
    <p>Be careful with the word "why". A military defeat can be a military problem. This one may not be.</p>
    <h4>How the file works</h4>
    <ul>
      <li>Everything on the desk now is yours. Read all of it before deciding anything.</li>
      <li>Two parts of the file are <b>locked</b>. The codes are hidden in the documents you already have.</li>
      <li>The second lock is opened by running the <b>enquiry</b> yourself — the ⚖ button in the top bar, once the first lock is open.</li>
      <li>When you have everything, go to the <b>Pinboard</b> and close off each explanation in turn.</li>
    </ul>
    <p class="margin-note">Thirty-six men are dead because of something that happened at a city they had already won.</p>
    <div class="sig">A. Thorne</div>
    <div class="small" style="color:#5b4a35">Case Supervisor</div>
    <div class="ref">This case is reconstructed from Joshua 6:17–19, Joshua 7 and Joshua 8:1–29.</div>`
},
{
  id:"j08ban", stage:0, kind:"Standing order", title:"The Ban Proclaimed at Jericho",
  sub:"Read aloud to the whole camp before the walls fell",
  prev:"Nothing to be taken. All metal to the treasury. No exceptions of any kind.",
  x:52, y:22, rot:3, w:212,
  body:`
    <p>The order was proclaimed twice — once before the march around the city began, and once on the morning the walls came down. Every officer of every division heard it.</p>
    <div class="stamp">STANDING ORDER · JERICHO</div>
    <table class="ledger">
      <tr><th>Class of goods</th><th>What is to be done with it</th></tr>
      <tr><td>Clothing, cloth, household goods</td><td><b>Destroyed. Nothing to be carried off.</b></td></tr>
      <tr><td>Silver and gold</td><td>Into the treasury, weighed in</td></tr>
      <tr><td>Bronze and iron</td><td>Into the treasury, weighed in</td></tr>
      <tr><td>Anything else whatever</td><td><b>Nothing to be kept by any man</b></td></tr>
    </table>
    <h4>The warning attached to the order</h4>
    <p class="margin-note">"Keep yourselves from the things under the ban, or you will make the camp of Israel a thing under the ban yourselves, and bring trouble on it."</p>
    <p>Read that carefully. The warning is not that a thief would be punished. It is that <b>a theft would put the whole camp under the same ban as the city</b> — that one man's pocket could stop an entire army.</p>
    <p>At the time, nobody in the camp took that part very seriously.</p>
    <div class="ref">Background: Joshua 6:17–19.</div>`
},
{
  id:"j08scouts", stage:0, kind:"Field report", title:"The Scouts' Report on Ai",
  sub:"Filed before the attack",
  prev:"“Do not trouble the whole army. Three thousand will do it.”",
  x:78, y:26, rot:-4, w:206,
  body:`
    <div class="doc-body">
      <p>Joshua sent men up from Jericho to look at Ai before committing to anything. This is what they brought back.</p>
      <table class="ledger">
        <tr><th>Question asked</th><th>Answer returned</th></tr>
        <tr><td>Size of the town</td><td>Small. A ridge town, not a fortress city.</td></tr>
        <tr><td>Fighting men present</td><td><b>Few</b></td></tr>
        <tr><td>Force recommended</td><td><b>Three thousand men</b> — "two or three thousand"</td></tr>
        <tr><td>Should the whole army go?</td><td><b>No.</b> "Do not make the whole people toil up there."</td></tr>
      </table>
      <h4>The scouts' own words</h4>
      <p>"Do not send all the people up. Let about two or three thousand men go up and strike Ai. Do not make the whole army toil up there — <b>they are only a few.</b>"</p>
      <p class="margin-note">Note what this rules out before you go any further. Whatever went wrong at Ai, it was not that Israel was surprised by a strong enemy. The scouts had seen the town, counted it, and were not wrong about what was in it — the second attack later took Ai comfortably with the same intelligence.</p>
      <div class="ref">Background: Joshua 7:2–3.</div>`
},
{
  id:"j08battle", stage:0, kind:"Military record", title:"Battle Report — the Rout at Ai",
  sub:"Filed by the surviving officers",
  prev:"The line broke before contact. Nobody was outfought.",
  x:26, y:56, rot:5, w:212,
  body:`
    <p>The officers who came back were required to set down exactly what happened, in order. This is the report as filed.</p>
    <table class="ledger">
      <tr><th>Stage</th><th>What happened</th></tr>
      <tr><td>Approach</td><td>Ground held. Order good. No enemy movement observed.</td></tr>
      <tr><td>Advance to the gate</td><td>Men of Ai came out. Numbers as the scouts said — <b>few</b>.</td></tr>
      <tr><td>Contact</td><td><b>The line gave way before the two forces met.</b></td></tr>
      <tr><td>Withdrawal</td><td>Not a withdrawal. A run, from the gate to the quarries.</td></tr>
      <tr><td>Dead</td><td><b>36</b>, almost all of them struck down on the slope while running</td></tr>
    </table>
    <h4>Remark of the senior surviving officer</h4>
    <p>"I want it written down that we were not beaten by those men. We did not lose a fight. <b>We stopped being an army</b> somewhere on that slope, and I cannot tell you the moment it happened. The hearts of the people melted and became as water. I have led these men through a wall and they would not stand for a village."</p>
    <p class="margin-note">A tactical defeat looks like a line that holds and then breaks. This line broke before it was pushed.</p>
    <div class="ref">Background: Joshua 7:4–5.</div>`
},
{
  id:"j08treasury", stage:0, kind:"Treasury record", title:"Treasury Inventory — Spoil of Jericho",
  sub:"Weighed in by the treasury clerks", thumb:"j08spoil",
  prev:"Everything weighed in. The count is short — and short in a very particular way.",
  x:56, y:52, rot:-2, w:220,
  body:`
    <div class="plate">${SVG.j08spoil}<div class="cap">Click to enlarge. Treasury scales, weights, and the shape of what is missing.</div></div>
    <p>Metal taken at Jericho went into the treasury <b>by weight</b>, checked twice — once by the carrying party and once by the clerks. Cloth and household goods were burned in the city and counted by the officer of each quarter.</p>
    <table class="ledger">
      <tr><th>Class</th><th>Expected</th><th>Received</th></tr>
      <tr><td>Bronze and iron vessels</td><td>as counted in the city</td><td>complete</td></tr>
      <tr><td>Silver</td><td>as counted in the city</td><td><b>short</b></td></tr>
      <tr><td>Gold</td><td>as counted in the city</td><td><b>short</b></td></tr>
      <tr><td>Fine woven cloth marked for burning</td><td>as counted in the city</td><td><b>one piece unaccounted for</b></td></tr>
    </table>
    <h4>The clerks' note</h4>
    <p>"There are <b>three</b> separate shortfalls and no more: silver, gold, and one garment. Everything else balances to the last vessel.</p>
    <p>We are asked whether metal could simply have burned away in the fire and left the count wrong. It could not. <b>Metal does not vanish in a house fire</b> — it melts, and it is still there in the ash, and we sift the ash. Every quarter's ash was sifted and weighed. The shortfall is not in the ash.</p>
    <p>And the amounts missing are not scattered losses. They are <b>one man's carry</b>: as much silver and gold as a single person could lift and walk away with, and one garment folded under an arm."</p>
    <div class="ref">Fictional treasury record, consistent with Joshua 6:19 and Joshua 7:21.</div>`
},
{
  id:"j08muster", stage:0, kind:"Camp record", title:"The Camp Muster",
  sub:"Taken the morning after Jericho fell", thumb:"j08camp",
  prev:"No outsiders. No camp followers. The spoil under guard the whole time.",
  x:80, y:56, rot:4, w:210,
  body:`
    <div class="plate">${SVG.j08camp}<div class="cap">Click to enlarge. The camp at Gilgal, laid out by division.</div></div>
    <p>Israel is not a town. It is a marching camp, laid out in blocks by tribe, counted every morning, with one avenue in and out.</p>
    <table class="ledger">
      <tr><th>Check</th><th>Result</th></tr>
      <tr><td>Outsiders, traders or camp followers present</td><td class="n"><b>none</b></td></tr>
      <tr><td>Persons entering or leaving the camp that night</td><td class="n"><b>none recorded</b></td></tr>
      <tr><td>Survivors of Jericho in the camp</td><td class="n">one household only — Rahab's, quartered outside the camp under guard</td></tr>
      <tr><td>Hours the spoil was left unguarded</td><td class="n"><b>none</b></td></tr>
      <tr><td>Guard changes between the city and the treasury</td><td class="n">three, each signed for</td></tr>
    </table>
    <h4>The officer of the muster</h4>
    <p>"Whatever left Jericho, left it in the hands of somebody who was <b>entitled to be carrying it</b>. There was nobody else there. The spoil was watched from the moment it came out of the gate until the moment it was weighed, and the men who watched it are named on the roll.</p>
    <p>If you want an outsider for this, you will have to invent one."</p>
    <div class="ref">Fictional record. Background: Joshua 6:23 (Rahab's household kept outside the camp).</div>`
},
{
  id:"j08joshua", stage:0, kind:"Statement", title:"Joshua's Charge to the Camp",
  sub:"Given after the defeat at Ai",
  prev:"“One man. It will end with one man, and he will be brought out by name.”",
  x:40, y:76, rot:-5, w:210,
  body:`
    <div class="doc-body">
      <p>Joshua tore his clothes and lay on his face before the ark until evening, and the elders with him. Then he stood up and spoke to the camp.</p>
      <p>"Something under the ban is in the middle of Israel. That is why you cannot stand in front of your enemies. You will not be able to stand until you take it out from among you.</p>
      <p>So sanctify yourselves for tomorrow. In the morning you will come forward <b>by your tribes</b>. The tribe that is taken shall come forward <b>by clans</b>. The clan that is taken shall come forward <b>by households</b>. The household that is taken shall come forward <b>man by man</b>.</p>
      <p>And <b>the one man who is taken</b> — he and everything that belongs to him — shall answer for it. <b>One man.</b> It will end with one man, and he will be brought out by name."</p>
      <div class="sig">Joshua son of Nun</div>
    </div>
    <p class="margin-note">Note what Joshua does <i>not</i> say. He does not say a tribe has betrayed Israel, or a clan, or a family. He says the enquiry will end on a single person — and he says it before the enquiry has begun.</p>
    <div class="ref">Background: Joshua 7:6–15.</div>`
},
{
  id:"j08protocol", stage:0, notEvidence:true, kind:"Bureau note", title:"The Enquiry Protocol",
  sub:"How an enquiry of this kind is run",
  prev:"Four rounds. Twelve tribes down to one man.",
  x:64, y:78, rot:2, w:200,
  body:`
    <p>The Bureau keeps a note on the procedure, because it turns up in several files of this period and students of the archive routinely get it wrong.</p>
    <h4>The four rounds</h4>
    <table class="ledger">
      <tr><th>Round</th><th>Who comes forward</th><th>How many groups</th></tr>
      <tr><td>1</td><td>The whole nation, by <b>tribe</b></td><td>twelve</td></tr>
      <tr><td>2</td><td>The taken tribe, by <b>clan</b></td><td>the clans of one tribe</td></tr>
      <tr><td>3</td><td>The taken clan, by <b>household</b></td><td>the households of one clan</td></tr>
      <tr><td>4</td><td>The taken household, <b>man by man</b></td><td>the men of one household</td></tr>
    </table>
    <p>Four rounds. No more and no fewer. Each round narrows the field by one level, and the fourth round ends on an individual.</p>
    <h4>What the Bureau insists on</h4>
    <p>A result that is only "the lot fell here" proves nothing to an investigator. So in this file <b>every round is checked against a written record</b> — a duty roll, a carrying list, a search report — and a round is only accepted when the paperwork agrees with it.</p>
    <p class="margin-note">The enquiry itself becomes available once Field Chest B is open. You will run all four rounds yourself.</p>
    <div class="ref">Procedure as described in Joshua 7:14.</div>`
},
{
  id:"j08field", stage:0, kind:"Plan", title:"The Field Before Ai",
  sub:"The ridge, the pass and the line of the rout", thumb:"j08field",
  prev:"Where the line broke, and how far it ran before it stopped.",
  x:14, y:44, rot:2, w:216,
  body:`
    <div class="plate">${SVG.j08field}<div class="cap">Click the plan to enlarge it.</div></div>
    <h4>What the plan tells you</h4>
    <ul>
      <li><b>Ai</b> sits on a ridge above a broad valley, with one narrow rocky pass up to the gate. Steep broken ground on both sides of the pass.</li>
      <li>The dashed line is the Israelite advance: up the valley and into the pass, in good order, as far as open ground below the gate.</li>
      <li>The second dashed line is the same route <b>running back on itself</b> — the rout. It begins <b>below</b> the gate, not at it. The line turned before it reached the town.</li>
      <li>The dead lie along the slope of the retreat, down to the quarries. Almost none lie in front of the gate.</li>
    </ul>
    <p class="margin-note">Where the dead fall tells you where the battle was lost. These men did not die fighting for the gate. They died running away from a fight that had not started.</p>
    <div class="ref">Background: Joshua 7:4–5. The second, successful attack on Ai is Joshua 8:1–29.</div>`
},

/* ---------------- STAGE 1 — released by the numbers lock ---------------- */
{
  id:"j08rolls", stage:1, kind:"Duty roll", title:"The Jericho Duty Rolls",
  sub:"Field Chest B · who stood where when the city fell",
  prev:"Only one tribe was inside the walls. Only one of its clans held the treasure houses.",
  x:28, y:26, rot:-3, w:214,
  body:`
    <p>When Jericho fell, the army did not all go in. Most divisions held the ring outside the walls. Two rolls survive from that day.</p>
    <h4>Roll 1 — divisions posted <i>inside</i> the walls</h4>
    <table class="ledger">
      <tr><th>Tribe</th><th>Posted</th></tr>
      <tr><td>Reuben, Simeon, Levi, Dan, Naphtali, Gad, Asher, Issachar, Zebulun, Ephraim, Manasseh</td><td>the ring outside the walls</td></tr>
      <tr><td><b>Judah</b></td><td><b>inside the city — the only tribe within the walls</b></td></tr>
    </table>
    <h4>Roll 2 — quarters of the city, by clan of Judah</h4>
    <table class="ledger">
      <tr><th>Clan</th><th>Quarter held</th><th>What was in it</th></tr>
      <tr><td>Shelanites</td><td>north gate</td><td>the gate and its towers</td></tr>
      <tr><td>Perezites</td><td>east wall</td><td>dwellings, the cistern</td></tr>
      <tr><td><b>Zerahites</b></td><td><b>western quarter</b></td><td><b>the treasure houses</b></td></tr>
      <tr><td>Hezronites</td><td>southern approach</td><td>open ground, sheepfolds</td></tr>
      <tr><td>Hamulites</td><td>outside, west road</td><td>—</td></tr>
    </table>
    <p class="margin-note">Eleven tribes never entered the city. Four of Judah's five clans never stood anywhere near the silver.</p>
    <div class="ref">Fictional duty roll. The clans of Judah are those named in Numbers 26:20–21; Achan's line is given in Joshua 7:1, 17–18.</div>`
},
{
  id:"j08carry", stage:1, kind:"Treasury record", title:"The Carrying Parties",
  sub:"Field Chest B · who lifted the metal to the treasury",
  prev:"One household of the Zerahites carried the metal. Nobody else touched it.",
  x:58, y:24, rot:4, w:206,
  body:`
    <p>The clerks record which household of the western quarter was found for each duty on the day the treasure houses were emptied.</p>
    <table class="ledger">
      <tr><th>Household of the Zerahites</th><th>Duty that day</th></tr>
      <tr><td>Household of Ethan</td><td>burning detail, eastern dwellings</td></tr>
      <tr><td>Household of Heman</td><td>ash-sifting and weighing at the pit</td></tr>
      <tr><td>Household of Calcol</td><td>escort on the road, outside the walls</td></tr>
      <tr><td><b>Household of Zabdi</b></td><td><b>carrying party — the treasure houses to the treasury</b></td></tr>
      <tr><td>Household of Dara</td><td>water and rations, camp side</td></tr>
    </table>
    <h4>Clerks' note</h4>
    <p>"The carrying party is the only body of men that handled silver, gold and cloth together in the same hour, unwatched between the doorway of a treasure house and the weighing table. Everyone else that day handled one thing or none.</p>
    <p>We say again what we said in the inventory: the shortfall is <b>one man's carry</b>. It is not a household's carry, and it is certainly not a clan's."</p>
    <div class="ref">Fictional record. The names are Zerahite names from 1 Chronicles 2:6; Zabdi is Achan's grandfather in Joshua 7:1.</div>`
},
{
  id:"j08tent", stage:1, kind:"Search report", title:"The Tent Search Report",
  sub:"Field Chest B · the men of the household of Zabdi",
  prev:"Five tents searched. Four floors undisturbed. One dug and filled in again.",
  x:80, y:44, rot:-6, w:206,
  body:`
    <p>Every tent belonging to the household of Zabdi was searched: the ground inside the doorway probed with a spear, and the floor turned where the earth had been disturbed.</p>
    <table class="ledger">
      <tr><th>Man of the household</th><th>Tent floor</th><th>Found</th></tr>
      <tr><td>Jamin son of Zabdi</td><td>packed hard, undisturbed</td><td>nothing</td></tr>
      <tr><td>Carmi son of Zabdi</td><td>packed hard, undisturbed</td><td>nothing</td></tr>
      <tr><td>Zimri son of Zabdi</td><td>packed hard, undisturbed</td><td>nothing</td></tr>
      <tr><td>Nadab son of Carmi</td><td>packed hard, undisturbed</td><td>nothing</td></tr>
      <tr><td><b>Achan son of Carmi</b></td><td><b>dug out and filled in again, earth still loose</b></td><td><b>a garment, silver, and a bar of gold, in the ground beneath</b></td></tr>
    </table>
    <h4>The searchers' note</h4>
    <p>"The hole was inside the doorway, under where a man sleeps. The silver was <b>underneath</b> the garment, which tells you the order things went into the ground: cloth first, then metal on top of it, then earth. That is one person packing a hole in the dark, not a family sharing out a haul.</p>
    <p>Nobody else's floor had been touched. Not his father's. Not his brothers'."</p>
    <div class="ref">Background: Joshua 7:22–23.</div>`
},
{
  id:"j08enquiry", stage:1, kind:"Court record", title:"Record of the Enquiry",
  sub:"Field Chest B · the four rounds, as they were run",
  prev:"Twelve tribes, five clans, five households, five men. It ended on one.",
  x:46, y:62, rot:3, w:212,
  body:`
    <p>The enquiry was held in the morning, in front of the whole camp, exactly as Joshua had set it out.</p>
    <table class="ledger">
      <tr><th>Round</th><th>Field</th><th>Result</th><th>Checked against</th></tr>
      <tr><td>1</td><td>twelve tribes</td><td><b>Judah</b> taken</td><td>the Jericho duty rolls</td></tr>
      <tr><td>2</td><td>the clans of Judah</td><td><b>the Zerahites</b> taken</td><td>the quarters roll</td></tr>
      <tr><td>3</td><td>the households of the Zerahites</td><td><b>the household of Zabdi</b> taken</td><td>the carrying parties</td></tr>
      <tr><td>4</td><td>the men of that household</td><td><b>one man</b> taken</td><td>the tent search report</td></tr>
    </table>
    <h4>Why this record kills the idea of a conspiracy</h4>
    <p>Read the shape of it. Each round eliminates everybody except one group, and the paperwork agrees with the result every single time. <b>At no point does the enquiry stop on a group and stay there.</b> It goes all the way down.</p>
    <p>If a clan had been in it together, round three would have found several households carrying, several floors disturbed, and metal spread through several tents. It found one duty, one tent and one hole in the ground. Four brothers and a father slept a few paces away with nothing under their floors at all.</p>
    <p class="margin-note">A conspiracy leaves a wide trail. This one is a single set of footprints.</p>
    <div class="ref">Background: Joshua 7:16–18.</div>`
},

/* ---------------- STAGE 2 — released by the keyword lock ---------------- */
{
  id:"j08confession", stage:2, kind:"Statement", title:"The Confession",
  sub:"Sealed Pouch C · taken in front of the camp",
  prev:"“I saw. I coveted. I took. I hid.”",
  x:26, y:28, rot:-3, w:208,
  body:`
    <div class="doc-body">
      <p>Joshua said to him: "My son, give glory to the God of Israel and make confession to him. Tell me now what you have done. Do not hide it from me."</p>
      <div class="stamp">STATEMENT · TAKEN IN THE CAMP</div>
      <p style="font-size:18px">"It is true. I have sinned against the God of Israel, and this is what I did.</p>
      <p style="font-size:18px">When I saw among the spoil <b>a beautiful robe from Shinar</b>, and <b>two hundred shekels of silver</b>, and <b>a bar of gold weighing fifty shekels</b>, then I coveted them and took them. They are hidden in the ground inside my tent, with the silver underneath."</p>
      <h4>What the Bureau notices about this statement</h4>
      <ul>
        <li>It is four verbs in order: <b>I saw, I coveted, I took, I hid.</b> Nothing about need, nothing about orders, nothing about anybody else.</li>
        <li>He names three things, and the treasury's count was short in exactly three ways.</li>
        <li>He says where they are before the searchers say what they found. The account was true before it was checked.</li>
        <li><b>He does not name a single accomplice</b> — not under questioning, and not at the end.</li>
      </ul>
      <div class="sig">Achan son of Carmi, of the Zerahites, of the tribe of Judah</div>
    </div>
    <div class="ref">Background: Joshua 7:19–21.</div>`
},
{
  id:"j08cost", stage:2, kind:"Follow-up file", title:"What It Cost",
  sub:"Sealed Pouch C · the Valley of Achor",
  prev:"Thirty-six dead at Ai. Then a valley that took his name.",
  x:56, y:30, rot:4, w:206,
  body:`
    <p>The Bureau sets out the cost plainly, because the point of the file is not the theft.</p>
    <table class="ledger">
      <tr><th>Cost</th><th>Record</th></tr>
      <tr><td>Value of what was taken</td><td>a robe, 200 shekels of silver, a bar of gold of 50 shekels</td></tr>
      <tr><td>Israelites killed at Ai</td><td><b>36</b></td></tr>
      <tr><td>Effect on the army</td><td>"the hearts of the people melted and became as water"</td></tr>
      <tr><td>Days the advance was stopped</td><td>the whole enquiry, and the mourning before it</td></tr>
      <tr><td>End of the matter</td><td>Achan, and everything he owned, taken out to a valley north of Jericho</td></tr>
      <tr><td>The name given to that place</td><td><b>the Valley of Achor</b> — "the valley of trouble"</td></tr>
    </table>
    <h4>The name</h4>
    <p>The warning attached to the ban had used that same word: keep from the banned things, <b>or you will bring trouble on the camp</b>. The valley was named for what one man's hand had cost everybody else.</p>
    <p>Centuries later a prophet picked the name up again and turned it round, promising a day when the Valley of Trouble would be made <b>a door of hope</b>. The archive keeps that note attached to this file on purpose.</p>
    <div class="ref">Background: Joshua 7:24–26 · Hosea 2:15.</div>`
},
{
  id:"j08why", stage:2, kind:"Bureau analysis", title:"Why One Man's Theft Counted Against Everybody",
  sub:"Sealed Pouch C",
  prev:"The hardest question in the file, and the one it is really about.",
  x:78, y:60, rot:-5, w:206,
  body:`
    <p>Students of this file almost always arrive at the same objection, and it is a good one: <b>why should thirty-six men die for something one man did?</b> The Bureau does not think that objection should be talked out of anybody. Here is what the record actually says.</p>
    <h4>1 · The order said so in advance</h4>
    <p>The ban was not "do not steal, or you will be punished". It was "do not take, <b>or you will make the camp itself a thing under the ban</b>". Everybody heard it. The consequence was published before the crime.</p>
    <h4>2 · Israel is described as one body, not a collection of individuals</h4>
    <p>The account does not say "Achan sinned". It says <b>"the children of Israel committed a trespass"</b> — and then names the man. In this period a camp on the march is treated the way we would treat a crew on a ship: one man's act puts everyone in the water.</p>
    <h4>3 · The theft was hidden, and hidden things spread</h4>
    <p>He buried it and stood in the muster the next morning as though nothing had happened. The army went to Ai believing itself whole. It was not the silver that beat them; it was going into a fight with something rotten in the middle of them that nobody would name.</p>
    <h4>4 · What the file does <i>not</i> claim</h4>
    <p>It does not claim the thirty-six deserved it, and it does not tidy the horror of it away. It says something harder: <b>that private choices are not private</b>, and that a group can be genuinely damaged by what one of its members does in the dark.</p>
    <p class="margin-note">Ask your team the question directly. It is the real work of this case, and there is no code to type for it.</p>
    <div class="ref">Background: Joshua 7:1, 11–12 · Joshua 22:20 · 1 Corinthians 12:26.</div>`
},
{
  id:"j08after", stage:2, kind:"Follow-up file", title:"The Second Attack on Ai",
  sub:"Sealed Pouch C · the control that proves it",
  prev:"Same town. Same army. Same scouts' numbers. Completely different result.",
  x:44, y:76, rot:2, w:210,
  body:`
    <p>This page is in the file because it is the closest thing an ancient case gets to a controlled experiment.</p>
    <table class="ledger">
      <tr><th></th><th>First attack</th><th>Second attack</th></tr>
      <tr><td>The town</td><td>Ai</td><td>Ai — unchanged</td></tr>
      <tr><td>The defenders</td><td>few</td><td>few — and now confident</td></tr>
      <tr><td>The commander</td><td>Joshua</td><td>Joshua</td></tr>
      <tr><td>The intelligence</td><td>the scouts' report</td><td><b>the same scouts' report</b></td></tr>
      <tr><td>What had changed</td><td>—</td><td><b>the banned goods were out of the camp</b></td></tr>
      <tr><td>Result</td><td>rout, 36 dead</td><td><b>the town taken</b></td></tr>
    </table>
    <h4>What that comparison rules out</h4>
    <p>If Ai had simply been stronger than the scouts said, the second attack should have failed too — the scouts' numbers had not changed. If the plan had been bad, a similar plan should have failed again; Joshua used an ambush the second time, but he was fighting the same few men with the same army. <b>The only variable that changed between the defeat and the victory was what was buried under one tent floor.</b></p>
    <p class="margin-note">Two attacks. One difference. That is as close to proof as this archive ever gets.</p>
    <div class="ref">Background: Joshua 8:1–29.</div>`
}
];

const JM08_THEORIES = [
  {
    id:"stronger",
    title:"1. Ai was simply stronger than the scouts thought",
    claim:"Scouts get it wrong. The town had more fighting men in it than anybody realised, and three thousand was never going to be enough.",
    answer:"j08scouts",
    verdict:"The scouts' report kills it. They went up, looked at Ai, and reported <i>few</i> men — recommending two or three thousand and specifically advising against sending the whole army. Those numbers were never revised, and the second attack later took the town using exactly the same intelligence. If the scouts had been wrong about Ai, they would have been wrong the second time too."
  },
  {
    id:"plan",
    title:"2. The commanders' plan was bad",
    claim:"A frontal attack up a narrow pass against a ridge town is poor generalship. They were beaten tactically.",
    answer:"j08battle",
    verdict:"The battle report kills it. The line gave way <b>before the two forces met</b>, and the dead lie along the slope of the retreat rather than in front of the gate. This is not a plan that failed on contact — there was no contact. The senior officer's own words are that they stopped being an army before anyone reached them."
  },
  {
    id:"outsider",
    title:"3. An outsider or a camp follower looted Jericho",
    claim:"Armies attract hangers-on. Somebody who was not under the ban helped themselves in the confusion.",
    answer:"j08muster",
    verdict:"The camp muster kills it. There were no traders, no camp followers and no outsiders in the camp, nobody entered or left that night, and the only survivors of Jericho were quartered outside under guard. The spoil was watched from the city gate to the weighing table with three signed guard changes. Whoever carried it off was entitled to be holding it."
  },
  {
    id:"burned",
    title:"4. The metal burned up in the fire and the count is simply wrong",
    claim:"Jericho was burned. Ledgers written in the middle of a sack are rough. There may be no theft here at all.",
    answer:"j08treasury",
    verdict:"The treasury inventory kills it. Metal does not vanish in a fire — it melts and stays in the ash, and every quarter's ash was sifted and weighed. There are exactly three shortfalls, not a scatter of rounding losses, and they add up to <b>one man's carry</b>: silver, gold and a single garment. That is a shape, not an error."
  },
  {
    id:"clan",
    title:"5. A whole clan was in it together",
    claim:"One man could not have moved that much metal past that many guards alone. This was organised, and the family closed ranks.",
    answer:"j08enquiry",
    verdict:"The record of the enquiry kills it. Every round narrows to a single group and the paperwork agrees each time — the enquiry never stops at a group, it goes all the way down to a person. A conspiracy would have shown several households on the carrying list and several disturbed floors. The searchers found one duty, one tent and one hole, with a father and four brothers sleeping a few paces away over undisturbed ground."
  }
];

const JM08_LOCKS = [
  {
    id:"l1", type:"number", code:"3341", len:4,
    wrong:"Not that. Each digit comes from a different document — one of the four is wrong.",
    name:"Field Chest B — the enquiry papers",
    blurb:"A four-digit lock. Each digit answers one question, and each question is answered by a different document already on your desk. Every answer is a single digit.",
    questions:[
      "In thousands, how many men did the scouts say would be enough to take Ai?",
      "How many separate shortfalls does the treasury inventory record?",
      "How many rounds does an enquiry of this kind have?",
      "How many men does Joshua say the enquiry will end with?"
    ],
    hints:[
      "The questions are in order: question one gives the first digit. Every answer is a single digit.",
      "Question 1 is the scouts' report. Question 2 is the treasury inventory. Question 3 is the Bureau's note on the enquiry protocol. Question 4 is Joshua's charge to the camp.",
      "Three thousand men. Three shortfalls — silver, gold and one garment. Four rounds: tribe, clan, household, man. And Joshua says it plainly: one man."
    ],
    reward:"Field Chest B is open: the Jericho duty rolls, the carrying parties, the tent search report and the record of the enquiry are now on the desk. The ⚖ Enquiry button in the top bar is live."
  },
  {
    id:"l2", type:"word", code:"ACHAN", len:5,
    wrong:"Not that. Run the enquiry itself — the ⚖ button in the top bar. The name you are looking for is the one left standing at the end of round four.",
    name:"Sealed Pouch C — the name",
    blurb:"A five-letter keyword. It is not written anywhere in the file you have. You get it by running the enquiry yourself: four rounds, twelve tribes down to one man, each round settled by a document rather than by guessing.",
    questions:[
      "Open the ⚖ Enquiry from the top bar.",
      "Round by round, read the record that settles that round and choose the group it points to.",
      "Four rounds: tribe, then clan, then household, then man.",
      "The name still standing at the end of round four is the keyword."
    ],
    hints:[
      "Round 1 is settled by the Jericho duty rolls — only one tribe was inside the walls at all.",
      "Round 2 is the quarters roll on the same document; round 3 is the carrying parties; round 4 is the tent search report.",
      "Judah → the Zerahites → the household of Zabdi → the man whose tent floor had been dug out and filled in again."
    ],
    reward:"Sealed Pouch C is open: the confession, what it cost, the Bureau's analysis of why one man's theft counted against everybody, and the record of the second attack on Ai are now on the desk."
  }
];

const JM08_LADDER = {
  title:"The Enquiry",
  blurb:"Four rounds. Twelve tribes down to one man. Each round is settled by a document in the file — read it, then choose the group it points to. Guessing will cost you nothing but time, and the file will tell you so.",
  keyword:"ACHAN",
  strip:"The name still standing at the end",
  rounds:[
    {
      n:1, field:"The tribes of Israel", doc:"The Jericho Duty Rolls",
      clue:"Only one tribe was posted <b>inside the walls</b> of Jericho when it fell. The other eleven divisions held the ring outside and never entered the city at all.",
      options:["REUBEN","SIMEON","JUDAH","DAN","EPHRAIM","MANASSEH","BENJAMIN","NAPHTALI","GAD","ASHER","ISSACHAR","ZEBULUN"],
      answer:"JUDAH",
      wrong:"That division held the ring outside the walls. Check roll 1 again: which tribe was inside the city?",
      after:"Judah is taken. Judah was the only tribe inside the walls, so it is the only tribe that could have handled anything that came out of them."
    },
    {
      n:2, field:"The clans of Judah", doc:"The Jericho Duty Rolls — roll 2, the quarters",
      clue:"Judah's five clans each held a different quarter of the city. Only one quarter contained <b>the treasure houses</b>.",
      options:["SHELANITES","PEREZITES","ZERAHITES","HEZRONITES","HAMULITES"],
      answer:"ZERAHITES",
      wrong:"That clan held a quarter with no silver in it — a gate, dwellings, sheepfolds, or the road outside. Which quarter held the treasure houses?",
      after:"The Zerahites are taken. They held the western quarter, and the treasure houses stood in it."
    },
    {
      n:3, field:"The households of the Zerahites", doc:"The Carrying Parties",
      clue:"On the day the treasure houses were emptied, four households were given duties that touched one thing or none. One household was the <b>carrying party</b> — the only body of men who handled silver, gold and cloth together, unwatched between the doorway and the weighing table.",
      options:["ETHAN","HEMAN","CALCOL","ZABDI","DARA"],
      answer:"ZABDI",
      wrong:"That household was burning, sifting ash, escorting on the road or drawing water. Which one carried the metal to the treasury?",
      after:"The household of Zabdi is taken. They carried the spoil, and they are the only people who had all three kinds of missing goods in their hands at once."
    },
    {
      n:4, field:"The men of the household of Zabdi", doc:"The Tent Search Report",
      clue:"Five tents were searched and the floor of each was probed. Four floors were packed hard and undisturbed. One had been <b>dug out and filled in again</b>, the earth still loose.",
      options:["JAMIN","CARMI","ZIMRI","NADAB","ACHAN"],
      answer:"ACHAN",
      wrong:"Nothing was found under that man's floor — it had not been touched. Which tent had been dug and filled in again?",
      after:"One man is taken: Achan son of Carmi, of the household of Zabdi, of the Zerahites, of the tribe of Judah. Under his tent floor: a garment, silver, and a bar of gold."
    }
  ],
  done:"The enquiry has ended where Joshua said it would — on one man, by name. That name is the keyword for Sealed Pouch C."
};

const JM08_VERDICTS = [
  {id:"stronger", text:"Ai was stronger than the scouts realised, and three thousand men were never enough."},
  {id:"plan",     text:"The commanders' plan was bad and Israel was outfought on the ground."},
  {id:"outsider", text:"An outsider or camp follower looted Jericho while the city was burning."},
  {id:"burned",   text:"Nothing was stolen — the metal burned up and the treasury count is simply wrong."},
  {id:"clan",     text:"A whole clan of Judah was in it together and closed ranks afterwards."},
  {id:"achan",    text:"One man, acting alone, broke the ban at Jericho: Achan of the Zerahites took a robe, two hundred shekels of silver and a bar of gold and buried them under his tent — and the defeat at Ai followed from it."}
];

const CASE_JM08 = {
  id:"jm08", code:"CASE JM-08", title:"The Stolen Plunder",
  period:"Jericho and Ai · c. 1400 BC", colour:"#6b4a2a", poster:"poster_jm08",
  teaser:"Jericho fell in a week. Days later, a village stopped the same army dead and thirty-six men died running. Something is missing from the treasury, and the shortfall is exactly the size of one pair of hands.",
  introSub:"An army that walked through a city has been beaten by a village.",
  items:JM08_ITEMS, theories:JM08_THEORIES, locks:JM08_LOCKS, verdicts:JM08_VERDICTS,
  ladder:JM08_LADDER,
  correct:"achan",
  boardTitle:"Why the Army Broke",
  boardIntro:"Five explanations have been offered for the defeat at Ai. For each one, pin the <b>single</b> document that makes it impossible. When all five are closed, the accusation form opens.",
  accusationIntro:"You have thrown out every military explanation and every accidental one. What is left is not a story about an army at all. State what the file will actually support.",
  debrief:{
    lead:"Every ordinary explanation has been closed: the enemy was not stronger, the plan did not fail on contact, no outsider was there to loot, the metal did not burn away, and no clan closed ranks. What is left is one man, one carry, and one hole in the ground — and an army that could not stand up because of it. The second attack on Ai, with the same town, the same scouts and the same commander, took the place easily once the banned goods were out of the camp.",
    questions:[
      "Joshua's first assumption was that something had gone wrong with the army. Why is that the natural first assumption, and what did it cost him to hold onto it?",
      "The treasury clerks say the shortfall was 'one man's carry'. What is the difference between evidence that tells you <i>who</i> and evidence that tells you <i>what kind of person</i>?",
      "Thirty-six men died for a theft they knew nothing about. Is it fair that a group suffers for what one member does in secret? Argue it both ways before you decide.",
      "Achan says: 'I saw, I coveted, I took, I hid.' Where else in the Bible does that same order of four steps turn up, and what does the pattern suggest about how wrongdoing usually works?"
    ],
    refs:"Joshua 6:17–19 · Joshua 7:1–26 · Joshua 8:1–29 · Numbers 26:20–21 · Hosea 2:15 · 1 Corinthians 12:26"
  },
  teacher:{
    answers:"Lock 1 code <b>3341</b> (3 thousand men recommended by the scouts · 3 shortfalls in the treasury inventory · 4 rounds in the enquiry protocol · 1 man, as Joshua says). Lock 2 keyword <b>ACHAN</b>, obtained by running the ⚖ Enquiry: round 1 Judah (the only tribe inside the walls), round 2 the Zerahites (the quarter holding the treasure houses), round 3 the household of Zabdi (the carrying party), round 4 Achan (the only disturbed tent floor).",
    pairs:"Ai was stronger → The Scouts' Report on Ai; bad plan → Battle Report, the Rout at Ai; an outsider looted → The Camp Muster; the metal burned → Treasury Inventory; a whole clan → Record of the Enquiry.",
    conclusion:"One man, acting alone, took a robe, two hundred shekels of silver and a bar of gold from Jericho and buried them under his tent floor. The defeat at Ai followed from it, and the second attack on the same town succeeded once the goods were out of the camp.",
    prompts:"\"Where are the dead lying — in front of the gate, or on the slope behind?\" · \"Metal doesn't burn away. So where did it go?\" · \"If a whole family were in this, how many tent floors should have been dug?\" · \"Why does Joshua say 'one man' before the enquiry has even started?\"",
    extra:"The strongest discussion in this case is the fourth debrief question, and it is worth protecting time for. Do not resolve it too quickly in either direction — the file deliberately argues both sides on the 'Why one man's theft counted against everybody' page. Sensitivity note: Joshua 7:24–26 records Achan's household being taken out with him, and the printed pack keeps this at the level of 'he and everything that belonged to him'. If a student raises it directly, the honest answer is that the text says it, that it is hard, and that the archive does not tidy it away."
  }
};

registerCase(CASE_JM08);
