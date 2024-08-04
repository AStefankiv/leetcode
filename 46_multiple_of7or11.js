const multipleOf7Or11 = (num1, num2) => {
  if (num1 > 0 && num2 > 0) {
    if (num1 % 7 === 0 || num1 % 11 === 0 || num2 % 7 === 0 || num2 % 11 === 0) {
      return true;
    }
    return false;
  }
}

console.log(multipleOf7Or11(14, 21)) // true
console.log(multipleOf7Or11(14, 22)) // true
console.log(multipleOf7Or11(13, 23)) // false