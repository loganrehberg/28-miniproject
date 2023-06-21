const wordToGuess = "javascript";

//Game State Variables

let blanks = [];
let guesses = [];
let wins = 0;
let losses = 0;
let timer;
let remainingTime;

// DOM elements 

const startButton = document.getElementById("start-button");
const wordDisplay = document.getElementById("word-display");
const guessesDisplay = document.getElementById("guesses-display");
const winsDisplay = document.getElementById("wins-display");
const lossesDisplay = document.getElementById("losses-display");
const messageDisplay = document.getElementById("message-display");
const timerDisplay = document.getElementById("timer-display");

// function to start game
function startGame() {
    blanks = [];
    guesses = [];
    remainingTime = 10;
    timerDisplay.textContent = remainingTime;
    clearInterval(timer);
    messageDisplay.textContent = ""
}
