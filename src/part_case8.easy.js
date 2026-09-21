"use strict";
/* ============================================================
   CASE JM-05 — THE WRITING ON THE WALL — EASY READING LEVEL

   Wording only. Same evidence, same reasoning, same lock codes
   (4032 and WEIGHED) and the same weights on the balance.
   Anything not named here stays as it is.
   ============================================================ */

const EASY_JM05 = {

teaser:"A thousand important guests at a feast, and a hand that writes four words on the wall and stops. The cleverest scholars in the empire can say every word out loud and still cannot tell the king what any of it means. By morning he is dead.",
introSub:"Four words. A thousand witnesses. Nobody can explain it.",
boardTitle:"Why Nobody Could Read It",
boardIntro:"Five explanations have been offered. For each one, pin the <b>one</b> document that makes it impossible. When all five are closed, you can make your accusation.",
accusationIntro:"Nobody painted it, the language was not the problem, the hall was not imagining it, the scholars were not hiding an answer, and the man who read it turned down the reward before he spoke. Say what the file can actually back up.",

items:{

j05letter:{
  prev:"Four words on a wall that the cleverest men in the empire could not explain.",
  body:`
    <p><b>To the investigating team,</b></p>
    <p>A thousand important guests are at a feast in Babylon. Halfway through the evening the king sends for the gold and silver cups his grandfather took out of the temple in Jerusalem, and the whole hall drinks out of them.</p>
    <p>Then, high on the wall opposite the lampstand, <b>a hand appears and writes four words</b>, and stops. The king can see it. So can everybody else.</p>
    <p>He sends for every magician, star-reader and scholar in Babylon — the best collection of learning anywhere in the world at that time — and offers a fortune and third place in the kingdom to anyone who can explain it. <b>Not one of them can.</b> By morning the king is dead and the city belongs to somebody else.</p>
    <h4>Your job</h4>
    <p>Five explanations have been sent to us. Close the four the documents will not carry. Take real care with the third one — it is the cleverest, and it is wrong for a reason worth finding out.</p>
    <h4>How the file works</h4>
    <ul>
      <li>Everything on the desk now is yours. The table of weights looks boring. Read it anyway.</li>
      <li>Two parts of the file are <b>locked</b>. Both codes are hidden in documents you already have.</li>
      <li>The second lock opens on the <b>balance scales</b> — the ⚖ button at the top — once the first lock is open.</li>
      <li>When you have everything, go to the <b>Pinboard</b>.</li>
    </ul>
    <p class="margin-note">Four words. Every scribe in the hall could say them out loud. Not one could say what they meant.</p>
    <div class="sig">Mordecai ben Jair</div>
    <div class="small" style="color:#5b4a35">Case Supervisor</div>
    <div class="ref">This case is put together from Daniel 5, with background from 2 Kings 25:8–15 and Jeremiah 52:17–19.</div>`
},

j05wall:{
  prev:"Writing four metres up, on smooth plaster, with nothing underneath it.",
  body:`
    <div class="plate">${SVG.j05wall}<div class="cap">Click the plate to make it bigger.</div></div>
    <p>The wall was checked the same night, while the hall was still exactly as it had been left.</p>
    <table class="ledger">
      <tr><th>Checked</th><th>Found</th></tr>
      <tr><td>How high up the writing is</td><td>About four metres — <b>far higher than a man can reach</b></td></tr>
      <tr><td>Ladder marks, stool marks or scaffold holes in the floor</td><td class="n"><b>none</b></td></tr>
      <tr><td>Paint, chalk or charcoal anywhere in the hall</td><td class="n"><b>none</b></td></tr>
      <tr><td>Drips, runs or splashes below the writing</td><td class="n"><b>none</b></td></tr>
      <tr><td>Damage or scratching to the plaster</td><td class="n"><b>none</b> — the surface is not broken</td></tr>
      <tr><td>Number of words written</td><td class="n"><b>4</b></td></tr>
      <tr><td>Where it is, compared with the lampstand</td><td>Straight above it, <b>in the one part of the wall everybody could see</b></td></tr>
    </table>
    <h4>What the surveyor wanted to say</h4>
    <p>"If a man painted this, he did it four metres up, in a hall with a thousand people in it, with no ladder, leaving no marks on the floor, no paint anywhere in the building, and not one drip on the plaster underneath.</p>
    <p>And he picked the single most obvious spot in the room to do it in."</p>
    <div class="ref">Background: Daniel 5:5 — "opposite the lampstand, on the plaster of the wall".</div>`
},

j05language:{
  prev:"Every scribe there could read the letters. Not one could say what they meant.",
  body:`
    <p>This is the page the whole case turns on, and people get it wrong all the time, so read it twice.</p>
    <table class="ledger">
      <tr><th>Question</th><th>Answer</th></tr>
      <tr><td>What letters?</td><td>The ordinary writing of the empire</td></tr>
      <tr><td>What language?</td><td>Aramaic — <b>the everyday language of the court</b></td></tr>
      <tr><td>Were the words strange or unknown?</td><td><b>No.</b> They are ordinary shopping and business words — units of weight</td></tr>
      <tr><td>Could the scholars say them out loud?</td><td><b>Yes.</b> Any clerk in the treasury uses these words every day</td></tr>
      <tr><td>Wise men who explained it</td><td class="n"><b>0</b></td></tr>
    </table>
    <h4>So what was the problem?</h4>
    <p>Not the letters. <b>The meaning.</b> Four weights, written on a wall, in a row. It is like a hand writing <i>KILOGRAM KILOGRAM GRAM HALF-KILO</i> above a feast — you can read every word out loud and still have absolutely nothing to say about what it is telling you.</p>
    <p class="margin-note">"Nobody could read it" is what everybody remembers. What the record actually says is that nobody could <b>explain what it meant</b>. Those are two different failures, and only one of them is possible for a room full of professional scholars.</p>
    <div class="ref">Background: Daniel 5:8 — "they could not read the writing, nor make known to the king the interpretation".</div>`
},

j05weights:{
  prev:"A mina, a shekel, a half-mina. Boring, ordinary, and the whole answer.",
  body:`
    <div class="plate">${SVG.j05weights}<div class="cap">Click to make it bigger. The treasury scales and the stones that go with them.</div></div>
    <p>Every market and every treasury in Babylon uses these units. There is nothing mysterious about any of them.</p>
    <table class="ledger">
      <tr><th>Unit</th><th>Written as</th><th>Worth, in shekels</th></tr>
      <tr><td>Mina</td><td><b>MENE</b></td><td class="n"><b>60</b></td></tr>
      <tr><td>Shekel</td><td><b>TEKEL</b></td><td class="n"><b>1</b></td></tr>
      <tr><td>Half a mina, a "split"</td><td><b>PERES</b> (more than one: <b>PARSIN</b>)</td><td class="n"><b>30</b></td></tr>
    </table>
    <h4>The stones in the treasury box</h4>
    <p>You build a weight out of a set of stones: <b>30, 20, 10, 5, 2 and 1 shekel</b>, used together. A clerk weighing out a mina puts sixty shekels' worth of stone on the pan, made up however he likes.</p>
    <p class="margin-note">Take this table to the <b>balance scales</b> — the ⚖ button at the top. Weigh the four words one at a time, and see what a hand wrote on that wall.</p>
    <div class="ref">Background: the weights behind Daniel 5:25–28. Sixty shekels to the mina is the standard Babylonian count.</div>`
},

j05copy:{
  prev:"Four words — and the first one is written twice.",
  body:`
    <p>Two court scribes copied the writing down separately before the hall was cleared. The two copies match exactly.</p>
    <table class="ledger">
      <tr><th>Position</th><th>Word</th></tr>
      <tr><td>1</td><td><b>MENE</b></td></tr>
      <tr><td>2</td><td><b>MENE</b></td></tr>
      <tr><td>3</td><td><b>TEKEL</b></td></tr>
      <tr><td>4</td><td><b>PARSIN</b></td></tr>
    </table>
    <h4>The scribes' own notes</h4>
    <ul>
      <li>Four words. No more, no fewer, and no punctuation in between.</li>
      <li><b>The first word appears twice</b>, exactly the same both times. Both scribes checked it against the wall twice, because it looked like a copying mistake and it was not.</li>
      <li>The hand stopped. It did not fade, smudge, or carry on.</li>
    </ul>
    <p class="margin-note">Saying something twice is not an accident. In the language of the court it means <i>this is important</i> — the way a messenger says a thing twice so nobody can claim afterwards they did not hear it.</p>
    <div class="ref">Background: Daniel 5:25.</div>`
},

j05witness:{
  prev:"Three tables, three views of the same wall, one account.",
  body:`
    <div class="doc-body">
      <h4>A noble at the top table, next to the king</h4>
      <p>"I was watching the king's face before I looked at the wall. He went the colour of the plaster. His knees knocked together — I am not being dramatic, I heard it. Then I turned round and saw what he was looking at."</p>
      <h4>A guest at a side table, halfway down the hall</h4>
      <p>"I saw the fingers of a hand and I saw them move. I could not read what was being written from where I was sitting, but I could see that <b>something was being written</b>, and there was nobody at all on that side of the hall."</p>
      <h4>A cupbearer at the far end</h4>
      <p>"The noise stopped. A thousand people stopped talking in about the time it takes to take a breath, and that is what made me look up. The racket afterwards was loud enough to bring the queen down from her own rooms, and she had not been at the feast at all."</p>
      <h4>Why this closes an explanation</h4>
      <p>One explanation says the king had drunk too much and imagined it. Three witnesses at three different distances, one of them completely sober and on duty, all describe the same thing — and the queen came down <b>because of the noise the whole hall was making</b>. A thousand people do not go silent because one man is seeing things.</p>
    </div>
    <div class="ref">Background: Daniel 5:5–10.</div>`
},

j05vessels:{
  prev:"A thousand important guests, and the temple cups used as wine glasses.",
  body:`
    <div class="plate">${SVG.j05vessels}<div class="cap">Click to make it bigger. The cups as they stood when the hall emptied.</div></div>
    <table class="ledger">
      <tr><th>Detail</th><th>Record</th></tr>
      <tr><td>Guests</td><td><b>A thousand</b> of the king's lords, with his wives</td></tr>
      <tr><td>Cups sent for</td><td>The gold and silver taken from the temple in Jerusalem</td></tr>
      <tr><td>Who took them, and when</td><td>His grandfather Nebuchadnezzar, about seventy years earlier</td></tr>
      <tr><td>Where they had been since</td><td>In the treasury, not used</td></tr>
      <tr><td>What was done with them that night</td><td><b>Drunk from</b>, by the king, his lords and his wives</td></tr>
      <tr><td>What they praised while they drank</td><td>Gods made of gold, silver, bronze, iron, wood and stone</td></tr>
    </table>
    <h4>Our note</h4>
    <p>Nothing in that hall happened by accident, and this least of all. There were a thousand ordinary gold cups in Babylon. <b>These particular cups were sent for on purpose.</b> It was a deliberate insult and everybody in the room understood it as one.</p>
    <p>Keep the order in mind: the cups were sent for, the hall drank from them and praised gods made of metal and stone — <b>and then</b> the hand appeared.</p>
    <div class="ref">Background: Daniel 5:1–4 · 2 Kings 25:8–15.</div>`
},

j05proclaim:{
  prev:"Purple robes, a gold chain, and third place in the kingdom.",
  body:`
    <p>Shouted out in the hall while the writing was still on the wall.</p>
    <div class="stamp">PROCLAMATION</div>
    <table class="ledger">
      <tr><th>Offered</th><th>To who</th></tr>
      <tr><td>Purple clothes</td><td rowspan="3"><b>Anyone who reads this writing and tells me what it means</b></td></tr>
      <tr><td>A gold chain round his neck</td></tr>
      <tr><td><b>Third place in the kingdom</b></td></tr>
    </table>
    <h4>What that last one means</h4>
    <p>Not just a title. <b>Third most powerful person in the empire</b>, behind the king and his father — a real job with real power, offered out loud in front of a thousand witnesses, to absolutely anybody who could come up with an answer.</p>
    <p class="margin-note">Notice the number. It is part of the first lock, and it is also the reason one of the explanations on your board cannot stand up.</p>
    <div class="ref">Background: Daniel 5:7 · 5:16.</div>`
},

j05court:{
  prev:"Every scholar in Babylon. Not one answer between them.",
  body:`
    <p>The king's officers went out and fetched in the wise men of Babylon — the entire learning of the empire.</p>
    <table class="ledger">
      <tr><th>Called in</th><th>Result</th></tr>
      <tr><td>Magicians</td><td>No answer given</td></tr>
      <tr><td>Star-readers</td><td>No answer given</td></tr>
      <tr><td>Fortune tellers</td><td>No answer given</td></tr>
      <tr><td>Total who could explain it</td><td class="n"><b>0</b></td></tr>
      <tr><td>Times the reward was offered</td><td class="n">2 — to the wise men, and later again to Daniel</td></tr>
      <tr><td>Anyone who asked for more time, or gave a partial answer</td><td class="n"><b>nobody</b></td></tr>
    </table>
    <h4>Why "they knew and were too scared to say" does not work</h4>
    <p>It is a fair suspicion — telling a king his kingdom is finished is famously bad for your health, and courts do go quiet.</p>
    <p>It fails because of the size of the reward and the size of the room. <b>Third place in the empire was on offer, publicly, in front of a thousand witnesses.</b> One frightened man might keep quiet. A hall full of rival scholars, each of whom would love to see the others fail, does not all keep quiet together when that is the prize. And the king's reaction to their silence was not "you are hiding something" — it was terror, because he could see they really did have nothing.</p>
    <div class="ref">Background: Daniel 5:7–9.</div>`
},

j05queen:{
  prev:"She came in because of the noise, and she remembered a man nobody else did.",
  body:`
    <div class="doc-body">
      <p>"I was not at the feast. I came down because of the noise the hall was making — you could hear it through the palace.</p>
      <p>I found the king with all the colour gone out of his face, and his lords standing round him saying nothing, which is not something I have seen before.</p>
      <p>So I told him what nobody in that room was old enough to remember. <b>There is a man in your kingdom</b> who has the spirit of the holy gods in him. In your grandfather's day, light and understanding and wisdom were found in him, and your grandfather put him in charge of all the wise men.</p>
      <p>His name is Daniel. <b>My husband's grandfather gave him the name Belteshazzar.</b> Send for him and he will tell you what it means."</p>
      <div class="sig">the queen</div>
      <h4>What we notice</h4>
      <ul>
        <li>She had <b>nothing to do with the feast</b> and no reason to get involved. She came because of a racket she could hear from another part of the palace.</li>
        <li>The man she names has no job at court. He is not in the room, he was not sent for, and he is not on any list of the king's advisers.</li>
        <li>She has to explain who he is. <b>The court had forgotten him.</b></li>
      </ul>
    </div>
    <div class="ref">Background: Daniel 5:10–12.</div>`
},

j05daniel:{
  prev:"Eighty years old, out of a job, and not at the feast.",
  body:`
    <p>Our file on the man the queen named, as far as we can put it together.</p>
    <table class="ledger">
      <tr><th>Detail</th><th>Record</th></tr>
      <tr><td>Brought to Babylon</td><td>As a young prisoner from Jerusalem, about 65 years earlier</td></tr>
      <tr><td>Highest job he ever held</td><td>Head of the wise men, under Nebuchadnezzar</td></tr>
      <tr><td>Job under this king</td><td class="n"><b>none</b></td></tr>
      <tr><td>On the guest list for the feast</td><td class="n"><b>no</b></td></tr>
      <tr><td>Among the wise men called in</td><td class="n"><b>no</b> — nobody thought of him</td></tr>
      <tr><td>Roughly how old</td><td>Over eighty</td></tr>
      <tr><td>How he came to be sent for</td><td><b>The queen remembered him.</b> Nobody else did.</td></tr>
    </table>
    <h4>Why this matters to the board</h4>
    <p>One explanation says Daniel set the whole thing up to get his old job back. Now put that next to this file. He was not in the hall. He was not on the list of people to ask. <b>He was only sent for because a woman who was not even at the feast came downstairs and remembered a name from two kings ago.</b> That is an awful lot of your plan to leave in somebody else's hands.</p>
    <div class="ref">Background: Daniel 5:11–13 · Daniel 1:1–7 · Daniel 2:48.</div>`
},

j05refusal:{
  prev:"“Keep your presents, and give your rewards to somebody else.”",
  body:`
    <div class="doc-body">
      <p>Daniel was brought in and the offer was made to him personally: purple robes, a gold chain, and third place in the kingdom.</p>
      <div class="stamp">RECORDED IN OPEN COURT</div>
      <p style="font-size:18px">"<b>Keep your presents for yourself, and give your rewards to somebody else. But I will read the writing to the king, and tell him what it means.</b>"</p>
      <h4>Why this closes the last explanation</h4>
      <ul>
        <li>He said no to the reward <b>before</b> he read the wall. If the whole point was getting a job, that is exactly the wrong moment to say that.</li>
        <li>He then told the king, at length and to his face, that he had learned nothing from what happened to his grandfather, that he had set himself up against the God of heaven, and that his kingdom was finished. <b>A man after a promotion does not start like that.</b></li>
        <li>He was given the purple and the chain anyway, by a king who lived a few more hours.</li>
      </ul>
      <p class="margin-note">He turned down the reward, delivered the worst news in the empire, and was promoted to third place in a kingdom that ended that night. It is hard to call that a successful career move.</p>
    </div>
    <div class="ref">Background: Daniel 5:17–23 · 5:29.</div>`
},

j05reading:{
  prev:"Counted. Weighed. Split in two.",
  body:`
    <p>Having turned down the reward, Daniel read the wall.</p>
    <table class="ledger">
      <tr><th>Word</th><th>As a weight</th><th>As a verdict</th></tr>
      <tr><td><b>MENE</b></td><td>a mina — 60 shekels</td><td><b>Counted.</b> God has counted the days of your kingdom and finished it.</td></tr>
      <tr><td><b>MENE</b></td><td>a mina, again</td><td>Said twice, so nobody can argue with it.</td></tr>
      <tr><td><b>TEKEL</b></td><td>a shekel — 1</td><td><b>Weighed.</b> You have been weighed on the scales and you are not heavy enough.</td></tr>
      <tr><td><b>PARSIN</b></td><td>half-minas — splits</td><td><b>Split.</b> Your kingdom is split up and given to the Medes and Persians.</td></tr>
    </table>
    <h4>Why nobody in that hall could do this</h4>
    <p>Every scholar there could read four weights. What none of them could do was hear each weight as a <b>doing word</b> — counted, weighed, split — and see that the person being counted, weighed and split was the king.</p>
    <p>And there is a second layer the scribes missed. <b>PARSIN</b> is almost exactly the word <b>PARAS</b>, which means Persia. The wall says <i>split</i> and it says <i>Persia</i> at the same time.</p>
    <p class="margin-note">The words were never hidden. They were sitting in plain sight, in the everyday language of the treasury, on the wall of a hall full of people who used those words every day at work.</p>
    <div class="ref">Background: Daniel 5:24–28.</div>`
},

j05night:{
  prev:"The same night. Not a war, not a siege — that night.",
  body:`
    <table class="ledger">
      <tr><th>Event</th><th>Record</th></tr>
      <tr><td>Daniel dressed in purple, given the chain and third place</td><td>the same evening</td></tr>
      <tr><td>Belshazzar the king killed</td><td><b>that night</b></td></tr>
      <tr><td>The kingdom taken over</td><td>By Darius the Mede, about sixty-two years old</td></tr>
      <tr><td>Time between the writing and the fall</td><td><b>A few hours</b></td></tr>
      <tr><td>Siege, street fighting or long resistance</td><td class="n"><b>none in this account</b></td></tr>
    </table>
    <h4>Why we keep the timing on its own page</h4>
    <p>Because it is the part that is hardest to explain away. Saying a kingdom will end one day is cheap; every empire ends eventually, so a patient prophet is bound to be right in the end.</p>
    <p><b>This one had a deadline of a few hours</b>, was given in front of a thousand witnesses, was written up beforehand on a wall nobody could reach, and named who would take over. There is not much room in that for a lucky guess.</p>
    <div class="ref">Background: Daniel 5:29–31.</div>`
},

j05whyvessels:{
  prev:"The cups were the charge. The wall was the sentence.",
  body:`
    <p>Students always ask why a hand appeared at <i>this</i> feast, when Babylon had been holding feasts for seventy years. The answer is in the list of cups, and Daniel says it to the king's face.</p>
    <h4>The charge, in his words</h4>
    <ul>
      <li>Your grandfather was brought right down until he learned that Heaven rules — <b>and you knew all about that.</b></li>
      <li>You have set yourself up against the Lord of heaven.</li>
      <li>You sent for <b>the cups from his house</b> and drank wine out of them, you and your lords and your wives.</li>
      <li>And you praised gods made of gold, silver, bronze, iron, wood and stone — <b>which cannot see, or hear, or know anything</b>.</li>
      <li>The God who holds your very breath in his hand, you have not honoured at all.</li>
    </ul>
    <h4>Why we think the last line is the sharpest</h4>
    <p>He praises gods that cannot see or hear — and a hand writes on the wall right in front of him. The whole point of those cups was that they were <b>trophies</b>: proof that the God of the people they were taken from had lost. The reply arrives in the one way it could not be ignored, in the room where the boast was made, in the middle of the boast.</p>
    <p class="margin-note">The cups were not just a detail of the story. They were the charge sheet.</p>
    <div class="ref">Background: Daniel 5:18–23.</div>`
},

j05why:{
  prev:"The hardest thing to see is the thing you use every day.",
  body:`
    <p>Set out plainly, because this is the idea from this case you can use everywhere else.</p>
    <h4>They did not fail because they did not know enough</h4>
    <p>The men in that hall were the best-trained scholars alive. They could read the letters, they knew the language, and they used those four words at work every day. <b>No extra learning would have helped them</b>, which is why bringing in more of them changed nothing.</p>
    <h4>They failed because of the question they were asking</h4>
    <p>They were looking at four weights and asking <i>what do these weights mean?</i> — a question with no answer. The right question was <i>what if these are not weights at all, but what you DO with a weight?</i> Count it. Weigh it. Split it.</p>
    <p>Daniel's advantage was not a better dictionary. It was that he had spent seventy years expecting the God of Israel to have something to say — so he was reading the wall as a message from somebody, and they were reading it as a puzzle from nobody.</p>
    <h4>What the file does and does not claim</h4>
    <p>It closes the ordinary explanations: nobody painted it, the language was not the problem, the hall was not imagining it, the scholars were not hiding an answer, and the man who read it turned down the money before he spoke. <b>What is left is a message, in ordinary words, that needed somebody willing to hear it as one.</b></p>
    <p class="margin-note">Ask your team the honest version of this: how often is the thing you cannot work out sitting right in front of you, in words you already know?</p>
    <div class="ref">Background: Daniel 5:8 · 5:11–12 · compare Daniel 2:27–28.</div>`
}

},

theories:{
  painted:{
    title:"1. An enemy painted it as a trick",
    claim:"Somebody who wanted the king rattled would find a message on the wall a very good way to do it.",
    verdict:"The wall report proves this wrong. The writing is four metres up, higher than a man can reach, and there are no ladder marks, stool marks or scaffold holes anywhere on the floor underneath. There is no paint, chalk or charcoal in the building, no drips or splashes below the letters, and the plaster is not broken or scratched. On top of all that, it was done in the most obvious spot in a hall with a thousand people in it."
  },
  afraid:{
    title:"2. The wise men could read it and were too scared to say",
    claim:"Telling a king his kingdom is finished is a good way to die. They understood it perfectly and kept quiet.",
    verdict:"The court record proves this wrong. Purple robes, a gold chain and <b>third place in the kingdom</b> were offered out loud, in front of a thousand witnesses, to anybody at all who could give an answer. One frightened man might keep quiet. A hall full of rival scholars all competing for that prize does not keep quiet together. Not one of them asked for more time or gave a partial answer — and the king's reaction to the silence was terror, not suspicion."
  },
  language:{
    title:"3. It was in a language nobody there knew",
    claim:"Strange letters, or a foreign language, would beat even the best scholars in the empire.",
    verdict:"The language note proves this wrong — and this is the cleverest wrong answer in the file. The letters were the ordinary writing of the empire and the language was Aramaic, the everyday language of the court. The four words are ordinary business words that any treasury clerk used every day. They could all say them out loud perfectly. What they could not do was say what they <i>meant</i>, and that is a completely different kind of failure."
  },
  drink:{
    title:"4. The king imagined it because he had been drinking",
    claim:"A man who has been drinking all night, in a hall full of lamplight and shadows, saw something that was not there.",
    verdict:"The witness statements prove this wrong. Three guests at three different distances describe the same thing, including a cupbearer on duty at the far end who noticed a thousand people go silent within a single breath. The queen was not at the feast at all and came down from her own rooms <b>because of the racket</b>. A hall does not go silent, then get loud enough to be heard across a palace, because one man is seeing things."
  },
  daniel:{
    title:"5. Daniel set it up to get a job",
    claim:"An old man who has been pushed out arranges a crisis only he can solve, and walks away third in the kingdom.",
    verdict:"The refusal proves this wrong. He turned down the purple, the chain and third place <b>before he read a single word</b> — exactly the wrong moment to do that if a job was the point. He then told the king to his face that he had learned nothing, had set himself against the God of heaven, and was finished. He was also not at the feast, not on the list of advisers, and was only sent for because the queen happened to remember a name from two kings earlier."
  }
},

locks:{
  l1:{
    wrong:"Not quite. Each digit comes from a different document — one of your four is wrong.",
    name:"Field Chest B — the court papers",
    blurb:"A four-digit lock. Each digit answers one question, and each question is answered by a different document already on your desk. One of the answers is zero.",
    questions:[
      "How many words were written on the wall?",
      "How many of the king's wise men could explain it?",
      "What place in the kingdom was offered to whoever could read it?",
      "How many times is the first word written?"
    ],
    hints:[
      "The questions are in order. Question one gives the first digit. Every answer is a single digit.",
      "Question 1 is in the wall report. Question 2 is in the language note. Question 3 is in the king's proclamation. Question 4 is in the scribes' copy."
    ],
    reward:"Field Chest B is open. The court record of the offer, the queen's statement, Daniel's file and the record of his refusal are now on the desk. The ⚖ balance at the top is now working."
  },
  l2:{
    wrong:"Not quite. Put the four words on the balance — the ⚖ button at the top — and look at what the middle one is telling you to do.",
    name:"Sealed Pouch C — the verdict",
    blurb:"A seven-letter keyword. The four words on the wall are four weights, and the table of weights on your desk gives you every value. Balance each one in turn on the scales, then ask what all four have in common — not as things, but as actions.",
    questions:[
      "Open the ⚖ balance from the top bar.",
      "Weigh each of the four words in turn, using the stones in the treasury box.",
      "A mina is sixty shekels. A shekel is one. Half a mina is thirty.",
      "Four weights in a row. What is the one thing you ever actually do with a weight?"
    ],
    hints:[
      "Start with MENE. It is a mina, which the table of weights says is sixty shekels — make sixty out of the stones in the box, however you like.",
      "MENE again (sixty), then TEKEL (one shekel), then PARSIN, which is half a mina — thirty."
    ],
    reward:"Sealed Pouch C is open. The reading of the words, the record of the night the city fell, our note about the cups and our analysis of why nobody could read it are now on the desk."
  }
},

scales:{
  title:"The Balance",
  blurb:"Four words. Every one of them is a unit of weight, and the <b>Table of Weights</b> on your desk gives all three values. Put stones on the pan until the beam sits level, one word at a time — then look at all four of them together.",
  rounds:{
    r1:{prompt:"The first word on the wall. The table of weights says a mina is sixty shekels — build sixty out of the stones in the box, however you like.",
        note:"Sixty shekels, balanced."},
    r2:{prompt:"The same word again. The scribes checked this twice against the wall because it looked like a copying mistake, and it was not. Weigh it again.",
        note:"Sixty shekels again — the same weight, said twice."},
    r3:{prompt:"The third word. A shekel is the unit itself: one.",
        note:"One shekel. The smallest weight in the box, and the heaviest word on the wall."},
    r4:{prompt:"The last word. A peres is half a mina — and PARSIN just means more than one of them. Weigh one.",
        note:"Thirty shekels: a mina cut in two."}
  },
  reveal:{
    lead:"Sixty, sixty, one, thirty. Four weights in a row, and every scholar in Babylon could have told you that much — which is exactly as far as they got. Now ask the question none of them asked. You do not admire a weight, or store it, or read it. You put something in the other pan and find out what it comes to. Counted, and counted again. Weighed. Split. The middle word names what was really going on in that hall.",
    caption:"The words were never hidden. They were sitting in plain sight, in the everyday language of the treasury, in front of a thousand people who used them at work every day."
  }
},

verdicts:{
  painted: {text:"An enemy painted it on the wall to rattle the king."},
  afraid:  {text:"The wise men could read it perfectly well and were too scared to say so."},
  language:{text:"It was written in a language or a script nobody in the hall knew."},
  drink:   {text:"The king had been drinking and imagined the whole thing."},
  daniel:  {text:"Daniel set it up to get himself back into a job."},
  verdict: {text:"The writing was a verdict on the kingdom, in four ordinary words that everybody could read and nobody would hear — and it was carried out before morning."}
},

debrief:{
  lead:"Four ordinary business words, in the everyday language of the court, four metres up a wall nobody could reach, above the one lampstand everybody could see by. The scholars failed not because the writing was hard, but because they were asking what four weights <i>mean</i> — and the answer was in what you do with a weight. Counted. Weighed. Split. It was a verdict, delivered in the middle of a boast made with stolen temple cups, and it was carried out that night.",
  questions:[
    "Every scholar in the room could read those words. Why is the thing right in front of you sometimes the hardest thing to see — and what would have had to change for one of them to get it?",
    "The king already knew what had happened to his grandfather. Does knowing something make any difference if you have decided it does not apply to you?",
    "Daniel turned down the reward before he read the wall, and then delivered the worst news in the empire. What does that cost him, and what does it get him?",
    "The cups had sat unused in a treasury for seventy years. Why do you think this feast was the moment, and not any of the hundreds before it?"
  ]
}

};

registerEasy("jm05", EASY_JM05);
