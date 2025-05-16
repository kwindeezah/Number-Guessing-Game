function validateInput(input) {
  const num = Number(input);
  return !isNaN(num) && num >= 1 && num <= 100;
}


function checkGuess(guess, secretNumber) {
  if (guess === secretNumber) return "correct";
  return guess > secretNumber ? "too high" : "too low";
}

function runTests() {
  console.log("Running validateInput tests...");
  console.assert(validateInput("50") === true, "Should accept 50");
  console.assert(validateInput("abc") === false, "Should reject non-number");
  console.assert(validateInput("0") === false, "Should reject 0");
  console.assert(validateInput("101") === false, "Should reject 101");
  console.assert(validateInput("1") === true, "Should accept 1");

  console.log("Running checkGuess tests...");
  console.assert(checkGuess(50, 50) === "correct", "Should be correct");
  console.assert(checkGuess(70, 60) === "too high", "Should be too high");
  console.assert(checkGuess(40, 60) === "too low", "Should be too low");
}

runTests();