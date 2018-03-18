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

// EVENT LISTENER: CALL RANDOMIZER - RESET COUNTER - CLOSE ALL CARDS
restart.addEventListener("click", function (e) {
    e.preventDefault();
    
    randomizer();
    // Resetting the counter - I have to do both
    counterB.innerHTML = 0;
    count = 0;
    // DOTO Close all cards
    //closeAll()
    const clearCards = document.querySelectorAll('.show'); // select all the cards shown
    clearCards.forEach(function(e) {
        e.classList.remove('open', 'show');
    });
})

// LISTENER: OPEN A CARD - COUNTER
cards.addEventListener("click", function (e) {
    e.preventDefault(); 
    
    showCard(e);
    counter();

});

//FUNCTION - COUNTER
// Var for Counter
const counterB = document.getElementById("moves"); // Get the value
console.log(counterB);
// Initialize the counter
let count = 0;

function counter (e){
    count += 1;
    if (count %2==0) { // if the count is an even number..
         counterB.innerHTML = count/2; //...pass it in the counter and devide by 2 - we need 1 every 2
    }
}

// FUNCTION - SHOW CARD
function showCard (e){
 
    e.target.className += " open"; // change card color
    e.target.className += " show"; // display the image

}

/*
someSelector.addEventListener('click', function(event) {

   event.target // this is the clicked element

   // you can call any function here and pass this element as an argument to this function

   doSomeThings(event.target);

});
*/