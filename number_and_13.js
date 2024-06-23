const number_and_13 = (number) => {
  if ((number - 13) >= 13) {
    return 'The difference between ' + number + ' and 13 is ' + (number - 13) + '.'
  } else {
    return number - 13;
  }
}

console.log(number_and_13(15)); // The difference between 15 and 13 is 2.
console.log(number_and_13(45)); // The difference between 45 and 13 is 32.