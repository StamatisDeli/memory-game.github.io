/* MEMORY GAME */


/* GENERATE A RANDOM ICON ORDER */
// THE VARS
var icons = document.querySelector("ul.deck"); // select the icon list
var restart = document.getElementById("shuffle"); //select the restart icon
console.log(restart);

// FUNCTION LIST RANOMIZER
function randomizer (){

    for (var i = icons.children.length; i >= 0; i--) {
     icons.appendChild(icons.children[Math.random() * i | 0]);
    }
}

// CALL RANDOMIZER WHEN WINDOW OPENS
window.onload = randomizer();

// FUNCTION CALL RANDOMIZER WHEN RESTART BUTTON IS CLICKED 
restart.addEventListener("click", function(evt){
    evt.preventDefault();
    randomizer();
})
console.log(icons);
console.log(randomizer);
// 