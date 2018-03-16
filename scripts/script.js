/* MEMORY GAME */


/* GENERATE A RANDOM ICON ORDER */
// THE VARS
const icons = document.querySelector("ul.deck"); // select the icon list
console.log(icons);
const restart = document.getElementById("shuffle"); //select the restart icon
console.log(restart);

// FUNCTION LIST RANOMIZER
function randomizer (){
    for (let i = icons.children.length; i >= 0; i--) {
     icons.appendChild(icons.children[Math.random() * i | 0]);
    }
}

// CALL RANDOMIZER WHEN WINDOW OPENS
window.onload = randomizer();
console.log(randomizer);

// EVENT LISTENER: CALL RANDOMIZER WHEN RESTART BUTTON IS CLICKED 
restart.addEventListener("click", function(evt){
    evt.preventDefault();
    randomizer();
    counterB.innerHTML= 0;
})

// MOVE CLICKER - 1 MOVE FOR 2 CLICKS
const counterB =  document.getElementById("moves"); // GET THE VALUE
console.log(counterB.value);

// EVENT LISTENER - CLICKS ON THE CARDS
let count = 0;
icons.addEventListener("click", function(evt){
    evt.preventDefault();
    count+=1;
    if (count%2==0){
        counterB.innerHTML= count;
    }
    console.log("a click on card!");
    
})