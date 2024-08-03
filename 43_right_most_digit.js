const rightMostDigit = (num1, num2, num3) => {
  return num1 % 10 === num2 % 10 && num2 % 10 === num3 % 10;
}

console.log(rightMostDigit(23, 33, 43)); // true
console.log(rightMostDigit(23, 33, 44)); // false