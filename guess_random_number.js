let randomNum = Math.floor(Math.random() * 10);
console.log(randomNum);

const userInput = process.argv[2];
if (userInput == randomNum) {
  console.log('You guessed the right number!');
}