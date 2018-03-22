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

// EVENT LISTENER: CALL RANDOMIZER - RESET COUNTER - CLOSE ALL CARDS
restart.addEventListener("click", function (e) {
    e.preventDefault();

    randomizer(); // Shuffling cards
    // Resetting the counter - I have to do both
    counterB.innerHTML = 0;
    count = 0;

    clearDeck(); // Close all cards
    cardArray = []; // Clear Array
    successArray = [];
    zero();
    cards.addEventListener("click", tiktok, true);
})


// LISTENER: OPEN A CARD - COUNTER
cards.addEventListener("click", showCard, );
cards.addEventListener("click", compare); //Cards are compared FIRST
cards.addEventListener("click", tiktok, true);

// FUNTION RESET CARDS
function clearDeck() {

    const visibleCards = document.querySelectorAll('.show', '.match'); // select all the cards shown

    visibleCards.forEach(function (e) {
        e.classList.remove('open', 'show', 'match');
    });
}

let cardArray = []; //Empty Array for selected cards
let successArray = []; //All open cards
let success = 0; // Initializing counter for successful hits

// FUNCTION - COMPARE THE CARDS
function compare(e) {

    //Start Counting...
    //showCard(e); // ...Show the card..
    if (e.target.nodeName === "LI") { // If a list element is hit...
        console.log("LI!!!!");
        cardArray.push(e.target); //Place current card into array...
        console.log(cardArray);
        counter(); //Start counting moves
        let total = cardArray.length;

        cards.removeEventListener("click", tiktok, true); // Don't start timer again

        if (total === 2) { // ...When 2 cards selected...
            console.log("2!!!")
            console.log(total);
            //cards.removeEventListener("click", showCard);

            // toggle back the flip function
            //setTimeout(_=>)
            if (cardArray[0].classList.value === cardArray[1].classList.value) { // ...compare the 2 cards...

                match(e);
                console.log("match!!!");
                
                success = success + 2; // Increment successfull hits counter
                console.log(success);
                //cards.addEventListener("click", showCard);
            }

            else {
                setTimeout(close, 600); // if no match close them
                console.log("miss!!!");
                
                //cards.addEventListener("click", showCard, true);
            }
            /*
            setTimeout(function () {
                cards.addEventListener("click", showCard); 
                console.log("time!!!");
            }, 1000)
            */
            
        }

        if (success === 16) {
            console.log("You got it!!!");
            openModal();
            hold();
            success = 0; // zero counter
        }

    }
}

// FUNCTION - SHOW CARD
function showCard(e) {
    e.preventDefault();
    e.stopPropagation();

    e.target.classList.add("open"); // change card color
    e.target.classList.add("show"); // display the image

}

// FUNCTION - CLOSE CARD
function close(e) {
    cardArray[0].classList.remove('open');
    cardArray[0].classList.remove('show');
    cardArray[1].classList.remove('open');
    cardArray[1].classList.remove('show');
    cardArray = [];
    cards.addEventListener("click", showCard);
    console.log("time!!!");
}

// FUNCTION - SELECTED CARD
function match(e) {
    cardArray[0].classList.add("match");
    cardArray[1].classList.add("match");
    cardArray = [];
}

//FUNCTION - MOVES COUNTER
// Var for Counter
const counterB = document.getElementById("moves"); // Get the value
console.log(counterB);

let count = 0; // Initialize the counter

function counter(e) {

    count += 1;
    if (count % 2 == 0) { // if the count is an even number..
        counterB.innerHTML = count / 2; //...pass it in the counter and devide by 2 - we need 1 every 2
    }
}

// TIMER SET:
// The Vars:
const start = document.getElementById("start");
const pause = document.getElementById("pause");
const reset = document.getElementById("reset");
clock = document.getElementById("time");
let seconds = 0;
let int; // Stores the interval to be accesed globally

//FUNCTION - INCREMENT SEC - ADD TO BOARD
function run() {
    seconds++ // seconds are incremented
    clock.innerHTML = seconds + "sec"; //pass seconds to the html
}

//FUNCTION - INCREMENT SEC - ADD TO BOARD
function tiktok() {
    clearInterval(tiktok); // ...stop
    int = setInterval(run, 1000); // configure interval
}

//FUNCTION - PAUSE
function hold() {
    clearInterval(int);
}

//FUNCTION - RESET
function zero() {
    clearInterval(int);
    clock.innerHTML = 0;
    seconds = 0;
}

//MODAL FUNCTIONALITY
// Get the modal
var modal = document.getElementById("my-modal");
console.log(modal);

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
console.log(btn);

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// FUNCTION - OPEN THE MODAL
function openModal() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
    console.log("click");
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (e) {
    if (e.target == modal) {
        modal.style.display = "none";
    }
}


/*
const cardsAncientGreece = [
    { card: 1,
        img: "images/labrys.svg"
    },
    { card: 2,
        img: "images/laurel.svg"
    },
    { card: 3,
        img: "images/lyre.svg"
    },
    { card: 4,
        img: "images/parthenon.svg"
    },
    { card: 5,
        img: "images/shield.svg"
    },
    {card: 6,
        img: "images/theatre.svg"
    },
    {card: 7,
        img: "images/trireme.svg"
    },
    {card: 8,
        img: "images/helmet.svg"
    }
]



/*
someSelector.addEventListener('click', function(event) {

   event.target // this is the clicked element

   // you can call any function here and pass this element as an argument to this function

   doSomeThings(event.target);

});
*/