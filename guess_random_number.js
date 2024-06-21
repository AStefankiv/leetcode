const userInput = process.argv[2];

const guessRamdomNumber = (userInput) => {
  let randomNum = Math.floor(Math.random() * 10);
  if (userInput == randomNum) {
    console.log('You guessed the right number!');
  } else {
    console.log(`You guessed the wrong number! The correct number is ${randomNum}`);
  }
}

guessRamdomNumber(userInput);