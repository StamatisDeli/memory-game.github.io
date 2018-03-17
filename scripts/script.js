/* MEMORY GAME */

// GENERATE A RANDOM ICON ORDER
// THE VARS
const cards = document.querySelector("ul.deck"); // select the cards list
console.log(cards);
const restart = document.getElementById("shuffle"); //select the restart icon
console.log(restart);

// FUNCTION  - LIST RANOMIZER
function randomizer() {
    for (let i = cards.children.length; i >= 0; i--) {
        cards.appendChild(cards.children[Math.random() * i | 0]);
    }
}

// CALL RANDOMIZER WHEN WINDOW OPENS
window.onload = randomizer();
console.log(randomizer);

// EVENT LISTENER: CALL RANDOMIZER WHEN RESTART BUTTON IS CLICKED 
restart.addEventListener("click", function (evt) {
    evt.preventDefault();
    randomizer();
    // Resetting the counter - I have to do both
    counterB.innerHTML = 0;
    count = 0;
})

// FUNCTION - COUNT CLICKS ON CARDS - 1 MOVE FOR 2 CLICKS
const counterB = document.getElementById("moves"); // Get the value
console.log(counterB);

let count = 0; // Initialize the counter

function counter(evt) {
    count += 1;
    if (count % 2 == 0) { // if the count is an even number..
        counterB.innerHTML = count; // ...pass it in the counter
    }
    console.log("a click on card!");
}

// EVENT LISTENER - PASSING: COUNTER
cards.addEventListener("click", counter);

// FUNCTION - OPEN A CARD
cards.addEventListener("click", function (evt) {
    evt.preventDefault();
    evt.target.classList.toggle("open-card");
    var img = evt.target.firstElementChild; // Select the image
    img.style.display = "block";
    //img.setAttribute("class", "img-open");
   //img.classList.toggle("img-open");*/
   // console.log(icon);
});
/*
const icon = cards.querySelector("img.icon");
console.log(icon);

icon.addEventListener("click", function(evt){
    evt.target.classList.toggle("icon-open");
})
*/