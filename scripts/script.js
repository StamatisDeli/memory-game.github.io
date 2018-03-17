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
    // Close all cards
})

// VAR FOR COUNTER
const counterB = document.getElementById("moves"); // Get the value
console.log(counterB);

 // Initialize the counter
let count = 0;

// LISTENER - OPEN A CARD - UPDATE COUNTER
cards.addEventListener("click", function (evt) {
    evt.preventDefault(); 
    evt.target.classList.add("open-card");
    var img = evt.target.firstElementChild; // Select the image
    img.style.display = "block";
    //img.setAttribute("class", "img-open");
   //img.classList.toggle("img-open");*/
   // console.log(icon);

   count += 1;
   if (count %2==0) { // if the count is an even number..
        counterB.innerHTML = count/2; //...pass it in the counter and devide by 2 - we need 1 every 2
   }
   // if the card is already open don't count
 
});