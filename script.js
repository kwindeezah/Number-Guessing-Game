let secretNumber;
let maxGuesses;
let attemptsLeft;
let gameOver = false;

const result = document.getElementById("result");
const guessInput = document.getElementById("guess");
const guessBtn = document.getElementById("guessBtn");
const resetBtn = document.getElementById("resetBtn");
const attemptsDisplay = document.getElementById("attempts");

/**
 * Starts the game
 * @param {difficulty} difficulty 
 */
function startGame(difficulty = "easy") {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  //Sets the number of attempts
  maxGuesses = difficulty === "hard" ? 5 : difficulty === "medium" ? 7 : 10;
  attemptsLeft = maxGuesses;
  result.textContent = "";
  guessInput.value = "";
  gameOver = false;
  attemptsDisplay.textContent = `Attempts Left: ${attemptsLeft}`;
}

/**
 * Validates user input
 * @param {input} value
 * @returns 
 */
function validateInput(value) {
  const guess = Number(value);
  return !isNaN(guess) && guess >= 1 && guess <= 100;
}

/**
 * Checks the users' guess
 * @returns appropriate response based on set conditions
 */
function checkGuess() {
  if (gameOver) return;

  const guess = Number(guessInput.value);

  if (!validateInput(guess)) {
    result.textContent = "Please enter a number between 1 and 100.";
    return;
  }

  attemptsLeft--;
  attemptsDisplay.textContent = `Attempts Left: ${attemptsLeft}`;

  if (guess === secretNumber) {
    result.textContent = "You are correct! You win!";
    gameOver = true;
  } else if (attemptsLeft === 0) {
    result.textContent = `You are out of guesses! The number was ${secretNumber}.`;
    gameOver = true;
  } else {
    result.textContent = guess > secretNumber ? "📉 Too high!" : "📈 Too low!";
  }
}

// Starts the game immediately with default difficulty (easy)
window.addEventListener("DOMContentLoaded", () => {
  startGame("easy");
});

guessBtn.addEventListener("click", checkGuess);
resetBtn.addEventListener("click", () => startGame("easy")); // Default to easy on reset