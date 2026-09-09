"use strict";
/* ============================================================
   CASE JM-33 — THE EMPTY TOMB — EASY READING LEVEL

   Wording only. Same evidence, same reasoning, same lock codes
   (4332 and LINEN). Anything not named here stays as it is.
   ============================================================ */

const EASY_JM33 = {

teaser:"A sealed tomb, four Roman soldiers on guard, and no body in the morning. Five explanations have been offered. Only one of them survives the file.",
introSub:"A sealed tomb. Four guards. No body.",
boardTitle:"The Elimination Board",
boardIntro:"Five explanations. For each one, pin the <b>one</b> piece of evidence that destroys it. When all five are right, the accusation form opens.",
accusationIntro:"Throw out every answer that cannot be true. Whatever is left is your conclusion — even if it is not the answer you expected to reach.",

items:{

letter:{
  prev:"Your job is not to guess. It is to rule things out.",
  body:`
    <p><b>To the investigating team,</b></p>
    <p>Jerusalem, springtime, about the year AD 33. A man is executed on the Friday. He is buried before sunset in a tomb cut into solid rock. A stone heavier than a small car is rolled across the doorway. On the Saturday the tomb is sealed by Roman order, and soldiers are posted to guard it.</p>
    <p>On the Sunday morning the stone has been rolled back and the tomb is empty.</p>
    <p>Seven weeks later, in that same city, his friends are standing in the street saying he is alive. The people in charge want this stopped. To stop it they only have to do one thing: show everyone the body. <b>They never do.</b></p>
    <h4>Your job</h4>
    <p>Five explanations have been offered for the empty tomb. Do not pick your favourite. <b>Test each one against the evidence and throw out the ones that cannot be true.</b> Whatever is still standing at the end — however strange it seems — is your answer.</p>
    <h4>How the file works</h4>
    <ul>
      <li>Everything on the desk right now is yours to read. Read all of it before you decide anything.</li>
      <li>Two parts of the file are <b>locked</b>. The codes are hidden in the documents you already have.</li>
      <li>When you have everything, go to the <b>Pinboard</b> and pin the one piece of evidence that destroys each explanation.</li>
      <li>Only then does the accusation form open.</li>
    </ul>
    <p class="margin-note">Detectives get one thing right and one thing wrong. Right: they follow the evidence. Wrong: they fall in love with an idea before they have read the file.</p>
    <div class="sig">A. Thorne</div>
    <div class="small" style="color:#5b4a35">Case Supervisor</div>
    <div class="ref">This case uses the four gospel accounts (Matthew 27–28, Mark 15–16, Luke 23–24, John 19–20), plus what historians know about Roman burials, seals and guards.</div>`
},

roster:{
  prev:"The soldiers signed for the watch themselves.",
  body:`
    <div class="plate">${SVG.roster}<div class="cap">The posting board, copied from the soldiers' day-book.</div></div>
    <h4>Who was posted</h4>
    <p>Soldiers sent from the Jerusalem troops, because the chief priests asked for them, with the Governor's permission. The men signed their own names when the watch began:</p>
    <table class="ledger">
      <tr><th>Name</th><th>Rank</th></tr>
      <tr><td>Lucius Varo</td><td>decanus — in charge</td></tr>
      <tr><td>Gaius Petronius</td><td>soldier</td></tr>
      <tr><td>Marcus Silvanus</td><td>soldier</td></tr>
      <tr><td>Tiberius Rufus</td><td>soldier</td></tr>
    </table>
    <h4>Their orders</h4>
    <ul>
      <li>The stone is to be sealed with the Governor's cord and wax. <b>The seal must not be broken.</b></li>
      <li>The guard never sleeps. The men take turns. The tomb is watched every single hour.</li>
      <li>Any man who leaves his post before he is relieved <b>pays for it with his life</b>.</li>
    </ul>
    <p>The next guards were due at first light on the third day.</p>
    <div class="ref">Background: Matthew 27:62–66. In the Roman army, falling asleep on guard or leaving your post could get you executed. Count the names — you will need that number.</div>`
},

receipt:{
  prev:"Myrrh and aloes. Thirty-four kilograms. Paid for in full.",
  body:`
    <div class="doc-body">
      <p><b>Friday, before sunset. Urgent order. Paid for in full at the counter.</b></p>
      <table class="ledger">
        <tr><th>Goods</th><th>Prepared as</th><th class="n">Weight</th></tr>
        <tr><td>Myrrh</td><td>sticky resin, mixed</td><td class="n">—</td></tr>
        <tr><td>Aloes</td><td>ground into powder</td><td class="n">—</td></tr>
        <tr><td colspan="2"><b>Total weight of the order</b></td><td class="n"><b>75 litrai (about 34 kg)</b></td></tr>
      </table>
      <p><b>Bought by:</b> Nicodemus, a member of the Council.<br>
         <b>Delivered to:</b> the garden of Joseph of Arimathea, outside the city gate.</p>
      <p class="margin-note">The shopkeeper's own note: “Enough spices for a king's funeral. I have not sold that much at once in twenty years. What he paid would feed an ordinary family for a year.”</p>
      <div class="stamp">PAID · NEVER BROUGHT BACK</div>
      <p>The spices were carried out of the shop. They were never returned, never sold on, and never reported stolen.</p>
    </div>
    <div class="ref">Background: John 19:39–40. Two spices are named on this order — count them. You will need the number.</div>`
},

timeline:{
  prev:"Friday, Saturday, Sunday. Count them the way the sources count them.",
  body:`
    <h4>Day one — Friday</h4>
    <ul>
      <li>Afternoon: the execution ends. The soldiers check that he is dead before the body is handed over.</li>
      <li>Late afternoon: Joseph of Arimathea asks the Governor for the body, and is allowed to take it.</li>
      <li>Before sunset: the body is wrapped in linen strips with the spices, and laid in a <b>brand new</b> rock tomb in Joseph's garden. A huge round stone is rolled across the doorway.</li>
      <li><b>The women follow and watch where he is put.</b> They make sure of the spot so they can come back.</li>
    </ul>
    <h4>Day two — Saturday, the day of rest</h4>
    <ul>
      <li>No work. No shops open. No long journeys. The city is quiet.</li>
      <li>The chief priests go to the Governor and ask for guards, saying his friends might steal the body. The tomb is sealed and the guards are posted.</li>
    </ul>
    <h4>Day three — Sunday</h4>
    <ul>
      <li>Before dawn: women set out with more spices, worrying out loud about who will roll the stone away for them.</li>
      <li>First light: the stone is already rolled back. The tomb is open and empty. The guards have gone.</li>
      <li>Soon after: two of the men run to the tomb and go inside.</li>
    </ul>
    <p class="margin-note">Counted the way the sources count them, burial to discovery covers three days: Friday, Saturday, Sunday.</p>
    <div class="ref">Background: Matthew 27:57–28:8; Mark 15:42–16:8; Luke 23:50–24:12; John 19:38–20:10.</div>`
},

mary:{
  prev:"“I did not go on my own. There were three of us.”",
  body:`
    <div class="doc-body">
      <p>“I watched them bury him. Write that down first, because people keep asking me if I am sure which tomb it was. I sat right across from it on the Friday until the stone was closed. I know that tomb. I could find it in the dark — and I did.</p>
      <p>I did not go on my own. <b>Mary the mother of James came, and Salome. Three of us</b> set off before it was light, carrying the spices we had got ready. The whole way there we argued about the same problem: who is going to roll that stone back for us? Not one of us thought we could shift it ourselves.</p>
      <p>We came round the trees and the stone was already off the doorway. No soldiers. Nobody at all. I did not think “he is alive”. I thought <b>somebody has taken him, and I do not know where they have put him</b>. That is what I said, and that is what I ran and told the others.</p>
      <p>I want to be honest about that, because I know how it sounds now. The first thing I believed was that somebody had robbed the grave.”</p>
      <div class="sig">Mary of Magdala</div>
    </div>
    <div class="ref">Background: Mark 15:47; Mark 16:1–3; John 20:1–2, 11–15. Count how many women are named in this statement.</div>`
},

guards:{
  prev:"“We were not asleep. The only people who say that are the men who paid us to say it.”",
  body:`
    <div class="doc-body">
      <p>“The stone was in place when we started our watch. The cord was whole and the wax was unbroken. I checked it myself, because if that seal breaks it is my neck on the line, not anybody else's.</p>
      <p>Some time before dawn the ground shook. When we could stand up again, the stone was out of its groove and the tomb was open. I sent two men in with a torch. There was linen on the shelf and nothing else. No body. Nobody carrying a body. Nobody had come past us up the path — and there is no other way in, because there is solid rock behind the tomb.</p>
      <p>We went to the priests before we went to the Governor, and I will tell you plainly why. A guard who loses the thing he is guarding is a dead man. They listened, they talked it over between themselves, and then they gave us money and a story: <b>say his friends came in the night and took him while you were asleep.</b></p>
      <p>I took the money. I am not proud of it. But think about what they told us to say. <b>If we were asleep, how would we know who did it?</b> And a Roman soldier who admits sleeping on guard does not get paid — he gets executed. They promised to keep the Governor off our backs. Here is the thing, though. <b>Nobody pays to hide a story they could easily prove wrong.</b>”</p>
      <div class="stamp">THIS STATEMENT TAKES BACK THE EARLIER ONE</div>
      <div class="sig">Lucius Varo</div>
    </div>
    <div class="ref">Background: Matthew 28:11–15, which records that the guards were paid to say the disciples stole the body while they slept.</div>`
},

map:{
  prev:"The tomb, the execution ground, the Council hall, and the room where his friends were hiding.",
  body:`
    <div class="plate">${SVG.map}<div class="cap">A plan of the city and the garden, about AD 33. Click to make it bigger.</div></div>
    <h4>What the plan shows you</h4>
    <ul>
      <li>The tomb is <b>outside the city wall</b>, in a private garden owned by Joseph of Arimathea, close to where the execution happened.</li>
      <li>There is <b>only one path in</b>. Solid rock sits behind the tomb, so nobody can reach the doorway without walking past the guards.</li>
      <li>The room where his friends were hiding is <b>inside the city walls</b>. Anyone carrying a body from that garden back to the city would have to come through the gate, past whoever was standing on it.</li>
      <li>The Council hall — where the chief priests met — is minutes from the temple, and easily close enough to the garden.</li>
    </ul>
    <div class="ref">Background: John 19:41–42 (a garden near the execution ground, a new tomb); Acts 1:12–13 (the upstairs room in the city).</div>`
},

cipher:{
  prev:"Five letters. Nothing else on it.",
  body:`
    <div class="plate">${SVG.cipher}</div>
    <p>A torn strip of papyrus, found folded up inside a soldier's kit bag. Five letters, and nothing else. The Bureau thinks it was the password to the pouch the Council kept its secret papers in. Soldiers on guard were often given a password in code, so that nobody could simply read it off them.</p>
    <p class="margin-note">Use the decoder strip. Move each letter backwards, not forwards.</p>
    <div class="ref">Made-up object. Codes like this one really were used by Roman commanders.</div>`
},

decoder:{
  prev:"Each letter was moved three places forward. Read it three places back.",
  body:`
    <div class="plate">${SVG.decoder}</div>
    <h4>How to use it</h4>
    <p>Every letter of the real word was written down <b>three places forward</b> in the alphabet. To read it, you move each letter three places back.</p>
    <p>On the strip, find your code letter on the <b>bottom</b> line. The letter directly above it on the <b>top</b> line is the real letter.</p>
    <p class="margin-note">Here is an example. The code letters G R J read back as D O G.</p>
    <p>Work through the scrap one letter at a time, and write your answer down on paper before you type it anywhere.</p>
    <div class="ref">A tool, not evidence. On its own it proves nothing.</div>`
},

tombsketch:{
  prev:"The wrappings lying flat. The face cloth folded up, on its own.",
  body:`
    <div class="plate">${SVG.tomb}<div class="cap">Click to make it bigger. Inside the tomb, looking in from the doorway.</div></div>
    <h4>What the first men inside described</h4>
    <ul>
      <li><b>A.</b> The linen strips were <b>lying exactly where the body had been</b> — still curled up, not unwound, not thrown about.</li>
      <li><b>B.</b> The cloth that had been round the head was <b>not with the rest of the linen</b>. It was folded up and put in a place by itself.</li>
      <li>Nothing was knocked over. Nothing had been searched. The rest of the shelf was bare.</li>
    </ul>
    <p class="margin-note">Ask yourself this. If you were stealing a body in the dark, with soldiers nearby, would you stop to unwrap it — and then fold up the face cloth?</p>
    <div class="ref">Background: John 20:5–8; Luke 24:12.</div>`
},

inventory:{
  prev:"Nothing valuable was taken. Everything valuable was left behind.",
  body:`
    <table class="ledger">
      <tr><th>Item</th><th>Found</th><th>Worth</th></tr>
      <tr><td>Linen burial wrappings</td><td>Still there, on the shelf</td><td>A lot — fine linen</td></tr>
      <tr><td>Face cloth</td><td>Still there, folded separately</td><td>A lot</td></tr>
      <tr><td>Myrrh and aloes, 34 kg</td><td>Still there, in and around the wrappings</td><td><b>A huge amount</b></td></tr>
      <tr><td>The body</td><td><b>GONE</b></td><td>—</td></tr>
    </table>
    <h4>What the investigator noticed</h4>
    <p>This is the detail that should stop you in your tracks. The spices alone were worth about a year's wages for an ordinary family. They were easy to carry, easy to sell, and impossible to trace. The linen was worth stealing too.</p>
    <p><b>All of it was left behind. The only thing missing was the one thing nobody could sell.</b></p>
    <div class="ref">Background: John 19:39–40; John 20:6–7.</div>`
},

stone:{
  prev:"Between 1.3 and 2 tonnes. To open it, you had to roll it uphill.",
  body:`
    <div class="plate">${SVG.stone}<div class="cap">Click to make it bigger. A cut-through view of the tomb doorway and the stone's groove.</div></div>
    <h4>What we found</h4>
    <ul>
      <li>A round limestone slab, about 1.6 m across and 30 cm thick. We think it weighed <b>1,300–2,000 kg</b>.</li>
      <li>It sits in a carved groove that <b>slopes downhill towards the tomb doorway</b>. Closing it is easy — one man can let it roll shut. <b>Opening it means shoving all that weight back up the slope.</b></li>
      <li>Stone grinding on stone is loud. You can hear it a long way off. It cannot be done quietly.</li>
      <li>On the Sunday morning the stone was <b>right out of its groove</b> — not just nudged open a hand's width, which is all you would need to get a body out.</li>
    </ul>
    <p class="margin-note">Three women walked out before dawn openly worrying that they could not move it. They were right.</p>
    <div class="ref">Background: Mark 16:3–4. Tombs with rolling stones like this one have been dug up in Jerusalem.</div>`
},

peterjohn:{
  prev:"“If we had taken him, I would know. I was the one hiding behind a locked door.”",
  body:`
    <div class="doc-body">
      <p>“She came shouting that the tomb was open, and we both ran. The younger one got there first and stopped in the doorway. I went straight in.</p>
      <p>The linen was lying there. The cloth from his head was folded and set apart from the rest. That is the bit I keep coming back to. It was <b>tidy</b>. Nothing about that night was tidy.</p>
      <p>People say we took him. Let me be honest about what we were like that weekend. We ran away when they arrested him. I said three times that I did not even know him — to people who could not have hurt me. On the Sunday morning we were behind a locked door because we thought we were next.</p>
      <p>Now think about what you are accusing us of. Getting past four Roman soldiers. Breaking the Governor's own seal. Rolling that stone right out of its groove — the three of us together could not have shifted it, let alone silently. Unwrapping a body in the dark and folding the cloth. Then carrying him back through a city gate.</p>
      <p><b>And after all that, dying for a story we would have known was a lie.</b> I have watched what happens to men who keep saying this. Not one of us has taken it back.”</p>
      <div class="sig">Simon, called Peter</div>
    </div>
    <div class="ref">Background: Mark 14:50 (they all ran); Luke 22:54–62 (Peter's denials); John 20:19 (the doors locked out of fear); John 20:3–8.</div>`
},

ledger:{
  prev:"A big pile of money, and a story to go with it.",
  body:`
    <table class="ledger">
      <tr><th>Entry</th><th>Details</th><th class="n">Paid out</th></tr>
      <tr><td>To the soldiers who guarded the garden</td><td>“a large sum” — handed over directly, not through the treasury</td><td class="n">▮▮▮▮</td></tr>
      <tr><td>What they had to do for it</td><td>Say this: <i>his friends came at night and stole him while we were asleep</i></td><td class="n">—</td></tr>
      <tr><td>Extra promise</td><td>If the Governor hears about it, the Council will “sort him out and keep you out of trouble”</td><td class="n">—</td></tr>
      <tr><td>Search parties sent out</td><td><b>none written down</b></td><td class="n">—</td></tr>
      <tr><td>Body found</td><td><b>none, ever</b></td><td class="n">—</td></tr>
    </table>
    <h4>What the investigator noticed</h4>
    <p>Look at what this record does <b>not</b> say. There is no hunt. No house searched. Nobody arrested and questioned about where the body is — and these were men who had the power to do exactly that, in a city where people were shouting the claim in public within weeks.</p>
    <p><b>One body, shown once, would end the whole thing.</b> Instead the Council spent money on a rumour. People pay to bury a story when they cannot prove it wrong.</p>
    <div class="ref">Background: Matthew 28:11–15.</div>`
},

joseph:{
  prev:"“It was my own tomb. I never went back to it.”",
  body:`
    <div class="doc-body">
      <p>“The tomb was mine. Brand new, cut for me, never used. I gave it because it was close by, the sun was going down, and there was no time to do anything else properly.</p>
      <p>People ask whether I moved him later, to a permanent grave. Think about what you are asking.</p>
      <ul>
        <li>It was <b>my own new tomb</b>. There was no better place to move him to. That is exactly why I offered it.</li>
        <li>On the Saturday I could not have carried a basket across the road without every neighbour noticing, let alone a body.</li>
        <li>By Sunday the stone had <b>the Governor's seal</b> on it. I sit on the Council. I know precisely what Rome does to a man who breaks a Roman seal on a tomb the Governor himself ordered to be guarded.</li>
        <li>And when people started saying he had risen, <b>I could have ended it with one sentence</b>: I moved him, he is over there. I never said it. I never said it because it is not true.”</li>
      </ul>
      <div class="sig">Joseph, of Arimathea</div>
    </div>
    <div class="ref">Background: Matthew 27:57–60; John 19:41–42; Luke 23:50–53.</div>`
},

sealorder:{
  prev:"The cord was ripped straight through the middle.",
  body:`
    <div class="plate">${SVG.seal}<div class="cap">Click to make it bigger. The cord and wax as they were found on the Sunday morning.</div></div>
    <h4>The Governor's order</h4>
    <p>The chief priests asked for it, so the tomb in Joseph of Arimathea's garden is to be made secure until the third day. A cord is to be stretched across the stone and fixed at both ends with the Governor's wax. Guards are to be posted.</p>
    <div class="stamp">SEAL OF ROME · BREAKING IT IS A CRIME AGAINST THE STATE</div>
    <h4>How it was found</h4>
    <ul>
      <li>The cord was <b>ripped through</b>. It was not cut neatly, and it had not been slipped off. Both blobs of wax were still stuck to the rock.</li>
      <li>The stone was completely out of its groove.</li>
      <li>The guards were not at their post.</li>
    </ul>
    <p class="margin-note">Nobody with anything to lose breaks a Roman seal. That rules out a lot of quiet, sensible explanations.</p>
    <div class="ref">Background: Matthew 27:62–66.</div>`
},

aftermath:{
  prev:"Seven weeks later they said it in public, in the same city, and nobody produced a body.",
  body:`
    <h4>Fifty days later</h4>
    <p>The same friends who had been hiding behind a locked door stood up <b>in Jerusalem</b> — a short walk from the tomb, in front of people who had been in the crowd that day — and said out loud that he had been raised. Thousands of people believed them that day.</p>
    <h4>What the authorities did</h4>
    <p>They arrested the speakers. They threatened them. They had them whipped. They did the one thing that never works, and never once did the one thing that would have worked instantly: <b>walk half a mile and open the tomb</b>.</p>
    <h4>What happened to the witnesses</h4>
    <ul>
      <li>They got no money, no safety and no fame out of it.</li>
      <li>They were beaten, put in prison, and most of them were killed for refusing to take it back.</li>
      <li><b>Not one of them ever took it back</b>, even when taking it back would have saved their life.</li>
    </ul>
    <p class="margin-note">People will die for something that is false, if they truly believe it is true. It is much, much harder to find people who will die for something they know for a fact they made up — especially when all of them would have to keep the same secret, for years, while being hurt for it.</p>
    <div class="ref">Background: Acts 2:22–41; Acts 4:1–22; Acts 5:27–42; 1 Corinthians 15:3–8.</div>`
}

},

theories:{
  disciples:{
    title:"1. His friends stole the body",
    claim:"They came at night, moved the stone, took him, and made the rest up.",
    verdict:"The inside of the tomb proves this wrong. Grave robbers working in the dark, with soldiers nearby, do not stop to unwrap a body and then fold the face cloth and set it aside. The wrappings were left lying in place and the cloth was folded — that is not a robbery, that is a scene somebody left calmly. Then add the stone, which they could not have moved; the seal, which was a crime against Rome to break; and the fact that they were hiding behind a locked door, and later died rather than take the story back."
  },
  authorities:{
    title:"2. The authorities took it",
    claim:"The chief priests or the Romans moved the body so the tomb would not become a shrine.",
    verdict:"The Council's money record proves this wrong. If they had the body, they had the perfect answer: show it once, in public, and the whole thing ends that same afternoon. Instead they paid the guards to spread a story about theft, ordered no search at all, and never produced a body. You do not buy a rumour to cover up something you could simply show people."
  },
  joseph:{
    title:"3. Joseph of Arimathea moved him",
    claim:"The tomb was only borrowed in a hurry. He quietly shifted the body to a permanent grave.",
    verdict:"Joseph's own statement proves this wrong. It was his own brand-new tomb — there was nowhere better to move him to. Saturday made it impossible, and by Sunday the stone carried the Governor's seal, which a Council member would never break. Most of all, one sentence from him would have ended the whole claim. He never said it."
  },
  wrongtomb:{
    title:"4. The women went to the wrong tomb",
    claim:"In the half-dark they simply walked up to an empty tomb next door.",
    verdict:"Mary's statement proves this wrong. She sat across from the tomb on the Friday and watched exactly where he was put, on purpose, so she could come back. Two of the men then ran to that same tomb and went inside. The guards had been posted at the right tomb, and it was open and empty. And the authorities, who knew the place perfectly well, never once said “you are at the wrong grave”."
  },
  thieves:{
    title:"5. Grave robbers took him",
    claim:"Thieves broke in for whatever the burial was worth.",
    verdict:"The inventory proves this wrong. Thieves take what they can sell. Thirty-four kilograms of myrrh and aloes — worth about a year's wages, easy to carry and impossible to trace — were left lying in the tomb, along with the fine linen. The only thing missing was the one thing nobody could sell. And robbers do not get past a Roman guard, break the Governor's seal and roll a two-tonne stone uphill for nothing."
  }
},

locks:{
  l1:{
    wrong:"Not quite. Check each digit against its own document — one of your four is wrong.",
    name:"Evidence Bag B — the tomb itself",
    blurb:"A four-digit lock. Each digit answers one question, and every answer is already somewhere on your desk. Read the documents. Do not guess.",
    questions:[
      "How many soldiers signed the Watch Order?",
      "Counting the way the timeline counts them, how many days does burial to discovery cover?",
      "How many women are named as going to the tomb in Mary of Magdala's statement?",
      "How many different spices are listed on the burial receipt?"
    ],
    hints:[
      "Every answer is a single digit, and the questions are in order. Question 1 gives the first digit.",
      "Question 1 is the Watch Order. Question 2 is the Timeline. Question 3 is Mary's statement. Question 4 is the spice receipt."
    ],
    reward:"Evidence Bag B is open. The drawing of the tomb inside, the list of what was found, the report on the stone, and Peter's statement are now on the desk."
  },
  l2:{
    wrong:"Not quite. Move each letter BACK three places, not forward.",
    name:"Archive Pouch C — the Council's papers",
    blurb:"A five-letter password. It was written in the Roman army's field code on the scrap of papyrus found in a soldier's kit bag. Use the decoder strip.",
    questions:[
      "Find the scrap of papyrus. It has five code letters on it.",
      "Find the decoder strip. It tells you which way to move the letters.",
      "Decode the five letters and type the real word."
    ],
    hints:[
      "The scrap reads O L Q H Q. Every letter has to move BACK three places in the alphabet.",
      "O goes back to L. Now do the other four the same way."
    ],
    reward:"Archive Pouch C is open. The Council's money record, Joseph of Arimathea's statement, the sealing order and the follow-up file are now on the desk."
  }
},

verdicts:{
  disciples:  {text:"His friends stole the body."},
  authorities:{text:"The chief priests or the Romans took the body away."},
  joseph:     {text:"Joseph of Arimathea quietly moved him to another grave."},
  wrongtomb:  {text:"The women went to the wrong tomb in the dark."},
  thieves:    {text:"Grave robbers took the body."},
  risen:      {text:"Every ordinary explanation fails. The only one left is the one the witnesses gave: he was raised from the dead."}
},

debrief:{
  lead:"Every ordinary explanation for the empty tomb has been tested against this file, and every one of them has failed. What is left is not a hole in the evidence. It is the explanation the witnesses themselves gave — and kept giving, even when it cost them everything they had.",
  questions:[
    "Which single piece of evidence was hardest to explain away? Why that one?",
    "His friends had everything to gain by quietly dropping the claim, and nothing to gain by sticking to it. What does that tell you about whether they really believed it?",
    "A detective is allowed to reach an answer that surprises them. Did this one surprise you?",
    "Paul wrote that if this did not happen, the whole faith is empty and worthless (1 Corinthians 15:14–19). Why would he risk everything on one single event?"
  ]
}

};

registerEasy("jm33", EASY_JM33);
