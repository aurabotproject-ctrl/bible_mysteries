"use strict";
/* ============================================================
   CASE JM-06 — THE WALLS
   Jericho, about 1400 BC.  Source: Joshua 6, with Joshua 2.
   ============================================================ */

SVG.j06city = `<svg viewBox="0 0 1536 1024" xmlns="http://www.w3.org/2000/svg"><image href="__IMG_j06city__" x="0" y="0" width="1536" height="1024"/><text x="1337" y="102" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="26" font-weight="600" fill="#4a3520" textLength="150" lengthAdjust="spacingAndGlyphs">JERICHO</text><text x="1337" y="127" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="13" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".92" textLength="214" lengthAdjust="spacingAndGlyphs">walled, and on its mound</text><text x="219" y="299" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="25" font-weight="600" fill="#4a3520" textLength="158" lengthAdjust="spacingAndGlyphs">THE PLAIN</text><text x="219" y="324" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="13" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".92" textLength="222" lengthAdjust="spacingAndGlyphs">open ground, no siege works</text><text x="437" y="887" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="20" font-weight="600" fill="#4a3520" textLength="208" lengthAdjust="spacingAndGlyphs">THE LINE OF MARCH</text><text x="437" y="912" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="13" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".92" textLength="180" lengthAdjust="spacingAndGlyphs">once round, in silence</text></svg>`;
SVG.j06section = `<svg viewBox="0 0 1536 1024" xmlns="http://www.w3.org/2000/svg"><image href="__IMG_j06section__" x="0" y="0" width="1536" height="1024"/><text x="714" y="106" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="26" font-weight="600" fill="#4a3520" textLength="146" lengthAdjust="spacingAndGlyphs">THE WALL</text><text x="714" y="131" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="13" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".92" textLength="236" lengthAdjust="spacingAndGlyphs">mud brick on a stone base</text><text x="1063" y="478" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="23" font-weight="600" fill="#4a3520" textLength="236" lengthAdjust="spacingAndGlyphs">FALLEN OUTWARD</text><text x="1063" y="503" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="13" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".92" textLength="248" lengthAdjust="spacingAndGlyphs">away from the city, not into it</text><text x="1386" y="682" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="25" font-weight="600" fill="#4a3520" textLength="152" lengthAdjust="spacingAndGlyphs">THE RUBBLE</text><text x="1386" y="707" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="13" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".92" textLength="204" lengthAdjust="spacingAndGlyphs">a ramp you could walk up</text></svg>`;
SVG.j06ruins = `<svg viewBox="0 0 1536 1024" xmlns="http://www.w3.org/2000/svg"><image href="__IMG_j06ruins__" x="0" y="0" width="1536" height="1024"/><text x="1322" y="119" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="19" font-weight="600" fill="#4a3520" textLength="228" lengthAdjust="spacingAndGlyphs">ONE SECTION STANDING</text><text x="1322" y="144" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="13" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".92" textLength="214" lengthAdjust="spacingAndGlyphs">with a house built into it</text><text x="183" y="776" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="19" font-weight="600" fill="#4a3520" textLength="230" lengthAdjust="spacingAndGlyphs">THE RING OF COLLAPSE</text><text x="183" y="801" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="13" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".92" textLength="196" lengthAdjust="spacingAndGlyphs">flat outward, all around</text><text x="976" y="871" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="25" font-weight="600" fill="#4a3520" textLength="166" lengthAdjust="spacingAndGlyphs">THE CIRCUIT</text><text x="976" y="896" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="13" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".92" textLength="222" lengthAdjust="spacingAndGlyphs">the line the army walked</text></svg>`;

const JM06_ITEMS = [

/* ---------------- STAGE 0 ---------------- */
{
  id:"j06letter", stage:0, notEvidence:true, kind:"Briefing", title:"Letter from the Case Supervisor",
  sub:"The Bible Investigation Bureau · Department of Unsolved Antiquities",
  prev:"A walled city taken by an army that never touched the wall.",
  x:22, y:26, rot:-3, w:216,
  body:`
    <p><b>To the investigating team,</b></p>
    <p>Jericho is a walled town on a mound above the Jordan plain, and it is the first thing standing between an incoming people and the country they mean to settle. Taking a place like this normally means months: siege works, starvation, ladders, and a great many dead on both sides.</p>
    <p>What the record describes instead is this. <b>For six days the army walked once around the city and went back to camp.</b> They did not attack, did not shout, did not so much as speak. On the seventh day they walked round it seven times, made one noise, and the wall came down.</p>
    <p>Five explanations have been offered for what actually brought that wall down. Four of them are the sensible ones an engineer would reach for. Your job is to close the four the file will not carry.</p>
    <h4>Your task</h4>
    <p>This case is unusual in one respect: <b>the physical evidence is unusually good.</b> There is a site, there is rubble, and rubble is honest — it lies where it fell and it does not change its story. Read the section drawing and the plan of the ruins carefully, because between them they decide almost everything.</p>
    <h4>How the file works</h4>
    <ul>
      <li>Everything on the desk now is yours. Read all of it before deciding anything.</li>
      <li>Two parts of the file are <b>locked</b>. The codes are hidden in the documents you already have.</li>
      <li>The second lock is opened with the <b>hypothesis table</b> — the 📊 button in the top bar, once the first lock is open.</li>
      <li>When you have everything, go to the <b>Pinboard</b>.</li>
    </ul>
    <p class="margin-note">Walls fall down. That is not the strange part. Which way they fall, and what is left standing when they do — that is the strange part.</p>
    <div class="sig">Luke</div>
    <div class="small" style="color:#5b4a35">Case Supervisor</div>
    <div class="ref">This case is reconstructed from Joshua 6, with background from Joshua 2.</div>`
},
{
  id:"j06order", stage:0, kind:"Standing order", title:"The Order of March",
  sub:"Given before the first circuit",
  prev:"Once a day for six days. Seven times on the seventh. No talking.",
  x:52, y:22, rot:3, w:212,
  body:`
    <p>The instructions were given in full before a single man moved, which is why the Bureau can check what happened against what was ordered.</p>
    <div class="stamp">ORDER OF MARCH · JERICHO</div>
    <table class="ledger">
      <tr><th>Instruction</th><th>Detail</th></tr>
      <tr><td>Circuits per day, days one to six</td><td class="n"><b>1</b></td></tr>
      <tr><td>Circuits on the seventh day</td><td class="n"><b>7</b></td></tr>
      <tr><td>Order of the column</td><td>Armed men · seven priests with trumpets · the ark · the rear guard</td></tr>
      <tr><td>Speech</td><td><b>None.</b> Not a word, not a shout, no sound from the mouth</td></tr>
      <tr><td>Weapons to be used against the wall</td><td class="n"><b>none</b></td></tr>
      <tr><td>On the seventh circuit of the seventh day</td><td>A long blast, and then the whole people to shout</td></tr>
    </table>
    <h4>What an investigator should notice</h4>
    <p>Every element of this order is <b>the opposite of a siege</b>. No engines, no ladders, no ramps, no attempt on the gate, and a strict rule of silence that makes any concealed work impossible — you cannot dig, cut or hammer quietly enough to hide it from a city watching you from the wall above.</p>
    <p class="margin-note">Count the circuits on the last day. That number appears twice in this file and once in the lock.</p>
    <div class="ref">Background: Joshua 6:3–5.</div>`
},
{
  id:"j06log", stage:0, kind:"Field log", title:"The Marching Log",
  sub:"Day by day, as the officers recorded it",
  prev:"Six days. One circuit each. Nothing happened at all.",
  x:78, y:26, rot:-4, w:208,
  body:`
    <p>The dullest document in the file, and the one that closes the most doors.</p>
    <table class="ledger">
      <tr><th>Day</th><th>Circuits</th><th>Contact</th><th>Work done at the wall</th></tr>
      <tr><td>1</td><td class="n">1</td><td>none</td><td>none</td></tr>
      <tr><td>2</td><td class="n">1</td><td>none</td><td>none</td></tr>
      <tr><td>3</td><td class="n">1</td><td>none</td><td>none</td></tr>
      <tr><td>4</td><td class="n">1</td><td>none</td><td>none</td></tr>
      <tr><td>5</td><td class="n">1</td><td>none</td><td>none</td></tr>
      <tr><td>6</td><td class="n">1</td><td>none</td><td>none</td></tr>
      <tr><td><b>7</b></td><td class="n"><b>7</b></td><td>none until the wall fell</td><td>none</td></tr>
    </table>
    <h4>The recording officer's note</h4>
    <p>"<b>Six days of once around, and I have nothing to write in the third column.</b> Not an arrow loosed, not a stone thrown, not a man lost on either side. The city watched us from the wall every morning and we walked, and then we went back to camp and ate.</p>
    <p>I have been asked whether men could have been left behind at the wall each day. They could not. We went out counted and we came back counted, and the whole circuit is in plain view of the city above it."</p>
    <div class="ref">Background: Joshua 6:11–15.</div>`
},
{
  id:"j06roster", stage:0, kind:"Procession roster", title:"The Procession Roster",
  sub:"Who walked, in what order, carrying what",
  prev:"Seven priests, seven trumpets, and not a tool between them.",
  x:26, y:56, rot:5, w:206,
  body:`
    <p>The column's composition matters, because it is the whole of the force that was ever brought against the wall.</p>
    <table class="ledger">
      <tr><th>Position in column</th><th>Who</th><th>Carrying</th></tr>
      <tr><td>1 — front</td><td>The armed men</td><td>Weapons. Not used.</td></tr>
      <tr><td>2</td><td><b>Seven priests</b></td><td><b>Seven trumpets of rams' horns</b></td></tr>
      <tr><td>3</td><td>Priests bearing the ark</td><td>The ark of the covenant</td></tr>
      <tr><td>4 — rear</td><td>The rear guard</td><td>Weapons. Not used.</td></tr>
    </table>
    <h4>What was not in the column</h4>
    <p class="margin-note">No ladders. No battering ram. No siege tower. No picks, mattocks, levers or digging tools of any kind. No timber for shoring. Nothing that has ever brought a wall down anywhere else.</p>
    <p>Count the priests with trumpets. Seven — the same number as the circuits on the last day, which is either a coincidence or a design, and the Bureau does not believe this file contains coincidences.</p>
    <div class="ref">Background: Joshua 6:4, 6:8–9.</div>`
},
{
  id:"j06city", stage:0, kind:"Plan", title:"The City and the Plain",
  sub:"Jericho on its mound, and the ground the column walked", thumb:"j06city",
  prev:"A town on a mound, open ground all round it, and one road.",
  x:56, y:52, rot:-2, w:216,
  body:`
    <div class="plate">${SVG.j06city}<div class="cap">Click the plan to enlarge it.</div></div>
    <h4>What the plan tells you</h4>
    <ul>
      <li><b>Jericho</b> stands on a mound above the plain — a walled town, not a fortress city, but high enough that everything below it is in full view from the wall.</li>
      <li><b>The plain</b> around it is open ground: no cover, no earthworks, no siege lines, and nowhere for a working party to be out of sight.</li>
      <li><b>The line of march</b> runs right round the base of the mound. It is walkable in a morning, which is why the whole army could go round once a day and be back in camp by afternoon.</li>
      <li>There are no siege works anywhere on this plan, because none were ever built.</li>
    </ul>
    <p class="margin-note">Note the sightlines. Whatever happened to that wall, it happened in front of a city that could see every step of it.</p>
    <div class="ref">Background: Joshua 6:3 · Joshua 2:1.</div>`
},
{
  id:"j06section", stage:0, kind:"Technical plate", title:"Wall Section — How It Fell",
  sub:"Cut through the defences at the north-west", thumb:"j06section",
  prev:"The rubble lies outward, away from the city. That is the wrong direction.",
  x:80, y:56, rot:4, w:216,
  body:`
    <div class="plate">${SVG.j06section}<div class="cap">Click the section to enlarge it.</div></div>
    <p>A section drawn through the defences where the collapse is cleanest.</p>
    <table class="ledger">
      <tr><th>Feature</th><th>As found</th></tr>
      <tr><td>Construction</td><td>Mud brick on a stone base</td></tr>
      <tr><td>Direction of collapse</td><td><b>Outward</b> — away from the city, down the slope of the mound</td></tr>
      <tr><td>Form of the debris</td><td>A continuous ramp of brick from the base of the wall down to the plain</td></tr>
      <tr><td>Bricks still stacked in courses</td><td class="n"><b>none</b> — the whole height came apart</td></tr>
      <tr><td>Signs of burning <i>before</i> the collapse</td><td class="n"><b>none</b> — the burning is on top of the rubble</td></tr>
    </table>
    <h4>Why the direction is the fact of the case</h4>
    <p>Walls fall <b>inward</b>. That is what a ram does, what a mine does when the props burn through, and what an attacker wants — the debris fills the ditch and you climb in over it. It is also, incidentally, what happens when a wall is pushed from outside by anything at all.</p>
    <p>This wall went the other way. <b>It fell away from the city, all round, leaving a ramp an army could simply walk up.</b> The record says exactly that: the people went up into the city, every man straight before him.</p>
    <div class="ref">Background: Joshua 6:20 — "the wall fell down flat, so that the people went up into the city, every man straight before him".</div>`
},
{
  id:"j06ruins", stage:0, kind:"Plan", title:"Plan of the Ruins",
  sub:"The circuit of the wall, as it lies", thumb:"j06ruins",
  tour:{href:"../tours/jericho-march.html", label:"\ud83e\udd41 March around the city",
        note:"Seven laps on the circuit, a beat at a time \u2014 then the trumpets, the shout, and the ring of wall goes flat except for one house"},
  prev:"A ring of collapse all the way round — and one short piece that did not fall.",
  x:40, y:76, rot:-5, w:216,
  body:`
    <div class="plate">${SVG.j06ruins}<div class="cap">Click the plan to enlarge it.</div></div>
    <h4>What the plan tells you</h4>
    <ul>
      <li><b>The ring of collapse</b> runs the whole circuit. This is not one breach or two — it is the entire perimeter, lying outward.</li>
      <li><b>One section is still standing</b>, unbroken and upright, on the eastern side, <b>with a house built into it</b>.</li>
      <li>The gate is marked on the plan where it stood. It is discussed in its own report.</li>
      <li>Count the houses on the wall that survived. <b>One.</b> That number is part of the first lock, and it is also the strangest fact in the file.</li>
    </ul>
    <p class="margin-note">A collapse that goes all the way round and stops at one house is not a collapse behaving like a collapse. Keep that house in mind: you will need it later.</p>
    <div class="ref">Background: Joshua 6:20–22 · Joshua 2:15.</div>`
},
{
  id:"j06watch", stage:0, kind:"Testimony", title:"The Watch Record from the Walls",
  sub:"Taken from survivors of the city",
  prev:"They watched every night. Nothing came near the wall in the dark.",
  x:64, y:78, rot:2, w:204,
  body:`
    <p>One explanation says the marching was theatre — a distraction while the real work went on at night. The city's own watchmen answer that one.</p>
    <table class="ledger">
      <tr><th>Question put to the watch</th><th>Answer</th></tr>
      <tr><td>Was a night watch kept on the wall?</td><td><b>Yes — doubled, every night, for the whole week</b></td></tr>
      <tr><td>Approaches to the wall after dark</td><td class="n"><b>none observed</b></td></tr>
      <tr><td>Sounds of digging, cutting or hammering</td><td class="n"><b>none</b></td></tr>
      <tr><td>Lights or fires near the wall at night</td><td class="n"><b>none</b></td></tr>
      <tr><td>Attempts on the gate, day or night</td><td class="n"><b>none</b></td></tr>
      <tr><td>Nights the city was fully shut up</td><td class="n"><b>all of them</b></td></tr>
    </table>
    <h4>A watchman's own words</h4>
    <p>"We were shut up because of them and nobody went out and nobody came in. Do you understand what that means? <b>We were watching them far more carefully than they were watching us.</b> A whole city of frightened people on a wall, all night, every night, for a week.</p>
    <p>If a single man had come to the foot of that wall with a pick in his hand, four hundred people would have seen him."</p>
    <div class="ref">Background: Joshua 6:1 — "Jericho was tightly shut up: none went out, and none came in".</div>`
},

/* ---------------- STAGE 1 — released by the numbers lock ---------------- */
{
  id:"j06engineering", stage:1, kind:"Engineering survey", title:"The Engineering Survey",
  sub:"Field Chest B · testing the mining explanation",
  prev:"No tunnels. No spoil. And nowhere to put it if there had been.",
  x:28, y:26, rot:-3, w:212,
  body:`
    <p>Undermining is the oldest way to bring down a wall without touching it: dig beneath the foundation, prop the roof with timber, fire the props, and the wall drops into the void. It leaves a great deal behind.</p>
    <table class="ledger">
      <tr><th>What mining always leaves</th><th>Found at Jericho</th></tr>
      <tr><td>Tunnels or their collapsed traces</td><td class="n"><b>none</b></td></tr>
      <tr><td>Spoil heaps — the earth that came out</td><td class="n"><b>none</b></td></tr>
      <tr><td>Charred props in the foundation</td><td class="n"><b>none</b></td></tr>
      <tr><td>A localised drop where the mine was</td><td class="n"><b>none</b> — the collapse is the entire circuit</td></tr>
      <tr><td>Time required for a circuit of this size</td><td><b>Months</b>, with hundreds of men working openly</td></tr>
    </table>
    <h4>The surveyor's remark</h4>
    <p>"Ask where the earth went. A tunnel under a wall this size produces a spoil heap the size of a house, and you cannot hide one on an open plain in front of a city that is watching you.</p>
    <p>And mining brings a wall <b>down into the hole</b>. Ours went outward, downhill, in every direction at once. That is not a mine. I do not know what it is, but I know what it is not."</p>
    <div class="ref">Fictional survey, consistent with Joshua 6 — where no such work is described or possible under the terms of the march.</div>`
},
{
  id:"j06quake", stage:1, kind:"Assessment", title:"The Earthquake Assessment",
  sub:"Field Chest B · the strongest of the natural explanations",
  prev:"The valley does shake. Earthquakes do not spare one house.",
  x:58, y:24, rot:4, w:208,
  body:`
    <p>This is the explanation the Bureau takes most seriously, and students should too. The Jordan valley is seismically active, mud brick on a stone base is exactly what falls in a quake, and the date is not impossible.</p>
    <table class="ledger">
      <tr><th>What a quake produces</th><th>What the site shows</th></tr>
      <tr><td>Collapse in the direction of the shaking</td><td><b>Collapse outward, uniformly, all the way round</b></td></tr>
      <tr><td>Some sections standing at random</td><td><b>One</b> section standing — and it is the one that matters</td></tr>
      <tr><td>Damage to buildings inside the walls too</td><td>Interior buildings largely standing</td></tr>
      <tr><td>Aftershocks over days</td><td class="n"><b>none recorded</b></td></tr>
      <tr><td>Damage to the camp on the plain</td><td class="n"><b>none</b></td></tr>
      <tr><td>Timing</td><td>At the seventh circuit of the seventh day, on a shout</td></tr>
    </table>
    <h4>Where it breaks</h4>
    <p>Not on whether a quake could drop that wall — it could. It breaks on <b>which parts fell and which did not</b>. A quake does not clear an entire circuit and leave one house intact; it does not spare the buildings inside while flattening the perimeter; and it does not wait for a week of marching and arrive on the shout.</p>
    <p class="margin-note">An earthquake explains the rubble. It does not explain the pattern of the rubble, and the pattern is the evidence.</p>
    <div class="ref">Fictional assessment. Background: Joshua 6:20.</div>`
},
{
  id:"j06gate", stage:1, kind:"Site report", title:"The Gate, As Found",
  sub:"Field Chest B · testing the betrayal explanation",
  prev:"Barred from the inside, and buried under the fallen wall.",
  x:80, y:44, rot:-6, w:206,
  body:`
    <p>The commonest way a walled city falls is that somebody inside opens it. The gate answers that.</p>
    <table class="ledger">
      <tr><th>Checked</th><th>As found</th></tr>
      <tr><td>Position of the bar</td><td><b>In place, across the gate, on the inside</b></td></tr>
      <tr><td>Damage from a ram or lever</td><td class="n"><b>none</b></td></tr>
      <tr><td>The gate leaves</td><td>Intact when the wall came down; buried under it afterwards</td></tr>
      <tr><td>Bodies of gate guards inside the passage</td><td>Present, at their posts</td></tr>
      <tr><td>Signs of the gate being opened at any point that week</td><td class="n"><b>none</b></td></tr>
    </table>
    <h4>Why this closes the door — literally</h4>
    <p>The army did not come in through the gate. <b>The gate was still shut when the wall around it stopped existing</b>, and the debris that buried it fell from above and outside.</p>
    <p>There is a second point worth making to your team. Somebody inside the city <i>had</i> made an arrangement with Israel — that is in the file, and it is not a secret. <b>But what she was asked to do was not open a gate.</b> Read the terms when you get to them.</p>
    <div class="ref">Fictional site report. Background: Joshua 6:1, 6:20 · Joshua 2:12–14.</div>`
},
{
  id:"j06granary", stage:1, kind:"Store report", title:"The Granary Report",
  sub:"Field Chest B · testing the siege explanation",
  prev:"The jars were full. Nobody in that city was starving.",
  x:46, y:62, rot:3, w:206,
  body:`
    <p>A siege works by hunger. It takes months and it leaves a very particular kind of evidence: empty stores, slaughtered draught animals, and a population that surrenders rather than dies. The stores tell you at once whether it happened.</p>
    <table class="ledger">
      <tr><th>Checked</th><th>Found</th></tr>
      <tr><td>Grain jars in the houses along the wall</td><td><b>Full</b>, and burnt where they stood</td></tr>
      <tr><td>Stage of the harvest</td><td><b>Just gathered</b> — the stores were at their fullest of the year</td></tr>
      <tr><td>Signs of rationing or of stores being scraped out</td><td class="n"><b>none</b></td></tr>
      <tr><td>Draught animals slaughtered for food</td><td class="n"><b>none</b></td></tr>
      <tr><td>Days between the army's arrival and the fall</td><td class="n"><b>7</b></td></tr>
    </table>
    <h4>Why full jars are such good evidence</h4>
    <p>They rule out a long siege in one line, and they do something else as well: <b>they date the fall to the first days of the encirclement.</b> A city that had held out for months does not have a full year's grain sitting in its jars.</p>
    <p class="margin-note">Nobody starved this city out. It fell at the top of its harvest, a week after an army arrived and started walking round it.</p>
    <div class="ref">Fictional store report. Background: Joshua 6:15 (seven days) · Joshua 3:15 (harvest time).</div>`
},
{
  id:"j06house", stage:1, kind:"Agreement", title:"The House on the Wall",
  sub:"Field Chest B · the one section that did not fall",
  prev:"A house built into the wall, and a length of cord in its window.",
  x:70, y:70, rot:-4, w:210,
  body:`
    <p>The section still standing on the eastern side has a house built into it, and the Bureau knows a great deal about that house, because the arrangement made in it was recorded on both sides.</p>
    <h4>What happened there before the march began</h4>
    <ul>
      <li>Two Israelite scouts entered the city and lodged in that house.</li>
      <li>The king's men came looking for them. <b>The woman who kept the house hid them and sent the search the wrong way.</b></li>
      <li>She told them plainly why: she had heard what had happened at the sea and to the kings east of the Jordan, and she had drawn her own conclusion about who was going to hold this country.</li>
      <li>She asked for one thing in return — that her household be spared.</li>
    </ul>
    <h4>The terms, as agreed</h4>
    <table class="ledger">
      <tr><th>Term</th><th>Detail</th></tr>
      <tr><td>Who is covered</td><td>Her father, mother, brothers, sisters and all their households</td></tr>
      <tr><td>Where they must be</td><td><b>Inside that house.</b> Anyone who goes out into the street is not covered</td></tr>
      <tr><td>The sign to be displayed</td><td><b>A line of scarlet cord, tied in the window</b> — the same cord the scouts climbed down</td></tr>
      <tr><td>What she must not do</td><td>Tell anyone what was agreed</td></tr>
      <tr><td>What she was <i>not</i> asked to do</td><td class="n"><b>Open the gate. Sabotage the wall. Signal an attack.</b> Nothing of the kind.</td></tr>
    </table>
    <p class="margin-note">A house on a wall, marked in a window, in a city where the entire wall came down except that one piece of it. Whatever hung in that window is the keyword for the second lock.</p>
    <div class="ref">Background: Joshua 2:1–21 · Joshua 6:17.</div>`
},

/* ---------------- STAGE 2 — released by the keyword lock ---------------- */
{
  id:"j06seventh", stage:2, kind:"Field report", title:"The Seventh Day",
  sub:"Sealed Pouch C · what happened, in order",
  prev:"Seven circuits, one blast, one shout, and the wall was gone.",
  x:26, y:28, rot:-3, w:210,
  body:`
    <table class="ledger">
      <tr><th>Order of events</th><th>Record</th></tr>
      <tr><td>Rising</td><td>At dawn — earlier than the other six days</td></tr>
      <tr><td>Circuits 1 to 6</td><td>As on the previous days. Silence.</td></tr>
      <tr><td>Circuit 7</td><td>A long blast on the trumpets</td></tr>
      <tr><td>The command</td><td>"Shout, for the LORD has given you the city"</td></tr>
      <tr><td>What the people did</td><td>Shouted with a great shout</td></tr>
      <tr><td>What the wall did</td><td><b>Fell down flat</b></td></tr>
      <tr><td>How the army entered</td><td><b>Straight up the rubble — every man straight before him</b></td></tr>
      <tr><td>Time from the shout to the collapse</td><td>Immediate</td></tr>
    </table>
    <h4>The two details the Bureau keeps returning to</h4>
    <p>First, <b>the entry</b>. Nobody climbed, nobody breached, nobody forced a gate. The wall became a ramp and they walked in on a broad front all the way round — which is only possible if the whole circuit fell outward at the same moment.</p>
    <p>Second, <b>the timing</b>. Not on the first day, not on the sixth, and not at some point during the seventh. On the shout at the end of the seventh circuit of the seventh day.</p>
    <div class="ref">Background: Joshua 6:15–20.</div>`
},
{
  id:"j06rahab", stage:2, kind:"Follow-up file", title:"The Household in the House",
  sub:"Sealed Pouch C · what became of them",
  prev:"The wall fell. The house did not. The people inside it walked out.",
  x:56, y:30, rot:4, w:208,
  body:`
    <p>The two scouts were sent back for them personally, by name, before anything else was done in the city.</p>
    <table class="ledger">
      <tr><th>Record</th><th>Detail</th></tr>
      <tr><td>Who was brought out</td><td>The woman, her father, mother, brothers and all she had</td></tr>
      <tr><td>Condition of the house</td><td><b>Standing.</b> The wall it was built into did not fall</td></tr>
      <tr><td>Casualties in that household</td><td class="n"><b>none</b></td></tr>
      <tr><td>Where they were settled</td><td>Outside the camp at first, then <b>among Israel</b></td></tr>
      <tr><td>How long the record says they remained</td><td>"To this day"</td></tr>
    </table>
    <h4>Why the Bureau files this under evidence rather than sentiment</h4>
    <p>Because it is the control. Everything else about that wall behaved identically all the way round — same construction, same age, same mound, same shout. <b>One piece behaved differently, and the difference between it and every other piece was an agreement made a week earlier and a cord in a window.</b></p>
    <p>You do not have to accept any particular explanation of that. You do have to account for it, and no natural process on your board can.</p>
    <div class="ref">Background: Joshua 6:22–25 · compare Hebrews 11:31 and James 2:25.</div>`
},
{
  id:"j06ban", stage:2, kind:"Standing order", title:"What the City Was Not Looted For",
  sub:"Sealed Pouch C · the ban, and why it is in this file",
  prev:"Nothing to be taken. The army walked away with the metal and nothing else.",
  x:78, y:60, rot:-5, w:206,
  body:`
    <p>The Bureau keeps this page here for two reasons, and neither of them is the obvious one.</p>
    <h4>The order</h4>
    <table class="ledger">
      <tr><th>Class</th><th>Instruction</th></tr>
      <tr><td>The city and everything in it</td><td>Under the ban — nothing to be taken by anyone</td></tr>
      <tr><td>Silver, gold, bronze, iron</td><td>Into the treasury, weighed in</td></tr>
      <tr><td>The household in the marked house</td><td><b>Spared, by name</b></td></tr>
    </table>
    <h4>Reason one: it rules out the last ordinary motive</h4>
    <p>An army that has invented a clever way to bring a wall down usually wants what is behind it. <b>This one was forbidden the plunder before the wall fell</b>, which is a strange arrangement for a piece of military engineering.</p>
    <h4>Reason two: it is the hinge of a later file</h4>
    <p>One man in that army broke this order. What followed is the subject of <b>Case JM-08 · The Stolen Plunder</b>, and if your class has already worked that file, this is where it begins.</p>
    <div class="ref">Background: Joshua 6:17–19 · Joshua 7:1.</div>`
},
{
  id:"j06why", stage:2, kind:"Bureau analysis", title:"What the Rubble Will and Will Not Say",
  sub:"Sealed Pouch C",
  prev:"The evidence is unusually good, and it stops in an unusual place.",
  x:44, y:76, rot:2, w:212,
  body:`
    <p>This case has better physical evidence than almost anything else in the archive, and the Bureau wants students to be exact about what it proves.</p>
    <h4>What the rubble does say</h4>
    <ol>
      <li>The wall fell <b>outward, all the way round, at one moment</b>. Every deliberate method of bringing down a wall drops it the other way.</li>
      <li>Nobody dug: no tunnels, no spoil, no charred props, and no time or cover to do the work.</li>
      <li>Nobody opened the gate: it was barred, undamaged, and buried by the collapse.</li>
      <li>Nobody starved them: the jars were full at the top of the harvest, and the city fell in a week.</li>
      <li>Nobody attacked at night: the city was shut up and watching, doubled, for the whole week.</li>
      <li><b>One section did not fall</b>, and it is the section with the marked house in it.</li>
    </ol>
    <h4>What the rubble does not say</h4>
    <p>It does not say what brought the wall down. Rubble never does — it records what happened to a wall, not why. A student who says <i>"an earthquake, timed by coincidence"</i> has not failed the case; they have made a claim, and the file asks them to say how a coincidence spares one house on a circuit it flattened everywhere else.</p>
    <h4>The honest end of it</h4>
    <p class="margin-note">Six days of walking achieved nothing whatever, and were not meant to. What the file records is a wall that came down on a shout, in the wrong direction, on a schedule, with one exception that had been agreed in advance and marked in a window.</p>
    <div class="ref">Background: Joshua 6 · Joshua 2 · Hebrews 11:30.</div>`
}
];

const JM06_THEORIES = [
  {
    id:"sappers",
    title:"1. Sappers undermined the wall during the marches",
    claim:"The marching was cover. While the city watched the parade, engineers dug under the foundations and fired the props.",
    answer:"j06engineering",
    verdict:"The engineering survey kills it. Mining leaves tunnels, spoil heaps the size of a house, and charred props in the foundation — the site has none of them, and there is nowhere on an open plain to hide the earth from a city watching from above. It also takes months and hundreds of men working openly. And mining drops a wall <i>into</i> the void beneath it; this one fell outward, downhill, all the way round."
  },
  {
    id:"quake",
    title:"2. An earthquake",
    claim:"The Jordan valley shakes, mud brick on a stone base is exactly what falls, and the timing is coincidence.",
    answer:"j06quake",
    verdict:"The assessment kills it — and this is the best of the wrong answers, so take it seriously first. A quake could certainly drop that wall. What it cannot do is clear an entire circuit uniformly outward, leave the buildings inside largely standing, produce no aftershocks, do no damage to the camp on the plain, and spare exactly one section of wall with a marked house in it. An earthquake explains the rubble; it does not explain the pattern, and the pattern is the evidence."
  },
  {
    id:"betrayal",
    title:"3. Somebody inside opened the gates",
    claim:"There was an informer in the city — that is on the record. She let the army in.",
    answer:"j06gate",
    verdict:"The gate report kills it. The bar was in place across the inside of the gate, the leaves were undamaged, the guards were at their posts, and the whole thing was buried by debris that fell from above and outside. There <i>was</i> an arrangement with someone inside — but the terms are in the file, and what she was asked to do was stay indoors and hang a cord in a window. Nobody asked her to open anything."
  },
  {
    id:"siege",
    title:"4. A long siege starved them out",
    claim:"Cities fall to hunger far more often than to engineering. The marching was the visible part of a long blockade.",
    answer:"j06granary",
    verdict:"The granary report kills it. The grain jars along the wall were <b>full</b> and burnt where they stood, the harvest had just been gathered, and there is no sign of rationing or of draught animals being eaten. A city that had held out for months does not have a full year's grain in its jars — and the marching log counts seven days from arrival to collapse, not months."
  },
  {
    id:"assault",
    title:"5. The marching was a cover for an assault at night",
    claim:"Walk round in daylight to bore the watch into carelessness, then go over the wall in the dark.",
    answer:"j06watch",
    verdict:"The watch record kills it. Jericho was shut up tight for the whole week with a doubled watch every night, and the survivors report no approach to the wall after dark, no digging or hammering, no lights, and no attempt on the gate at any point. As one watchman put it, they were watching the army far more carefully than the army was watching them — a whole city of frightened people on a wall, all night, for a week."
  }
];

const JM06_LOCKS = [
  {
    id:"l1", type:"number", code:"6771", len:4,
    wrong:"Not that. Each digit comes from a different document — one of the four is wrong.",
    name:"Field Chest B — the site reports",
    blurb:"A four-digit lock. Each digit answers one question, and each question is answered by a different document already on your desk. Every answer is a single digit.",
    questions:[
      "On how many days did the army march around the city once?",
      "How many times did they go around on the last day?",
      "How many priests carried trumpets?",
      "How many houses on the wall were left standing?"
    ],
    hints:[
      "The questions are in order: question one gives the first digit. Every answer is a single digit.",
      "Question 1 is the marching log. Question 2 is the order of march. Question 3 is the procession roster. Question 4 is the plan of the ruins."
    ],
    reward:"Field Chest B is open: the engineering survey, the earthquake assessment, the gate report, the granary report and the file on the house built into the wall are now on the desk. The 📊 Hypothesis table in the top bar is live."
  },
  {
    id:"l2", type:"word", code:"SCARLET", len:7,
    wrong:"Not that. Fill in the hypothesis table — the 📊 button in the top bar — and it will tell you which fact to go and look at.",
    name:"Sealed Pouch C — the sign in the window",
    blurb:"A seven-letter keyword. Take the five explanations to the hypothesis table and check each one against what the site actually shows. Two of the findings will turn out to be things no explanation can account for — and one of them points straight at a single window.",
    questions:[
      "Open the 📊 Hypothesis table from the top bar.",
      "Five explanations, five findings from the site.",
      "Tick a box where that explanation could produce that finding.",
      "Two columns will be left empty. The second of them names the house you need."
    ],
    hints:[
      "Work along each row. Ask of each explanation: if this is what happened, would I expect to find this?",
      "Every one of the five can live with a barred gate, full granaries or an absence of tunnels — but not one of them produces an outward collapse all the way round, and not one produces a single surviving section."
    ],
    reward:"Sealed Pouch C is open: the record of the seventh day, what became of the household in the house, the standing order about plunder and the Bureau's analysis are now on the desk."
  }
];

const JM06_MATRIX = {
  button:"📊 Hypothesis table",
  title:"The Hypothesis Table",
  blurb:"Five explanations down the side, five things the site actually shows across the top. Tick a box wherever that explanation <b>could produce</b> that finding. Leave it blank where the finding contradicts it. When the table is right, look at which columns nobody could tick.",
  corner:"If this is what happened…",
  verify:"Check the table",
  mark:"✔",
  cols:[
    {id:"out",   label:"Collapse outward, all round", note:"away from the city"},
    {id:"gate",  label:"The gate still barred",       note:"undamaged, buried"},
    {id:"grain", label:"The granaries full",          note:"harvest just in"},
    {id:"dig",   label:"No tunnels or spoil",         note:"nothing dug"},
    {id:"house", label:"One section left standing",   note:"with a house in it"}
  ],
  rows:[
    {id:"sap",    label:"Sappers undermined the wall", note:"dig, prop, burn"},
    {id:"quake",  label:"An earthquake",               note:"the valley does shake"},
    {id:"betray", label:"Somebody opened the gates",   note:"an informer inside"},
    {id:"siege",  label:"A long siege starved them",   note:"months of hunger"},
    {id:"night",  label:"A night assault under cover", note:"marching as a decoy"}
  ],
  truth:[
    "sap|gate","sap|grain",
    "quake|gate","quake|grain","quake|dig",
    "betray|grain","betray|dig",
    "siege|gate","siege|dig",
    "night|gate","night|grain","night|dig"
  ],
  foot:{
    label:"What the site shows",
    note:"rubble, gate, jars, ground, one house",
    cells:{out:"outward", gate:"barred", grain:"full", dig:"nothing", house:"one"}
  },
  note:"Mining leaves spoil, so it cannot tick the fourth column. A siege empties the jars, so it cannot tick the third. A betrayal needs an opened gate, so it cannot tick the second. Work along each row and be honest about what each one would leave behind.",
  reveal:{
    lead:"Three columns can be ticked by nearly everybody — a barred gate, full jars and undug ground are things most of these explanations can live with. Two columns nobody can tick at all. No ordinary explanation drops a wall <i>outward</i> all the way round, and not one of them leaves a single section standing. That second empty column is a house, and that house has terms of agreement in the file.",
    answer:"SCARLET",
    caption:"A line of cord in a window, agreed a week before the army arrived — and the only piece of that wall still standing when the rest of it lay flat on the plain."
  }
};

const JM06_VERDICTS = [
  {id:"sappers",  text:"Israelite sappers undermined the wall while the marching held the city's attention."},
  {id:"quake",    text:"An earthquake brought the wall down, and the timing was coincidence."},
  {id:"betrayal", text:"The informer inside the city opened the gates to the army."},
  {id:"siege",    text:"A long siege starved Jericho out, and the marching was part of the blockade."},
  {id:"assault",  text:"The marching was a decoy for an assault over the wall at night."},
  {id:"fell",     text:"The whole circuit fell outward at one moment, on the seventh day, leaving a ramp the army walked up — and the one section that stayed standing was the one that had been marked in advance."}
];

const CASE_JM06 = {
  id:"jm06", code:"CASE JM-06", title:"The Walls",
  period:"Jericho · c. 1400 BC", colour:"#8a6a4a", poster:"poster_jm06",
  teaser:"For six days an army walks once around a walled city in complete silence and goes back to camp. On the seventh it walks round seven times, makes one sound, and the wall falls — outward, all the way round, except for one house.",
  introSub:"Six days of walking. No siege, no ladders, no attack.",
  items:JM06_ITEMS, theories:JM06_THEORIES, locks:JM06_LOCKS, verdicts:JM06_VERDICTS,
  matrix:JM06_MATRIX,
  correct:"fell",
  boardTitle:"What Brought the Wall Down",
  boardIntro:"Five explanations have been offered. For each one, pin the <b>single</b> document that makes it impossible. When all five are closed, the accusation form opens.",
  accusationIntro:"Nobody dug, nobody opened the gate, nobody starved them and nobody came over the wall in the dark — and the rubble lies in the wrong direction. State what the file will actually support.",
  debrief:{
    lead:"The rubble decides this case. It lies outward, down the slope, all the way round — the opposite direction to every deliberate method of bringing a wall down, and the reason the army could walk in on a broad front instead of climbing. No tunnels, no spoil, a gate still barred, jars full at the top of the harvest, and a city that watched its own wall every night for a week. And one section that did not fall, with a house in it that had been marked with a scarlet cord before the army ever arrived.",
    questions:[
      "Six days of marching achieved nothing at all in engineering terms. What might a week of doing nothing visible do to the people inside the city — and to the people doing the marching?",
      "The earthquake explanation is the strongest wrong answer here. What exactly would have to be true for it to work, and which single piece of evidence is hardest for it?",
      "The woman in the house was not asked to open a gate or sabotage anything — only to stay indoors and hang out a cord. Why might the agreement have been written that way?",
      "The army was forbidden the plunder before the wall fell. What does that tell you about what the whole operation was understood to be?"
    ],
    refs:"Joshua 6 · Joshua 2:1–21 · Joshua 3:15 · Joshua 7:1 · Hebrews 11:30–31 · James 2:25"
  },
  teacher:{
    answers:"Lock 1 code <b>6771</b> (6 days of one circuit · 7 circuits on the seventh day · 7 priests with trumpets · 1 house left standing). Lock 2 keyword <b>SCARLET</b>, from the 📊 Hypothesis table: sappers tick gate + granaries; earthquake ticks gate + granaries + no-tunnels; betrayal ticks granaries + no-tunnels; siege ticks gate + no-tunnels; night assault ticks gate + granaries + no-tunnels. The two columns nobody can tick are the outward collapse and the one standing section — and that section is the house with the cord in its window.",
    pairs:"Sappers → The Engineering Survey; earthquake → The Earthquake Assessment; somebody opened the gates → The Gate, As Found; a long siege → The Granary Report; a night assault → The Watch Record from the Walls.",
    conclusion:"The entire circuit fell outward at one moment on the seventh day, leaving a rubble ramp the army walked up. One section stayed standing: the one with the marked house built into it.",
    prompts:"\"Which way do walls fall when somebody knocks them down? Now look at the section drawing.\" · \"Where did the earth from the tunnels go?\" · \"If they were starving them out, why are the jars full?\" · \"An earthquake flattened the whole circuit and stopped at one house. How?\"",
    extra:"Two things worth planning for. First, the earthquake explanation deserves real time — it is the only one in this case that a scientifically-minded student will genuinely believe, and the honest answer is that it explains the rubble but not the pattern. Do not let it be dismissed quickly; make them state exactly which finding defeats it. Second, this case is the direct prequel to <b>JM-08 · The Stolen Plunder</b>: the standing order about the plunder in Sealed Pouch C is the order Achan breaks. Running JM-06 first and JM-08 second makes both stronger, and students notice the connection themselves, which is worth more than being told."
  }
};

registerCase(CASE_JM06);
