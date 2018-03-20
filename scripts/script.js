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
    
    randomizer(); // Shuffling cards
    // Resetting the counter - I have to do both
    counterB.innerHTML = 0;
    count = 0;
    
    clearDeck(); // Close all cards
})

let cardArray = []; //Empty Array for selected cards
// LISTENER: OPEN A CARD - COUNTER
cards.addEventListener("click", function (e) {
    e.preventDefault(); 

    if (e.target.nodeName==="LI"){ // If a list element is hit...
        console.log("LI!!!!")
        counter(); //Start Counting...
/*
        const data = e.target.dataset.id;
        console.log(data);
        
        cardArray.push(e.target); //Place current card into array...
        var hit = cardArray[0].dataset.id; //=== cardArray[1].data.id;
        var hot = cardArray[1].dataset.id;
        console.log (hit);
        console.log (hot);
        // console.log(cardArray);
*/
        showCard(e); // ...Show the card..
        cardArray.push(e.target); //Place current card into array...
            console.log(cardArray);
        const total = cardArray.length;
        console.log(total);
        
        if (total===2) { // ...When 2 cards selected...
            console.log("2!!!")
            console.log(total);
            if (cardArray[0].classList.value !== cardArray[1].classList.value ){ // ...compare the 2 cards...
                setTimeout(close, 500); // if no match close them
                console.log("miss!!!");
            }
            else {
                console.log("match!!!");
                cardArray = [];
            }
            //cardArray = []; // Eliminate Array content
            console.log(cardArray)
        }
    }

});

function clearDeck (){

    const visibleCards = document.querySelectorAll('.show'); // select all the cards shown

    visibleCards.forEach(function(e) {
        e.classList.remove('open', 'show');
    });
}

// FUNCTION - SHOW CARD
function showCard (e){
    e.target.classList.add("open"); // change card color
    e.target.classList.add("show") ; // display the image
}

function close (e){
    cardArray[0].classList.remove('open');
    cardArray[0].classList.remove('show');
    cardArray[1].classList.remove('open');
    cardArray[1].classList.remove('show');
    cardArray = [];
}

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