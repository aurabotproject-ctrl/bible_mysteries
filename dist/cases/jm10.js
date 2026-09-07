"use strict";
/* ============================================================
   CASE JM-10 — THE TEN BLOWS
   Egypt.  Source: Exodus 7-12.
   ============================================================ */

SVG.j10delta = `<svg viewBox="0 0 1536 1024" xmlns="http://www.w3.org/2000/svg"><image href="images/j10delta.jpg" x="0" y="0" width="1536" height="1024"/><text x="189" y="174" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="18" font-weight="600" fill="#4a3520" textLength="214" lengthAdjust="spacingAndGlyphs">THE WESTERN DELTA</text><text x="189" y="198" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="12" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".92" textLength="182" lengthAdjust="spacingAndGlyphs">Pharaoh&#8217;s own country</text><text x="1357" y="196" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="18" font-weight="600" fill="#4a3520" textLength="202" lengthAdjust="spacingAndGlyphs">THE EASTERN DELTA</text><text x="1357" y="220" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="12" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".92" textLength="196" lengthAdjust="spacingAndGlyphs">where the Israelites lived</text><text x="742" y="870" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="16" font-weight="600" fill="#4a3520" textLength="214" lengthAdjust="spacingAndGlyphs">THE DIVIDING CHANNEL</text><text x="742" y="894" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="12" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".92" textLength="196" lengthAdjust="spacingAndGlyphs">a few hundred paces across</text></svg>`;
SVG.j10instr = `<svg viewBox="0 0 1536 1024" xmlns="http://www.w3.org/2000/svg"><image href="images/j10instr.jpg" x="0" y="0" width="1536" height="1024"/><text x="334" y="91" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="23" font-weight="600" fill="#4a3520" textLength="192" lengthAdjust="spacingAndGlyphs">THE MATERIA</text><text x="334" y="115" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="13" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".92" textLength="232" lengthAdjust="spacingAndGlyphs">powders, salts and pigments</text><text x="1363" y="87" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="18" font-weight="600" fill="#4a3520" textLength="224" lengthAdjust="spacingAndGlyphs">THE SERPENT STAFFS</text><text x="1363" y="111" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="13" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".92" textLength="196" lengthAdjust="spacingAndGlyphs">the court&#8217;s instruments</text><text x="1041" y="804" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="23" font-weight="600" fill="#4a3520" textLength="204" lengthAdjust="spacingAndGlyphs">THE PLAIN ROD</text><text x="1041" y="828" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="13" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".92" textLength="246" lengthAdjust="spacingAndGlyphs">examined, and quite ordinary</text></svg>`;
SVG.j10water = `<svg viewBox="0 0 1536 1024" xmlns="http://www.w3.org/2000/svg"><image href="images/j10water.jpg" x="0" y="0" width="1536" height="1024"/><text x="165" y="70" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="25" font-weight="600" fill="#4a3520" textLength="132" lengthAdjust="spacingAndGlyphs">BEFORE</text><text x="165" y="94" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="13" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".92" textLength="182" lengthAdjust="spacingAndGlyphs">the river as it ran</text><text x="663" y="70" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="21" font-weight="600" fill="#4a3520" textLength="206" lengthAdjust="spacingAndGlyphs">THE FIRST BLOW</text><text x="663" y="94" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="13" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".92" textLength="192" lengthAdjust="spacingAndGlyphs">blood, for seven days</text><text x="1197" y="70" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="21" font-weight="600" fill="#4a3520" textLength="196" lengthAdjust="spacingAndGlyphs">THE COURT&#8217;S JAR</text><text x="1197" y="94" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="13" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".92" textLength="158" lengthAdjust="spacingAndGlyphs">they did the same</text></svg>`;

const JM10_ITEMS = [

/* ---------------- STAGE 0 ---------------- */
{
  id:"j10letter", stage:0, notEvidence:true, kind:"Briefing", title:"Letter from the Case Supervisor",
  sub:"The Chronicle Society · Department of Unsolved Antiquities",
  prev:"Ten disasters in sequence. The question is whether they are one disaster.",
  x:22, y:26, rot:-3, w:216,
  body:`
    <p><b>To the investigating team,</b></p>
    <p>Ten separate calamities strike Egypt inside a year: the river ruined, frogs, lice, flies, cattle dead, boils, hail, locusts, three days of darkness, and finally the deaths of the firstborn.</p>
    <p>Any one of these is a bad year in the delta. All ten together, in sequence, is either <b>a cascade</b> — one natural disaster setting off the next, which is a real and well-understood thing — or it is something else.</p>
    <p>The Society has no interest in arguing you out of the cascade. It is a good idea and it accounts for a great deal. Your job is to find the point where it stops working, and to be precise about which fact does it.</p>
    <h4>Your task</h4>
    <p>Five explanations. Four of them fail on the documents. Pay particular attention to the third one — <i>the Egyptian records say nothing, so it did not happen</i> — because it is an argument students meet everywhere and almost never test.</p>
    <h4>How the file works</h4>
    <ul>
      <li>Everything on the desk now is yours. The regional reports are the heart of it.</li>
      <li>Two parts of the file are <b>locked</b>. The codes are hidden in the documents you already have.</li>
      <li>The second lock is opened with the <b>pattern chart</b> — the 📊 button in the top bar, once the first lock is open.</li>
      <li>When you have everything, go to the <b>Pinboard</b>.</li>
    </ul>
    <p class="margin-note">A cascade goes where physics takes it. Ask whether this one did.</p>
    <div class="sig">A. Thorne</div>
    <div class="small" style="color:#5b4a35">Case Supervisor</div>
    <div class="ref">This case is reconstructed from Exodus 7–12.</div>`
},
{
  id:"j10delta", stage:0, kind:"Plan", title:"The Delta and Its Two Regions",
  sub:"Where the Egyptians lived, and where the Israelites did", thumb:"j10delta",
  prev:"Two regions, a few hundred paces apart, sharing the same water.",
  x:52, y:22, rot:3, w:216,
  body:`
    <div class="plate">${SVG.j10delta}<div class="cap">Click the plan to enlarge it.</div></div>
    <h4>What the plan tells you</h4>
    <ul>
      <li><b>The western delta</b> is Egypt proper — Pharaoh's country, its towns, herds and fields.</li>
      <li><b>The eastern delta</b> is where the Israelites had been settled for generations. Same soil, same climate, same river system.</li>
      <li><b>The dividing channel</b> between them is a few hundred paces across. Not a mountain range, not a desert — a watercourse you can see over.</li>
      <li>Flies, frogs, locusts, hail and disease do not respect a channel that width. Nothing in the geography separates these two regions in any way that matters to weather or vermin.</li>
    </ul>
    <p class="margin-note">Hold onto that. If something struck one side and not the other, the geography is not what did it.</p>
    <div class="ref">Background: Exodus 8:22 · Exodus 9:26.</div>`
},
{
  id:"j10sequence", stage:0, kind:"Record", title:"The Sequence, In Order",
  sub:"The ten, with what was announced beforehand",
  prev:"Ten blows. Nine of them announced in advance, by name.",
  x:78, y:26, rot:-4, w:212,
  body:`
    <table class="ledger">
      <tr><th></th><th>The blow</th><th>Announced first?</th></tr>
      <tr><td>1</td><td>The river turned to blood</td><td>Yes — at the water's edge, in the morning</td></tr>
      <tr><td>2</td><td>Frogs</td><td>Yes</td></tr>
      <tr><td>3</td><td>Lice / gnats</td><td>No warning recorded</td></tr>
      <tr><td>4</td><td>Flies</td><td>Yes — <b>and the eastern delta named as exempt</b></td></tr>
      <tr><td>5</td><td>Death of livestock</td><td>Yes — with a day named</td></tr>
      <tr><td>6</td><td>Boils</td><td>No warning; struck the magicians too</td></tr>
      <tr><td>7</td><td>Hail</td><td>Yes — with a warning to bring stock indoors</td></tr>
      <tr><td>8</td><td>Locusts</td><td>Yes</td></tr>
      <tr><td>9</td><td>Darkness, three days</td><td>No warning recorded</td></tr>
      <tr><td>10</td><td>The firstborn</td><td><b>Yes — one warning, given well beforehand</b></td></tr>
    </table>
    <h4>What matters here</h4>
    <p>Most were <b>announced in advance</b>, by name, and several with a day attached. One of them — the fifth — was announced for "tomorrow", and came on the day named.</p>
    <p class="margin-note">Count the warnings before the last one. That number is in the first lock, and it is smaller than you expect.</p>
    <div class="ref">Background: Exodus 7:14 – 12:30. Nothing gruesome is described in this file; the tenth blow is recorded as a fact and its effects are not detailed.</div>`
},
{
  id:"j10regional", stage:0, kind:"Regional reports", title:"The Regional Reports",
  sub:"Which region each blow actually struck",
  prev:"From the fourth onward, one side of the channel and not the other.",
  x:26, y:56, rot:5, w:214,
  body:`
    <p>This is the document the case rests on. For each blow, the reports record what happened on each side of the dividing channel.</p>
    <table class="ledger">
      <tr><th>Blow</th><th>Western delta</th><th>Eastern delta</th></tr>
      <tr><td>1 · Blood</td><td>Struck</td><td>Struck</td></tr>
      <tr><td>2 · Frogs</td><td>Struck</td><td>Struck</td></tr>
      <tr><td>3 · Lice</td><td>Struck</td><td>Struck</td></tr>
      <tr><td><b>4 · Flies</b></td><td>Struck</td><td class="n"><b>not struck</b></td></tr>
      <tr><td><b>5 · Livestock</b></td><td>Struck</td><td class="n"><b>not struck</b></td></tr>
      <tr><td><b>6 · Boils</b></td><td>Struck</td><td class="n"><b>not struck</b></td></tr>
      <tr><td><b>7 · Hail</b></td><td>Struck</td><td class="n"><b>not struck</b></td></tr>
      <tr><td><b>8 · Locusts</b></td><td>Struck</td><td class="n"><b>not struck</b></td></tr>
      <tr><td><b>9 · Darkness</b></td><td>Struck</td><td class="n"><b>not struck</b> — light in their dwellings</td></tr>
      <tr><td><b>10 · The firstborn</b></td><td>Struck</td><td class="n"><b>not struck</b></td></tr>
    </table>
    <h4>The shape of it</h4>
    <p>The first three fall on everybody. <b>From the fourth onward, the line holds without a single exception</b> — and it holds for phenomena as different from one another as biting flies, cattle disease, skin infection, hailstorms, locust swarms and darkness.</p>
    <p class="margin-note">Take this to the pattern chart when it opens. Plot it and look at the column that is empty all the way down.</p>
    <div class="ref">Background: Exodus 8:22–23 · 9:4–7 · 9:26 · 10:23 · 12:13.</div>`
},
{
  id:"j10court", stage:0, kind:"Court record", title:"The Court Magicians' Record",
  sub:"What Pharaoh's own experts managed, and where they stopped",
  prev:"They matched the first two. At the third they told the king to stop.",
  x:56, y:52, rot:-2, w:208,
  body:`
    <table class="ledger">
      <tr><th>Blow</th><th>The magicians</th></tr>
      <tr><td>1 · Blood</td><td><b>Reproduced it</b> — by their secret arts</td></tr>
      <tr><td>2 · Frogs</td><td><b>Reproduced it</b> — and made the problem worse</td></tr>
      <tr><td>3 · Lice</td><td><b>Could not.</b> "This is the finger of God"</td></tr>
      <tr><td>4 onward</td><td>No further attempt recorded</td></tr>
      <tr><td>6 · Boils</td><td><b>They could not stand before Moses</b> — they were struck themselves</td></tr>
    </table>
    <h4>What the Society draws from this</h4>
    <ul>
      <li>They reproduced <b>two</b>, and gave up at the <b>third</b>. Both numbers are in the first lock.</li>
      <li>Notice what reproducing means: they could turn water red and produce frogs. <b>Neither of them removed anything</b> — they added to the problem twice.</li>
      <li>The men who said "this is the finger of God" were <b>Pharaoh's own professional sceptics</b>, whose job and standing depended on saying the opposite.</li>
      <li>By the sixth they were victims rather than practitioners.</li>
    </ul>
    <p class="margin-note">The strongest hostile witnesses in the file are the ones being paid to disagree.</p>
    <div class="ref">Background: Exodus 7:22 · 8:7 · 8:18–19 · 9:11.</div>`
},
{
  id:"j10instr", stage:0, kind:"Object study", title:"The Magicians' Instruments",
  sub:"What was in the court's kit", thumb:"j10instr",
  prev:"Powders, staffs and a plain rod. Enough for two tricks and no more.",
  x:80, y:56, rot:4, w:212,
  body:`
    <div class="plate">${SVG.j10instr}<div class="cap">Click the plate to enlarge it.</div></div>
    <p>The Society examined the working kit of the court's practitioners, because what a conjuror carries tells you what a conjuror can do.</p>
    <table class="ledger">
      <tr><th>In the kit</th><th>What it will do</th></tr>
      <tr><td>Red mineral powders and salts</td><td>Colour a vessel of water convincingly</td></tr>
      <tr><td>Serpent staffs, weighted and jointed</td><td>A staff-to-snake effect at a distance</td></tr>
      <tr><td>A plain rod</td><td><b>Nothing. It is a stick.</b></td></tr>
      <tr><td>Jars, mortars, pigments, amulets</td><td>Ritual and display</td></tr>
    </table>
    <h4>What is not in the kit</h4>
    <p class="margin-note">Nothing that could redden a river along its whole length. Nothing that could raise or remove a swarm. Nothing that could make hail fall on one bank and not the other. Nothing that could produce three days of darkness, or lift it again.</p>
    <p>Their two successes are exactly the two effects a well-equipped conjuror could stage in a bowl in front of a king. The third was not, and they said so.</p>
    <div class="ref">Fictional object study of the practices behind Exodus 7:11, 7:22 and 8:7.</div>`
},
{
  id:"j10water", stage:0, kind:"Comparison plate", title:"River Water — Three Samples",
  sub:"Before, during, and the court's own jar", thumb:"j10water",
  prev:"The court could colour a jar. Nobody coloured the river.",
  x:40, y:76, rot:-5, w:212,
  body:`
    <div class="plate">${SVG.j10water}<div class="cap">Click the plate to enlarge it.</div></div>
    <table class="ledger">
      <tr><th>Sample</th><th>Description</th></tr>
      <tr><td><b>Before</b></td><td>Ordinary river water, silt-brown, drinkable</td></tr>
      <tr><td><b>The first blow</b></td><td>Red through the whole channel, the fish dead, the water undrinkable, seven days</td></tr>
      <tr><td><b>The court's jar</b></td><td>Red, in a vessel, by the magicians' arts. Undrinkable in the jar. <b>The river was unaffected by it.</b></td></tr>
    </table>
    <h4>Note on the natural explanation</h4>
    <p>A red silt flood or an algal bloom does turn a river red and does kill fish; that is the honest starting point for the cascade explanation, and it belongs in the file. Its difficulty is not the first blow at all — it is what comes afterward, and where.</p>
    <p class="margin-note">One blow can be a flood. Ten in a year is a cascade, and a cascade is a chain: each link has to cause the next. Ask, at every step, what caused what.</p>
    <div class="ref">Background: Exodus 7:20–24.</div>`
},

/* ---------------- STAGE 1 — released by the numbers lock ---------------- */
{
  id:"j10cascade", stage:1, kind:"Analysis", title:"The Cascade, Tested",
  sub:"Field Chest B · the strongest natural explanation",
  prev:"The chain works for three links. Then it has to jump a channel.",
  x:28, y:26, rot:-3, w:212,
  body:`
    <p>Set out fairly, the cascade runs like this — and for a while it runs well.</p>
    <table class="ledger">
      <tr><th>Link</th><th>Proposed cause</th><th>Holds?</th></tr>
      <tr><td>1 → 2</td><td>A red bloom kills the fish; frogs leave the poisoned water</td><td><b>Yes</b></td></tr>
      <tr><td>2 → 3</td><td>Dead frogs; insects breed on the rot</td><td><b>Yes</b></td></tr>
      <tr><td>3 → 4</td><td>More insects; biting flies follow</td><td><b>Yes</b></td></tr>
      <tr><td>4 → 5</td><td>Flies carry disease; cattle die</td><td><b>Yes</b></td></tr>
      <tr><td>5 → 6</td><td>Disease from carcasses; skin infection</td><td><b>Yes</b></td></tr>
      <tr><td>6 → 7</td><td>Hail</td><td><b>No.</b> Weather has no causal link to disease</td></tr>
      <tr><td>7 → 8</td><td>Hail damage; locusts move to surviving crops</td><td>Plausible</td></tr>
      <tr><td>8 → 9</td><td>Darkness</td><td><b>No.</b> A sandstorm is not caused by locusts</td></tr>
    </table>
    <h4>Where it actually breaks</h4>
    <p>Two links in the chain do not connect at all. But the Society regards that as the <i>lesser</i> problem, because a run of bad luck could supply them.</p>
    <p>The real difficulty is this. <b>A cascade is a physical process, and physical processes go where the physics takes them.</b> Flies breeding in rot on the western bank do not stop at a channel a few hundred paces wide. Cattle disease does not check whose herd it is. Hail does not fall on one field and not its neighbour. From the fourth blow onward, every single one does exactly that.</p>
    <p class="margin-note">A cascade cannot skip a region. This one skipped the same region nine times running.</p>
    <div class="ref">Fictional analysis. Background: Exodus 8:22 · 9:4 · 9:26 · 10:23.</div>`
},
{
  id:"j10timing", stage:1, kind:"Timing record", title:"The Timing Record",
  sub:"Field Chest B · testing coincidence over a bad year",
  prev:"Announced by name, and on the fifth, by the day.",
  x:58, y:24, rot:4, w:206,
  body:`
    <p>The coincidence explanation says: a bad year, ten unrelated misfortunes, and a story written afterwards to join them up. The timing record is what it has to survive.</p>
    <table class="ledger">
      <tr><th>Feature</th><th>Record</th></tr>
      <tr><td>Blows announced <i>before</i> they happened</td><td class="n"><b>7 of 10</b></td></tr>
      <tr><td>Announced with a named day</td><td>The fifth — "tomorrow the LORD will do this thing"</td></tr>
      <tr><td>Blows that began on request</td><td>Several, at a stated moment</td></tr>
      <tr><td>Blows that <b>stopped</b> on request</td><td>Frogs, flies, hail, locusts — each ended when asked</td></tr>
      <tr><td>Frogs: when Pharaoh was invited to name the hour</td><td>He said "tomorrow", and it was tomorrow</td></tr>
      <tr><td>Warnings before the tenth</td><td class="n"><b>1</b></td></tr>
    </table>
    <h4>Why stopping matters more than starting</h4>
    <p>Bad luck can be announced by a confident guesser — plagues follow floods, and a shrewd man might predict several. <b>Bad luck cannot be switched off on request</b>, on a day the other side chooses, four separate times.</p>
    <p class="margin-note">The frog episode is the sharpest test in the file: Pharaoh was invited to pick the hour himself, and it happened at the hour he picked.</p>
    <div class="ref">Background: Exodus 8:9–13 · 8:29–31 · 9:5 · 9:29–33 · 10:18–19 · 11:4–5.</div>`
},
{
  id:"j10inscript", stage:1, kind:"Society note", title:"On Egyptian Royal Inscriptions",
  sub:"Field Chest B · the argument from silence",
  prev:"No Egyptian king ever records a defeat. Not one, anywhere.",
  x:80, y:44, rot:-6, w:208,
  body:`
    <p>The third explanation says: the Egyptian records contain nothing about any of this, so it did not happen. It is worth taking apart carefully, because students meet this argument constantly.</p>
    <table class="ledger">
      <tr><th>Question</th><th>Answer</th></tr>
      <tr><td>What are royal inscriptions <i>for</i>?</td><td>Proclaiming the king's success and the order of the world under him</td></tr>
      <tr><td>How many Egyptian kings record losing a battle?</td><td class="n"><b>none</b></td></tr>
      <tr><td>How many record a plague, famine or defeat as their own failure?</td><td class="n"><b>none</b></td></tr>
      <tr><td>Known cases of a king's name being chiselled out by a successor</td><td>Many</td></tr>
      <tr><td>Proportion of any ancient period's records that survive at all</td><td>Very small</td></tr>
    </table>
    <h4>What silence can and cannot show</h4>
    <p>Absence of evidence is evidence of absence <b>only where you would expect the evidence to exist</b>. That is the whole test, and it is a good one — apply it here and it fails, because a monument whose purpose is to declare the king victorious is precisely the last place a national humiliation would ever be written.</p>
    <p class="margin-note">This argument is not wrong because it is sceptical. It is wrong because it is not sceptical enough — it takes the silence of a propaganda medium at face value.</p>
    <div class="ref">Fictional Society note on a genuine feature of Egyptian royal inscription.</div>`
},
{
  id:"j10israel", stage:1, kind:"Regional reports", title:"Did Israel Suffer Too?",
  sub:"Field Chest B · testing the edited-record explanation",
  prev:"They were not spared everything. The record says which ones.",
  x:46, y:62, rot:3, w:206,
  body:`
    <p>The fifth explanation says the Israelites suffered alongside the Egyptians and later tidied it out of the record to make their God look better. The reports themselves are the answer.</p>
    <table class="ledger">
      <tr><th>Point</th><th>Record</th></tr>
      <tr><td>Blows the Israelites <b>did</b> suffer</td><td class="n"><b>The first three</b> — blood, frogs, lice</td></tr>
      <tr><td>Is this stated plainly?</td><td><b>Yes.</b> The exemption is introduced only at the fourth</td></tr>
      <tr><td>Other unflattering material kept in the same record</td><td>Their complaining, their idolatry, their leaders' failures</td></tr>
      <tr><td>Blows announced as <i>selective in advance</i></td><td>The fourth, fifth, seventh, ninth and tenth</td></tr>
      <tr><td>Did the exemption require action from Israel?</td><td>Only at the tenth — and that one they had to do something for</td></tr>
    </table>
    <h4>Why an edited record would look different</h4>
    <p>A tidied account exempts its own side from <b>everything</b>. This one has them sharing the first three blows and says so, and the exemption is announced <i>beforehand</i> as a point being made rather than claimed afterwards as a piece of good fortune.</p>
    <p class="margin-note">A record that keeps the parts that embarrass its authors is a record worth reading carefully.</p>
    <div class="ref">Background: Exodus 8:22 (the first exemption stated) · Exodus 12:7, 12:13.</div>`
},

/* ---------------- STAGE 2 — released by the keyword lock ---------------- */
{
  id:"j10point", stage:2, kind:"Society analysis", title:"What the Blows Were Aimed At",
  sub:"Sealed Pouch C · why these ten",
  prev:"Not random damage. A list, and every item on it was worshipped.",
  x:26, y:28, rot:-3, w:210,
  body:`
    <p>The Society's view is that the sequence is not a list of disasters but a list of <b>claims</b>, and each one is aimed.</p>
    <table class="ledger">
      <tr><th>The blow</th><th>What it struck at</th></tr>
      <tr><td>The Nile turned</td><td>The river itself — the source of Egypt's life and a god in its own right</td></tr>
      <tr><td>Frogs</td><td>A creature associated with fertility and divinity, turned into a plague of itself</td></tr>
      <tr><td>Livestock</td><td>Sacred cattle, and the wealth of the country</td></tr>
      <tr><td>Boils</td><td>The priesthood's own bodily purity — and the magicians could not stand</td></tr>
      <tr><td>Hail and locusts</td><td>The harvest, and the gods of field and storm</td></tr>
      <tr><td>Darkness</td><td><b>The sun</b> — the chief god of Egypt, and the king's own patron</td></tr>
      <tr><td>The tenth</td><td>Pharaoh's own house, and the claim that he was a god himself</td></tr>
    </table>
    <h4>Why the order matters</h4>
    <p>It escalates, it announces itself, and it ends at the top. <b>A cascade has no target.</b> This one works steadily up the list of everything Egypt trusted, finishing with the two things it trusted most: the sun, and the king.</p>
    <div class="ref">Background: Exodus 12:12 — "against all the gods of Egypt I will execute judgement".</div>`
},
{
  id:"j10out", stage:2, kind:"Follow-up file", title:"What Happened Afterwards",
  sub:"Sealed Pouch C",
  prev:"They left, and the Egyptians paid them to go.",
  x:56, y:30, rot:4, w:208,
  body:`
    <table class="ledger">
      <tr><th>After the tenth</th><th>Record</th></tr>
      <tr><td>Pharaoh's decision</td><td>Sent for Moses at night and told them to go</td></tr>
      <tr><td>What the Egyptians did</td><td><b>Urged them to leave, and gave them silver, gold and clothing</b></td></tr>
      <tr><td>How the record describes Egyptian opinion of Moses</td><td>He was "very great in the land, in the sight of Pharaoh's servants and of the people"</td></tr>
      <tr><td>Duration of the whole sequence</td><td>Under a year</td></tr>
      <tr><td>Pharaoh's final act</td><td>Changed his mind and pursued them — which is the subject of <b>Case JM-14</b></td></tr>
    </table>
    <h4>The detail the Society finds most telling</h4>
    <p>Not the leaving — the <b>paying</b>. A population does not load its neighbours with silver on the way out unless it has concluded, unanimously and at some cost to its own pride, that the sooner they are gone the better.</p>
    <div class="ref">Background: Exodus 11:3 · 12:31–36.</div>`
},
{
  id:"j10why", stage:2, kind:"Society analysis", title:"Cascade or Pattern",
  sub:"Sealed Pouch C · what the file will support",
  prev:"The difference between a chain of events and a sequence of decisions.",
  x:78, y:60, rot:-5, w:212,
  body:`
    <p>Stated as plainly as the Society can manage.</p>
    <h4>A cascade has three properties</h4>
    <ol>
      <li>Each event <b>causes</b> the next.</li>
      <li>It goes wherever the physics takes it, and cannot be steered.</li>
      <li>It cannot be started or stopped to order.</li>
    </ol>
    <h4>This sequence has none of them after the third blow</h4>
    <p>Two links in the chain have no causal connection at all. From the fourth onward, nine consecutive events of wholly different kinds — insects, disease, weather, swarms, darkness — all stop at the same watercourse. And four of them ended on request, one at an hour the other side chose.</p>
    <h4>What the file does not claim</h4>
    <p>It does not prove a mechanism, and it never could. A student who says <i>"an extraordinary run of natural events, and the selectivity was exaggerated later"</i> has made a real claim — and the file asks them to explain how the exaggeration was announced <b>in advance</b>, and why the same record admits Israel suffered the first three.</p>
    <p class="margin-note">The honest end of the case is not a mechanism. It is a shape: announced, aimed, selective and switchable — which is what decisions look like, and not what weather looks like.</p>
    <div class="ref">Background: Exodus 7–12 · Exodus 9:16 · Exodus 12:12.</div>`
}
];

const JM10_THEORIES = [
  {
    id:"cascade",
    title:"1. A natural chain reaction from a red silt flood",
    claim:"A bloom reddens the Nile, fish die, frogs flee, insects breed on the rot, disease follows. One event sets off the next.",
    answer:"j10cascade",
    verdict:"The cascade analysis kills it. Two links in the chain have no causal connection at all — hail is not caused by boils, and darkness is not caused by locusts. But the fatal objection is simpler: a cascade is a physical process and goes where the physics takes it. Flies, cattle disease, hail, locusts and darkness all stopped at the same channel a few hundred paces wide, nine times in a row. <b>A cascade cannot skip a region.</b>"
  },
  {
    id:"coincidence",
    title:"2. Coincidence over a very bad year",
    claim:"Ten unrelated misfortunes in a hard year, joined into a story afterwards.",
    answer:"j10timing",
    verdict:"The timing record kills it. Seven of the ten were announced before they happened, the fifth with a named day. More decisively, four of them <b>stopped</b> on request — and when Pharaoh was invited to name the hour the frogs should end, he chose tomorrow, and it was tomorrow. A confident guesser might predict a plague after a flood. Nobody switches one off at an hour their opponent picks."
  },
  {
    id:"silence",
    title:"3. Egyptian records show nothing, so it did not happen",
    claim:"An event on this scale would be recorded. Egypt's monuments say nothing about it at all.",
    answer:"j10inscript",
    verdict:"The note on royal inscriptions kills it. Absence of evidence counts only where you would expect the evidence to exist — and a royal monument exists to proclaim the king victorious and the world in order under him. No Egyptian king records losing a battle either. Expecting a national humiliation to appear on a propaganda medium is not scepticism; it is taking that medium at its word."
  },
  {
    id:"magicians",
    title:"4. The magicians were doing all of it",
    claim:"Court practitioners staged the whole sequence for their own purposes and the story grew around it.",
    answer:"j10court",
    verdict:"The court record kills it. They reproduced two effects — reddened water and frogs, both stageable in a vessel — and could not manage the third, telling Pharaoh to his face that this was the finger of God. Neither of their successes <i>removed</i> anything; they added to the problem twice. And by the sixth blow they were among the victims, unable to stand before Moses because of the boils."
  },
  {
    id:"edited",
    title:"5. Israel suffered too, and later edited it out",
    claim:"The exemption is a later flourish. Everyone in the delta suffered alike.",
    answer:"j10israel",
    verdict:"The regional reports kill it. The record states plainly that the Israelites shared the <b>first three</b> blows; the exemption only begins at the fourth, and it is announced beforehand as a point being made rather than claimed afterwards as luck. The same record keeps a great deal else that embarrasses its authors. An edited account exempts its own side from everything, not from six-tenths of it."
  }
];

const JM10_LOCKS = [
  {
    id:"l1", type:"number", code:"2301", len:4,
    wrong:"Not that. Each digit comes from a different document — one of the four is wrong.",
    name:"Field Chest B — the delta papers",
    blurb:"A four-digit lock. Each digit answers one question, and each question is answered by a different document already on your desk. One of the answers is zero, and it is the fact the whole case turns on.",
    questions:[
      "How many of the blows did the court magicians reproduce?",
      "At which blow did they give up?",
      "From the fourth blow onward, how many struck the eastern delta?",
      "How many warnings came before the tenth?"
    ],
    hints:[
      "The questions are in order: question one gives the first digit. Every answer is a single digit.",
      "Questions 1 and 2 are the court record. Question 3 is the regional reports. Question 4 is the sequence.",
      "They reproduced two. They gave up at the third. From the fourth on, the eastern delta was struck not once — zero. And there was one warning before the last blow."
    ],
    reward:"Field Chest B is open: the cascade analysis, the timing record, the note on Egyptian inscriptions and the reports on what Israel suffered are now on the desk. The 📊 Pattern chart in the top bar is live."
  },
  {
    id:"l2", type:"word", code:"GOSHEN", len:6,
    wrong:"Not that. Plot the pattern chart — the 📊 button in the top bar. One column is empty from the fourth blow down, and the region it belongs to has a name.",
    name:"Sealed Pouch C — the region that was not struck",
    blurb:"A six-letter keyword. Take the regional reports to the pattern chart and mark which region each blow actually struck. The shape that appears is the case — and the empty part of it has a name, which the reports give you.",
    questions:[
      "Open the 📊 Pattern chart from the top bar.",
      "Ten blows down the side, two regions across the top.",
      "Tick a box where that blow struck that region.",
      "One column stops after the third row. The name of that region is the keyword."
    ],
    hints:[
      "The first three blows struck both regions. Mark those six boxes first.",
      "From the fourth onward, every single blow struck the western delta and none struck the eastern one.",
      "The eastern delta — the land where the Israelites had been settled for generations — is called Goshen. Six letters."
    ],
    reward:"Sealed Pouch C is open: the Society's note on what the blows were aimed at, the record of what happened afterwards, and the analysis of cascade against pattern are now on the desk."
  }
];

const JM10_MATRIX = {
  button:"📊 Pattern chart",
  title:"The Pattern Chart",
  blurb:"Ten blows down the side, two regions across the top. Working from <b>The Regional Reports</b>, tick a box wherever that blow actually struck that region. When the chart is right, the shape of it is the argument.",
  corner:"The blow",
  verify:"Check the chart",
  mark:"✔",
  cols:[
    {id:"west", label:"The western delta", note:"Egypt proper"},
    {id:"east", label:"The eastern delta", note:"where Israel lived"}
  ],
  rows:[
    {id:"b1",  label:"1 · The river turned",   note:""},
    {id:"b2",  label:"2 · Frogs",              note:""},
    {id:"b3",  label:"3 · Lice",               note:"the magicians give up"},
    {id:"b4",  label:"4 · Flies",              note:"the first exemption"},
    {id:"b5",  label:"5 · Livestock",          note:""},
    {id:"b6",  label:"6 · Boils",              note:""},
    {id:"b7",  label:"7 · Hail",               note:""},
    {id:"b8",  label:"8 · Locusts",            note:""},
    {id:"b9",  label:"9 · Darkness",           note:""},
    {id:"b10", label:"10 · The firstborn",     note:""}
  ],
  truth:[
    "b1|west","b1|east","b2|west","b2|east","b3|west","b3|east",
    "b4|west","b5|west","b6|west","b7|west","b8|west","b9|west","b10|west"
  ],
  foot:{
    label:"Struck, from the fourth blow on",
    note:"seven consecutive blows",
    cells:{west:"every one", east:"none"}
  },
  note:"The first three fall on everybody, and the record says so. Watch what happens at the fourth — and remember that the two regions are a few hundred paces apart, sharing the same water, weather and vermin.",
  reveal:{
    lead:"There it is. Two full columns for three rows, and then one of them simply stops. Seven consecutive blows of completely different kinds — biting flies, cattle disease, skin infection, hail, locusts, darkness, and the last one — every one of them falling on one side of a channel a few hundred paces wide and none on the other. Insects do not do that. Weather does not do that. The eastern delta has a name, and the reports give it to you.",
    answer:"GOSHEN",
    caption:"That is the keyword for Sealed Pouch C. It is also the whole difference between a cascade and a pattern: a cascade cannot skip a region, and this one skipped the same one nine times running."
  }
};

const JM10_VERDICTS = [
  {id:"cascade",     text:"A natural chain reaction beginning with a red silt flood in the Nile."},
  {id:"coincidence", text:"Ten unrelated misfortunes in a bad year, joined into a story afterwards."},
  {id:"silence",     text:"Egyptian records say nothing about it, so it did not happen."},
  {id:"magicians",   text:"Pharaoh's court magicians staged the whole sequence themselves."},
  {id:"edited",      text:"Israel suffered alongside Egypt and edited that out of the record later."},
  {id:"pattern",     text:"From the fourth blow onward the sequence is announced in advance, aimed, stoppable on request, and falls on one region and not the neighbouring one — which is a pattern, not a cascade."}
];

const CASE_JM10 = {
  id:"jm10", code:"CASE JM-10", title:"The Ten Blows",
  period:"Egypt · c. 1450 BC", colour:"#6b2f2f", poster:"poster_jm10",
  teaser:"Ten disasters strike Egypt inside a year. Pharaoh's own magicians reproduce the first two, fail at the third, and by the fourth something is happening that no chain of natural causes can account for.",
  introSub:"Ten blows in a year. Is it one disaster, or ten decisions?",
  items:JM10_ITEMS, theories:JM10_THEORIES, locks:JM10_LOCKS, verdicts:JM10_VERDICTS,
  matrix:JM10_MATRIX,
  correct:"pattern",
  boardTitle:"Cascade or Pattern",
  boardIntro:"Five explanations have been offered. For each one, pin the <b>single</b> document that makes it impossible. When all five are closed, the accusation form opens.",
  accusationIntro:"The chain has two broken links, the timing was announced and reversible, the argument from Egyptian silence does not survive examination, the magicians gave up at the third and the record admits Israel suffered the first three. State what the file will actually support.",
  debrief:{
    lead:"For three blows the cascade explanation works well, and the record agrees with it — the Israelites suffered those three too. From the fourth it stops working, and not because the events get stranger but because they get <i>selective</i>. Seven consecutive blows of entirely different kinds all stop at the same watercourse, several are announced by name beforehand, and four of them end on request — one at an hour Pharaoh himself chose. A cascade goes where the physics takes it and cannot be switched off. This did both.",
    questions:[
      "The cascade explanation accounts for the first three blows rather well. Is an explanation that works for part of the evidence better than no explanation, or more dangerous?",
      "Pharaoh's own magicians were the people with the strongest reason to deny all this, and they are the ones who said 'this is the finger of God'. How much weight should a hostile witness carry?",
      "'The Egyptian records say nothing, so it did not happen.' Where else do you meet that argument, and what would have to be true for it to work?",
      "The record keeps the detail that Israel suffered the first three blows. Why would an account trying to flatter its own side include that?"
    ],
    refs:"Exodus 7–12 · Exodus 8:18–19 · Exodus 9:11 · Exodus 9:16 · Exodus 12:12 · Exodus 12:31–36"
  },
  teacher:{
    answers:"Lock 1 code <b>2301</b> (2 blows reproduced by the magicians · gave up at the 3rd · 0 struck the eastern delta from the fourth on · 1 warning before the tenth). Lock 2 keyword <b>GOSHEN</b>, from the 📊 Pattern chart: both regions ticked for blows 1–3, western only for blows 4–10, so the eastern column stops dead after three rows.",
    pairs:"Natural cascade → The Cascade, Tested; coincidence → The Timing Record; Egyptian silence → On Egyptian Royal Inscriptions; the magicians did it → The Court Magicians' Record; Israel edited the record → Did Israel Suffer Too?",
    conclusion:"From the fourth blow the sequence is announced, aimed, selective by region and reversible on request — the properties of decisions, not of a chain of natural causes.",
    prompts:"\"What causes what? Draw the chain and find the link that isn't there.\" · \"How wide is the channel between the two regions? Would flies notice it?\" · \"Who were the magicians working for, and what did they say?\" · \"Look down the second column of your chart. Where does it stop?\"",
    extra:"Two notes. First, the tenth blow: the file records it as a fact and deliberately gives no detail of it, and the artwork shows none — but it is the death of children, and a class will feel that. Say so plainly at the start rather than letting it arrive unannounced, and be ready for the fairness question, which is a real one and deserves a real conversation rather than a tidy answer. Second, explanation 3 is the one worth most teaching time: the argument from silence appears constantly in history, in science reporting and online, and the test — <i>would you expect the evidence to exist?</i> — transfers everywhere. This case also leads directly into <b>JM-14 · The Crossing</b>, which begins with Pharaoh changing his mind."
  }
};

registerCase(CASE_JM10);
