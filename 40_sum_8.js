const numberEight = (num1, num2) => {
  const sum = num1 + num2;
  if (sum === 8 || num1 === 8 || num2 === 8) {
    return true;
  }
  if (Math.abs(num1 - num2) === 8) {
    return true;
  } else if (Math.abs(num2 - num1) === 8) {
    return true;
  }
  return false;
}

console.log(numberEight(3, 5));// true
console.log(numberEight(3, 3));// false
console.log(numberEight(8, 3));// true
console.log(numberEight(20, 12));// true