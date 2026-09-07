"use strict";
/* ============================================================
   CASE JM-11 — THE CART THAT CHOSE ITS OWN ROAD
   Philistia.  Source: 1 Samuel 5–6.
   ============================================================ */

SVG.j11road = `<svg viewBox="0 0 1536 1024" xmlns="http://www.w3.org/2000/svg"><image href="__IMG_j11road__" x="0" y="0" width="1536" height="1024"/><text x="369" y="57" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="25" font-weight="600" fill="#4a3520" textLength="120" lengthAdjust="spacingAndGlyphs">EKRON</text><text x="369" y="81" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="12" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".92" textLength="238" lengthAdjust="spacingAndGlyphs">the Philistine city they left</text><text x="1271" y="79" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="21" font-weight="600" fill="#4a3520" textLength="222" lengthAdjust="spacingAndGlyphs">BETH SHEMESH</text><text x="1271" y="103" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="12" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".92" textLength="244" lengthAdjust="spacingAndGlyphs">in Israel, up the straight road</text><text x="1036" y="682" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="25" font-weight="600" fill="#4a3520" textLength="140" lengthAdjust="spacingAndGlyphs">THE FORK</text><text x="1036" y="706" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="12" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".92" textLength="232" lengthAdjust="spacingAndGlyphs">turn left for home, or go on</text></svg>`;
SVG.j11cart = `<svg viewBox="0 0 1536 1024" xmlns="http://www.w3.org/2000/svg"><image href="__IMG_j11cart__" x="0" y="0" width="1536" height="1024"/><text x="516" y="77" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="22" font-weight="600" fill="#4a3520" textLength="196" lengthAdjust="spacingAndGlyphs">THE YOKE POLE</text><text x="516" y="101" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="12" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".92" textLength="214" lengthAdjust="spacingAndGlyphs">two milk cows, never yoked</text><text x="875" y="141" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="24" font-weight="600" fill="#4a3520" textLength="142" lengthAdjust="spacingAndGlyphs">THE CHEST</text><text x="875" y="165" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="13" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".92" textLength="158" lengthAdjust="spacingAndGlyphs">the ark of Israel</text><text x="1276" y="214" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="22" font-weight="600" fill="#4a3520" textLength="196" lengthAdjust="spacingAndGlyphs">THE SMALL BOX</text><text x="1276" y="238" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="13" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".92" textLength="164" lengthAdjust="spacingAndGlyphs">the guilt offering</text></svg>`;
SVG.j11temple = `<svg viewBox="0 0 1536 1024" xmlns="http://www.w3.org/2000/svg"><image href="__IMG_j11temple__" x="0" y="0" width="1536" height="1024"/><text x="1006" y="271" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="20" font-weight="600" fill="#4a3520" textLength="232" lengthAdjust="spacingAndGlyphs">THE EMPTY PLINTH</text><text x="1006" y="295" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="12" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".92" textLength="206" lengthAdjust="spacingAndGlyphs">found empty, two mornings</text><text x="562" y="783" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="22" font-weight="600" fill="#4a3520" textLength="196" lengthAdjust="spacingAndGlyphs">THE THRESHOLD</text><text x="562" y="807" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="13" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".92" textLength="190" lengthAdjust="spacingAndGlyphs">where it came to rest</text></svg>`;

const JM11_ITEMS = [

/* ---------------- STAGE 0 ---------------- */
{
  id:"j11letter", stage:0, notEvidence:true, kind:"Briefing", title:"Letter from the Case Supervisor",
  sub:"The Chronicle Society · Department of Unsolved Antiquities",
  prev:"A captured chest, seven bad months, and a test designed by the people it accused.",
  x:22, y:26, rot:-3, w:216,
  body:`
    <p><b>To the investigating team,</b></p>
    <p>The Philistines beat Israel in the field and carry off the ark — the covered chest from Israel's sanctuary — as a trophy. It goes into the temple at Ashdod. Within days, Ashdod is in trouble. They move it to Gath. Gath is in trouble. They move it to Ekron, and Ekron will not have it in the gate.</p>
    <p>Seven months of this. Then their own priests and diviners design a test to settle whether the chest is really the cause, or whether they have frightened themselves.</p>
    <p><b>The test is the reason this file exists.</b> It is, by some distance, the best-designed experiment anywhere in the archive — and the people who built it were not on Israel's side.</p>
    <h4>Your task</h4>
    <p>Five explanations are on the board. Close all five. The interesting question is not <i>what happened to the cart</i> — everybody agrees about that — but <b>whether the test was good enough for the result to mean anything.</b></p>
    <h4>How the file works</h4>
    <ul>
      <li>Everything on the desk now is yours to read.</li>
      <li>Two parts of the file are <b>locked</b>. Both codes are in documents you already have, or will have.</li>
      <li>The second lock opens with the <b>hypothesis table</b> — the 📋 button in the top bar, once the first lock is open. You fill it in <i>before</i> you are shown the result.</li>
      <li>When all five explanations are closed, go to the <b>Pinboard</b>.</li>
    </ul>
    <p class="margin-note">Read the priests' written conditions early, and read them slowly. Almost nobody notices what they have done.</p>
    <div class="sig">A. Thorne</div>
    <div class="small" style="color:#5b4a35">Case Supervisor</div>
    <div class="ref">This case is reconstructed from 1 Samuel 5–6.</div>`
},
{
  id:"j11capture", stage:0, kind:"Field report", title:"The Capture, and the Temple at Ashdod",
  sub:"What the Philistines did with it first", thumb:"j11temple",
  prev:"Set beside their own god as a trophy. Two mornings running, the plinth was empty.",
  x:52, y:22, rot:3, w:216,
  body:`
    <div class="plate">${SVG.j11temple}<div class="cap">Click the plate to enlarge it. The temple interior at dawn.</div></div>
    <p>The chest was not hidden or buried. It was carried into the temple of Dagon at Ashdod and set beside the god — the standard way of displaying a defeated nation's holy things.</p>
    <table class="ledger">
      <tr><th>Morning</th><th>Found</th></tr>
      <tr><td>First</td><td>The statue face down on the floor before the chest. Set back up on its plinth.</td></tr>
      <tr><td>Second</td><td>Face down again — and this time broken, with the head and hands at the threshold of the doorway.</td></tr>
      <tr><td>After</td><td>The priests of Dagon stopped treading on that threshold. They were still avoiding it generations later.</td></tr>
    </table>
    <h4>Note from the Society</h4>
    <p>The Society records this without deciding it for you. What is not in dispute is the Philistines' own reaction: <b>they did not conclude that a statue had fallen over twice.</b> They moved the chest out of the city.</p>
    <p class="margin-note">A custom that survives for generations usually started with something people found hard to explain away.</p>
    <div class="ref">Background: 1 Samuel 5:1–5.</div>`
},
{
  id:"j11cities", stage:0, kind:"Regional reports", title:"The Three City Reports",
  sub:"Ashdod · Gath · Ekron",
  prev:"Three cities, three water supplies, three separate outbreaks — and one travelling chest.",
  x:78, y:26, rot:-4, w:210,
  body:`
    <p>The chest did not stay in one place. Each move was a decision by the city that had it, and each move was followed by trouble in the city that received it.</p>
    <table class="ledger">
      <tr><th>City</th><th>Water</th><th>While the chest was there</th><th>After it left</th></tr>
      <tr><td>Ashdod</td><td>Coastal wells, its own</td><td>Tumours; the fields overrun with mice</td><td>Trouble stopped</td></tr>
      <tr><td>Gath</td><td>Inland springs, unconnected</td><td>The same, young and old</td><td>Trouble stopped</td></tr>
      <tr><td>Ekron</td><td>Northern valley, its own</td><td>The same, from the day it arrived</td><td>Refused to keep it at all</td></tr>
    </table>
    <h4>Count the cities</h4>
    <p>The chest passed through <b>three</b> Philistine cities. That number is part of the first lock.</p>
    <h4>Why "bad water at Ashdod" will not stretch</h4>
    <p>Three cities, three separate sources, three different landscapes — coast, inland, valley. Bad water is a local explanation, and this is not a local pattern. Whatever this was, <b>it travelled with an object, not with a water table.</b></p>
    <p class="margin-note">Ekron's response is the most telling line in the file: they did not ask for it and they did not want it. That is not a city inventing a story to explain its own bad luck.</p>
    <div class="ref">Background: 1 Samuel 5:6–12.</div>`
},
{
  id:"j11guard", stage:0, kind:"Custody record", title:"The Guard Record",
  sub:"Who had the chest, and when",
  prev:"Philistine hands the entire seven months. No Israelite was ever near it.",
  x:26, y:56, rot:5, w:208,
  body:`
    <p>The obvious suspicion — that Israel was interfering to get its chest back — requires an Israelite to have been able to reach it. The custody record is unbroken.</p>
    <table class="ledger">
      <tr><th>Period</th><th>Held by</th><th>Israelite access</th></tr>
      <tr><td>The battlefield</td><td>Philistine army</td><td class="n">none</td></tr>
      <tr><td>Ashdod</td><td>Priests of Dagon, inside the temple</td><td class="n">none</td></tr>
      <tr><td>Gath</td><td>City authorities</td><td class="n">none</td></tr>
      <tr><td>Ekron</td><td>City authorities, under protest</td><td class="n">none</td></tr>
      <tr><td>The test</td><td>Philistine priests and diviners</td><td class="n">none</td></tr>
      <tr><td><b>Total time in Philistine country</b></td><td colspan="2" class="n"><b>7 months</b></td></tr>
    </table>
    <h4>Note</h4>
    <p>Seven months. That number is part of the first lock, and the record is precise about it.</p>
    <p>Israel, meanwhile, is not looking for the chest at all. There is no rescue party, no negotiation, no ransom offered. <b>Every decision in this case is made by Philistines, on Philistine ground, for Philistine reasons.</b></p>
    <p class="margin-note">When the people telling the story have no reason to want it true, the story gets more interesting, not less.</p>
    <div class="ref">Background: 1 Samuel 5:8–10 · 6:1.</div>`
},
{
  id:"j11conditions", stage:0, kind:"Written conditions", title:"The Priests' Written Conditions",
  sub:"Set down before the test, not after",
  prev:"They wrote down in advance what each outcome would prove — including the one against them.",
  x:56, y:52, rot:-2, w:214,
  body:`
    <p>This is the document the case turns on. The Philistine priests and diviners did not simply run a test; <b>they recorded beforehand what each possible result would mean.</b></p>
    <div class="doc-body">
      <p>"If it goes up by the way of its own border, to Beth Shemesh, then <b>he has done us this great evil.</b></p>
      <p>But if not, then we shall know that it is not his hand that struck us; <b>it was a chance that happened to us.</b>"</p>
    </div>
    <h4>What that sentence is doing</h4>
    <ul>
      <li>It names <b>both</b> outcomes in advance, and assigns a meaning to each.</li>
      <li>One of those meanings — "a chance that happened to us" — <b>lets them off entirely.</b> They wrote down their own escape route and then ran the test anyway.</li>
      <li>They also fixed the standard in advance: the cows must go <i>straight</i>, up the road toward Israel, <b>and not turn aside</b>.</li>
      <li>The record even fixes what the watchers should listen for: the priests expected the cows to complain about it the whole way, and told the lords to note whether they did.</li>
    </ul>
    <p class="margin-note">A test you cannot fail proves nothing. This one could have failed, in writing, in front of witnesses, in a way that would have suited the men who designed it.</p>
    <div class="ref">Background: 1 Samuel 6:9.</div>`
},
{
  id:"j11road", stage:0, kind:"Plan", title:"The Road and the Fork",
  sub:"Surveyed between Ekron and Beth Shemesh", thumb:"j11road",
  prev:"One road out of Ekron. One fork. Left goes home; straight on goes to Israel.",
  x:80, y:56, rot:4, w:214,
  body:`
    <div class="plate">${SVG.j11road}<div class="cap">Click the plan to enlarge it.</div></div>
    <h4>What the ground offers</h4>
    <ul>
      <li>The cart is set on the road outside <b>Ekron</b>, facing away from the city.</li>
      <li>A clear <b>fork</b> lies a short way along. The left branch curls back toward Philistine country and the pens where the calves are shut up.</li>
      <li>The straight branch climbs into the valley of standing grain and reaches <b>Beth Shemesh</b>, the nearest Israelite town.</li>
      <li>A large flat rock stands in a field beside the straight branch. Remember it; it matters later.</li>
    </ul>
    <h4>Why the fork is the whole point</h4>
    <p>Without a fork there is no test — a cart on a single road can only go one way. The fork is what makes the result <b>a choice</b> rather than a consequence, and the priests put it in deliberately.</p>
    <p class="margin-note">Good tests have a way of going wrong on purpose. Ask your team what the fork is for before you tell them.</p>
    <div class="ref">Background: 1 Samuel 6:9–12.</div>`
},

/* ---------------- STAGE 1 — released by the numbers lock ---------------- */
{
  id:"j11cart", stage:1, kind:"Technical plate", title:"The Cart, Described",
  sub:"Field Chest B · exactly what was built", thumb:"j11cart",
  prev:"A new cart, two cows that had never worn a yoke, and nobody holding a rein.",
  x:28, y:26, rot:-3, w:214,
  body:`
    <div class="plate">${SVG.j11cart}<div class="cap">Click the plate to enlarge it. The cart as measured by the Society.</div></div>
    <table class="ledger">
      <tr><th>Element</th><th>Specification</th><th>Why it is there</th></tr>
      <tr><td>The cart</td><td><b>New</b>, never used</td><td>No familiar smell, no worn ruts, no habit attached to it</td></tr>
      <tr><td>The animals</td><td><b>2</b> milk cows, <b>never yoked</b></td><td>Untrained animals do not pull a cart in a straight line</td></tr>
      <tr><td>Their calves</td><td>Taken away and shut up at home</td><td>Every instinct the cows have now points backwards</td></tr>
      <tr><td>Drivers</td><td class="n"><b>0</b></td><td>Nobody leading, nobody riding, no reins held</td></tr>
      <tr><td>The load</td><td>The chest, and a small box of gold objects beside it</td><td>Their compensation offering, sent with it</td></tr>
    </table>
    <h4>Count the design decisions</h4>
    <p><b>Two</b> cows. <b>Zero</b> drivers. Both numbers are in the first lock, and both are deliberate.</p>
    <h4>What a natural outcome looks like</h4>
    <p>Two untrained milk cows, separated from their calves, harnessed together for the first time, on a road with a fork in it. The overwhelmingly likely result is that they mill about, refuse the yoke, or turn back toward the calves. <b>That is the outcome the test was built to allow.</b></p>
    <p class="margin-note">Every single choice here makes the "wrong" answer easier, not harder. That is what makes it a real test.</p>
    <div class="ref">Background: 1 Samuel 6:7–8.</div>`
},
{
  id:"j11calves", stage:1, kind:"Husbandry note", title:"The Calves, Penned",
  sub:"Field Chest B · what a milk cow does when you take her calf",
  prev:"Ask any farmer. She turns round. She does not walk away up a hill.",
  x:58, y:24, rot:4, w:206,
  body:`
    <p>The Society consulted people who keep cattle, because this part of the test is only impressive if you know how cows behave.</p>
    <table class="ledger">
      <tr><th>Situation</th><th>Ordinary behaviour</th></tr>
      <tr><td>Milk cow separated from her calf</td><td>Turns back toward it; calls; will not be driven away easily</td></tr>
      <tr><td>Cow yoked for the first time</td><td>Baulks, sidesteps, tries to shed the yoke; needs a handler</td></tr>
      <tr><td>Two unmatched cows yoked together</td><td>Pull against each other; the cart wanders</td></tr>
      <tr><td>Any of the above, with no driver</td><td>The cart does not travel in a straight line at all</td></tr>
      <tr><td>Standing grain either side of the road</td><td>Cattle stop and eat it</td></tr>
    </table>
    <h4>What the cows in this test are recorded as doing</h4>
    <p>Going straight up the road, side by side, <b>complaining loudly the entire way</b> — the record uses one word for the noise a cow makes when she is unhappy — and not turning aside to the right or the left.</p>
    <p class="margin-note">The sound is the detail people skip, and it is the most interesting thing in the sentence: whatever was happening, <b>the cows did not want to do it.</b> They did it anyway.</p>
    <div class="ref">Background: 1 Samuel 6:12. Husbandry notes are the Society's own.</div>`
},
{
  id:"j11diviners", stage:1, kind:"Advice", title:"The Diviners' Recommendation",
  sub:"Field Chest B · what the specialists told the lords",
  prev:"“Do not send it back empty. And do not harden your hearts as Egypt did.”",
  x:80, y:44, rot:-6, w:208,
  body:`
    <div class="doc-body">
      <p>The priests and diviners were asked one question: what shall we do with it, and how shall we send it back?</p>
      <p>"If you send away the ark of the God of Israel, do not send it empty; <b>return him a guilt offering</b>. Then you will be healed, and you will know why his hand has not departed from you.</p>
      <p>Why do you harden your hearts, as the Egyptians and Pharaoh hardened theirs? <b>When he had worked among them, did they not let the people go?</b>"</p>
    </div>
    <h4>What the Society draws from this</h4>
    <ul>
      <li>The Philistines knew the Egyptian story. They cite it as a warning to themselves — an outside people's own account of events in another outside people's country.</li>
      <li>The offering they sent was five gold tumours and five gold mice: <b>one for each Philistine lord</b>, an admission in metal that the trouble was theirs collectively.</li>
      <li>They were still hedging. "Then you will know" is the language of people who have not decided yet — which is why they built the test at all.</li>
    </ul>
    <p class="margin-note">Note who is speaking. These are professional religious advisers of another nation, recommending that their own people give way.</p>
    <div class="ref">Background: 1 Samuel 6:2–6.</div>`
},
{
  id:"j11pattern", stage:1, kind:"Analysis", title:"The Pattern Analysis",
  sub:"Field Chest B · testing the epidemic explanation",
  prev:"The trouble moved when the chest moved. Diseases do not take instructions.",
  x:46, y:62, rot:3, w:210,
  body:`
    <p>An ordinary epidemic is a serious explanation and deserves a serious test. The Society laid the two timelines side by side.</p>
    <table class="ledger">
      <tr><th>Step</th><th>Chest</th><th>Trouble begins</th><th>Trouble ends</th></tr>
      <tr><td>1</td><td>Arrives Ashdod</td><td>Ashdod</td><td>When it leaves</td></tr>
      <tr><td>2</td><td>Moved to Gath</td><td>Gath, on arrival</td><td>When it leaves</td></tr>
      <tr><td>3</td><td>Moved to Ekron</td><td>Ekron, on arrival</td><td>When it leaves the country</td></tr>
      <tr><td>4</td><td>Leaves Philistia</td><td class="n">nowhere</td><td>—</td></tr>
    </table>
    <h4>Why this is not how sickness travels</h4>
    <ul>
      <li>Disease spreads along <b>roads, trade and contact</b> — outward from the first city in every direction, not city by city in the order a single object is carried.</li>
      <li>It does not stop in a place the moment an object leaves it, and it does not wait for that object before starting somewhere new.</li>
      <li>It does not skip the towns and villages in between, which this did.</li>
      <li>And it does not <b>stop everywhere at once</b> when the object crosses a border.</li>
    </ul>
    <p class="margin-note">This is the difference between correlation and coincidence, and it is worth naming out loud for your team: three matched moves in a row with nothing in between is a pattern.</p>
    <div class="ref">Fictional analysis. Background: 1 Samuel 5:6–12 · 6:1.</div>`
},
{
  id:"j11watch", stage:1, kind:"Watch log", title:"The Ridge Post — First Entries",
  sub:"Field Chest B · the log breaks off at the fork",
  prev:"“Moved off at once. Lowing continuously. Took the road.” Then the page ends.",
  x:34, y:44, rot:-5, w:204,
  body:`
    <p>The five Philistine lords followed the cart at a distance as far as the border. A watch post on the ridge kept a separate log. The Society holds the first page only; the rest is in Sealed Pouch C.</p>
    <table class="ledger">
      <tr><th>Entry</th><th>Recorded</th></tr>
      <tr><td>i</td><td>Cart set on the road outside Ekron. Cows yoked. No driver. Lords withdraw.</td></tr>
      <tr><td>ii</td><td><b>Moved off at once.</b> No baulking. No attempt to shed the yoke.</td></tr>
      <tr><td>iii</td><td>Side by side, keeping the road. Pace steady.</td></tr>
      <tr><td>iv</td><td><b>Lowing continuously</b> — the whole way, without stopping.</td></tr>
      <tr><td>v</td><td>Standing grain either side. Neither animal turned to it.</td></tr>
      <tr><td>vi</td><td>Approaching the fork —</td></tr>
      <tr><td colspan="2" style="text-align:center"><i>the page ends here</i></td></tr>
    </table>
    <h4>The word in entry iv</h4>
    <p>The log uses the ordinary farming word for the sound a distressed cow makes. Six letters. <b>Hold on to it</b> — you will need it once the hypothesis table tells you which row of the test actually happened.</p>
    <p class="margin-note">The animals were not calm, not willing and not tame. They complained about every step and took every step anyway.</p>
    <div class="ref">Fictional log, built on 1 Samuel 6:12.</div>`
},

/* ---------------- STAGE 2 — released by the keyword lock ---------------- */
{
  id:"j11result", stage:2, kind:"Watch log", title:"What the Watchers Saw",
  sub:"Sealed Pouch C · the rest of the page",
  prev:"Straight past the fork, up the valley, into Israel — and the lords followed all the way.",
  x:26, y:28, rot:-3, w:210,
  body:`
    <table class="ledger">
      <tr><th>Entry</th><th>Recorded</th></tr>
      <tr><td>vii</td><td><b>At the fork: went straight on.</b> Neither animal checked its pace. No turn to right or left.</td></tr>
      <tr><td>viii</td><td>Climbed the valley road toward Beth Shemesh. Still lowing.</td></tr>
      <tr><td>ix</td><td>Entered the field of Joshua of Beth Shemesh and <b>stopped beside the great rock</b>.</td></tr>
      <tr><td>x</td><td>The reapers in the field looked up, saw the chest, and rejoiced.</td></tr>
      <tr><td>xi</td><td>The five lords, having followed to the border, saw it, and went back to Ekron the same day.</td></tr>
    </table>
    <h4>Why entry xi matters as much as entry vii</h4>
    <p>The lords of the Philistines <b>watched the whole thing themselves</b>, from the setting-out to the arrival. There is no chain of rumour here. The men who had most to gain from the other result stood on the road and saw this one.</p>
    <p class="margin-note">They wrote the conditions, they ran the test, they watched it, and they accepted the answer. Then they went home.</p>
    <div class="ref">Background: 1 Samuel 6:12–16.</div>`
},
{
  id:"j11bethsh", stage:2, kind:"Follow-up", title:"What Beth Shemesh Did",
  sub:"Sealed Pouch C",
  prev:"Israel's own town handled it carelessly, and Israel's own record says so.",
  x:56, y:30, rot:4, w:208,
  body:`
    <p>The chest arrives among people who ought to know how to treat it. What follows is not a triumphant ending, and the record does not pretend otherwise.</p>
    <table class="ledger">
      <tr><th>Action</th><th>Record</th></tr>
      <tr><td>The cart</td><td>Broken up for firewood</td></tr>
      <tr><td>The cows</td><td>Offered as a burnt offering on the great rock</td></tr>
      <tr><td>The gold objects</td><td>Set on the rock as a witness</td></tr>
      <tr><td>Then</td><td><b>Men of Beth Shemesh looked into the chest, and men died</b></td></tr>
      <tr><td>The town's response</td><td>"Who is able to stand before this holy God?" — and they sent it on to Kiriath-jearim</td></tr>
    </table>
    <h4>Why the Society keeps this page in the file</h4>
    <p>Because it removes the easy reading. This is not a story where one nation is careful and the other is careless. <b>The record's own side comes off badly here</b>, and the account includes it anyway — which is a point worth making about the kind of document you are working with.</p>
    <p class="margin-note">Records written to flatter the writer leave this sort of page out.</p>
    <div class="ref">Background: 1 Samuel 6:14–21 · 7:1–2.</div>`
},
{
  id:"j11never", stage:2, kind:"Society analysis", title:"Why the Philistines Never Tried Again",
  sub:"Sealed Pouch C",
  prev:"They ran one honest test, got an answer they did not want, and acted on it.",
  x:80, y:34, rot:-4, w:212,
  body:`
    <p>This is the transferable idea, and it is better than the miracle argument on either side.</p>
    <h4>What makes the test good</h4>
    <ul>
      <li><b>It was designed by the sceptics.</b> Nobody from Israel touched it.</li>
      <li><b>The hypotheses were written down first</b>, both of them, with a meaning attached to each.</li>
      <li><b>The "no" result was easy.</b> Untrained cows, no driver, calves calling behind them, a fork in the road, standing grain to graze — everything favoured the outcome that would have cleared them.</li>
      <li><b>The observers were hostile</b> and watched it themselves.</li>
      <li><b>They accepted the result and changed their behaviour.</b> They never took the ark again.</li>
    </ul>
    <h4>The one weakness, stated honestly</h4>
    <p>It is a single trial. One run of any test can go strangely. The Society notes it, and notes also that the priests could have repeated it and did not — and that seven months of city-by-city trouble was itself the evidence the test was designed to confirm or clear.</p>
    <p class="margin-note">Ask your team to design the test themselves before showing them this file. Most groups build something that can only give one answer. That is the lesson.</p>
    <div class="ref">Background: 1 Samuel 6:9 · 7:13 · compare 1 Thessalonians 5:21.</div>`
}
];

const JM11_THEORIES = [
  {
    id:"epidemic",
    title:"1. An ordinary epidemic",
    claim:"A sickness was already moving through Philistia. The chest happened to be there.",
    answer:"j11pattern",
    verdict:"The pattern analysis kills it. Disease spreads outward along roads and contact, in every direction at once — it does not begin in a city on the day an object arrives, stop there the day it leaves, skip every village in between, and then cease in all three cities the moment that object crosses the border. Three matched moves in a row with nothing between them is not how sickness travels."
  },
  {
    id:"water",
    title:"2. Bad water at Ashdod",
    claim:"Contaminated wells would explain tumours and vermin without anything unusual at all.",
    answer:"j11cities",
    verdict:"The three city reports kill it. Ashdod draws from coastal wells, Gath from inland springs, Ekron from its own northern valley — three unconnected supplies in three different landscapes, with the same outcome in each, each time beginning when the chest arrived. Bad water is a local explanation for a thing that plainly travelled."
  },
  {
    id:"sabotage",
    title:"3. Israelite sabotage",
    claim:"Israel wanted its chest back and was interfering — poisoning wells, steering the cart, staging the temple.",
    answer:"j11guard",
    verdict:"The guard record kills it. The chest was in Philistine hands without a break for all seven months — army, temple priests, city authorities, then the diviners who ran the test. No Israelite had access at any point. Israel sent no rescue party and offered no ransom; there is no Israelite anywhere in the file until the reapers look up from the grain."
  },
  {
    id:"panic",
    title:"4. Coincidence, and the priests panicked",
    claim:"Frightened people had a run of bad luck and read meaning into it. The cart proves nothing.",
    answer:"j11cart",
    verdict:"The cart specification kills it. Every element of that test was chosen to make the harmless answer <b>easy</b>: a brand-new cart, two cows that had never worn a yoke, their calves shut up behind them, no driver, no reins, a fork in the road and standing grain either side. Panicking people do not build an experiment whose likeliest outcome would embarrass them. This is careful work."
  },
  {
    id:"rigged",
    title:"5. The priests rigged the test",
    claim:"They wanted the chest gone, so they arranged a result that would let them send it away.",
    answer:"j11conditions",
    verdict:"Their own written conditions kill it. They set down <b>both</b> outcomes in advance and what each would prove — and one of them, \"it was a chance that happened to us\", cleared them completely and let them keep the trophy. A man rigging a test does not write his own escape route into it and then hand the reins to nobody."
  }
];

const JM11_LOCKS = [
  {
    id:"l1", type:"number", code:"3720", len:4,
    wrong:"Not that. Each digit comes from a different document — one of the four is wrong.",
    name:"Field Chest B — the test papers",
    blurb:"A four-digit lock. Four questions about the shape of the test, each answered by a document already on your desk. The last answer is zero, and it is the reason the test means anything.",
    questions:[
      "How many Philistine cities did the chest pass through?",
      "How many months was it in Philistine country?",
      "How many cows pulled the cart?",
      "How many drivers were on the cart?"
    ],
    hints:[
      "The questions are in order: question one gives the first digit. Every answer is a single digit.",
      "Questions 1 and 2 are in the city reports and the guard record. Questions 3 and 4 are in the plan and the briefing — and the cart's own specification will confirm them once it opens.",
      "Ashdod, Gath, Ekron — three. Seven months. Two cows. And nobody at all driving them: zero."
    ],
    reward:"Field Chest B is open: the cart specification, the husbandry note, the diviners' advice, the pattern analysis and the first page of the ridge log are on the desk. The 📋 Hypothesis table in the top bar is live."
  },
  {
    id:"l2", type:"word", code:"LOWING", len:6,
    wrong:"Not that. Fill in the hypothesis table first — the 📋 button in the top bar — then look at what the ridge log says the animals were doing the whole way.",
    name:"Sealed Pouch C — the sound on the road",
    blurb:"A six-letter keyword. Fill in the hypothesis table: for each thing the cart might have done, tick what that outcome would honestly prove. Only one row is a valid inference — and the ridge log has already told you, in one word, what the animals were doing while they did it.",
    questions:[
      "Open the 📋 Hypothesis table from the top bar.",
      "Five possible outcomes down the side, four conclusions across the top.",
      "Tick a box only where that outcome would genuinely support that conclusion.",
      "One outcome supports exactly one conclusion. Find it, then read entry iv of the ridge log."
    ],
    hints:[
      "Work outcome by outcome, and be strict: 'they turned back to the calves' and 'they stood still' both prove the same ordinary thing, and neither proves anybody rigged anything.",
      "Four of the five outcomes are the ones the priests wrote down as meaning 'a chance that happened to us'. Only one is the other kind.",
      "The cows went straight on at the fork — and the log says they were lowing the whole way. Six letters."
    ],
    reward:"Sealed Pouch C is open: the rest of the ridge log, what Beth Shemesh did with the chest, and the Society's analysis of the test are now on the desk."
  }
];

const JM11_MATRIX = {
  button:"📋 Hypothesis table",
  title:"The Hypothesis Table",
  blurb:"Before you are told what happened, decide what each result <b>would have proved</b>. Five things the cart might do, down the side. Four conclusions, across the top. Tick a box only where that outcome would honestly support that conclusion — not where it merely fails to rule it out.",
  corner:"If the cart had…",
  verify:"Check the table",
  mark:"✔",
  cols:[
    {id:"chance",  label:"A chance that happened to us", note:"the priests' own wording"},
    {id:"animal",  label:"Ordinary animal behaviour",    note:"cows being cows"},
    {id:"rig",     label:"Somebody steered the cart",    note:"a hand on the reins"},
    {id:"beyond",  label:"Something beyond the cows",    note:"the priests' other option"}
  ],
  rows:[
    {id:"back",     label:"Turned back at the fork",      note:"toward the penned calves"},
    {id:"stand",    label:"Refused the yoke and stood",   note:"never yoked before"},
    {id:"graze",    label:"Wandered into the grain",      note:"food on both sides"},
    {id:"circle",   label:"Pulled against each other",    note:"two unmatched animals"},
    {id:"straight", label:"Gone straight on at the fork", note:"lowing all the way, not turning aside"}
  ],
  truth:[
    "back|chance","back|animal",
    "stand|chance","stand|animal",
    "graze|chance","graze|animal",
    "circle|chance","circle|animal",
    "straight|beyond"
  ],
  foot:{
    label:"What the priests wrote in advance",
    note:"both outcomes, with a meaning attached to each",
    cells:{chance:"clears them", animal:"clears them", rig:"not offered", beyond:"convicts them"}
  },
  note:"Be strict about the third column. Nothing the cart could do would <i>prove</i> somebody steered it — there was no driver and the lords were watching — so that column stays empty. And notice that the first four rows all say the same ordinary thing twice over.",
  reveal:{
    lead:"Four rows say the same thing: cows behaving like cows, and a chance that happened to us. Those are the outcomes the priests wrote down as clearing them, and any one of them was far more likely than the fifth. The bottom row is the only outcome in the table that supports a different conclusion — and it is the one that happened. Now read entry iv of the ridge log again: it tells you what the animals were doing every step of the way while they did it.",
    answer:"LOWING",
    caption:"They went straight up the road, lowing as they went, and turned not aside to the right hand or to the left. The cows did not want to go. They went anyway — and the men who designed the test stood on the road and watched them do it."
  }
};

const JM11_VERDICTS = [
  {id:"epidemic", text:"An ordinary epidemic was already moving through Philistia."},
  {id:"water",    text:"Bad water at Ashdod, and the other cities imagined the rest."},
  {id:"sabotage", text:"Israelite agents interfered with the chest and steered the cart."},
  {id:"panic",    text:"A run of coincidences, and frightened priests who read meaning into it."},
  {id:"rigged",   text:"The priests arranged the result so they could send the chest away."},
  {id:"honest",   text:"The Philistines' own priests designed a test that could easily have cleared them — untrained cows, no driver, calves behind, a fork in the road — wrote both outcomes down in advance, watched it themselves, and got the answer they least wanted."}
];

const CASE_JM11 = {
  id:"jm11", code:"CASE JM-11", title:"The Cart That Chose Its Own Road",
  period:"Philistia · c. 1100 BC", colour:"#8a4a2f", poster:"poster_jm11",
  teaser:"Seven months after capturing Israel's ark, the Philistines are sick of it. Their own priests design a test to find out whether the chest is really the cause — and build it so that it could easily say no.",
  introSub:"The best-designed experiment in the archive, run by the other side.",
  items:JM11_ITEMS, theories:JM11_THEORIES, locks:JM11_LOCKS, verdicts:JM11_VERDICTS,
  matrix:JM11_MATRIX,
  correct:"honest",
  boardTitle:"Seven Months in Philistia",
  boardIntro:"Five explanations have been offered for what happened to the Philistines and their cart. For each one, pin the <b>single</b> document that makes it impossible. When all five are closed, the accusation form opens.",
  accusationIntro:"It was not an epidemic, not the wells, not Israelite interference, not blind panic and not a rigged result. Say what the file will actually support — and say what it is about the <i>design</i> of the test that makes the answer worth anything.",
  debrief:{
    lead:"The Philistines had a problem and no way to settle it, so they built a test. They wrote both possible results down in advance and what each would mean. They chose conditions that made the harmless answer easy — a new cart, two cows that had never been yoked, their calves shut up behind them, no driver, a fork in the road and standing grain on both sides. Then they stood on the ridge and watched the cows go straight up the road into Israel, lowing the whole way, without turning aside. They accepted the answer they did not want, and never took the ark again.",
    questions:[
      "The priests wrote down what each outcome would prove <i>before</i> running the test. Why does that matter so much — and what goes wrong when people decide afterwards?",
      "Everything about the test made the 'ordinary' answer easier. Would you have designed it that way? What does it cost you to build a test you might fail?",
      "The cows were lowing all the way — they did not want to go. Does that detail strengthen the result, weaken it, or neither?",
      "It was a single trial, and the priests never repeated it. How much should one careful test be allowed to settle?",
      "The men of Beth Shemesh, who were on the record's own side, handled the chest carelessly and it went badly. Why do you think the account includes that?"
    ],
    refs:"1 Samuel 5–6 · 1 Samuel 7:1–2, 13 · 1 Thessalonians 5:21"
  },
  teacher:{
    answers:"Lock 1 code <b>3720</b> (3 cities · 7 months · 2 cows · 0 drivers). Lock 2 keyword <b>LOWING</b>, from the 📋 Hypothesis table: the four ordinary outcomes each tick 'a chance that happened to us' and 'ordinary animal behaviour'; the 'somebody steered it' column stays completely empty; only 'gone straight on at the fork' ticks 'something beyond the cows'. Entry iv of the ridge log supplies the word.",
    pairs:"Epidemic → The Pattern Analysis; bad water → The Three City Reports; Israelite sabotage → The Guard Record; coincidence and panic → The Cart, Described; the priests rigged it → The Priests' Written Conditions.",
    conclusion:"A test designed by hostile sceptics, with both hypotheses recorded in advance and the conditions stacked in favour of the harmless result, returned the result its designers least wanted — and they accepted it.",
    prompts:"\"Design the test yourself before you read theirs — how would you find out?\" · \"What would have to happen for the priests to be cleared?\" · \"Why put a fork in the road at all?\" · \"Who is telling us this story, and what do they gain by it?\"",
    extra:"Run the design task first: give groups the situation (a captured object, seven months of trouble, no way to tell) and ten minutes to design a test, then compare. Most groups build something that can only give one answer, which makes the priests' conditions land properly when they read them. The hypothesis table is the only grid in the archive with a deliberately empty column — expect groups to want to tick something under 'somebody steered the cart', and use that as the discussion. Pairs well with JM-09 (evidence somebody else has chosen for you) as a two-case unit on how to test a claim."
  }
};

registerCase(CASE_JM11);
