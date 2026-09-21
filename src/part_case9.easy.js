"use strict";
/* ============================================================
   CASE JM-06 — THE WALLS — EASY READING LEVEL

   Wording only. Same evidence, same reasoning, same lock codes
   (6771 and SCARLET). Anything not named here stays as it is.
   ============================================================ */

const EASY_JM06 = {

teaser:"For six days an army walks once round a walled city in complete silence and goes back to camp. On the seventh day it walks round seven times, makes one sound, and the wall falls — outwards, all the way round, except for one house.",
introSub:"Six days of walking. No siege, no ladders, no attack.",
boardTitle:"What Brought the Wall Down",
boardIntro:"Five explanations have been offered. For each one, pin the <b>one</b> document that makes it impossible. When all five are closed, you can make your accusation.",
accusationIntro:"Nobody dug, nobody opened the gate, nobody starved them out and nobody came over the wall in the dark — and the rubble is lying in the wrong direction. Say what the file can actually back up.",

items:{

j06letter:{
  prev:"A walled city taken by an army that never touched the wall.",
  body:`
    <p><b>To the investigating team,</b></p>
    <p>Jericho is a walled town on a hill above the Jordan plain, and it is the first thing standing between an incoming people and the country they mean to live in. Taking a place like this normally takes months: building works, starving the town out, ladders, and a great many dead on both sides.</p>
    <p>What the record describes instead is this. <b>For six days the army walked once round the city and went back to camp.</b> They did not attack, did not shout, did not even speak. On the seventh day they walked round it seven times, made one noise, and the wall came down.</p>
    <p>Five explanations have been offered for what really brought that wall down. Four of them are the sensible ones an engineer would reach for. Your job is to close the four the file will not carry.</p>
    <h4>Your job</h4>
    <p>This case is unusual in one way: <b>the physical evidence is unusually good.</b> There is a site, there is rubble, and rubble is honest — it lies where it fell and it does not change its story. Read the wall section drawing and the plan of the ruins carefully, because between them they decide nearly everything.</p>
    <h4>How the file works</h4>
    <ul>
      <li>Everything on the desk now is yours. Read all of it before you decide anything.</li>
      <li>Two parts of the file are <b>locked</b>. Both codes are hidden in documents you already have.</li>
      <li>The second lock opens using the <b>hypothesis table</b> — the 📊 button at the top — once the first lock is open.</li>
      <li>When you have everything, go to the <b>Pinboard</b>.</li>
    </ul>
    <p class="margin-note">Walls fall down. That is not the strange part. Which way they fall, and what is left standing when they do — that is the strange part.</p>
    <div class="sig">Luke</div>
    <div class="small" style="color:#5b4a35">Case Supervisor</div>
    <div class="ref">This case is put together from Joshua 6, with background from Joshua 2.</div>`
},

j06order:{
  prev:"Once a day for six days. Seven times on the seventh. No talking.",
  body:`
    <p>The instructions were given in full before a single man moved, which is why we can check what happened against what was ordered.</p>
    <div class="stamp">ORDER OF MARCH · JERICHO</div>
    <table class="ledger">
      <tr><th>Instruction</th><th>Detail</th></tr>
      <tr><td>Times round per day, days one to six</td><td class="n"><b>1</b></td></tr>
      <tr><td>Times round on the seventh day</td><td class="n"><b>7</b></td></tr>
      <tr><td>Order of the line</td><td>Armed men · seven priests with trumpets · the ark · the back guard</td></tr>
      <tr><td>Talking</td><td><b>None.</b> Not a word, not a shout, no sound at all</td></tr>
      <tr><td>Weapons to be used on the wall</td><td class="n"><b>none</b></td></tr>
      <tr><td>On the seventh time round on the seventh day</td><td>One long trumpet blast, and then everybody shouts</td></tr>
    </table>
    <h4>What an investigator should notice</h4>
    <p>Every single part of this order is <b>the opposite of a siege</b>. No machines, no ladders, no ramps, no attempt on the gate, and a strict rule of silence that makes secret work impossible — you cannot dig, cut or hammer quietly enough to hide it from a city looking down at you from the wall.</p>
    <p class="margin-note">Count the times round on the last day. That number turns up twice in this file, and once in the lock.</p>
    <div class="ref">Background: Joshua 6:3–5.</div>`
},

j06log:{
  prev:"Six days. Once round each day. Nothing happened at all.",
  body:`
    <p>The most boring document in the file, and the one that closes the most doors.</p>
    <table class="ledger">
      <tr><th>Day</th><th>Times round</th><th>Fighting</th><th>Work done at the wall</th></tr>
      <tr><td>1</td><td class="n">1</td><td>none</td><td>none</td></tr>
      <tr><td>2</td><td class="n">1</td><td>none</td><td>none</td></tr>
      <tr><td>3</td><td class="n">1</td><td>none</td><td>none</td></tr>
      <tr><td>4</td><td class="n">1</td><td>none</td><td>none</td></tr>
      <tr><td>5</td><td class="n">1</td><td>none</td><td>none</td></tr>
      <tr><td>6</td><td class="n">1</td><td>none</td><td>none</td></tr>
      <tr><td><b>7</b></td><td class="n"><b>7</b></td><td>none until the wall fell</td><td>none</td></tr>
    </table>
    <h4>The officer's note</h4>
    <p>"<b>Six days of once round, and I have nothing to write in the third column.</b> Not an arrow shot, not a stone thrown, not a man lost on either side. The city watched us from the wall every morning and we walked, and then we went back to camp and ate.</p>
    <p>I have been asked whether men could have been left behind at the wall each day. They could not. We went out counted and we came back counted, and the whole way round is in plain view of the city above it."</p>
    <div class="ref">Background: Joshua 6:11–15.</div>`
},

j06roster:{
  prev:"Seven priests, seven trumpets, and not a single tool between them.",
  body:`
    <p>Who was in the line matters, because that was the whole of the force ever brought against that wall.</p>
    <table class="ledger">
      <tr><th>Place in the line</th><th>Who</th><th>Carrying</th></tr>
      <tr><td>1 — front</td><td>The armed men</td><td>Weapons. Never used.</td></tr>
      <tr><td>2</td><td><b>Seven priests</b></td><td><b>Seven ram's horn trumpets</b></td></tr>
      <tr><td>3</td><td>Priests carrying the ark</td><td>The ark of the covenant</td></tr>
      <tr><td>4 — back</td><td>The back guard</td><td>Weapons. Never used.</td></tr>
    </table>
    <h4>What was not in the line</h4>
    <p class="margin-note">No ladders. No battering ram. No siege tower. No picks, crowbars or digging tools of any kind. No timber for propping. Nothing that has ever brought a wall down anywhere else.</p>
    <p>Count the priests with trumpets. Seven — the same number as the times round on the last day. That is either a coincidence or it was planned, and we do not believe this file contains coincidences.</p>
    <div class="ref">Background: Joshua 6:4, 6:8–9.</div>`
},

j06city:{
  prev:"A town on a hill, open ground all round it, and one road.",
  body:`
    <div class="plate">${SVG.j06city}<div class="cap">Click the plan to make it bigger.</div></div>
    <h4>What the plan tells you</h4>
    <ul>
      <li><b>Jericho</b> stands on a mound above the plain — a walled town rather than a fortress, but high enough that everything below it can be seen from the wall.</li>
      <li><b>The plain</b> all round it is open ground: no cover, no earthworks, no siege lines, and nowhere for a work party to be out of sight.</li>
      <li><b>The line of march</b> goes right round the bottom of the mound. You can walk it in a morning, which is why the whole army could go round once a day and be back in camp by the afternoon.</li>
      <li>There are no siege works anywhere on this plan, because none were ever built.</li>
    </ul>
    <p class="margin-note">Look at the sight lines. Whatever happened to that wall, it happened in front of a city that could see every step of it.</p>
    <div class="ref">Background: Joshua 6:3 · Joshua 2:1.</div>`
},

j06section:{
  prev:"The rubble lies outwards, away from the city. That is the wrong direction.",
  body:`
    <div class="plate">${SVG.j06section}<div class="cap">Click the drawing to make it bigger.</div></div>
    <p>A cut-through drawing of the defences at the spot where the collapse is clearest.</p>
    <table class="ledger">
      <tr><th>Feature</th><th>As found</th></tr>
      <tr><td>What it was built of</td><td>Mud brick on a stone base</td></tr>
      <tr><td>Which way it fell</td><td><b>Outwards</b> — away from the city, down the slope of the mound</td></tr>
      <tr><td>Shape of the rubble</td><td>An unbroken ramp of brick from the bottom of the wall down to the plain</td></tr>
      <tr><td>Bricks still stacked in rows</td><td class="n"><b>none</b> — the whole height came apart</td></tr>
      <tr><td>Signs of burning <i>before</i> the collapse</td><td class="n"><b>none</b> — the burning is on top of the rubble</td></tr>
    </table>
    <h4>Why the direction is the whole case</h4>
    <p>Walls fall <b>inwards</b>. That is what a battering ram does, what a tunnel does when the props burn through, and what an attacker wants — the rubble fills the ditch and you climb in over it. It is also just what happens when anything at all pushes a wall from the outside.</p>
    <p>This wall went the other way. <b>It fell away from the city, all the way round, leaving a ramp an army could simply walk up.</b> The record says exactly that: the people went up into the city, each man straight ahead of him.</p>
    <div class="ref">Background: Joshua 6:20 — "the wall fell down flat, so that the people went up into the city, every man straight before him".</div>`
},

j06ruins:{
  prev:"A ring of collapse all the way round — and one short piece that did not fall.",
  body:`
    <div class="plate">${SVG.j06ruins}<div class="cap">Click the plan to make it bigger.</div></div>
    <h4>What the plan tells you</h4>
    <ul>
      <li><b>The ring of collapse</b> goes the whole way round. This is not one gap or two — it is the entire wall, lying outwards.</li>
      <li><b>One piece is still standing</b>, unbroken and upright, on the eastern side, <b>with a house built into it</b>.</li>
      <li>The gate is marked on the plan where it stood. It has its own report.</li>
      <li>Count the houses on the wall that survived. <b>One.</b> That number is part of the first lock, and it is also the strangest fact in this file.</li>
    </ul>
    <p class="margin-note">A collapse that goes all the way round and then stops at one house is not a collapse behaving like a collapse. Keep that house in mind: you will need it later.</p>
    <div class="ref">Background: Joshua 6:20–22 · Joshua 2:15.</div>`
},

j06watch:{
  prev:"They watched every night. Nothing came near the wall in the dark.",
  body:`
    <p>One explanation says the marching was a show — a distraction while the real work went on at night. The city's own guards answer that one.</p>
    <table class="ledger">
      <tr><th>Question put to the guards</th><th>Answer</th></tr>
      <tr><td>Was there a night watch on the wall?</td><td><b>Yes — twice the usual number, every night, all week</b></td></tr>
      <tr><td>Anyone coming near the wall after dark</td><td class="n"><b>nobody seen</b></td></tr>
      <tr><td>Sounds of digging, cutting or hammering</td><td class="n"><b>none</b></td></tr>
      <tr><td>Lights or fires near the wall at night</td><td class="n"><b>none</b></td></tr>
      <tr><td>Attempts on the gate, day or night</td><td class="n"><b>none</b></td></tr>
      <tr><td>Nights the city was shut up tight</td><td class="n"><b>all of them</b></td></tr>
    </table>
    <h4>A guard's own words</h4>
    <p>"We were shut up because of them, and nobody went out and nobody came in. Do you understand what that means? <b>We were watching them far more carefully than they were watching us.</b> A whole city of frightened people up on a wall, all night, every night, for a week.</p>
    <p>If one single man had come to the bottom of that wall with a pick in his hand, four hundred people would have seen him."</p>
    <div class="ref">Background: Joshua 6:1 — "Jericho was tightly shut up: none went out, and none came in".</div>`
},

j06engineering:{
  prev:"No tunnels. No piles of earth. And nowhere to put them if there had been.",
  body:`
    <p>Digging underneath is the oldest way to bring a wall down without touching it: dig under the foundation, prop the roof up with wood, set fire to the props, and the wall drops into the hole. It leaves an awful lot behind.</p>
    <table class="ledger">
      <tr><th>What digging always leaves</th><th>Found at Jericho</th></tr>
      <tr><td>Tunnels, or traces of collapsed ones</td><td class="n"><b>none</b></td></tr>
      <tr><td>Piles of earth — the soil that came out</td><td class="n"><b>none</b></td></tr>
      <tr><td>Burnt props in the foundation</td><td class="n"><b>none</b></td></tr>
      <tr><td>One dropped patch where the tunnel was</td><td class="n"><b>none</b> — the collapse is the whole way round</td></tr>
      <tr><td>Time needed for a wall this size</td><td><b>Months</b>, with hundreds of men working out in the open</td></tr>
    </table>
    <h4>What the surveyor said</h4>
    <p>"Ask where the earth went. A tunnel under a wall this size makes a pile of soil the size of a house, and you cannot hide one on an open plain in front of a city that is watching you.</p>
    <p>And digging brings a wall <b>down into the hole</b>. Ours went outwards, downhill, in every direction at once. That is not a tunnel. I do not know what it is, but I know what it is not."</p>
    <div class="ref">Made-up survey, matching Joshua 6 — where no such work is described, or even possible under the rules of the march.</div>`
},

j06quake:{
  prev:"The valley does shake. But earthquakes do not skip one house.",
  body:`
    <p>This is the explanation we take most seriously, and you should too. The Jordan valley does get earthquakes, mud brick on a stone base is exactly the kind of wall that falls in one, and the date is not impossible.</p>
    <table class="ledger">
      <tr><th>What an earthquake does</th><th>What the site shows</th></tr>
      <tr><td>Wall falls whichever way the ground shakes it</td><td><b>Fell outwards, evenly, the whole way round</b></td></tr>
      <tr><td>Random bits left standing here and there</td><td><b>One</b> piece standing — and it is the one that matters</td></tr>
      <tr><td>Damage to buildings inside the walls too</td><td>Buildings inside mostly still standing</td></tr>
      <tr><td>Aftershocks over the next few days</td><td class="n"><b>none recorded</b></td></tr>
      <tr><td>Damage to the camp out on the plain</td><td class="n"><b>none</b></td></tr>
      <tr><td>Timing</td><td>On the seventh time round on the seventh day, on a shout</td></tr>
    </table>
    <h4>Where it breaks</h4>
    <p>Not on whether an earthquake could knock that wall down — it could. It breaks on <b>which bits fell and which did not</b>. An earthquake does not flatten a whole circuit and leave one house standing; it does not skip the buildings inside while flattening the wall round the outside; and it does not wait a week and then arrive exactly on the shout.</p>
    <p class="margin-note">An earthquake explains the rubble. It does not explain the pattern of the rubble — and the pattern is the evidence.</p>
    <div class="ref">Made-up assessment. Background: Joshua 6:20.</div>`
},

j06gate:{
  prev:"Barred from the inside, and buried under the fallen wall.",
  body:`
    <p>The most common way a walled city falls is that somebody inside opens it up. The gate answers that.</p>
    <table class="ledger">
      <tr><th>Checked</th><th>As found</th></tr>
      <tr><td>Where the bar was</td><td><b>In place, across the gate, on the inside</b></td></tr>
      <tr><td>Damage from a ram or a crowbar</td><td class="n"><b>none</b></td></tr>
      <tr><td>The gate doors</td><td>Undamaged when the wall came down; buried under it afterwards</td></tr>
      <tr><td>Gate guards inside the passage</td><td>There, at their posts</td></tr>
      <tr><td>Any sign the gate was opened that week</td><td class="n"><b>none</b></td></tr>
    </table>
    <h4>Why this closes the door — literally</h4>
    <p>The army did not come in through the gate. <b>The gate was still shut when the wall around it stopped existing</b>, and the rubble that buried it fell from above and from outside.</p>
    <p>There is a second point worth making to your team. Somebody inside the city <i>had</i> made a deal with Israel — that is in the file and it is no secret. <b>But what she was asked to do was not open a gate.</b> Read the terms when you get to them.</p>
    <div class="ref">Made-up site report. Background: Joshua 6:1, 6:20 · Joshua 2:12–14.</div>`
},

j06granary:{
  prev:"The jars were full. Nobody in that city was starving.",
  body:`
    <p>A siege works by hunger. It takes months, and it leaves a very particular kind of evidence: empty stores, work animals killed for food, and people who give up rather than die. The food stores tell you straight away whether that happened.</p>
    <table class="ledger">
      <tr><th>Checked</th><th>Found</th></tr>
      <tr><td>Grain jars in the houses along the wall</td><td><b>Full</b>, and burnt where they stood</td></tr>
      <tr><td>Where they were in the farming year</td><td><b>Harvest just brought in</b> — the stores were at their fullest of the year</td></tr>
      <tr><td>Signs of rationing, or of stores being scraped out</td><td class="n"><b>none</b></td></tr>
      <tr><td>Work animals killed for food</td><td class="n"><b>none</b></td></tr>
      <tr><td>Days between the army arriving and the fall</td><td class="n"><b>7</b></td></tr>
    </table>
    <h4>Why full jars are such good evidence</h4>
    <p>They rule out a long siege in one line, and they do something else too: <b>they tell you the city fell in the first days after the army arrived.</b> A city that had held out for months does not have a full year's grain still sitting in its jars.</p>
    <p class="margin-note">Nobody starved this city out. It fell at the top of its harvest, a week after an army turned up and started walking round it.</p>
    <div class="ref">Made-up store report. Background: Joshua 6:15 (seven days) · Joshua 3:15 (harvest time).</div>`
},

j06house:{
  prev:"A house built into the wall, and a piece of cord in its window.",
  body:`
    <p>The bit of wall still standing on the eastern side has a house built into it, and we know a great deal about that house, because the deal made in it was written down by both sides.</p>
    <h4>What happened there before the marching began</h4>
    <ul>
      <li>Two Israelite scouts came into the city and stayed in that house.</li>
      <li>The king's men came looking for them. <b>The woman who kept the house hid them and sent the search off the wrong way.</b></li>
      <li>She told them plainly why: she had heard what happened at the sea, and to the kings east of the Jordan, and she had worked out for herself who was going to end up holding this country.</li>
      <li>She asked for one thing back — that her family be spared.</li>
    </ul>
    <h4>The deal, as agreed</h4>
    <table class="ledger">
      <tr><th>Term</th><th>Detail</th></tr>
      <tr><td>Who is covered</td><td>Her father, mother, brothers, sisters and all their families</td></tr>
      <tr><td>Where they have to be</td><td><b>Inside that house.</b> Anyone who goes out into the street is not covered</td></tr>
      <tr><td>The sign to put up</td><td><b>A scarlet cord, tied in the window</b> — the same cord the scouts climbed down</td></tr>
      <tr><td>What she must not do</td><td>Tell anybody what was agreed</td></tr>
      <tr><td>What she was <i>not</i> asked to do</td><td class="n"><b>Open the gate. Damage the wall. Signal an attack.</b> Nothing like that at all.</td></tr>
    </table>
    <p class="margin-note">A house on a wall, marked in a window, in a city where the entire wall came down except that one piece of it. Whatever hung in that window is the keyword for the second lock.</p>
    <div class="ref">Background: Joshua 2:1–21 · Joshua 6:17.</div>`
},

j06seventh:{
  prev:"Seven times round, one blast, one shout, and the wall was gone.",
  body:`
    <table class="ledger">
      <tr><th>Order of events</th><th>Record</th></tr>
      <tr><td>Getting up</td><td>At dawn — earlier than the other six days</td></tr>
      <tr><td>Times round 1 to 6</td><td>Just like the days before. Silence.</td></tr>
      <tr><td>Time round 7</td><td>One long blast on the trumpets</td></tr>
      <tr><td>The command</td><td>"Shout, for the LORD has given you the city"</td></tr>
      <tr><td>What the people did</td><td>Shouted, all together, as loudly as they could</td></tr>
      <tr><td>What the wall did</td><td><b>Fell down flat</b></td></tr>
      <tr><td>How the army got in</td><td><b>Straight up the rubble — each man straight ahead of him</b></td></tr>
      <tr><td>Time between the shout and the collapse</td><td>Straight away</td></tr>
    </table>
    <h4>The two details we keep coming back to</h4>
    <p>First, <b>how they got in</b>. Nobody climbed, nobody broke through, nobody forced a gate. The wall turned into a ramp and they walked in on a wide front all the way round — which is only possible if the whole circuit fell outwards at the same moment.</p>
    <p>Second, <b>the timing</b>. Not on the first day, not on the sixth, and not at some point during the seventh. On the shout at the end of the seventh time round on the seventh day.</p>
    <div class="ref">Background: Joshua 6:15–20.</div>`
},

j06rahab:{
  prev:"The wall fell. The house did not. The people inside it walked out.",
  body:`
    <p>The two scouts were sent back for them personally, by name, before anything else was done in the city.</p>
    <table class="ledger">
      <tr><th>Record</th><th>Detail</th></tr>
      <tr><td>Who was brought out</td><td>The woman, her father, mother, brothers and everything she had</td></tr>
      <tr><td>State of the house</td><td><b>Still standing.</b> The bit of wall it was built into did not fall</td></tr>
      <tr><td>People hurt in that household</td><td class="n"><b>none</b></td></tr>
      <tr><td>Where they went</td><td>Outside the camp at first, then <b>lived among Israel</b></td></tr>
      <tr><td>How long the record says they stayed</td><td>"To this day"</td></tr>
    </table>
    <h4>Why we file this as evidence, not just a nice ending</h4>
    <p>Because it is the control. Everything else about that wall behaved exactly the same all the way round — same building, same age, same mound, same shout. <b>One piece behaved differently, and the only difference between it and every other piece was a deal made a week earlier and a cord in a window.</b></p>
    <p>You do not have to accept any particular explanation of that. But you do have to explain it somehow, and no natural process on your board can.</p>
    <div class="ref">Background: Joshua 6:22–25 · compare Hebrews 11:31 and James 2:25.</div>`
},

j06ban:{
  prev:"Nothing to be taken. The army walked away with the metal and nothing else.",
  body:`
    <p>We keep this page here for two reasons, and neither of them is the obvious one.</p>
    <h4>The order</h4>
    <table class="ledger">
      <tr><th>What</th><th>Instruction</th></tr>
      <tr><td>The city and everything in it</td><td>Banned — nothing to be taken by anybody</td></tr>
      <tr><td>Silver, gold, bronze, iron</td><td>Into the treasury, weighed in</td></tr>
      <tr><td>The family in the marked house</td><td><b>Spared, by name</b></td></tr>
    </table>
    <h4>Reason one: it rules out the last ordinary motive</h4>
    <p>An army that has come up with a clever way to knock a wall down usually wants what is behind it. <b>This one was banned from taking anything before the wall even fell</b>, which is a strange arrangement for a piece of clever engineering.</p>
    <h4>Reason two: it is where a later case starts</h4>
    <p>One man in that army broke this order. What happened next is <b>Case JM-08 · The Stolen Plunder</b>, and if your class has already done that file, this is where it begins.</p>
    <div class="ref">Background: Joshua 6:17–19 · Joshua 7:1.</div>`
},

j06why:{
  prev:"The evidence is unusually good, and it stops in an unusual place.",
  body:`
    <p>This case has better physical evidence than almost anything else in our archive, and we want you to be exact about what it proves.</p>
    <h4>What the rubble does tell you</h4>
    <ol>
      <li>The wall fell <b>outwards, all the way round, at one moment</b>. Every deliberate way of knocking a wall down drops it the other way.</li>
      <li>Nobody dug: no tunnels, no piles of earth, no burnt props, and no time or cover to do the work.</li>
      <li>Nobody opened the gate: it was barred, undamaged, and buried by the collapse.</li>
      <li>Nobody starved them: the jars were full at the top of the harvest, and the city fell in a week.</li>
      <li>Nobody attacked at night: the city was shut up and watching, in double numbers, all week.</li>
      <li><b>One piece did not fall</b>, and it is the piece with the marked house in it.</li>
    </ol>
    <h4>What the rubble does not tell you</h4>
    <p>It does not tell you what brought the wall down. Rubble never does — it records what happened to a wall, not why. A student who says <i>"an earthquake, and the timing was a coincidence"</i> has not failed this case; they have made a claim, and the file just asks them to explain how a coincidence skips one house on a circuit it flattened everywhere else.</p>
    <h4>The honest end of it</h4>
    <p class="margin-note">Six days of walking achieved nothing at all, and were never meant to. What the file records is a wall that came down on a shout, in the wrong direction, on a timetable, with one exception that had been agreed in advance and marked in a window.</p>
    <div class="ref">Background: Joshua 6 · Joshua 2 · Hebrews 11:30.</div>`
}

},

theories:{
  sappers:{
    title:"1. They dug under the wall while the marching went on",
    claim:"The marching was cover. While the city watched the parade, engineers dug under the foundations and burnt the props.",
    verdict:"The engineering survey proves this wrong. Digging leaves tunnels, piles of soil the size of a house, and burnt props in the foundation — the site has none of them, and there is nowhere on an open plain to hide the earth from a city watching from above. It also takes months and hundreds of men working in the open. And digging drops a wall <i>into</i> the hole underneath it; this one fell outwards, downhill, all the way round."
  },
  quake:{
    title:"2. An earthquake",
    claim:"The Jordan valley shakes, mud brick on a stone base is exactly what falls, and the timing was a coincidence.",
    verdict:"The assessment proves this wrong — and this is the best of the wrong answers, so take it seriously first. An earthquake could certainly drop that wall. What it cannot do is flatten a whole circuit evenly outwards, leave the buildings inside mostly standing, produce no aftershocks, do no damage at all to the camp on the plain, and skip exactly one piece of wall with a marked house in it. An earthquake explains the rubble; it does not explain the pattern, and the pattern is the evidence."
  },
  betrayal:{
    title:"3. Somebody inside opened the gates",
    claim:"There was an informer in the city — that is on the record. She let the army in.",
    verdict:"The gate report proves this wrong. The bar was in place across the inside of the gate, the doors were undamaged, the guards were at their posts, and the whole thing was buried by rubble that fell from above and outside. There <i>was</i> a deal with someone inside — but the terms are in the file, and what she was asked to do was stay indoors and hang a cord in a window. Nobody asked her to open anything."
  },
  siege:{
    title:"4. A long siege starved them out",
    claim:"Cities fall to hunger far more often than to clever engineering. The marching was just the visible part of a long blockade.",
    verdict:"The granary report proves this wrong. The grain jars along the wall were <b>full</b> and burnt where they stood, the harvest had just been brought in, and there is no sign of rationing or of work animals being eaten. A city that had held out for months does not have a full year's grain in its jars — and the marching log counts seven days from the army arriving to the wall falling, not months."
  },
  assault:{
    title:"5. The marching was cover for a night attack",
    claim:"Walk round in daylight until the guards get bored and careless, then go over the wall in the dark.",
    verdict:"The watch record proves this wrong. Jericho was shut up tight all week with double the guards every night, and the survivors report nobody coming near the wall after dark, no digging or hammering, no lights, and no attempt on the gate at any point. As one guard put it, they were watching the army far more carefully than the army was watching them — a whole city of frightened people on a wall, all night, for a week."
  }
},

locks:{
  l1:{
    wrong:"Not quite. Each digit comes from a different document — one of your four is wrong.",
    name:"Field Chest B — the site reports",
    blurb:"A four-digit lock. Each digit answers one question, and each question is answered by a different document already on your desk. Every answer is a single digit.",
    questions:[
      "On how many days did the army walk round the city once?",
      "How many times did they go round on the last day?",
      "How many priests carried trumpets?",
      "How many houses on the wall were left standing?"
    ],
    hints:[
      "The questions are in order. Question one gives the first digit. Every answer is a single digit.",
      "Question 1 is in the marching log. Question 2 is in the order of march. Question 3 is in the procession roster. Question 4 is on the plan of the ruins."
    ],
    reward:"Field Chest B is open. The engineering survey, the earthquake assessment, the gate report, the granary report and the file on the house built into the wall are now on the desk. The 📊 Hypothesis table at the top is now working."
  },
  l2:{
    wrong:"Not quite. Fill in the hypothesis table — the 📊 button at the top — and it will tell you which fact to go and look at.",
    name:"Sealed Pouch C — the sign in the window",
    blurb:"A seven-letter keyword. Take the five explanations to the hypothesis table and check each one against what the site actually shows. Two of the findings will turn out to be things no explanation can account for — and one of them points straight at a single window.",
    questions:[
      "Open the 📊 Hypothesis table from the top bar.",
      "Five explanations, five things found at the site.",
      "Tick a box where that explanation could have produced that finding.",
      "Two columns will be left empty. The second of them names the house you need."
    ],
    hints:[
      "Work along each row. Ask of each explanation: if this is what happened, would I expect to find this?",
      "Every one of the five can live with a barred gate, full grain jars or ground that has not been dug — but not one of them makes a wall fall outwards all the way round, and not one of them leaves a single piece standing."
    ],
    reward:"Sealed Pouch C is open. The record of the seventh day, what happened to the family in the house, the order about taking plunder, and our own analysis are now on the desk."
  }
},

matrix:{
  title:"The Hypothesis Table",
  blurb:"Five explanations down the side, five things the site actually shows across the top. Tick a box wherever that explanation <b>could have produced</b> that finding. Leave it blank where the finding goes against it. When the table is right, look at which columns nobody could tick.",
  corner:"If this is what happened…",
  verify:"Check my table",
  cols:{
    out:  {label:"Wall fell outwards, all round", note:"away from the city"},
    gate: {label:"The gate still barred",         note:"undamaged, buried"},
    grain:{label:"The grain jars full",           note:"harvest just in"},
    dig:  {label:"No tunnels or piles of earth",  note:"nothing dug"},
    house:{label:"One piece left standing",       note:"with a house in it"}
  },
  rows:{
    sap:   {label:"They dug under the wall",   note:"dig, prop, burn"},
    quake: {label:"An earthquake",             note:"the valley does shake"},
    betray:{label:"Somebody opened the gates", note:"an informer inside"},
    siege: {label:"A long siege starved them", note:"months of hunger"},
    night: {label:"A night attack under cover",note:"marching as a decoy"}
  },
  foot:{
    label:"What the site shows",
    note:"rubble, gate, jars, ground, one house",
    cells:{out:"outwards", gate:"barred", grain:"full", dig:"nothing", house:"one"}
  },
  note:"Digging leaves piles of earth, so it cannot tick the fourth column. A siege empties the jars, so it cannot tick the third. A betrayal needs an opened gate, so it cannot tick the second. Work along each row and be honest about what each one would leave behind.",
  reveal:{
    lead:"Three columns nearly everybody can tick — a barred gate, full jars and undug ground are things most of these explanations can live with. Two columns nobody can tick at all. No ordinary explanation drops a wall <i>outwards</i> all the way round, and not one of them leaves a single piece standing. That second empty column is a house, and that house has a written agreement in the file.",
    caption:"A cord in a window, agreed a week before the army arrived — and the only piece of that wall still standing when the rest of it lay flat on the plain."
  }
},

verdicts:{
  sappers: {text:"Israelite engineers dug under the wall while the marching kept the city looking the other way."},
  quake:   {text:"An earthquake brought the wall down, and the timing was a coincidence."},
  betrayal:{text:"The informer inside the city opened the gates to the army."},
  siege:   {text:"A long siege starved Jericho out, and the marching was part of the blockade."},
  assault: {text:"The marching was a decoy for an attack over the wall at night."},
  fell:    {text:"The whole wall fell outwards at one moment on the seventh day, leaving a ramp the army walked up — and the one piece that stayed standing was the piece that had been marked in advance."}
},

debrief:{
  lead:"The rubble decides this case. It lies outwards, down the slope, all the way round — the opposite direction to every deliberate way of bringing a wall down, and the reason the army could walk in on a wide front instead of climbing. No tunnels, no piles of earth, a gate still barred, jars full at the top of the harvest, and a city that watched its own wall every night for a week. And one piece that did not fall, with a house in it that had been marked with a scarlet cord before the army ever arrived.",
  questions:[
    "Six days of marching achieved nothing at all in engineering terms. What might a week of doing nothing visible do to the people inside the city — and to the people doing the marching?",
    "The earthquake explanation is the strongest wrong answer here. What exactly would have to be true for it to work, and which single piece of evidence is hardest for it?",
    "The woman in the house was not asked to open a gate or damage anything — only to stay indoors and hang out a cord. Why might the deal have been written that way?",
    "The army was banned from taking any plunder before the wall even fell. What does that tell you about what the whole thing was understood to be?"
  ]
}

};

registerEasy("jm06", EASY_JM06);
