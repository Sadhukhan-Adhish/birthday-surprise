// =============================
// GET ELEMENTS
// =============================

const loader = document.getElementById("loader");
const welcome = document.getElementById("welcome");
const passwordPage = document.getElementById("passwordPage");
const countdown = document.getElementById("countdown");
const countText = document.getElementById("countText");
const hero = document.getElementById("hero");
const scrollSection=document.getElementById("scrollSection");
const scroll=document.getElementById("scroll");
const letterSection = document.getElementById("letterSection");
const surpriseSection=document.getElementById("surpriseSection");
const surpriseText=document.getElementById("surpriseText");
const cakeSection=document.getElementById("cakeSection");
const finalSection=document.getElementById("finalSection");
const bgMusic=document.getElementById("bgMusic");
bgMusic.volume=.6;
const beep = new Audio("music/beep.mp3");
beep.volume = 0.6;

const success = new Audio("music/success.mp3");
success.volume = 0.6;

// success.play().catch(err => console.log(err));

// =============================
// LOADER
// =============================

setTimeout(() => {

    loader.style.display = "none";
    welcome.style.display = "flex";

}, 3000);

// =============================
// CONTINUE BUTTON
// =============================

document.getElementById("startBtn").addEventListener("click", () => {

    welcome.style.display = "none";
    
    passwordPage.style.display = "flex";

});

// =============================
// PASSWORD
// =============================

function checkPassword() {

    let pass = document.getElementById("pass").value.trim();

    if (pass === "1808") {

        passwordPage.style.display = "none";
        countdown.style.display = "flex";

        startCountdown();

    } else {

        document.getElementById("wrong").innerHTML = "🚫 ACCESS DENIED";

    }

}

// =============================
// COUNTDOWN
// =============================

function startCountdown() {

    let number = 3;

    countText.innerHTML = number;
    beep.pause();
beep.currentTime = 0;
beep.play().catch(()=>{});

    const timer = setInterval(() => {

        number--;

        if(number > 0){

    countText.innerHTML = number;

    beep.pause();
    beep.currentTime = 0;
    beep.play().catch(()=>{});

}

        else if (number === 0) {

            countText.innerHTML = "1";

        }

        else {

            clearInterval(timer);

// Stop beep immediately
beep.pause();
beep.currentTime = 0;

// Play success sound
success.currentTime = 0;
success.play().catch(()=>{});

countdown.style.display = "none";

bgMusic.currentTime = 0;
bgMusic.play().catch(()=>{});

hero.style.display = "flex";
hero.classList.add("fadeIn");

hero.style.display = "flex";
hero.classList.add("fadeIn");

setTimeout(()=>{
    typeWriter();
},500);

        }

    }, 1000);

}

// =============================
// TYPEWRITER
// =============================

const text = "Happy Birthday Shreya ❤️";

let index = 0;

function typeWriter() {

    if (index < text.length) {

        document.getElementById("typing").innerHTML += text.charAt(index);

        index++;

        setTimeout(typeWriter, 90);

    }

    else {

        document.getElementById("message").classList.add("fade");

        setTimeout(() => {

            document.getElementById("giftBtn").classList.add("pop");

        }, 400);

    }

}

// =============================
// GIFT BUTTON
// =============================

const giftSection = document.getElementById("giftSection");

document.getElementById("giftBtn").addEventListener("click", () => {

    hero.style.display = "none";

    giftSection.style.display = "flex";

});

// const letterSection = document.getElementById("letterSection");

const gift1 = document.getElementById("gift1");

gift1.addEventListener("click",()=>{

    gift1.classList.add("shake");

    setTimeout(()=>{

        giftSection.style.display="none";

        scrollSection.style.display="flex";

        gift1.classList.remove("shake");

    },700);

});

document.getElementById("backBtn").addEventListener("click",()=>{

    letterSection.style.display="none";

    giftSection.style.display="flex";

});
/* ---------- MAGIC SCROLL ---------- */

scroll.addEventListener("click",()=>{

    scrollSection.style.display="none";

    letterSection.style.display="flex";

});
const lines = [

"Not every gift",

"comes in a box...",

"Some are made",

"with time...",

"care...",

"and a little bit",

"of heart ❤️"

];

document.getElementById("gift2").addEventListener("click",()=>{

    giftSection.style.display="none";

    surpriseSection.style.display="flex";

    document.getElementById("backSurprise").style.display="none";

    let i=0;

    surpriseText.innerHTML="";

    const interval=setInterval(()=>{

        surpriseText.innerHTML=lines[i];

        i++;

        if(i===lines.length){

            clearInterval(interval);

            setTimeout(()=>{

    document.getElementById("backSurprise").style.display="block";

},1500);

            document.getElementById("backSurprise").style.display="block";

        }

    },1800);

});
document.getElementById("gift3").addEventListener("click",()=>{

    giftSection.style.display="none";

    cakeSection.style.display="flex";

    document.getElementById("backCake").style.display="none";

});

let blown=0;

document.querySelectorAll(".candle").forEach(candle=>{

    candle.addEventListener("click",()=>{

        const flame=candle.querySelector(".flame");

        if(flame.style.display!="none"){

            flame.style.display="none";

            blown++;

        }

        if(blown==3){

            setTimeout(()=>{

                createConfetti();

setTimeout(()=>{

    cakeSection.style.display="none";

    finalSection.style.display="flex";

    launchFireworks();

    setTimeout(()=>{

        document.getElementById("backFinal").style.display="block";

    },5000);

},4500);

            },500);

        }

    });

});

function createConfetti(){

    const box=document.getElementById("confetti");

    box.style.display="block";

    for(let i=0;i<180;i++){

        const piece=document.createElement("div");

        piece.className="confetti";

        piece.style.left=Math.random()*100+"vw";

        piece.style.background=

        `hsl(${Math.random()*360},100%,60%)`;

        piece.style.animationDelay=Math.random()*2+"s";

        piece.style.animationDuration=

        (3+Math.random()*2)+"s";

        box.appendChild(piece);

    }

}

function launchFireworks(){

    const area=document.getElementById("fireworks");

    setInterval(()=>{

        const fw=document.createElement("div");

        fw.className="firework";

        fw.style.left=Math.random()*100+"vw";

        fw.style.top=Math.random()*80+"vh";

        fw.style.background=
        `hsl(${Math.random()*360},100%,60%)`;

        area.appendChild(fw);

        setTimeout(()=>{

            fw.remove();

        },1800);

    },350);

}

function sparkle(){

const hero=document.getElementById("hero");

setInterval(()=>{

const s=document.createElement("div");

s.className="sparkle";

s.style.left=Math.random()*100+"vw";

s.style.top=Math.random()*100+"vh";

hero.appendChild(s);

setTimeout(()=>{

s.remove();

},4000);

},300);

}

// const cursor=document.getElementById("cursor");

// document.addEventListener("mousemove",(e)=>{

// cursor.style.left=e.clientX+"px";

// cursor.style.top=e.clientY+"px";

// });

// Back from Surprise
// Back from Surprise
const backSurprise = document.getElementById("backSurprise");

if(backSurprise){

    backSurprise.addEventListener("click",()=>{

        surpriseSection.style.display="none";
        giftSection.style.display="flex";

    });

}

// Back from Cake
const backCake = document.getElementById("backCake");

if(backCake){

    backCake.addEventListener("click",()=>{

        cakeSection.style.display="none";
        giftSection.style.display="flex";

    });

}

// Back from Final
const backFinal = document.getElementById("backFinal");

if(backFinal){

    backFinal.addEventListener("click",()=>{

        finalSection.style.display="none";
        giftSection.style.display="flex";

        backFinal.style.display="none";

        blown=0;

        document.querySelectorAll(".flame").forEach(flame=>{

            flame.style.display="block";

        });

    });

}

