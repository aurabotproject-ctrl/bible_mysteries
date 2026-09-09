"use strict";
/* ============================================================
   CASE JM-18 — THE CONTEST ON CARMEL
   Mount Carmel.  Source: 1 Kings 17-19.
   ============================================================ */

SVG.j18altar = `<svg viewBox="0 0 1536 1024" xmlns="http://www.w3.org/2000/svg"><image href="images/j18altar.jpg" x="0" y="0" width="1536" height="1024"/><text x="185" y="173" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="23" font-weight="600" fill="#4a3520" textLength="132" lengthAdjust="spacingAndGlyphs">THE WOOD</text><text x="185" y="194" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="11" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".92" textLength="214" lengthAdjust="spacingAndGlyphs">cut, laid in order, soaked</text><text x="1338" y="584" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="19" font-weight="600" fill="#4a3520" textLength="214" lengthAdjust="spacingAndGlyphs">STANDING WATER</text><text x="1338" y="605" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="10" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".92" textLength="208" lengthAdjust="spacingAndGlyphs">the trench filled to the brim</text><text x="157" y="746" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="21" font-weight="600" fill="#4a3520" textLength="158" lengthAdjust="spacingAndGlyphs">THE TRENCH</text><text x="157" y="767" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="11" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".92" textLength="180" lengthAdjust="spacingAndGlyphs">cut all the way round</text></svg>`;
SVG.j18mount = `<svg viewBox="0 0 1536 1024" xmlns="http://www.w3.org/2000/svg"><image href="images/j18mount.jpg" x="0" y="0" width="1536" height="1024"/><text x="268" y="147" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="18" font-weight="600" fill="#4a3520" textLength="246" lengthAdjust="spacingAndGlyphs">THE REBUILT ALTAR</text><text x="268" y="168" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="11" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".92" textLength="220" lengthAdjust="spacingAndGlyphs">twelve stones, and a trench</text><text x="1170" y="127" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="19" font-weight="600" fill="#4a3520" textLength="236" lengthAdjust="spacingAndGlyphs">THE OTHER ALTAR</text><text x="1170" y="148" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="10" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".92" textLength="232" lengthAdjust="spacingAndGlyphs">prepared first, from morning</text><text x="874" y="699" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="19" font-weight="600" fill="#4a3520" textLength="236" lengthAdjust="spacingAndGlyphs">THE OPEN GROUND</text><text x="874" y="720" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="11" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".92" textLength="196" lengthAdjust="spacingAndGlyphs">where the people stood</text></svg>`;
SVG.j18stones = `<svg viewBox="0 0 1536 1024" xmlns="http://www.w3.org/2000/svg"><image href="images/j18stones.jpg" x="0" y="0" width="1536" height="1024"/><text x="255" y="122" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="19" font-weight="600" fill="#4a3520" textLength="206" lengthAdjust="spacingAndGlyphs">TWELVE STONES</text><text x="255" y="143" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="11" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".92" textLength="168" lengthAdjust="spacingAndGlyphs">one for each tribe</text><text x="1337" y="69" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="23" font-weight="600" fill="#4a3520" textLength="116" lengthAdjust="spacingAndGlyphs">THE JARS</text><text x="1337" y="90" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="11" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".92" textLength="192" lengthAdjust="spacingAndGlyphs">four, filled at the sea</text><text x="1358" y="882" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="21" font-weight="600" fill="#4a3520" textLength="166" lengthAdjust="spacingAndGlyphs">THREE TIMES</text><text x="1358" y="903" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="11" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".92" textLength="158" lengthAdjust="spacingAndGlyphs">twelve jars in all</text></svg>`;

const JM18_ITEMS = [

/* ---------------- STAGE 0 ---------------- */
{
  id:"j18letter", stage:0, notEvidence:true, kind:"Briefing", title:"Letter from the Case Supervisor",
  sub:"The Bible Investigation Bureau · Department of Unsolved Antiquities",
  prev:"One man against four hundred and fifty — and he keeps handing them advantages.",
  x:22, y:26, rot:-3, w:216,
  body:`
    <p><b>To the investigating team,</b></p>
    <p>After three years of drought a national contest is arranged on a mountain top. One prophet on one side; four hundred and fifty on the other. Two altars, one bull each, and a rule agreed in front of the whole country: <b>the god who answers by fire is God.</b></p>
    <p>The interesting behaviour is all on the side with one man. He lets the other side choose their bull. He lets them go first. He gives them from morning until mid-afternoon. And when his own turn comes, he pours water over his altar until it runs off the stones and <b>fills a trench cut all the way round</b>.</p>
    <h4>Your task</h4>
    <p>Five explanations are on the board. Close all five. The question worth chasing is not "did it happen" — the file cannot settle that for you — but <b>what kind of test this was, and whether it was built to be passed or built to be checked.</b></p>
    <h4>How the file works</h4>
    <ul>
      <li>Everything on the desk now is yours.</li>
      <li>Two parts of the file are <b>locked</b>. Both codes are in documents you have or will have.</li>
      <li>The second lock opens with the <b>hypothesis table</b> — the 📋 button in the top bar, once the first lock is open.</li>
      <li>When all five explanations are closed, go to the <b>Pinboard</b>.</li>
    </ul>
    <p class="margin-note">Keep a running list of every advantage he gives away. It gets longer than students expect, and the list is the case.</p>
    <div class="sig">A. Thorne</div>
    <div class="small" style="color:#5b4a35">Case Supervisor</div>
    <div class="ref">This case is reconstructed from 1 Kings 17–18.</div>`
},
{
  id:"j18altar", stage:0, kind:"Technical plate", title:"The Altar and the Trench",
  sub:"Plan and section, as measured", thumb:"j18altar",
  prev:"Twelve stones, wood laid in order, and a trench round the whole thing, brimming.",
  x:52, y:22, rot:3, w:218,
  body:`
    <div class="plate">${SVG.j18altar}<div class="cap">Click the plate to enlarge it. Plan above, section below.</div></div>
    <table class="ledger">
      <tr><th>Element</th><th>As built</th></tr>
      <tr><td>Stones</td><td><b>12</b>, rebuilt from an altar that had been thrown down</td></tr>
      <tr><td>Trench</td><td>Cut <b>all the way round</b> the altar, wide enough to hold two measures of seed</td></tr>
      <tr><td>Wood</td><td>Cut and laid in order on the stones</td></tr>
      <tr><td>The offering</td><td>The bull, cut in pieces, laid on the wood</td></tr>
      <tr><td>Water poured</td><td><b>3</b> times, <b>4</b> jars each time — twelve jars in all</td></tr>
      <tr><td>Result</td><td>The water ran round about the altar, and <b>filled the trench</b></td></tr>
    </table>
    <h4>Why "hidden fire under the altar" fails here</h4>
    <p>Every element of that list works against a concealed flame. The stones were <b>rebuilt in the open</b> on a bare mountain top in front of the crowd — there was no prepared platform to hide anything in. The wood, the offering and the stones were then soaked three separate times, and the surplus water pooled in a cut channel round the base. <b>You cannot keep a hidden fire alive under a soaked altar standing in a moat</b>, and you certainly cannot dig one in while the country watches.</p>
    <p class="margin-note">Three numbers for the first lock are in that table: how many times the water was poured, how many jars each time, and — from the plate — how many stones.</p>
    <div class="ref">Background: 1 Kings 18:30–35.</div>`
},
{
  id:"j18mount", stage:0, kind:"Survey plan", title:"The Mountain Top, and the Two Sites",
  sub:"Both altars, and where the people stood", thumb:"j18mount",
  prev:"Two altars in the open, a crowd between them, and nowhere to hide anything.",
  x:78, y:26, rot:-4, w:216,
  body:`
    <div class="plate">${SVG.j18mount}<div class="cap">Click the plan to enlarge it.</div></div>
    <table class="ledger">
      <tr><th>Feature</th><th>Recorded</th></tr>
      <tr><td>Bulls prepared</td><td class="n"><b>2</b> — one for each altar</td></tr>
      <tr><td>The other altar</td><td>Prepared first, from the morning, on open rock</td></tr>
      <tr><td>The rebuilt altar</td><td>Twelve stones, with the trench cut round it</td></tr>
      <tr><td>Distance between them</td><td>Short — both visible from the same place</td></tr>
      <tr><td>Where the people stood</td><td>Between and around, on bare ground, close enough to be called over</td></tr>
      <tr><td>Cover, buildings, chambers</td><td class="n"><b>none</b> — a bare summit above the sea</td></tr>
    </table>
    <h4>What the ground rules out</h4>
    <p>There is no building, no crypt, no under-floor, no screen and no crowd barrier. Both altars stand on open rock with several hundred people moving around them for the better part of a day. <b>Whatever explanation you prefer, it has to work in the open air with hostile witnesses on all sides.</b></p>
    <p class="margin-note">The number of bulls is the first digit of the first lock.</p>
    <div class="ref">Background: 1 Kings 18:19–26, 30.</div>`
},
{
  id:"j18stones", stage:0, kind:"Evidence", title:"The Stones and the Jars",
  sub:"Twelve of one, four of the other", thumb:"j18stones",
  prev:"Twelve stones for twelve tribes, and four jars carried up three times.",
  x:26, y:56, rot:5, w:216,
  body:`
    <div class="plate">${SVG.j18stones}<div class="cap">Click the plate to enlarge it.</div></div>
    <table class="ledger">
      <tr><th>Item</th><th>Count</th><th>Note</th></tr>
      <tr><td>Stones</td><td class="n"><b>12</b></td><td>According to the number of the tribes</td></tr>
      <tr><td>Jars</td><td class="n"><b>4</b></td><td>Filled and poured over the offering and the wood</td></tr>
      <tr><td>Pourings</td><td class="n"><b>3</b></td><td>"Do it a second time… do it a third time"</td></tr>
      <tr><td>Total jars poured</td><td class="n"><b>12</b></td><td>Everything soaked, and the trench filled</td></tr>
      <tr><td>Where the water came from</td><td colspan="2">Carried up — in the third year of a drought, when water was the most expensive thing in the country</td></tr>
    </table>
    <h4>The detail people skip</h4>
    <p>This is a <b>drought</b>. The brooks have dried, the king has been out personally looking for grass to keep the horses alive, and water is being rationed. Twelve jars of it are carried up a mountain and poured on the ground <b>for no purpose except to make the test harder.</b></p>
    <p class="margin-note">Ask your team what that gesture costs, and what it signals. Nobody wastes a scarce resource to make their own job more difficult unless they are very confident, or performing confidence.</p>
    <div class="ref">Background: 1 Kings 18:31–35 · 18:5.</div>`
},
{
  id:"j18time", stage:0, kind:"Timetable", title:"The Timetable of the Day",
  sub:"Who had how long",
  prev:"They had from morning until mid-afternoon. He had the time it takes to say sixty words.",
  x:56, y:52, rot:-2, w:210,
  body:`
    <table class="ledger">
      <tr><th>Time</th><th>What happened</th></tr>
      <tr><td>Morning</td><td>The other side choose their bull, prepare it, and begin</td></tr>
      <tr><td>Morning to noon</td><td>They call on their god. No answer</td></tr>
      <tr><td>Noon</td><td>They continue; the challenger openly needles them about it</td></tr>
      <tr><td>Noon to mid-afternoon</td><td>They continue until the hour of the evening offering. <b>Still nothing</b></td></tr>
      <tr><td>Mid-afternoon</td><td>The challenger rebuilds his altar, digs the trench, soaks it three times</td></tr>
      <tr><td>Then</td><td><b>1</b> prayer — a few sentences — and the fire falls</td></tr>
    </table>
    <h4>Why "the other side was never given a fair chance" fails</h4>
    <p>They chose first, they went first, and they had <b>the whole working day</b>. Nobody stopped them, hurried them or interfered. If anything the arrangement is lopsided in their favour: hours against minutes, four hundred and fifty voices against one, and their pick of the two bulls.</p>
    <p>Count the prayers on the challenger's side. <b>One.</b> That number is the last digit of the first lock.</p>
    <p class="margin-note">Fairness is measurable here: time, choice, order and numbers. All four ran the other way.</p>
    <div class="ref">Background: 1 Kings 18:26–29, 36–37.</div>`
},
{
  id:"j18crowd", stage:0, kind:"Crowd note", title:"Where the Crowd Stood Beforehand",
  sub:"Not an audience of supporters",
  prev:"Asked to choose a side, they said nothing at all. That is the starting position.",
  x:80, y:56, rot:4, w:206,
  body:`
    <p>"The crowd was primed to see it" requires a crowd that wanted to. The record gives their position before anything happened, and it is not enthusiasm.</p>
    <div class="doc-body">
      <p>"How long will you go limping between two opinions? If the LORD is God, follow him; but if Baal, then follow him."</p>
      <p><b>"And the people answered him not a word."</b></p>
    </div>
    <table class="ledger">
      <tr><th>Question</th><th>Record</th></tr>
      <tr><td>Response when asked to choose</td><td class="n"><b>silence</b></td></tr>
      <tr><td>Who summoned them</td><td>The king — who had spent three years hunting the challenger</td></tr>
      <tr><td>The challenger's standing</td><td>Publicly blamed for the drought; called "the troubler of Israel"</td></tr>
      <tr><td>The official religion of the court</td><td>The other side's</td></tr>
      <tr><td>The crowd's own response to the test rule</td><td>"It is well spoken" — they accepted the terms, and nothing more</td></tr>
    </table>
    <h4>Why a primed crowd does not fit</h4>
    <p>A sullen, silent, court-summoned crowd standing on the losing prophet's home ground is close to the <b>worst possible audience</b> for a staged event. They accepted the rule and then said nothing for a whole day while the official side failed.</p>
    <p class="margin-note">Worth noticing: the rule they accepted is a <i>falsifiable</i> one. Both sides could fail, and one of them did, in public, for six hours.</p>
    <div class="ref">Background: 1 Kings 18:17–24.</div>`
},

/* ---------------- STAGE 1 — released by the numbers lock ---------------- */
{
  id:"j18bulls", stage:1, kind:"Contest terms", title:"The Choice of Bulls",
  sub:"Field Chest B · who picked what",
  prev:"“Choose one bullock for yourselves, and dress it first.” He took what was left.",
  x:28, y:26, rot:-3, w:212,
  body:`
    <p>The fifth explanation is that the challenger controlled both altars and arranged the whole thing. The terms he set are the answer, and he set them out loud in front of everybody.</p>
    <div class="doc-body">
      <p>"Let them give us two bullocks; and <b>let them choose one bullock for themselves</b>, and cut it in pieces, and lay it on wood, and put no fire under.</p>
      <p>And I will dress the other bullock, and lay it on wood, and put no fire under.</p>
      <p>And call on the name of your gods, and I will call on the name of the LORD: and <b>the God that answers by fire, let him be God.</b>"</p>
    </div>
    <table class="ledger">
      <tr><th>Decision</th><th>Made by</th></tr>
      <tr><td>Which bull each side used</td><td><b>The other side</b> — first pick</td></tr>
      <tr><td>Which altar</td><td>Theirs was prepared on their own ground</td></tr>
      <tr><td>Who went first</td><td><b>The other side</b></td></tr>
      <tr><td>How long they took</td><td><b>The other side</b></td></tr>
      <tr><td>The rule for winning</td><td>Agreed in advance, in public, by both sides and the crowd</td></tr>
      <tr><td>"Put no fire under"</td><td><b>Stated as a condition, by the challenger, on himself as well</b></td></tr>
    </table>
    <h4>Why "he controlled both altars" fails</h4>
    <p>He controlled almost nothing. The one thing he did control — his own altar — he made <b>as difficult as possible</b> and then invited four hundred and fifty hostile specialists to watch him do it.</p>
    <p class="margin-note">"Put no fire under" is the clause that matters. He named the obvious cheat and ruled it out before anyone could accuse him of it.</p>
    <div class="ref">Background: 1 Kings 18:23–25.</div>`
},
{
  id:"j18weather", stage:1, kind:"Weather record", title:"The Weather Record",
  sub:"Field Chest B · testing the lightning explanation",
  prev:"Three years without rain, and not a cloud until long after the fire.",
  x:58, y:24, rot:4, w:210,
  body:`
    <table class="ledger">
      <tr><th>Time</th><th>Sky</th></tr>
      <tr><td>The previous three years</td><td>No rain, no dew. Brooks dried up; a national search for grazing</td></tr>
      <tr><td>Morning of the contest</td><td>Clear</td></tr>
      <tr><td>Through the day</td><td>Clear. No thunder is recorded at any point</td></tr>
      <tr><td>At the moment of the fire</td><td>Clear</td></tr>
      <tr><td><b>After</b> the fire</td><td>A servant is sent to look at the sea <b>seven times</b>; on the seventh he reports a cloud "like a man's hand"</td></tr>
      <tr><td>Then</td><td>The sky black with clouds and wind, and a great rain</td></tr>
    </table>
    <h4>Why lightning does not fit</h4>
    <ul>
      <li>The record is unusually careful about the sky <b>because the rain is the point of the whole chapter</b> — and it puts the first cloud <i>after</i> the fire, spotted only on a seventh look, out at sea.</li>
      <li>A bolt would not consume the stones, the dust and the water standing in the trench, which is what the report describes.</li>
      <li>And it would have to arrive during a prayer of about sixty words, on the one altar out of two, after a cloudless day in the third year of a drought.</li>
    </ul>
    <p class="margin-note">The sequence is the argument: fire first, cloud afterwards, and the cloud so small it took seven trips to find.</p>
    <div class="ref">Background: 1 Kings 17:1 · 18:1–5, 41–45.</div>`
},
{
  id:"j18fire", stage:1, kind:"Report", title:"What the Fire Consumed",
  sub:"Field Chest B · the report, itemised",
  prev:"The offering, the wood, the stones, the dust — and the water in the trench.",
  x:80, y:44, rot:-6, w:208,
  body:`
    <table class="ledger">
      <tr><th>Consumed</th><th>Note</th></tr>
      <tr><td>The burnt offering</td><td>Expected of any fire</td></tr>
      <tr><td>The wood</td><td>Soaked three times</td></tr>
      <tr><td><b>The stones</b></td><td>Not expected of any fire</td></tr>
      <tr><td><b>The dust</b></td><td>The surface material round the altar</td></tr>
      <tr><td><b>The water in the trench</b></td><td>Licked up — the whole standing pool</td></tr>
    </table>
    <h4>How to use this page</h4>
    <p>The Bureau is not asking you to accept the report. It is asking you to notice <b>what the report commits itself to</b>, because a claim's shape tells you what kind of claim it is.</p>
    <ul>
      <li>A hidden flame consumes an offering. It does not consume stones.</li>
      <li>A poured accelerant burns off fast and leaves the stones and the trench water behind.</li>
      <li>A lightning strike scorches and shatters; it does not evaporate a filled trench.</li>
    </ul>
    <p>Each natural candidate accounts for part of this list and none for all of it — <b>and every one of them is stopped earlier anyway, by the water.</b></p>
    <p class="margin-note">Good discussion: is a bigger claim easier or harder to check? Students usually answer that instinctively and get it the wrong way round.</p>
    <div class="ref">Background: 1 Kings 18:38.</div>`
},
{
  id:"j18prayer", stage:1, kind:"Transcript", title:"The Prayer, In Full",
  sub:"Field Chest B · sixty words, once",
  prev:"No performance, no repetition — and one line that states the point of the whole test.",
  x:46, y:62, rot:3, w:206,
  body:`
    <div class="doc-body">
      <p>"LORD God of Abraham, Isaac and of Israel, let it be known this day that thou art God in Israel, and that I am thy servant, and that I have done all these things at thy word.</p>
      <p>Hear me, O LORD, hear me, <b>that this people may know that thou art the LORD God</b>, and that thou hast turned their heart back again."</p>
    </div>
    <h4>Set beside the other side's six hours</h4>
    <table class="ledger">
      <tr><th></th><th>The four hundred and fifty</th><th>The challenger</th></tr>
      <tr><td>Duration</td><td>Morning to mid-afternoon</td><td>A few sentences</td></tr>
      <tr><td>Method</td><td>Calling, leaping about the altar, cutting themselves</td><td>Standing still and speaking</td></tr>
      <tr><td>Repetitions</td><td>Continuous</td><td class="n"><b>1</b></td></tr>
      <tr><td>Stated purpose</td><td>To be answered</td><td><b>"That this people may know"</b> — the test is <i>for the crowd</i></td></tr>
    </table>
    <h4>The line worth stopping on</h4>
    <p>He says out loud what the test is <b>for</b>: not to win an argument, but so that the people watching can settle a question they had refused to answer that morning. That is an unusual thing to announce, and it makes the whole event a piece of public evidence rather than a private vindication.</p>
    <p class="margin-note">Compare with JM-11, where the Philistine priests also stated in advance what their test would prove. Both cases turn on saying the purpose out loud first.</p>
    <div class="ref">Background: 1 Kings 18:26–29, 36–37.</div>`
},

/* ---------------- STAGE 2 — released by the keyword lock ---------------- */
{
  id:"j18after", stage:2, kind:"Follow-up", title:"What Happened Next",
  sub:"Sealed Pouch C",
  prev:"The rain came, the prophets of Baal were killed, and the winner ran away frightened.",
  x:26, y:28, rot:-3, w:210,
  body:`
    <table class="ledger">
      <tr><th>After the fire</th><th>Record</th></tr>
      <tr><td>The crowd</td><td>"The LORD, he is the God" — twice over</td></tr>
      <tr><td>The prophets of Baal</td><td><b>Taken down to the brook and killed.</b> The record states it plainly and does not soften it</td></tr>
      <tr><td>The rain</td><td>Came the same day, after seven looks at the sea, ending three years of drought</td></tr>
      <tr><td>The queen's response</td><td>A death threat, sent the next morning</td></tr>
      <tr><td>The challenger's response</td><td><b>He ran, sat under a tree, and asked to die</b></td></tr>
      <tr><td>What he was told</td><td>To eat, and sleep — twice — before anything else was said to him</td></tr>
    </table>
    <h4>The Bureau's note</h4>
    <p>Two honest observations about this page, and they pull in different directions.</p>
    <p><b>The killing is real and the record does not excuse it.</b> It belongs to a brutal period, in a fight the court had started — the same queen had been killing prophets on the other side for years. Reading it should be uncomfortable, and the account does not ask you to enjoy it.</p>
    <p><b>The collapse is the more surprising entry.</b> A man who has just won a national contest in public runs away from one message and asks to die under a tree. <b>Invented heroes do not do that</b>, and a story built to glorify him would end at the rain.</p>
    <p class="margin-note">Teachers: read the note below in the teacher's file before doing this page with a class.</p>
    <div class="ref">Background: 1 Kings 18:39–46 · 19:1–8 · 18:4.</div>`
},
{
  id:"j18falsifiable", stage:2, kind:"Bureau analysis", title:"A Test Anybody Could Have Failed",
  sub:"Sealed Pouch C",
  prev:"The rule was agreed first, in public, and both sides could lose under it.",
  x:56, y:30, rot:4, w:210,
  body:`
    <p>Set out as a piece of method, this is one of the two best-designed tests in the archive.</p>
    <table class="ledger">
      <tr><th>Feature of a good test</th><th>Present here?</th></tr>
      <tr><td>The rule agreed <b>before</b> the result</td><td>Yes — and by both sides and the crowd</td></tr>
      <tr><td>A stated way to <b>lose</b></td><td>Yes — no fire, no god. It applied to him too</td></tr>
      <tr><td>The obvious cheat ruled out explicitly</td><td>Yes — "put no fire under"</td></tr>
      <tr><td>The opposition choose their own conditions</td><td>Yes — their bull, their order, their timing</td></tr>
      <tr><td>Hostile observers at close range</td><td>Yes — several hundred, and the state religion's own specialists</td></tr>
      <tr><td>Difficulty added deliberately by the claimant</td><td>Yes — twelve jars of water, in a drought</td></tr>
      <tr><td>Repeatable</td><td class="n"><b>no</b> — a single trial, and the Bureau says so</td></tr>
    </table>
    <h4>Stated honestly</h4>
    <p>Six out of seven is a strong shape and the seventh is a real weakness. <b>One event, once, is one event.</b> What the file can establish is not what happened in the fire but what kind of claim was made: a public, falsifiable, pre-announced one, with the terms handed to the other side — which is a very different thing from a private wonder reported afterwards by its beneficiary.</p>
    <p class="margin-note">Pair directly with JM-11. Two tests, eight centuries apart, both designed so that the designer could be proved wrong.</p>
    <div class="ref">Background: 1 Kings 18:21–39 · compare 1 Samuel 6:7–9.</div>`
},
{
  id:"j18lesson", stage:2, kind:"Bureau analysis", title:"Giving Away Advantages",
  sub:"Sealed Pouch C",
  prev:"Count what he handed over. The list is the argument.",
  x:80, y:34, rot:-4, w:212,
  body:`
    <p>Make your team write the list before you show them this page.</p>
    <h4>Everything the challenger gave away</h4>
    <ul>
      <li><b>The choice of bull</b> — the other side picked first.</li>
      <li><b>The order</b> — they went first.</li>
      <li><b>The time</b> — morning until mid-afternoon, against his few minutes.</li>
      <li><b>The numbers</b> — four hundred and fifty against one, and he pointed it out himself.</li>
      <li><b>The venue conditions</b> — open rock, no cover, nothing prepared underneath.</li>
      <li><b>The obvious cheat</b> — ruled out by his own stated condition, "put no fire under".</li>
      <li><b>And then the trench</b> — twelve jars of scarce water poured over his own altar for no reason but to make it harder.</li>
    </ul>
    <h4>What that pattern is evidence of</h4>
    <p>It is not, by itself, evidence that the fire fell. It is <b>evidence about what sort of event was being staged</b>. People arranging a deception reduce the number of ways they can be caught. Every single decision here increases them — and the last one, the trench, exists for no other purpose.</p>
    <h4>The habit to take away</h4>
    <p>When somebody proposes a test, ask two questions: <b>who chose the conditions</b>, and <b>what would count as failing?</b> If the claimant chose everything and nothing counts as failure, you are watching a performance. If the claimant hands the conditions to the other side and names his own way of losing, you are watching something else — whatever you finally conclude about the result.</p>
    <p class="margin-note">The trench is the whole case in one object, which is why it is the keyword.</p>
    <div class="ref">Background: 1 Kings 18 · compare 1 Thessalonians 5:21.</div>`
}
];

const JM18_THEORIES = [
  {
    id:"hidden",
    title:"1. Hidden fire under the altar",
    claim:"A concealed flame or hot coals in the stonework, lit in advance and uncovered at the right moment.",
    answer:"j18altar",
    verdict:"The altar plate kills it. The stones were rebuilt in the open on bare rock while the country watched — there was no prepared platform to hide anything in — and the wood, the offering and the stones were then soaked three separate times, twelve jars in all, until the surplus stood in a trench cut all the way round. A hidden fire cannot survive under a soaked altar sitting in a moat, and it cannot be installed in front of several hundred hostile witnesses."
  },
  {
    id:"unfair",
    title:"2. The other side was never given a fair chance",
    claim:"They were rushed, interrupted, or set up to fail on somebody else's terms.",
    answer:"j18time",
    verdict:"The timetable kills it. They chose their bull, they went first, and they had from morning until the hour of the evening offering — the whole working day, uninterrupted, four hundred and fifty of them. The challenger prayed once, in a few sentences. Every measurable element of fairness — choice, order, time and numbers — ran in their favour."
  },
  {
    id:"lightning",
    title:"3. Lightning at the right moment",
    claim:"A storm was building and a bolt struck the altar during the prayer.",
    answer:"j18weather",
    verdict:"The weather record kills it. This is the third year of a drought, the day is recorded as clear, no thunder appears anywhere in the account — and the first cloud is spotted <i>after</i> the fire, out at sea, on a servant's seventh look, no bigger than a hand. The record is careful about the sky precisely because the rain matters to it, and it puts the cloud in the wrong place for lightning."
  },
  {
    id:"primed",
    title:"4. The crowd was primed to see it",
    claim:"An excited partisan audience, ready to read anything as a miracle.",
    answer:"j18crowd",
    verdict:"The crowd note kills it. Asked that morning to choose a side, they answered not a word. They had been summoned by a king who had spent three years hunting the challenger, in a country whose official religion was the other side's, and who publicly blamed him for the drought. A silent, sullen, state-assembled crowd is close to the worst audience available for a staged event."
  },
  {
    id:"control",
    title:"5. The challenger controlled both altars",
    claim:"He set the terms, arranged the props, and left himself a way to win.",
    answer:"j18bulls",
    verdict:"The contest terms kill it. He controlled almost nothing: the other side chose the bulls, prepared their own altar, and went first, on their own timing. The one condition he did impose — \"put no fire under\" — is a restriction on himself, naming the obvious cheat and ruling it out in public before anyone could accuse him of it."
  }
];

const JM18_LOCKS = [
  {
    id:"l1", type:"number", code:"2341", len:4,
    wrong:"Not that. Each digit comes from a different document — one of the four is wrong.",
    name:"Field Chest B — the contest papers",
    blurb:"A four-digit lock. Four counts from the day: what was prepared, what was poured, and how many times anybody prayed on the winning side.",
    questions:[
      "How many bulls were prepared?",
      "How many times was water poured over the altar?",
      "How many jars each time?",
      "How many times did the challenger pray?"
    ],
    hints:[
      "The questions are in order: question one gives the first digit. Every answer is a single digit.",
      "Question 1 is the mountain plan. Questions 2 and 3 are on the altar plate and in the stones-and-jars study. Question 4 is the timetable."
    ],
    reward:"Field Chest B is open: the contest terms, the weather record, the itemised fire report and the prayer in full. The 📋 Hypothesis table in the top bar is live."
  },
  {
    id:"l2", type:"word", code:"TRENCH", len:6,
    wrong:"Not that. Fill in the hypothesis table — the 📋 button in the top bar — and name the precaution that nothing on the board survives.",
    name:"Sealed Pouch C — the precaution nothing survives",
    blurb:"A six-letter keyword. Test each way the fire might have been produced against each precaution taken that day. Three of the precautions let something through. One does not — and the thing it describes is a hole in the ground.",
    questions:[
      "Open the 📋 Hypothesis table from the top bar.",
      "Five ways to produce the fire, down the side. Four precautions, across the top.",
      "Tick a box where that explanation could still work despite that precaution.",
      "One column collects nothing at all. Name what is in it."
    ],
    hints:[
      "The first two columns are about fairness, not about the fire — most explanations sail straight through them.",
      "The crowd column catches the ones that need something carried in or poured on unseen."
    ],
    reward:"Sealed Pouch C is open: what happened next, the Bureau's assessment of the test's design, and the analysis of every advantage the challenger gave away."
  }
];

const JM18_MATRIX = {
  button:"📋 Hypothesis table",
  title:"The Hypothesis Table",
  blurb:"Five ways the fire might have been produced, down the side. Four precautions taken that day, across the top. Tick a box where that explanation could <b>still work</b> in spite of that precaution — leave it blank where the precaution stops it dead.",
  corner:"How the fire got there",
  verify:"Check the table",
  mark:"✔",
  cols:[
    {id:"bull",   label:"The other side chose first",   note:"bull, altar and order"},
    {id:"allday", label:"They had from morning to mid-afternoon", note:"uninterrupted"},
    {id:"crowd",  label:"Hundreds watching on open rock", note:"no cover, close range"},
    {id:"trench", label:"Soaked three times; standing water all round", note:"twelve jars, in a drought"}
  ],
  rows:[
    {id:"under",     label:"Fire hidden under the altar",   note:"coals in the stonework"},
    {id:"liquid",    label:"A flammable liquid poured instead of water", note:"twelve jars of it"},
    {id:"lightning", label:"A lightning strike on cue",     note:"during a sixty-word prayer"},
    {id:"signal",    label:"A confederate lighting it from cover", note:"on a bare summit"},
    {id:"crowdimag", label:"Nothing happened; the crowd imagined it", note:"a silent, sullen crowd"}
  ],
  truth:[
    "under|bull","under|allday","under|crowd",
    "liquid|bull","liquid|allday",
    "lightning|bull","lightning|allday","lightning|crowd",
    "signal|bull","signal|allday",
    "crowdimag|bull","crowdimag|allday"
  ],
  foot:{
    label:"Explanations this precaution stops",
    note:"out of five",
    cells:{bull:"none", allday:"none", crowd:"three", trench:"all five"}
  },
  note:"Be honest about the first two columns: choosing the bull and having all day are precautions about <i>fairness</i>, and almost nothing about producing a fire is stopped by them. The crowd column catches whatever has to be carried in, poured on or set alight unseen. Then look at the last column and ask what could possibly get through it.",
  reveal:{
    lead:"The first two columns are full, and they should be — they were never aimed at the fire. The third catches three of the five, because a bare summit with hundreds of people on it is a poor place to pour twelve jars of oil or to hide a confederate. And the fourth column is empty. Not one explanation on this board survives an altar that has been soaked three times over, with the surplus standing in a cut channel all the way round it, in the third year of a drought.",
    answer:"TRENCH",
    caption:"He dug it himself, and filled it with water that was the scarcest thing in the country, for no purpose except to make his own test harder to pass. That is the object the whole case rests on — and it is the opposite of what somebody arranging a deception does."
  }
};

const JM18_VERDICTS = [
  {id:"hidden",    text:"Fire concealed in the stonework and uncovered at the moment."},
  {id:"unfair",    text:"The other side was rushed or set up to fail."},
  {id:"lightning", text:"A lightning strike arrived during the prayer."},
  {id:"primed",    text:"An excited crowd saw what it wanted to see."},
  {id:"control",   text:"The challenger set the terms and arranged both altars to suit himself."},
  {id:"gaveaway",  text:"He gave away every advantage he could — the bull, the order, the whole day, the numbers — named the obvious cheat and ruled it out, then poured twelve jars of water over his own altar in a drought so that the test could only be passed one way."}
];

const CASE_JM18 = {
  id:"jm18", code:"CASE JM-18", title:"The Contest on Carmel",
  period:"Mount Carmel · c. 860 BC", colour:"#8a4a2f", poster:"poster_jm18",
  teaser:"One prophet against four hundred and fifty, one altar each, and a rule agreed in front of the whole nation. Then the challenger soaks his own altar until the trench around it overflows.",
  introSub:"Count the advantages he gives away. The list is the case.",
  items:JM18_ITEMS, theories:JM18_THEORIES, locks:JM18_LOCKS, verdicts:JM18_VERDICTS,
  matrix:JM18_MATRIX,
  correct:"gaveaway",
  boardTitle:"A Day on the Mountain",
  boardIntro:"Five explanations have been offered for what happened on Carmel. For each one, pin the <b>single</b> document that makes it impossible. When all five are closed, the accusation form opens.",
  accusationIntro:"Not a hidden fire, not an unfair contest, not lightning, not a primed crowd, and not a rigged pair of altars. State what the file will actually support about how this test was <i>built</i>.",
  debrief:{
    lead:"Every decision the challenger made increased the number of ways he could be caught. The other side chose the bulls, prepared their altar and went first, with the whole day and four hundred and fifty voices against his one short prayer. The crowd had been summoned by a hostile king and would not even answer a question that morning. He named the obvious cheat — \"put no fire under\" — and ruled it out on himself. Then he rebuilt an altar in the open, cut a trench round it, and poured twelve jars of water over the lot in the third year of a drought. The file cannot settle for you what fell on that altar. It can show you exactly what kind of test it was, and who made it harder.",
    questions:[
      "List every advantage he gave away. Which one surprised you most?",
      "Why pour water on your own altar? What is that gesture <i>for</i>, if you are not certain?",
      "The rule was agreed by both sides before anything happened, and he could have failed under it. Why does agreeing the rule first matter so much?",
      "It happened once and was never repeated. How much should a single trial be allowed to settle?",
      "The man who won ran away the next morning and asked to die. What does that do to how you read the story?"
    ],
    refs:"1 Kings 17 – 19:8 · compare 1 Samuel 6:7–9 · 1 Thessalonians 5:21"
  },
  teacher:{
    answers:"Lock 1 code <b>2341</b> (2 bulls · 3 pourings · 4 jars each · 1 prayer). Lock 2 keyword <b>TRENCH</b>, from the 📋 Hypothesis table: the first two columns are full (they are fairness precautions, not fire precautions), the crowd column catches three of the five, and the trench column is completely empty.",
    pairs:"Hidden fire → The Altar and the Trench; unfair contest → The Timetable of the Day; lightning → The Weather Record; a primed crowd → Where the Crowd Stood Beforehand; he controlled both altars → The Choice of Bulls.",
    conclusion:"A public, pre-announced, falsifiable test in which the claimant handed the opposition every choosable condition and then added an obstacle of his own — the water and the trench — that no natural explanation of the fire survives.",
    prompts:"\"Who chose the bull? Now who chose the time?\" · \"Why would you pour water on it?\" · \"What would have counted as him losing?\" · \"Where would you hide anything, on a bare mountain top?\"",
    extra:"Run the advantage-list activity before the file: give groups the situation and ask them to plan a contest they intend to win, then compare with what he actually did — the contrast does the teaching. <b>Read the 'What Happened Next' page yourself before using it with a class:</b> the prophets of Baal are killed, and the archive states it plainly rather than skating over it. With Year 7–8 the workable framing is that this is a violent period, in a fight the court had started (the same queen had been killing prophets for years), and that the record does not present it as pleasant — followed by the more interesting detail, which is that the winner collapses the next morning and asks to die. Invented heroes do not do that. Pairs directly with JM-11 as a two-case unit on tests designed so the designer could be proved wrong."
  }
};

registerCase(CASE_JM18);
