"use strict";
/* ============================================================
   CASE JM-13 — THE TWELVE REPORTS
   Kadesh.  Source: Numbers 13-14.
   ============================================================ */

SVG.j13grapes = `<svg viewBox="0 0 1536 1024" xmlns="http://www.w3.org/2000/svg"><image href="__IMG_j13grapes__" x="0" y="0" width="1536" height="1024"/><text x="212" y="75" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="21" font-weight="600" fill="#4a3520" textLength="268" lengthAdjust="spacingAndGlyphs">THE CARRYING POLE</text><text x="212" y="99" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="13" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".92" textLength="258" lengthAdjust="spacingAndGlyphs">it took two men to bring it in</text><text x="1241" y="492" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="26" font-weight="600" fill="#4a3520" textLength="196" lengthAdjust="spacingAndGlyphs">THE CLUSTER</text><text x="1241" y="516" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="13" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".92" textLength="286" lengthAdjust="spacingAndGlyphs">one bunch, from the valley of Eshcol</text><text x="415" y="863" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="26" font-weight="600" fill="#4a3520" textLength="140" lengthAdjust="spacingAndGlyphs">THE FIGS</text><text x="415" y="887" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="13" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".92" textLength="238" lengthAdjust="spacingAndGlyphs">and pomegranates, with it</text></svg>`;
SVG.j13route = `<svg viewBox="0 0 1536 1024" xmlns="http://www.w3.org/2000/svg"><image href="__IMG_j13route__" x="0" y="0" width="1536" height="1024"/><text x="283" y="57" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="22" font-weight="600" fill="#4a3520" textLength="168" lengthAdjust="spacingAndGlyphs">THE START</text><text x="283" y="81" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="12" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".92" textLength="236" lengthAdjust="spacingAndGlyphs">up from the wilderness of Zin</text><text x="644" y="481" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="20" font-weight="600" fill="#4a3520" textLength="224" lengthAdjust="spacingAndGlyphs">THE HILL COUNTRY</text><text x="644" y="505" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="12" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".92" textLength="232" lengthAdjust="spacingAndGlyphs">forty days, one party, one route</text><text x="1369" y="660" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="24" font-weight="600" fill="#4a3520" textLength="146" lengthAdjust="spacingAndGlyphs">HEBRON</text><text x="1369" y="684" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="12" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".92" textLength="214" lengthAdjust="spacingAndGlyphs">where the sons of Anak lived</text></svg>`;
SVG.j13reports = `<svg viewBox="0 0 1536 1024" xmlns="http://www.w3.org/2000/svg"><image href="__IMG_j13reports__" x="0" y="0" width="1536" height="1024"/><text x="383" y="190" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="36" font-weight="600" fill="#4a3520" textLength="470" lengthAdjust="spacingAndGlyphs">THE REPORT OF THE TEN</text><text x="383" y="228" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="17" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".9" textLength="400" lengthAdjust="spacingAndGlyphs">as taken down before the whole assembly</text><text x="1152" y="190" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="36" font-weight="600" fill="#4a3520" textLength="470" lengthAdjust="spacingAndGlyphs">THE REPORT OF THE TWO</text><text x="1152" y="228" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="17" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".9" textLength="400" lengthAdjust="spacingAndGlyphs">Caleb son of Jephunneh, Joshua son of Nun</text><text x="383" y="900" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="18" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".85" textLength="330" lengthAdjust="spacingAndGlyphs">sealed at Kadesh, on the fortieth day</text><text x="1140" y="900" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="18" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".85" textLength="330" lengthAdjust="spacingAndGlyphs">sealed at Kadesh, on the fortieth day</text></svg>`;

const JM13_ITEMS = [

/* ---------------- STAGE 0 ---------------- */
{
  id:"j13letter", stage:0, notEvidence:true, kind:"Briefing", title:"Letter from the Case Supervisor",
  sub:"The Chronicle Society · Department of Unsolved Antiquities",
  prev:"Twelve men, one country, forty days — and two reports that cannot both be right.",
  x:22, y:26, rot:-3, w:216,
  body:`
    <p><b>To the investigating team,</b></p>
    <p>Twelve men are sent to survey the country of Canaan. One from each tribe. They are gone forty days. They come back carrying a single bunch of grapes so heavy it has to be slung from a pole between two of them.</p>
    <p>Then they give their report — and it splits. Ten men say the country cannot be taken. Two say it can. The assembly hears both and believes the ten.</p>
    <p><b>Here is the difficulty.</b> Put the two reports side by side and read them line by line. <i>Not one fact differs.</i> Every observation in the ten's report is in the two's report as well, in almost the same words.</p>
    <h4>Your task</h4>
    <p>Five explanations are on the board, and four of them assume somebody was lying, mistaken, or working to instructions. Close all five. Then say what actually separates the two reports — because it is not a fact.</p>
    <h4>How the file works</h4>
    <ul>
      <li>Everything on the desk now is yours.</li>
      <li>Two parts of the file are <b>locked</b>. Both codes are in documents you have or will have.</li>
      <li>The second lock opens with the <b>testimony grid</b> — the 📑 button in the top bar, once the first lock is open.</li>
      <li>When all five explanations are closed, go to the <b>Pinboard</b>.</li>
    </ul>
    <p class="margin-note">This is the cleanest case in the archive on the difference between a fact and a conclusion. Do it early with a new team.</p>
    <div class="sig">A. Thorne</div>
    <div class="small" style="color:#5b4a35">Case Supervisor</div>
    <div class="ref">This case is reconstructed from Numbers 13–14.</div>`
},
{
  id:"j13reports", stage:0, kind:"Reports", title:"The Two Reports, Side by Side",
  sub:"As taken down before the whole assembly", thumb:"j13reports",
  prev:"Read them line by line. Every fact in one is in the other.",
  x:52, y:22, rot:3, w:218,
  body:`
    <div class="plate">${SVG.j13reports}<div class="cap">Click the plate to enlarge it. The two sheets as filed.</div></div>
    <table class="ledger">
      <tr><th>Observation</th><th>The ten</th><th>The two</th></tr>
      <tr><td>The land flows with milk and honey</td><td>stated</td><td>stated</td></tr>
      <tr><td>The fruit is extraordinary — one cluster needs two men</td><td>stated</td><td>stated</td></tr>
      <tr><td>The people who live there are strong</td><td>stated</td><td>stated</td></tr>
      <tr><td>The cities are fortified and very large</td><td>stated</td><td>stated</td></tr>
      <tr><td>The descendants of Anak are there</td><td>stated</td><td>stated</td></tr>
      <tr><td>Amalekites in the south; Hittites, Jebusites and Amorites in the hills; Canaanites by the sea</td><td>stated</td><td>stated</td></tr>
      <tr><td><b>Facts that differ</b></td><td colspan="2" class="n"><b>0</b></td></tr>
    </table>
    <h4>Where they part</h4>
    <table class="ledger">
      <tr><th></th><th>The ten conclude</th><th>The two conclude</th></tr>
      <tr><td>Can it be taken?</td><td>"We are not able to go up against the people, for they are stronger than we"</td><td>"Let us go up at once and possess it, for we are well able to overcome it"</td></tr>
      <tr><td>The comparison used</td><td><b>"We were in our own sight as grasshoppers, and so we were in their sight"</b></td><td><b>"Their defence is departed from them, and the LORD is with us"</b></td></tr>
    </table>
    <h4>Count the things all twelve agreed on</h4>
    <p>Ask it precisely: how many statements about the <b>land itself</b> did every single one of the twelve make? <b>One</b> — that it is a good country, flowing with milk and honey. Not one man disputed it. That number is in the first lock, and so is the number of facts in dispute.</p>
    <p class="margin-note">Two men and ten men looked at the same walls and the same giants. The disagreement is entirely in the last line of each report.</p>
    <div class="ref">Background: Numbers 13:27–33 · 14:6–9.</div>`
},
{
  id:"j13grapes", stage:0, kind:"Evidence", title:"The Fruit, In Evidence",
  sub:"Brought back from the valley of Eshcol", thumb:"j13grapes",
  prev:"One cluster, carried on a pole between two men. Nobody disputed it.",
  x:78, y:26, rot:-4, w:214,
  body:`
    <div class="plate">${SVG.j13grapes}<div class="cap">Click the plate to enlarge it.</div></div>
    <p>The survey party did not come back with a description of the fruit. They came back with the fruit.</p>
    <table class="ledger">
      <tr><th>Item</th><th>Note</th></tr>
      <tr><td>Grapes</td><td>A single cluster, cut at Eshcol, <b>slung from a pole and carried by two men</b></td></tr>
      <tr><td>Pomegranates</td><td>Brought back with it</td></tr>
      <tr><td>Figs</td><td>Brought back with it</td></tr>
      <tr><td>Disputed by the ten?</td><td class="n"><b>no</b></td></tr>
    </table>
    <h4>Why this closes an explanation</h4>
    <p>The obvious suspicion about a minority report is that the two men talked the country up. They did not need to. <b>The evidence for the good land is physical, it is on the table, and the ten carried half of it in themselves.</b> Both reports open with the same sentence about milk and honey.</p>
    <p class="margin-note">This is the only case in the archive where the exhibit is a fruit. Worth producing a real bunch of grapes on the desk if you can.</p>
    <div class="ref">Background: Numbers 13:23–27.</div>`
},
{
  id:"j13route", stage:0, kind:"Survey plan", title:"The Survey Route",
  sub:"One party, one route, forty days", thumb:"j13route",
  prev:"They did not split up. Every man walked the same road.",
  x:26, y:56, rot:5, w:214,
  body:`
    <div class="plate">${SVG.j13route}<div class="cap">Click the plan to enlarge it.</div></div>
    <table class="ledger">
      <tr><th>Stage</th><th>Recorded</th></tr>
      <tr><td>Departure</td><td>From the wilderness of Paran, by way of Zin — <b>all twelve together</b></td></tr>
      <tr><td>Through</td><td>The Negeb, then the hill country</td></tr>
      <tr><td>As far as</td><td>Hebron, where the descendants of Anak were, and on to Rehob toward Hamath</td></tr>
      <tr><td>Duration</td><td class="n"><b>40 days</b></td></tr>
      <tr><td>Parties</td><td class="n"><b>1</b> — no separate detachment is recorded at any point</td></tr>
      <tr><td>Return</td><td>To Kadesh, in the wilderness of Paran, together</td></tr>
    </table>
    <h4>Why "they surveyed different regions" fails</h4>
    <p>There is one route and one party. The two who gave the minority report walked past the same walls, into the same valley, and stood under the same city gate as the ten. <b>Whatever explains the difference, it is not that they saw different things.</b></p>
    <p class="margin-note">Forty days is a long time to spend agreeing about the facts.</p>
    <div class="ref">Background: Numbers 13:21–26.</div>`
},
{
  id:"j13roster", stage:0, kind:"Roster", title:"The Twelve, and How They Reported",
  sub:"One man from each tribe",
  prev:"Ten against. Two for. Named, tribe by tribe.",
  x:56, y:52, rot:-2, w:208,
  body:`
    <table class="ledger">
      <tr><th>Tribe</th><th>Man sent</th><th>Report</th></tr>
      <tr><td>Reuben</td><td>Shammua</td><td>against</td></tr>
      <tr><td>Simeon</td><td>Shaphat</td><td>against</td></tr>
      <tr><td><b>Judah</b></td><td><b>Caleb son of Jephunneh</b></td><td><b>for</b></td></tr>
      <tr><td>Issachar</td><td>Igal</td><td>against</td></tr>
      <tr><td><b>Ephraim</b></td><td><b>Hoshea son of Nun — called Joshua</b></td><td><b>for</b></td></tr>
      <tr><td>Benjamin</td><td>Palti</td><td>against</td></tr>
      <tr><td>Zebulun</td><td>Gaddiel</td><td>against</td></tr>
      <tr><td>Manasseh</td><td>Gaddi</td><td>against</td></tr>
      <tr><td>Dan</td><td>Ammiel</td><td>against</td></tr>
      <tr><td>Asher</td><td>Sethur</td><td>against</td></tr>
      <tr><td>Naphtali</td><td>Nahbi</td><td>against</td></tr>
      <tr><td>Gad</td><td>Geuel</td><td>against</td></tr>
      <tr><td><b>Brought back a good report</b></td><td colspan="2" class="n"><b>2</b></td></tr>
    </table>
    <h4>Note</h4>
    <p>These were not junior men. Every one of them was a leader of his tribe, chosen for the job. The two who dissented had no more information and no more authority than the ten.</p>
    <p class="margin-note">Two out of twelve. That number is the first digit of the first lock.</p>
    <div class="ref">Background: Numbers 13:1–16.</div>`
},
{
  id:"j13outcome", stage:0, kind:"Outcome sheet", title:"What Happened Afterwards",
  sub:"At a glance, for the file",
  prev:"Forty years in the wilderness. Of that whole generation, two men went in.",
  x:80, y:56, rot:4, w:206,
  body:`
    <table class="ledger">
      <tr><th>Consequence</th><th>Record</th></tr>
      <tr><td>The assembly's decision</td><td>Refused to go up; proposed choosing a captain and returning to Egypt</td>
      </tr><tr><td>The sentence</td><td><b>Forty years in the wilderness — a year for each day of the survey</b></td></tr>
      <tr><td>The ten who brought the bad report</td><td>Died in a plague before the LORD</td></tr>
      <tr><td>Of that generation, twenty years old and upward</td><td>None entered the land</td></tr>
      <tr><td><b>Exceptions</b></td><td class="n"><b>2</b> — Caleb and Joshua</td></tr>
      <tr><td>Caleb, forty-five years later</td><td>Asked for the hill country of Hebron, and took it</td></tr>
    </table>
    <h4>Note for the first lock</h4>
    <p><b>Two</b> men of that generation entered the land, and they are the same two who signed the minority report. Forty days of survey became forty years of consequence.</p>
    <p class="margin-note">The archive files this as a decision case, not a disaster case. Everything that follows was chosen.</p>
    <div class="ref">Background: Numbers 14:22–38 · Joshua 14:6–14.</div>`
},

/* ---------------- STAGE 1 — released by the numbers lock ---------------- */
{
  id:"j13orders", stage:1, kind:"Instructions", title:"The Sealed Instructions",
  sub:"Field Chest B · what all twelve were told to find out",
  prev:"Identical orders, given to all twelve at once. Nobody was told what to conclude.",
  x:28, y:26, rot:-3, w:212,
  body:`
    <p>The suspicion that the two were briefed to bring back an encouraging report requires somebody to have briefed them. The instructions survive, and they were given to the whole party together.</p>
    <div class="doc-body">
      <p>"Go up into the Negeb, and go up into the hill country, and see what the land is,</p>
      <p><b>and whether the people who dwell in it are strong or weak, whether they are few or many,</b></p>
      <p>and whether the land they dwell in is good or bad, and whether the cities they dwell in are camps or strongholds,</p>
      <p>and whether the land is rich or poor, and whether there are trees in it or not.</p>
      <p><b>Be of good courage, and bring some of the fruit of the land.</b>"</p>
    </div>
    <h4>What the orders do and do not say</h4>
    <ul>
      <li>They ask for <b>observations</b>, in pairs of alternatives: strong or weak, few or many, good or bad, camps or strongholds.</li>
      <li>They ask for a <b>sample</b> — physical evidence, not an impression.</li>
      <li>They do <b>not</b> ask "can it be taken?" That question was never in the brief. Both halves of the party answered it anyway.</li>
      <li>All twelve received the same sheet at the same time. There is no separate instruction to anybody.</li>
    </ul>
    <p class="margin-note">Notice what happens when people answer a question they were not asked: the answer feels like part of the report, and it is not.</p>
    <div class="ref">Background: Numbers 13:17–20.</div>`
},
{
  id:"j13assembly", stage:1, kind:"Assembly record", title:"The Assembly Record",
  sub:"Field Chest B · the order of the meeting",
  prev:"Both reports were heard in full. The assembly decided afterwards.",
  x:58, y:24, rot:4, w:208,
  body:`
    <p>The last explanation on the board is that the people had made up their minds before anybody spoke. The record of the meeting says otherwise, and the order matters.</p>
    <table class="ledger">
      <tr><th>Order</th><th>What happened</th></tr>
      <tr><td>1</td><td>The party returns and reports to Moses, Aaron <b>and the whole congregation</b></td></tr>
      <tr><td>2</td><td>The fruit is shown to everybody</td></tr>
      <tr><td>3</td><td>The good report of the land is given — <b>all twelve</b></td></tr>
      <tr><td>4</td><td>The ten add: "Nevertheless the people are strong… we are not able"</td></tr>
      <tr><td>5</td><td><b>Caleb stills the people</b> and gives the minority view: "Let us go up at once"</td></tr>
      <tr><td>6</td><td>The ten answer him with the grasshopper comparison</td></tr>
      <tr><td>7</td><td>Joshua and Caleb speak again, at length, the following day</td></tr>
      <tr><td>8</td><td>Only then does the congregation decide — and it decides against them</td></tr>
    </table>
    <h4>Why "they had already decided" fails</h4>
    <p>Both cases were put, twice, in public, and the second one was heard at length. <b>The assembly did not fail to hear the minority report; it heard it and rejected it.</b> That is a harder thing to look at, and it is what the record says.</p>
    <p class="margin-note">A decision made after hearing both sides is still a decision. This case is about how it was made, not whether it was informed.</p>
    <div class="ref">Background: Numbers 13:26–33 · 14:1–10.</div>`
},
{
  id:"j13measure", stage:1, kind:"Society analysis", title:"Two Ways of Measuring",
  sub:"Field Chest B · what the last line of each report is doing",
  prev:"Same giants, two yardsticks. Everything turns on what you hold them against.",
  x:80, y:44, rot:-6, w:210,
  body:`
    <p>Set the two closing lines beside each other and look at the <b>comparison</b> each one makes.</p>
    <table class="ledger">
      <tr><th></th><th>The ten</th><th>The two</th></tr>
      <tr><td>The measured thing</td><td>The people of the land</td><td>The people of the land</td></tr>
      <tr><td>Measured against</td><td><b>Themselves</b></td><td><b>God</b></td></tr>
      <tr><td>The image used</td><td>"We were in our own sight as grasshoppers"</td><td>"They are bread for us"</td></tr>
      <tr><td>The conclusion</td><td>Impossible</td><td>Possible</td></tr>
      <tr><td>Facts required</td><td class="n">none extra</td><td class="n">none extra</td></tr>
    </table>
    <h4>The phrase to notice</h4>
    <p>"We were in our own sight as grasshoppers, <b>and so we were in their sight.</b>" The second half is presented as an observation and it is not one — <b>nobody in Canaan told them that.</b> It is a guess about what other people think, produced by how the ten already felt, and reported as though it were something they had seen.</p>
    <h4>The transferable idea</h4>
    <p>A fact is what you saw. A conclusion is what you did with it. This file is the clearest example in the archive of two teams sharing every fact and dividing entirely on the second step — and of a feeling being written up as evidence.</p>
    <p class="margin-note">Ask your team to underline every line of the ten's report that could be checked by somebody else. The grasshopper sentence cannot.</p>
    <div class="ref">Background: Numbers 13:31–33 · 14:9.</div>`
},
{
  id:"j13caleb", stage:1, kind:"Later statement", title:"Caleb, Forty-Five Years On",
  sub:"Field Chest B · recorded when the land was divided",
  prev:"“I brought him word again as it was in my heart.” He asked for the giants' hill country.",
  x:46, y:62, rot:3, w:206,
  body:`
    <div class="doc-body">
      <p>"Forty years old was I when Moses sent me to spy out the land, and I brought him word again as it was in my heart. My brethren that went up with me made the heart of the people melt: <b>but I wholly followed the LORD my God.</b></p>
      <p>And now, see, the LORD has kept me alive these forty-five years… I am this day eighty-five years old, and as yet I am as strong this day as I was in the day that Moses sent me.</p>
      <p><b>Now therefore give me this mountain</b>, whereof the LORD spoke in that day — for you heard in that day how the Anakim were there, and that the cities were great and fenced."</p>
    </div>
    <h4>What the Society draws from this</h4>
    <ul>
      <li>Caleb repeats the ten's facts <b>approvingly</b> — great cities, fenced, Anakim present. He never disputed a word of it.</li>
      <li>He asks for the hardest part of the country, by name, at eighty-five.</li>
      <li>"As it was in my heart" is his own account of the difference: not better information, but what he did with the same information.</li>
    </ul>
    <p class="margin-note">Forty-five years later he is still quoting the majority report accurately. That is worth saying out loud to a class.</p>
    <div class="ref">Background: Joshua 14:6–14.</div>`
},

/* ---------------- STAGE 2 — released by the keyword lock ---------------- */
{
  id:"j13sentence", stage:2, kind:"Sentence", title:"A Year for a Day",
  sub:"Sealed Pouch C",
  prev:"Forty days of survey; forty years of consequence. The proportion is deliberate.",
  x:26, y:28, rot:-3, w:210,
  body:`
    <table class="ledger">
      <tr><th>Element</th><th>Record</th></tr>
      <tr><td>The survey</td><td class="n">40 days</td></tr>
      <tr><td>The sentence</td><td class="n"><b>40 years — "each day for a year"</b></td></tr>
      <tr><td>Who is bound by it</td><td>Everyone counted at twenty years old and upward</td></tr>
      <tr><td>Who is exempt</td><td>Caleb, Joshua — and the children the assembly had said would be taken as prey</td></tr>
      <tr><td>The stated reason for Caleb's exemption</td><td>"He had another spirit with him, and has followed me fully"</td></tr>
      <tr><td>The children</td><td><b>They are the ones who go in</b> — the exact people the fear was about</td></tr>
    </table>
    <h4>The turn worth pointing out</h4>
    <p>The assembly's argument against going up was that their children would be taken. <b>The children are the generation that takes the land.</b> The thing they were most afraid of losing is the thing that was not lost.</p>
    <div class="ref">Background: Numbers 14:29–34.</div>`
},
{
  id:"j13presume", stage:2, kind:"Field report", title:"The Next Morning",
  sub:"Sealed Pouch C · they changed their minds, and went anyway",
  prev:"Told not to go up, they went up. It went exactly as badly as the ten had predicted.",
  x:56, y:30, rot:4, w:208,
  body:`
    <p>The strangest page in the file, and the one that settles what the case is really about.</p>
    <table class="ledger">
      <tr><th>Step</th><th>What happened</th></tr>
      <tr><td>1</td><td>Hearing the sentence, the people say: "We have sinned. We will go up now."</td></tr>
      <tr><td>2</td><td>They are told plainly <b>not</b> to go — "go not up, for the LORD is not among you"</td></tr>
      <tr><td>3</td><td>They go up anyway, without Moses and without the ark</td></tr>
      <tr><td>4</td><td>The Amalekites and Canaanites come down and beat them back to Hormah</td></tr>
    </table>
    <h4>Why this page matters</h4>
    <p>On the second morning they were <b>brave</b>, and it made no difference at all. The case was never about courage as a personal quality. <b>The two men's report did not say "we are strong"; it said "the LORD is with us"</b> — and when that clause was missing the next day, the ten's prediction came true exactly.</p>
    <p class="margin-note">This is the page that stops the case being reduced to "believe in yourself". The record goes out of its way to rule that reading out.</p>
    <div class="ref">Background: Numbers 14:39–45.</div>`
},
{
  id:"j13lesson", stage:2, kind:"Society analysis", title:"Fact, Conclusion, and the Word Between Them",
  sub:"Sealed Pouch C",
  prev:"Nobody lied. That is what makes this case worth a whole lesson.",
  x:80, y:34, rot:-4, w:212,
  body:`
    <p>The Society keeps this file at the front of the training set for one reason: <b>it contains no deception at all.</b> No forged prop, no planted evidence, no false witness. Twelve honest men and one honest report of the facts.</p>
    <h4>What the grid shows</h4>
    <p>Fill in the testimony grid and every single box earns a tick. That is the finding: <b>the reports agree.</b> The disagreement lives entirely in one sentence at the end of each, and that sentence is not a fact — it is what each party did with the facts.</p>
    <h4>Three things to take away</h4>
    <ul>
      <li><b>Separate the two halves of any report you are given.</b> What did they see, and what do they conclude? Draw a line between them on the page.</li>
      <li><b>Watch for feelings written up as observations.</b> "And so we were in their sight" is the sentence to hunt for — in this file and everywhere else.</li>
      <li><b>Ask what the comparison is.</b> Ten men measured giants against themselves. Two measured them against something else. The giants did not change size.</li>
    </ul>
    <p class="margin-note">Do this case early. Every later case in the archive gets easier once a team can reliably tell a fact from what somebody made of it.</p>
    <div class="ref">Background: Numbers 13–14 · Joshua 14:6–14 · compare Hebrews 3:16–19.</div>`
}
];

const JM13_THEORIES = [
  {
    id:"lied",
    title:"1. The ten lied about what they saw",
    claim:"They invented giants and fortifications to frighten the people out of going up.",
    answer:"j13reports",
    verdict:"The two reports kill it. Lay them side by side and not one fact differs: milk and honey, extraordinary fruit, strong people, fortified cities, the descendants of Anak, the same four nations in the same four places. Caleb and Joshua state every one of those things too — and Caleb was still repeating them, approvingly, forty-five years later. The ten reported the country accurately."
  },
  {
    id:"exaggerated",
    title:"2. The two exaggerated how good the land was",
    claim:"Caleb and Joshua talked the country up to win the argument.",
    answer:"j13grapes",
    verdict:"The fruit kills it. They did not describe the land, they carried it back: a single cluster of grapes slung on a pole between two men, with pomegranates and figs. The ten helped carry it, and the ten's own report opens with milk and honey. There was nothing to exaggerate and nobody disputed it."
  },
  {
    id:"regions",
    title:"3. They surveyed different parts of the country",
    claim:"The two saw the soft south; the ten went north into the fortified hill country.",
    answer:"j13route",
    verdict:"The route plan kills it. One party, one route, forty days: up through the Negeb, into the hill country, as far as Hebron where the Anakim were, on to Rehob, and back to Kadesh together. No detachment is recorded at any point. All twelve stood under the same walls."
  },
  {
    id:"orders",
    title:"4. The two had orders to bring back a good report",
    claim:"Somebody wanted the invasion to go ahead and briefed them accordingly.",
    answer:"j13orders",
    verdict:"The sealed instructions kill it. One sheet, given to all twelve together, asking only for observations in pairs — strong or weak, few or many, good or bad, camps or strongholds — and a sample of the fruit. It never asks whether the land can be taken. There is no separate briefing to anybody, and the question they divided on was not in the orders at all."
  },
  {
    id:"predecided",
    title:"5. The people had decided before they heard either report",
    claim:"The assembly was never going to go up, whatever the survey said.",
    answer:"j13assembly",
    verdict:"The assembly record kills it. Both cases were put in public: the good report of the land first, then the ten's conclusion, then Caleb stilling the people, then the ten answering him, then Joshua and Caleb again at length the next day. The congregation heard the minority report twice, in full, and then chose against it."
  }
];

const JM13_LOCKS = [
  {
    id:"l1", type:"number", code:"2120", len:4,
    wrong:"Not that. Each digit comes from a different document — one of the four is wrong.",
    name:"Field Chest B — the survey papers",
    blurb:"A four-digit lock. Four questions, four documents on your desk. The last answer is the one that makes this case difficult, and it is zero.",
    questions:[
      "How many of the twelve brought back a good report?",
      "How many things about the land did all twelve agree on?",
      "How many of that generation entered the land?",
      "How many facts differ between the two reports?"
    ],
    hints:[
      "The questions are in order: question one gives the first digit. Every answer is a single digit.",
      "Question 1 is the roster. Question 2 is the reports — count the statements about the land itself that nobody disputed. Question 3 is the outcome sheet. Question 4 is the reports again.",
      "Two men. One agreed thing — that it is a good land. Two of that generation went in, and they are the same two. And the number of facts in dispute is none at all."
    ],
    reward:"Field Chest B is open: the sealed instructions, the assembly record, the Society's note on the two closing lines, and Caleb's statement forty-five years later. The 📑 Testimony grid in the top bar is live."
  },
  {
    id:"l2", type:"word", code:"AGREED", len:6,
    wrong:"Not that. Fill in the testimony grid — the 📑 button in the top bar. Then read what a completely full grid is telling you.",
    name:"Sealed Pouch C — what the grid proves",
    blurb:"A six-letter keyword. Take both reports to the testimony grid and mark every line where the two match. When you have finished, look at the grid as a whole: its shape is the answer.",
    questions:[
      "Open the 📑 Testimony grid from the top bar.",
      "Six observations down the side, three columns across the top.",
      "Tick a box wherever that observation really is in that report, in those words.",
      "Then stand back and describe the finished grid in one word."
    ],
    hints:[
      "Do not look for the trick. Every line in the ten's report is in the two's report as well.",
      "You will finish with every box ticked. That is not a mistake — it is the finding.",
      "Twelve men, one country, and not one fact in dispute. What did they all do? Six letters, past tense."
    ],
    reward:"Sealed Pouch C is open: the sentence and its proportion, the strange business of the next morning, and the Society's analysis of fact and conclusion."
  }
];

const JM13_MATRIX = {
  button:"📑 Testimony grid",
  title:"The Testimony Grid",
  blurb:"Six observations from the survey, down the side. Three columns across the top. Tick a box wherever that observation genuinely appears in that report — and be exact: only tick the third column if the two reports say it in the same terms.",
  corner:"The observation",
  verify:"Check the grid",
  mark:"✔",
  cols:[
    {id:"ten",  label:"In the ten's report",  note:"the majority"},
    {id:"two",  label:"In the two's report",  note:"Caleb and Joshua"},
    {id:"same", label:"Stated in the same terms", note:"word for word, near enough"}
  ],
  rows:[
    {id:"milk",   label:"Flowing with milk and honey", note:"a good country"},
    {id:"fruit",  label:"Extraordinary fruit",         note:"one cluster, two men"},
    {id:"strong", label:"The people are strong",       note:"nobody softens it"},
    {id:"cities", label:"The cities are fortified and very large", note:"walled"},
    {id:"anak",   label:"The descendants of Anak are there", note:"named in both"},
    {id:"nations",label:"Amalek in the south, Hittites and Amorites in the hills, Canaanites by the sea", note:"the same four, in the same four places"}
  ],
  truth:[
    "milk|ten","milk|two","milk|same",
    "fruit|ten","fruit|two","fruit|same",
    "strong|ten","strong|two","strong|same",
    "cities|ten","cities|two","cities|same",
    "anak|ten","anak|two","anak|same",
    "nations|ten","nations|two","nations|same"
  ],
  foot:{
    label:"Facts in dispute between the two reports",
    note:"after both were read to the assembly",
    cells:{ten:"none", two:"none", same:"all of it"}
  },
  note:"Most grids in this archive are mostly empty. This one is not, and that is the point — so resist the urge to leave a box blank just to make the pattern look more interesting.",
  reveal:{
    lead:"Every box. Eighteen out of eighteen. Twelve men walked one road for forty days and came back with an identical description of the country — the good land, the enormous fruit, the strong people, the walled cities, the giants, and the four nations in their four places. Not one fact is in dispute anywhere in this file. The reports part on the last line of each, and the last line of each is not an observation at all: it is what the men decided the facts meant.",
    answer:"AGREED",
    caption:"On the facts, all twelve agreed. Ten measured the giants against themselves and concluded it was impossible; two measured them against God and concluded it was not. Nobody lied — which is what makes this the hardest kind of disagreement to see coming."
  }
};

const JM13_VERDICTS = [
  {id:"lied",        text:"The ten invented the giants and the walls to frighten the people."},
  {id:"exaggerated", text:"Caleb and Joshua talked the country up to win the argument."},
  {id:"regions",     text:"The two parties surveyed different regions and saw different things."},
  {id:"orders",      text:"Caleb and Joshua were briefed in advance to bring back a good report."},
  {id:"predecided",  text:"The assembly had already made up its mind before either report was read."},
  {id:"same",        text:"Nobody lied and nobody was mistaken. Twelve men reported exactly the same country, and divided entirely on what they measured it against — ten against themselves, two against God."}
];

const CASE_JM13 = {
  id:"jm13", code:"CASE JM-13", title:"The Twelve Reports",
  period:"Kadesh · c. 1445 BC", colour:"#5c6b3a", poster:"poster_jm13",
  teaser:"Twelve men survey one country for forty days and come back with a bunch of grapes that takes two of them to carry — and two reports that cannot both be right. Except that every fact in them is identical.",
  introSub:"The disagreement is real. The facts are not in dispute at all.",
  items:JM13_ITEMS, theories:JM13_THEORIES, locks:JM13_LOCKS, verdicts:JM13_VERDICTS,
  matrix:JM13_MATRIX,
  correct:"same",
  boardTitle:"Two Reports, One Country",
  boardIntro:"Five explanations have been offered for how one survey produced two reports. For each one, pin the <b>single</b> document that makes it impossible. When all five are closed, the accusation form opens.",
  accusationIntro:"Nobody lied, nobody exaggerated, nobody went somewhere else, nobody was briefed, and the assembly did hear both sides. Say what the file will actually support — and be precise about <i>where</i> the two reports part company.",
  debrief:{
    lead:"Twelve men walked one route for forty days and came back with the same country in their notebooks: a good land, extraordinary fruit, strong people, walled cities, giants, four nations in four places. Not one fact differs between the majority and minority reports. What differs is the last line. Ten men held the giants up against themselves and said it was impossible; two held them up against God and said it was not. The assembly heard both, twice, and chose the ten — and the next morning, told not to go, went up on their own courage and were beaten.",
    questions:[
      "Where exactly does the ten's report stop being observation and start being conclusion? Point at the sentence.",
      "\"And so we were in their sight.\" How could the ten possibly know that — and why did nobody challenge it?",
      "Is it fair to call the ten cowards? They reported the facts accurately and drew a reasonable conclusion from them. What were they missing?",
      "On the second morning they were brave and it went badly anyway. What does that page rule out about the meaning of this case?",
      "Think of a disagreement you have had where you and the other person agreed on all the facts. What were you actually disagreeing about?"
    ],
    refs:"Numbers 13–14 · Joshua 14:6–14 · Hebrews 3:16–19"
  },
  teacher:{
    answers:"Lock 1 code <b>2120</b> (2 good reports · 1 thing all twelve agreed the land was · 2 of that generation entered · 0 facts differ). Lock 2 keyword <b>AGREED</b>, from the 📑 Testimony grid: all eighteen boxes are ticked. The full grid <i>is</i> the finding.",
    pairs:"The ten lied → The Two Reports, Side by Side; the two exaggerated → The Fruit, In Evidence; different regions → The Survey Route; the two were briefed → The Sealed Instructions; the people had already decided → The Assembly Record.",
    conclusion:"Twelve honest men reported one country identically. The division is entirely in the conclusion drawn from shared facts, and turns on what each party measured the giants against.",
    prompts:"\"Underline every line of the ten's report that somebody else could check.\" · \"Which sentence could nobody verify?\" · \"What is a fact and what is a conclusion — draw the line on the page.\" · \"Would you have voted with the ten? Be honest.\"",
    extra:"This is the archive's teaching case for fact versus conclusion, and it works best early in the year — every later case gets easier once a team can separate the two reliably. The all-ticked grid surprises students and several groups will assume they have made a mistake; let that sit before you confirm it. Strong extension: give groups a short news item and ask them to split it into observations and conclusions with a ruled line. Pair with JM-09, where the evidence itself is dishonest, for the contrast."
  }
};

registerCase(CASE_JM13);
