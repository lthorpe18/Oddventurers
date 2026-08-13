(function(){
'use strict';

var VERSION='prototype v0.5 • master v0.3';
var KEY='oddventurers-master-v03-live';
var ART={
  stars:'assets/falling-stars-grove.svg',
  bazaar:'assets/stormbreak-bazaar.svg',
  banquet:'assets/upside-down-banquet.svg',
  character:'assets/character-example.svg'
};

var PARTS={
 head:[
  ['Dragon Head','Hot Stuff!','Breathe fire and make a frightening display.','🐉'],
  ['Giant Eye','Eagle Eyed','Spot tiny, distant or easily missed things.','👁️'],
  ['Giant Nose','Super Sniffer','Smell, track and identify things others cannot.','👃'],
  ['Frog Head','Tongue Twister','Reach, grab and pull things with an enormous tongue.','🐸'],
  ['Elephant Head','Trunk Call','Grab, lift, suck up or spray with your trunk.','🐘'],
  ['Vacuum Head','Big Suck','Pull loose things towards you with powerful suction.','🌀'],
  ['Owl Head','Night Owl','See clearly where others cannot.','🦉'],
  ['Two Heads','Heads Together','Watch, think about or deal with two things at once.','👥'],
  ['Robot Head','Does Compute','Understand machines, mechanisms and strange technology.','🤖'],
  ['Bat Head','All Ears','Hear extremely faint or distant sounds.','🦇'],
  ['Chameleon Head','Now You See Me...','Blend into your surroundings.','🦎'],
  ['Goat Head','Eat Anything','Bite, chew and consume surprisingly troublesome materials.','🐐']
 ],
 body:[
  ['Jelly Body','Squish & Squeeze','Stretch, squash and squeeze into ridiculous shapes.','🫧'],
  ['Stone Body','Rock Solid','Become extremely heavy, tough and difficult to shift.','🪨'],
  ['Balloon Body','Pump It Up!','Inflate, float and become a huge soft cushion.','🎈'],
  ['Magnet Body','Very Attractive','Pull metal things towards yourself.','🧲'],
  ['Sponge Body','Soak It Up','Absorb lots of liquid and release it somewhere else.','🧽'],
  ['Rubber Body','Boing Back','Stretch, bend and bounce without getting hurt.','🏀'],
  ['Ghost Body','Nothing to See Here','Pass through solid things.','👻'],
  ['Sticky Body','Stick With Me','Stick firmly to surfaces, objects or other creatures.','🍯'],
  ['Armoured Body','Tough Nut','Protect yourself or someone else from impacts and danger.','🛡️'],
  ['Mirror Body','Right Back At You!','Reflect light and things that rely on it.','🪞'],
  ['Cloud Body','Head in the Clouds','Drift, float and squeeze through open spaces.','☁️'],
  ['Mushroom Body','Spore Loser','Release a huge cloud of strange spores.','🍄']
 ],
 legs:[
  ['Rocket Boots','Blast Off!','Fly through the air.','🚀'],
  ['Spider Legs','Wall-Crawler','Climb and cling to almost any surface.','🕷️'],
  ['Spring Legs','Boing!','Leap and bounce enormous distances.','🦘'],
  ['Wheel Legs','On a Roll','Move extremely quickly across suitable surfaces.','🛼'],
  ['Flipper Feet','Just Keep Swimming','Swim and manoeuvre brilliantly in water.','🐟'],
  ['Giant Boots','Big Stomp','Stomp, kick, brace and put enormous force through your feet.','🥾'],
  ['Tentacle Legs','Grabby Feet','Grip and hold several things at once.','🐙'],
  ['Root Legs','Dig In!','Anchor yourself firmly in place.','🌱'],
  ['Stilt Legs','Long Way Down','Step over things and reach unusually high places.','🪜'],
  ['Suction Feet','Stick the Landing','Hold onto slippery, steep or inverted surfaces.','🪠'],
  ['Pogo Legs','Bounce About','Keep bouncing across gaps and awkward terrain.','🦵'],
  ['Centipede Legs','Many Hands Make Light Work','Stay extremely stable and carry awkward loads.','🐛']
 ],
 extra:[
  ['Umbrella','Up, Up & Away!','Catch the air, glide, slow falls and shelter things.','☂️'],
  ['Magic Handbag','Just the Thing!','Produce one plausible everyday object you suddenly need.','👜'],
  ['Freeze Ray','Chill Out!','Freeze something.','❄️'],
  ['Bubble Blower','Bubble Trouble','Enclose something inside a large floating bubble.','🫧'],
  ['Megaphone','Say It Loud!','Make your voice incredibly loud.','📣'],
  ['Very Long Rope','Rope Trick','Reach, tie, pull, lower or secure things.','🪢'],
  ['Giant Magnet','Come Here!','Pull metal objects from a distance.','🧲'],
  ['Accordion Ladder','Going Up!','Extend a ladder to reach ridiculous heights.','🪜'],
  ['Portable Fan','Blow Me Down!','Create a powerful gust of wind.','🌬️'],
  ['Enormous Spoon','Scoop There It Is','Scoop, dig, carry or fling things.','🥄'],
  ['Disguise Box','Nobody Here But Us Chickens','Create a convincing ridiculous disguise.','🎭'],
  ['Spring-Loaded Glove','Punch Line','Deliver a powerful punch from a distance.','🥊'],
  ['Portable Hole','Hole Lot Easier','Make a temporary opening in a suitable surface.','🕳️'],
  ['Moon Kite','Catch the Wind','Harness the wind to lift or pull something.','🪁'],
  ['Bubble Helmet','Think Inside the Bubble','Create a safe pocket of air around your head.','🪖'],
  ['Giant Cork','Put a Cork in It!','Plug, block or wedge surprisingly large openings.','🍾']
 ]
};
Object.keys(PARTS).forEach(function(k){PARTS[k]=PARTS[k].map(function(x){return {name:x[0],ability:x[1],text:x[2],glyph:x[3]};});});

var LOCATIONS={
 stars:{title:'Falling Stars Grove',image:ART.stars,strap:'A star-struck woodland emergency',desc:'Falling magic has split the grove with glowing rifts. A stone giant is stirring, a star sprite is trapped and the usual paths are behaving badly.'},
 bazaar:{title:'Stormbreak Bazaar',image:ART.bazaar,strap:'A floating market in a full-blown sky-storm',desc:'The market islands are tearing apart in violent wind. Cargo swings over the void, platforms drift and balloons pull loose.'},
 banquet:{title:'The Upside-Down Banquet',image:ART.banquet,strap:'Gravity has ruined dinner',desc:'The grand hall cannot decide which way is down. Guests, furniture and useful-looking objects are floating, falling or stuck somewhere inconvenient.'}
};

var ADVENTURES=[
 {id:'starspell',title:'The Runaway Starspell',opening:'A wishing spell has escaped, grown a mind of its own and is ricocheting through the strangest places it can find. Follow its trail, contain the chaos it leaves behind and stop it before it turns the whole world inside out.',route:[
  {location:'stars',intro:'The spell crashes first into Falling Stars Grove. The magic raining from the sky is its trail — and the giant opening one eye is probably a bad sign.',challenges:[
   {type:'Rescue',title:'Free the Star Sprite',prompt:'A tiny star sprite is trapped in the vine-cage beside the glowing rift. Free it before the waking stone giant notices everyone.',trouble:1,recharge:true,ref:'Expected directions include reaching, squeezing, cutting or breaking, clever grabbing, tiny-space access, hiding or distracting the giant. Examples include Tongue Twister, Wall-Crawler, Squish & Squeeze, Punch Line, Hole Lot Easier and Now You See Me...'},
   {type:'Route',title:'Get Past the Star-Fire',prompt:'A ribbon of fallen starlight has ignited the path ahead. Get the whole team around, over, under or safely through it.',trouble:1,ref:'Expected directions include flying, jumping, climbing, phasing, cushioning, extinguishing or making another route. Examples include Blast Off!, Boing!, Wall-Crawler, Nothing to See Here, Soak It Up and Chill Out!'},
   {type:'Team combination',title:'Wake the Giant — Carefully',prompt:'The only clear route is under the stone giant’s hand. Move it just enough to open the path without turning a sleepy problem into an angry one.',trouble:2,combo:true,ref:'This should reward two complementary abilities: one to shift, brace or support the hand and another to keep the giant calm, distracted or unaware.'},
   {type:'Broad problem',title:'Catch a Falling Star',prompt:'A bright star-fragment is bouncing dangerously between the trees and blasting holes in everything it touches. Stop it moving before it reaches the treehouse.',trouble:1,recharge:true,ref:'Expected directions include catching, cushioning, freezing, attracting, enclosing, redirecting or absorbing. Examples include Pump It Up!, Chill Out!, Bubble Trouble, Very Attractive, Big Suck and Squish & Squeeze.'}
  ]},
  {location:'bazaar',intro:'The starspell blasts out of the grove and straight into Stormbreak Bazaar. The floating market was already unstable; this is not helping.',challenges:[
   {type:'Object emergency',title:'Save the Swinging Crate',prompt:'A crate of counter-charms is hanging from one rope over the clouds and swinging harder with every gust. Stop it smashing into the stalls or disappearing into the void.',trouble:1,ref:'Expected directions include grabbing, anchoring, attracting metal, flying, pulling or cushioning. Examples include Come Here!, Very Attractive, Rope Trick, Blast Off!, Grabby Feet, Pump It Up! and Rock Solid.'},
   {type:'Rescue',title:'Catch the Drifting Merchant',prompt:'A merchant and their half-deflated balloon have broken loose from the right-hand platform. Get them back onto something solid.',trouble:2,recharge:true,ref:'Expected directions include flying or gliding, wind control, grabbing, anchoring, reaching or creating a soft landing.'},
   {type:'Conserve or pay',title:'The Market Is Blowing Away',prompt:'The next island is slowly drifting out of reach. Use something useful now to close the gap — or preserve your abilities and take the Trouble while the team makes a rough crossing.',trouble:1,ref:'Broad movement challenge. Flying, jumping, stretching, climbing, extending, pulling, creating wind or anchoring are all expected.'},
   {type:'Team combination',title:'Stop the Bell Tower',prompt:'The storm has torn a warning bell loose. It is swinging into the market supports while the rope whips across the walkway. Stop the bell and secure the rope.',trouble:2,combo:true,ref:'A combination of reaching or movement plus anchoring, strength, sticking, grabbing, magnetism or wind control is likely.'}
  ]},
  {location:'banquet',intro:'The spell dives through an upper window into a banquet already suffering a gravity problem. It hides somewhere among the floating chaos.',challenges:[
   {type:'Route',title:'Reach the Ceiling Door',prompt:'The safest way deeper into the hall is now above you. Get the whole team to the ceiling door without losing anyone to the flying furniture.',trouble:1,ref:'Expected directions include climbing, flying, gliding, jumping, ladders, ropes, sticking, phasing or clever team support.'},
   {type:'Rescue',title:'Cat. Curtain. Problem.',prompt:'A terrified cat is clinging to a curtain that is rapidly becoming the wrong way up. Get it somewhere safe before gravity changes again.',trouble:1,recharge:true,ref:'Expected directions include gentle reaching, climbing, flying, cushioning, grabbing, luring or creating a safe landing.'},
   {type:'Broad problem',title:'Stop the Teacup Storm',prompt:'Cups, plates and a suspicious amount of gravy are circling the room faster and faster. Calm the orbit before somebody gets crockery to the face.',trouble:1,ref:'Expected directions include suction, wind control, magnetism where metal helps, cushioning, freezing, shielding, grabbing or disrupting the spin.'},
   {type:'Team combination',title:'Pin Down the Floating Table',prompt:'The banquet table is drifting toward the blue fireplace with three guests still clinging to it. Stop the table and get them off.',trouble:2,combo:true,recharge:true,ref:'Likely needs one contribution to stop, anchor or redirect the table and another to rescue or protect the guests.'}
  ],finale:[
   {title:'Catch the Starspell',prompt:'The runaway spell finally shows itself, whipping around the chandelier in a trail of sparks. Trap, freeze, absorb, distract or otherwise hold it still.',trouble:2,ref:'Containment, attraction, suction, freezing, bubbles, distraction, reflection and inventive combinations are all plausible.'},
   {title:'Seal the Chandelier',prompt:'With the spell held, somebody must reach the glowing seal on the tilted chandelier and close it before the room flips again.',trouble:2,ref:'Reaching, climbing, flying, ladders, ropes, long limbs, jumping and team-assisted routes are expected.'},
   {title:'Get Everyone Out',prompt:'Gravity snaps back in the worst possible way. Get the whole team through the doorway before the banquet crashes to the floor.',trouble:2,ref:'Any convincing combination of remaining movement, protection, anchoring, cushioning or carrying abilities may work.'}
  ]}
 ]},
 {id:'moonegg',title:'The Moon Egg Mix-Up',opening:'A glowing moonbird egg has been stolen, traded, lost and very nearly sat on. Follow its increasingly ridiculous trail, recover it and stop it hatching somewhere catastrophic.',route:[
  {location:'bazaar',intro:'Witnesses saw the thief race through Stormbreak Bazaar just as the sky-storm hit. Finding the trail means dealing with the market emergency first.',challenges:[
   {type:'Investigation',title:'Find the Right Stall',prompt:'Half the signs have blown away and everyone is shouting. Work out which stall-holder saw the thief and get a useful answer.',trouble:1,ref:'Observation, hearing, smell, communication, disguises, machinery or creative ways of getting attention are plausible.'},
   {type:'Rescue',title:'Save the Witness',prompt:'The one merchant who definitely saw the egg is now dangling from a balloon line over the void. Get them back before asking questions.',trouble:2,recharge:true,ref:'Flying, gliding, wind control, grabbing, ropes, anchoring and cushioning are expected directions.'},
   {type:'Object emergency',title:'Recover the Torn Map',prompt:'A scrap of the thief’s route map is pinned beneath a swinging cargo crate. Get the map without getting flattened.',trouble:1,ref:'Stopping, lifting, moving, cushioning, magnetism, suction, quick movement or reaching can all work.'},
   {type:'Conserve or pay',title:'Take the Fast Route',prompt:'The clue points to a tiny departing sky-ferry. Use an ability to catch it now, or take 1 Trouble and let the team make an exhausting detour.',trouble:1,ref:'Any credible fast travel, flying, wind, reaching or shortcut ability is relevant.'}
  ]},
  {location:'stars',intro:'The trail ends in Falling Stars Grove. Something egg-shaped is glowing somewhere among the rifts, roots and sleeping stone.',challenges:[
   {type:'Investigation',title:'Find the Hidden Nest',prompt:'The egg is somewhere in the grove: shrine, hollow log, treehouse, giant’s mossy pockets or somewhere even stranger. Find it before the thief doubles back.',trouble:1,ref:'Sight, smell, hearing, machinery, climbing, tiny-space access, phasing or careful searching are all strong directions.'},
   {type:'Rescue',title:'Get the Egg Across the Rift',prompt:'You found it. Unfortunately, the moonbird egg is delicate, glowing and on the wrong side of the rift. Get it and the team across safely.',trouble:2,recharge:true,ref:'Protection, cushioning, flying, ropes, ladders, grabbing, bridges, careful carrying or team combinations are expected.'},
   {type:'Broad problem',title:'Hide From the Waking Giant',prompt:'The egg gives a loud magical chirp. The stone giant is waking up. Keep the team and egg out of sight until it settles.',trouble:1,ref:'Camouflage, hiding, shrinking into spaces, silence, distraction, barriers, phasing or very creative social ideas may work.'},
   {type:'Object emergency',title:'Stop the Egg Rolling',prompt:'A burst of star-magic sends the egg rolling toward the glowing rift. Stop it without cracking it.',trouble:1,ref:'Cushion, catch, stick, grab, block, anchor, redirect, blow, attract a metal carrier or create another safe stop.'}
  ]},
  {location:'banquet',intro:'The thief planned to sell the egg at the Upside-Down Banquet. The deal is off; the egg has started humming and gravity is getting worse.',challenges:[
   {type:'Object emergency',title:'Keep the Egg Out of the Teacup Storm',prompt:'The egg is caught in the orbiting crockery. Get it onto something safe without adding scrambled moonbird to the menu.',trouble:1,ref:'Catching, cushioning, suction, bubbles, wind control, grabbing, sticking or freezing are all plausible.'},
   {type:'Rescue',title:'Clear the Landing Spot',prompt:'The egg is about to hatch while a guest, a chair and a cake are floating through the only safe place for it to land. Clear the area.',trouble:1,recharge:true,ref:'Moving, pulling, pushing, suction, strength, flight, grabbing, cushioning or clever combinations are expected.'},
   {type:'Team combination',title:'Calm the Gravity Hum',prompt:'The egg’s humming is making the room tilt harder. One Oddventurer must calm or contain the egg while another stabilises the immediate area.',trouble:2,combo:true,ref:'One social, sensory or containment ability plus one stabilising, anchoring or protective ability is the intended structure.'},
   {type:'Conserve or pay',title:'Reach the Hatching Egg',prompt:'The egg floats just beyond the chandelier. Wear out something useful to reach it now, or take 1 Trouble while the room gets even stranger.',trouble:1,ref:'Broad reaching and movement challenge; many abilities should plausibly work.'}
  ],finale:[
   {title:'Catch the Hatching Moonbird',prompt:'The egg cracks and a glowing moonbird launches itself through the upside-down hall. Catch or guide it without hurting it.',trouble:2,ref:'Gentle catching, flying, gliding, bubbles, wind, long reach, ropes, distraction or a coordinated team plan may work.'},
   {title:'Break the Gravity Burst',prompt:'Its first song blasts gravity in every direction. Counter, absorb, reflect, contain or ride out the burst.',trouble:2,ref:'Reflection, protection, phasing, suction, clouds, cushioning, bubbles, anchoring and creative combinations are plausible.'},
   {title:'Escape With the Moonbird',prompt:'The room starts falling back into place. Get the moonbird and the whole team through the door before dinner lands on everybody.',trouble:2,ref:'Any convincing remaining protection, carrying, movement, anchoring or cushioning combination may work.'}
  ]}
 ]}
];

var state={screen:'home'};
function save(){try{localStorage.setItem(KEY,JSON.stringify(state));}catch(e){}}
function load(){try{var x=localStorage.getItem(KEY);if(x)state=JSON.parse(x);}catch(e){state={screen:'home'};}}
function shuffle(a){var b=a.slice();for(var i=b.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1)),t=b[i];b[i]=b[j];b[j]=t;}return b;}
function pick(a){return a[Math.floor(Math.random()*a.length)];}
function esc(s){return String(s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot',"'":'&#39;'}[c];});}
function go(){save();render();}
function heroDone(h){return !!(h.head&&h.body&&h.legs&&h.extra);}
function makeDraft(){state.draft={head:shuffle(PARTS.head).slice(0,2),body:shuffle(PARTS.body).slice(0,2),legs:shuffle(PARTS.legs).slice(0,2),extra:shuffle(PARTS.extra).slice(0,2)};}
function currentAdventure(){return state.adventure;}
function currentChapter(){return state.prepared[state.chapter];}
function currentLoc(){return LOCATIONS[currentChapter().location];}
function currentChallenge(){return currentChapter().challenges[state.challenge];}
function currentFinale(){return currentChapter().finale[state.finale];}
function selectedKey(i,slot){return i+':'+slot;}
function selectedCount(){return (state.selected||[]).length;}
function isSelected(i,slot){return (state.selected||[]).indexOf(selectedKey(i,slot))>=0;}
function addTrouble(n){state.trouble+=n;if(state.trouble>=6){state.trouble=6;state.screen='lost';}}

function prepareAdventure(){
 state.adventure=pick(ADVENTURES);
 state.prepared=state.adventure.route.map(function(ch){return {location:ch.location,intro:ch.intro,challenges:shuffle(ch.challenges).slice(0,2),finale:ch.finale||null};});
 state.chapter=0;state.challenge=0;state.finale=0;state.trouble=0;state.selected=[];state.screen='premise';
}

window.resetGame=function(){try{localStorage.removeItem(KEY);}catch(e){}state={screen:'home'};render();};
window.newGame=function(n){state={screen:'build',players:n,build:0,heroes:[],draft:null,trouble:0,selected:[]};for(var i=0;i<n;i++)state.heroes.push({name:'Oddventurer '+(i+1),head:null,body:null,legs:null,extra:null,worn:{head:false,body:false,legs:false,extra:false}});makeDraft();go();};
window.choosePart=function(slot,idx){state.heroes[state.build][slot]=state.draft[slot][idx];go();};
window.nextHero=function(){var h=state.heroes[state.build];if(!heroDone(h))return;if(state.build<state.players-1){state.build++;makeDraft();go();}else{prepareAdventure();go();}};
window.startAdventure=function(){state.screen='location';go();};
window.revealChallenge=function(){state.screen='challenge';state.selected=[];go();};
window.toggleAbility=function(i,slot){var h=state.heroes[i];if(!h||h.worn[slot])return;var key=selectedKey(i,slot),a=state.selected||[],p=a.indexOf(key);if(p>=0)a.splice(p,1);else a.push(key);state.selected=a;go();};
window.toggleRef=function(id){var n=document.getElementById(id);if(n)n.classList.toggle('hidden');};
window.openScene=function(){state.zoom=true;render();};
window.closeScene=function(){state.zoom=false;render();};
window.solveChallenge=function(){if(!selectedCount())return;wearSelected();var q=currentChallenge();state.selected=[];if(q.recharge){state.screen='recharge';state.resume='advance';go();}else advanceChallenge();};
window.takeSetback=function(){var q=currentChallenge();state.selected=[];addTrouble(q.trouble||1);if(state.screen!=='lost')advanceChallenge();go();};
window.rechargePart=function(i,slot){state.heroes[i].worn[slot]=false;var resume=state.resume;state.resume=null;if(resume==='advance')advanceChallenge();else go();};
window.skipRecharge=function(){var resume=state.resume;state.resume=null;if(resume==='advance')advanceChallenge();else go();};
window.solveFinale=function(){if(!selectedCount())return;wearSelected();state.selected=[];advanceFinale();};
window.failFinale=function(){var f=currentFinale();state.selected=[];addTrouble(f.trouble||2);if(state.screen!=='lost')advanceFinale();go();};

function wearSelected(){(state.selected||[]).forEach(function(k){var bits=k.split(':'),i=parseInt(bits[0],10),slot=bits[1];if(state.heroes[i])state.heroes[i].worn[slot]=true;});}
function advanceChallenge(){var ch=currentChapter();if(state.challenge<ch.challenges.length-1){state.challenge++;state.screen='challenge';state.selected=[];go();return;}if(ch.finale){state.finale=0;state.screen='finale';state.selected=[];go();return;}state.chapter++;state.challenge=0;state.screen='location';state.selected=[];go();}
function advanceFinale(){var ch=currentChapter();if(state.finale<ch.finale.length-1){state.finale++;state.screen='finale';go();}else{state.screen='won';go();}}

function top(extra){return '<div class="top"><div><div class="brand">Oddventurers</div><div class="small">'+esc(VERSION)+(extra?' • '+esc(extra):'')+'</div></div><button class="btn secondary compact" onclick="resetGame()">New game</button></div>';}
function trouble(){var s='<div class="trouble-card"><div><b>Trouble</b><div class="small">6 and the adventure is lost</div></div><div class="trouble">';for(var i=0;i<6;i++)s+='<i class="'+(i<state.trouble?'on':'')+'"></i>';return s+'</div><strong>'+state.trouble+'/6</strong></div>';}
function scene(loc,small){return '<button class="scene '+(small?'small-scene':'')+'" onclick="openScene()"><img src="'+loc.image+'" alt="'+esc(loc.title)+'"><span>Tap to inspect the whole scene</span></button>';}
function zoomOverlay(){if(!state.zoom)return '';var loc=currentLoc();return '<div class="zoom" onclick="closeScene()"><button class="zoom-close">×</button><img src="'+loc.image+'" alt="'+esc(loc.title)+'"><div>Tap anywhere to close</div></div>';}
function partCard(h,i,slot,live){var part=h[slot],worn=h.worn[slot],sel=isSelected(i,slot);if(!part)return '<div class="part empty '+slot+'">'+slot+'</div>';return '<button class="part '+slot+' '+(worn?'worn':'ready')+' '+(sel?'selected':'')+'" '+(live&&!worn?'onclick="toggleAbility('+i+',\''+slot+'\')"':'disabled')+'><div class="part-glyph">'+esc(part.glyph)+'</div><div class="part-copy"><div class="part-type">'+slot+'</div><div class="part-name">'+esc(part.name)+'</div><div class="ability">'+esc(part.ability)+'</div><p>'+esc(part.text)+'</p></div><div class="part-state">'+(worn?'Worn Out':sel?'Selected':'Ready')+'</div></button>';}
function heroBoard(h,i,live){return '<div class="hero-board"><div class="hero-title">'+esc(h.name)+'</div><div class="assembled"><div class="body-stack">'+partCard(h,i,'head',live)+'<div class="seam"></div>'+partCard(h,i,'body',live)+'<div class="seam"></div>'+partCard(h,i,'legs',live)+'</div><div class="extra-stack">'+partCard(h,i,'extra',live)+'</div></div></div>';}
function teamBoards(live){return '<div class="heroes">'+state.heroes.map(function(h,i){return heroBoard(h,i,live);}).join('')+'</div>';}
function choice(slot,part,index,selected){return '<button class="choice '+slot+' '+(selected?'chosen':'')+'" onclick="choosePart(\''+slot+'\','+index+')"><div class="choice-glyph">'+esc(part.glyph)+'</div><div><div class="part-type">'+slot+'</div><div class="choice-name">'+esc(part.name)+'</div><div class="ability">'+esc(part.ability)+'</div><p>'+esc(part.text)+'</p></div></button>';}
function buildCategory(slot,label){var h=state.heroes[state.build],parts=state.draft[slot];return '<div class="card"><div class="tag">'+label+'</div><div class="grid2">'+parts.map(function(x,idx){return choice(slot,x,idx,h[slot]&&h[slot].name===x.name);}).join('')+'</div></div>';}
function selectedSummary(){return '<div class="selected-summary"><b>'+selectedCount()+' '+(selectedCount()===1?'ability':'abilities')+' selected</b><span>These parts become Worn Out when the group commits to the solution.</span></div>';}

function home(){return '<div class="shell">'+top('home')+'<div class="card intro"><div><div class="tag">Current prototype</div><h1>Build a ridiculous creature. Then find out what it can actually do.</h1><p class="story">Each player builds one Oddventurer from a Head, Body, Legs and Extra. The team then travels through three connected weird-fantasy locations, wearing out abilities to solve problems and trying not to fill the Trouble track.</p></div><img class="character-reference" src="'+ART.character+'" alt="Example modular Oddventurer"></div><div class="card"><h2>How many Oddventurers?</h2><p class="muted">The adventure is revealed only after everyone has built, so you cannot optimise for the problems ahead.</p><div class="grid2"><button class="btn good" onclick="newGame(2)">2 players</button><button class="btn good" onclick="newGame(3)">3 players</button><button class="btn good" onclick="newGame(4)">4 players</button><button class="btn secondary" onclick="newGame(1)">Solo test</button></div></div><div class="card rules"><div class="tag">Core rule</div><p><b>If a Ready ability genuinely helps, it works.</b> Select the ability and solve the problem; that body part becomes <b>Worn Out</b>. Or keep your options and accept the Trouble instead.</p><p class="muted">There are no dice, stats, equipment or visible answer lists. The group decides whether a creative use makes sense.</p></div></div>';}
function build(){var h=state.heroes[state.build];return '<div class="shell">'+top('build '+(state.build+1)+'/'+state.players)+'<div class="card"><div class="tag">Build '+esc(h.name)+'</div><h1>Choose one from each pair.</h1><p>Each part gives you a named ability and a broad capability. Build something you want to see get into trouble.</p></div>'+buildCategory('head','Head')+buildCategory('body','Body')+buildCategory('legs','Legs')+buildCategory('extra','Extra')+'<div class="card preview"><div class="tag">Your creature so far</div>'+heroBoard(h,state.build,false)+'</div><div class="bottom"><div><span class="small">'+(['head','body','legs','extra'].filter(function(k){return !!h[k];}).length)+'/4 chosen</span><button class="btn good" '+(heroDone(h)?'':'disabled')+' onclick="nextHero()">'+(state.build===state.players-1?'Reveal the adventure':'Next Oddventurer')+'</button></div></div></div>';}
function premise(){var a=currentAdventure();return '<div class="shell">'+top('adventure reveal')+'<div class="card premise"><div class="tag">Adventure premise</div><h1>'+esc(a.title)+'</h1><p class="story">'+esc(a.opening)+'</p><div class="chapter-road">'+a.route.map(function(ch,idx){return '<div><span>'+(idx+1)+'</span><small>'+esc(LOCATIONS[ch.location].title)+'</small></div>';}).join('')+'</div></div>'+teamBoards(false)+'<div class="bottom"><div><span></span><button class="btn good" onclick="startAdventure()">Go to Location 1</button></div></div></div>';}
function locationScreen(){var ch=currentChapter(),loc=currentLoc();return '<div class="shell">'+top('location '+(state.chapter+1)+'/3')+trouble()+'<div class="card location"><div class="tag">Location '+(state.chapter+1)+' • '+esc(loc.strap)+'</div><h1>'+esc(loc.title)+'</h1><p class="story">'+esc(ch.intro)+'</p>'+scene(loc,false)+'<p>'+esc(loc.desc)+'</p></div>'+teamBoards(false)+'<div class="bottom"><div><span></span><button class="btn good" onclick="revealChallenge()">Reveal challenge 1</button></div></div>'+zoomOverlay()+'</div>';}
function challengeScreen(){var q=currentChallenge(),loc=currentLoc(),id='ref-'+state.chapter+'-'+state.challenge;return '<div class="shell">'+top('location '+(state.chapter+1)+' • challenge '+(state.challenge+1)+'/2')+trouble()+'<div class="card encounter"><div class="tag">'+esc(q.type)+(q.combo?' • combining abilities encouraged':'')+'</div><h1>'+esc(q.title)+'</h1><p class="story">'+esc(q.prompt)+'</p>'+scene(loc,true)+'<div class="decision"><b>What could your particular team do here?</b><br><span>Select one or more Ready abilities below. If the group accepts the idea, it works.</span></div>'+(q.recharge?'<div class="reward"><b>Recharge opportunity:</b> solve this and recharge one Worn Out part.</div>':'')+'<button class="btn secondary full" onclick="toggleRef(\''+id+'\')">Need a ruling? Check designer reference</button><div id="'+id+'" class="ref hidden"><b>Behind-the-scenes reference</b><br>'+esc(q.ref)+'<hr><b>Not a whitelist.</b> A different idea that clearly makes sense is valid.</div></div>'+selectedSummary()+teamBoards(true)+'<div class="bottom"><div><button class="btn good" '+(selectedCount()?'':'disabled')+' onclick="solveChallenge()">Use selected & solve</button><button class="btn bad" onclick="takeSetback()">Take +'+q.trouble+' Trouble</button></div></div>'+zoomOverlay()+'</div>';}
function recharge(){var choices=[];state.heroes.forEach(function(h,i){['head','body','legs','extra'].forEach(function(slot){if(h.worn[slot])choices.push([i,slot,h[slot],h.name]);});});var s='<div class="shell">'+top('recharge')+'<div class="card recharge"><div class="tag">A rare breather</div><h1>Recharge one part.</h1><p>Turn one Worn Out card back to Ready. Recharge is deliberately scarce — choose what the team wants back most.</p></div>';if(!choices.length){s+='<div class="card"><p>Nothing is Worn Out, so there is nothing to recharge.</p><button class="btn good full" onclick="skipRecharge()">Continue</button></div>';}else{s+='<div class="recharge-list">'+choices.map(function(x){return '<button class="choice recharge-choice" onclick="rechargePart('+x[0]+',\''+x[1]+'\')"><div class="choice-glyph">'+esc(x[2].glyph)+'</div><div><div class="part-type">'+esc(x[3])+' • '+esc(x[1])+'</div><div class="choice-name">'+esc(x[2].name)+'</div><div class="ability">'+esc(x[2].ability)+'</div></div></button>';}).join('')+'</div><button class="btn secondary full" onclick="skipRecharge()">Skip recharge</button>';}return s+'</div>';}
function finale(){var f=currentFinale(),loc=currentLoc(),id='finref-'+state.finale;return '<div class="shell">'+top('finale '+(state.finale+1)+'/3')+trouble()+'<div class="card encounter finale"><div class="tag">Finale • '+esc(currentAdventure().title)+'</div><h1>'+esc(f.title)+'</h1><p class="story">'+esc(f.prompt)+'</p>'+scene(loc,true)+'<div class="decision"><b>Use what is left.</b><br><span>Select one or more Ready abilities. The finale tests the visibly depleted team you created.</span></div><button class="btn secondary full" onclick="toggleRef(\''+id+'\')">Need a ruling? Check designer reference</button><div id="'+id+'" class="ref hidden"><b>Behind-the-scenes reference</b><br>'+esc(f.ref)+'<hr>This is guidance, not a whitelist.</div></div>'+selectedSummary()+teamBoards(true)+'<div class="bottom"><div><button class="btn good" '+(selectedCount()?'':'disabled')+' onclick="solveFinale()">Use selected & solve</button><button class="btn bad" onclick="failFinale()">Fail • +'+f.trouble+' Trouble</button></div></div>'+zoomOverlay()+'</div>';}
function end(win){return '<div class="shell">'+top(win?'won':'lost')+trouble()+'<div class="card end '+(win?'win':'lose')+'"><div class="big">'+(win?'🌟':'💥')+'</div><h1>'+(win?'You made it!':'Too much Trouble!')+'</h1><p class="story">'+(win?'The adventure is over. Your Oddventurers are still standing — though several bits of them have clearly had enough.':'The adventure got too far out of hand. Rebuild the team and see whether a completely different combination handles it better.')+'</p>'+(win?'<p><b>The important bit:</b> look at which parts are still Ready, which are Worn Out, and whether you immediately want to build a different creature.</p>':'')+'</div>'+teamBoards(false)+'<button class="btn good full" onclick="resetGame()">Build another team</button></div>';}

function render(){var app=document.getElementById('app');if(!app)return;var html='';switch(state.screen){case'build':html=build();break;case'premise':html=premise();break;case'location':html=locationScreen();break;case'challenge':html=challengeScreen();break;case'recharge':html=recharge();break;case'finale':html=finale();break;case'won':html=end(true);break;case'lost':html=end(false);break;default:html=home();}app.innerHTML=html;window.scrollTo(0,0);}

load();
if(!state||!state.screen||['home','build','premise','location','challenge','recharge','finale','won','lost'].indexOf(state.screen)<0)state={screen:'home'};
render();
})();