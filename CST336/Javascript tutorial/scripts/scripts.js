console.log("Hello World!")

// var answer   ** var is the old way to assign variables **

// let answer = Math.round(Math.random()*100);
// console.log(answer);

let answers = 10;
let guesses;
let triesLeft = 7;
const winMessage = "You Win!  U Beeg Brain!";
let guessMessage = document.querySelector("#guessMessage");
let guessButton = document.querySelector("#guessButton");
let guessInput = document.querySelector("#guessInput");




guessButton.addEventListener("click", showWin);
// "keydown" ** trigger when a key is pressed when hovering over
// "mouseover" ** trigger when hovering over

// === means that it must be the same data type as well
// +guessInput.value === answer;  ** the plus converts vaalue to an int. (Not completly safe)

function showWin() {
    guessMessage.textContent = winMessage;
    guessMessage.style.color = "lightgreen";
}

// Shorthand:
// guessButton.addEventListener("click", function() {
//     guessMessage.textContent = winMessage;
//     guessMessage.style.color = "lightgreen";
// });
