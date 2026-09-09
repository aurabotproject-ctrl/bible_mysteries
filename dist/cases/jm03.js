"use strict";
/* ============================================================
   CASE JM-03 — THE BUSH THAT WOULD NOT BURN
   Horeb.  Source: Exodus 3:1 - 4:17.
   ============================================================ */

SVG.j03branch = `<svg viewBox="0 0 1536 1024" xmlns="http://www.w3.org/2000/svg"><image href="images/j03branch.jpg" x="0" y="0" width="1536" height="1024"/><text x="250" y="199" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="20" font-weight="600" fill="#4a3520" textLength="246" lengthAdjust="spacingAndGlyphs">THE BUSH AT THE SITE</text><text x="250" y="223" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="13" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".92" textLength="236" lengthAdjust="spacingAndGlyphs">green, whole, still growing</text><text x="1270" y="174" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="23" font-weight="600" fill="#4a3520" textLength="230" lengthAdjust="spacingAndGlyphs">BURNT ONE HOUR</text><text x="1270" y="198" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="13" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".92" textLength="250" lengthAdjust="spacingAndGlyphs">same species, control sample</text><text x="1336" y="610" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="23" font-weight="600" fill="#4a3520" textLength="190" lengthAdjust="spacingAndGlyphs">BURNT TO ASH</text><text x="1336" y="634" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="13" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".92" textLength="220" lengthAdjust="spacingAndGlyphs">what fire leaves behind</text></svg>`;
SVG.j03mount = `<svg viewBox="0 0 1536 1024" xmlns="http://www.w3.org/2000/svg"><image href="images/j03mount.jpg" x="0" y="0" width="1536" height="1024"/><text x="1282" y="85" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="26" font-weight="600" fill="#4a3520" textLength="108" lengthAdjust="spacingAndGlyphs">HOREB</text><text x="1282" y="109" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="13" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".92" textLength="190" lengthAdjust="spacingAndGlyphs">the mountain of God</text><text x="372" y="490" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="19" font-weight="600" fill="#4a3520" textLength="232" lengthAdjust="spacingAndGlyphs">THE GRAZING GROUND</text><text x="372" y="514" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="13" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".92" textLength="158" lengthAdjust="spacingAndGlyphs">the flock was here</text><text x="1247" y="667" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="25" font-weight="600" fill="#4a3520" textLength="128" lengthAdjust="spacingAndGlyphs">THE SITE</text><text x="1247" y="691" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="13" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".92" textLength="200" lengthAdjust="spacingAndGlyphs">no ash, no scorching</text></svg>`;
SVG.j03fire = `<svg viewBox="0 0 1536 1024" xmlns="http://www.w3.org/2000/svg"><image href="images/j03fire.jpg" x="0" y="0" width="1536" height="1024"/><text x="301" y="817" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="25" font-weight="600" fill="#4a3520" textLength="138" lengthAdjust="spacingAndGlyphs">UNBURNT</text><text x="301" y="841" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="13" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".92" textLength="190" lengthAdjust="spacingAndGlyphs">the bush at the site</text><text x="773" y="817" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="23" font-weight="600" fill="#4a3520" textLength="232" lengthAdjust="spacingAndGlyphs">BURNT ONE HOUR</text><text x="773" y="841" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="13" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".92" textLength="218" lengthAdjust="spacingAndGlyphs">bark gone, shape kept</text><text x="1250" y="817" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="23" font-weight="600" fill="#4a3520" textLength="228" lengthAdjust="spacingAndGlyphs">BURNT THROUGH</text><text x="1250" y="841" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="13" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".92" textLength="208" lengthAdjust="spacingAndGlyphs">shape gone, ash left</text></svg>`;

const JM03_ITEMS = [

/* ---------------- STAGE 0 ---------------- */
{
  id:"j03letter", stage:0, notEvidence:true, kind:"Briefing", title:"Letter from the Case Supervisor",
  sub:"The Bible Investigation Bureau · Department of Unsolved Antiquities",
  prev:"A bush on fire that is still standing, still green, and still growing.",
  x:22, y:26, rot:-3, w:216,
  body:`
    <p><b>To the investigating team,</b></p>
    <p>An exiled Egyptian prince, now a shepherd on the far side of the desert, takes a flock up to the mountain and sees a bush burning. He turns aside to look at it. He comes back down the mountain eighty years old, with a commission he spends the rest of the interview trying to get out of.</p>
    <p>The commission is not our business. <b>The bush is.</b></p>
    <p>Because here is the fact the file turns on: he did not say <i>a bush was on fire</i>. Any shepherd sees that. He said the bush was burning <b>and was not consumed</b> — and he says he turned aside precisely to find out why not. The site was surveyed. The site report is on your desk.</p>
    <h4>Your task</h4>
    <p>Five explanations have been offered. Four of them are ordinary and one of them is not. Your job is not to decide which you prefer — it is to close the four that the documents will not carry, and then say plainly what is left.</p>
    <h4>How the file works</h4>
    <ul>
      <li>Everything on the desk now is yours. Read all of it before deciding anything.</li>
      <li>Two parts of the file are <b>locked</b>. The codes are hidden in the documents you already have.</li>
      <li>The second lock is opened with the <b>hypothesis table</b> — the 📊 button in the top bar, once the first lock is open.</li>
      <li>When you have everything, go to the <b>Pinboard</b>.</li>
    </ul>
    <p class="margin-note">Every explanation predicts something. Ask what each one predicts, then go and look.</p>
    <div class="sig">A. Thorne</div>
    <div class="small" style="color:#5b4a35">Case Supervisor</div>
    <div class="ref">This case is reconstructed from Exodus 3:1 – 4:17.</div>`
},
{
  id:"j03site", stage:0, kind:"Field survey", title:"The Site Report",
  sub:"Surveyed at the place he describes",
  prev:"No ash. No charring. No scorched ground. Nothing burned here at all.",
  x:52, y:22, rot:3, w:214,
  body:`
    <p>The site is a shelf of bare stony ground on the lower slopes, with a single thorn bush growing out of a crack. It was surveyed square metre by square metre.</p>
    <table class="ledger">
      <tr><th>Looked for</th><th>Found</th></tr>
      <tr><td>Ash, of any quantity</td><td class="n"><b>none</b></td></tr>
      <tr><td>Scorched or discoloured ground</td><td class="n"><b>none</b></td></tr>
      <tr><td>Charred wood</td><td class="n"><b>none</b></td></tr>
      <tr><td>Soot on the surrounding rocks</td><td class="n"><b>none</b></td></tr>
      <tr><td>A spent fuel source — vent, seep, hearth or spill</td><td class="n"><b>none</b></td></tr>
      <tr><td>Damage to the bush itself</td><td class="n"><b>none</b></td></tr>
      <tr><td>Proportion of the bush consumed</td><td class="n"><b>0</b></td></tr>
    </table>
    <h4>The surveyor's remark</h4>
    <p>"I want to be exact about what this means, because it is easy to read past.</p>
    <p><b>I did not find a small fire. I found no fire.</b> Not a faint one, not an old one, not one the wind had scattered. Fire is the easiest thing in the world to detect after the fact — it leaves ash, and ash sits in the cracks of rock for years. There is no ash on this shelf. There is a green bush growing out of it."</p>
    <div class="ref">Background: Exodus 3:2–3.</div>`
},
{
  id:"j03account", stage:0, kind:"Statement", title:"His Own Account",
  sub:"Taken from the witness",
  prev:"“I will turn aside now and see this great sight — why the bush is not burnt.”",
  x:78, y:26, rot:-4, w:208,
  body:`
    <div class="doc-body">
      <p>"I had the flock on the far side of the wilderness and I brought them to the mountain, as I have done for years. There was a bush alight on the shelf above me.</p>
      <p>I did not turn aside because a bush was burning. Bushes burn. <b>I turned aside because it kept burning and the bush was still there.</b> I stood and watched it long enough to be sure, and then I said to myself: I will go over and see this great sight, and find out why the bush is not burnt up.</p>
      <p>When I went towards it my name was called out of the middle of it. <b>Twice — my name, and then my name again.</b> I answered, and I was told not to come closer, and to take my sandals off, because the ground I was standing on was holy.</p>
      <p>I hid my face. I was afraid to look."</p>
      <div class="sig">Moses son of Amram</div>
      <h4>What the Bureau notes</h4>
      <ul>
        <li>The witness states his own reasoning, and it is an investigator's reasoning: he identified an anomaly, tested it by watching, and then went to find out why.</li>
        <li>He approached <b>deliberately</b> and from a distance, over a period of time. This is not a glimpse.</li>
        <li>He records being frightened and hiding his face — which is not how people describe things they have made up to sound impressive.</li>
      </ul>
    </div>
    <div class="ref">Background: Exodus 3:1–6.</div>`
},
{
  id:"j03refusals", stage:0, kind:"Transcript", title:"The Five Refusals",
  sub:"Everything he said to get out of it",
  prev:"He argued his way out of it five separate times, and lost every time.",
  x:26, y:56, rot:5, w:210,
  body:`
    <p>Having been given a commission, the witness spent the rest of the interview trying to decline it. The Bureau has set the attempts out in order, because they matter to one of the explanations.</p>
    <table class="ledger">
      <tr><th></th><th>What he said</th><th>What it means</th></tr>
      <tr><td>1</td><td>"Who am I, that I should go to Pharaoh?"</td><td>I am the wrong man</td></tr>
      <tr><td>2</td><td>"What is your name? What shall I tell them?"</td><td>I cannot answer the first question they will ask</td></tr>
      <tr><td>3</td><td>"They will not believe me or listen to me."</td><td>It will not work</td></tr>
      <tr><td>4</td><td>"I am not eloquent — I am slow of speech."</td><td>I cannot do the job</td></tr>
      <tr><td>5</td><td>"Please send somebody else."</td><td>I do not want to</td></tr>
    </table>
    <h4>Why this is evidence</h4>
    <p>One explanation on your board says he invented the whole thing to justify leaving the wilderness and going back to Egypt with a story.</p>
    <p>Read the list again with that in mind. <b>A man who invents a commission does not then spend five rounds arguing his way out of it</b> — and the record keeps every one of his objections, including the last one, which is not an argument at all but a plain refusal. Inventions flatter the inventor. This one does the opposite from beginning to end.</p>
    <div class="ref">Background: Exodus 3:11 · 3:13 · 4:1 · 4:10 · 4:13.</div>`
},
{
  id:"j03signs", stage:0, kind:"Record", title:"The Three Signs",
  sub:"What he was given to take with him",
  prev:"Three, and he was still not satisfied.",
  x:56, y:52, rot:-2, w:206,
  body:`
    <p>Against the objection that nobody would believe him, three signs were given, in order.</p>
    <table class="ledger">
      <tr><th></th><th>Sign</th><th>Reversible?</th></tr>
      <tr><td>1</td><td>His staff thrown down became a serpent, and taken up became a staff again</td><td>yes</td></tr>
      <tr><td>2</td><td>His hand put inside his cloak came out diseased, and again came out clean</td><td>yes</td></tr>
      <tr><td>3</td><td>Water from the Nile poured on dry ground would become blood</td><td>no — held in reserve</td></tr>
    </table>
    <h4>Note</h4>
    <p><b>Three signs.</b> Two he could perform himself and undo; the third was for use only if the first two failed. And after all three he still made two further objections.</p>
    <p class="margin-note">Count them for the lock. Three.</p>
    <div class="ref">Background: Exodus 4:1–9.</div>`
},
{
  id:"j03timing", stage:0, kind:"Field analysis", title:"The Timing and the Bearing",
  sub:"Testing the trick-of-the-light explanation",
  prev:"Wrong hour, wrong direction, wrong duration.",
  x:80, y:56, rot:4, w:206,
  body:`
    <p>The simplest explanation of a bush that looks like it is on fire is low sun behind it, seen at the right angle at the right moment. The Bureau tested it.</p>
    <table class="ledger">
      <tr><th>What the explanation needs</th><th>What the file records</th></tr>
      <tr><td>Sun low on the horizon</td><td>He was grazing the flock — <b>the working middle of the day</b></td></tr>
      <tr><td>The sun behind the bush from the viewer</td><td>The shelf lies <b>west-facing above him</b>; he approached with the sun behind <i>him</i></td></tr>
      <tr><td>A fixed viewing angle</td><td><b>He walked towards it</b> — the effect held as he moved, which no angle trick does</td></tr>
      <tr><td>A brief effect</td><td>It held long enough to watch, decide, cross the ground and hold a conversation</td></tr>
      <tr><td>Light only, no heat, no sound</td><td>A voice, twice, calling his name</td></tr>
    </table>
    <h4>Why this closes it</h4>
    <p>An optical effect is a relationship between a viewer, an object and a light source. <b>Move the viewer and the effect changes or ends.</b> This one survived being walked up to, which is the single easiest test there is, and he performed it without being asked.</p>
    <div class="ref">Background: Exodus 3:1–4.</div>`
},
{
  id:"j03mount", stage:0, kind:"Plan", title:"The Mountain and the Grazing Grounds",
  sub:"Horeb, and the ground he brought the flock over", thumb:"j03mount",
  prev:"He knew this ground. He had been grazing it for forty years.",
  x:14, y:44, rot:2, w:218,
  body:`
    <div class="plate">${SVG.j03mount}<div class="cap">Click the plan to enlarge it.</div></div>
    <h4>What the plan tells you</h4>
    <ul>
      <li><b>Horeb</b> stands at the back of the wilderness — the far side, away from the settlements. Nobody is here by accident.</li>
      <li><b>The grazing ground</b> is the green valley floor where the flock was. It is his father-in-law's flock and he has worked it for forty years.</li>
      <li><b>The site</b> is a shelf on the lower slope, in plain view of the grazing ground and reachable on foot in a few minutes.</li>
      <li>There is no road, no settlement and no traffic. There was nobody else there.</li>
    </ul>
    <p class="margin-note">Two things follow. He knew this hillside as well as anyone alive — so an ordinary fire would not have surprised him. And there were no witnesses, which is why the physical evidence at the site carries the whole weight of the case.</p>
    <div class="ref">Background: Exodus 3:1 — "he led the flock to the back of the wilderness, and came to the mountain of God".</div>`
},
{
  id:"j03branch", stage:0, kind:"Object study", title:"The Bush and the Control Samples",
  sub:"The specimen beside what fire does to it", thumb:"j03branch",
  prev:"Same species, same size. One of them has been in a fire.",
  x:40, y:76, rot:-5, w:214,
  body:`
    <div class="plate">${SVG.j03branch}<div class="cap">Click to enlarge. The site specimen with two control samples.</div></div>
    <p>A branch was taken from the bush at the site. Two control branches of the same species and size were cut nearby: one was held in a fire for an hour, the other burned to completion.</p>
    <table class="ledger">
      <tr><th>Specimen</th><th>Condition</th></tr>
      <tr><td><b>From the site</b></td><td>Green, in leaf, sap running, thorns intact. <b>No heat damage of any kind.</b></td></tr>
      <tr><td>Control — one hour of fire</td><td>Bark gone, wood carbonised, form still recognisable</td></tr>
      <tr><td>Control — burned through</td><td>Form gone. Charcoal and ash.</td></tr>
    </table>
    <h4>The point of the plate</h4>
    <p>Fire is not fussy. It does the same thing to the same wood every time, and it is <b>cumulative</b> — the longer it burns, the further along that row you go. There is no version of a fire that stops at "no change at all" while continuing to burn.</p>
    <p class="margin-note">The site specimen is not at the near end of the row. It is not on the row.</p>
    <div class="ref">Fictional analysis of the physical claim in Exodus 3:2.</div>`
},

/* ---------------- STAGE 1 — released by the numbers lock ---------------- */
{
  id:"j03fire", stage:1, kind:"Comparison plate", title:"What Fire Leaves Behind",
  sub:"Field Chest B · the five traces, and what each explanation predicts", thumb:"j03fire",
  prev:"Whatever the fuel, fire leaves the same five traces. This is the list.",
  x:28, y:26, rot:-3, w:218,
  body:`
    <div class="plate">${SVG.j03fire}<div class="cap">Click to enlarge. The three specimens with their measurements.</div></div>
    <p>Before you can test an explanation you have to know what it predicts. Every way a bush can actually be alight leaves some combination of five traces.</p>
    <table class="ledger">
      <tr><th>Trace</th><th>What it is</th></tr>
      <tr><td><b>Ashes</b></td><td>The residue of anything that has burned. Sits in rock cracks for years.</td></tr>
      <tr><td><b>Scorched ground</b></td><td>Heat discolouration under and around the fire</td></tr>
      <tr><td><b>Soot on the rocks</b></td><td>Smoke deposit on surfaces above and behind</td></tr>
      <tr><td><b>A spent fuel source</b></td><td>A gas vent, an oil seep, a hearth, a spill — something that was feeding it</td></tr>
      <tr><td><b>Seasonal timing</b></td><td>Some fires can only happen in the dry season, or in storm season</td></tr>
    </table>
    <h4>How to use this</h4>
    <p>Take it to the <b>hypothesis table</b> — the 📊 button in the top bar. It lists five ways a bush could genuinely be on fire. For each one, tick the traces it would leave. Then set your finished table against the site report, which found none of them.</p>
    <p class="margin-note">One column will be ticked all the way down. That column is the keyword.</p>
    <div class="ref">Fictional comparison plate, built for this file.</div>`
},
{
  id:"j03botany", stage:1, kind:"Botanical note", title:"The Botanical Note",
  sub:"Field Chest B · the bush, months later",
  prev:"Still there. Still growing. It put out new wood that season.",
  x:58, y:24, rot:4, w:206,
  body:`
    <p>The bush at the site was tagged and revisited.</p>
    <table class="ledger">
      <tr><th>Visit</th><th>Condition</th></tr>
      <tr><td>At survey</td><td>In leaf, undamaged, sap running</td></tr>
      <tr><td>Three months later</td><td>New growth at four points. Root system sound.</td></tr>
      <tr><td>The following season</td><td>Flowered. Fruit set.</td></tr>
    </table>
    <h4>Why this closes an explanation</h4>
    <p>One explanation on your board is a natural gas or oil seep alight at the roots — a real phenomenon, and a sensible guess in this geology.</p>
    <p>It fails on the plant. <b>A seep burns for weeks or months, and it burns from below.</b> A bush growing directly over one does not merely char; its roots cook, and it dies, and it is dead the following season. This one flowered.</p>
    <p>There is also no vent. The surveyor probed the crack the bush grows from and found rock, not a fissure — no gas, no odour, no seep, and nothing that has ever been alight down there.</p>
    <div class="ref">Fictional botanical record. Background: Exodus 3:2.</div>`
},
{
  id:"j03duration", stage:1, kind:"Field analysis", title:"The Duration",
  sub:"Field Chest B · testing the heat-and-hallucination explanation",
  prev:"Long enough to watch, decide, walk over, and hold a conversation.",
  x:80, y:44, rot:-6, w:206,
  body:`
    <p>The last ordinary explanation is that a solitary man in desert heat saw something that was not there. It is worth taking seriously — it happens, and it is not an insult to the witness. It simply does not fit this record.</p>
    <table class="ledger">
      <tr><th>What the explanation needs</th><th>What the record shows</th></tr>
      <tr><td>A brief episode</td><td>Long enough to observe, reason about, cross the ground and converse at length</td></tr>
      <tr><td>A passive experience</td><td><b>He approached deliberately</b>, having first decided to</td></tr>
      <tr><td>Confusion or altered judgement</td><td>His stated reasoning is exact: <i>it is burning and not being consumed, so I will go and find out why</i></td></tr>
      <tr><td>Content that fits the sufferer's state</td><td>He is given a job he does not want and argues against it five times</td></tr>
      <tr><td>No lasting physical trace either way</td><td>Agreed — and this is the one point where the explanation and the file agree</td></tr>
      <tr><td>Extreme conditions</td><td>An ordinary working day on ground he had grazed for forty years</td></tr>
    </table>
    <h4>The awkward part for this explanation</h4>
    <p>Heat visions do not usually hand a man a task he spends the next hour trying to refuse, and they do not usually survive being walked up to and inspected. <b>The most careful person at this site was the witness</b>, and his own account is the record of him testing what he saw.</p>
    <div class="ref">Background: Exodus 3:3–4 · Exodus 3:11 – 4:13.</div>`
},

/* ---------------- STAGE 2 — released by the keyword lock ---------------- */
{
  id:"j03name", stage:2, kind:"Transcript", title:"The Name",
  sub:"Sealed Pouch C · the answer to his second objection",
  prev:"“I AM WHO I AM.”",
  x:26, y:28, rot:-3, w:210,
  body:`
    <div class="doc-body">
      <p>His second objection was practical: they will ask me who sent you, and I will not know what to say.</p>
      <div class="stamp">RECORDED REPLY</div>
      <p style="font-size:18px"><b>"I AM WHO I AM."</b> And: "Say this to the children of Israel: <b>I AM has sent me to you.</b>"</p>
      <h4>Why the Bureau keeps this page with the physical evidence</h4>
      <p>Because the name and the bush say the same thing.</p>
      <ul>
        <li>Everything else on that hillside exists because something else made it and something else keeps it going. Fire needs fuel. A bush needs water. A name usually says whose son you are, or what town you come from.</li>
        <li>This name says nothing of the kind. It refuses the question. It says only: <b>I am the one who simply is.</b></li>
        <li>And the thing he was looking at was a fire that needed nothing to keep it burning, next to a plant it did not consume.</li>
      </ul>
      <p class="margin-note">The sign and the name match. Whether that is a coincidence is a question the file leaves to you.</p>
    </div>
    <div class="ref">Background: Exodus 3:13–15.</div>`
},
{
  id:"j03ground", stage:2, kind:"Field note", title:"Take Off Your Sandals",
  sub:"Sealed Pouch C · the instruction before the conversation",
  prev:"The ground had not changed. What was standing on it had.",
  x:56, y:30, rot:4, w:206,
  body:`
    <p>Before anything was said about Egypt, the witness was told two things: <b>do not come any closer</b>, and <b>take off your sandals, for the place where you are standing is holy ground</b>.</p>
    <h4>What the Bureau finds interesting about this</h4>
    <ul>
      <li>It is a shelf of stone on a hillside he had walked over for forty years. Nothing about the rock had changed, and nothing about it stayed changed afterwards.</li>
      <li>The instruction is the ordinary courtesy of a guest entering a house — and it is given on open ground, in the open air, in the middle of a wilderness.</li>
      <li>He is told to keep his distance <i>and</i> to make himself at home. Both at once.</li>
    </ul>
    <p>The survey found nothing at the site. That is the point of this page. <b>Whatever made that ground holy left no residue</b>, which is exactly what you would expect of a presence and exactly what you would not expect of a fire.</p>
    <div class="ref">Background: Exodus 3:5.</div>`
},
{
  id:"j03after", stage:2, kind:"Follow-up file", title:"What Came Of It",
  sub:"Sealed Pouch C",
  prev:"An eighty-year-old shepherd went back to the country he had fled.",
  x:78, y:60, rot:-5, w:206,
  body:`
    <p>The Bureau tests a claimed experience by what the person then did about it. This one has an unusually clear answer.</p>
    <table class="ledger">
      <tr><th>Before</th><th>After</th></tr>
      <tr><td>Shepherding another man's flock in exile</td><td>Returned to Egypt</td></tr>
      <tr><td>A fugitive from an Egyptian charge of killing</td><td>Walked back into the court he had fled</td></tr>
      <tr><td>Aged about 80</td><td>Aged about 80</td></tr>
      <tr><td>"Please send somebody else"</td><td>Went</td></tr>
      <tr><td>Nothing to gain</td><td>Forty years of the hardest work in the record</td></tr>
    </table>
    <h4>Why this page is in the file</h4>
    <p>People do invent experiences, and the reason is almost always that the invention gets them something — status, money, an excuse, a way out. Set that against this.</p>
    <p><b>An eighty-year-old man went back to the one country on earth where he was wanted for a killing, to do a job he had refused five times, on the strength of what he saw on that hillside.</b> Whatever that was, he was not pretending about it, and he was not enjoying it.</p>
    <div class="ref">Background: Exodus 2:11–15 · Exodus 4:18–20 · Exodus 7:7.</div>`
},
{
  id:"j03why", stage:2, kind:"Bureau analysis", title:"The One Property",
  sub:"Sealed Pouch C · what is actually left",
  prev:"Every explanation predicts ash. There is no ash.",
  x:44, y:76, rot:2, w:212,
  body:`
    <p>Here is the case in one paragraph, and the Bureau would like students to be able to say it in their own words.</p>
    <h4>The reasoning</h4>
    <ol>
      <li>Fire is a process that <b>consumes</b>. That is not a detail about fire; it is what fire is. Burning is fuel being turned into something else.</li>
      <li>Every natural way a bush could be alight — brush fire, gas seep, lightning, a spreading campfire, burning resin — is a version of that same process, so <b>every one of them predicts ash</b>.</li>
      <li>The site had no ash. It had no scorching, no soot, no fuel source and no damage of any kind, and the bush went on growing and flowered the next season.</li>
      <li>So whatever was on that hillside was <b>burning without consuming</b> — and that is the one property no natural explanation can produce, because it is the one property that contradicts what burning is.</li>
    </ol>
    <h4>What the Bureau does <i>not</i> claim</h4>
    <p>The file does not prove what it was. It closes what it was not, and it is honest that the physical evidence is a single site, surveyed after the fact, on the word of one man with no witnesses. A student who says <i>"I still think he imagined it"</i> has not failed the case — they have made a claim, and the file asks them to say which document they are setting aside to make it.</p>
    <p class="margin-note">The honest end of this case is not "and therefore God". It is: everything that consumes has been ruled out, and something that did not consume is what is left. What you do with that is yours.</p>
    <div class="ref">Background: Exodus 3:1–6 · compare Deuteronomy 4:24 and Daniel 3:25–27.</div>`
}
];

const JM03_THEORIES = [
  {
    id:"brush",
    title:"1. An ordinary brush fire",
    claim:"Dry desert scrub catches easily. He saw a bush burn out, and the story grew in the telling.",
    answer:"j03site",
    verdict:"The site report kills it. A bush that burned would leave ash, scorched ground, charred wood and soot on the rocks behind it — and ash in particular sits in the cracks of rock for years. The survey went over the shelf square metre by square metre and found none of it, along with no damage whatever to the bush. The surveyor's words are exact: not a small fire, <i>no</i> fire."
  },
  {
    id:"light",
    title:"2. A trick of the light at sunrise",
    claim:"Low sun behind a bush, seen at the right angle, can look exactly like flame.",
    answer:"j03timing",
    verdict:"The timing and the bearing kill it. It was the working middle of the day, not sunrise; the shelf lies above him to the west, so he approached with the sun behind him rather than behind the bush; and an optical effect is a relationship between viewer, object and light — <b>move the viewer and it changes or ends</b>. He walked all the way up to it and it held, which is the easiest test there is and he ran it himself."
  },
  {
    id:"invented",
    title:"3. He invented it to justify leaving",
    claim:"An exile stuck herding another man's sheep needs a reason to go home. A commission from God is a very good one.",
    answer:"j03refusals",
    verdict:"The five refusals kill it. A man who invents a commission does not then argue his way out of it five separate times — wrong man, cannot answer their questions, they will not believe me, I cannot speak, please send somebody else. Inventions flatter the inventor; this one humiliates him from beginning to end, and the record keeps every objection including the last, which is not an argument but a plain refusal."
  },
  {
    id:"seep",
    title:"4. A natural gas or oil seep alight",
    claim:"The geology allows it. A vent under the roots burning steadily would look exactly like a bush that will not burn out.",
    answer:"j03botany",
    verdict:"The botanical note kills it. A seep burns for weeks and it burns from below: the roots cook and the plant is dead by the following season. This bush put out new growth at four points within three months, flowered the next season and set fruit. The surveyor also probed the crack it grows from and found solid rock — no fissure, no odour, no vent, nothing that had ever been alight."
  },
  {
    id:"vision",
    title:"5. He was seeing things in the heat",
    claim:"A solitary man, desert sun, long hours alone with a flock. People do see things.",
    answer:"j03duration",
    verdict:"The duration kills it. This was not a glimpse: it lasted long enough for him to observe it, reason about it, decide to investigate, cross the ground and hold an extended conversation — and he <b>approached deliberately</b> rather than being overtaken by it. His stated reasoning is exact and unclouded, and what he came away with was a job he spent the next hour refusing. It was an ordinary working day on ground he had grazed for forty years."
  }
];

const JM03_LOCKS = [
  {
    id:"l1", type:"number", code:"2530", len:4,
    wrong:"Not that. Each digit comes from a different document — one of the four is wrong.",
    name:"Field Chest B — the survey papers",
    blurb:"A four-digit lock. Each digit answers one question, and each question is answered by a different document already on your desk. One of the answers is zero — do not assume the question is broken because the count comes to nothing.",
    questions:[
      "How many times was his name called out of the bush?",
      "How many times did he try to refuse the commission?",
      "How many signs was he given to take with him?",
      "What proportion of the bush was consumed?"
    ],
    hints:[
      "The questions are in order: question one gives the first digit. Every answer is a single digit.",
      "Question 1 is his own account. Question 2 is the transcript of refusals. Question 3 is the record of the signs. Question 4 is the site report — and it is a number."
    ],
    reward:"Field Chest B is open: the comparison plate, the botanical note and the analysis of the duration are now on the desk. The 📊 Hypothesis table in the top bar is live."
  },
  {
    id:"l2", type:"word", code:"ASHES", len:5,
    wrong:"Not that. Fill in the hypothesis table — the 📊 button in the top bar. You are looking for the column that every single explanation ticks.",
    name:"Sealed Pouch C — the missing trace",
    blurb:"A five-letter keyword. It is not an answer written anywhere in the file. You get it by working out what each explanation predicts, and then noticing the one prediction they all share — and that the site report says was not there.",
    questions:[
      "Open the 📊 Hypothesis table from the top bar.",
      "Five ways a bush could genuinely be on fire, and five traces fire can leave.",
      "For each explanation, tick every trace it would leave behind.",
      "One column is ticked all the way down. Its name is the keyword."
    ],
    hints:[
      "Work along the rows, not down the columns. Ask of each one: if this is what happened, what would I find on that shelf?",
      "Four of the five columns have at least one gap — a resin flare in the branches need not scorch the ground; lightning is over too fast to leave soot; only some of them need a fuel source or a particular season."
    ],
    reward:"Sealed Pouch C is open: the name, the instruction about the ground, what came of it all, and the Bureau's analysis are now on the desk."
  }
];

const JM03_MATRIX = {
  button:"📊 Hypothesis table",
  title:"The Hypothesis Table",
  blurb:"Five ways a bush could genuinely be on fire, and the five traces fire can leave. For each explanation, tick every trace it would leave behind at the site. Then set the finished table against <b>The Site Report</b>, which found none of them.",
  corner:"If this is what happened…",
  verify:"Check the table",
  mark:"✔",
  cols:[
    {id:"ash",    label:"Ashes",             note:"residue of what burned"},
    {id:"scorch", label:"Scorched ground",   note:"heat under and around"},
    {id:"soot",   label:"Soot on the rocks", note:"smoke deposit"},
    {id:"fuel",   label:"A fuel source",     note:"vent, hearth, spill"},
    {id:"season", label:"A particular season", note:"dry or storm season only"}
  ],
  rows:[
    {id:"brush",  label:"A dry brush fire",          note:"the bush itself is the fuel"},
    {id:"seep",   label:"A gas or oil seep alight",  note:"burning up from a vent"},
    {id:"bolt",   label:"A lightning strike",        note:"one strike, over in a moment"},
    {id:"camp",   label:"A campfire spreading",      note:"a hearth left burning nearby"},
    {id:"resin",  label:"Burning resin in the branches", note:"a flare up in the crown"}
  ],
  truth:[
    "brush|ash","brush|scorch","brush|soot","brush|season",
    "seep|ash","seep|scorch","seep|soot","seep|fuel",
    "bolt|ash","bolt|scorch","bolt|season",
    "camp|ash","camp|scorch","camp|soot","camp|fuel","camp|season",
    "resin|ash","resin|soot"
  ],
  foot:{
    label:"What the site report found",
    note:"surveyed square metre by square metre",
    cells:{ash:"none", scorch:"none", soot:"none", fuel:"none", season:"—"}
  },
  note:"Think along each row: <i>if this is what happened, what would I find on that shelf?</i> A resin flare up in the crown need not scorch the ground. A lightning strike is over too quickly to blacken the rocks. Only some of them need a fuel source, or a particular time of year.",
  reveal:{
    lead:"Four columns have gaps in them. One does not. Every single way a bush can actually be alight — whatever the fuel, whatever the season, however long it lasts — leaves the same thing behind, and the site report found none of it.",
    answer:"ASHES",
    caption:"That is the keyword for Sealed Pouch C. It is also the whole argument of the case: burning is fuel being consumed, so anything that burns leaves ash — and this did not."
  }
};

const JM03_VERDICTS = [
  {id:"brush",    text:"An ordinary brush fire, remembered larger than it was."},
  {id:"light",    text:"A trick of the low sun behind the bush."},
  {id:"invented", text:"He invented the whole thing to justify going back to Egypt."},
  {id:"seep",     text:"A natural gas or oil seep burning under the roots."},
  {id:"vision",   text:"He was alone in desert heat and saw something that was not there."},
  {id:"unconsumed", text:"Something was burning on that shelf and consuming nothing — no ash, no scorching, no fuel, and a bush that went on growing. Every ordinary explanation predicts a trace that is not there."}
];

const CASE_JM03 = {
  id:"jm03", code:"CASE JM-03", title:"The Bush That Would Not Burn",
  period:"Horeb · undated", colour:"#7d5c2f", poster:"poster_jm03",
  teaser:"A shepherd turns aside to look at a burning bush — not because it is burning, but because it is still there. The site was surveyed afterwards. There is no ash on that hillside at all.",
  introSub:"It was burning. It was not being consumed. He went to find out why.",
  items:JM03_ITEMS, theories:JM03_THEORIES, locks:JM03_LOCKS, verdicts:JM03_VERDICTS,
  matrix:JM03_MATRIX,
  correct:"unconsumed",
  boardTitle:"What Was Burning",
  boardIntro:"Five explanations have been offered. For each one, pin the <b>single</b> document that makes it impossible. When all five are closed, the accusation form opens.",
  accusationIntro:"You have closed every ordinary explanation on the board. State what the file will support — no more than that, and no less.",
  debrief:{
    lead:"A brush fire, a trick of the light, an invention, a gas seep and a heat vision have each been closed by a document. What is left is not a name for the thing on the hillside but a property of it: it was burning and it was consuming nothing. Burning is fuel being turned into something else, so every natural version of it predicts ash — and the survey found none, on ground where ash sits in the cracks for years, beside a bush that flowered the following season.",
    questions:[
      "The file closes five explanations but never says what the fire <i>was</i>. Is that a weakness in the case or a strength? What would it take to go further?",
      "The witness turned aside because something did not fit — it burned and it stayed. What is the difference between noticing that something does not fit and explaining it away?",
      "He argued against the job five times and went anyway. Does refusing something and then doing it make a person less committed, or more?",
      "The name given at the bush is 'I AM' — a name that says nothing about where he comes from or whose son he is. Why might that name belong with a fire that needs no fuel?"
    ],
    refs:"Exodus 3:1 – 4:17 · Exodus 2:11–15 · Exodus 7:7 · Deuteronomy 4:24 · Daniel 3:25–27"
  },
  teacher:{
    answers:"Lock 1 code <b>2530</b> (name called 2× · 5 refusals · 3 signs · 0 of the bush consumed). Lock 2 keyword <b>ASHES</b>, from the 📊 Hypothesis table: brush fire ticks ashes, scorch, soot, season; gas seep ticks ashes, scorch, soot, fuel; lightning ticks ashes, scorch, season; a spreading campfire ticks all five; burning resin ticks ashes and soot only. Ashes is the one column with no gaps.",
    pairs:"Brush fire → The Site Report; trick of the light → The Timing and the Bearing; he invented it → The Five Refusals; gas seep → The Botanical Note; heat vision → The Duration.",
    conclusion:"Something was burning that consumed nothing. Every natural explanation predicts ash, scorching or a fuel source, and the site had none of them; the bush was undamaged and flowered the next season.",
    prompts:"\"What does fire DO? Now — did that happen here?\" · \"How long does an optical illusion survive being walked up to?\" · \"If you were inventing a reason to go home, would you invent a job you then begged to be let off?\" · \"Look down each column of your table. Which one has no gaps?\"",
    extra:"The debrief question worth protecting time for is the first one. This case is deliberately built to stop where the evidence stops: it closes five explanations and names a property, not a cause. Students who want to go further should be asked what additional evidence would get them there — and students who remain unconvinced should be asked which specific document they are setting aside, which is a far better exercise than agreement. A useful extension: the same reasoning pattern (what would each explanation predict? go and look) is exactly what JM-16 and JM-06 use, so it is worth naming out loud."
  }
};

registerCase(CASE_JM03);
