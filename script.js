// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const collage = document.getElementById("collage-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");
// const collage = document.getElementById("collage-photos");
const memories = document.getElementById("memories-title");



// Click Envelope

envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout( () => {
        document.querySelector(".letter-window").classList.add("open");
    },50);
});

// Logic to move the NO btn

noBtn.addEventListener("mouseover", () => {
    const min = 200;
    const max = 200;

    const distance = Math.random() * (max - min) + min;
    const angle = Math.random() * Math.PI * 2;

    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;

    noBtn.style.transition = "transform 0.3s ease";
    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

// Logic to make YES btn to grow

let yesScale = 1;

yesBtn.style.position = "relative"
yesBtn.style.transformOrigin = "center center";
yesBtn.style.transition = "transform 0.3s ease";

noBtn.addEventListener("mouseover", () => {
     yesScale += 2;

     if (yesBtn.style.position !== "fixed") {
         yesBtn.style.position = "fixed";
         yesBtn.style.top = "50%";
         yesBtn.style.left = "50%";
         yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
     }else{
         yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
     }
 });

// YES is clicked
let Clickcount = 0;

yesBtn.addEventListener("click", () => {
    Clickcount++;


        // FIRST CLICK
        if (Clickcount === 1) {
            title.textContent = "HELL YEAHHH!!!";
            catImg.src = "cat_dance.gif";
            document.querySelector(".letter-window").classList.add("final");
            finalText.style.transform = `
                translate(0, -50%) `;

            // buttons disappear
            noBtn.style.display = "none";

            finalText.style.display = "block";
            // undo scaling...
            yesScale = 1;
            // NEW POSITION FOR YES
            yesBtn.style.transition = "none";
            yesBtn.style.transform = `
                translate(80%, 200%)
                translateX(20px)
                scale(${yesScale})`;
            // YES button reappears to be clicked
            yesBtn.style.display = "block"; 

}

        // SECOND CLICK -> go to collage
        if (Clickcount === 2){
            memories.textContent = "Memories <3";
            memories.style.color = "white"; 
            collage.style.display = "block";
            document.querySelector(".letter-window").classList.add("collage");


            // letter screen & buttons disappear
            letter.style.display = "none";
            buttons.style.display = "none";

}
});
