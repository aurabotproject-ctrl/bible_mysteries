"use strict";
/* ============================================================
   CASE JM-16 — THE BREAD ON THE GROUND
   The wilderness of Sin.  Source: Exodus 16.
   ============================================================ */

SVG.j16jar = `<svg viewBox="0 0 1536 1024" xmlns="http://www.w3.org/2000/svg"><image href="images/j16jar.jpg" x="0" y="0" width="1536" height="1024"/><text x="248" y="97" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="24" font-weight="600" fill="#4a3520" textLength="124" lengthAdjust="spacingAndGlyphs">THE JAR</text><text x="248" y="118" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="11" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".92" textLength="180" lengthAdjust="spacingAndGlyphs">as it was brought in</text><text x="1290" y="218" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="24" font-weight="600" fill="#4a3520" textLength="146" lengthAdjust="spacingAndGlyphs">THE OMER</text><text x="1290" y="239" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="10" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".92" textLength="222" lengthAdjust="spacingAndGlyphs">the measure, one day&#8217;s share</text><text x="1151" y="866" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="20" font-weight="600" fill="#4a3520" textLength="190" lengthAdjust="spacingAndGlyphs">THE SUBSTANCE</text><text x="1151" y="887" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="11" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".92" textLength="178" lengthAdjust="spacingAndGlyphs">fine, flake-like, white</text></svg>`;
SVG.j16camp = `<svg viewBox="0 0 1536 1024" xmlns="http://www.w3.org/2000/svg"><image href="images/j16camp.jpg" x="0" y="0" width="1536" height="1024"/><text x="268" y="157" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="22" font-weight="600" fill="#4a3520" textLength="142" lengthAdjust="spacingAndGlyphs">THE CAMP</text><text x="268" y="178" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="11" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".92" textLength="196" lengthAdjust="spacingAndGlyphs">tents, and the tabernacle</text><text x="1282" y="400" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="16" font-weight="600" fill="#4a3520" textLength="196" lengthAdjust="spacingAndGlyphs">THE GATHERING GROUND</text><text x="1282" y="421" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="10" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".92" textLength="188" lengthAdjust="spacingAndGlyphs">covered again every morning</text><text x="595" y="722" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="22" font-weight="600" fill="#4a3520" textLength="152" lengthAdjust="spacingAndGlyphs">THE RIDGE</text><text x="595" y="743" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="11" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".92" textLength="182" lengthAdjust="spacingAndGlyphs">beyond it, nothing grows</text></svg>`;
SVG.j16log = `<svg viewBox="0 0 1536 1024" xmlns="http://www.w3.org/2000/svg"><image href="images/j16log.jpg" x="0" y="0" width="1536" height="1024"/><text x="240" y="131" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="21" font-weight="600" fill="#4a3520" textLength="39" lengthAdjust="spacingAndGlyphs">DAY</text><text x="495" y="131" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="21" font-weight="600" fill="#4a3520" textLength="169" lengthAdjust="spacingAndGlyphs">ON THE GROUND</text><text x="760" y="131" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="21" font-weight="600" fill="#4a3520" textLength="169" lengthAdjust="spacingAndGlyphs">GATHERED EACH</text><text x="1030" y="131" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="21" font-weight="600" fill="#4a3520" textLength="182" lengthAdjust="spacingAndGlyphs">KEPT OVERNIGHT</text><text x="1295" y="131" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="21" font-weight="600" fill="#4a3520" textLength="78" lengthAdjust="spacingAndGlyphs">REMARK</text><text x="240" y="224" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="20" font-weight="500" fill="#7d4a24" opacity=".95" textLength="55" lengthAdjust="spacingAndGlyphs">First</text><text x="495" y="224" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="20" font-weight="500" fill="#7d4a24" opacity=".95" textLength="165" lengthAdjust="spacingAndGlyphs">present at dawn</text><text x="760" y="224" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="20" font-weight="500" fill="#7d4a24" opacity=".95" textLength="66" lengthAdjust="spacingAndGlyphs">1 omer</text><text x="1030" y="224" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="20" font-weight="500" fill="#7d4a24" opacity=".95" textLength="110" lengthAdjust="spacingAndGlyphs">bred worms</text><text x="1295" y="224" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="20" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".95" textLength="198" lengthAdjust="spacingAndGlyphs">spoiled by morning</text><text x="240" y="326" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="20" font-weight="500" fill="#7d4a24" opacity=".95" textLength="66" lengthAdjust="spacingAndGlyphs">Second</text><text x="495" y="326" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="20" font-weight="500" fill="#7d4a24" opacity=".95" textLength="165" lengthAdjust="spacingAndGlyphs">present at dawn</text><text x="760" y="326" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="20" font-weight="500" fill="#7d4a24" opacity=".95" textLength="66" lengthAdjust="spacingAndGlyphs">1 omer</text><text x="1030" y="326" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="20" font-weight="500" fill="#7d4a24" opacity=".95" textLength="110" lengthAdjust="spacingAndGlyphs">bred worms</text><text x="1295" y="326" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="20" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".95" textLength="198" lengthAdjust="spacingAndGlyphs">spoiled by morning</text><text x="240" y="427" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="20" font-weight="500" fill="#7d4a24" opacity=".95" textLength="55" lengthAdjust="spacingAndGlyphs">Third</text><text x="495" y="427" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="20" font-weight="500" fill="#7d4a24" opacity=".95" textLength="165" lengthAdjust="spacingAndGlyphs">present at dawn</text><text x="760" y="427" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="20" font-weight="500" fill="#7d4a24" opacity=".95" textLength="66" lengthAdjust="spacingAndGlyphs">1 omer</text><text x="1030" y="427" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="20" font-weight="500" fill="#7d4a24" opacity=".95" textLength="110" lengthAdjust="spacingAndGlyphs">bred worms</text><text x="1295" y="427" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="20" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".95" textLength="198" lengthAdjust="spacingAndGlyphs">spoiled by morning</text><text x="240" y="528" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="20" font-weight="500" fill="#7d4a24" opacity=".95" textLength="66" lengthAdjust="spacingAndGlyphs">Fourth</text><text x="495" y="528" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="20" font-weight="500" fill="#7d4a24" opacity=".95" textLength="165" lengthAdjust="spacingAndGlyphs">present at dawn</text><text x="760" y="528" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="20" font-weight="500" fill="#7d4a24" opacity=".95" textLength="66" lengthAdjust="spacingAndGlyphs">1 omer</text><text x="1030" y="528" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="20" font-weight="500" fill="#7d4a24" opacity=".95" textLength="110" lengthAdjust="spacingAndGlyphs">bred worms</text><text x="1295" y="528" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="20" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".95" textLength="198" lengthAdjust="spacingAndGlyphs">spoiled by morning</text><text x="240" y="630" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="20" font-weight="500" fill="#7d4a24" opacity=".95" textLength="55" lengthAdjust="spacingAndGlyphs">Fifth</text><text x="495" y="630" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="20" font-weight="500" fill="#7d4a24" opacity=".95" textLength="165" lengthAdjust="spacingAndGlyphs">present at dawn</text><text x="760" y="630" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="20" font-weight="500" fill="#7d4a24" opacity=".95" textLength="66" lengthAdjust="spacingAndGlyphs">1 omer</text><text x="1030" y="630" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="20" font-weight="500" fill="#7d4a24" opacity=".95" textLength="110" lengthAdjust="spacingAndGlyphs">bred worms</text><text x="1295" y="630" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="20" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".95" textLength="198" lengthAdjust="spacingAndGlyphs">spoiled by morning</text><text x="240" y="723" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="20" font-weight="500" fill="#7d4a24" opacity=".95" textLength="55" lengthAdjust="spacingAndGlyphs">Sixth</text><text x="495" y="723" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="20" font-weight="500" fill="#7d4a24" opacity=".95" textLength="165" lengthAdjust="spacingAndGlyphs">present, double</text><text x="760" y="723" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="20" font-weight="500" fill="#7d4a24" opacity=".95" textLength="77" lengthAdjust="spacingAndGlyphs">2 omers</text><text x="1030" y="723" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="20" font-weight="500" fill="#7d4a24" opacity=".95" textLength="110" lengthAdjust="spacingAndGlyphs">kept sweet</text><text x="1295" y="723" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="20" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".95" textLength="198" lengthAdjust="spacingAndGlyphs">no worms, no smell</text><text x="300" y="810" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="20" font-weight="500" fill="#7d4a24" opacity=".95" textLength="77" lengthAdjust="spacingAndGlyphs">Seventh</text><text x="495" y="810" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="20" font-weight="500" fill="#7d4a24" opacity=".95" textLength="44" lengthAdjust="spacingAndGlyphs">none</text><text x="760" y="810" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="20" font-weight="500" fill="#7d4a24" opacity=".95" textLength="77" lengthAdjust="spacingAndGlyphs">&#8212;</text><text x="1030" y="810" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="20" font-weight="500" fill="#7d4a24" opacity=".95" textLength="77" lengthAdjust="spacingAndGlyphs">&#8212;</text><text x="1235" y="810" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="20" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".95" textLength="44" lengthAdjust="spacingAndGlyphs">none</text></svg>`;

const JM16_ITEMS = [

/* ---------------- STAGE 0 ---------------- */
{
  id:"j16letter", stage:0, notEvidence:true, kind:"Briefing", title:"Letter from the Case Supervisor",
  sub:"The Chronicle Society · Department of Unsolved Antiquities",
  prev:"Every natural explanation fits the data — for six days out of seven.",
  x:22, y:26, rot:-3, w:216,
  body:`
    <p><b>To the investigating team,</b></p>
    <p>A substance appears on the ground at dawn in the wilderness. The people gather it, grind it, bake it and live on it. This goes on for <b>forty years</b>.</p>
    <p>There are perfectly respectable natural candidates for what it might have been, and the Society takes them seriously — a tree secretion, a wind-blown lichen, trade with local tribes, supplies carried out of Egypt, or a story tidied up long afterwards. <b>Every one of them fits the data reasonably well.</b></p>
    <p>Then you get to the seventh day, and every one of them stops fitting at once.</p>
    <h4>Your task</h4>
    <p>Five explanations are on the board. Close all five, and be fair to them — three are genuinely good until they meet the calendar.</p>
    <h4>How the file works</h4>
    <ul>
      <li>Everything on the desk now is yours.</li>
      <li>Two parts of the file are <b>locked</b>. Both codes are in documents you have or will have.</li>
      <li>The second lock opens with the <b>hypothesis table</b> — the 📋 button in the top bar, once the first lock is open.</li>
      <li>When all five explanations are closed, go to the <b>Pinboard</b>.</li>
    </ul>
    <p class="margin-note">The whole case is in one column of that table, and the column is empty. Let your team find it themselves.</p>
    <div class="sig">A. Thorne</div>
    <div class="small" style="color:#5b4a35">Case Supervisor</div>
    <div class="ref">This case is reconstructed from Exodus 16, with Numbers 11 and Joshua 5.</div>`
},
{
  id:"j16jar", stage:0, kind:"Object study", title:"The Substance, and the Daily Quantity",
  sub:"A jar of it, and the measure used", thumb:"j16jar",
  prev:"Fine, white, flake-like — and about a quarter of a tonne of it, every single morning.",
  x:52, y:22, rot:3, w:218,
  body:`
    <div class="plate">${SVG.j16jar}<div class="cap">Click the plate to enlarge it. The jar kept as a memorial, and the omer measure.</div></div>
    <table class="ledger">
      <tr><th>Property</th><th>Recorded</th></tr>
      <tr><td>Appearance</td><td>A small round thing, fine as frost on the ground; white, like coriander seed</td></tr>
      <tr><td>Taste</td><td>Like wafers made with honey; also described as the taste of fresh oil</td></tr>
      <tr><td>Preparation</td><td>Ground in mills or beaten in a mortar, baked in pans, made into cakes</td></tr>
      <tr><td>Ration per person, ordinary day</td><td class="n"><b>1 omer</b></td></tr>
      <tr><td>What an omer is</td><td>A dry measure — roughly two litres, about what a person eats in a day</td></tr>
      <tr><td>When it was gathered</td><td>Every morning; what was left melted when the sun grew hot</td></tr>
    </table>
    <h4>The arithmetic that kills the tree</h4>
    <p>Take even a cautious estimate of the population and multiply by one omer. The daily requirement is measured in <b>tonnes</b>, delivered every morning, over the same forty years, across a moving camp. A tamarisk grove in a good season produces a few kilograms — <b>and only where the trees are.</b></p>
    <p class="margin-note">The number in that ration row is the first digit of the first lock. So is the doubled ration on the sixth day, which you will find in the log.</p>
    <div class="ref">Background: Exodus 16:14–16, 21, 31 · Numbers 11:7–8.</div>`
},
{
  id:"j16log", stage:0, kind:"Log", title:"The Gathering Log",
  sub:"One week, as recorded", thumb:"j16log",
  prev:"Six mornings the same, the sixth doubled and keeping, and the seventh nothing at all.",
  x:78, y:26, rot:-4, w:218,
  body:`
    <div class="plate">${SVG.j16log}<div class="cap">Click the log to enlarge it. One week of entries.</div></div>
    <h4>Read down the last two columns</h4>
    <ul>
      <li>Days one to five: <b>1 omer</b> each, and anything kept overnight <b>bred worms and stank by morning</b>. This happened when people tried it, and the record says some did.</li>
      <li>Day six: <b>2 omers</b> each, gathered before it melted — and the surplus <b>kept sweet overnight</b>. No worms, no smell.</li>
      <li>Day seven: <b>none on the ground.</b> Some went out to look anyway and found nothing.</li>
      <li>The following morning it was back, one omer each, spoiling overnight again.</li>
    </ul>
    <h4>Three numbers for the first lock</h4>
    <p>How many omers on an ordinary day, how many on the sixth, on how many days of the week it appeared, and how much on the seventh. All four are in this table.</p>
    <h4>Why "it appeared irregularly and the record was tidied up later" is in trouble</h4>
    <p>A tidied record smooths <b>away</b> awkward detail. This one keeps it: the people who disobeyed and hoarded, the ones who went out on the seventh day and found nothing, the complaining, the ration disputes. <b>A cleaned-up story does not keep its own side's failures in the table.</b></p>
    <p class="margin-note">Ask your team what they would delete if they were tidying this log. Then ask why it is all still here.</p>
    <div class="ref">Background: Exodus 16:16–30.</div>`
},
{
  id:"j16camp", stage:0, kind:"Plan", title:"The Camp and the Gathering Ground",
  sub:"Where it fell, and how far people walked", thumb:"j16camp",
  prev:"It lay round the camp, wherever the camp was — and the camp kept moving.",
  x:26, y:56, rot:5, w:216,
  body:`
    <div class="plate">${SVG.j16camp}<div class="cap">Click the plan to enlarge it.</div></div>
    <table class="ledger">
      <tr><th>Feature</th><th>Recorded</th></tr>
      <tr><td>Where it lay</td><td><b>Round about the camp</b> — not in one grove or on one slope</td></tr>
      <tr><td>Distance walked to gather</td><td>Short. Every household gathered near its own tent</td></tr>
      <tr><td>When the camp moved</td><td>It appeared at the new place the next morning</td></tr>
      <tr><td>Terrain crossed over forty years</td><td>Sand, gravel plain, rock, high wilderness — with and without vegetation</td></tr>
      <tr><td>Beyond the ridge</td><td>Nothing grows. There are no groves out here at all</td></tr>
    </table>
    <h4>Why the ground matters</h4>
    <p>A tree secretion is tied to trees. A lichen is tied to the places lichen grows. <b>This followed a camp of hundreds of thousands across forty years of changing country</b>, arriving wherever they happened to have stopped, including places with no vegetation of any kind.</p>
    <p class="margin-note">Put a finger on the map and ask: where were the trees, this week?</p>
    <div class="ref">Background: Exodus 16:13–14 · 16:35 · Numbers 33 (the stages of the journey).</div>`
},
{
  id:"j16trade", stage:0, kind:"Trade record", title:"The Trade Record",
  sub:"Was it bought from somebody?",
  prev:"No caravans, no payments, no suppliers — and a people with nothing to pay with.",
  x:56, y:52, rot:-2, w:208,
  body:`
    <p>Buying food from local tribes is the most sensible explanation of the lot, so it gets the closest examination.</p>
    <table class="ledger">
      <tr><th>Checked</th><th>Found</th></tr>
      <tr><td>Caravans arriving at the camp</td><td class="n"><b>none recorded</b></td></tr>
      <tr><td>Payments made for food</td><td class="n"><b>none</b> — and the record does list purchases elsewhere, of water and passage</td></tr>
      <tr><td>Local tribes able to supply tonnes daily</td><td class="n"><b>none</b> — the region could not feed such numbers, which is the whole problem</td></tr>
      <tr><td>Relations with neighbours</td><td>Mostly hostile or wary; Amalek attacked them early on</td></tr>
      <tr><td>What they complained about</td><td>Wanting meat, onions, leeks, fish — <b>the things a supplier would have sold them</b></td></tr>
      <tr><td>Delivery on a seven-day rhythm</td><td class="n"><b>no supplier exists to keep one</b></td></tr>
    </table>
    <h4>The complaint that closes it</h4>
    <p>People who are buying food do not complain that they cannot get onions. <b>The complaints in this file are the complaints of people with one food and no market</b> — and the record preserves them in detail, which a tidied account would not.</p>
    <p class="margin-note">Note also the payments that <i>are</i> recorded, for water and for the right to pass through. The book knows how to write down a purchase.</p>
    <div class="ref">Background: Numbers 11:4–6 · 20:19 · Deuteronomy 2:6, 28 · Exodus 17:8.</div>`
},
{
  id:"j16loadout", stage:0, kind:"Load-out", title:"What They Carried Out of Egypt",
  sub:"Testing the stored-supplies explanation",
  prev:"Dough with no leaven, and no time to prepare provisions. It ran out in a month.",
  x:80, y:56, rot:4, w:206,
  body:`
    <table class="ledger">
      <tr><th>Item</th><th>Record</th></tr>
      <tr><td>Departure</td><td>In haste, at night, <b>with no time to prepare provisions</b></td></tr>
      <tr><td>Food taken</td><td>Dough carried in kneading troughs, unleavened because it had no time to rise</td></tr>
      <tr><td>Livestock</td><td>Flocks and herds — kept for milk, wool and breeding, and needed on arrival</td></tr>
      <tr><td>When the food ran out</td><td><b>The fifteenth day of the second month</b> — one month out</td></tr>
      <tr><td>What happened then</td><td>The whole assembly complained of hunger. That is where this file begins</td></tr>
      <tr><td>How long the substance then lasted</td><td class="n"><b>40 years</b></td></tr>
    </table>
    <h4>Why "stored supplies rationed out" fails</h4>
    <p>The record dates the moment the Egyptian food ran out, and it is one month in. <b>Everything in this case happens after that date.</b> Rationing cannot stretch a month's flour across forty years, and a store carried on foot does not arrive fresh on the ground each morning and melt in the sun by noon.</p>
    <p class="margin-note">The dating is the useful part. This is not a vague "later" — the record puts a day on it.</p>
    <div class="ref">Background: Exodus 12:34, 39 · 16:1–3 · 16:35.</div>`
},

/* ---------------- STAGE 1 — released by the numbers lock ---------------- */
{
  id:"j16spoil", stage:1, kind:"Spoilage note", title:"The Spoilage Note",
  sub:"Field Chest B · it rotted overnight, except when it did not",
  prev:"The same substance, the same jars, the same night air — two different results.",
  x:28, y:26, rot:-3, w:212,
  body:`
    <p>This is the page that removes the lichen, and it does it with a controlled comparison the record hands you for free.</p>
    <table class="ledger">
      <tr><th>Kept overnight from</th><th>Result</th></tr>
      <tr><td>Day one to day five</td><td><b>Bred worms and stank by morning</b>, every time it was tried</td></tr>
      <tr><td>Day six</td><td><b>Kept sweet. No worms, no smell</b></td></tr>
      <tr><td>Difference in storage</td><td class="n">none</td></tr>
      <tr><td>Difference in the substance</td><td class="n">none reported</td></tr>
      <tr><td>Difference in weather</td><td class="n">none reported</td></tr>
      <tr><td>Difference</td><td><b>The day of the week</b></td></tr>
    </table>
    <h4>Why a wind-borne lichen cannot do this</h4>
    <p>Decay is a process. It runs at a rate set by temperature, moisture and what is living in the material — and <b>it does not consult a calendar.</b> A substance that rots overnight on five nights and keeps perfectly on the sixth, with nothing else changed, is not behaving like a biological material at all.</p>
    <p>Note also that the lichen candidate fails on quantity and on ground before it gets here: lichens do not fall in tonnes, and they do not follow a camp.</p>
    <p class="margin-note">This is the cleanest natural-experiment shape in the archive: one variable changed, everything else held.</p>
    <div class="ref">Background: Exodus 16:19–24.</div>`
},
{
  id:"j16tamarisk", stage:1, kind:"Botanical note", title:"The Tamarisk Candidate",
  sub:"Field Chest B · the best natural suggestion, tested",
  prev:"It is real, it is sweet, and there is nothing like enough of it.",
  x:58, y:24, rot:4, w:210,
  body:`
    <p>The Society states this one carefully, because it is a real phenomenon and students should know it is not being dismissed out of hand.</p>
    <table class="ledger">
      <tr><th>The tamarisk secretion</th><th>The record's substance</th></tr>
      <tr><td>Real: insects on tamarisk twigs produce sweet droplets that harden</td><td>Fine, white, flake-like on the ground</td></tr>
      <tr><td>Sweet, edible, gathered by local people</td><td>Sweet, edible, gathered daily</td></tr>
      <tr><td>A few kilograms in a good season, in a good year</td><td><b>Tonnes, every morning</b></td></tr>
      <tr><td>Only where the trees are</td><td>Wherever the camp was, including bare ground</td></tr>
      <tr><td>Seasonal — a few weeks in summer</td><td><b>Every day for forty years</b></td></tr>
      <tr><td>Keeps well; it is essentially sugar</td><td>Rotted overnight — except on one night a week</td></tr>
    </table>
    <h4>Where it fits and where it stops</h4>
    <p>The comparison is genuinely useful for the <i>appearance</i>: something small, pale and sweet on the ground is not an invented image. It fails on <b>quantity, location, duration and behaviour</b> — four separate walls, any one of which would be enough.</p>
    <p class="margin-note">Teach this as a model of how to handle a good partial explanation: say exactly what it accounts for, then say exactly where it stops.</p>
    <div class="ref">Botanical notes are the Society's own. Background: Exodus 16:14, 31, 35.</div>`
},
{
  id:"j16duration", stage:1, kind:"Duration record", title:"Forty Years, and the Day It Stopped",
  sub:"Field Chest B",
  prev:"It stopped the day after they ate the produce of the land. Not a week later.",
  x:80, y:44, rot:-6, w:208,
  body:`
    <table class="ledger">
      <tr><th>Point</th><th>Record</th></tr>
      <tr><td>Began</td><td>In the wilderness of Sin, one month out of Egypt</td></tr>
      <tr><td>Continued</td><td><b>Forty years</b>, until they came to the border of Canaan</td></tr>
      <tr><td>Last gathered</td><td>The day they kept the Passover in the plains of Jericho and ate the produce of the land</td></tr>
      <tr><td>Stopped</td><td><b>The morning after.</b> "Neither had the children of Israel manna any more"</td></tr>
      <tr><td>Tapered off?</td><td class="n"><b>no</b> — it stopped</td></tr>
    </table>
    <h4>Why the ending matters as much as the beginning</h4>
    <p>Natural sources fade: a season ends, a grove is stripped, a supply line thins. This one is recorded as ending <b>the day it was no longer needed</b>, immediately, at the point where local food became available. That is not the shape of a resource running out; it is the shape of a provision being closed.</p>
    <p class="margin-note">Whatever a reader concludes, notice that the record commits itself to a checkable claim about the ending, and picks the least convenient possible timing for a natural explanation.</p>
    <div class="ref">Background: Exodus 16:35 · Joshua 5:10–12.</div>`
},
{
  id:"j16omer", stage:1, kind:"Memorial", title:"The Jar That Was Kept",
  sub:"Field Chest B · an omer of it, laid up",
  prev:"They kept a jarful deliberately, so that later generations could see the thing itself.",
  x:46, y:62, rot:3, w:206,
  body:`
    <p>One detail in this file is unusual enough to be worth its own page: <b>they preserved a sample.</b></p>
    <table class="ledger">
      <tr><th>Element</th><th>Record</th></tr>
      <tr><td>Quantity kept</td><td>An omer — one person's daily ration</td></tr>
      <tr><td>Container</td><td>A jar or pot, sealed</td></tr>
      <tr><td>Where</td><td>Laid up before the ark, in the sanctuary</td></tr>
      <tr><td>Purpose, as stated</td><td>"That they may see the bread wherewith I have fed you in the wilderness"</td></tr>
      <tr><td>Still referred to</td><td>Centuries later, as an object in the sanctuary</td></tr>
    </table>
    <h4>What the Society makes of it</h4>
    <p>People inventing a food story afterwards do not usually invent a <b>physical exhibit sitting in a public building</b> that anybody can ask to see. It is a claim with an address. That does not settle what the substance was — but it is the behaviour of a record expecting to be checked, not one hoping not to be.</p>
    <p class="margin-note">Compare this with the props in JM-09, which were staged to be examined and fell apart when they were. Here the exhibit is offered, not pressed on you.</p>
    <div class="ref">Background: Exodus 16:32–34 · Hebrews 9:4.</div>`
},

/* ---------------- STAGE 2 — released by the keyword lock ---------------- */
{
  id:"j16sixth", stage:2, kind:"Account", title:"The Sixth Day and the Seventh",
  sub:"Sealed Pouch C · the rhythm in full",
  prev:"Double on the sixth, none on the seventh, and it was announced in advance.",
  x:26, y:28, rot:-3, w:210,
  body:`
    <table class="ledger">
      <tr><th>Step</th><th>Recorded</th></tr>
      <tr><td>1</td><td>On the sixth day they gathered twice as much, and the leaders came and reported it</td></tr>
      <tr><td>2</td><td>They were told <b>beforehand</b>: tomorrow is a rest; bake what you will bake, and keep the rest</td></tr>
      <tr><td>3</td><td>They kept it overnight — and it did not stink, and there were no worms</td></tr>
      <tr><td>4</td><td>On the seventh they were told: today you will not find it in the field</td></tr>
      <tr><td>5</td><td><b>Some went out anyway to gather, and found none</b></td></tr>
      <tr><td>6</td><td>The rhythm held for forty years, through every kind of country and season</td></tr>
    </table>
    <h4>The two details that matter most</h4>
    <ul>
      <li><b>It was predicted.</b> The doubling and the absence were announced before they happened, which is what turns an observation into a test.</li>
      <li><b>The test was run by sceptics.</b> People went out on the seventh morning to check, and the record keeps their failure in the account rather than removing it.</li>
    </ul>
    <div class="ref">Background: Exodus 16:22–30.</div>`
},
{
  id:"j16pattern", stage:2, kind:"Society analysis", title:"No Natural Process Keeps a Calendar",
  sub:"Sealed Pouch C",
  prev:"Rain, tides, seasons and secretions all have rhythms. None of them is seven days long.",
  x:56, y:30, rot:4, w:210,
  body:`
    <p>Natural processes do have rhythms, and it is worth being precise about which ones.</p>
    <table class="ledger">
      <tr><th>Rhythm</th><th>Set by</th><th>Seven days?</th></tr>
      <tr><td>Day and night</td><td>The earth's rotation</td><td class="n">no</td></tr>
      <tr><td>Tides</td><td>The moon, roughly twice a day</td><td class="n">no</td></tr>
      <tr><td>The lunar month</td><td>The moon, about 29½ days</td><td class="n">no</td></tr>
      <tr><td>Seasons</td><td>The earth's orbit</td><td class="n">no</td></tr>
      <tr><td>Insect and plant cycles</td><td>Temperature and daylight</td><td class="n">no</td></tr>
      <tr><td><b>A seven-day week</b></td><td><b>Nothing in the sky or the ground</b></td><td class="n"><b>—</b></td></tr>
    </table>
    <h4>The point</h4>
    <p>The week is the one common human time unit with <b>no astronomical basis whatsoever</b>. There is no seven-day object in nature to entrain a biological or meteorological process. So a substance that appears on six mornings, doubles on one, keeps overnight on that one and only that one, and is absent on the seventh — for forty years, across changing country — is not being produced by any process that has a natural clock available to it.</p>
    <p class="margin-note">This is the strongest single argument in the whole archive, and it is arithmetic rather than assertion. Let students test it: name a seven-day natural cycle.</p>
    <div class="ref">Background: Exodus 16 · Genesis 2:2–3 · Exodus 20:8–11.</div>`
},
{
  id:"j16lesson", stage:2, kind:"Society analysis", title:"How to Handle a Good Partial Explanation",
  sub:"Sealed Pouch C",
  prev:"Say what it accounts for. Then say exactly where it stops.",
  x:80, y:34, rot:-4, w:212,
  body:`
    <p>The Society keeps this file as a lesson in <b>fair testing</b>, because four of the five explanations here are respectable and one of them is genuinely half-right.</p>
    <h4>The method</h4>
    <ol>
      <li><b>List what the explanation gets right.</b> The tamarisk really does produce something small, pale and sweet on the ground.</li>
      <li><b>List the features it must also account for.</b> Quantity, location, duration, spoilage, and the week.</li>
      <li><b>Check each one separately.</b> Do not let a good match on appearance carry the rest.</li>
      <li><b>Notice which failures are differences of degree and which are differences of kind.</b> "Not enough of it" is degree; "keeps a calendar" is kind.</li>
    </ol>
    <h4>What the completed table showed</h4>
    <p>Three of the five explanations could account for the quantity or the spoiling. <b>Not one of them put a mark in the last column.</b> That empty column is the finding — and it is stronger evidence than any full column would have been, because it is the same answer from five different directions.</p>
    <p class="margin-note">Pair with JM-14, where four sensible explanations each died to a measurement. Here they die to a calendar. The habit is the same: test the explanation against every feature, not the most obvious one.</p>
    <div class="ref">Background: Exodus 16 · Joshua 5:12 · compare Deuteronomy 8:3.</div>`
}
];

const JM16_THEORIES = [
  {
    id:"tamarisk",
    title:"1. Tamarisk secretions",
    claim:"Insects on tamarisk twigs produce sweet droplets that harden and can be gathered. Local people still do it.",
    answer:"j16jar",
    verdict:"The daily quantity kills it. One omer per person, every morning, comes to tonnes a day; a tamarisk grove in a good season yields a few kilograms, in season, only where the trees are. The comparison is fair on appearance and fails on quantity by a factor no arithmetic can bridge — before you even reach the fact that it followed a moving camp across bare ground for forty years."
  },
  {
    id:"lichen",
    title:"2. A wind-borne lichen",
    claim:"Certain lichens detach and blow in drifts; people have eaten them in famine. That would explain a fall on open ground.",
    answer:"j16spoil",
    verdict:"The spoilage note kills it. The same substance, in the same jars, in the same night air, bred worms on five nights and kept perfectly sweet on the sixth. Decay runs at a rate set by temperature, moisture and biology — it does not consult a calendar. Whatever this was, on the evidence of its own spoiling it was not behaving like a biological material."
  },
  {
    id:"trade",
    title:"3. Trade with local tribes",
    claim:"They bought food from the peoples they passed, and the record romanticised it later.",
    answer:"j16trade",
    verdict:"The trade record kills it. No caravans, no payments — and the account does record purchases elsewhere, of water and of passage, so it plainly knows how to write down a transaction. No tribe in that country could supply tonnes a day; that scarcity is the problem the file starts with. And people buying food do not complain that they cannot get onions and fish."
  },
  {
    id:"stored",
    title:"4. Stored supplies, rationed out",
    claim:"They carried food out of Egypt and eked it out, and the daily gathering is a way of describing rationing.",
    answer:"j16loadout",
    verdict:"The load-out kills it. They left in haste with unleavened dough because there was no time to prepare provisions, and the record dates the moment that food ran out: one month into the journey. Everything in this case happens afterwards, and runs for forty years. A carried store also does not arrive fresh on the ground each dawn and melt in the sun by noon."
  },
  {
    id:"tidied",
    title:"5. It appeared irregularly and the record was tidied up",
    claim:"Something did turn up from time to time, and the neat weekly pattern was imposed on it centuries later.",
    answer:"j16log",
    verdict:"The gathering log kills it. A tidied record removes awkward detail; this one keeps the hoarders whose portions bred worms, the people who went out on the seventh morning and found nothing, the complaints about the food, and the ration disputes. It also commits itself to a checkable ending: it stopped the day after they ate the produce of the land. Inventions are tidier than this."
  }
];

const JM16_LOCKS = [
  {
    id:"l1", type:"number", code:"1260", len:4,
    wrong:"Not that. Each digit comes from a different document — one of the four is wrong.",
    name:"Field Chest B — the gathering papers",
    blurb:"A four-digit lock. Four questions about the ration and the week. Three of them are in the log; one is in the jar.",
    questions:[
      "How many omers per person on an ordinary day?",
      "How many on the sixth day?",
      "On how many days of the week did it appear?",
      "How much appeared on the seventh day?"
    ],
    hints:[
      "The questions are in order: question one gives the first digit. Every answer is a single digit.",
      "Question 1 is in the object study as well as the log. Questions 2, 3 and 4 are all in the gathering log — read down the columns.",
      "One omer ordinarily. Two on the sixth. Six days out of seven. And on the seventh, nothing at all."
    ],
    reward:"Field Chest B is open: the spoilage note, the tamarisk comparison, the record of the forty years and the day it stopped, and the jar that was kept. The 📋 Hypothesis table in the top bar is live."
  },
  {
    id:"l2", type:"word", code:"SABBATH", len:7,
    wrong:"Not that. Fill in the hypothesis table — the 📋 button in the top bar — and then name the column that nobody could tick.",
    name:"Sealed Pouch C — the empty column",
    blurb:"A seven-letter keyword. Test each explanation against each feature of the data, and tick only where that explanation genuinely accounts for that feature. Three columns will collect marks. One will not — and the thing that column describes has a name.",
    questions:[
      "Open the 📋 Hypothesis table from the top bar.",
      "Five explanations down the side, four features across the top.",
      "Tick a box only where the explanation really does account for that feature.",
      "One column stays completely empty. Name what it describes."
    ],
    hints:[
      "Be generous where you honestly can: trade could deliver quantity, stored supplies could account for quantity, a lichen and a tree could both spoil overnight.",
      "Then be strict about the last column: double on the sixth, keeping overnight only then, and none on the seventh — every week, for forty years.",
      "Nothing in nature runs on a seven-day cycle. The day the record is describing has a name, seven letters long."
    ],
    reward:"Sealed Pouch C is open: the sixth day and the seventh in full, the note on natural rhythms, and the Society's method for handling a good partial explanation."
  }
];

const JM16_MATRIX = {
  button:"📋 Hypothesis table",
  title:"The Hypothesis Table",
  blurb:"Five explanations down the side. Four features of the data across the top. Tick a box only where that explanation would genuinely produce that feature — be as generous as honesty allows, and then see which column is left.",
  corner:"The explanation",
  verify:"Check the table",
  mark:"✔",
  cols:[
    {id:"quantity", label:"Enough for a nation, every morning", note:"tonnes, daily"},
    {id:"spoil",    label:"Breeds worms if kept overnight",     note:"ordinary decay"},
    {id:"duration", label:"Lasts forty years, then stops at once", note:"the day local food arrives"},
    {id:"week",     label:"Double on the sixth, keeps overnight, none on the seventh", note:"every week, for forty years"}
  ],
  rows:[
    {id:"tamarisk", label:"Tamarisk secretions",   note:"real, sweet, seasonal"},
    {id:"lichen",   label:"A wind-borne lichen",   note:"blows in drifts"},
    {id:"trade",    label:"Trade with local tribes", note:"bought and carried in"},
    {id:"stored",   label:"Stored supplies rationed out", note:"carried from Egypt"},
    {id:"tidied",   label:"Irregular, and the record tidied up", note:"a pattern imposed later"}
  ],
  truth:[
    "tamarisk|spoil",
    "lichen|spoil",
    "trade|quantity","trade|duration",
    "stored|quantity",
    "tidied|spoil","tidied|duration"
  ],
  foot:{
    label:"Marks in this column",
    note:"after five explanations have been tested",
    cells:{quantity:"two", spoil:"three", duration:"two", week:"none at all"}
  },
  note:"Give each explanation its due. A tree and a lichen would both rot overnight; trade and stored supplies could both put a lot of food in one place; and an untidy reality tidied up afterwards could account for the length and for spoiling. Then look hard at the last column and ask what would have to be true for anything to tick it.",
  reveal:{
    lead:"Three columns collect marks. Every explanation on the board can account for something — the quantity, or the spoiling, or the span of years. Then there is the last column, and it is completely empty. Not because the explanations are silly, but because the feature it describes is of a different kind: a substance that came double on the sixth morning, kept overnight on that night and no other, and was absent on the seventh, week after week for forty years across changing country.",
    answer:"SABBATH",
    caption:"The week is the one unit of time with nothing in the sky to set it — no tide, no month, no season, no insect cycle is seven days long. Whatever produced this was not working to a natural clock, because there is no seven-day natural clock for it to work to."
  }
};

const JM16_VERDICTS = [
  {id:"tamarisk", text:"Tamarisk secretions, gathered daily and remembered generously."},
  {id:"lichen",   text:"A wind-borne lichen falling in drifts on open ground."},
  {id:"trade",    text:"Food bought from local tribes along the route."},
  {id:"stored",   text:"Supplies carried out of Egypt and carefully rationed."},
  {id:"tidied",   text:"Something irregular, written up afterwards as a neat weekly pattern."},
  {id:"calendar", text:"Every natural candidate accounts for part of the data and none of them for the week: double on the sixth, keeping overnight only then, and nothing at all on the seventh — for forty years, across changing country, ending the day local food was available."}
];

const CASE_JM16 = {
  id:"jm16", code:"CASE JM-16", title:"The Bread on the Ground",
  period:"The wilderness of Sin · c. 1446 BC", colour:"#8a7a4a", poster:"poster_jm16",
  teaser:"A substance appears on the ground each morning and feeds a nation for forty years. Every natural explanation fits — right up until the seventh day.",
  introSub:"Four good explanations, and one column none of them can fill.",
  items:JM16_ITEMS, theories:JM16_THEORIES, locks:JM16_LOCKS, verdicts:JM16_VERDICTS,
  matrix:JM16_MATRIX,
  correct:"calendar",
  boardTitle:"Forty Years of Breakfast",
  boardIntro:"Five explanations have been offered. For each one, pin the <b>single</b> document that makes it impossible. When all five are closed, the accusation form opens.",
  accusationIntro:"Not the tree, not the lichen, not trade, not a store, and not a tidied record. State what the data will actually support — and be specific about which feature none of the explanations could produce.",
  debrief:{
    lead:"Each natural explanation accounts for part of this file and none accounts for the week. The tamarisk is real and yields kilograms where the trees are, not tonnes wherever a camp happens to stop. A lichen does not rot on five nights and keep on the sixth with nothing else changed. There were no caravans and no payments, and people who can buy food do not complain about onions. The Egyptian supplies are dated, and they ran out a month in. And a tidied record would have removed the hoarders, the sceptics who went looking on the seventh morning, and the complaints — all of which are still in the log. What is left is a seven-day rhythm, and nothing in nature runs on one.",
    questions:[
      "Which explanation did you find most convincing before you tested it — and which feature finally broke it?",
      "Can you name a natural cycle that is seven days long? Why is that hard?",
      "The record keeps the parts that make its own people look bad. Does that make you trust it more, or is that just good storytelling?",
      "They preserved a jarful where people could see it. What is the difference between evidence offered and evidence pressed on you?",
      "\"Not enough of it\" and \"it keeps a calendar\" are two different kinds of failure. Which is harder for an explanation to survive, and why?"
    ],
    refs:"Exodus 16 · Numbers 11:4–9 · Joshua 5:10–12 · Deuteronomy 8:3"
  },
  teacher:{
    answers:"Lock 1 code <b>1260</b> (1 omer ordinarily · 2 on the sixth day · 6 days a week · 0 on the seventh). Lock 2 keyword <b>SABBATH</b>, from the 📋 Hypothesis table: seven ticks spread across the first three columns and the fourth column completely empty.",
    pairs:"Tamarisk → The Substance, and the Daily Quantity; lichen → The Spoilage Note; trade → The Trade Record; stored supplies → What They Carried Out of Egypt; irregular and tidied up → The Gathering Log.",
    conclusion:"Every natural candidate explains some feature of the data; none explains the seven-day pattern, and there is no seven-day natural cycle available for one to work from.",
    prompts:"\"How much is one omer each, for that many people? Do the sum.\" · \"Same jar, same night — so what changed?\" · \"Name a seven-day cycle in nature.\" · \"If you were tidying this record, what would you cut?\"",
    extra:"The arithmetic is the lesson here, so make them do it: give groups a population figure and an omer in litres and let them find the tonnage themselves. The empty column lands much harder after a genuine attempt to fill it, so insist they try to be generous to each explanation first — a class that ticks nothing anywhere has not understood the exercise. Be scrupulous about the tamarisk: it is a real phenomenon and treating it fairly is what makes the conclusion worth anything. Pairs well with JM-14 (explanations killed by measurement) and JM-11 (a test designed so it could fail)."
  }
};

registerCase(CASE_JM16);
