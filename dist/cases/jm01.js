"use strict";
/* ============================================================
   CASE JM-01 — THE RANSOM
   The oldest file in the archive, and the only one that names the
   reader in it.  Genesis 3 to the empty tomb.

   This case is built like every other one — evidence, five
   explanations, two locks, a pinboard — because the claim it makes
   is meant to be tested, not assumed.  What is different is what
   happens after the debrief: it asks the reader a question about
   their own life, and that part lives in part_invite.js.
   ============================================================ */


const JM01_ITEMS = [

/* ---------------- STAGE 0 ---------------- */
{
  id:"j01letter", stage:0, notEvidence:true, kind:"Briefing", title:"Letter from the Case Supervisor",
  sub:"The Bible Investigation Bureau · Department of Unsolved Antiquities",
  prev:"The oldest file we hold. Every other case in the archive is somebody else's. This one has your name in it.",
  x:22, y:26, rot:-3, w:220,
  body:`
    <p><b>To the investigating team,</b></p>
    <p>Every case in this archive is somebody else's. A stolen bag of silver, a wall that fell the wrong way, four words on a plaster wall. You read them, you weigh them, you file what the evidence will carry, and you go home.</p>
    <p><b>This one is different, and I am not going to pretend otherwise.</b> It is the oldest file we hold, it has never been closed, and your name is written in it. So is mine.</p>
    <h4>The case</h4>
    <p>An account was opened in a garden. One command, one breach, and a debt that has been running ever since — and the audit says it reaches everybody who has ever lived. Nobody has ever cleared it. We have the ledger; every payment ever offered came back marked <i>insufficient</i>.</p>
    <p>And then, on one page, in one hand, the account is marked <b>PAID IN FULL</b> — by somebody who did not owe a penny of it.</p>
    <h4>Your task</h4>
    <p>Five explanations are on your board for how that debt gets cleared. Four of them are the things people actually say, and every one of them is closed by a document you already have. Close them properly. Do not take my word for any of it.</p>
    <h4>How the file works</h4>
    <ul>
      <li>Everything on the desk now is yours to read.</li>
      <li>Two parts of the file are <b>locked</b>. Both codes are hidden in the documents you already have.</li>
      <li>The second lock opens on the <b>payment test</b> — the ⚖ button at the top — once the first is open.</li>
      <li>When all five explanations are closed, go to the <b>Pinboard</b>.</li>
    </ul>
    <p class="margin-note">One warning before you start. This file ends with a question, and it is not a question about the evidence. You are free to answer it either way, and nobody will ever know which — but read the evidence first, and answer it honestly.</p>
    <div class="sig">A. Thorne</div>
    <div class="small" style="color:#5b4a35">Case Supervisor</div>
    <div class="ref">This case is put together from Genesis 2–3, Romans 3, 5 and 6, Ephesians 2, John 1, 3, 14 and 19, and 1 Corinthians 15.</div>`
},
{
  id:"j01charge", stage:0, kind:"Charge sheet", title:"The Charge, As Laid",
  sub:"The oldest entry in the file", thumb:"j01gate",
  prev:"One command. One breach. Everything after this file follows from that page.",
  x:52, y:22, rot:3, w:214,
  body:`
    <div class="plate">${SVG.j01gate}<div class="cap">Click the plate to make it bigger. The garden, from outside the shut gate.</div></div>
    <p>The account opens in a garden, and the paperwork is short.</p>
    <table class="ledger">
      <tr><th>Entry</th><th>Record</th></tr>
      <tr><td>People involved</td><td class="n"><b>2</b></td></tr>
      <tr><td>Trees they were given</td><td>Every tree in the garden</td></tr>
      <tr><td>Commands they were given</td><td class="n"><b>1</b> — do not eat from that one tree</td></tr>
      <tr><td>The penalty, stated in advance</td><td>Death. Nothing was hidden from them.</td></tr>
      <tr><td>Commands kept</td><td class="n"><b>0</b></td></tr>
      <tr><td>What they did straight afterwards</td><td>Hid, and then blamed somebody else</td></tr>
    </table>
    <h4>What we notice about the paperwork</h4>
    <ul>
      <li>It was <b>one</b> command, not a long list. This was not a case of being caught out by small print.</li>
      <li>The penalty was told to them first. They were not tricked into a punishment they had never heard of.</li>
      <li>They did not deny it. They hid, and then each pointed at somebody else — which is what people still do, and it is why the next document exists.</li>
    </ul>
    <p class="margin-note">Count the commands. That number is the first digit of the first lock, and it is worth sitting with: the whole account starts with <b>one</b>.</p>
    <div class="ref">Background: Genesis 2:16–17 · Genesis 3:1–13.</div>`
},
{
  id:"j01audit", stage:0, kind:"Audit", title:"The Audit — How Far It Reached",
  sub:"Every account in the archive, checked",
  prev:"We checked every account we hold. The result is the same line, every time.",
  x:78, y:26, rot:-4, w:210,
  body:`
    <p>A fair question at this point: what has a garden to do with anybody now? So we audited the accounts. All of them.</p>
    <table class="ledger">
      <tr><th>Checked</th><th>Found</th></tr>
      <tr><td>Accounts examined</td><td>Every one on record</td></tr>
      <tr><td>Accounts found completely clean</td><td class="n"><b>0</b></td></tr>
      <tr><td>People who have never once broken what they knew was right</td><td class="n"><b>0</b></td></tr>
      <tr><td>People who would be happy for every thought they have had to be read out</td><td class="n"><b>0</b></td></tr>
      <tr><td>The record's own summary</td><td>"All have sinned and fall short"</td></tr>
    </table>
    <h4>The test the Bureau actually uses</h4>
    <p>We do not ask whether you are a good person. Almost everyone says yes to that, and it settles nothing. We ask a smaller and much harder question: <b>have you always done what you yourself believed was right?</b></p>
    <p>Nobody has ever answered yes to that and been telling the truth. Not one investigator in this building. That is what the record means when it says <i>all</i> — not that everyone is equally bad, but that nobody is clean.</p>
    <p class="margin-note">Count the clean accounts. That number is the second digit of the first lock.</p>
    <div class="ref">Background: Romans 3:10–12, 3:23 · Romans 5:12 · 1 John 1:8.</div>`
},
{
  id:"j01wage", stage:0, kind:"Schedule", title:"The Price Set Against It",
  sub:"What the debt costs, and what the offer is",
  prev:"Two lines on one page. One is earned. The other is not.",
  x:26, y:56, rot:5, w:208,
  body:`
    <p>One sentence in the record sets out both halves of this case, and it is worth reading slowly, because the two halves do not work the same way at all.</p>
    <div class="stamp">FROM THE RECORD</div>
    <p style="font-size:18px">"The wages of sin is <b>death</b>; but the free gift of God is <b>eternal life</b> in Christ Jesus our Lord."</p>
    <table class="ledger">
      <tr><th></th><th>The wage</th><th>The gift</th></tr>
      <tr><td>How you get it</td><td><b>You earn it.</b> It is owed to you.</td><td><b>You are given it.</b> It is owed to nobody.</td></tr>
      <tr><td>What it costs the one who gets it</td><td>Everything</td><td class="n"><b>0</b></td></tr>
      <tr><td>What it cost the one who gives it</td><td>—</td><td>Everything</td></tr>
      <tr><td>Can you deserve it?</td><td>You already have</td><td>No. That is what "gift" means.</td></tr>
    </table>
    <h4>Why this page closes an explanation</h4>
    <p>One explanation on your board says a kind God will simply overlook the account. Read the first column again. <b>A wage is not a mood; it is something owed.</b> A judge who waves away every debt because he is fond of people is not being kind, he is being unjust — and the people most robbed by it are the ones who were wronged.</p>
    <p>The record does not say the debt was overlooked. It says it was <i>paid</i>. Those are completely different claims, and only one of them is in this file.</p>
    <div class="ref">Background: Romans 6:23 · Romans 3:25–26 · Hebrews 9:22.</div>`
},
{
  id:"j01ledger", stage:0, kind:"Ledger", title:"The Account, As Found",
  sub:"Every payment ever offered against this debt", thumb:"j01ledger",
  prev:"Column after column of payments offered. Every one returned.",
  x:56, y:52, rot:-2, w:212,
  body:`
    <div class="plate">${SVG.j01ledger}<div class="cap">Click the plate to make it bigger. Four of the payments offered against this account. All four came back.</div></div>
    <p>This is the working ledger. People have been offering payments against this account for as long as it has been open, and the ledger records what happened to each one.</p>
    <table class="ledger">
      <tr><th>Offered</th><th>Returned marked</th></tr>
      <tr><td>A good life, on balance</td><td><b>Insufficient</b> — a clean record from here on does not settle what is already on the page</td></tr>
      <tr><td>Religious observance, faithfully kept</td><td><b>Insufficient</b> — the record itself says so, at length</td></tr>
      <tr><td>Giving to the poor</td><td><b>Insufficient</b> — good, and owed anyway</td></tr>
      <tr><td>Sincere regret</td><td><b>Insufficient</b> — being sorry about a debt does not pay it</td></tr>
      <tr><td>Comparison with worse accounts</td><td><b>Not a payment at all</b></td></tr>
      <tr><td>Payments accepted, in the whole ledger</td><td class="n"><b>0</b></td></tr>
    </table>
    <h4>The clerk's note</h4>
    <p>"People misread this page as saying good deeds do not matter. It says nothing of the kind. <b>It says they are not currency here.</b></p>
    <p>Think of it as a fine at court. Turning up and promising to behave beautifully from now on is a fine thing to do and it does not touch the fine. The fine has a number on it, and somebody has to pay that number."</p>
    <div class="ref">Background: Isaiah 64:6 · Ephesians 2:8–9 · Titus 3:5 · Galatians 2:16.</div>`
},
{
  id:"j01three", stage:0, kind:"Statements", title:"Three Who Came to the Door",
  sub:"Taken from the record, in their own words",
  prev:"A good man, a religious man, and a man with nothing. Only one of them got in.",
  x:80, y:56, rot:4, w:210,
  body:`
    <div class="doc-body">
      <h4>The first — a good man, and rich</h4>
      <p>"I asked him straight out what I had to do to have eternal life. He named the commandments. <b>I told him the truth: I had kept them, all of them, since I was a boy</b> — and I had. He looked at me, and the record says he loved me, and then he named the one thing I would not give up.</p>
      <p>I went away sad. I still had everything I came with."</p>
      <h4>The second — a religious man, and careful</h4>
      <p>"I stood and thanked God that I was not like other people. I fast twice a week. I give a tenth of everything I get. <b>Every word of it was true.</b></p>
      <p>There was a tax collector at the back who would not even look up, and who said seven words: <i>God, be merciful to me, a sinner.</i> The record says he went home right with God, and I did not."</p>
      <h4>The third — a criminal, on the last day of his life</h4>
      <p>"I was being executed beside him, and I deserved it. I had nothing to offer and no time to fix anything. <b>I asked him to remember me.</b></p>
      <p>He said: today you will be with me in Paradise."</p>
      <h4>What the Bureau notices</h4>
      <ul>
        <li>The first two came with something. The third came with <b>nothing at all</b> — no good record, no time, no second chance.</li>
        <li>Of the three, the one who got in was the one who brought nothing and asked.</li>
        <li>Count them, and then count how many got in on the strength of what they were carrying. Both numbers are in the first lock.</li>
      </ul>
    </div>
    <div class="ref">Background: Mark 10:17–22 · Luke 18:9–14 · Luke 23:39–43.</div>`
},
{
  id:"j01routes", stage:0, kind:"Bureau note", title:"The Five Routes People Take",
  sub:"What is actually on your board, and why",
  prev:"Nobody believes nothing. Everyone is on one of these five roads.",
  x:40, y:76, rot:-5, w:208,
  body:`
    <p>Before you start closing explanations, it is worth seeing them for what they are. These are not five silly ideas we invented to be knocked down. <b>Every person you know is standing on one of them</b>, and most of them have never said so out loud.</p>
    <table class="ledger">
      <tr><th>The route</th><th>What it sounds like</th></tr>
      <tr><td>There was never a debt</td><td>"I'm not a bad person. Sin is an old-fashioned word."</td></tr>
      <tr><td>Good deeds cancel it</td><td>"I do more good than harm. It'll come out even."</td></tr>
      <tr><td>Religion clears it</td><td>"I go to church. I was baptised. My family is Christian."</td></tr>
      <tr><td>I'm better than most</td><td>"Compared to some people I could name, I'm fine."</td></tr>
      <tr><td>It will be overlooked</td><td>"God's loving. He wouldn't hold it against anyone."</td></tr>
    </table>
    <h4>How to work this case</h4>
    <p>Take each one and ask the question you would ask of any explanation in this archive: <b>which document makes it impossible?</b> Not which one you like least — which one it cannot survive.</p>
    <p class="margin-note">Take these to the <b>payment test</b> when the ⚖ button appears. Five routes, five things the record says a payment has to be. Be strict, and see how many boxes you can honestly tick.</p>
    <div class="ref">Fictional summary sheet. The routes themselves are as old as the file.</div>`
},

/* ---------------- STAGE 1 — released by the numbers lock ---------------- */
{
  id:"j01payment", stage:1, kind:"Record", title:"The Payment",
  sub:"Field Chest B · what was actually done, in order", thumb:"j01hill",
  prev:"A death, a borrowed grave, and a third day. Three parts, and the file needs all three.",
  x:28, y:26, rot:-3, w:216,
  body:`
    <div class="plate">${SVG.j01hill}<div class="cap">Click the plate to make it bigger. The place, outside the city wall.</div></div>
    <p>The payment is recorded in three parts, and the record never gives two of them without the third.</p>
    <table class="ledger">
      <tr><th>Part</th><th>Record</th><th>What it settles</th></tr>
      <tr><td><b>He died</b></td><td>Executed outside the city, between two criminals</td><td>The debt is actually paid, not waived</td></tr>
      <tr><td><b>He was buried</b></td><td>In a borrowed tomb, sealed and guarded</td><td>He was really dead. This is not a fainting story.</td></tr>
      <tr><td><b>He rose</b></td><td>On the third day, and was seen</td><td>The payment was accepted</td></tr>
    </table>
    <h4>The one fact this whole case turns on</h4>
    <p>Look at the plate again. Three crosses, three men, one afternoon. Two of them were paying what they owed — one of them says so out loud. <b>The one in the middle owed nothing.</b></p>
    <p>That is not a small detail. It is the entire mechanism. A person in debt cannot pay somebody else's debt; they have nothing spare. Only somebody with a clean account has anything to give away.</p>
    <p class="margin-note">How many days before he rose? That number is in the first lock — and it is in the second half of the payment, not the first.</p>
    <div class="ref">Background: 1 Corinthians 15:3–4 · Luke 23:32–43 · John 19:38–42 · 2 Corinthians 5:21.</div>`
},
{
  id:"j01proof", stage:1, kind:"Analysis", title:"Why the Third Day Is Evidence",
  sub:"Field Chest B · what a receipt is for",
  prev:"Anyone can claim to have paid. The third day is the receipt.",
  x:58, y:24, rot:4, w:208,
  body:`
    <p>Students sometimes treat the resurrection as the happy ending tacked on. In this file it is not the ending; <b>it is the evidence</b>.</p>
    <h4>The reasoning</h4>
    <ol>
      <li>Anybody can say a debt is paid. The question is always whether the one who is owed <b>accepted</b> it.</li>
      <li>If the payment had been refused, he would have stayed where every other executed man stayed.</li>
      <li>The record says he did not. It says he was raised, and it names the people who saw him — including a crowd of more than five hundred at once, most of them still alive and still askable when that was written down.</li>
      <li>So the third day is not decoration. <b>It is the receipt</b>, and the record says so plainly: he was "raised for our justification".</li>
    </ol>
    <h4>What the Bureau does not do here</h4>
    <p>We do not re-argue the resurrection in this file. That is <b>Case JM-33 — The Empty Tomb</b>, and it is on the shelf; every explanation people offer for the empty tomb is tested there, at length, and you should work it if you have not. This page only says what the third day <i>means</i> if it happened.</p>
    <p class="margin-note">One thing worth noticing: the file does not ask you to believe the payment was accepted because it feels nice. It points at something that either happened or did not, in public, on a date.</p>
    <div class="ref">Background: Romans 4:25 · 1 Corinthians 15:3–8, 15:17 · Acts 2:24.</div>`
},
{
  id:"j01transfer", stage:1, kind:"Bureau note", title:"The Transfer",
  sub:"Field Chest B · a paid debt and an unopened envelope",
  prev:"The money is real. It is on the table. It is not yours until you take it.",
  x:80, y:44, rot:-6, w:208,
  body:`
    <p>Here is the part almost everybody gets wrong, in both directions.</p>
    <h4>What the record says</h4>
    <div class="stamp">FROM THE RECORD</div>
    <p style="font-size:17px">"To all who <b>received</b> him, to those who believed in his name, he gave the right to become children of God."</p>
    <h4>Two ways to misread it</h4>
    <table class="ledger">
      <tr><th>The mistake</th><th>What the record actually says</th></tr>
      <tr><td>"If he paid for everyone, then everyone is fine and nothing more is needed."</td><td>The gift is <b>offered</b> to everyone. The record still speaks of receiving it, and treats not receiving it as a real and possible thing.</td></tr>
      <tr><td>"So there IS something I have to do — I have to be good enough to qualify."</td><td>Receiving a gift is not paying for it. Holding out your hand is not a contribution.</td></tr>
    </table>
    <h4>The plainest picture we can give you</h4>
    <p>Somebody walks into the court office and pays your fine in full. The money is real. The clerk has it. <b>But if you never sign for it, you walk out of that building still owing.</b> Not because the money was not enough — because you never took it.</p>
    <p class="margin-note">This is the step people skip. They agree with every word of the file and never sign for anything. Agreeing that a bridge is safe is not the same as walking across it.</p>
    <div class="ref">Background: John 1:12 · Ephesians 2:8–9 · Romans 10:9–10 · Revelation 3:20.</div>`
},
{
  id:"j01door", stage:1, kind:"Statement", title:"The One Door",
  sub:"Field Chest B · the narrowest claim in the file",
  prev:"“I am the way.” Not a way. The file does not soften it, and neither will we.",
  x:46, y:62, rot:3, w:208,
  body:`
    <p>This is the hardest page in the file for a modern reader, and we are not going to blur it to make it easier.</p>
    <div class="stamp">RECORDED</div>
    <p style="font-size:18px">"I am the way, the truth, and the life. <b>No one comes to the Father except through me.</b>"</p>
    <p style="font-size:16px">And, from the record of what his followers said afterwards: "There is no other name under heaven given among men by which we must be saved."</p>
    <h4>Why the claim has to be that narrow</h4>
    <p>Follow the logic of your own board. If the debt is real, and no payment any of us offers is ever accepted, and one payment has been made and accepted — then there is <b>one</b> way the account gets cleared, not because somebody is being unwelcoming, but because there is only one payment.</p>
    <p>A lifeboat is not narrow-minded for being the only lifeboat.</p>
    <h4>What this page is not saying</h4>
    <ul>
      <li>It is not saying other people are worse than you. The audit already closed that.</li>
      <li>It is not saying nobody else has ever said anything true or good.</li>
      <li>It is saying that the debt is settled in exactly one place, and the door into it stands open to <b>anyone at all</b> — which is the opposite of exclusive in the way that word is usually meant.</li>
    </ul>
    <p class="margin-note">Count the ways to the Father that the record names. That number is in the first lock, and it is the same digit as the number of commands in the garden — which is a coincidence worth thinking about for a moment.</p>
    <div class="ref">Background: John 14:6 · Acts 4:12 · John 10:9 · 1 Timothy 2:5.</div>`
},

/* ---------------- STAGE 2 — released by the keyword lock ---------------- */
{
  id:"j01paid", stage:2, kind:"Document study", title:"The Word Written Across the Account",
  sub:"Sealed Pouch C · what he actually said", thumb:"j01paid",
  prev:"“It is finished.” One word in the original, and it is a word from a bill.",
  x:26, y:28, rot:-3, w:212,
  body:`
    <div class="plate">${SVG.j01paid}<div class="cap">Click the plate to make it bigger. The account, struck through, and the seal left unbroken.</div></div>
    <p>The last thing he said before he died is three words in English and <b>one word</b> in the language it was written in: <i>tetelestai</i>.</p>
    <h4>Where else that word turns up</h4>
    <table class="ledger">
      <tr><th>Where</th><th>What it meant there</th></tr>
      <tr><td>Written across a bill or an account</td><td><b>Paid in full.</b> The debt is discharged; nothing further is owed.</td></tr>
      <tr><td>On a servant's finished job</td><td>The work is complete. Nothing left to add.</td></tr>
      <tr><td>On a released prisoner's paperwork</td><td>The sentence has been served in full.</td></tr>
    </table>
    <h4>Why the Bureau finds this the sharpest detail in the file</h4>
    <p>It is not a cry of defeat, which is how people usually hear it. It is the word a clerk writes across an account when there is nothing left to collect. <b>He is not saying "I am finished." He is saying "it is finished" — the thing he came to do is done.</b></p>
    <p>And notice what it does to your ledger. Every payment you have ever offered came back <i>insufficient</i>. This one comes back with a word that means <i>nothing further is owed</i>.</p>
    <p class="margin-note">If the account is marked paid in full, then adding your own good deeds to it is not humility. It is telling the clerk he got the sum wrong.</p>
    <div class="ref">Background: John 19:30 · Colossians 2:13–14 · Hebrews 10:11–14.</div>`
},
{
  id:"j01who", stage:2, kind:"Bureau analysis", title:"Why It Had To Be Him",
  sub:"Sealed Pouch C · the only account with nothing on it",
  prev:"Anyone else paying would have been paying their own.",
  x:56, y:30, rot:4, w:210,
  body:`
    <p>Put together everything the board has closed, and the shape of the answer is forced. It is not chosen because it is comforting; there is nowhere else for the evidence to go.</p>
    <h4>What the payer had to be</h4>
    <table class="ledger">
      <tr><th>Required</th><th>Why</th></tr>
      <tr><td><b>Someone who owed nothing</b></td><td>An account in debt has nothing spare to give away. The audit found no clean accounts among us — none.</td></tr>
      <tr><td><b>Someone who could stand in for us</b></td><td>A debt owed by people has to be paid by one of them. So: fully human.</td></tr>
      <tr><td><b>Someone whose payment was big enough for everyone</b></td><td>One life for one life clears one account. For the whole audit you need somebody of infinite worth.</td></tr>
      <tr><td><b>Someone who did it willingly</b></td><td>A payment taken by force from an unwilling person is a second injustice, not a remedy.</td></tr>
    </table>
    <h4>What the record claims about the man on the middle cross</h4>
    <p>That he was without sin — the one clean account. That he was fully human, born, hungry, tired, killed. That he was also God, so the worth of what he gave is not limited. And that nobody took his life from him: <b>"I lay it down of my own accord."</b></p>
    <p class="margin-note">You do not have to accept those claims. You do have to notice that they are exactly the four things the ledger requires, and that they are all made about the same person.</p>
    <div class="ref">Background: 2 Corinthians 5:21 · Hebrews 4:15 · Hebrews 2:14–17 · John 10:17–18 · 1 Peter 3:18.</div>`
},
{
  id:"j01yours", stage:2, kind:"Bureau analysis", title:"The Part That Is Yours",
  sub:"Sealed Pouch C · four steps, and none of them is a payment",
  prev:"Admit. Believe. Receive. Tell. Not one of them costs you anything.",
  x:78, y:60, rot:-5, w:210,
  body:`
    <p>If the account is paid, and a paid gift still has to be received, then there is something left to do — and the record is unusually plain about what it is. Four steps. Look at them carefully and notice that <b>not one of them is a payment</b>.</p>
    <table class="ledger">
      <tr><th></th><th>The step</th><th>Where it is</th></tr>
      <tr><td>1</td><td><b>Admit</b> that the charge sheet has your name on it too. Not "I'm as bad as anyone" — just "I have broken what I knew was right."</td><td>Romans 3:23 · 1 John 1:9</td></tr>
      <tr><td>2</td><td><b>Believe</b> that Jesus died in your place, was buried, and rose again, and that this is what settles it.</td><td>Romans 5:8 · 1 Corinthians 15:3–4</td></tr>
      <tr><td>3</td><td><b>Receive</b> him — ask him to be your Saviour and your Lord, and stop trying to pay a bill that is already marked paid.</td><td>John 1:12 · Romans 10:9</td></tr>
      <tr><td>4</td><td><b>Tell</b> somebody. Out loud, to a real person. The record treats this as part of it, not an optional extra.</td><td>Romans 10:9–10 · Matthew 10:32</td></tr>
    </table>
    <h4>Three things the Bureau wants said clearly</h4>
    <ul>
      <li><b>There are no magic words.</b> No particular sentence has power in it. What matters is whether you mean it.</li>
      <li><b>It is not a reward for being good enough.</b> If it were, the ledger would have accepted something by now.</li>
      <li><b>It cannot be done for you</b> — not by a parent, not by a school, not by a teacher who very much hopes you will. It is yours to do or not do.</li>
    </ul>
    <p class="margin-note">This file ends with that decision put to you directly, once the case is closed. You may say yes, you may say not yet, and you may say no. All three are real answers and the file will take any of them.</p>
    <div class="ref">Background: Romans 10:9–13 · John 1:12 · Ephesians 2:8–9 · Acts 16:30–31.</div>`
},
{
  id:"j01why", stage:2, kind:"Bureau analysis", title:"What This File Will and Will Not Claim",
  sub:"Sealed Pouch C · where the evidence stops",
  prev:"We can show you where the reasoning goes. We cannot make you sign.",
  x:44, y:76, rot:2, w:212,
  body:`
    <p>Every case in this archive has a page saying exactly where the evidence stops. This one needs it more than most, because the stakes make it tempting to claim more than we have.</p>
    <h4>What the file does establish</h4>
    <ol>
      <li>The charge is real, and the audit puts every one of us on it. This is the least disputed part and the one people most want to skip.</li>
      <li>No payment we offer has ever been accepted. The ledger is not a matter of opinion; it says <i>insufficient</i> in every line.</li>
      <li>A payment was made by somebody the record insists owed nothing, and the third day is offered as the proof it was accepted.</li>
      <li>The record says the gift has to be received, and shows people receiving it — including one man with nothing at all to offer and hours left to live.</li>
    </ol>
    <h4>What the file does not do</h4>
    <p>It does not prove God to you, and it would be dishonest to say a school activity could. It cannot make you believe the record is true. And it cannot tell you what you will decide, because that is not evidence — it is you.</p>
    <p><b>A student who works this whole case and says "I don't think this is true" has not failed it.</b> They have done exactly what every other file in this archive asks: read it, weighed it, and said what they actually think. That is worth far more than agreeing to be agreeable.</p>
    <p class="margin-note">The honest end of this case is not "and therefore you must". It is: here is the charge, here is the ledger, here is the receipt, and here is a door that is open. What you do at the door is yours.</p>
    <div class="ref">Background: Joshua 24:15 · John 6:67–69 · Acts 17:11 · Romans 10:13.</div>`
}
];

const JM01_THEORIES = [
  {
    id:"nodebt",
    title:"1. There was never a real debt",
    claim:"Sin is an old word for ordinary human mistakes. There is no account, so there is nothing to clear.",
    answer:"j01audit",
    verdict:"The audit closes it. Not because we ran a survey and found people wicked, but because of the one question the Bureau actually asks: <i>have you always done what you yourself believed was right?</i> Nobody has ever answered yes to that honestly — not one investigator in this building. You do not need a religious word for it. Something is owed, and you knew it was owed at the time, which is why the first two people in the file hid."
  },
  {
    id:"deeds",
    title:"2. Good deeds cancel it out",
    claim:"Do more good than harm and it comes out even. That is how fairness works.",
    answer:"j01ledger",
    verdict:"The ledger closes it. Every payment of that kind ever offered came back marked <b>insufficient</b>, and the page is careful about why: good deeds are not worthless, they are <i>not currency here</i>. A driver who is caught speeding does not clear the fine by driving beautifully for a year; the fine has a number on it and somebody pays that number. And notice the arithmetic nobody does: if good behaviour cancelled bad, you would still owe for everything before today."
  },
  {
    id:"religion",
    title:"3. Religion clears it",
    claim:"Church, baptism, a Christian family, the right traditions kept. That is what the religion is for.",
    answer:"j01three",
    verdict:"The three statements close it. The second man is the case in one paragraph: everything he said about himself was true — the fasting, the giving, all of it — and he went home no better off, while a man at the back who said seven words went home right with God. The first man had kept the commandments since he was a boy and still walked away holding everything he came with. Whatever clears this account, it is not a record of religious observance, and the record says so with unusual bluntness."
  },
  {
    id:"compare",
    title:"4. I am better than most, so mine is small",
    claim:"Compared with the people you read about, my account is nearly clean. It will round down.",
    answer:"j01audit",
    verdict:"The audit closes this one too, and it is worth seeing why it is the same document. Comparison feels like evidence but measures nothing: the audit is not a league table, it is a straight question about whether any account is <b>clean</b>. Nought were. Being nearer the front of a queue that is going the wrong way is not progress — and the second man in the statements is exactly this route, said out loud in a prayer."
  },
  {
    id:"overlook",
    title:"5. God is kind, so he will overlook it",
    claim:"A loving God would not hold anything against anybody. The debt just gets waived.",
    answer:"j01wage",
    verdict:"The schedule closes it. A wage is not a mood — it is something owed, and a judge who waves away every debt because he likes people is not kind, he is unjust, and the people he robs are the ones who were wronged. But look at what the same page offers in the next column. The file never says the debt was overlooked. It says it was <b>paid</b>, at enormous cost, by the one who was owed. That is a far higher account of God's kindness than waving it through, and it is the one the evidence actually supports."
  }
];

const JM01_LOCKS = [
  {
    id:"l1", type:"number", code:"1030", len:4,
    wrong:"Not quite. Each digit comes from a different document — one of your four is wrong.",
    name:"Field Chest B — the payment papers",
    blurb:"A four-digit lock. Each digit answers one question, and each question is answered by a document already on your desk. Two of the answers are zero, and both of those zeros are the point of this case.",
    questions:[
      "How many commands were given in the garden?",
      "How many completely clean accounts has the audit ever found?",
      "How many people gave statements at the door?",
      "How many of them got in on the strength of what they brought with them?"
    ],
    hints:[
      "The questions are in order. Question one gives the first digit. Every answer is a single digit.",
      "Question 1 is the charge sheet. Question 2 is the audit. Questions 3 and 4 are both in the three statements — count the men, then count how many were let in because of what they were carrying."
    ],
    reward:"Field Chest B is open. The record of the payment, the note on the third day, the transfer and the one door are now on the desk. The ⚖ Payment test at the top is now working."
  },
  {
    id:"l2", type:"word", code:"GRACE", len:5,
    wrong:"Not quite. Fill in the payment test — the ⚖ button at the top — and look at the first column.",
    name:"Sealed Pouch C — the name for it",
    blurb:"A five-letter keyword. Take the five routes to the payment test and check each one honestly against what the record says a payment has to be. There is one word for a debt paid by somebody who did not owe it, handed to somebody who could never have paid — and the empty column will point you at it.",
    questions:[
      "Open the ⚖ Payment test from the top bar.",
      "Five routes down the side, five things a payment has to be across the top.",
      "Tick a box only where that route honestly passes that test.",
      "One column stays completely empty. What it asks for is the keyword."
    ],
    hints:[
      "Be strict. Ask of each route: does this really do what the column says, or does it only feel like it does?",
      "Look at what every one of the five routes has in common — they are all paid by <i>you</i>, and the audit already said what state your account is in."
    ],
    reward:"Sealed Pouch C is open. The word written across the account, why it had to be him, the part that is yours, and where the evidence stops are now on the desk."
  }
];

const JM01_MATRIX = {
  button:"⚖ Payment test",
  title:"The Payment Test",
  blurb:"Five routes people take down the side. Across the top, the five things this file says a payment has to be. Tick a box only where that route <b>honestly passes</b> that test — not where it feels like it might. Then look for the column nobody can tick.",
  corner:"If this is what clears it…",
  verify:"Check my test",
  mark:"✔",
  fromStage:1,
  cols:[
    {id:"clean",  label:"Paid by someone who owes nothing", note:"an empty account has nothing to give"},
    {id:"covers", label:"Covers the whole charge",          note:"not just from today onwards"},
    {id:"anyone", label:"Within reach of anyone",           note:"the weak, the dying, the young"},
    {id:"final",  label:"Settles it for good",              note:"cannot come undone next week"},
    {id:"agreed", label:"Accepted by the one who is owed",  note:"his opinion is the only one that counts"}
  ],
  rows:[
    {id:"nodebt",   label:"There was never a debt",   note:"ignore the charge sheet"},
    {id:"deeds",    label:"Good deeds cancel it",     note:"outweigh the bad"},
    {id:"religion", label:"Religion clears it",       note:"church, family, tradition"},
    {id:"compare",  label:"I am better than most",    note:"measured against other people"},
    {id:"overlook", label:"It will be overlooked",    note:"he is kind, so it is waived"}
  ],
  truth:[
    "nodebt|anyone",
    "deeds|anyone",
    "religion|anyone",
    "compare|anyone",
    "overlook|anyone"
  ],
  foot:{
    label:"What the file says is required",
    note:"the ledger, the audit and the schedule together",
    cells:{clean:"required", covers:"required", anyone:"required", final:"required", agreed:"required"}
  },
  note:"Be strict, and be fair. Anyone can take any of these five roads — that is a genuine tick, and it is the only one most of them earn. The interesting question is the first column: who is doing the paying on each of these roads, and what did the audit say about their account?",
  reveal:{
    lead:"Five ticks in twenty-five, all in the same column. Every one of these roads is open to anyone, and not one of them does anything else the file asks of a payment. Look hardest at the first column, because it is empty all the way down and it explains all the others: on every one of these roads the person paying is <b>you</b> — and the audit found no clean accounts, so there was never anything in the account to pay with. A debt cleared by somebody who did not owe it, handed to somebody who could never have paid it, has a name.",
    answer:"GRACE",
    caption:"Grace is not God lowering the standard, and it is not him pretending the account was clean. It is the bill being paid in full by the only person in the file who did not owe a penny of it."
  }
};

const JM01_VERDICTS = [
  {id:"nodebt",   text:"There was never a real debt — sin is just an old word for ordinary mistakes."},
  {id:"deeds",    text:"Good deeds outweigh the bad, and the account comes out even."},
  {id:"religion", text:"Church, baptism and a Christian family clear the account."},
  {id:"compare",  text:"My account is small compared with other people's, so it rounds down."},
  {id:"overlook", text:"God is loving, so he simply waives the debt."},
  {id:"ransom",   text:"The debt is real and no payment of ours was ever accepted — so it was paid in full by the one person who owed nothing, and it becomes yours at the moment you receive it, not at the moment you deserve it."}
];

const CASE_JM01 = {
  id:"jm01", code:"CASE JM-01", title:"The Ransom",
  period:"A garden, then a hill · the oldest file we hold", colour:"#8c2f2a", poster:"poster_jm01",
  gold:true,
  teaser:"The oldest file in the archive, and the only one with your name in it. An account opened in a garden, a ledger where every payment ever offered came back marked insufficient, and one page where the whole thing is marked PAID IN FULL — in the hand of somebody who did not owe a penny of it.",
  introSub:"The charge is real. The payment is real. What is left is what you do about it.",
  items:JM01_ITEMS, theories:JM01_THEORIES, locks:JM01_LOCKS, verdicts:JM01_VERDICTS,
  matrix:JM01_MATRIX,
  correct:"ransom",
  invite:true,
  boardTitle:"How the Debt Gets Cleared",
  boardIntro:"Five routes have been offered, and people you know are standing on all five of them. For each one, pin the <b>single</b> document that makes it impossible. When all five are closed, the accusation form opens.",
  accusationIntro:"The charge is real, no payment of ours was ever accepted, and the account is marked paid by somebody who owed nothing. State what the file will actually support.",
  debrief:{
    lead:"The charge sheet is short and it is not in dispute: one command, one breach, and an audit that has never found a clean account — including yours and mine. The ledger is the part people argue with, and it is the part that does not move: every payment ever offered, good lives and religion and regret and comparison, came back marked insufficient. Then one page carries a word from a settled bill — <i>tetelestai</i>, paid in full — written by the only man in the file who owed nothing, on a day, outside a city, between two men who did owe. The third day is offered as the receipt. And the last thing the record says about it is the strangest: a paid gift is still not yours until you take it.",
    questions:[
      "The audit does not ask whether you are a good person. It asks whether you have always done what you yourself believed was right. Why is that a harder question — and why does the file think the first one settles nothing?",
      "Four of the five routes are things people genuinely believe. Which one were you closest to before you worked this case, and which document was hardest to get past?",
      "A gift that is paid for but never received leaves you owing anyway. Why do you think that step is the one people skip, even when they agree with everything else?",
      "The file says a student who works the whole case and still says 'I don't think this is true' has not failed it. Do you agree? What would failing this case actually look like?"
    ],
    refs:"Genesis 2:16–17 · Genesis 3:1–13 · Romans 3:10–12, 3:23 · Romans 5:8 · Romans 6:23 · Romans 10:9–13 · Ephesians 2:8–9 · John 1:12 · John 14:6 · John 19:30 · 1 Corinthians 15:3–8 · Luke 18:9–14 · Luke 23:39–43 · Acts 4:12 · 2 Corinthians 5:21"
  },
  teacher:{
    answers:"Lock 1 code <b>1030</b> (1 command in the garden · 0 clean accounts in the audit · 3 statements at the door · 0 of them admitted on what they brought). Lock 2 keyword <b>GRACE</b>, from the ⚖ Payment test: every one of the five routes ticks only <i>within reach of anyone</i>, and the <i>paid by someone who owes nothing</i> column is empty all the way down, because on every one of those roads the payer is the student themselves.",
    pairs:"There was never a debt → The Audit; good deeds cancel it → The Account, As Found; religion clears it → Three Who Came to the Door; I am better than most → The Audit (the same document, and worth discussing why); it will be overlooked → The Price Set Against It.",
    conclusion:"The debt is real and reaches everyone; no payment we offer has ever been accepted; it was paid in full by the one person who owed nothing; and it becomes yours when you receive it, not when you deserve it.",
    prompts:"\"Have you always done what YOU thought was right? Not what I think — what you thought at the time.\" · \"If good behaviour cancels bad, what happens to everything before today?\" · \"Two men brought something and one brought nothing. Which one got in?\" · \"Who is doing the paying on every road in that first column?\"",
    extra:"Read this before you run it. This is the only case in the archive that asks the student a personal question, and how you frame it matters more than anything on the board.<br><br><b>The invitation.</b> When the case is closed, a panel offers three answers: yes, not now, and I already have. All three are handled warmly and none of them is treated as a wrong answer — 'not now' gets a genuine welcome, not a guilt trip, and it tells the student exactly how to come back. Nothing is transmitted anywhere; a decision is saved only in that browser, and only if the student takes it. There is no class list and no way for you to see who pressed what, which is deliberate: this is between the student and God, not a piece of assessment.<br><br><b>Say the frame out loud at the start.</b> Something like: <i>we are going to work this like any other case, and at the end it asks you a question about your own life. You can answer it any way you like, including no, and nobody will see your answer.</i> Students who know they are free to say no engage far more honestly with the evidence than students who feel steered.<br><br><b>Expect the fourth debrief question to be the real one.</b> A student who says they are not convinced has done the work; treat that answer with the same respect as any other, and ask which document they are setting aside. That is a better conversation than agreement.<br><br><b>If a student does say yes</b>, the welcome screen tells them the next step is telling a real person, and offers a short note they can print and hand to you or to a parent. Be ready for that conversation, and be ready for it to happen days later. The certificate records the date; a decision certificate is not a sacrament and does not replace anything your church would do.<br><br><b>Pair it with JM-33.</b> This file deliberately does not re-argue the resurrection — it points at The Empty Tomb, where every alternative explanation is tested at length. Running JM-33 first and JM-01 last makes the year's arc: the evidence, then what the evidence is for."
  }
};

registerCase(CASE_JM01);
