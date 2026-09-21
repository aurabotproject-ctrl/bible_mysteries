"use strict";
/* ============================================================
   CASE JM-05 — THE WRITING ON THE WALL
   Babylon, 539 BC.  Source: Daniel 5.
   ============================================================ */

SVG.j05wall = `<svg viewBox="0 0 1536 1024" xmlns="http://www.w3.org/2000/svg"><image href="__IMG_j05wall__" x="0" y="0" width="1536" height="1024"/><text x="1295" y="105" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="21" font-weight="600" fill="#4a3520" textLength="244" lengthAdjust="spacingAndGlyphs">THE PLASTER PANEL</text><text x="1295" y="131" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="13" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".92" textLength="236" lengthAdjust="spacingAndGlyphs">smooth, unbroken, unmarked</text><text x="1130" y="656" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="22" font-weight="600" fill="#4a3520" textLength="214" lengthAdjust="spacingAndGlyphs">THE LAMPSTAND</text><text x="1130" y="682" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="13" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".92" textLength="232" lengthAdjust="spacingAndGlyphs">the only light on this wall</text><text x="1294" y="847" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="21" font-weight="600" fill="#4a3520" textLength="238" lengthAdjust="spacingAndGlyphs">THE FLOOR BENEATH</text><text x="1294" y="873" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="12" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".92" textLength="244" lengthAdjust="spacingAndGlyphs">no ladder feet, no spilled pigment</text></svg>`;
SVG.j05weights = `<svg viewBox="0 0 1536 1024" xmlns="http://www.w3.org/2000/svg"><image href="__IMG_j05weights__" x="0" y="0" width="1536" height="1024"/><text x="446" y="122" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="25" font-weight="600" fill="#4a3520" textLength="206" lengthAdjust="spacingAndGlyphs">THE BALANCE</text><text x="446" y="148" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="14" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".92" textLength="224" lengthAdjust="spacingAndGlyphs">pans empty, beam level</text><text x="159" y="556" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="25" font-weight="600" fill="#4a3520" textLength="150" lengthAdjust="spacingAndGlyphs">ONE MINA</text><text x="159" y="582" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="14" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".92" textLength="140" lengthAdjust="spacingAndGlyphs">sixty shekels</text></svg>`;
SVG.j05vessels = `<svg viewBox="0 0 1536 1024" xmlns="http://www.w3.org/2000/svg"><image href="__IMG_j05vessels__" x="0" y="0" width="1536" height="1024"/><text x="1230" y="238" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="23" font-weight="600" fill="#4a3520" textLength="246" lengthAdjust="spacingAndGlyphs">THE TEMPLE BASIN</text><text x="1230" y="264" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="13" font-weight="500" fill="#7d4a24" font-style="italic" opacity=".92" textLength="238" lengthAdjust="spacingAndGlyphs">carried off from Jerusalem</text></svg>`;

const JM05_ITEMS = [

/* ---------------- STAGE 0 ---------------- */
{
  id:"j05letter", stage:0, notEvidence:true, kind:"Briefing", title:"Letter from the Case Supervisor",
  sub:"The Bible Investigation Bureau · Department of Unsolved Antiquities",
  prev:"Four words on a wall that the cleverest men in the empire could not read.",
  x:22, y:26, rot:-3, w:216,
  body:`
    <p><b>To the investigating team,</b></p>
    <p>A thousand nobles at a feast in Babylon. Halfway through the evening the king calls for the gold and silver vessels his grandfather carried out of the temple in Jerusalem, and the whole hall drinks from them.</p>
    <p>Then, high on the plastered wall opposite the lampstand, <b>a hand appears and writes four words</b>, and stops. The king can see it. So can everybody else.</p>
    <p>He sends for every enchanter, astrologer and scholar in Babylon — the finest collection of learning in the world at that date — and offers a fortune and the third place in the kingdom to whoever can read it. <b>Not one of them can.</b> By morning the king is dead and the city belongs to somebody else.</p>
    <h4>Your task</h4>
    <p>Five explanations have been put to us. Close the four the documents will not carry. Take particular care with the third one — it is the cleverest, and it is wrong for a reason worth finding out.</p>
    <h4>How the file works</h4>
    <ul>
      <li>Everything on the desk now is yours. The table of weights looks dull. Read it anyway.</li>
      <li>Two parts of the file are <b>locked</b>. The codes are hidden in the documents you already have.</li>
      <li>The second lock is opened on the <b>balance scales</b> — the ⚖ button in the top bar, once the first lock is open.</li>
      <li>When you have everything, go to the <b>Pinboard</b>.</li>
    </ul>
    <p class="margin-note">Four words. Every scribe in the hall could pronounce them. Not one could say what they meant.</p>
    <div class="sig">Mordecai ben Jair</div>
    <div class="small" style="color:#5b4a35">Case Supervisor</div>
    <div class="ref">This case is reconstructed from Daniel 5, with background from 2 Kings 25:8–15 and Jeremiah 52:17–19.</div>`
},
{
  id:"j05wall", stage:0, kind:"Site survey", title:"The Wall Report",
  sub:"The panel, the lampstand and the floor beneath", thumb:"j05wall",
  tour:{href:"../tours/writing-on-the-wall.html", label:"\ud83d\udd6f\ufe0f Carry the lampstand to the wall",
        note:"The hall as the surveyors found it \u2014 lift the lamp to the plaster and read what is written there for yourself"},
  prev:"Writing four metres up, on smooth plaster, with nothing underneath it.",
  x:52, y:22, rot:3, w:216,
  body:`
    <div class="plate">${SVG.j05wall}<div class="cap">Click the plate to enlarge it.</div></div>
    <p>The wall was surveyed the same night, while the hall still stood exactly as it had been left.</p>
    <table class="ledger">
      <tr><th>Checked</th><th>Found</th></tr>
      <tr><td>Height of the writing above the floor</td><td>Roughly four metres — <b>well beyond a man's reach</b></td></tr>
      <tr><td>Ladder feet, stool marks or scaffold holes in the floor</td><td class="n"><b>none</b></td></tr>
      <tr><td>Pigment, chalk, charcoal or paint anywhere in the hall</td><td class="n"><b>none</b></td></tr>
      <tr><td>Drips, runs or spatter below the writing</td><td class="n"><b>none</b></td></tr>
      <tr><td>Damage or roughening of the plaster surface</td><td class="n"><b>none</b> — the plaster is unbroken</td></tr>
      <tr><td>Number of words written</td><td class="n"><b>4</b></td></tr>
      <tr><td>Position relative to the lampstand</td><td>Directly above it, <b>in the one part of the wall everybody could see</b></td></tr>
    </table>
    <h4>The surveyor's remark</h4>
    <p>"If a man painted this, he did it four metres up, in a hall with a thousand people in it, with no ladder, leaving no marks on the floor, no pigment anywhere in the building, and not one drip on the plaster below.</p>
    <p>And he chose the single most conspicuous spot in the room to do it in."</p>
    <div class="ref">Background: Daniel 5:5 — "over against the lampstand, on the plaster of the wall".</div>`
},
{
  id:"j05language", stage:0, kind:"Scholar's note", title:"The Language Note",
  sub:"What the words were, and what the difficulty actually was",
  prev:"Every scribe there could read the letters. Not one could say what they meant.",
  x:78, y:26, rot:-4, w:210,
  body:`
    <p>This is the page the case turns on, and it is routinely misunderstood, so read it twice.</p>
    <table class="ledger">
      <tr><th>Question</th><th>Answer</th></tr>
      <tr><td>Script</td><td>The ordinary script of the empire</td></tr>
      <tr><td>Language</td><td>Aramaic — <b>the everyday language of the court</b></td></tr>
      <tr><td>Were the words unknown ones?</td><td><b>No.</b> They are common commercial terms — units of weight</td></tr>
      <tr><td>Could the scholars pronounce them?</td><td><b>Yes.</b> Any clerk in the treasury uses these words daily</td></tr>
      <tr><td>Wise men who gave a reading</td><td class="n"><b>0</b></td></tr>
    </table>
    <h4>So what was the difficulty?</h4>
    <p>Not the letters. <b>The meaning.</b> Four weights, written on a wall, in a row. It is as if a hand wrote <i>KILOGRAM KILOGRAM GRAM HALF-KILO</i> above a banquet — you can read every word aloud and still have absolutely nothing to say about what it is telling you.</p>
    <p class="margin-note">"Nobody could read it" is what everybody remembers. What the record actually says is that nobody could <b>declare the interpretation</b>. Those are different failures, and only one of them is possible for a room full of professional scholars.</p>
    <div class="ref">Background: Daniel 5:8 — "they could not read the writing, nor make known to the king the interpretation".</div>`
},
{
  id:"j05weights", stage:0, kind:"Reference table", title:"The Table of Weights",
  sub:"The empire's standard units", thumb:"j05weights",
  prev:"A mina, a shekel, a half-mina. Dull, ordinary, and the whole answer.",
  x:26, y:56, rot:5, w:214,
  body:`
    <div class="plate">${SVG.j05weights}<div class="cap">Click to enlarge. The treasury balance and its graded stones.</div></div>
    <p>Every market and every treasury in Babylon works to these units. There is nothing mysterious about any of them.</p>
    <table class="ledger">
      <tr><th>Unit</th><th>Written as</th><th>Value in shekels</th></tr>
      <tr><td>Mina</td><td><b>MENE</b></td><td class="n"><b>60</b></td></tr>
      <tr><td>Shekel</td><td><b>TEKEL</b></td><td class="n"><b>1</b></td></tr>
      <tr><td>Half-mina, a "division"</td><td><b>PERES</b> (plural <b>PARSIN</b>)</td><td class="n"><b>30</b></td></tr>
    </table>
    <h4>The stones in the treasury box</h4>
    <p>Weights are made up from a graded set: <b>30, 20, 10, 5, 2 and 1 shekel</b> stones, used in combination. A clerk balancing a mina puts sixty shekels' worth of stone on the pan, however he chooses to make it up.</p>
    <p class="margin-note">Take this table to the <b>balance scales</b> — the ⚖ button in the top bar. Weigh the four words one at a time, and see what a hand wrote on that wall.</p>
    <div class="ref">Background: the weights behind Daniel 5:25–28. Sixty shekels to the mina is the standard Babylonian reckoning.</div>`
},
{
  id:"j05copy", stage:0, kind:"Scribes' record", title:"The Scribes' Copy",
  sub:"The four words, taken down from the wall",
  prev:"Four words — and the first one is written twice.",
  x:56, y:52, rot:-2, w:204,
  body:`
    <p>Two court scribes copied the writing down independently before the hall was cleared. The copies agree exactly.</p>
    <table class="ledger">
      <tr><th>Position</th><th>Word</th></tr>
      <tr><td>1</td><td><b>MENE</b></td></tr>
      <tr><td>2</td><td><b>MENE</b></td></tr>
      <tr><td>3</td><td><b>TEKEL</b></td></tr>
      <tr><td>4</td><td><b>PARSIN</b></td></tr>
    </table>
    <h4>The scribes' own notes</h4>
    <ul>
      <li>Four words. No more, no fewer, and no punctuation between them.</li>
      <li><b>The first word appears twice</b>, identically. Both scribes checked this against the wall twice, because it looked like a copying error and was not.</li>
      <li>The hand stopped. It did not fade, smudge or continue.</li>
    </ul>
    <p class="margin-note">A repetition is not an accident. In the language of the court it is emphasis — the way a herald says a thing twice so that nobody can claim afterwards they did not hear it.</p>
    <div class="ref">Background: Daniel 5:25.</div>`
},
{
  id:"j05witness", stage:0, kind:"Statements", title:"Statements from Three Tables",
  sub:"Guests seated at different ends of the hall",
  prev:"Three tables, three views of the same wall, one account.",
  x:80, y:56, rot:4, w:206,
  body:`
    <div class="doc-body">
      <h4>A noble at the high table, beside the king</h4>
      <p>"I was watching the king's face before I looked at the wall. He went the colour of the plaster. His knees struck against each other — I am not being poetic, I heard it. Then I turned round and saw what he was looking at."</p>
      <h4>A guest at a side table, halfway down the hall</h4>
      <p>"I saw the fingers of a hand and I saw them move. I could not read what was being written from where I sat, but I could see that <b>something was being written</b>, and there was nobody on that side of the hall at all."</p>
      <h4>A cupbearer at the far end</h4>
      <p>"The noise stopped. A thousand people stopped talking within about the time it takes to draw breath, and that is what made me look up. The uproar afterwards was loud enough to bring the queen down from her own apartments, and she had not been at the feast at all."</p>
      <h4>Why this closes an explanation</h4>
      <p>One explanation says the king had drunk too much and imagined it. Three witnesses at three different distances, one of them stone sober on duty, all describe the same event — and the queen came in <b>because of the noise the whole hall was making</b>. A thousand people do not fall silent at one man's hallucination.</p>
    </div>
    <div class="ref">Background: Daniel 5:5–10.</div>`
},
{
  id:"j05vessels", stage:0, kind:"Inventory", title:"The Guest List and the Vessels",
  sub:"What was on the table, and where it came from", thumb:"j05vessels",
  prev:"A thousand nobles, and the temple vessels used as wine cups.",
  x:40, y:76, rot:-5, w:212,
  body:`
    <div class="plate">${SVG.j05vessels}<div class="cap">Click to enlarge. The vessels as they stood when the hall emptied.</div></div>
    <table class="ledger">
      <tr><th>Detail</th><th>Record</th></tr>
      <tr><td>Guests</td><td><b>A thousand</b> of the king's lords, with his wives and his concubines</td></tr>
      <tr><td>Vessels called for</td><td>The gold and silver taken from the temple in Jerusalem</td></tr>
      <tr><td>Who took them, and when</td><td>His grandfather Nebuchadnezzar, about seventy years earlier</td></tr>
      <tr><td>Where they had been kept since</td><td>In the treasury, unused</td></tr>
      <tr><td>What was done with them that night</td><td><b>Drunk from</b>, by the king, his lords, his wives and his concubines</td></tr>
      <tr><td>What was praised while they drank</td><td>Gods of gold, silver, bronze, iron, wood and stone</td></tr>
    </table>
    <h4>The Bureau's note</h4>
    <p>Nothing in the hall was accidental, and this least of all. There were a thousand vessels of ordinary gold in Babylon. <b>These particular cups were sent for.</b> It was a deliberate gesture and everybody in the room understood it as one.</p>
    <p>Keep the sequence in mind: the vessels were called for, the hall drank from them and praised gods of metal and stone — <b>and then</b> the hand appeared.</p>
    <div class="ref">Background: Daniel 5:1–4 · 2 Kings 25:8–15.</div>`
},
{
  id:"j05proclaim", stage:0, kind:"Proclamation", title:"The King's Proclamation",
  sub:"What was offered to whoever could read it",
  prev:"Purple, a gold chain, and the third place in the kingdom.",
  x:64, y:78, rot:2, w:202,
  body:`
    <p>Cried aloud in the hall while the writing was still on the wall.</p>
    <div class="stamp">PROCLAMATION</div>
    <table class="ledger">
      <tr><th>Offered</th><th>To whom</th></tr>
      <tr><td>Clothing of purple</td><td rowspan="3"><b>Whoever reads this writing and shows me its interpretation</b></td></tr>
      <tr><td>A chain of gold about his neck</td></tr>
      <tr><td><b>The third place in the kingdom</b></td></tr>
    </table>
    <h4>What that last item means</h4>
    <p>Not a title. <b>Third in the empire</b>, behind the king and his father the co-regent — a real position, with real power, offered publicly in front of a thousand witnesses to anybody at all who could produce an answer.</p>
    <p class="margin-note">Note the number. It is part of the first lock, and it is also the reason one of the explanations on your board cannot stand up.</p>
    <div class="ref">Background: Daniel 5:7 · 5:16.</div>`
},

/* ---------------- STAGE 1 — released by the numbers lock ---------------- */
{
  id:"j05court", stage:1, kind:"Court record", title:"The Court Record of the Offer",
  sub:"Field Chest B · who was brought in, and what they said",
  prev:"Every scholar in Babylon. Not one answer between them.",
  x:28, y:26, rot:-3, w:214,
  body:`
    <p>The king's officers went out and brought in the wise men of Babylon — the whole apparatus of imperial learning.</p>
    <table class="ledger">
      <tr><th>Called</th><th>Result</th></tr>
      <tr><td>Enchanters</td><td>No reading given</td></tr>
      <tr><td>Astrologers (Chaldeans)</td><td>No reading given</td></tr>
      <tr><td>Diviners and soothsayers</td><td>No reading given</td></tr>
      <tr><td>Total who could give an interpretation</td><td class="n"><b>0</b></td></tr>
      <tr><td>Times the offer was repeated</td><td class="n">2 — to the wise men, and again later to Daniel</td></tr>
      <tr><td>Anyone who asked for time, or offered a partial answer</td><td class="n"><b>none</b></td></tr>
    </table>
    <h4>Why "they knew and were afraid to say" fails</h4>
    <p>It is a reasonable suspicion — telling a king his kingdom is finished is famously bad for the health, and courts do go quiet.</p>
    <p>It fails on the size of the offer and the size of the room. <b>Third place in the empire was on the table, publicly, in front of a thousand witnesses.</b> A frightened man might stay silent; a hall full of rival scholars, each of whom would gladly see the others fail, does not stay silent together when that is the prize. And the king's response to their silence was not suspicion that they were hiding something — it was terror, because he could see they genuinely had nothing.</p>
    <div class="ref">Background: Daniel 5:7–9.</div>`
},
{
  id:"j05queen", stage:1, kind:"Statement", title:"The Queen's Statement",
  sub:"Field Chest B · she was not at the feast",
  prev:"She came in because of the noise, and she remembered a man nobody else did.",
  x:58, y:24, rot:4, w:206,
  body:`
    <div class="doc-body">
      <p>"I was not at the banquet. I came down because of the noise the hall was making — you could hear it through the palace.</p>
      <p>I found the king with the colour gone out of his face and his lords standing about him saying nothing, which is not a thing I have seen before.</p>
      <p>So I told him what nobody in that room was old enough to remember. <b>There is a man in your kingdom</b> in whom is the spirit of the holy gods. In the days of your grandfather, light and understanding and wisdom were found in him, and your grandfather made him chief of the wise men.</p>
      <p>His name is Daniel. <b>The king my husband's grandfather gave him the name Belteshazzar.</b> Send for him and he will show the interpretation."</p>
      <div class="sig">the queen</div>
      <h4>What the Bureau notes</h4>
      <ul>
        <li>She had <b>no part in the feast</b> and no reason to be involved. She came because of an uproar she could hear from another part of the palace.</li>
        <li>The man she names holds no office. He is not in the room, was not sent for, and is not on any list of the king's advisers.</li>
        <li>She has to explain who he is. <b>The court had forgotten him.</b></li>
      </ul>
    </div>
    <div class="ref">Background: Daniel 5:10–12.</div>`
},
{
  id:"j05daniel", stage:1, kind:"Personnel file", title:"Daniel's File",
  sub:"Field Chest B · the Bureau's record of the man",
  prev:"Eighty years old, out of office, and not at the feast.",
  x:80, y:44, rot:-6, w:206,
  body:`
    <p>The file on the man the queen named, as far as the archive can reconstruct it.</p>
    <table class="ledger">
      <tr><th>Detail</th><th>Record</th></tr>
      <tr><td>Brought to Babylon</td><td>As a captive youth from Jerusalem, about 65 years earlier</td></tr>
      <tr><td>Highest office held</td><td>Chief of the wise men, under Nebuchadnezzar</td></tr>
      <tr><td>Position under the present king</td><td class="n"><b>none</b></td></tr>
      <tr><td>On the guest list for the feast</td><td class="n"><b>no</b></td></tr>
      <tr><td>Among the wise men called in</td><td class="n"><b>no</b> — nobody thought of him</td></tr>
      <tr><td>Approximate age</td><td>Above eighty</td></tr>
      <tr><td>How he came to be sent for</td><td><b>The queen remembered him.</b> Nobody else did.</td></tr>
    </table>
    <h4>Why this matters to the board</h4>
    <p>One explanation says Daniel staged the whole thing to get himself back into office. Set that against the file. He was not in the hall. He was not on the list of people to consult. <b>He was sent for only because a woman who was not at the feast came downstairs and remembered a name from two reigns ago.</b> That is a great deal of a plan to leave in somebody else's hands.</p>
    <div class="ref">Background: Daniel 5:11–13 · Daniel 1:1–7 · Daniel 2:48.</div>`
},
{
  id:"j05refusal", stage:1, kind:"Court record", title:"The Refusal",
  sub:"Field Chest B · what he said before he read a word",
  prev:"“Keep your gifts, and give your rewards to another.”",
  x:46, y:62, rot:3, w:208,
  body:`
    <div class="doc-body">
      <p>Daniel was brought in and the offer was made to him personally: purple, a gold chain, and the third place in the kingdom.</p>
      <div class="stamp">RECORDED IN OPEN COURT</div>
      <p style="font-size:18px">"<b>Let your gifts be for yourself, and give your rewards to another. Nevertheless I will read the writing to the king, and make known to him the interpretation.</b>"</p>
      <h4>Why this closes the last explanation</h4>
      <ul>
        <li>The refusal came <b>before</b> he read the wall. If the object of the exercise were office, this is the exact moment not to say that.</li>
        <li>He then told the king, at length and to his face, that he had learned nothing from his grandfather's humbling, that he had lifted himself up against the God of heaven, and that his kingdom was finished. <b>A man angling for promotion does not open that way.</b></li>
        <li>He was given the purple and the chain anyway, by a king who lived a few hours longer.</li>
      </ul>
      <p class="margin-note">He refused the reward, delivered the worst news in the empire, and was promoted to third place in a kingdom that ended that night. It is difficult to describe that as a successful career move.</p>
    </div>
    <div class="ref">Background: Daniel 5:17–23 · 5:29.</div>`
},

/* ---------------- STAGE 2 — released by the keyword lock ---------------- */
{
  id:"j05reading", stage:2, kind:"Transcript", title:"The Reading of the Words",
  sub:"Sealed Pouch C · what the four weights meant",
  prev:"Numbered. Weighed. Divided.",
  x:26, y:28, rot:-3, w:212,
  body:`
    <p>Having refused the reward, Daniel read the wall.</p>
    <table class="ledger">
      <tr><th>Word</th><th>As a weight</th><th>As a verdict</th></tr>
      <tr><td><b>MENE</b></td><td>a mina — 60 shekels</td><td><b>Numbered.</b> God has numbered your kingdom and finished it.</td></tr>
      <tr><td><b>MENE</b></td><td>a mina, again</td><td>Said twice, so that it cannot be argued with.</td></tr>
      <tr><td><b>TEKEL</b></td><td>a shekel — 1</td><td><b>Weighed.</b> You are weighed in the balances and found wanting.</td></tr>
      <tr><td><b>PARSIN</b></td><td>half-minas — divisions</td><td><b>Divided.</b> Your kingdom is divided and given to the Medes and Persians.</td></tr>
    </table>
    <h4>Why nobody in that hall could do this</h4>
    <p>Every scholar there could read four weights. What none of them could do was hear each weight as a <b>verb</b> — numbered, weighed, divided — and see that the subject of all three was the king.</p>
    <p>And there is a second layer the scribes missed. <b>PARSIN</b> is a hair's breadth from <b>PARAS</b>, the word for Persia. The wall says <i>divided</i> and it says <i>Persia</i> in the same breath.</p>
    <p class="margin-note">The words were never hidden. They were sitting in plain sight, in the everyday language of the treasury, on the wall of a hall full of people who used them every day of their working lives.</p>
    <div class="ref">Background: Daniel 5:24–28.</div>`
},
{
  id:"j05night", stage:2, kind:"Follow-up file", title:"The Night the City Fell",
  sub:"Sealed Pouch C · what happened before morning",
  prev:"The same night. Not a campaign, not a siege — that night.",
  x:56, y:30, rot:4, w:208,
  body:`
    <table class="ledger">
      <tr><th>Event</th><th>Record</th></tr>
      <tr><td>Daniel clothed in purple, given the chain and third place</td><td>the same evening</td></tr>
      <tr><td>Belshazzar king of the Chaldeans slain</td><td><b>that night</b></td></tr>
      <tr><td>The kingdom taken</td><td>By Darius the Mede, about sixty-two years old</td></tr>
      <tr><td>Time between the writing and the fall</td><td><b>A matter of hours</b></td></tr>
      <tr><td>Siege, battle in the streets, or long resistance recorded</td><td class="n"><b>none in this account</b></td></tr>
    </table>
    <h4>Why the Bureau keeps the timing on its own page</h4>
    <p>Because it is the part that makes the file hard to explain away. A prediction of a dynasty's end is cheap; empires end eventually and a patient prophet is bound to be right in the end.</p>
    <p><b>This one had a deadline of a few hours</b>, was delivered in front of a thousand witnesses, was written up in advance on a wall that could not be reached, and named the successor. There is no comfortable amount of room in that for a lucky guess.</p>
    <div class="ref">Background: Daniel 5:29–31.</div>`
},
{
  id:"j05whyvessels", stage:2, kind:"Bureau analysis", title:"What the Vessels Had To Do With It",
  sub:"Sealed Pouch C",
  prev:"The cups were the charge. The wall was the sentence.",
  x:78, y:60, rot:-5, w:208,
  body:`
    <p>Students always ask why a hand appeared at <i>this</i> feast, when Babylon had been holding feasts for seventy years. The answer is in the inventory, and Daniel says it to the king's face.</p>
    <h4>The charge, in his words</h4>
    <ul>
      <li>Your grandfather was brought very low until he learned that Heaven rules — <b>and you knew all this.</b></li>
      <li>You have lifted yourself up against the Lord of heaven.</li>
      <li>You sent for <b>the vessels of his house</b> and drank wine from them, you and your lords and your wives.</li>
      <li>And you praised gods of gold, silver, bronze, iron, wood and stone — <b>which do not see, or hear, or know</b>.</li>
      <li>The God in whose hand your breath is, and whose are all your ways, you have not honoured.</li>
    </ul>
    <h4>Why the Bureau finds the last line the sharpest</h4>
    <p>He praises gods that cannot see or hear — and a hand writes on the wall in front of him. The whole point of the vessels was that they were <b>trophies</b>: proof that the God of the people who owned them had lost. The reply arrives in the only medium that could not be ignored, in the room where the boast was made, in the middle of the boast.</p>
    <p class="margin-note">The cups were not a detail of the story. They were the charge sheet.</p>
    <div class="ref">Background: Daniel 5:18–23.</div>`
},
{
  id:"j05why", stage:2, kind:"Bureau analysis", title:"Why Nobody Could Read It",
  sub:"Sealed Pouch C · what the file is actually about",
  prev:"The hardest thing to see is the thing you use every day.",
  x:44, y:76, rot:2, w:210,
  body:`
    <p>Set out plainly, because it is the transferable idea in this case.</p>
    <h4>The failure was not knowledge</h4>
    <p>The men in that hall were the best-trained scholars alive. They could read the script, they knew the language, and they used those four words in their work every day. <b>No amount of extra learning would have helped them</b>, which is why bringing in more of them changed nothing.</p>
    <h4>The failure was framing</h4>
    <p>They were looking at four weights and asking <i>what do these weights mean?</i> — a question with no answer. The right question was <i>what if these are not weights at all, but what you do with a weight?</i> Number it. Weigh it. Divide it.</p>
    <p>Daniel's advantage was not a better dictionary. It was that he had spent seventy years expecting the God of Israel to have something to say — so he was reading the wall as a message from someone, and they were reading it as a puzzle from no one.</p>
    <h4>What the file will and will not claim</h4>
    <p>It closes the natural explanations: nobody painted it, the language was not the problem, the hall was not imagining it, the scholars were not hiding an answer, and the man who read it turned down the fee before he spoke. <b>What was left was a message, in ordinary words, that required somebody willing to hear it as one.</b></p>
    <p class="margin-note">Ask your team the honest version: how often is the thing you cannot work out sitting in plain sight, in words you already know?</p>
    <div class="ref">Background: Daniel 5:8 · 5:11–12 · compare Daniel 2:27–28.</div>`
}
];

const JM05_THEORIES = [
  {
    id:"painted",
    title:"1. A rival painted it as a trick",
    claim:"A political enemy wanted to break the king's nerve, and a message on the wall would do it.",
    answer:"j05wall",
    verdict:"The wall report kills it. The writing is four metres up, above a man's reach, and there are no ladder feet, stool marks or scaffold holes anywhere on the floor beneath it. There is no pigment, chalk, charcoal or paint in the building, no drips or spatter below the letters, and the plaster surface is unbroken. On top of all that, it was done in the most conspicuous spot in a hall containing a thousand people."
  },
  {
    id:"afraid",
    title:"2. The wise men could read it and were afraid to say",
    claim:"Telling a king his kingdom is finished is a good way to die. They understood it perfectly and kept quiet.",
    answer:"j05court",
    verdict:"The court record kills it. Purple, a gold chain and <b>the third place in the kingdom</b> were offered publicly, in front of a thousand witnesses, to anyone at all who could produce a reading. A frightened man might stay silent; a hall of rival scholars competing for that prize does not stay silent together. Not one asked for time or offered a partial answer — and the king's reaction to their silence was terror, not suspicion."
  },
  {
    id:"language",
    title:"3. It was in a language nobody present knew",
    claim:"An unknown script or tongue would defeat even the best scholars in the empire.",
    answer:"j05language",
    verdict:"The language note kills it — and this is the cleverest wrong answer in the file. The script was the ordinary script of the empire and the language was Aramaic, the everyday language of the court. The four words are common commercial terms that any treasury clerk used daily. They could all pronounce it perfectly. What they could not do was say what it <i>meant</i>, which is a completely different kind of failure."
  },
  {
    id:"drink",
    title:"4. The king imagined it in drink",
    claim:"A man who has been drinking all night, in a hall full of lamplight and shadow, saw something that was not there.",
    answer:"j05witness",
    verdict:"The witness statements kill it. Three guests at three different distances describe the same event, including a cupbearer on duty at the far end of the hall who noticed a thousand people fall silent within a breath. The queen was not at the feast at all and came down from her own apartments <b>because of the uproar</b>. A hall does not go quiet, then erupt loudly enough to be heard across a palace, over one man's hallucination."
  },
  {
    id:"daniel",
    title:"5. Daniel arranged it to win office",
    claim:"An old man pushed out of favour engineers a crisis only he can solve, and walks away third in the kingdom.",
    answer:"j05refusal",
    verdict:"The refusal kills it. He turned down the purple, the chain and the third place <b>before he read a word</b> — the exact moment not to do that if office were the object. He then told the king to his face that he had learned nothing, had lifted himself up against the God of heaven, and was finished. He was also not at the feast, not on the list of advisers, and was sent for only because the queen happened to remember a name from two reigns earlier."
  }
];

const JM05_LOCKS = [
  {
    id:"l1", type:"number", code:"4032", len:4,
    wrong:"Not that. Each digit comes from a different document — one of the four is wrong.",
    name:"Field Chest B — the court papers",
    blurb:"A four-digit lock. Each digit answers one question, and each question is answered by a different document already on your desk. One of the answers is zero.",
    questions:[
      "How many words were written on the wall?",
      "How many of the king's wise men could give an interpretation?",
      "What place in the kingdom was offered to whoever could read it?",
      "How many times is the first word written?"
    ],
    hints:[
      "The questions are in order: question one gives the first digit. Every answer is a single digit.",
      "Question 1 is the wall report. Question 2 is the language note. Question 3 is the king's proclamation. Question 4 is the scribes' copy."
    ],
    reward:"Field Chest B is open: the court record of the offer, the queen's statement, Daniel's file and the record of the refusal are now on the desk. The ⚖ balance in the top bar is live."
  },
  {
    id:"l2", type:"word", code:"WEIGHED", len:7,
    wrong:"Not that. Put the four words on the balance — the ⚖ button in the top bar — and read what the middle one is telling you to do.",
    name:"Sealed Pouch C — the verdict",
    blurb:"A seven-letter keyword. The four words on the wall are four weights, and the table of weights on your desk gives every value. Balance each one in turn on the scales, then ask what all four have in common — not as things, but as actions.",
    questions:[
      "Open the ⚖ balance from the top bar.",
      "Weigh each of the four words in turn, using the stones in the treasury box.",
      "A mina is sixty shekels. A shekel is one. A half-mina is thirty.",
      "Four weights in a row. What is the one thing you ever do with a weight?"
    ],
    hints:[
      "Start with MENE. It is a mina, which the table of weights gives as sixty shekels — make sixty out of the stones in the box, however you like.",
      "MENE again (sixty), then TEKEL (one shekel), then PARSIN, which is half a mina — thirty."
    ],
    reward:"Sealed Pouch C is open: the reading of the words, the record of the night the city fell, the Bureau's note on the vessels and its analysis of why nobody could read it are now on the desk."
  }
];

const JM05_SCALES = {
  button:"⚖ The balance",
  title:"The Balance",
  blurb:"Four words. Every one of them is a unit of weight, and the <b>Table of Weights</b> on your desk gives all three values. Put stones on the pan until the beam sits level, one word at a time — then look at the four of them together.",
  unit:"shekels",
  stones:[
    {id:"s30", label:"30", value:30},
    {id:"s20", label:"20", value:20},
    {id:"s10", label:"10", value:10},
    {id:"s5",  label:"5",  value:5},
    {id:"s2",  label:"2",  value:2},
    {id:"s1",  label:"1",  value:1}
  ],
  rounds:[
    {id:"r1", n:1, word:"MENE", meaning:"a mina", target:60,
     prompt:"The first word on the wall. The table of weights gives a mina as sixty shekels — build sixty out of the stones in the box, however you like.",
     note:"Sixty shekels, balanced."},
    {id:"r2", n:2, word:"MENE", meaning:"a mina, written a second time", target:60,
     prompt:"The same word again. The scribes checked this twice against the wall because it looked like a copying error, and it was not. Weigh it again.",
     note:"Sixty shekels again — the same weight, said twice."},
    {id:"r3", n:3, word:"TEKEL", meaning:"a shekel", target:1,
     prompt:"The third word. A shekel is the unit itself: one.",
     note:"One shekel. The smallest weight in the box, and the heaviest word on the wall."},
    {id:"r4", n:4, word:"PARSIN", meaning:"half-minas, or divisions", target:30,
     prompt:"The last word. A peres is half a mina — and PARSIN is its plural. Weigh one of them.",
     note:"Thirty shekels: a mina cut in two."}
  ],
  keyword:"WEIGHED",
  reveal:{
    lead:"Sixty, sixty, one, thirty. Four weights in a row, and every scholar in Babylon could have told you that much — which is exactly as far as they got. Now ask the question they never asked. You do not admire a weight, or store it, or read it. You put something in the other pan and find out what it comes to. Numbered, and numbered again. Weighed. Divided. The middle word names what was really happening in that hall.",
    answer:"WEIGHED",
    caption:"The words were never hidden. They were sitting in plain sight, in the everyday language of the treasury, in front of a thousand people who used them at work every day."
  }
};

const JM05_VERDICTS = [
  {id:"painted",  text:"A political rival painted it on the wall to break the king's nerve."},
  {id:"afraid",   text:"The wise men could read it perfectly well and were too frightened to say so."},
  {id:"language", text:"It was written in a language or script nobody in the hall knew."},
  {id:"drink",    text:"The king had been drinking and imagined the whole thing."},
  {id:"daniel",   text:"Daniel staged it to get himself back into office."},
  {id:"verdict",  text:"The writing was a verdict on the kingdom, in four ordinary words that everybody could read and nobody would hear — and it was carried out before morning."}
];

const CASE_JM05 = {
  id:"jm05", code:"CASE JM-05", title:"The Writing on the Wall",
  period:"Babylon · 539 BC", colour:"#4a2f6b", poster:"poster_jm05",
  teaser:"A thousand nobles at a feast, and a hand that writes four words on the plaster and stops. The finest scholars in the empire can pronounce every word and cannot tell the king what any of it means. By morning he is dead.",
  introSub:"Four words. A thousand witnesses. No reading.",
  items:JM05_ITEMS, theories:JM05_THEORIES, locks:JM05_LOCKS, verdicts:JM05_VERDICTS,
  scales:JM05_SCALES,
  correct:"verdict",
  boardTitle:"Why Nobody Could Read It",
  boardIntro:"Five explanations have been offered. For each one, pin the <b>single</b> document that makes it impossible. When all five are closed, the accusation form opens.",
  accusationIntro:"Nobody painted it, the language was not the difficulty, the hall was not imagining it, the scholars were not hiding an answer, and the man who read it refused the fee first. State what the file will actually support.",
  debrief:{
    lead:"Four ordinary commercial words, in the everyday language of the court, four metres up a wall nobody could reach, above the one lampstand everybody could see by. The scholars failed not because the writing was hard but because they were asking what four weights <i>mean</i> — and the answer was in what you do with a weight. Numbered. Weighed. Divided. It was a verdict, delivered in the middle of a boast made with stolen temple cups, and it was carried out that night.",
    questions:[
      "Every scholar in the room could read those words. Why is the thing in front of you sometimes the hardest thing to see — and what would have had to change for one of them to get it?",
      "The king already knew what had happened to his grandfather. Does knowing a thing make any difference if you have decided it does not apply to you?",
      "Daniel refused the reward before he read the wall, and then delivered the worst news in the empire. What does that cost him, and what does it buy him?",
      "The vessels had sat unused in a treasury for seventy years. Why do you think this feast was the moment, and not any of the hundreds before it?"
    ],
    refs:"Daniel 5 · Daniel 1:1–7 · Daniel 2:27–28 · 2 Kings 25:8–15 · Proverbs 16:18"
  },
  teacher:{
    answers:"Lock 1 code <b>4032</b> (4 words · 0 wise men could interpret · 3rd place in the kingdom · the first word written 2 times). Lock 2 keyword <b>WEIGHED</b>, from the ⚖ balance: MENE = a mina = 60 shekels, MENE again = 60, TEKEL = a shekel = 1, PARSIN = half-minas = 30. Once all four balance, the reveal asks what you actually do with a weight — and TEKEL, the middle word, names it.",
    pairs:"A rival painted it → The Wall Report; they were afraid to say → The Court Record of the Offer; an unknown language → The Language Note; the king imagined it → Statements from Three Tables; Daniel arranged it → The Refusal.",
    conclusion:"The four words were units of weight, readable by everyone present, and they were a verdict rather than a puzzle: numbered, weighed, divided. The kingdom fell that night.",
    prompts:"\"Could they READ it, or could they not EXPLAIN it? Find the sentence that says which.\" · \"How do you paint something four metres up in a room with a thousand people in it?\" · \"Third place in the empire was on offer. Would every single scholar really keep quiet?\" · \"What do you actually DO with a weight?\"",
    extra:"The third explanation — an unknown language — is the one worth spending time on. Almost every class picks it, and it is wrong for a reason that transfers well beyond this case: they could read every word and still had nothing to say. It is the difference between decoding and understanding, and it is worth naming that out loud, because it is exactly what happens to a student who can read every word of a maths problem and still not know what it is asking. The balance also does real arithmetic work — a group who cannot make sixty from 30/20/10/5/2/1 stones will get useful practice before they get the keyword."
  }
};

registerCase(CASE_JM05);
