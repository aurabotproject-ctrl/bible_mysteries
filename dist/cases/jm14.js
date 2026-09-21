"use strict";
/* ============================================================
   CASE JM-14 — THE CROSSING
   The Sea of Reeds.  Source: Exodus 13-15.
   ============================================================ */

SVG.j14delta = `<svg viewBox="0 0 1536 1024" xmlns="http://www.w3.org/2000/svg"><image href="images/j14delta.jpg" x="0" y="0" width="1536" height="1024"/><text x="205" y="394" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="19" font-weight="600" fill="#4a3520" textLength="208" lengthAdjust="spacingAndGlyphs">ROUND THE HEAD</text><text x="205" y="415" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="10" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".92" textLength="214" lengthAdjust="spacingAndGlyphs">the shallow way, north of the water</text><text x="763" y="387" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="18" font-weight="600" fill="#4a3520" textLength="200" lengthAdjust="spacingAndGlyphs">THE CAMP CROSSING</text><text x="763" y="408" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="10" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".92" textLength="186" lengthAdjust="spacingAndGlyphs">straight out from Pi-hahiroth</text><text x="1385" y="411" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="17" font-weight="600" fill="#4a3520" textLength="190" lengthAdjust="spacingAndGlyphs">THE SOUTH CHANNEL</text><text x="1385" y="432" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="10" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".92" textLength="184" lengthAdjust="spacingAndGlyphs">deep water, no bed to walk on</text></svg>`;
SVG.j14section = `<svg viewBox="0 0 1536 1024" xmlns="http://www.w3.org/2000/svg"><image href="images/j14section.jpg" x="0" y="0" width="1536" height="1024"/><text x="798" y="137" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="17" font-weight="600" fill="#4a3520" textLength="210" lengthAdjust="spacingAndGlyphs">THE CROSSING WIDTH</text><text x="798" y="158" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="11" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".92" textLength="180" lengthAdjust="spacingAndGlyphs">measured shore to shore</text><text x="933" y="440" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="22" font-weight="600" fill="#4a3520" textLength="132" lengthAdjust="spacingAndGlyphs">THE DEPTH</text><text x="933" y="461" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="10" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".92" textLength="198" lengthAdjust="spacingAndGlyphs">over a man&#8217;s head at the middle</text><text x="1044" y="616" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="22" font-weight="600" fill="#4a3520" textLength="110" lengthAdjust="spacingAndGlyphs">THE BED</text><text x="1044" y="637" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="10" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".92" textLength="196" lengthAdjust="spacingAndGlyphs">soft silt &#8212; dry when they crossed</text></svg>`;
SVG.j14wheel = `<svg viewBox="0 0 1536 1024" xmlns="http://www.w3.org/2000/svg"><image href="images/j14wheel.jpg" x="0" y="0" width="1536" height="1024"/><text x="162" y="75" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="22" font-weight="600" fill="#4a3520" textLength="140" lengthAdjust="spacingAndGlyphs">THE WHEEL</text><text x="162" y="96" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="10" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".92" textLength="214" lengthAdjust="spacingAndGlyphs">six-spoked, Egyptian pattern</text><text x="1296" y="167" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="22" font-weight="600" fill="#4a3520" textLength="106" lengthAdjust="spacingAndGlyphs">THE BIT</text><text x="1296" y="188" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="10" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".92" textLength="216" lengthAdjust="spacingAndGlyphs">bronze, from a chariot team</text><text x="1205" y="873" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="19" font-weight="600" fill="#4a3520" textLength="214" lengthAdjust="spacingAndGlyphs">HARNESS BOSSES</text><text x="1205" y="894" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="11" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".92" textLength="158" lengthAdjust="spacingAndGlyphs">lifted from the bed</text></svg>`;

const JM14_ITEMS = [

/* ---------------- STAGE 0 ---------------- */
{
  id:"j14letter", stage:0, notEvidence:true, kind:"Briefing", title:"Letter from the Case Supervisor",
  sub:"The Bible Investigation Bureau · Department of Unsolved Antiquities",
  prev:"By nightfall they were trapped. By morning they were across and the army was not.",
  x:22, y:26, rot:-3, w:216,
  body:`
    <p><b>To the investigating team,</b></p>
    <p>A column of several hundred thousand people — on foot, with children, livestock and carts — is camped by deep water with mountains on one side, wilderness on the other, and the fastest army in the world coming up behind them.</p>
    <p>That is the position at dusk. By dawn <b>the column is on the far shore and the army is gone.</b></p>
    <p>The Bureau is not asking you to decide what the water did. It is asking you to <b>reconstruct the route</b>: where exactly did they cross, and does any ordinary explanation survive contact with the ground?</p>
    <h4>Your task</h4>
    <p>Five explanations are on the board. Four of them are the sensible, sceptical ones, and the file will let you test every one against a survey. Close all five, then say what the evidence actually supports.</p>
    <h4>How the file works</h4>
    <ul>
      <li>Everything on the desk now is yours.</li>
      <li>Two parts of the file are <b>locked</b>. Both codes are in documents you have or will have.</li>
      <li>The second lock opens with the <b>route reconstruction</b> — the 🧭 button in the top bar, once the first lock is open.</li>
      <li>When all five explanations are closed, go to the <b>Pinboard</b>.</li>
    </ul>
    <p class="margin-note">Be fair to the sceptical explanations here. Three of them are perfectly reasonable until you measure something.</p>
    <div class="sig">Mordecai ben Jair</div>
    <div class="small" style="color:#5b4a35">Case Supervisor</div>
    <div class="ref">This case is reconstructed from Exodus 13:17 – 15:21.</div>`
},
{
  id:"j14delta", stage:0, kind:"Survey plan", title:"The Camp, and Three Candidate Crossings",
  sub:"Surveyed from the shore at Pi-hahiroth", thumb:"j14delta",
  prev:"Three ways across. Only one of them starts where the camp actually was.",
  x:52, y:22, rot:3, w:218,
  body:`
    <div class="plate">${SVG.j14delta}<div class="cap">Click the plan to enlarge it. The three candidates, marked.</div></div>
    <table class="ledger">
      <tr><th>Candidate</th><th>Where it goes</th><th>Distance from the camp</th></tr>
      <tr><td><b>Round the head</b></td><td>Along the shore and round the northern end of the water — no crossing at all</td><td>A day and a half's march for a column with children</td></tr>
      <tr><td><b>The camp crossing</b></td><td>Straight out from Pi-hahiroth to the opposite shore</td><td class="n"><b>0</b> — it begins where they stood</td></tr>
      <tr><td><b>The south channel</b></td><td>Across the deep channel further down the coast</td><td>Half a night's march</td></tr>
    </table>
    <h4>Where the camp was, and why it matters</h4>
    <ul>
      <li>The column left Egypt and camped by the sea on the <b>third day</b> out. That number is in the first lock.</li>
      <li>The camp is placed <i>between Migdol and the sea</i>, with the mountains closing the western side. It is a pocket.</li>
      <li>The record is explicit that this position was chosen deliberately, and that it looked to Egypt like a mistake: "they are entangled in the land, the wilderness has shut them in."</li>
    </ul>
    <h4>Why "they went round the northern end" is in trouble immediately</h4>
    <p>Going round is not a secret. It is a day and a half of open shore in daylight, and the pursuing force is chariotry — <b>the fastest thing on that ground.</b> A column that walks round the head of the water is simply followed round it and caught in the open.</p>
    <p class="margin-note">Ask your team the blunt question: if you can walk round it, what stops the man behind you walking round it too?</p>
    <div class="ref">Background: Exodus 13:20 · 14:1–3, 9.</div>`
},
{
  id:"j14depth", stage:0, kind:"Depth survey", title:"The Depth Survey",
  sub:"Section taken across the camp crossing", thumb:"j14section",
  prev:"Well over a man's head at the middle. This is not a ford.",
  x:78, y:26, rot:-4, w:216,
  body:`
    <div class="plate">${SVG.j14section}<div class="cap">Click the section to enlarge it.</div></div>
    <table class="ledger">
      <tr><th>Measured</th><th>Finding</th></tr>
      <tr><td>Width, shore to shore</td><td>Wide enough that the far bank is a march, not a wade</td></tr>
      <tr><td>Depth at the centre</td><td><b>Well over a man's head</b>, and over the axle of any cart ever built</td></tr>
      <tr><td>Bed material</td><td>Soft silt — a chariot wheel sinks into it under load</td></tr>
      <tr><td>Any shallow line across</td><td class="n"><b>none found</b></td></tr>
      <tr><td>What the record describes</td><td>Dry ground underfoot, and <b>2</b> walls of water — one on the right hand and one on the left</td></tr>
    </table>
    <h4>Why "they found a ford" fails</h4>
    <p>A ford is a shallow line you can walk. The survey does not find one — not at the camp crossing, not anywhere along this stretch. And a ford would not help: <b>anything shallow enough for a family on foot is shallow enough for a chariot</b>, and chariots move faster than families.</p>
    <p class="margin-note">Note the number of walls the record claims. It is in the first lock, and it is not a detail you can get from a ford.</p>
    <div class="ref">Fictional survey. Background: Exodus 14:22, 29.</div>`
},
{
  id:"j14tide", stage:0, kind:"Technical note", title:"The Tidal Note",
  sub:"Could a low tide have opened it?",
  prev:"There is no tide on that water big enough to matter, and none that waits until dark.",
  x:26, y:56, rot:5, w:208,
  body:`
    <p>A freak low tide is the tidiest natural explanation available, so the Bureau tested it properly.</p>
    <table class="ledger">
      <tr><th>Question</th><th>Finding</th></tr>
      <tr><td>Tidal range on this water</td><td>Small — measured in a few handspans, not in the height of a man</td></tr>
      <tr><td>Could it expose the bed at the centre?</td><td class="n"><b>no</b> — not by an order of magnitude</td></tr>
      <tr><td>Does a tide hold the water back for hours?</td><td>No. It turns, and it returns on a fixed timetable</td></tr>
      <tr><td>Would a tide produce standing water on both sides?</td><td class="n"><b>no</b> — a falling tide falls everywhere at once</td></tr>
      <tr><td>Timing</td><td>Tides do not wait for nightfall, and they do not turn on the hour an army enters</td></tr>
    </table>
    <h4>The awkward part for this explanation</h4>
    <p>Even granting a freak tide, it explains the wrong shape of event. The account is not "the water was low" — it is <b>water standing on both sides of a dry corridor for the length of a night</b>, and then not standing. Tides do not do the standing part.</p>
    <p class="margin-note">Good sceptical explanations usually fail on shape before they fail on size. Worth naming that out loud.</p>
    <div class="ref">Fictional technical note. Background: Exodus 14:21–22.</div>`
},
{
  id:"j14muster", stage:0, kind:"Muster record", title:"The Muster",
  sub:"What came back to Egypt",
  prev:"Six hundred picked chariots went out. The return column is empty.",
  x:56, y:52, rot:-2, w:210,
  body:`
    <table class="ledger">
      <tr><th>Element of the pursuit</th><th>Went out</th><th>Returned</th></tr>
      <tr><td>Picked chariots</td><td>600</td><td class="n"><b>0</b></td></tr>
      <tr><td>All the other chariots of Egypt</td><td>with their officers</td><td class="n"><b>0</b></td></tr>
      <tr><td>Horsemen and army</td><td>the whole force sent</td><td class="n"><b>0</b></td></tr>
      <tr><td>Reported by</td><td colspan="2">Israel, from the far shore — and by the silence of the Egyptian side afterwards</td></tr>
    </table>
    <h4>Why "the army turned back and the story grew" fails</h4>
    <p>An army that turns back <b>arrives home.</b> It reports, it is re-mustered, it appears in the next campaign. This force does not: nothing in the file, and nothing in Egypt's own later record of the reign, shows the pursuing column returning. Meanwhile fittings from Egyptian chariots are lifted off the bed of the crossing itself.</p>
    <p>Note the number in the right-hand column. <b>Zero</b> is a digit in the first lock, and it is the hardest number in this file for any tidy explanation to survive.</p>
    <p class="margin-note">A story that grows in the telling usually grows about the heroes. This one grows about a missing army, which is a much more checkable thing.</p>
    <div class="ref">Background: Exodus 14:6–9, 23–28.</div>`
},
{
  id:"j14night", stage:0, kind:"Night record", title:"The Night Between the Camps",
  sub:"What stood between the two columns",
  prev:"One night. The pillar moved behind them and neither camp came near the other until morning.",
  x:80, y:56, rot:4, w:206,
  body:`
    <table class="ledger">
      <tr><th>Time</th><th>Recorded</th></tr>
      <tr><td>Evening</td><td>The Egyptian column comes up and camps within sight</td></tr>
      <tr><td>Dusk</td><td>The pillar of cloud <b>moves from the front of the column to the rear</b> and stands between the two camps</td></tr>
      <tr><td>Through the night</td><td>Darkness on one side, light on the other. <b>Neither camp came near the other all night</b></td></tr>
      <tr><td>Nights this lasted</td><td class="n"><b>1</b></td></tr>
      <tr><td>Same night</td><td>A strong east wind blows all night. The water goes back. The column crosses</td></tr>
      <tr><td>Morning watch</td><td>The Egyptians, already in the crossing, are thrown into confusion; wheels come off; the water returns</td></tr>
    </table>
    <h4>Two things worth noticing</h4>
    <ul>
      <li>The delay is <b>exactly one night</b> — long enough for a column with livestock to cross, and no longer. That number is in the first lock.</li>
      <li>The pursuing force did not sit and wait out of caution. It <b>entered the same gap</b> the next morning. Whatever the crossing was, it looked crossable to professional soldiers.</li>
    </ul>
    <p class="margin-note">The detail that the Egyptians followed them in is the strongest evidence in the file that the corridor was real and looked solid.</p>
    <div class="ref">Background: Exodus 14:19–20, 21, 24–25.</div>`
},

/* ---------------- STAGE 1 — released by the numbers lock ---------------- */
{
  id:"j14wind", stage:1, kind:"Analysis", title:"The Wind Analysis",
  sub:"Field Chest B · could a strong wind have done it?",
  prev:"A wind that shifts that much water flattens anything walking into it.",
  x:28, y:26, rot:-3, w:212,
  body:`
    <p>This is the strongest natural explanation on the board, and it deserves the most careful treatment — <b>partly because the record itself names a wind.</b></p>
    <div class="doc-body">
      <p>"And the LORD caused the sea to go back by a <b>strong east wind</b> all that night, and made the sea dry land, and the waters were divided."</p>
    </div>
    <h4>What wind-setdown can actually do</h4>
    <table class="ledger">
      <tr><th>Question</th><th>Finding</th></tr>
      <tr><td>Can wind push shallow water off a flat shelf?</td><td><b>Yes</b> — this is a real, measured effect</td></tr>
      <tr><td>How strong, to open water this deep?</td><td>A sustained gale, hour after hour, without dropping</td></tr>
      <tr><td>Could a column walk <i>into</i> such a wind?</td><td class="n"><b>no</b> — with children, carts and livestock, plainly not</td></tr>
      <tr><td>Would it leave water standing on <b>both</b> sides?</td><td class="n"><b>no</b> — wind pushes one way</td></tr>
      <tr><td>Would the bed be dry, or a churned mudflat?</td><td>Churned. The record says <b>dry ground</b></td></tr>
      <tr><td>Would it stop on cue as the last person landed?</td><td class="n"><b>no</b></td></tr>
    </table>
    <h4>The Bureau's position</h4>
    <p>Setdown by wind is real, and if the account had said "the water was shallow and a gale blew it thin", this file would be closed. It does not. It says <b>dry ground, walls on both sides, a whole night's window, and a return of the water timed to the pursuit.</b> A wind explains the first word of that sentence and none of the rest.</p>
    <p class="margin-note">Keep the word. The record gives an agent for the dry ground and it is not a shrug — it is a specific, named, checkable claim, and it is four letters long.</p>
    <div class="ref">Background: Exodus 14:21. Setdown notes are the Bureau's own.</div>`
},
{
  id:"j14wheel", stage:1, kind:"Recovered material", title:"What Was Lifted Off the Bed",
  sub:"Field Chest B · chariot fittings", thumb:"j14wheel",
  prev:"A six-spoked wheel, a bronze bit, harness bosses. Egyptian, and on the bed.",
  x:58, y:24, rot:4, w:214,
  body:`
    <div class="plate">${SVG.j14wheel}<div class="cap">Click the plate to enlarge it. The recovered material as laid out.</div></div>
    <table class="ledger">
      <tr><th>Item</th><th>Note</th></tr>
      <tr><td>Wheel</td><td>Six-spoked, light construction — the Egyptian military pattern of the period</td></tr>
      <tr><td>Bit and cheekpieces</td><td>Bronze, from a paired chariot team</td></tr>
      <tr><td>Harness bosses and buckles</td><td>Studded discs, strap fittings, one ring terret</td></tr>
      <tr><td>Recovered from</td><td><b>The bed of the camp crossing</b> — not the shore, not the shallows</td></tr>
      <tr><td>Recovered from the other two candidates</td><td class="n"><b>nothing</b></td></tr>
    </table>
    <h4>What this narrows</h4>
    <p>Egyptian chariot fittings on the bed of the crossing put the pursuit <b>in the water, at that point</b>. It is not consistent with a column that went round the head, and not consistent with a force that turned back and went home.</p>
    <p class="margin-note">This is the one place in the file where the ground itself answers a question the documents argue about.</p>
    <div class="ref">Fictional recovery record. Background: Exodus 14:23–25, 28.</div>`
},
{
  id:"j14times", stage:1, kind:"Marching times", title:"The Marching Times",
  sub:"Field Chest B · how long a column that size takes",
  prev:"A night is enough to cross. It is nowhere near enough to walk round.",
  x:80, y:44, rot:-6, w:208,
  body:`
    <p>Any route reconstruction has to survive arithmetic. The Bureau modelled the column: people on foot, children, flocks and herds, carts, moving in the dark.</p>
    <table class="ledger">
      <tr><th>Route</th><th>Time needed</th><th>Fits one night?</th></tr>
      <tr><td>Round the head of the water</td><td>A day and a half of open shore</td><td class="n"><b>no</b></td></tr>
      <tr><td>South channel</td><td>Half a night to reach it, then the crossing itself</td><td>Tight — and it starts by marching <i>toward</i> the pursuit</td></tr>
      <tr><td><b>The camp crossing</b></td><td>Begins where they stand; a night's crossing on a broad front</td><td class="n"><b>yes</b></td></tr>
    </table>
    <h4>The broad front</h4>
    <p>A column of that size cannot cross anything in single file overnight — the arithmetic simply refuses. The account describes a corridor wide enough for the whole body to move across together, which is the only version that fits the clock.</p>
    <p class="margin-note">Give your team the numbers before the answer. Working out that a night is not enough time to walk round is more convincing than being told.</p>
    <div class="ref">Fictional modelling. Background: Exodus 12:37 · 14:21–22.</div>`
},
{
  id:"j14egypt", stage:1, kind:"Archive note", title:"The Egyptian Side of the File",
  sub:"Field Chest B · what a defeated power records",
  prev:"No monument says it happened. No monument ever says that sort of thing.",
  x:46, y:62, rot:3, w:206,
  body:`
    <p>The obvious objection: if Egypt lost an army, why is there no Egyptian inscription about it? The Bureau answers this squarely, because students will ask.</p>
    <table class="ledger">
      <tr><th>Question</th><th>Finding</th></tr>
      <tr><td>Do Egyptian monuments record defeats?</td><td class="n"><b>almost never</b> — they are official display, not chronicle</td></tr>
      <tr><td>Known practice</td><td>Reverses are omitted, minimised, or rewritten as victories</td></tr>
      <tr><td>Does absence of a monument settle anything?</td><td>No. It is what you would expect either way</td></tr>
      <tr><td>What would count as evidence?</td><td>Material on the ground, and a force that stops appearing</td></tr>
    </table>
    <h4>How to use this honestly</h4>
    <p>The Bureau does not offer Egypt's silence as evidence <i>for</i> the account. It offers it as evidence that <b>silence proves nothing here</b> — the argument "there is no Egyptian record, therefore it did not happen" would also disprove every Egyptian defeat we know happened from other sources.</p>
    <p class="margin-note">Teach the shape of this reasoning. Absence of evidence is only evidence of absence where you would expect the evidence to exist.</p>
    <div class="ref">Fictional archive note, on standard practice in royal inscriptions.</div>`
},

/* ---------------- STAGE 2 — released by the keyword lock ---------------- */
{
  id:"j14crossing", stage:2, kind:"Account", title:"The Crossing, Hour by Hour",
  sub:"Sealed Pouch C",
  prev:"Wind all night, dry ground, walls on both sides, and the water back at the morning watch.",
  x:26, y:28, rot:-3, w:210,
  body:`
    <table class="ledger">
      <tr><th>Hour</th><th>Recorded</th></tr>
      <tr><td>Dusk</td><td>The pillar moves to the rear and stands between the camps</td></tr>
      <tr><td>Night</td><td><b>A strong east wind, all that night.</b> The water goes back; the sea becomes dry land; the waters are divided</td></tr>
      <tr><td>Through the night</td><td>The column crosses on dry ground, water standing on the right hand and on the left</td></tr>
      <tr><td>Before dawn</td><td>The Egyptians pursue <b>into the same corridor</b> — all Pharaoh's horses, chariots and horsemen</td></tr>
      <tr><td>Morning watch</td><td>The pursuit is thrown into confusion; the chariot wheels come off, so that they drive heavily</td></tr>
      <tr><td>Dawn</td><td>The water returns to its strength. Not one of them remains</td></tr>
      <tr><td>After</td><td>Israel sees the Egyptians dead on the shore</td></tr>
    </table>
    <h4>The four claims a natural explanation has to carry</h4>
    <ol>
      <li>Dry ground, not mud.</li>
      <li>Standing water on <b>both</b> sides.</li>
      <li>A window that lasts a whole night.</li>
      <li>A return timed to the pursuit, not to a tide table.</li>
    </ol>
    <p class="margin-note">Any one of these might be argued. The file's difficulty is that they come together.</p>
    <div class="ref">Background: Exodus 14:21–31.</div>`
},
{
  id:"j14song", stage:2, kind:"Early record", title:"The Song, and How Old It Is",
  sub:"Sealed Pouch C",
  prev:"The account survives as a poem — and the poem's language is older than the prose around it.",
  x:56, y:30, rot:4, w:208,
  body:`
    <p>Immediately after the crossing the record breaks into a song, and the Bureau flags it for a reason that has nothing to do with music.</p>
    <table class="ledger">
      <tr><th>Feature</th><th>Note</th></tr>
      <tr><td>Form</td><td>A victory poem, sung at the shore</td></tr>
      <tr><td>Language</td><td>Markedly <b>archaic</b> — older in form than the narrative it sits inside</td></tr>
      <tr><td>What that suggests</td><td>The account is not a late invention dropped into an old story; the earliest layer is the one describing the event</td></tr>
      <tr><td>Content</td><td>Names the chariots, the officers, the water, the wind — the same details as the prose</td></tr>
      <tr><td>Also preserved</td><td>Miriam's short refrain, with the women and timbrels</td></tr>
    </table>
    <h4>Why the Bureau keeps this page</h4>
    <p>Because "the story grew in the telling" predicts that the <b>oldest</b> layer should be the plainest and the dramatic details should be late. Here the oldest layer is the one with the chariots and the sea in it.</p>
    <div class="ref">Background: Exodus 15:1–21.</div>`
},
{
  id:"j14lesson", stage:2, kind:"Bureau analysis", title:"Ruling Things Out Honestly",
  sub:"Sealed Pouch C",
  prev:"Four sensible explanations, each killed by a measurement rather than an argument.",
  x:80, y:34, rot:-4, w:212,
  body:`
    <p>This case is in the archive as a lesson in method, not as a lesson in wonder.</p>
    <h4>What made each explanation fail</h4>
    <ul>
      <li><b>The ford</b> — failed on a measurement. There is no shallow line, and a shallow line would have helped the chariots more than the families.</li>
      <li><b>The tide</b> — failed on shape before size. Tides fall everywhere at once; they do not stand water up on two sides.</li>
      <li><b>Round the head</b> — failed on arithmetic. A day and a half of open shore in front of chariotry is not an escape.</li>
      <li><b>The army turned back</b> — failed on the muster and on the fittings lifted off the bed.</li>
      <li><b>The wind</b> — got closest, and failed on the details the record itself insists on: dry ground, two walls, a whole night, and a return timed to the pursuit.</li>
    </ul>
    <h4>The honest remainder</h4>
    <p>What is left is what the account says, and the Bureau states it plainly: <b>a dry corridor with water standing on both sides, open for one night, and closed on the force that followed them in.</b> The file does not ask you to find that easy. It asks you to notice that the ordinary explanations were tested and did not survive — and that the record names its own agent for it, in one word, rather than leaving it unexplained.</p>
    <p class="margin-note">The most valuable habit here is the order of work: measure first, argue second. Every explanation on this board died to a number.</p>
    <div class="ref">Background: Exodus 14 · Exodus 15 · compare Joshua 2:9–11 · Psalm 77:16–20.</div>`
}
];

const JM14_THEORIES = [
  {
    id:"ford",
    title:"1. They found a ford, and the Egyptians were careless",
    claim:"A shallow line across, known to locals, crossed at night while the army blundered in.",
    answer:"j14depth",
    verdict:"The depth survey kills it. There is no shallow line anywhere on this stretch: the centre is well over a man's head and the bed is soft silt. And a ford would not help — anything shallow enough for families on foot with carts is comfortably shallow enough for chariotry, which moves faster. The survey also records what the account claims, and it is not a ford: dry ground, with water standing on both sides."
  },
  {
    id:"tide",
    title:"2. A freak low tide",
    claim:"An unusual tide emptied the crossing for a few hours and caught the pursuit when it turned.",
    answer:"j14tide",
    verdict:"The tidal note kills it. The tidal range on that water is a few handspans, not the height of a man — short by an order of magnitude. Worse, it is the wrong shape of event: a falling tide falls everywhere at once and returns on a fixed timetable. It does not hold water standing on both sides of a dry corridor for a night, and it does not wait for dark or turn when an army enters."
  },
  {
    id:"round",
    title:"3. They went round the northern end",
    claim:"There was no crossing at all — the column simply walked round the head of the water.",
    answer:"j14delta",
    verdict:"The survey plan kills it, with help from the clock. Round the head is a day and a half of open shore for a column with children and livestock — in daylight, in front of six hundred chariots. Whatever you can walk round, the man behind you can drive round faster. And nothing from the pursuit was ever recovered on that route; the fittings came off the bed of the camp crossing."
  },
  {
    id:"turned",
    title:"4. The army turned back and the story grew",
    claim:"The Egyptians broke off the pursuit, went home, and the escape was written up as a disaster for them.",
    answer:"j14muster",
    verdict:"The muster kills it. Six hundred picked chariots, all the other chariotry, the officers, the horsemen — and not one unit reappears afterwards. An army that turns back arrives home and shows up in the next campaign. This one does not, and Egyptian chariot fittings were lifted off the bed of the crossing itself."
  },
  {
    id:"wind",
    title:"5. A strong wind pushed the water back naturally",
    claim:"Wind setdown on shallow water is a real effect; a gale did the whole thing.",
    answer:"j14wind",
    verdict:"The wind analysis kills it — and it is the explanation that comes closest. Setdown is real, but a wind strong enough to open water this deep is a sustained gale nobody walks into with children and carts; it pushes one way, so it cannot stand water on both sides; it leaves a churned mudflat rather than dry ground; and it does not stop on the hour the last person lands. The record names a wind. It also names four things a wind cannot do."
  }
];

const JM14_LOCKS = [
  {
    id:"l1", type:"number", code:"1302", len:4,
    wrong:"Not that. Each digit comes from a different document — one of the four is wrong.",
    name:"Field Chest B — the survey papers",
    blurb:"A four-digit lock. Four questions about the shape of the night, each answered by a document already on your desk. Two of the answers are the hardest numbers in the file.",
    questions:[
      "How many nights did the pillar of cloud stand between the two camps?",
      "How many days out from Egypt was the camp by the sea?",
      "How many of the pursuing force returned home?",
      "How many walls of water does the record describe?"
    ],
    hints:[
      "The questions are in order: question one gives the first digit. Every answer is a single digit.",
      "Question 1 is the night record. Question 2 is the survey plan. Question 3 is the muster. Question 4 is the depth survey."
    ],
    reward:"Field Chest B is open: the wind analysis, the material lifted off the bed, the marching times, and the note on the Egyptian side of the file. The 🧭 Route reconstruction in the top bar is live."
  },
  {
    id:"l2", type:"word", code:"WIND", len:4,
    wrong:"Not that. Run the route reconstruction — the 🧭 button in the top bar — then read what the record names as the agent for the dry ground.",
    name:"Sealed Pouch C — the agent the record names",
    blurb:"A four-letter keyword. Test each of the three candidate crossings against the survey, the clock and the recovered material. One route survives all four tests — and once you have it, the record gives you one word for how the ground under it was dry.",
    questions:[
      "Open the 🧭 Route reconstruction from the top bar.",
      "Three candidate crossings down the side, four tests across the top.",
      "Tick a test only where that route actually passes it.",
      "One row passes everything. Then read the wind analysis again — the first line of it."
    ],
    hints:[
      "Be strict with 'round the head': it is not a crossing at all, and it does not survive the clock.",
      "The south channel passes on timing and on depth, and fails on the camp position and on the recovered material."
    ],
    reward:"Sealed Pouch C is open: the crossing hour by hour, the note on the age of the song, and the Bureau's analysis of how each explanation was ruled out."
  }
];

const JM14_MATRIX = {
  button:"🧭 Route reconstruction",
  title:"The Route Reconstruction",
  blurb:"Three candidate crossings down the side. Four tests across the top. Tick a box only where that route genuinely passes that test — a route that merely <i>might</i> work does not count as passing.",
  corner:"The route",
  verify:"Check the reconstruction",
  mark:"✔",
  cols:[
    {id:"camp",  label:"Starts where the camp was",  note:"between Migdol and the sea"},
    {id:"clock", label:"Fits one night",             note:"a column with children and herds"},
    {id:"deep",  label:"Deep enough to stop an army",note:"or the chariots simply follow"},
    {id:"finds", label:"Egyptian fittings on the bed", note:"recovered material"}
  ],
  rows:[
    {id:"head",  label:"Round the head of the water", note:"no crossing at all"},
    {id:"south", label:"The south channel",           note:"half a night's march away"},
    {id:"campx", label:"The camp crossing",           note:"straight out from Pi-hahiroth"}
  ],
  truth:[
    "south|clock","south|deep",
    "campx|camp","campx|clock","campx|deep","campx|finds"
  ],
  foot:{
    label:"What the account requires of any route",
    note:"all four, together",
    cells:{camp:"the pocket", clock:"one night", deep:"walls on both sides", finds:"a pursuit that entered"}
  },
  note:"Be hard on the middle row. The south channel is deep and could just about be reached in the time — but the column would have to march toward the pursuit to get there, the camp was not on it, and nothing of the Egyptian force has ever come off its bed.",
  reveal:{
    lead:"Only one row passes everything. Round the head fails on all four — it is not a crossing, it takes a day and a half in the open in front of chariotry, and nothing was ever recovered along it. The south channel is deep enough and just about reachable, and fails on the camp position and on the ground. The camp crossing passes the survey, the clock, the depth and the recovered material — which leaves the hard part exactly where the account puts it: that route is deep water, and they walked over it on dry ground.",
    answer:"WIND",
    caption:"\"The LORD caused the sea to go back by a strong east wind all that night, and made the sea dry land.\" The record names its agent — and then adds four things no wind does: dry ground rather than mud, water standing on both sides, a window that lasted a whole night, and a return timed to the pursuit."
  }
};

const JM14_VERDICTS = [
  {id:"ford",   text:"They crossed at a known ford and the Egyptians blundered into deep water."},
  {id:"tide",   text:"A freak low tide emptied the crossing and turned at the wrong moment."},
  {id:"round",  text:"There was no crossing — the column walked round the northern end."},
  {id:"turned", text:"The pursuit broke off and went home, and the story grew afterwards."},
  {id:"wind",   text:"A strong wind pushed shallow water back, and that is the whole of it."},
  {id:"corridor", text:"The camp crossing is the only route that fits the ground, the clock and the recovered material — and it is deep water: a dry corridor with water standing on both sides, open for one night, and closed on the force that followed them into it."}
];

const CASE_JM14 = {
  id:"jm14", code:"CASE JM-14", title:"The Crossing",
  period:"The Sea of Reeds · c. 1446 BC", colour:"#2f5c6b", poster:"poster_jm14",
  teaser:"A column of refugees is trapped between deep water and the fastest army in the world. By morning the refugees are across, and the army is not there at all.",
  introSub:"Reconstruct the route before you argue about the water.",
  items:JM14_ITEMS, theories:JM14_THEORIES, locks:JM14_LOCKS, verdicts:JM14_VERDICTS,
  matrix:JM14_MATRIX,
  correct:"corridor",
  boardTitle:"One Night at Pi-hahiroth",
  boardIntro:"Five explanations have been offered for how a trapped column got across. For each one, pin the <b>single</b> document that makes it impossible. When all five are closed, the accusation form opens.",
  accusationIntro:"There is no ford, no tide that size, no time to walk round, no army that came home, and no wind that does all four things at once. State what the survey, the clock and the recovered material will actually support.",
  debrief:{
    lead:"Every ordinary explanation was tested against something measurable and failed on a number rather than an argument: no shallow line exists; the tidal range is a few handspans; going round takes a day and a half in front of chariotry; not one unit of the pursuit ever came home, and its fittings came off the bed of the crossing. Wind setdown came closest and still could not produce dry ground, water standing on both sides, a window a whole night long, and a return timed to the pursuit. What is left is the corridor the account describes — and the record names a strong east wind as the agent, which is a specific claim rather than a shrug.",
    questions:[
      "Which explanation did you think was strongest before you measured anything — and what killed it?",
      "The record itself says a wind did it. Does naming a natural agent make the account more believable, less, or neither?",
      "The Egyptians followed them into the corridor. What does that tell you about how it looked from the shore?",
      "There is no Egyptian monument recording this. How much weight should silence carry, given what monuments were for?",
      "\"Measure first, argue second.\" Where else could you use that this week?"
    ],
    refs:"Exodus 13:17 – 15:21 · Joshua 2:9–11 · Psalm 77:16–20"
  },
  teacher:{
    answers:"Lock 1 code <b>1302</b> (1 night · 3 days out · 0 returned · 2 walls of water). Lock 2 keyword <b>WIND</b>, from the 🧭 Route reconstruction: only the camp crossing passes all four tests; the south channel ticks the clock and the depth; round the head ticks nothing. The word comes from Exodus 14:21, quoted at the head of the wind analysis.",
    pairs:"A ford → The Depth Survey; a freak tide → The Tidal Note; round the northern end → The Camp, and Three Candidate Crossings; the army turned back → The Muster; a strong wind → The Wind Analysis.",
    conclusion:"The camp crossing is the only route consistent with the camp position, the marching clock, the depth and the recovered fittings — and it is deep water, crossed dry, for one night.",
    prompts:"\"How deep is it? Now say that again slowly.\" · \"If you can walk round, what stops the chariots?\" · \"Could you walk into a gale that strong?\" · \"What would count as evidence that an army did not come home?\"",
    extra:"This is the archive's best case for teaching that a good sceptical explanation usually fails on <i>shape</i> before it fails on size — the tide is the clearest example, and worth drawing on the board. Be scrupulously fair to the wind explanation: it is real physics and the record itself invokes it, which is why the case ends with what a wind cannot do rather than with a dismissal. Expect a strong argument about Egyptian silence; the archive note is there to keep it from becoming the whole lesson. Pairs naturally with JM-10, which is the case immediately before it in the sequence."
  }
};

registerCase(CASE_JM14);
