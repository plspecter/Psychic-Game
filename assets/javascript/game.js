var wins = 0
var losses = 0
var guessesleft = 10
var guessessofar = []

var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

document.onkeyup = function(event) {
var userGuess = event.key;
guessessofar.push(userGuess)
guessesleft = guessesleft-1;

if (userGuess == computerGuess) {
    wins++; 
} else {
    losses++;
}

var html =
"<p>wins: " + wins + "</p>" +
"<p>losses: " + losses + "</p>" +
"<p>guessesleft: " + guessesleft + "</p>"+
"<p>guessessofar: " + guessessofar + "</p>";

document.getElementById("game").innerHTML = html;

//how to reset the guesses left & guesses so far

for (var i = 0; i < computerChoices.length; i++) {

}

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

}