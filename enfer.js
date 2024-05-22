gsap.to(window,{duration:0,scrollTo:"#page1"})

var intro3 = new gsap.timeline()

intro3.from("#JE,#TU,#IL,#NOUS,#VOUS",{duration:1,opacity:0,stagger:0.2})

intro3.from("#I,#YOU,#HE,#WE,#THEY,#M,#S,#T,#MUS,#TIS",{duration:1.25,opacity:0,stagger:0.1})

gsap.fromTo(".lettre",{opacity:0.5,stagger:0.05},{opacity:0,stagger:0.05,scrollTrigger:{
    trigger:"#page2",
    start:"top bottom",
    end:"center bottom",
    scrub:true,
    // markers:true
}})

gsap.fromTo(".lettre",{opacity:0.0,stagger:0.05},{stagger:0.05,opacity:0.5,scrollTrigger:{
    trigger:"#page2",
    start:"center bottom",
    end:"bottom bottom",
    scrub:true,
    // markers:true
}})

gsap.fromTo(".lettre",{opacity:0.5,stagger:0.05},{opacity:0,stagger:0.05,scrollTrigger:{
    trigger:"#page3",
    start:"top bottom",
    end:"center bottom",
    scrub:true,
    // markers:true
}})

gsap.fromTo(".lettre",{opacity:0.0,stagger:0.05},{stagger:0.05,opacity:0.5,scrollTrigger:{
    trigger:"#page3",
    start:"center bottom",
    end:"bottom bottom",
    scrub:true,
// markers:true
}})

gsap.fromTo(".lettre",{opacity:0.5,stagger:0.05},{opacity:0,stagger:0.05,scrollTrigger:{
    trigger:"#page4",
    start:"top bottom",
    end:"center bottom",
    scrub:true,
    //markers:true
}})

gsap.fromTo(".lettre",{opacity:0.0,stagger:0.05},{stagger:0.05,opacity:0.5,scrollTrigger:{
    trigger:"#page4",
    start:"center bottom",
    end:"bottom bottom",
    scrub:true,
//markers:true
}})

gsap.fromTo(".lettre",{opacity:0.5,stagger:0.05},{opacity:0,stagger:0.05,scrollTrigger:{
    trigger:"#page5",
    start:"top bottom",
    end:"center bottom",
    scrub:true,
    //markers:true
}})

gsap.fromTo(".lettre",{opacity:0.0,stagger:0.05},{stagger:0.05,opacity:0.5,scrollTrigger:{
    trigger:"#page5",
    start:"center bottom",
    end:"bottom bottom",
    scrub:true,
//markers:true
}})

gsap.fromTo(".lettre",{opacity:0.5,stagger:0.05},{opacity:0,stagger:0.05,scrollTrigger:{
    trigger:"#page6",
    start:"top bottom",
    end:"center bottom",
    scrub:true,
    //markers:true
}})

gsap.fromTo(".lettre",{opacity:0.0,stagger:0.05},{stagger:0.05,opacity:0.5,scrollTrigger:{
    trigger:"#page6",
    start:"center bottom",
    end:"bottom bottom",
    scrub:true,
//markers:true
}})

/////////////////////////////////////////////////////////////////

gsap.to("#JE",{innerHTML:"D",fontStyle:"normal",scrollTrigger:{trigger:"#page1",start:"bottom bottom",end:"bottom 35%",scrub:true,
// markers:true
}})

gsap.to("#JE",{innerHTML:"W",fontStyle:"italic",scrollTrigger:{trigger:"#page2",start:"center bottom",end:"bottom 35%",scrub:true,
//  markers:true
}})

gsap.to("#JE",{innerHTML:"W",fontStyle:"normal",scrollTrigger:{trigger:"#page3",start:"center bottom",end:"bottom 35%",scrub:true,
//  markers:true
}})

gsap.to("#JE",{innerHTML:"‘‘a",fontStyle:"italic",scrollTrigger:{trigger:"#page4",start:"center bottom",end:"bottom 35%",scrub:true,
//  markers:true
}})

gsap.to("#JE",{innerHTML:"",fontStyle:"normal",scrollTrigger:{trigger:"#page5",start:"center bottom",end:"bottom 35%",scrub:true,
//  markers:true
}})

gsap.to("#JE",{innerHTML:"M",fontStyle:"normal",scrollTrigger:{trigger:"#page6",start:"center bottom",end:"bottom 35%",scrub:true,
//  markers:true
}})

///////////////////////////////////////////////////////////

gsap.to("#TU",{innerHTML:"e",fontStyle:"normal",scrollTrigger:{trigger:"#page1",start:"bottom bottom",end:"bottom 35%",scrub:true,
// markers:true
}})

gsap.to("#TU",{innerHTML:"e",fontStyle:"normal",scrollTrigger:{trigger:"#page2",start:"center bottom",end:"bottom 35%",scrub:true,
//  markers:true
}})

gsap.to("#TU",{innerHTML:"",fontStyle:"normal",scrollTrigger:{trigger:"#page3",start:"center bottom",end:"bottom 35%",scrub:true,
//  markers:true
}})

gsap.to("#TU",{innerHTML:"",fontStyle:"italic",scrollTrigger:{trigger:"#page4",start:"center bottom",end:"bottom 35%",scrub:true,
//  markers:true
}})

gsap.to("#TU",{innerHTML:"P",fontStyle:"normal",scrollTrigger:{trigger:"#page5",start:"center bottom",end:"bottom 35%",scrub:true,
//  markers:true
}})

gsap.to("#TU",{innerHTML:"",fontStyle:"normal",scrollTrigger:{trigger:"#page6",start:"center bottom",end:"bottom 35%",scrub:true,
//  markers:true
}})

///////////////////////////////////////////////////////////

gsap.to("#IL",{innerHTML:"A",fontStyle:"normal",scrollTrigger:{trigger:"#page1",start:"bottom bottom",end:"bottom 35%",scrub:true,
// markers:true
}})

gsap.to("#IL",{innerHTML:"S",fontStyle:"normal",scrollTrigger:{trigger:"#page2",start:"center bottom",end:"bottom 35%",scrub:true,
//  markers:true
}})

gsap.to("#IL",{innerHTML:"",fontStyle:"normal",scrollTrigger:{trigger:"#page3",start:"center bottom",end:"bottom 35%",scrub:true,
//  markers:true
}})

gsap.to("#IL",{innerHTML:"",fontStyle:"italic",scrollTrigger:{trigger:"#page4",start:"center bottom",end:"bottom 35%",scrub:true,
//  markers:true
}})

gsap.to("#IL",{innerHTML:"",fontStyle:"normal",scrollTrigger:{trigger:"#page5",start:"center bottom",end:"bottom 35%",scrub:true,
//  markers:true
}})

gsap.to("#IL",{innerHTML:"e",fontStyle:"normal",scrollTrigger:{trigger:"#page6",start:"center bottom",end:"bottom 35%",scrub:true,
//  markers:true
}})

///////////////////////////////////////////////////////////

gsap.to("#NOUS",{innerHTML:"‎",fontStyle:"normal",scrollTrigger:{trigger:"#page1",start:"bottom bottom",end:"bottom 35%",scrub:true,
// markers:true
}})

gsap.to("#NOUS",{innerHTML:"",fontStyle:"normal",scrollTrigger:{trigger:"#page2",start:"center bottom",end:"bottom 35%",scrub:true,
//  markers:true
}})

gsap.to("#NOUS",{innerHTML:"i",fontStyle:"italic",scrollTrigger:{trigger:"#page3",start:"center bottom",end:"bottom 35%",scrub:true,
//  markers:true
}})

gsap.to("#NOUS",{innerHTML:"",fontStyle:"normal",scrollTrigger:{trigger:"#page4",start:"center bottom",end:"bottom 35%",scrub:true,
//  markers:true
}})

gsap.to("#NOUS",{innerHTML:"a",fontStyle:"normal",scrollTrigger:{trigger:"#page5",start:"center bottom",end:"bottom 35%",scrub:true,
//  markers:true
}})

gsap.to("#NOUS",{innerHTML:"m",fontStyle:"italic",scrollTrigger:{trigger:"#page6",start:"center bottom",end:"bottom 35%",scrub:true,
//  markers:true
}})

///////////////////////////////////////////////////////////

gsap.to("#VOUS",{innerHTML:"dl",fontStyle:"italic",scrollTrigger:{trigger:"#page1",start:"bottom 101%",end:"bottom 35%",scrub:true,
// markers:true
}})

gsap.to("#VOUS",{innerHTML:"T",fontStyle:"normal",scrollTrigger:{trigger:"#page2",start:"center bottom",end:"bottom 35%",scrub:true,
//  markers:true
}})

gsap.to("#VOUS",{innerHTML:"ll",fontStyle:"normal",scrollTrigger:{trigger:"#page3",start:"center bottom",end:"bottom 35%",scrub:true,
//  markers:true
}})

gsap.to("#VOUS",{innerHTML:"G",fontStyle:"normal",scrollTrigger:{trigger:"#page4",start:"center bottom",end:"bottom 35%",scrub:true,
//  markers:true
}})

gsap.to("#VOUS",{innerHTML:"",fontStyle:"normal",scrollTrigger:{trigger:"#page5",start:"center bottom",end:"bottom 35%",scrub:true,
//  markers:true
}})

gsap.to("#VOUS",{innerHTML:"E",fontStyle:"normal",scrollTrigger:{trigger:"#page6",start:"center bottom",end:"bottom 35%",scrub:true,
//  markers:true
}})

///////////////////////////////////////////////////////////

gsap.to("#I",{innerHTML:"‎",fontStyle:"italic",scrollTrigger:{trigger:"#page1",start:"bottom 101%",end:"bottom 35%",scrub:true,
// markers:true
}})

gsap.to("#I",{innerHTML:"W",fontStyle:"normal",scrollTrigger:{trigger:"#page2",start:"center bottom",end:"bottom 35%",scrub:true,
//  markers:true
}})

gsap.to("#I",{innerHTML:"",fontStyle:"normal",scrollTrigger:{trigger:"#page3",start:"center bottom",end:"bottom 35%",scrub:true,
//  markers:true
}})

gsap.to("#I",{innerHTML:"",fontStyle:"italic",scrollTrigger:{trigger:"#page4",start:"center bottom",end:"bottom 35%",scrub:true,
//  markers:true
}})

gsap.to("#I",{innerHTML:"",fontStyle:"normal",scrollTrigger:{trigger:"#page5",start:"center bottom",end:"bottom 35%",scrub:true,
//  markers:true
}})

gsap.to("#I",{innerHTML:"nt",fontStyle:"italic",scrollTrigger:{trigger:"#page6",start:"center bottom",end:"bottom 35%",scrub:true,
//  markers:true
}})

///////////////////////////////////////////////////////////

gsap.to("#YOU",{innerHTML:"Y",fontStyle:"normal",scrollTrigger:{trigger:"#page1",start:"bottom 101%",end:"bottom 35%",scrub:true,
// markers:true
}})

gsap.to("#YOU",{innerHTML:"O",fontStyle:"italic",scrollTrigger:{trigger:"#page2",start:"center bottom",end:"bottom 35%",scrub:true,
//  markers:true
}})

gsap.to("#YOU",{innerHTML:"",fontStyle:"normal",scrollTrigger:{trigger:"#page3",start:"center bottom",end:"bottom 35%",scrub:true,
//  markers:true
}})

gsap.to("#YOU",{innerHTML:"R",fontStyle:"normal",scrollTrigger:{trigger:"#page4",start:"center bottom",end:"bottom 35%",scrub:true,
//  markers:true
}})

gsap.to("#YOU",{innerHTML:"",fontStyle:"normal",scrollTrigger:{trigger:"#page5",start:"center bottom",end:"bottom 35%",scrub:true,
//  markers:true
}})

gsap.to("#YOU",{innerHTML:"",fontStyle:"italic",scrollTrigger:{trigger:"#page6",start:"center bottom",end:"bottom 35%",scrub:true,
//  markers:tsrue
}})

///////////////////////////////////////////////////////////

gsap.to("#HE",{innerHTML:"co",fontStyle:"italic",scrollTrigger:{trigger:"#page1",start:"bottom 101%",end:"bottom 35%",scrub:true,
// markers:true
}})

gsap.to("#HE",{innerHTML:"",fontStyle:"italic",scrollTrigger:{trigger:"#page2",start:"center bottom",end:"bottom 35%",scrub:true,
//  markers:true
}})

gsap.to("#HE",{innerHTML:"W",fontStyle:"italic",scrollTrigger:{trigger:"#page3",start:"center bottom",end:"bottom 35%",scrub:true,
//  markers:true
}})

gsap.to("#HE",{innerHTML:"e",fontStyle:"italic",scrollTrigger:{trigger:"#page4",start:"center bottom",end:"bottom 35%",scrub:true,
//  markers:true
}})

gsap.to("#HE",{innerHTML:"ra",fontStyle:"italic",scrollTrigger:{trigger:"#page5",start:"center bottom",end:"bottom 35%",scrub:true,
//  markers:true
}})

gsap.to("#HE",{innerHTML:"",fontStyle:"italic",scrollTrigger:{trigger:"#page6",start:"center bottom",end:"bottom 35%",scrub:true,
//  markers:tsrue
}})

///////////////////////////////////////////////////////////

gsap.to("#WE",{innerHTML:"‎",fontStyle:"normal",scrollTrigger:{trigger:"#page1",start:"bottom 101%",end:"bottom 35%",scrub:true,
// markers:true
}})

gsap.to("#WE",{innerHTML:"",fontStyle:"italic",scrollTrigger:{trigger:"#page2",start:"center bottom",end:"bottom 35%",scrub:true,
//  markers:true
}})

gsap.to("#WE",{innerHTML:"",fontStyle:"normal",scrollTrigger:{trigger:"#page3",start:"center bottom",end:"bottom 35%",scrub:true,
//  markers:true
}})

gsap.to("#WE",{innerHTML:"",fontStyle:"normal",scrollTrigger:{trigger:"#page4",start:"center bottom",end:"bottom 35%",scrub:true,
//  markers:true
}})

gsap.to("#WE",{innerHTML:"",fontStyle:"normal",scrollTrigger:{trigger:"#page5",start:"center bottom",end:"bottom 35%",scrub:true,
//  markers:true
}})

gsap.to("#WE",{innerHTML:"O",fontStyle:"normal",scrollTrigger:{trigger:"#page6",start:"center bottom",end:"bottom 35%",scrub:true,
//  markers:tsrue
}})

///////////////////////////////////////////////////////////

gsap.to("#THEY",{innerHTML:"‎",fontStyle:"normal",scrollTrigger:{trigger:"#page1",start:"bottom 101%",end:"bottom 35%",scrub:true,
// markers:true
}})

gsap.to("#THEY",{innerHTML:"",fontStyle:"italic",scrollTrigger:{trigger:"#page2",start:"center bottom",end:"bottom 35%",scrub:true,
//  markers:true
}})

gsap.to("#THEY",{innerHTML:"",fontStyle:"normal",scrollTrigger:{trigger:"#page3",start:"center bottom",end:"bottom 35%",scrub:true,
//  markers:true
}})

gsap.to("#THEY",{innerHTML:"",fontStyle:"normal",scrollTrigger:{trigger:"#page4",start:"center bottom",end:"bottom 35%",scrub:true,
//  markers:true
}})

gsap.to("#THEY",{innerHTML:"",fontStyle:"normal",scrollTrigger:{trigger:"#page5",start:"center bottom",end:"bottom 35%",scrub:true,
//  markers:true
}})

gsap.to("#THEY",{innerHTML:"",fontStyle:"normal",scrollTrigger:{trigger:"#page6",start:"center bottom",end:"bottom 35%",scrub:true,
//  markers:tsrue
}})

///////////////////////////////////////////////////////////

gsap.to("#M",{innerHTML:"ll",fontStyle:"normal",scrollTrigger:{trigger:"#page1",start:"bottom 101%",end:"bottom 35%",scrub:true,
// markers:true
}})

gsap.to("#M",{innerHTML:"",fontStyle:"normal",scrollTrigger:{trigger:"#page2",start:"center bottom",end:"bottom 35%",scrub:true,
//  markers:true
}})

gsap.to("#M",{innerHTML:"O",fontStyle:"normal",scrollTrigger:{trigger:"#page3",start:"center bottom",end:"bottom 35%",scrub:true,
//  markers:true
}})

gsap.to("#M",{innerHTML:"at",fontStyle:"normal",scrollTrigger:{trigger:"#page4",start:"center bottom",end:"bottom 35%",scrub:true,
//  markers:true
}})

gsap.to("#M",{innerHTML:"D",fontStyle:"normal",scrollTrigger:{trigger:"#page5",start:"center bottom",end:"bottom 35%",scrub:true,
//  markers:true
}})

gsap.to("#M",{innerHTML:"",fontStyle:"italic",scrollTrigger:{trigger:"#page6",start:"center bottom",end:"bottom 35%",scrub:true,
//  markers:true
}})

///////////////////////////////////////////////////////////

gsap.to("#S",{innerHTML:"‎",fontStyle:"normal",scrollTrigger:{trigger:"#page1",start:"bottom 101%",end:"bottom 35%",scrub:true,
// markers:true
}})

gsap.to("#S",{innerHTML:"",fontStyle:"normal",scrollTrigger:{trigger:"#page2",start:"center bottom",end:"bottom 35%",scrub:true,
//  markers:true
}})

gsap.to("#S",{innerHTML:"o",fontStyle:"normal",scrollTrigger:{trigger:"#page3",start:"center bottom",end:"bottom 35%",scrub:true,
//  markers:true
}})

gsap.to("#S",{innerHTML:"",fontStyle:"normal",scrollTrigger:{trigger:"#page4",start:"center bottom",end:"bottom 35%",scrub:true,
//  markers:true
}})

gsap.to("#S",{innerHTML:"",fontStyle:"normal",scrollTrigger:{trigger:"#page5",start:"center bottom",end:"bottom 35%",scrub:true,
//  markers:true
}})

gsap.to("#S",{innerHTML:"M",fontStyle:"italic",scrollTrigger:{trigger:"#page6",start:"center bottom",end:"bottom 35%",scrub:true,
//  markers:true
}})

///////////////////////////////////////////////////////////

gsap.to("#T",{innerHTML:"‎",fontStyle:"normal",scrollTrigger:{trigger:"#page1",start:"bottom 101%",end:"bottom 35%",scrub:true,
// markers:true
}})

gsap.to("#T",{innerHTML:"",fontStyle:"normal",scrollTrigger:{trigger:"#page2",start:"center bottom",end:"bottom 35%",scrub:true,
//  markers:true
}})

gsap.to("#T",{innerHTML:"",fontStyle:"normal",scrollTrigger:{trigger:"#page3",start:"center bottom",end:"bottom 35%",scrub:true,
//  markers:true
}})

gsap.to("#T",{innerHTML:"",fontStyle:"normal",scrollTrigger:{trigger:"#page4",start:"center bottom",end:"bottom 35%",scrub:true,
//  markers:true
}})

gsap.to("#T",{innerHTML:"",fontStyle:"normal",scrollTrigger:{trigger:"#page5",start:"center bottom",end:"bottom 35%",scrub:true,
//  markers:true
}})

gsap.to("#T",{innerHTML:"o",fontStyle:"normal",scrollTrigger:{trigger:"#page6",start:"center bottom",end:"bottom 35%",scrub:true,
//  markers:true
}})

///////////////////////////////////////////////////////////

gsap.to("#MUS",{innerHTML:"a",fontStyle:"normal",scrollTrigger:{trigger:"#page1",start:"bottom 101%",end:"bottom 35%",scrub:true,
// markers:true
}})

gsap.to("#MUS",{innerHTML:"o",fontStyle:"italic",scrollTrigger:{trigger:"#page2",start:"center bottom",end:"bottom 35%",scrub:true,
//  markers:true
}})

gsap.to("#MUS",{innerHTML:"",fontStyle:"normal",scrollTrigger:{trigger:"#page3",start:"center bottom",end:"bottom 35%",scrub:true,
//  markers:true
}})

gsap.to("#MUS",{innerHTML:"",fontStyle:"normal",scrollTrigger:{trigger:"#page4",start:"center bottom",end:"bottom 35%",scrub:true,
//  markers:true
}})

gsap.to("#MUS",{innerHTML:"",fontStyle:"normal",scrollTrigger:{trigger:"#page5",start:"center bottom",end:"bottom 35%",scrub:true,
//  markers:true
}})

gsap.to("#MUS",{innerHTML:"",fontStyle:"italic",scrollTrigger:{trigger:"#page6",start:"center bottom",end:"bottom 35%",scrub:true,
//  markers:true
}})

///////////////////////////////////////////////////////////

gsap.to("#TIS",{innerHTML:"B",fontStyle:"italic",scrollTrigger:{trigger:"#page1",start:"bottom 101%",end:"bottom 35%",scrub:true,
// markers:true
}})

gsap.to("#TIS",{innerHTML:"D",fontStyle:"normal",scrollTrigger:{trigger:"#page2",start:"center bottom",end:"bottom 35%",scrub:true,
//  markers:true
}})

gsap.to("#TIS",{innerHTML:"D",fontStyle:"normal",scrollTrigger:{trigger:"#page3",start:"center bottom",end:"bottom 35%",scrub:true,
//  markers:true
}})

gsap.to("#TIS",{innerHTML:"",fontStyle:"normal",scrollTrigger:{trigger:"#page4",start:"center bottom",end:"bottom 35%",scrub:true,
//  markers:true
}})

gsap.to("#TIS",{innerHTML:"e,,",fontStyle:"italic",scrollTrigger:{trigger:"#page5",start:"center bottom",end:"bottom 35%",scrub:true,
//  markers:true
}})

gsap.to("#TIS",{innerHTML:"ri",fontStyle:"normal",scrollTrigger:{trigger:"#page6",start:"center bottom",end:"bottom 35%",scrub:true,
//  markers:true
}})

////////////////////////////////////////////////////////////////////////////////////////////

var xyl =["Data/Music/DO.mp3","Data/Music/RE.mp3","Data/Music/MI.mp3","Data/Music/FA.mp3","Data/Music/SOL.mp3","Data/Music/LA.mp3","Data/Music/SI.mp3","Data/Music/DO2.mp3"]

function bim (u) {gsap.to(titi[u],{duration:2,scale:1.25}),repeat()}
function bam (u) {gsap.to(titi[u],{duration:2,scale:1})}

function repeat() {
    number = Math.random()*7;
    var truenumber = Math.floor(number)
    var Lal = new Audio
    Lal.src=xyl[truenumber]
    Lal.volume=0.15
    Lal.play()
};

var titi=["#un","#deu","#troi","#quat","#cinq","#six","#sept","#huit","#neuf","#dix","#onz","#douz","#un2","#deu2","#troi2","#quat2","#cinq2","#six2","#sept2","#huit2","#neuf2","#dix2","#onz2","#douz2"]

un.onmouseover=function(){bim(0)}
un.onmouseout=function(){bam(0)}

un2.onmouseover=function(){bim(12)}
un2.onmouseout=function(){bam(12)}

deu.onmouseover=function(){bim(1)}
deu.onmouseout=function(){bam(1)}

deu2.onmouseover=function(){bim(13)}
deu2.onmouseout=function(){bam(13)}

troi.onmouseover=function(){bim(2)}
troi.onmouseout=function(){bam(2)}

troi2.onmouseover=function(){bim(14)}
troi2.onmouseout=function(){bam(14)}

quat.onmouseover=function(){bim(3)}
quat.onmouseout=function(){bam(3)}

quat2.onmouseover=function(){bim(15)}
quat2.onmouseout=function(){bam(15)}

cinq.onmouseover=function(){bim(4)}
cinq.onmouseout=function(){bam(4)}

cinq2.onmouseover=function(){bim(16)}
cinq2.onmouseout=function(){bam(16)}

six.onmouseover=function(){bim(5)}
six.onmouseout=function(){bam(5)}

six2.onmouseover=function(){bim(17)}
six2.onmouseout=function(){bam(17)}

sept.onmouseover=function(){bim(6)}
sept.onmouseout=function(){bam(6)}

sept2.onmouseover=function(){bim(18)}
sept2.onmouseout=function(){bam(18)}

huit.onmouseover=function(){bim(7)}
huit.onmouseout=function(){bam(7)}

huit2.onmouseover=function(){bim(19)}
huit2.onmouseout=function(){bam(19)}

neuf.onmouseover=function(){bim(8)}
neuf.onmouseout=function(){bam(8)}

neuf2.onmouseover=function(){bim(20)}
neuf2.onmouseout=function(){bam(20)}

dix.onmouseover=function(){bim(9)}
dix.onmouseout=function(){bam(9)}

dix2.onmouseover=function(){bim(21)}
dix2.onmouseout=function(){bam(21)}

onz.onmouseover=function(){bim(10)}
onz.onmouseout=function(){bam(10)}

onz2.onmouseover=function(){bim(22)}
onz2.onmouseout=function(){bam(22)}

douz.onmouseover=function(){bim(11)}
douz.onmouseout=function(){bam(11)}

douz2.onmouseover=function(){bim(23)}
douz2.onmouseout=function(){bam(23)}

un.onclick=function(){boom(0,0,0)}
un2.onclick=function(){boom(0,0,0)}
deu.onclick=function(){boom(1,1,1)}
deu2.onclick=function(){boom(1,1,1)}
troi.onclick=function(){boom(2,2,2)}
troi2.onclick=function(){boom(2,2,2)}
quat.onclick=function(){boom(3,3,3)}
quat2.onclick=function(){boom(3,3,3)}
cinq.onclick=function(){boom(4,4,4)}
cinq2.onclick=function(){boom(4,4,4)}
six.onclick=function(){boom(5,5,5)}
six2.onclick=function(){boom(5,5,5)}
sept.onclick=function(){boom(6,6,6)}
sept2.onclick=function(){boom(6,6,6)}
huit.onclick=function(){boom(7,7,7)}
huit2.onclick=function(){boom(7,7,7)}
neuf.onclick=function(){boom(8,8,8)}
neuf2.onclick=function(){boom(8,8,8)}
dix.onclick=function(){boom(9,9,9)}
dix2.onclick=function(){boom(9,9,9)}
onz.onclick=function(){boom(10,10,10)}
onz2.onclick=function(){boom(10,10,10)}
douz.onclick=function(){boom(11,11,11)}
douz2.onclick=function(){boom(11,11,11)}

var img =["url(Data/LETSPARDADE22.png)50% 50%","url(Data/2econd.png)50% 50%","url(Data/BetterthenthealternativeXx.png)50% 50%","url(Data/Dr.SunshinediedforthisXx.png)50% 50%","url(Data/WhatssowrongXx.png)50% 50%","url(Data/CheeseinthegreatbehondXx.png)50% 50%","url(Data/LovemenormallyXx.png)50% 50%","url(Data/PicknikTimeXx.png)50% 50%","url(Data/Thankkyou!NowleaveXx.png)50% 50%","url(Data/ThenormaloutfitXx.png)50% 50%","url(Data/ThemostimportantthingintheworldXx.png)50% 50%","url(Data/WhendidIbecomeafraidofthedarkXx.png)50% 50%"]

var tabbys =["‘‘Self-Ish,,","‘‘That was fun, goodbye.,,","‘‘Better than the alternative,,","‘‘Dr.Sunshine died for this","‘‘What's so wrong ?,,","‘‘Cheese in the great beyond !","‘‘Love, Me Normally,,","‘‘Picnic Time !,,","‘‘Thankk you, now leave,,","‘‘The normal outfit.,,","‘‘The most important thing in the world,,","‘‘When did I become afraid of the dark ?,,"]

var para =["I'll shake the apples from my family tree So when the autumn comes to take the leavesWe'll write history books from memoriesThat we shared and will forget Well, I don't remember 2012But I heard the world would turn to hell And compared to that, well I'm doing well So I pray to God it really did Well, they always ask you not to leave And I am as they remember me So when all my friends forget my name No, I won't come back and be the same No, I won't come back and be the same And I'm gonna be my self again Well, if winter comes and takes my life Will it be the death I had in mind? Or will I be captured in the ice To preserve the way I died? Well, at 27, will I see That I was born to be the man I'll be? And if I change my self can I still stay me? Or did I just change my mind? I am a point in time and space And I am the truths that I create And so where my matter takes its stand No, it doesn't matter who I am No, it doesn't matter who I am And I'm gonna be",
"My grip on my secrets slipping while I'm speaking in tongues Screaming at the top of my lungs in the confession booth Take it with a pillar of salt, H.A.L.T., it's not my fault The devil made me do it, but I also kinda wanted to I'm cut from a different kind of meat More than you can chew, hard to swallow me Forget bored stiff, I got rigor mortis, call it morbid curiosity how I Cannot commit to reality, when my third eye's open and I like what I see Baby, I may be crazy but I didn't lose it, no I set it free I can't ignore what's under dance floorboards The rhythm of my heart a dead-as-disco beat But I still move my feet to slip out of this groove, I'm free Now, to row, row, row my boat over the falls And maybe wake up from but a dream, yeah I'm just a psycho, babe, come and go out my mind I didn't lose it babe, there wasn't much to find I'm just a psycho, babe, come and go out my mind I'm only passing through",
"Pink lemonade on autumn bomber coats Peter Pan collars but my daughter's growing up She's gonna be a lot like me But I don't wanna be at all like me Yellow buzzcuts, pulling out stingers You're telling me I'm holding up eleven fingers and Stranger things than death can happen To lab rat girls and pretty white rabbits but Everybody knows that nobody knows that Everybody's in on everybody's business This isn't my first Christmas I know mistletoe when I see it Baby, could you play along with me Baby, would that be alright with you And when we find out what's wrong with me Could you tell me how I'm right for you Baby, could you play along with me Baby, would that be alright with you And when we find out what's wrong with me Could you tell me how could you tell me how And if I'm still pretty Cigarette burns, laugh lines, wide dimples If they could see the future back when times were simple Would they kiss your cheek or yank the bandage off Let you speak or take advantage of how",
"When did I become afraid of the dark? Are my eyeballs just yet to adjust to seeing the light? The room I'm in is still the same, the shadows have not rearranged it No, the only thing that's changed is how I see at night I fumble for the switch and strap on infrareds And wish for sunshine when the morning's somewhere else But I can't change what time it is or dilate my irises Only what I look at, and I'm looking at myself I am not the sunshine, I am not the moon at night Well, who else could I be When I can't hardly see? I am not the sunshine, I am not the moon at night I'm no one if I'm nowhere in between When did I become afraid of the dark? Was it when I left the cave and swore I'd never go back?! If we can't see each other, then there's no more use for hiding I've decided I'll abide it, why deny the color black? I'm not a flower, not a solar powered calculator Damn my eyes for seeing what's not there I'll trade in vision for a practiced intuition Till my fears come to fruition, I'm not scared",
"If everyone's sick, well then nobody can catch it, and if Everybody's different how could anybody match And we're looking through the pockets of the hand-me-downs we've laid out Wondering if we'll fit into the yesterdays we've played out Everybody knows that nobody knows that Everybody's all up in my god damn business This isn't my first kiss, its better to be lost than Loved, now, isn't it? Baby, could you play along with me Baby, would that be alright with you And when we find out what's wrong with me Could you tell me how I'm right for you Baby, could you play along with me Baby, would that be alright with you And when we find out what's wrong with me Could you tell me how could you tell me how And if I'm still pretty Walking bikes home with a scraped-knee sunset Smudged across your brow Warmer tears than you've grown used to since then A toast to the nosebleed seats And the big dream sequence where you're found Guilty of your innocence and gently sent right back to bed Everybody knows that nobody knows that",
"I have mapped the cupboards and drawers Tracked the least walked spots on the floor Happy to be home, safe and warm The shadows by their feet The odd vanishing treat Quietly eating while they sleep So, here's where I'll be raising my kids If I can find someone to start a family with Till then, I'll dream of the day my odds and ends fit I'll wake up, there'll be food on the stove forever and never want for more!  Is thеre cheese in the grеat beyond? Rinds of parmesan Wine to water, night from dawn Life gets short, our teeth grow long Mind me not and I'll mind my own and my mind's Not one bite smaller or lesser than yours Do I belong in right and wrong? Nature, I guess One night, one flung light through this place So I run for cover, over under, left the rind out on the plate Little heart racing and praying, 'something keep me safe' I think it's on my face Okay, one hungry day is nothing come what may But then winter came inside for three nights Left me grinding my teeth between my walls And gripping my dreams tight!",
"In lipstick on the mirror Are the lyrics to my obituary In iambic pentameter, followed parameter Crossing my eyes, dot my T's I was delivered holding scissors I live deliberately, I'm a quitter And a winner anyway Cause I never agreed to participate in this game Won't follow my dreams No, they've all got me waking up screaming I can let them go from me After all there is no 'I' in team And I'd rather be normal. Yes, so normal I suggest that we keep this informal Cause a normal human being wouldn't need To pretend to be normal to be normal Well I guess that's the least that I owe ya To be normal in a way I couldn't be C'mon, c'mon, and love me normally If I could live in third person Well I don't think life would be much worse than it is In the current tense, presently This sentence ending with question marks or dot dot dot Is it courageous or escapist To leave the quarantine when you're contagious It may just be a cold And besides I don't wanna get old I drank myself to death to be the afterlife of the party",
"Six up, five oh, pigs come, I cop n' go The blotter shows they got me on the rocks like Galapagos Good luck finding critters creepy as me They shoulda fried me, I'll give ya PTSD Vodka shots droppin' down the throat they been stompin' on Cockin' guns, lockin' up, the quotas all for shock n' awe Drivin's tirin' And I been hotwirin' to make my get away from the jailbreak riot and Cellmates scrapin' upon the bricks in the basement Tryin' to escape this probation generation too late Crazy fuckers' gotta do the time Committed to the mental ward, committing all the crimes I'm alive and kickin' 'till the split ends fray Maybe plead insane, guilty, but I'm not to blame I'm a slave to the main vein, sprayin' on the mainframe Suffering the infrastructure, hoping I can maintain Oh how I know, how I go, how I go Ask me a question the answer I know Yes or no options don't weigh out and so I don't ever see the cons and the pros You bear a striking resemblance Some kind of semblance of somethin' I been rememberin'",
"They could prescribe you any illness you'd like If you define the terms of your ailments You could sing a pretty malady like a black canary But a crow don't know the smell of carbon monoxide How many years have you been on that couch They could've quilt'd you in the throws by now You draw a line in the sand where it ends and you begin But the tide rolls in, so who knows? Oh well And a little identity never hurt nobody But lately you've been focusing too much on yourself So how many milligrams of you are still left in there Cause back in my day we didn't need no feel-good pills and no psychiatrists No, we just drank ourselves to death, and god damn it, we liked it Who makes the call? What's a symptom, what's a flaw Can it be both? Well I suppose that's an answer Would you give up your humanity for just a touch of sanity Cause God knows it's not like it's cancer And good news to the purists: they've discovered a cure For the symptoms of being alive It's a painless procedure with a low rate of failure",
"White picket fences Barbed wire and trenches Trick or treat. Merry Christmas Howdy neighbor. Thank you Jesus What is he building in that painted lady A participation trophy wife or blonde, blue-eyed baby Wide-eyed and wired The snap-crackle-pop of the Geiger Camouflage billboards for lead-lined Brooks Brothers You elbow the jukebox and sing 'Duck and Cover' And breed out our incisors, feed on white wine and Pfizer It don't look like survival, but buy now or die Suburbia You're not alone The lights are on But no one's home So, welcome home Meyers-Briggs, OK-ULTRA Takes a village to fake a whole culture Your ear to the playground, your eye on the ball Your head in the gutter, your brains on the wall Home is where the heart is You ain't homeless, but you're heartless It's the safest on the market But you still gotta watch where you park it So give me your half-life crisis I can tell that you know where paradise is Where parasites don't care what your blood type is",
"One day you'll look up at the ceiling above If you're lucky you'll be surrounded by the ones that you love when The lights in your eyes fade and life flashes by One day you're going to die One day you'll sleep and you'll never wake again Heaven, hell, Nirvana, nothing, no-one knows how it ends Rest in peace or pieces and won't even know why One day you're going to die Read your horoscopes, your palms and tarot cards But either way your destination ain't very far You could drown, or choke, or burn, or be hit by a car What doesn't kill you makes you stronger But something will eventually One day you'll look back at the life that you led, No more future left to fear that you'll have the past to regret But your worries will be over if you truly realize One day you're going to die Take it away, hands In the fabric of time, and in the vastness of space A billion amounts to nothing in infinity's face At most a couple generations will remember the ways in which Your life never mattered",
"I am not the sunshine, I am not the moon at night Well, who else could I be When I can't hardly see? I am not the sunshine, I am not the moon at night I'm no one if I'm nowhere in between The future must know where you've been The past predicts the state you're in The present did and will not last Is, isn't, was, have, hasn't, has All that I ask is keep those empty frames If nobody's in them then no one is to blame For your self-portraits, sign another name Well who should I be, then, if I'll never be the same? I will be my sunshine, I will be my moon at night Who else could I be when I can't fucking see? I will be my sunshine, I will be my moon at night I'm nowhere now, here's no one now to be And if dreams can come true What does that say about nightmares? I'll stay awake tonight"]

function boom(x){gsap.to(".barre,.mouth",{duration:1,opacity:0.3,pointerEvents:"none"}),gsap.to("#tien",{duration:2,opacity:0.3,delay:0.7}),gsap.to("#info",{duration:2,opacity:1,delay:1,pointerEvents:"all"}),gsap.from("#nom",{duration:1.5,y:-100,delay:0.7}),nom.innerHTML=tabbys[x],nik.innerHTML=para[x],dessin.style.background=img[x],dessin.style.backgroundSize="contain",dessin.style.backgroundRepeat="no-repeat",info.style.pointerEvents="all"}

back.onclick=function(){gsap.to(".barre,.mouth",{duration:1,opacity:1,delay:1,pointerEvents:"all"}),gsap.to("#tien",{duration:1,opacity:1}),gsap.to("#info",{duration:1.5,opacity:0,pointerEvents:"none"}),gsap.fromTo("#back",{scale:0.8},{scale:1})}

window.onmousemove=function(){

    //window.event.clientX contient les coordonnées de la souris sur l'axe horizontal en pixel
    //window.event.clientY


    var palo = ((window.event.clientX/window.innerWidth)*100)
    var lopa = ((window.event.clientY/window.innerHeight)*100)

    var tt = ((window.event.clientX/window.innerWidth)*100)-75

    gsap.to("#parade",{x:palo/2,y:lopa/2})
    gsap.to("#NORMAL",{x:palo/-2,y:lopa/-2})
    gsap.to("#dance2",{x:tt,y:lopa/3})

    gsap.to("#VIV",{x:palo,y:((window.event.clientY/window.innerHeight)*130),rotate:((window.event.clientX/window.innerWidth)*-25)})
    gsap.to("#VIV2,#VIV4,#VIV5,#VIV6,#VIV7",{x:palo,y:lopa,stagger:0.1})
    gsap.to("#VIV3",{x:palo,y:((window.event.clientY/window.innerHeight)*-10),rotate:((window.event.clientX/window.innerWidth)*25)})

    gsap.to("#WILLWOOD3",{x:palo,y:((window.event.clientY/window.innerHeight)*-10),rotate:((window.event.clientX/window.innerWidth)*50)+-50})
    gsap.to("#WILLWOOD2,#WILLWOOD6,#WILLWOOD7",{x:palo,y:lopa,stagger:0.1})
    gsap.to("#WILLWOOD",{x:palo,y:((window.event.clientY/window.innerHeight)*200)})
    gsap.to("#WILLWOOD4,#WILLWOOD5",{x:((window.event.clientX/window.innerWidth)*200),y:lopa*1.5,stagger:0.1})

    gsap.to("#mouthup",{y:((window.event.clientY/window.innerHeight)*65),rotate:((window.event.clientX/window.innerWidth)*-25)})
    gsap.to("#mouthdo",{y:((window.event.clientY/window.innerHeight)*-65),rotate:((window.event.clientX/window.innerWidth)*25)})

    gsap.to("#mouthup2",{y:((window.event.clientY/window.innerHeight)*-65),rotate:((window.event.clientX/window.innerWidth)*-25)})
    gsap.to("#mouthdo2",{y:((window.event.clientY/window.innerHeight)*65),rotate:((window.event.clientX/window.innerWidth)*25)})

    gsap.to("#dessin",{skewY:window.event.clientY/900,skewX:window.event.clientX/900})
    gsap.to("#monstre1,#monstre2,#monstre3,#monstre4,#monstre5,#monstre10",{skewY:window.event.clientY/500,skewX:window.event.clientX/500})
}

var intro = new gsap.timeline()

intro.from(".bob1,.bob2,.bob3,.bob4",{duration:1,opacity:0,stagger:0.2,delay:0.5})

intro.from(".bob5,.bob6,.bob7,.bob8,#CROSS",{duration:1.25,opacity:0,stagger:0.2})

var intro2 = new gsap.timeline({delay:3.5})

intro2.from(".will",{duration:1.25,opacity:0,stagger:0.3})

intro2.from(".wood",{duration:0.6,opacity:0,stagger:0.1})

intro2.to("#INTRO",{duration:1,opacity:0,display:"none"})

intro2.from("#page1,header",{duration:1.25,opacity:0,delay:1.2})

gsap.from("body",{overflow:"hidden",delay:9})

var mori = new Audio()
mori.src="Data/Music/mementomori.mp3"
mori.play()
mori.volume = 0.5;
mori.loop = true

var skel = new Audio()
skel.src="Data/Music/DootDoot.mp3"
skel.volume = 0.1;

var thune = new Audio()
thune.src="Data/Music/thune.mp3"
thune.volume = 0.1;

var Doot= document.querySelector('.doot') 

Doot.addEventListener('click',function(){

    //enleve ou ajoute la class dootimage
    Doot.classList.toggle("dootimage");

    gsap.fromTo(".doot",{scale:0.8},{scale:1})

    if (!mori.paused) {
      ////action quand la musique est en play
        mori.pause()
        skel.play()
    } else{
         ////action quand la musique est en pause
        mori.play()
        skel.play()
    }
})

bla.onclick=function(){gsap.fromTo("#bla",{scale:0.8},{scale:1}),thune.play()}

///////////////////DEBUG MODE/////////////////////////////////////////

document.addEventListener("keypress",function(event){var touche = event.key;
    if(touche === "1"){gsap.to(window,{duration:0,scrollTo:"#page1"})}
    if(touche === "2"){gsap.to(window,{duration:0,scrollTo:"#page2"})}
    if(touche === "3"){gsap.to(window,{duration:0,scrollTo:"#page3"})}
    if(touche === "4"){gsap.to(window,{duration:0,scrollTo:"#page4"})}
    if(touche === "5"){gsap.to(window,{duration:0,scrollTo:"#page5"})}
    if(touche === "6"){gsap.to(window,{duration:0,scrollTo:"#page6"})}
    if(touche === "m"){Doot.classList.toggle("dootimage");
    gsap.fromTo(".doot",{scale:0.8},{scale:1})
    if (!mori.paused) {mori.pause()
        skel.play()} 
    else{mori.play()
        skel.play()}}
    if(touche === "y"){gsap.to("#INTRO",{duration:0,display:"none"})}})

///////////////////////HALLELUJAH !//////////////////////////////////