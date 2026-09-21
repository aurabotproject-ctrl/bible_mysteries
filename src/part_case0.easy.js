"use strict";
/* ============================================================
   CASE JM-01 — THE RANSOM — EASY READING LEVEL

   Wording only. Same evidence, same reasoning, same lock codes
   (1030 and GRACE). Anything not named here stays as it is.

   The rule for this one is the same as for every other easy pack,
   and it matters more here than anywhere: nothing is left out and
   nothing is softened. Shorter sentences, everyday words, every
   fact and every step of the argument kept.
   ============================================================ */

const EASY_JM01 = {

teaser:"The oldest file we have, and the only one with your name in it. A debt that starts in a garden, a book where every payment anyone ever offered was handed back, and one page marked PAID IN FULL — written by somebody who did not owe a thing.",
introSub:"The debt is real. The payment is real. What is left is what you do about it.",
boardTitle:"How the Debt Gets Cleared",
boardIntro:"Five ways have been offered, and people you know believe all five of them. For each one, pin the <b>one</b> document that makes it impossible. When all five are closed, you can make your accusation.",
accusationIntro:"The debt is real, nothing we offered was ever accepted, and the page is marked paid by somebody who owed nothing. Say what the file can actually back up.",

items:{

j01letter:{
  prev:"The oldest file we have. Every other case belongs to somebody else. This one has your name in it.",
  body:`
    <p><b>To the investigating team,</b></p>
    <p>Every case in this archive belongs to somebody else. A stolen bag of silver. A wall that fell the wrong way. Four words on a plaster wall. You read them, you weigh them up, you write down what the evidence will carry, and you go home.</p>
    <p><b>This one is different, and I am not going to pretend it is not.</b> It is the oldest file we have, it has never been closed, and your name is in it. So is mine.</p>
    <h4>The case</h4>
    <p>A debt was started in a garden. One rule, one time it was broken, and a debt that has been growing ever since — and when we checked, it reaches everybody who has ever lived. Nobody has ever paid it off. We have the account book, and every single payment anyone ever offered came back marked <i>not enough</i>.</p>
    <p>And then, on one page, in one person's handwriting, the whole thing is marked <b>PAID IN FULL</b> — by somebody who did not owe a penny of it.</p>
    <h4>Your job</h4>
    <p>There are five explanations on your board for how that debt gets cleared. Four of them are things people really say, and every one of them is closed by a document you already have. Close them properly. Do not just take my word for any of it.</p>
    <h4>How the file works</h4>
    <ul>
      <li>Everything on the desk now is yours to read.</li>
      <li>Two parts of the file are <b>locked</b>. Both codes are hidden in documents you already have.</li>
      <li>The second lock opens with a <b>keyword that is written nowhere in this file</b>. You build it yourself on the <b>clerk’s sheet</b> — the 🧩 button at the top. Every answer on it comes from a document you already have.</li>
      <li>When all five explanations are closed, go to the <b>Pinboard</b>.</li>
    </ul>
    <p class="margin-note">One warning before you start. This file ends with a question, and it is not a question about the evidence. You can answer it either way and nobody will ever know which — but read the evidence first, and then answer it honestly.</p>
    <div class="sig">Mordecai ben Jair</div>
    <div class="small" style="color:#5b4a35">Case Supervisor</div>
    <div class="ref">This case is put together from Genesis 2–3, Romans 3, 5 and 6, Ephesians 2, John 1, 3, 14 and 19, and 1 Corinthians 15.</div>`
},

j01charge:{
  prev:"One rule. One time it was broken. Everything else in this file comes from that page.",
  body:`
    <div class="plate">${SVG.j01gate}<div class="cap">Click the plate to make it bigger. The garden, seen from outside the shut gate.</div></div>
    <p>The debt starts in a garden, and the paperwork is short.</p>
    <table class="ledger">
      <tr><th>Entry</th><th>Record</th></tr>
      <tr><td>People involved</td><td class="n"><b>2</b></td></tr>
      <tr><td>Trees they were given</td><td>Every tree in the garden</td></tr>
      <tr><td>Rules they were given</td><td class="n"><b>1</b> — do not eat from that one tree</td></tr>
      <tr><td>What would happen if they did, told to them first</td><td>Death. Nothing was hidden from them.</td></tr>
      <tr><td>Rules they kept</td><td class="n"><b>0</b></td></tr>
      <tr><td>What they did straight afterwards</td><td>Hid, and then blamed somebody else</td></tr>
    </table>
    <h4>What we notice about this page</h4>
    <ul>
      <li>It was <b>one</b> rule, not a long list. Nobody was caught out by small print.</li>
      <li>They were told what would happen before it happened. They were not tricked into a punishment they had never heard of.</li>
      <li>They did not say they had not done it. They hid, and then each one pointed at somebody else — which is exactly what people still do, and it is why the next document exists.</li>
    </ul>
    <p class="margin-note">Count the rules. That number is the first digit of the first lock, and it is worth stopping on: the whole thing starts with <b>one</b>.</p>
    <div class="ref">Background: Genesis 2:16–17 · Genesis 3:1–13.</div>`
},

j01audit:{
  prev:"We checked every account we have. The answer comes out the same every time.",
  body:`
    <p>Fair question at this point: what has a garden got to do with anybody now? So we checked the accounts. All of them.</p>
    <table class="ledger">
      <tr><th>Checked</th><th>Found</th></tr>
      <tr><td>Accounts we looked at</td><td>Every one we have</td></tr>
      <tr><td>Accounts that were completely clean</td><td class="n"><b>0</b></td></tr>
      <tr><td>People who have never once broken what they knew was right</td><td class="n"><b>0</b></td></tr>
      <tr><td>People who would be happy for every thought they have ever had to be read out loud</td><td class="n"><b>0</b></td></tr>
      <tr><td>What the record says about it</td><td>"All have sinned and fall short"</td></tr>
    </table>
    <h4>The question we actually ask</h4>
    <p>We do not ask if you are a good person. Nearly everybody says yes to that, and it settles nothing. We ask a smaller question that is much harder: <b>have you always done what you yourself thought was right?</b></p>
    <p>Nobody has ever said yes to that and been telling the truth. Not one investigator in this building. That is what the record means by <i>all</i>. Not that everybody is equally bad — that nobody is clean.</p>
    <p class="margin-note">Count the clean accounts. That number is the second digit of the first lock.</p>
    <div class="ref">Background: Romans 3:10–12, 3:23 · Romans 5:12 · 1 John 1:8.</div>`
},

j01wage:{
  prev:"Two lines on one page. One of them is earned. The other one is not.",
  body:`
    <p>One sentence in the record holds both halves of this case, and it is worth reading slowly, because the two halves do not work the same way at all.</p>
    <div class="stamp">FROM THE RECORD</div>
    <p style="font-size:18px">"The wages of sin is <b>death</b>; but the free gift of God is <b>eternal life</b> in Christ Jesus our Lord."</p>
    <table class="ledger">
      <tr><th></th><th>The wage</th><th>The gift</th></tr>
      <tr><td>How you get it</td><td><b>You earn it.</b> It is owed to you.</td><td><b>You are given it.</b> It is owed to nobody.</td></tr>
      <tr><td>What it costs the person who gets it</td><td>Everything</td><td class="n"><b>0</b></td></tr>
      <tr><td>What it cost the person who gives it</td><td>—</td><td>Everything</td></tr>
      <tr><td>Can you deserve it?</td><td>You already do</td><td>No. That is what the word "gift" means.</td></tr>
    </table>
    <h4>Why this page closes an explanation</h4>
    <p>One explanation on your board says a kind God will just let the debt go. Read the first column again. <b>A wage is not a mood. It is something you are owed.</b> A judge who cancels every debt because he likes people is not being kind, he is being unfair — and the people he robs are the ones who were hurt in the first place.</p>
    <p>The record does not say the debt was ignored. It says it was <i>paid</i>. Those are two completely different claims, and only one of them is in this file.</p>
    <div class="ref">Background: Romans 6:23 · Romans 3:25–26 · Hebrews 9:22.</div>`
},

j01ledger:{
  prev:"Page after page of payments offered. Every single one handed back.",
  body:`
    <div class="plate">${SVG.j01ledger}<div class="cap">Click the plate to make it bigger. Four things people offered against the debt. All four came back.</div></div>
    <p>This is the working account book — the <b>ledger</b>. People have been offering payments against this debt for as long as it has been open, and the ledger says what happened to each one.</p>
    <table class="ledger">
      <tr><th>Offered</th><th>Handed back marked</th></tr>
      <tr><td>A good life, on the whole</td><td><b>Not enough</b> — behaving well from now on does not clear what is already on the page</td></tr>
      <tr><td>Going to church and keeping the rules</td><td><b>Not enough</b> — and the record says so itself, at length</td></tr>
      <tr><td>Giving money to people who need it</td><td><b>Not enough</b> — good, and you should have anyway</td></tr>
      <tr><td>Really being sorry</td><td><b>Not enough</b> — being sorry about a debt does not pay it</td></tr>
      <tr><td>Pointing at somebody worse</td><td><b>Not a payment at all</b></td></tr>
      <tr><td>Payments accepted, in the whole book</td><td class="n"><b>0</b></td></tr>
    </table>
    <h4>The clerk's note</h4>
    <p>"People read this page as saying good deeds do not matter. It says nothing of the kind. <b>It says they are not money.</b></p>
    <p>Think of a fine at court. Turning up and promising to behave beautifully from now on is a good thing to do, and it does not touch the fine. The fine has a number on it, and somebody has to pay that number."</p>
    <div class="ref">Background: Isaiah 64:6 · Ephesians 2:8–9 · Titus 3:5 · Galatians 2:16.</div>`
},

j01three:{
  prev:"A good man, a religious man, and a man with nothing. Only one of them got in.",
  body:`
    <div class="doc-body">
      <h4>The first — a good man, and rich</h4>
      <p>"I asked him straight out what I had to do to have eternal life. He listed the commandments. <b>I told him the truth: I had kept them, all of them, since I was a boy</b> — and I had. He looked at me, and the record says he loved me, and then he named the one thing I would not give up.</p>
      <p>I went away sad. I still had everything I came with."</p>
      <h4>The second — a religious man, and careful</h4>
      <p>"I stood up and thanked God that I was not like other people. I go without food twice a week. I give away a tenth of everything I get. <b>Every word of that was true.</b></p>
      <p>There was a tax collector at the back who would not even look up. He said seven words: <i>God, be merciful to me, a sinner.</i> The record says he went home right with God, and I did not."</p>
      <h4>The third — a criminal, on the last day of his life</h4>
      <p>"I was being executed next to him, and I deserved it. I had nothing to offer and no time left to fix anything. <b>I asked him to remember me.</b></p>
      <p>He said: today you will be with me in Paradise."</p>
      <h4>What we notice</h4>
      <ul>
        <li>The first two turned up with something. The third turned up with <b>nothing at all</b> — no good record, no time, no second chance.</li>
        <li>Out of the three, the one who got in was the one who brought nothing and asked.</li>
        <li>Count them, then count how many got in because of what they were carrying. Both numbers are in the first lock.</li>
      </ul>
    </div>
    <div class="ref">Background: Mark 10:17–22 · Luke 18:9–14 · Luke 23:39–43.</div>`
},

j01routes:{
  prev:"Nobody believes nothing. Everybody is standing on one of these five.",
  body:`
    <p>Before you start closing explanations, look at what they actually are. These are not five silly ideas we made up so you could knock them down. <b>Everybody you know is standing on one of them</b>, and most of them have never said so out loud.</p>
    <table class="ledger">
      <tr><th>The idea</th><th>What it sounds like</th></tr>
      <tr><td>There was never a debt</td><td>"I'm not a bad person. Sin is an old-fashioned word."</td></tr>
      <tr><td>Good deeds cancel it</td><td>"I do more good than bad. It'll even out."</td></tr>
      <tr><td>Religion clears it</td><td>"I go to church. I was baptised. My family is Christian."</td></tr>
      <tr><td>I'm better than most</td><td>"Compared to some people I could name, I'm fine."</td></tr>
      <tr><td>It will just be ignored</td><td>"God's loving. He wouldn't hold it against anyone."</td></tr>
    </table>
    <h4>How to work this case</h4>
    <p>Take each one and ask the question you would ask of any explanation in this archive: <b>which document makes it impossible?</b> Not the one you like least — the one it cannot survive.</p>
    <p class="margin-note">Every one of these five is closed by one document you already have — find the document first, then take it to the <b>Pinboard</b>. And as you go, keep asking the question the file keeps asking: on each of these roads, <b>who is doing the paying?</b></p>
    <div class="ref">Made-up summary sheet. The ideas themselves are as old as the file.</div>`
},

j01payment:{
  prev:"A death, a borrowed grave, and a third day. Three parts, and the file needs all three.",
  body:`
    <div class="plate">${SVG.j01hill}<div class="cap">Click the plate to make it bigger. The place, outside the city wall.</div></div>
    <p>The payment is written down in three parts, and the record never gives two of them without the third.</p>
    <table class="ledger">
      <tr><th>Part</th><th>Record</th><th>What it settles</th></tr>
      <tr><td><b>He died</b></td><td>Executed outside the city, between two criminals</td><td>The debt was really paid, not just let off</td></tr>
      <tr><td><b>He was buried</b></td><td>In a borrowed tomb, sealed and guarded</td><td>He was really dead. This is not a story about somebody fainting.</td></tr>
      <tr><td><b>He rose</b></td><td>On the third day, and people saw him</td><td>The payment was accepted</td></tr>
    </table>
    <h4>The one fact this whole case turns on</h4>
    <p>Look at the plate again. Three crosses, three men, one afternoon. Two of them were paying what they owed — one of them says so out loud. <b>The one in the middle owed nothing.</b></p>
    <p>That is not a small detail. It is the whole thing. Somebody in debt cannot pay off somebody else's debt, because they have nothing spare. Only somebody with a clean account has anything to give away.</p>
    <p class="margin-note">How many days before he rose? That number is in the first lock — and it is in the second half of the payment, not the first.</p>
    <div class="ref">Background: 1 Corinthians 15:3–4 · Luke 23:32–43 · John 19:38–42 · 2 Corinthians 5:21.</div>`
},

j01proof:{
  prev:"Anyone can say they paid. The third day is the receipt.",
  body:`
    <p>People often treat the resurrection as a happy ending stuck on the end. In this file it is not the ending. <b>It is the evidence.</b></p>
    <h4>The reasoning</h4>
    <ol>
      <li>Anybody can say a debt is paid. The real question is always whether the person who was owed <b>accepted</b> it.</li>
      <li>If the payment had been turned down, he would have stayed where every other executed man stayed.</li>
      <li>The record says he did not. It says he was raised, and it names the people who saw him — including a crowd of more than five hundred at once, most of them still alive and still able to be asked when that was written down.</li>
      <li>So the third day is not decoration. <b>It is the receipt</b>, and the record says so plainly: he was "raised for our justification".</li>
    </ol>
    <h4>What we are not doing here</h4>
    <p>We do not argue about the resurrection in this file. That is <b>Case JM-33 — The Empty Tomb</b>, and it is on the shelf; every explanation people give for the empty tomb is tested there, properly, and you should work it if you have not. This page only says what the third day <i>means</i> if it happened.</p>
    <p class="margin-note">Worth noticing: the file does not ask you to believe the payment was accepted because that would be nice. It points at something that either happened or did not, in public, on a date.</p>
    <div class="ref">Background: Romans 4:25 · 1 Corinthians 15:3–8, 15:17 · Acts 2:24.</div>`
},

j01transfer:{
  prev:"The money is real. It is on the table. It is not yours until you take it.",
  body:`
    <p>Here is the part nearly everybody gets wrong, in both directions.</p>
    <h4>What the record says</h4>
    <div class="stamp">FROM THE RECORD</div>
    <p style="font-size:17px">"To all who <b>received</b> him, to those who believed in his name, he gave the right to become children of God."</p>
    <h4>Two ways to get it wrong</h4>
    <table class="ledger">
      <tr><th>The mistake</th><th>What the record actually says</th></tr>
      <tr><td>"If he paid for everyone, then everyone is fine and there is nothing else to do."</td><td>The gift is <b>offered</b> to everyone. The record still talks about receiving it, and treats not receiving it as a real thing that happens.</td></tr>
      <tr><td>"So there IS something I have to do — I have to be good enough to qualify."</td><td>Taking a gift is not paying for it. Holding your hand out is not helping with the bill.</td></tr>
    </table>
    <h4>The plainest way we can put it</h4>
    <p>Somebody walks into the court office and pays your fine in full. The money is real. The clerk has it. <b>But if you never sign for it, you walk out of that building still owing.</b> Not because the money was not enough — because you never took it.</p>
    <p class="margin-note">This is the step people skip. They agree with every word of the file and never sign for anything. Agreeing that a bridge is safe is not the same as walking across it.</p>
    <div class="ref">Background: John 1:12 · Ephesians 2:8–9 · Romans 10:9–10 · Revelation 3:20.</div>`
},

j01door:{
  prev:"“I am the way.” Not a way. The file does not soften that, and neither will we.",
  body:`
    <p>This is the hardest page in the file for most people today, and we are not going to blur it to make it easier.</p>
    <div class="stamp">RECORDED</div>
    <p style="font-size:18px">"I am the way, the truth, and the life. <b>No one comes to the Father except through me.</b>"</p>
    <p style="font-size:16px">And from the record of what his followers said afterwards: "There is no other name under heaven given among men by which we must be saved."</p>
    <h4>Why the claim has to be that narrow</h4>
    <p>Follow your own board. If the debt is real, and no payment any of us offers is ever accepted, and one payment has been made and accepted — then there is <b>one</b> way the account gets cleared. Not because somebody is being unfriendly, but because there is only one payment.</p>
    <p>A lifeboat is not being narrow-minded by being the only lifeboat.</p>
    <h4>What this page is not saying</h4>
    <ul>
      <li>It is not saying other people are worse than you. The audit already closed that one.</li>
      <li>It is not saying nobody else has ever said anything true or good.</li>
      <li>It is saying the debt is settled in exactly one place, and the door into it is open to <b>anybody at all</b> — which is the opposite of exclusive, in the way people usually mean that word.</li>
    </ul>
    <p class="margin-note">Count the ways to the Father the record names. That number is in the first lock, and it is the same digit as the number of rules in the garden — which is worth thinking about for a moment.</p>
    <div class="ref">Background: John 14:6 · Acts 4:12 · John 10:9 · 1 Timothy 2:5.</div>`
},

j01paid:{
  prev:"“It is finished.” One word in the original language, and it is a word off a bill.",
  body:`
    <div class="plate">${SVG.j01paid}<div class="cap">Click the plate to make it bigger. The page struck through, and the seal not broken.</div></div>
    <p>The last thing he said before he died is three words in English and <b>one word</b> in the language it was written in: <i>tetelestai</i>.</p>
    <h4>Where else that word turns up</h4>
    <table class="ledger">
      <tr><th>Where</th><th>What it meant there</th></tr>
      <tr><td>Written across a bill</td><td><b>Paid in full.</b> The debt is cleared; there is nothing left to collect.</td></tr>
      <tr><td>On a finished job</td><td>The work is complete. Nothing left to add.</td></tr>
      <tr><td>On a released prisoner's paperwork</td><td>The sentence has been served in full.</td></tr>
    </table>
    <h4>Why we think this is the sharpest detail in the file</h4>
    <p>It is not a cry of defeat, which is how people usually hear it. It is the word a clerk writes across a bill when there is nothing left to pay. <b>He is not saying "I am finished." He is saying "it is finished" — the thing he came to do is done.</b></p>
    <p>And look what that does to your account book. Every payment you have ever offered came back marked <i>not enough</i>. This one comes back with a word that means <i>there is nothing left to pay</i>.</p>
    <p class="margin-note">If the bill is marked paid in full, then adding your own good deeds to it is not being humble. It is telling the clerk he got the sum wrong.</p>
    <div class="ref">Background: John 19:30 · Colossians 2:13–14 · Hebrews 10:11–14.</div>`
},

j01who:{
  prev:"Anybody else paying would just have been paying their own.",
  body:`
    <p>Put together everything your board has closed, and the shape of the answer is forced. It is not picked because it is comforting. There is nowhere else for the evidence to go.</p>
    <h4>What the person paying had to be</h4>
    <table class="ledger">
      <tr><th>Needed</th><th>Why</th></tr>
      <tr><td><b>Somebody who owed nothing</b></td><td>An account in debt has nothing spare to give away. The audit found no clean accounts among us — none at all.</td></tr>
      <tr><td><b>Somebody who could stand in for us</b></td><td>A debt owed by people has to be paid by one of them. So: fully human.</td></tr>
      <tr><td><b>Somebody whose payment was big enough for everybody</b></td><td>One life for one life clears one account. For the whole audit you need somebody worth more than we can measure.</td></tr>
      <tr><td><b>Somebody who did it willingly</b></td><td>A payment taken by force from somebody who did not agree is a second wrong, not a fix.</td></tr>
    </table>
    <h4>What the record claims about the man on the middle cross</h4>
    <p>That he never sinned — the one clean account. That he was fully human: born, hungry, tired, killed. That he was also God, so what he gave is not limited. And that nobody took his life off him: <b>"I lay it down of my own accord."</b></p>
    <p class="margin-note">You do not have to accept those claims. You do have to notice that they are exactly the four things the account book needs, and that they are all said about the same person.</p>
    <div class="ref">Background: 2 Corinthians 5:21 · Hebrews 4:15 · Hebrews 2:14–17 · John 10:17–18 · 1 Peter 3:18.</div>`
},

j01yours:{
  prev:"Admit. Believe. Receive. Tell. Not one of them costs you anything.",
  body:`
    <p>If the bill is paid, and a paid gift still has to be taken, then there is something left to do — and the record is very plain about what it is. Four steps. Look at them carefully and notice that <b>not one of them is a payment</b>.</p>
    <table class="ledger">
      <tr><th></th><th>The step</th><th>Where it is</th></tr>
      <tr><td>1</td><td><b>Admit</b> that the charge sheet has your name on it too. Not "I'm as bad as anyone" — just "I have broken what I knew was right."</td><td>Romans 3:23 · 1 John 1:9</td></tr>
      <tr><td>2</td><td><b>Believe</b> that Jesus died in your place, was buried, and rose again, and that this is what settles it.</td><td>Romans 5:8 · 1 Corinthians 15:3–4</td></tr>
      <tr><td>3</td><td><b>Receive</b> him — ask him to be your Saviour and your Lord, and stop trying to pay a bill that is already marked paid.</td><td>John 1:12 · Romans 10:9</td></tr>
      <tr><td>4</td><td><b>Tell</b> somebody. Out loud, to a real person. The record treats this as part of it, not an extra.</td><td>Romans 10:9–10 · Matthew 10:32</td></tr>
    </table>
    <h4>Three things we want to say clearly</h4>
    <ul>
      <li><b>There are no magic words.</b> No particular sentence has power in it. What matters is whether you mean it.</li>
      <li><b>It is not a prize for being good enough.</b> If it were, the account book would have accepted something by now.</li>
      <li><b>Nobody can do it for you</b> — not a parent, not a school, not a teacher who really hopes you will. It is yours to do or not do.</li>
    </ul>
    <p class="margin-note">This file ends by putting that decision to you, once the case is closed. You can say yes, you can say not yet, and you can say no. All three are real answers and the file will take any of them.</p>
    <div class="ref">Background: Romans 10:9–13 · John 1:12 · Ephesians 2:8–9 · Acts 16:30–31.</div>`
},

j01why:{
  prev:"We can show you where the reasoning goes. We cannot make you sign.",
  body:`
    <p>Every case in this archive has a page saying exactly where the evidence stops. This one needs it more than most, because what is at stake makes it tempting to claim more than we have.</p>
    <h4>What the file does show</h4>
    <ol>
      <li>The debt is real, and the audit puts every one of us on it. This is the part people argue with least and want to skip most.</li>
      <li>No payment we offer has ever been accepted. The account book is not an opinion. It says <i>not enough</i> in every line.</li>
      <li>A payment was made by somebody the record insists owed nothing, and the third day is offered as the proof it was accepted.</li>
      <li>The record says the gift has to be taken, and shows people taking it — including one man with nothing to offer and hours left to live.</li>
    </ol>
    <h4>What the file does not do</h4>
    <p>It does not prove God to you, and it would be dishonest to say a school activity could. It cannot make you believe the record is true. And it cannot tell you what you will decide, because that is not evidence. That is you.</p>
    <p><b>A student who works this whole case and says "I don't think this is true" has not failed it.</b> They have done exactly what every other file in this archive asks: read it, weighed it, and said what they actually think. That is worth far more than agreeing to be agreeable.</p>
    <p class="margin-note">The honest end of this case is not "and so you have to". It is: here is the charge, here is the account book, here is the receipt, and here is a door standing open. What you do at the door is yours.</p>
    <div class="ref">Background: Joshua 24:15 · John 6:67–69 · Acts 17:11 · Romans 10:13.</div>`
}

},

theories:{
  nodebt:{
    title:"1. There was never a real debt",
    claim:"Sin is just an old word for ordinary human mistakes. There is no account, so there is nothing to clear.",
    verdict:"The charge sheet proves this wrong. A mistake is something you did not mean to do. Look at what the garden record shows: <b>one</b> command, said clearly; the penalty told to them first, so nobody was tricked; the command broken anyway; and then they <i>hid</i>, and each blamed somebody else. Nobody hides from an honest mistake. That is a real charge, with a rule and a price, and the two people in the garden knew it was real before anyone told them. You do not need a religious word for it. Something is owed, and they knew it at the time."
  },
  deeds:{
    title:"2. Good deeds cancel it out",
    claim:"Do more good than bad and it evens out. That is how fairness works.",
    verdict:"The account book proves this wrong. Every payment like that anyone ever offered came back marked <b>not enough</b>, and the page is careful about why: good deeds are not worthless, they are <i>not money</i>. A driver caught speeding does not clear the fine by driving beautifully for a year — the fine has a number on it and somebody pays that number. And notice the sum nobody does: even if good behaviour cancelled bad, you would still owe for everything before today."
  },
  religion:{
    title:"3. Religion clears it",
    claim:"Church, baptism, a Christian family, keeping the traditions. That is what religion is for.",
    verdict:"The three statements prove this wrong. The second man is the whole case in one paragraph: everything he said about himself was true — the fasting, the giving, all of it — and he went home no better off, while a man at the back who said seven words went home right with God. The first man had kept the commandments since he was a boy and still walked away holding everything he came with. Whatever clears this account, it is not a record of religious activity, and the record says so very bluntly."
  },
  compare:{
    title:"4. I am better than most, so mine is small",
    claim:"Compared with the people you read about in the news, my account is nearly clean. It will round down.",
    verdict:"The audit proves this wrong. Comparing yourself feels like evidence but it measures nothing: the audit is not a league table, it is a straight question about whether any account is <b>clean</b>. None were. Being nearer the front of a queue that is going the wrong way is not progress — and the second man in the statements is exactly this idea, said out loud in a prayer."
  },
  overlook:{
    title:"5. God is kind, so he will just ignore it",
    claim:"A loving God would not hold anything against anybody. The debt just gets cancelled.",
    verdict:"The price page proves this wrong. A wage is not a mood — it is something owed, and a judge who cancels every debt because he likes people is not kind, he is unfair, and the people he robs are the ones who were hurt. But look at what the same page offers in the next column. The file never says the debt was ignored. It says it was <b>paid</b>, at enormous cost, by the one who was owed. That is a far bigger idea of God's kindness than waving it through, and it is the one the evidence actually supports."
  }
},

locks:{
  l1:{
    wrong:"Not quite. Each digit comes from a different document — one of your four is wrong.",
    name:"Field Chest B — the payment papers",
    blurb:"A four-digit lock. Each digit answers one question, and each question is answered by a document already on your desk. Two of the answers are zero, and both of those zeros are the point of this case.",
    questions:[
      "How many rules were given in the garden?",
      "How many completely clean accounts has the audit ever found?",
      "How many people gave statements at the door?",
      "How many of them got in because of what they brought with them?"
    ],
    hints:[
      "The questions are in order. Question one gives the first digit. Every answer is a single digit.",
      "Question 1 is the charge sheet. Question 2 is the audit. Questions 3 and 4 are both in the three statements — count the men, then count how many were let in because of what they were carrying."
    ],
    reward:"Field Chest B is open. The record of the payment, the note about the third day, the transfer and the one door are now on the desk — and the last two answers on the clerk’s sheet are in them."
  },
  l2:{
    wrong:"Not quite. You build the keyword on the clerk’s sheet — the 🧩 button at the top. Five numbered squares, collected in order.",
    name:"Sealed Pouch C — the name for it",
    blurb:"A five-letter keyword, and it is not written anywhere in this file. You build it yourself on the clerk’s sheet. Every answer on that sheet is a word from a document you already have, and five of its squares have a small number in them.",
    questions:[
      "Open the 🧩 Clerk’s sheet from the top bar.",
      "Every answer is a word from a document on your desk.",
      "Five squares have a small number in them, 1 to 5.",
      "Collect those five letters in number order. That is the keyword."
    ],
    hints:[
      "Fill in the ones you are sure of first, and the letters that cross will help with the rest. Two answers — the day, and what that day is — are in Field Chest B, so open the first lock before you try to finish.",
      "You want the word for a debt paid by somebody who did not owe it, given to somebody who could never have paid it. Square 1 is in the word for where the whole thing started, and it is the letter that word begins with."
    ],
    reward:"Sealed Pouch C is open. The word written across the account, why it had to be him, the part that is yours, and where the evidence stops are now on the desk."
  }
},

crossword:{
  title:"The Clerk's Sheet",
  blurb:"Every answer is a word you can find in the documents on your desk. Five squares have a small number in them \u2014 collect those five letters in number order and you have the keyword for the second lock. Two of the answers are in Field Chest B, so open the first lock before you try to finish it.",
  entries:[
    {n:1,d:"A",r:0,c:2,a:"CLEAN",q:"The audit checked every account. Not one was found to be this."},
    {n:3,d:"A",r:1,c:7,a:"DOOR",q:"Three men came to it. Only one got in."},
    {n:4,d:"A",r:3,c:1,a:"CRIMINAL",q:"The third of those men. He had nothing to give and no time left."},
    {n:8,d:"A",r:5,c:6,a:"THIRD",q:"Which day the record says proves the payment was taken"},
    {n:9,d:"A",r:6,c:0,a:"GARDEN",q:"Where the debt started"},
    {n:10,d:"A",r:8,c:4,a:"GIFT",q:"\u201cThe free ____ of God is eternal life.\u201d You cannot earn it."},
    {n:11,d:"A",r:10,c:4,a:"RECEIPT",q:"What the third day is \u2014 the proof the payment was taken"},
    {n:2,d:"D",r:0,c:5,a:"AUDIT",q:"The big check of every single account"},
    {n:3,d:"D",r:1,c:7,a:"DEATH",q:"\u201cThe wages of sin is ____.\u201d"},
    {n:5,d:"D",r:3,c:2,a:"REGRET",q:"Being sorry. It was offered against the debt and handed back."},
    {n:6,d:"D",r:4,c:0,a:"WAGES",q:"\u201cThe ____ of sin is death.\u201d This is the half you earn."},
    {n:7,d:"D",r:5,c:4,a:"LEDGER",q:"The book with every payment anybody ever offered written in it"}
  ]
},

verdicts:{
  nodebt:  {text:"There was never a real debt — sin is just an old word for ordinary mistakes."},
  deeds:   {text:"Good deeds outweigh the bad, and it evens out."},
  religion:{text:"Church, baptism and a Christian family clear the account."},
  compare: {text:"My account is small compared with other people's, so it rounds down."},
  overlook:{text:"God is loving, so he just cancels the debt."},
  ransom:  {text:"The debt is real and no payment of ours was ever accepted — so it was paid in full by the one person who owed nothing, and it becomes yours the moment you take it, not the moment you deserve it."}
},

debrief:{
  lead:"The charge sheet is short and nobody argues with it: one rule, one time it was broken, and an audit that has never found a clean account — including yours and mine. The account book is the part people argue with, and it is the part that does not move: every payment ever offered, good lives and religion and being sorry and pointing at somebody worse, came back marked not enough. Then one page carries a word off a settled bill — <i>tetelestai</i>, paid in full — written by the only man in the file who owed nothing, on a day, outside a city, between two men who did owe. The third day is offered as the receipt. And the last thing the record says about it is the strangest: a paid gift is still not yours until you take it.",
  questions:[
    "The audit does not ask whether you are a good person. It asks whether you have always done what you yourself thought was right. Why is that a harder question — and why does the file say the first one settles nothing?",
    "Four of the five ideas are things people really believe. Which one were you closest to before you worked this case, and which document was hardest to get past?",
    "A gift that is paid for but never taken leaves you owing anyway. Why do you think that step is the one people skip, even when they agree with everything else?",
    "The file says a student who works the whole case and still says 'I don't think this is true' has not failed it. Do you agree? What would failing this case actually look like?"
  ]
}

};

registerEasy("jm01", EASY_JM01);
