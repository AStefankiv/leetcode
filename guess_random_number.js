let randomNum = Math.floor(Math.random() * 10);

const userInput = process.argv[2];

const guessRamdomNumber = (userInput) => {
  if (userInput == randomNum) {
    console.log('You guessed the right number!');
  } else {
    console.log(`You guessed the wrong number. The right number is ${randomNum}`);
  }
}

guessRamdomNumber(userInput);