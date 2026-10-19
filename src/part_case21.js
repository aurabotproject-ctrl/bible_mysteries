"use strict";
/* ============================================================
   CASE JM-00 — THE MAKER'S MARK
   The file before every other file.  Genesis 1.

   Was the world made, or did it just happen?  Five explanations
   for a world with no Maker, each closed on the evidence.  The
   case is careful about what it claims: it argues from things
   that are true — the universe had a beginning, its settings are
   finely balanced, every cell runs on written code, and Genesis is
   unlike the myths of its age — and it says plainly where the
   evidence stops and faith begins.  It does not settle how long
   creation took; Christians hold different views on that, and the
   teacher notes say so.
   ============================================================ */


SVG.j00beginning = `<svg viewBox="0 0 1536 1024" xmlns="http://www.w3.org/2000/svg"><image href="__IMG_j00beginning__" x="0" y="0" width="1536" height="1024"/><text x="1381" y="70" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="24" font-weight="600" fill="#4a3520" textLength="189" lengthAdjust="spacingAndGlyphs">THE BEGINNING</text></svg>`;
SVG.j00cause = `<svg viewBox="0 0 1536 1024" xmlns="http://www.w3.org/2000/svg"><image href="__IMG_j00cause__" x="0" y="0" width="1536" height="1024"/><text x="1381" y="70" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="24" font-weight="600" fill="#4a3520" textLength="160" lengthAdjust="spacingAndGlyphs">FIRST CAUSE</text></svg>`;
SVG.j00dials = `<svg viewBox="0 0 1536 1024" xmlns="http://www.w3.org/2000/svg"><image href="__IMG_j00dials__" x="0" y="0" width="1536" height="1024"/><text x="1381" y="70" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="24" font-weight="600" fill="#4a3520" textLength="189" lengthAdjust="spacingAndGlyphs">THE SIX DIALS</text></svg>`;
SVG.j00tablets = `<svg viewBox="0 0 1536 1024" xmlns="http://www.w3.org/2000/svg"><image href="__IMG_j00tablets__" x="0" y="0" width="1536" height="1024"/><text x="1381" y="70" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="24" font-weight="600" fill="#4a3520" textLength="175" lengthAdjust="spacingAndGlyphs">TWO ACCOUNTS</text></svg>`;
SVG.j00code = `<svg viewBox="0 0 1536 1024" xmlns="http://www.w3.org/2000/svg"><image href="__IMG_j00code__" x="0" y="0" width="1536" height="1024"/><text x="1381" y="70" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="24" font-weight="600" fill="#4a3520" textLength="116" lengthAdjust="spacingAndGlyphs">THE CODE</text></svg>`;
SVG.j00workshop = `<svg viewBox="0 0 1536 1024" xmlns="http://www.w3.org/2000/svg"><image href="__IMG_j00workshop__" x="0" y="0" width="1536" height="1024"/><text x="1381" y="70" text-anchor="middle" font-family="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif" font-size="24" font-weight="600" fill="#4a3520" textLength="160" lengthAdjust="spacingAndGlyphs">FIELD NOTES</text></svg>`;
SVG.e00wing = `<svg viewBox="0 0 1536 1024" xmlns="http://www.w3.org/2000/svg"><image href="__IMG_e00wing__" x="0" y="0" width="1536" height="1024"/></svg>`;
SVG.e00tablet = `<svg viewBox="0 0 1536 1024" xmlns="http://www.w3.org/2000/svg"><image href="__IMG_e00tablet__" x="0" y="0" width="1536" height="1024"/></svg>`;
SVG.e00dna = `<svg viewBox="0 0 1536 1024" xmlns="http://www.w3.org/2000/svg"><image href="__IMG_e00dna__" x="0" y="0" width="1536" height="1024"/></svg>`;

const JM00_ITEMS = [

/* ---------------- STAGE 0 ---------------- */
{
  id:"j00letter", stage:0, notEvidence:true, kind:"Briefing", title:"Letter from the Case Supervisor",
  sub:"The Bible Investigation Bureau · Department of Unsolved Antiquities",
  prev:"The oldest question in the archive. Was it made, or did it just happen?",
  x:22, y:26, rot:-3, w:216,
  tour:{href:"../tours/jm00-briefing.html", anim:true, label:"\u2712 Watch the briefing",
        note:"The Supervisor\u2019s letter, drawn out in forty seconds."},
  body:`
    <p><b>To the investigating team,</b></p>
    <p>Every other file in this archive starts somewhere: a city, a road, a feast, a tomb. This one starts before there was anywhere to start. The first sentence of the Bible makes a claim about everything at once: <b>"In the beginning, God created the heavens and the earth."</b></p>
    <p>People have offered other explanations for as long as that sentence has existed. Some say the universe has simply always been here. Some say it came from nothing on its own. Some say its settings are a lucky roll, that life assembled itself by chance, or that Genesis is a borrowed myth.</p>
    <p>A craftsman stamps a small mark into his work. You do not need to have met him to know someone made the thing in your hand. <b>Your job is to examine the work and decide whether it carries a maker's mark.</b></p>
    <h4>Your task</h4>
    <p>Five explanations for a world with no Maker are on the board. For each, find the one document that closes it. Then state what the file will actually support.</p>
    <h4>How the file works</h4>
    <ul>
      <li>Everything on the desk now is yours to read.</li>
      <li>Two parts of the file are <b>locked</b>. The first opens with four numbers from documents you already hold.</li>
      <li>The second opens with the <b>Maker's Sheet</b> — the 🧩 button in the top bar. Three of its answers are in the first locked chest.</li>
      <li>When all five explanations are closed, go to the <b>Pinboard</b>.</li>
    </ul>
    <p class="margin-note">Be fair to every explanation on the board. A case that only beats weak arguments has not proved anything.</p>
    <div class="sig">Mordecai ben Jair</div>
    <div class="small" style="color:#5b4a35">Case Supervisor</div>
    <div class="ref">This case is built around Genesis 1–2, Psalm 19, Romans 1:20 and Hebrews 11:3.</div>`
},
{
  id:"j00beginning", stage:0, kind:"Survey report", title:"The Beginning, Measured",
  sub:"Three lines of evidence, gathered by people who were not looking for it",
  prev:"The universe is spreading apart, still warm from its start, and running down. All three point back.", thumb:"j00beginning",
  x:52, y:22, rot:3, w:214,
  body:`
    <div class="plate">${SVG.j00beginning}<div class="cap">Click to enlarge. The universe as the survey plate shows it.</div></div>
    <p>For most of history, many thinkers assumed the universe had simply always existed. In the last hundred years, three separate lines of evidence have pointed the other way.</p>
    <table class="ledger">
      <tr><th>Line</th><th>What was found</th><th>What it points to</th></tr>
      <tr><td>1. It is spreading apart</td><td>In 1929 Edwin Hubble showed that distant galaxies are moving away from us, and the further away they are, the faster they go.</td><td>Run the film backwards and everything comes together at a starting point.</td></tr>
      <tr><td>2. It is still warm</td><td>In 1965 two radio engineers, Penzias and Wilson, picked up a faint <b>glow</b> of microwaves coming evenly from every direction in the sky.</td><td>Leftover warmth from the beginning, still filling space.</td></tr>
      <tr><td>3. It is running down</td><td>Usable energy always spreads out and gets used up. Stars burn their fuel and do not refill.</td><td>If the universe were infinitely old, it would have run down long ago. It has not.</td></tr>
    </table>
    <h4>Count the lines</h4>
    <p>There are <b>three</b> separate lines of evidence here, from three different kinds of measurement. That number is part of the first lock.</p>
    <h4>What the Bureau notes</h4>
    <p>The man who first proposed that the universe expanded out of a single starting point, Georges Lemaître, was a Belgian physicist and a Catholic priest. Some scientists at the time disliked his idea precisely because <b>a beginning sounded too much like Genesis 1:1.</b></p>
    <p class="margin-note">Scientists still argue about many details of how the universe developed. The point here is narrower: the evidence says it had a start.</p>
    <div class="ref">Background: Genesis 1:1 · Psalm 102:25–26 · Hebrews 1:10–11.</div>`
},
{
  id:"j00cause", stage:0, kind:"Bureau analysis", title:"The Rule of Causes",
  sub:"What has to be true of whatever started it",
  prev:"Nothing cannot do anything. Whatever begins has a cause.", thumb:"j00cause",
  x:78, y:26, rot:-4, w:210,
  body:`
    <div class="plate">${SVG.j00cause}<div class="cap">Click to enlarge. One falls because another fell.</div></div>
    <p>Investigators work by one rule more than any other: <b>things do not happen for no reason.</b> A window does not break with nothing hitting it. A fire does not start with nothing to start it.</p>
    <h4>The argument, step by step</h4>
    <table class="ledger">
      <tr><th>Step</th><th>Claim</th></tr>
      <tr><td>1</td><td>Whatever begins to exist has a <b>cause</b>.</td></tr>
      <tr><td>2</td><td>The universe began to exist. <i>(See The Beginning, Measured.)</i></td></tr>
      <tr><td>3</td><td>So the universe has a cause.</td></tr>
    </table>
    <h4>What kind of cause?</h4>
    <p>Whatever caused <b>space</b>, <b>time</b> and <b>matter</b> to begin cannot itself be made of space, time or matter. It has to stand outside all three. Count them: that number is part of the first lock.</p>
    <ul>
      <li>Outside time, so it did not itself begin.</li>
      <li>Outside space and matter, so it is not a physical thing.</li>
      <li>Powerful enough to bring a universe into being.</li>
      <li>Able to <i>choose</i> to start it, because something that never changes would never start anything new on its own.</li>
    </ul>
    <h4>Why "it came from nothing" will not stretch</h4>
    <p>When people say the universe came "from nothing", they usually mean something: a field, a law, an energy. That is not nothing; that is just a different something, and it still needs explaining. <b>Real nothing has no properties and no powers. It cannot produce anything at all.</b></p>
    <p class="margin-note">That list of what the cause must be sounds very like the way the Bible describes God, written thousands of years before anyone measured the universe.</p>
    <div class="ref">Background: Genesis 1:1 · John 1:1–3 · Colossians 1:16–17 · Hebrews 11:3.</div>`
},
{
  id:"j00dials", stage:0, kind:"Measurement sheet", title:"The Dials",
  sub:"Six settings the universe could have had differently",
  prev:"Turn almost any of them a little either way and there are no stars, no chemistry, no life.", thumb:"j00dials",
  x:26, y:56, rot:5, w:208,
  body:`
    <div class="plate">${SVG.j00dials}<div class="cap">Click to enlarge. Six settings, each in a very narrow band.</div></div>
    <p>The laws of physics contain numbers. Nothing we know of says they had to be these numbers. Physicists have asked what would happen if each were different, and kept getting the same kind of answer.</p>
    <table class="ledger">
      <tr><th>Dial</th><th>If it were set slightly differently</th></tr>
      <tr><td>1. Strength of <b>gravity</b></td><td>Stronger: stars burn out too fast for life. Weaker: stars and planets never form.</td></tr>
      <tr><td>2. The strong nuclear force</td><td>A few per cent different and atoms cannot build the elements life needs.</td></tr>
      <tr><td>3. The electric force</td><td>Change its balance with gravity and stable stars like our sun cannot exist.</td></tr>
      <tr><td>4. The rate of expansion</td><td>Faster: matter scatters before galaxies form. Slower: everything falls back together.</td></tr>
      <tr><td>5. The carbon "door"</td><td>Stars make carbon only because of one exact energy level in the carbon atom. Without it, no carbon, and no life as we know it.</td></tr>
      <tr><td>6. The weights of the proton and neutron</td><td>A small shift either way and hydrogen or other atoms are not stable.</td></tr>
    </table>
    <h4>Count the dials</h4>
    <p>There are <b>six</b> on this sheet. That number is part of the first lock. Physicists have listed more.</p>
    <h4>A witness who was not on our side</h4>
    <p>The astronomer Fred Hoyle predicted the carbon energy level in the 1950s before it was found. He was not a Christian. Looking at results like these, he wrote that a common-sense reading of the facts suggests that <b>"a superintellect has monkeyed with physics."</b></p>
    <h4>The usual reply</h4>
    <p>Some suggest there are countless unseen universes with every possible setting, and we simply live in a lucky one. Nobody has ever observed another universe, and it may never be possible to. <b>It is an answer that needs more faith than the one it replaces.</b></p>
    <div class="ref">Background: Job 38:4–7 · Psalm 19:1 · Jeremiah 33:25. Hoyle, <i>Engineering and Science</i>, 1981.</div>`
},
{
  id:"j00tablets", stage:0, kind:"Comparison", title:"Two Accounts, Side by Side",
  sub:"Babylon's creation story and Genesis 1",
  prev:"Same part of the world. Same age, roughly. Not the same story at all.", thumb:"j00tablets",
  x:56, y:52, rot:-2, w:214,
  body:`
    <div class="plate-pair">
      <div class="plate">${SVG.j00tablets}<div class="cap">Click to enlarge. From the Bureau's plate.</div></div>
      <div class="plate">${SVG.e00tablet}<div class="cap">Click to enlarge. The tablet and the scroll, as the Bureau recorded them.</div></div>
    </div>
    <p>A common claim is that Genesis borrowed its creation story from older nations. The best-known candidate is the Babylonian <i>Enuma Elish</i>, written on seven clay tablets. The Bureau laid the two side by side.</p>
    <table class="ledger">
      <tr><th>Question</th><th>Babylon (Enuma Elish)</th><th>Genesis 1</th></tr>
      <tr><td>Who does the creating, and how many?</td><td>Many gods, born from the waters, quarrelling</td><td><b>One</b> God, alone, before anything else</td></tr>
      <tr><td>How is the world made?</td><td>The god <b>Marduk</b> kills the sea-goddess Tiamat in battle and splits her body into sky and earth</td><td>God speaks, and it is. No battle, no rival, no raw material.</td></tr>
      <tr><td>Sun, moon and stars</td><td>Gods to be worshipped</td><td>Lamps God hung in the sky, not even named — "the greater light" and "the lesser light"</td></tr>
      <tr><td>What is the world like?</td><td>The leftovers of a fight</td><td>"Good", seven times. Ordered, day by day.</td></tr>
      <tr><td>Why are people made?</td><td>From a dead god's blood, to do the gods' hard work for them</td><td>In God's own <b>image</b>, blessed, and given the earth to care for</td></tr>
    </table>
    <h4>Count the Creators</h4>
    <p>In Genesis 1, how many beings do the creating? Be careful how you answer: Genesis has <b>no gods</b> at all, only <b>God</b>, the one true God. That number is the first digit of the first lock.</p>
    <h4>What the Bureau draws from this</h4>
    <p>Two accounts from the same region can share words like "the deep" and "the waters". Borrowing would mean sharing the story. These do not. On almost every point that matters, <b>Genesis reads like a deliberate answer to the myths around it</b>: the sun is not a god, people are not slaves, and creation is not a battlefield.</p>
    <div class="ref">Background: Genesis 1:1–2:3 · Isaiah 45:18 · Psalm 33:6–9.</div>`
},
{
  id:"j00psalm", stage:0, kind:"Witness statement", title:"Statement — a Shepherd Who Looked Up",
  sub:"From the songs of David",
  prev:"“The heavens declare the glory of God.” Without a single word.",
  x:80, y:56, rot:4, w:206,
  body:`
    <div class="doc-body">
      <p>"I spent years outside at night with the sheep. You learn the sky. The same stars come up in the same order, season after season, without anyone pushing them.</p>
      <p><b>The heavens declare the glory of God. The expanse shows his handiwork.</b> Day after day they pour out speech, and night after night they display knowledge. There is no speech or language where their voice is not heard.</p>
      <p>The sun comes up like a bridegroom out of his room, and runs its course across the sky like a strong man running a race. Nothing is hidden from its heat."</p>
    </div>
    <h4>What the Bureau notices</h4>
    <ul>
      <li>David is not making a scientific claim. He is making a witness's claim: <b>what he saw looked made.</b></li>
      <li>He says the message needs no language. Anyone, anywhere, can read it.</li>
      <li>The sun runs <i>its course</i>. It is not a god in this song. It does what it was set to do.</li>
    </ul>
    <div class="ref">Psalm 19:1–6.</div>`
},

/* ---------------- STAGE 1 — released by the numbers lock ---------------- */
{
  id:"j00code", stage:1, kind:"Laboratory report", title:"The Code in the Cell",
  sub:"Field Chest B · what is written inside every living thing",
  prev:"Four letters. Three billion of them in you. Every code we know the source of came from a mind.", thumb:"j00code",
  x:28, y:26, rot:-3, w:214,
  body:`
    <div class="plate-pair">
      <div class="plate">${SVG.j00code}<div class="cap">Click to enlarge. From the Bureau's plate.</div></div>
      <div class="plate">${SVG.e00dna}<div class="cap">Click to enlarge. DNA drawn out of cells, spooled on a rod.</div></div>
    </div>
    <p>Inside almost every cell of your body is a molecule called DNA. It is not just a chemical. It is written information, and the cell reads it.</p>
    <table class="ledger">
      <tr><th>Feature</th><th>What it is</th></tr>
      <tr><td>The alphabet</td><td>Four chemical letters: A, C, G and T</td></tr>
      <tr><td>The length</td><td>About 3 billion letter-pairs in one human cell</td></tr>
      <tr><td>How it is read</td><td>In three-letter "words", each standing for one building block of a protein</td></tr>
      <tr><td>What it does</td><td>Gives the instructions to build and run a living body</td></tr>
      <tr><td>Copies</td><td>Checked and corrected as it is copied, by machinery that is itself built from the instructions</td></tr>
    </table>
    <h4>Why this matters</h4>
    <p>Chemistry explains why the letters stick together. It does not explain the <b>order</b> they come in, any more than the chemistry of ink explains the words in a book. The meaning is in the order.</p>
    <p>Every code whose origin we actually know — writing, music notation, computer programs, Morse — <b>came from a mind.</b> We have no example of meaningful code writing itself.</p>
    <h4>The question for "life by chance"</h4>
    <p>An explanation for life has to explain where this information came from. "Chance" is not an explanation of information. It is the name for having none.</p>
    <p class="margin-note">The word on the clerk's sheet for what DNA is has four letters. Hold on to it.</p>
    <div class="ref">Background: Psalm 139:13–16 · Job 10:8–12.</div>`
},
{
  id:"j00firstcell", stage:1, kind:"Bureau analysis", title:"The First Cell Problem",
  sub:"Field Chest B · the step every theory has to start from",
  prev:"Change over time needs something alive to change. Where did the first living thing come from?",
  x:58, y:24, rot:4, w:206,
  body:`
    <p>Students often hear "evolution" used to answer every question about life. The Bureau separates two different questions, because they are often run together.</p>
    <table class="ledger">
      <tr><th>Question</th><th>What it needs</th></tr>
      <tr><td>How do living things change over generations?</td><td>Living things that already reproduce and copy their instructions</td></tr>
      <tr><td>How did the first living thing appear?</td><td>Something that can do all of that <b>before</b> anything can be selected or passed on</td></tr>
    </table>
    <h4>What the record shows on the second question</h4>
    <ul>
      <li>In 1953 the Miller–Urey experiment ran sparks through a mixture of gases and made some of the building blocks of proteins. It did not make anything alive.</li>
      <li>The smallest known cells that live on their own carry several hundred genes, a membrane, a copying system and an energy system, all working at once.</li>
      <li>Natural selection only works on things that already reproduce. <b>It cannot be the cause of the first thing that reproduced.</b></li>
      <li>No laboratory has ever produced a living cell from non-living chemicals.</li>
    </ul>
    <p class="margin-note">Scientists are honest that the origin of life is unsolved. The Bureau's point is simple: a claim that life put itself together has to explain this step, and it has not.</p>
    <div class="ref">Background: Genesis 1:11–12, 20–25 · Acts 17:24–25.</div>`
},
{
  id:"j00workshop", stage:1, kind:"Field notes", title:"Field Notes on Design",
  sub:"Field Chest B · four things that work because everything works at once",
  prev:"A butterfly that finds a forest it has never seen. Trees that warn each other. Bees that draw maps.", thumb:"j00workshop",
  x:80, y:44, rot:-6, w:208,
  tour:{href:"../tours/design-hall.html", label:"🦋 Walk the Hall of Design",
        note:"A monarch's sun compass, trees that warn their neighbours, and the bees' dance, in paper cut-outs"},
  body:`
    <div class="plate-pair">
      <div class="plate">${SVG.j00workshop}<div class="cap">Click to enlarge. From the Bureau's plate.</div></div>
      <div class="plate">${SVG.e00wing}<div class="cap">Click to enlarge. A monarch wing and head, under the lens.</div></div>
    </div>
    <p>Field notes from four investigations. In each one, the ability only works if several parts are already in place together.</p>
    <h4>1. The <b>monarch</b> butterfly</h4>
    <p>Every autumn, monarchs in eastern North America fly up to about 4,000 km to a few mountain forests of fir trees in central Mexico. The ones that make the trip <b>have never been there</b>; their great-grandparents left in spring. They steer by the sun, and because the sun moves across the sky, they need a body clock to correct for the time of day. Researchers have found that clock in their antennae. Take the clock away and the compass fails.</p>
    <h4>2. Trees that warn each other</h4>
    <p>When some trees are attacked by insects, they release chemicals into the air, and nearby trees respond by building up their own defences before the insects arrive. Underground, fine fungal threads wrap around tree <b>roots</b> and link one tree to the next; researchers are still working out how much passes along them.</p>
    <h4>3. The honeybee's dance</h4>
    <p>A bee that finds flowers comes home and dances on the comb. The angle of her dance from straight up tells the others the direction of the flowers compared with the sun. How long she waggles tells them how far. Karl von Frisch won a Nobel Prize in 1973 for working this out.</p>
    <h4>4. The cell's own copying machine</h4>
    <p>The machinery that reads DNA is built from instructions written in DNA. Neither can work without the other already being there.</p>
    <p class="margin-note">A compass with no clock is useless. A dance with no one to read it is useless. Ask your team what "works only when every part is there" says about how it got there.</p>
    <div class="ref">Background: Job 12:7–10 · Proverbs 6:6–8 · Matthew 6:26–29.</div>`
},
{
  id:"j00objection", stage:1, kind:"Bureau note", title:"The Strongest Objection",
  sub:"Field Chest B · “then who made God?”",
  prev:"The question every good investigator asks next. It deserves a straight answer.",
  x:46, y:62, rot:3, w:210,
  body:`
    <p>If everything needs a maker, who made God? It is a fair question, and the Bureau takes it seriously.</p>
    <h4>Read the rule again</h4>
    <p>The rule in <b>The Rule of Causes</b> was not "everything has a cause". It was <b>"whatever begins to exist has a cause."</b> The universe began, so it needs one. A cause that stands outside time never began, so the question does not apply to it.</p>
    <table class="ledger">
      <tr><th>Option</th><th>Problem</th></tr>
      <tr><td>Causes go back for ever, each made by the one before</td><td>Then the chain never gets started, and nothing would be here</td></tr>
      <tr><td>The chain starts with nothing</td><td>Nothing cannot start anything</td></tr>
      <tr><td>The chain starts with something that never began</td><td>This is the only option that can work</td></tr>
    </table>
    <p>Everybody, believer or not, ends up with something that has always existed. The question is only whether it is a mindless universe that the evidence says had a beginning, or a Maker who did not.</p>
    <div class="ref">Background: Psalm 90:2 · Isaiah 40:28 · Revelation 1:8.</div>`
},

/* ---------------- STAGE 2 — released by the keyword lock ---------------- */
{
  id:"j00witness", stage:2, kind:"The account itself", title:"The Seven Days, As Written",
  sub:"Sealed Pouch C · Genesis 1:1 – 2:3",
  prev:"Form first, then fill. Six days of making, and one of rest.",
  x:26, y:28, rot:-3, w:212,
  body:`
    <p>Read Genesis 1 like an investigator and a pattern jumps out. The first three days make <b>spaces</b>. The next three days <b>fill</b> them.</p>
    <table class="ledger">
      <tr><th>Day</th><th>Formed</th><th>Day</th><th>Filled</th></tr>
      <tr><td>1</td><td>Light and dark</td><td>4</td><td>Sun, moon and stars</td></tr>
      <tr><td>2</td><td>Sky and sea</td><td>5</td><td>Birds and fish</td></tr>
      <tr><td>3</td><td>Dry land and plants</td><td>6</td><td>Animals, and people in God's image</td></tr>
      <tr><td colspan="4" style="text-align:center"><b>Day 7</b> — God rests. The work is finished.</td></tr>
    </table>
    <h4>What the Bureau notices</h4>
    <ul>
      <li>Every step happens because God <b>speaks</b>. Nothing is fought for or found.</li>
      <li>"It was good" comes again and again. At the end: "very good".</li>
      <li>Only people are made in God's image, and only people are spoken to directly.</li>
    </ul>
    <div class="ref">Genesis 1:1 – 2:3 · John 1:1–3.</div>`
},
{
  id:"j00signed", stage:2, kind:"Statement", title:"What Paul Said About the Evidence",
  sub:"Sealed Pouch C · a letter to the church in Rome",
  prev:"“Clearly seen, being perceived through the things that are made.”",
  x:56, y:30, rot:4, w:210,
  body:`
    <div class="doc-body">
      <p>"What is known of God is plain to them, because God has shown it to them. <b>For his invisible things — his eternal power and divine nature — have been clearly seen since the creation of the world, being perceived through the things that are made</b>, so that they are without excuse."</p>
    </div>
    <h4>What the Bureau draws from this</h4>
    <ul>
      <li>Paul's claim is the same as this case's: the work shows the worker. You can see his <b>power</b> and that he is God by looking at what he made.</li>
      <li>He does not say the evidence tells you everything about God. It tells you he is there and that he is powerful.</li>
      <li>The rest — who he is, what he is like, what he has done for us — he has to tell us himself. That is what the rest of the archive is for.</li>
    </ul>
    <div class="ref">Romans 1:19–20 · Acts 14:17 · Acts 17:24–28.</div>`
},
{
  id:"j00scientists", stage:2, kind:"Background file", title:"Who Else Read the Work This Way",
  sub:"Sealed Pouch C · scientists who studied creation as creation",
  prev:"The founders of modern science mostly believed they were studying something made.",
  x:78, y:60, rot:-5, w:210,
  body:`
    <p>A common idea is that science and belief in a Creator are enemies. Much of the history of science says otherwise.</p>
    <table class="ledger">
      <tr><th>Scientist</th><th>Known for</th><th>Belief</th></tr>
      <tr><td>Johannes Kepler (1571–1630)</td><td>The laws of how planets move</td><td>Saw his work as discovering the order God built into creation</td></tr>
      <tr><td>Robert Boyle (1627–1691)</td><td>A founder of modern chemistry</td><td>Devout Christian; left money for lectures defending the faith</td></tr>
      <tr><td>Isaac Newton (1643–1727)</td><td>Gravity and the laws of motion</td><td>Wrote more on the Bible than on physics</td></tr>
      <tr><td>Michael Faraday (1791–1867)</td><td>Electricity and magnetism</td><td>An elder in his church all his working life</td></tr>
      <tr><td>Georges Lemaître (1894–1966)</td><td>First proposed the universe expanded from a starting point</td><td>A Catholic priest</td></tr>
    </table>
    <p class="margin-note">Many of them expected the universe to make sense <b>because</b> they believed a mind had made it. A world made by a reasonable God would be a world worth investigating.</p>
    <div class="ref">Background: Proverbs 25:2 · Psalm 111:2.</div>`
},
{
  id:"j00faith", stage:2, kind:"Bureau analysis", title:"Where the Evidence Stops",
  sub:"Sealed Pouch C · what this file will and will not claim",
  prev:"Evidence can bring you to the door. It does not walk through it for you.",
  x:44, y:76, rot:2, w:212,
  body:`
    <p>A good investigator says exactly what the file proves and no more.</p>
    <h4>What the evidence supports</h4>
    <ul>
      <li>The universe had a beginning.</li>
      <li>Whatever began it stands outside space, time and matter, and is immensely powerful.</li>
      <li>Its settings are balanced in a way that looks chosen, not lucky.</li>
      <li>Life runs on written code, and nobody has shown how that code wrote itself.</li>
      <li>Genesis is not a borrowed myth; it answers the myths of its age.</li>
    </ul>
    <h4>What the evidence does not settle</h4>
    <ul>
      <li><b>How long creation took.</b> Christians who believe the Bible hold different views on the days of Genesis 1. This case does not decide that question.</li>
      <li>Who the Maker is, by name. The work shows that there is a Maker. To know him, he has to speak.</li>
    </ul>
    <div class="doc-body"><p>"<b>By faith we understand that the universe has been framed by the word of God</b>, so that what is seen has not been made out of things which are visible."</p></div>
    <p class="margin-note">The evidence points. Faith trusts the one it points to. Both are part of the answer, and neither does the other's job.</p>
    <div class="ref">Hebrews 11:3 · Hebrews 11:6 · Genesis 1:1.</div>`
}
];

const JM00_THEORIES = [
  {
    id:"eternal",
    title:"1. The universe has always been here",
    claim:"There was no beginning. The universe has simply always existed, so it never needed a maker.",
    answer:"j00beginning",
    verdict:"The survey closes it. Three separate kinds of measurement point the same way: the universe is spreading apart from a starting point, it is still faintly warm from that start, and it is running down in a way an infinitely old universe would already have finished. Scientists argue about many details, but the evidence that the universe had a beginning is about as solid as anything in the file — and a beginning is exactly what Genesis 1:1 says it had."
  },
  {
    id:"nothing",
    title:"2. It came from nothing, all by itself",
    claim:"Nothing was there, and then the universe appeared on its own. No cause needed.",
    answer:"j00cause",
    verdict:"The rule of causes closes it. Whatever begins to exist has a cause, and real nothing has no powers to cause anything. When people say 'nothing', they almost always mean a something — a field or a law — which still needs explaining. Whatever started space, time and matter has to stand outside all three: timeless, not made of matter, enormously powerful, and able to choose. That is a remarkable description of God, written long before anyone measured a galaxy."
  },
  {
    id:"luck",
    title:"3. The settings are just lucky",
    claim:"The numbers in physics happen to allow life. We got lucky, and that's all there is to it.",
    answer:"j00dials",
    verdict:"The dials close it. Gravity, the strong force, the electric force, the rate of expansion, the carbon energy level and the weights of the proton and neutron all sit inside narrow ranges that allow stars, chemistry and life. Even Fred Hoyle, who was not a believer, said it looked as if a superintellect had been at work. The only way to keep it as luck is to imagine countless other universes nobody has ever seen — which takes more faith, not less."
  },
  {
    id:"chance",
    title:"4. Life put itself together by chance",
    claim:"Given enough time, chemicals combined until something alive appeared. No designer required.",
    answer:"j00code",
    verdict:"The code closes it. Every living cell runs on written instructions — four letters, billions long, read in words and copied with error checking. Chemistry explains the ink, not the message. Every code whose origin we know came from a mind, and nobody has shown how the first one wrote itself. And natural selection cannot help with the first step, because it only works on things that already reproduce: the first living thing had to have its code before there was anything to select."
  },
  {
    id:"myth",
    title:"5. Genesis is a myth borrowed from older nations",
    claim:"The Bible's creation story was copied from Babylon, so it's just another ancient legend.",
    answer:"j00tablets",
    verdict:"The comparison closes it. Laid side by side, the Babylonian account has many quarrelling gods, a world made from a dead goddess, a sun that is worshipped and people made to be the gods' slaves. Genesis has one God, no battle, a sun that is just a lamp, a world called good, and people made in God's image. Sharing a few words is not sharing a story. Genesis reads like a deliberate answer to the myths around it, not a copy of one."
  }
];

const JM00_LOCKS = [
  {
    id:"l1", type:"number", code:"1336", len:4,
    wrong:"Not quite. Each digit comes from a different document already on your desk — check which one you have wrong.",
    name:"Field Chest B — the living evidence",
    blurb:"A four-digit lock. Each digit answers one question, and each question is answered by a document you already have. Read the counts carefully; every one of them is written into the file on purpose.",
    questions:[
      "In Genesis 1, how many beings do the creating? (There are no gods in Genesis, only God.)",
      "How many separate lines of evidence does the survey give for a beginning?",
      "The cause must stand outside how many things?",
      "How many dials are on the measurement sheet?"
    ],
    hints:[
      "The questions are in order, and every answer is a single digit. Question 1 is in Two Accounts, Side by Side.",
      "Question 2 is The Beginning, Measured. Question 3 is The Rule of Causes — count space, time and matter. Question 4 is The Dials."
    ],
    reward:"Field Chest B is open. The code in the cell, the first-cell problem, the field notes on design and the strongest objection are now on the desk — and three of the answers on the Maker's Sheet are in them."
  },
  {
    id:"l2", type:"word", code:"MAKER", len:5,
    wrong:"Not quite. The keyword is built on the Maker's Sheet — the 🧩 button at the top. Five numbered squares, collected in order.",
    name:"Sealed Pouch C — the name on the mark",
    blurb:"A five-letter keyword, written nowhere in the file. You build it on the Maker's Sheet. Every answer there is a word from a document you hold, and five squares carry a small number.",
    questions:[
      "Open the 🧩 Maker's Sheet from the top bar.",
      "Every answer is a word from a document on your desk.",
      "Five squares carry a small number, 1 to 5.",
      "Collect those five letters in number order. That is the keyword."
    ],
    hints:[
      "Three answers — the butterfly, what DNA is, and where the fungal threads join — are in Field Chest B, so open the first lock first.",
      "You are looking for the word for whoever leaves the mark on a made thing. Square 1 is the first letter of the butterfly."
    ],
    reward:"Sealed Pouch C is open. The seven days as written, what Paul said about the evidence, the scientists who read the work this way, and where the evidence stops are now on the desk."
  }
];

const JM00_CROSSWORD = {
  button:"🧩 Maker's sheet",
  title:"The Maker's Sheet",
  blurb:"Every answer is a word you can find in the documents on your desk. Five squares carry a small number — collect those five letters in number order and you have the keyword for the second lock. Three of the answers are in Field Chest B, so the first lock has to be open before you can finish it.",
  W:11, H:10,
  hidden:"MAKER",
  entries:[
    {n:2,d:"A",r:1,c:0,a:"GLOW",q:"The faint warmth left over from the beginning, still filling the sky"},
    {n:3,d:"A",r:1,c:5,a:"MARDUK",q:"The Babylonian god who builds the world out of a dead enemy"},
    {n:4,d:"A",r:3,c:1,a:"BEGINNING",q:"What all three lines of evidence point back to"},
    {n:8,d:"A",r:8,c:0,a:"ROOTS",q:"Where the fungal threads join one tree to the next"},
    {n:9,d:"A",r:9,c:6,a:"CAUSE",q:"What everything that begins to exist must have"},
    {n:1,d:"D",r:0,c:2,a:"CODE",q:"What DNA is: letters that carry instructions"},
    {n:3,d:"D",r:1,c:5,a:"MONARCH",q:"The butterfly that finds a Mexican forest it has never seen"},
    {n:5,d:"D",r:3,c:3,a:"GRAVITY",q:"Dial 1 — a little stronger or weaker and there are no long-lived stars"},
    {n:6,d:"D",r:3,c:7,a:"IMAGE",q:"What people are made in, in Genesis — not slaves for the gods"},
    {n:7,d:"D",r:3,c:9,a:"GENESIS",q:"The account that opens with one God and no battle"}
  ],
  marks:[
    {i:1,r:1,c:5},
    {i:2,r:5,c:3},
    {i:3,r:1,c:10},
    {i:4,r:4,c:9},
    {i:5,r:8,c:0}
  ]
};

const JM00_VERDICTS = [
  {id:"eternal", text:"The universe has always existed, so it never needed a maker."},
  {id:"nothing", text:"The universe came from nothing, by itself, with no cause."},
  {id:"luck",    text:"The settings of the universe are a lucky accident."},
  {id:"chance",  text:"Life assembled itself by chance from chemicals."},
  {id:"myth",    text:"Genesis is a myth borrowed from Babylon."},
  {id:"maker",   text:"The universe had a beginning, needs a cause beyond space and time, is set with care, and runs life on written code — it carries a maker's mark. “In the beginning, God created the heavens and the earth.”"}
];

const CASE_JM00 = {
  id:"jm00", code:"CASE JM-00", title:"The Maker's Mark",
  period:"In the beginning · the file before every other file", colour:"#2f4a6e", poster:"poster_jm00",
  teaser:"The first question in the archive, older than every other case. Five explanations for a world with no Maker — always here, out of nothing, lucky settings, life by chance, a borrowed myth. Examine the work, close all five, and decide whether it carries a maker's mark.",
  introSub:"Was it made, or did it just happen?",
  items:JM00_ITEMS, theories:JM00_THEORIES, locks:JM00_LOCKS, verdicts:JM00_VERDICTS,
  crossword:JM00_CROSSWORD,
  correct:"maker",
  boardTitle:"A World With No Maker?",
  boardIntro:"Five explanations for the world without a Creator. For each one, pin the <b>single</b> document that closes it. When all five are closed, the accusation form opens.",
  accusationIntro:"The universe began, its cause stands outside it, its settings are balanced, and life runs on written code. State what the file will actually support.",
  debrief:{
    lead:"Every explanation on the board tried to account for the world without a Maker, and every one ran into the evidence. The universe had a beginning. Whatever began it stands outside space, time and matter. Its settings sit in narrow ranges that allow life. Every cell runs on written code that nobody has shown writing itself. And Genesis is not a borrowed myth but an answer to the myths of its age. The work carries a maker's mark. The evidence can bring you that far; Hebrews 11:3 says the last step is taken by faith — trusting the one the evidence points to.",
    questions:[
      "Which of the five explanations did you think was strongest before you started? Which document closed it, and did it close it fairly?",
      "The Bureau says the evidence shows there is a Maker, but cannot tell you who he is by name. Why does it say that — and where in the Bible does he tell us?",
      "A monarch's compass is useless without its clock. Can you think of something in your own body that only works because several parts are there at once?",
      "Christians disagree about how long the days of Genesis 1 were. Why do you think the file chose not to decide that question — and does it change the main point?"
    ],
    refs:"Genesis 1:1–2:3 · Psalm 19:1–6 · Psalm 33:6–9 · Psalm 139:13–16 · Job 12:7–10 · Job 38:4–7 · Isaiah 40:26–28 · Isaiah 45:18 · John 1:1–3 · Acts 17:24–28 · Romans 1:19–20 · Colossians 1:16–17 · Hebrews 11:3"
  },
  teacher:{
    answers:"Lock 1 code <b>1336</b> (0 gods but 1 God creating in Genesis 1 · 3 lines of evidence for a beginning · 3 things the cause stands outside — space, time, matter · 6 dials). Lock 2 keyword <b>MAKER</b>, built on the Maker's Sheet crossword: the five numbered squares sit in MONARCH/MARDUK, GRAVITY, MARDUK, GENESIS and ROOTS. CODE, MONARCH and ROOTS are in Field Chest B.",
    pairs:"Always here → The Beginning, Measured; from nothing → The Rule of Causes; lucky settings → The Dials; life by chance → The Code in the Cell; borrowed myth → Two Accounts, Side by Side.",
    conclusion:"The universe had a beginning, needs a cause beyond space and time, is finely balanced, and runs life on written code; Genesis answers the myths of its age. The work carries a maker's mark, and Hebrews 11:3 says we understand creation by faith.",
    prompts:"\"Does a window break with nothing hitting it?\" · \"If it has always been here, why hasn't it run down?\" · \"Which is the code — the ink or the order of the letters?\" · \"Is sharing a word the same as sharing a story?\"",
    extra:"<b>What this case does and does not argue.</b> It argues from points that hold up when students meet them again later: the universe had a beginning, the fine-tuning of physical constants, the information in DNA, the unsolved origin of life, and the contrast between Genesis and the <i>Enuma Elish</i>. It deliberately does not claim that science has disproved the Big Bang or evolution, and it does not decide the age of the earth — Christians who hold to the authority of Scripture take different views on the days of Genesis 1, and the file says so in <i>Where the Evidence Stops</i>. If your school teaches a particular view, that document is the natural place to add it in discussion.<br><br><b>The Big Bang.</b> Students may be surprised that the case uses the evidence for a beginning in support of Genesis. Many Christian thinkers do; the idea was first proposed by a priest, and it was resisted at first partly because it sounded like 'In the beginning'.<br><br><b>Running it.</b> The Hall of Design (on <i>Field Notes on Design</i>, after the first lock) is a good whole-class stop: the monarch's clock-and-compass exhibit makes the 'every part at once' point quickly."
  }
};

registerCase(CASE_JM00);
