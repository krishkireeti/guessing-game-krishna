const readline = require("readline");

let rl;
let number; // This variable will store the number the user needs to guess.

// This function asks the user for input.
function getInput(prompt, callback) {
  rl.question(prompt, callback);
}

function generateRandomNumber() {
  // TODO: Write a function to generate a random number between 1 and 100.
  // Your code here.
  let y =  Math.floor(Math.random() * 10 + 1);
  return y;
}

// This function contains the game's logic.
function playGame(chosenNumber = null) {
  rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  // This checks if a number was provided as an argument. If not, it generates a random number.
  number = chosenNumber || generateRandomNumber();

  let guesses = [];
  let attempts = 0;
  const maxAttempts = 10;

  /**
   * TODO: Declare and initialize the variables that are required to keep track of game state.
   */
  // Your code here.

  // This is the core game loop where the user is prompted for guesses.
  const askForGuess = () => {
    if(attempts >= maxAttempts) {
      console.log(`Game over! The number was ${number}. Your guesses were: ${guesses.join(', ')}`)
      rl.close();
      return;
    }
    getInput("Enter your guess: ", (guess) => {
      // TODO: Implement the logic inside this function using recursive functions to achieve the game loop.
      // Your code here.
      attempts++;
      guess = parseInt(guess, 10);
      guesses.push(guess);

      if(guess === number) {
        console.log(`Correct! The number was ${number}. Your guesses were: ${guesses.join(', ')}`)
        rl.close();
      }
      else if (guess < number) {
        console.log("Too Low!");
        askForGuess();
      }
     else {
      console.log("Too High!");
      askForGuess();
     }
    });
  };

  // This starts the game loop.
  askForGuess();
}

// If this file is run directly, execute the playGame function.
if (require.main === module) {
  playGame();
}

module.exports = playGame;
