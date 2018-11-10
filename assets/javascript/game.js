
// Computer random number
function randomCharacter() {
    var character = "";

    character = possible.charAt(Math.floor(Math.random() * possible.length));

    return character;
}

var possible = "abcdefghijklmnopqrstuvwxyz";

//variable to hold the number of wins and losses
var wins = 0;
var losses = 0;

var guessesLeft = 9;
var guesses = "";

var computerGuess = randomCharacter();



// Create variables that hold references to the places in the HTML where we want to display things.
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guesses-left-text");
var guessesText = document.getElementById("guesses-text");

// This function is run whenever the user presses a key.
document.onkeyup = function (event) {

    // Determines which key was pressed.
    var userGuess = event.key;

    if (possible.indexOf(userGuess) < 0) {
        return;
    }

    // make sure userGuess isn't already guessed
    if (guesses.indexOf(userGuess) > -1) {
        return;
    }

    guesses = guesses + userGuess;

    guessesLeft = guessesLeft - 1;

    if (userGuess === computerGuess) {
        wins = wins + 1;
        guessesLeft = 9;
        guesses = "";
        computerGuess = randomCharacter();
    } else if (guessesLeft === 0) {
        losses = losses + 1;
        guessesLeft = 9;
        guesses = "";
        computerGuess = randomCharacter();
    }

    winsText.textContent = wins;
    lossesText.textContent = losses;
    guessesLeftText.textContent = guessesLeft;
    guessesText.textContent = guesses;
}
