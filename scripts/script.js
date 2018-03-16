/* MEMORY GAME */


/* GENERATE A RANDOM ICON ORDER */
// THE VARS
const cards = document.querySelector("ul.deck"); // select the cards list
console.log(cards);
const restart = document.getElementById("shuffle"); //select the restart icon
console.log(restart);

// FUNCTION LIST RANOMIZER
function randomizer (){
    for (let i = cards.children.length; i >= 0; i--) {
     cards.appendChild(cards.children[Math.random() * i | 0]);
    }
    console.log(cards);
}

// CALL RANDOMIZER WHEN WINDOW OPENS
window.onload = randomizer();
console.log(randomizer);

// EVENT LISTENER: CALL RANDOMIZER WHEN RESTART BUTTON IS CLICKED 
restart.addEventListener("click", function(evt){
    evt.preventDefault();
    randomizer();
    // Resetting the counter
    counterB.innerHTML= 0;
    count=0;
})

// MOVE CLICKER - 1 MOVE FOR 2 CLICKS
const counterB =  document.getElementById("moves"); // GET THE VALUE
console.log(counterB);

// EVENT LISTENER - CLICKS ON THE CARDS
let count = 0; // Initialize the counter

cards.addEventListener("click", function(evt){
    evt.preventDefault();

    count+=1;
    if (count%2==0){
        counterB.innerHTML= count;
    }
    console.log("a click on card!");
    evt.target.classList.toggle("openCard");
})

// FUNCTION - OPEN A CARD
//const icon = document.getElementsByClassName("icon"); // select the icon
/*
const icon = 
console.log(icon);

icon.addEventListener("click", function(evt){
    evt.target.classList.toggle("openIcon");
})

const pic = cards.firstChild();
console.log (pic);

*/