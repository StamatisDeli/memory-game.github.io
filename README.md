# Memory Game Project

## Table of Contents

##Play The Game
https://stamatisdeli.github.io/memory-game.github.io/

* [Instructions](#instructions)
* [Journal ](#journal)
* [Aknowledgements](#acknowledgements)
* [Image Sources](#decorative vectors from:)

## Instructions

The starter project has some HTML and CSS styling to display a static version of the Memory Game project. You'll need to convert this project from a static project to an interactive one. This will require modifying the HTML and CSS files, but primarily the JavaScript file.

To get started, open `js/app.js` and start building out the app's functionality

For specific, detailed instructions, look at the project instructions in the [Udacity Classroom](https://classroom.udacity.com/me).

## Journal

This is a journal regarding the development of the game.
The numebered items are the steps I came up with.
I passed the current date I worked on a numbered task.

15/03/2018 Starting Date

1. Make a welcome screen and a separate game board screen for big gameboard real estate.
2. Randomise the icons with .random? maybe make then an object and manipulate their array?
    I found this in StackOverflow:

    var ul = document.querySelector('ul');
    for (var i = ul.children.length; i >= 0; i--) {
        ul.appendChild(ul.children[Math.random() * i | 0]);
    }
        Done!
3. I need to pass this in a function, so it triggers when the page is loaded, and the restart button is clicked.
    Done!
    18/03/2018
        Doing reset function for the cards. I realized that I have to iterate through all list items, and check each one (loop). 
        Done.
4. Need event listener for counting clicks that open a card, Count and every 2 clicks, add 1 move %2=0 maybe??
    I found a jquery function and modified it: http://jsfiddle.net/PKcrd/67/

            var count = 0;
            $('button').click(function(){
                count++;
                if (count%2==0){ // modification
                $(this).text("clicked "+count+" times")}
            });
        it works on jfiddle! I will adopt this logic!
            Done! but I am not sure I will keep it.

    - Counter has to be reset on reload.
        Done!
    - Problem: it resets, but continues to count from where it left!
        Done!

    17/03/18
        - Problem: Counter increments by 2. I hadn't noticed.
            Done! It was simple (wasted enough time though).
        - Maybe there should be a conditional about when to count.
            Done!: Passing the counter into the event listener does not let the counter count the opened cards.I don't know why!
    18/03/2018
            Update: I passed it into a separate function

5. How to flip cards: 
    16/03/2018
        - hide/show HOW?
        toggle class and/or hide/show
        I think I will make a class for hidden and toggle that with js. I had it wrong!
    17/03/2018
        After a frustrating day I found that targeting had to be done with a loop in the siblings
        https://stackoverflow.com/questions/925307/how-to-get-lastsibling-by-javascript -Rejected. 
        I decided to remove the container divs of the images.
        I used a selector for childElement. I finally managed to use event delegation, not as good as I wanted though.
    18/03/2018
        Solved: I had a CSS mistake that's why I couldn't manipulate the images.

20/03/2018
        6. When unmatched, flip them closed
            -How do I compare cards?
        7. When matched, keep them open
        The key was when to clear the array. I went backwards and defined what would happen on unmatch
         -BUG: every second time the restart is hit, first card closes 
            DONE!
    22/03/18
        -BUG: when clicking fast, a card stays open
        DONE! : I had e.listener for all cards. Trick is: open one card, open 2 cards, compare them!!!!

22/03/18
8. When all cards are open, pop a congratulations modal message.
    - make another function of counting cards and fire the modal when its 16
    Done!
    - 
9. Timer proper functionality. I made 2 codepens for stopwatch, too!
    DONE!
24/03/18
10. -Star rating.
    -Pass it to the modal
    DONE!
25/03/18
11. Media Queries for responsivenes
    DONE!
    - Some images for looks
        DONE!
11. Local storage for  leaderboard. Optional
    Maybe later



Note from Nikolas:
Something cool you can do with the selection of cards:

- Have an array to hold which cards are currently selected. i.e. `const selectedCards = [];`

- When you select a card, add it to this array. `selectedCards.push(cardIndex);` / `[3]`

- Now you can check how many cards are selected by checking the length of the array. `selectedCards.length // 1`

- And when you have 2 items in the array, you can check if they are the same. `selectedCards[0] === selectedCards[1]`


someSelector.addEventListener('click', function(event) {

   event.target // this is the clicked element

   // you can call any function here and pass this element as an argument to this function

   doSomeThings(event.target);

});


##Aknowledgements
I would like to thank all the FENDies for their support through the slack channel,
especially Nicolas Marcora, who patiently answered most of my silly questions.

##Decorative Vectors From:
https://www.flaticon.com/packs/ancient-greece-3   
https://www.vecteezy.com/vector-art/117905-greek-decorative-motifs   
https://fontawesome.com/