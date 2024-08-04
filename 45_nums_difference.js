const numberDifference = (num1, num2) => {
  const difference1 = num1 - num2;
  const difference2 = num2 - num1;
  const sum = num1 + num2;

  if (difference1 === 15 || difference2 === 15 || sum === 15) {
    return true;
  }
  return false;
}

console.log(numberDifference(30, 15)) // true
console.log(numberDifference(15, 30)) // true
console.log(numberDifference(10, 20)) // false
console.log(numberDifference(7, 8)) // true