# Memory Game Project

## Table of Contents

* [Instructions](#instructions)
* [Journal](#journal)

## Instructions

The starter project has some HTML and CSS styling to display a static version of the Memory Game project. You'll need to convert this project from a static project to an interactive one. This will require modifying the HTML and CSS files, but primarily the JavaScript file.

To get started, open `js/app.js` and start building out the app's functionality

For specific, detailed instructions, look at the project instructions in the [Udacity Classroom](https://classroom.udacity.com/me).

## Journal

This is a journal regarding the development of the game

15/03/2018

1. Make a welcome screen and a separate game board screen for big gameboard real estate.

2. Randomise the icons with .random?
maybe make then an object and manipulate their array?
I found this in StackOverflow:

var ul = document.querySelector('ul');
for (var i = ul.children.length; i >= 0; i--) {
    ul.appendChild(ul.children[Math.random() * i | 0]);
}
    Done!

3. I need to pass this in a function, so it triggers when the page is loaded, or the restart button is clicked.
    Done!

4. Need event listener for counting clicks that open a card,
Count and every 2 clicks, add 1 move, %2=0, 
I found a jquery function and modified it:
http://jsfiddle.net/PKcrd/67/

var count = 0;
$('button').click(function(){
     count++;
     if (count%2==0){ // modification
    $(this).text("clicked "+count+" times")}
});
it works on jfiddle! I will adopt this logic!
    Done! but I am not sure I will keep it.

Counter has tobbe reset on reload.
    Done!
    
Maybe there should be a conditional about when to count.

5. How to flip cards: 
a. hide/show
b. toggle class and or hide/show
c. how do I compare them?

6. When unmatched, flip them closed

7. When matched, keep them open

8. When all cards are open, pop a congratulations modal message.
local storage for  leaderboard


Note from Nikolas:
Something cool you can do with the selection of cards:

- Have an array to hold which cards are currently selected. i.e. `const selectedCards = [];`

- When you select a card, add it to this array. `selectedCards.push(cardIndex);` / `[3]`

- Now you can check how many cards are selected by checking the length of the array. `selectedCards.length // 1`

- And when you have 2 items in the array, you can check if they are the same. `selectedCards[0] === selectedCards[1]`



