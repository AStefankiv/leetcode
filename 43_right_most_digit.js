const rightMostDigit = (num1, num2, num3) => {
  const num1Split = num1.toString().split('');
  const num2Split = num2.toString().split('');
  const num3Split = num3.toString().split('');

  const num1LastDigit = num1Split.pop();
  const num2LastDigit = num2Split.pop();
  const num3LastDigit = num3Split.pop();

  if (num1LastDigit === num2LastDigit && num2LastDigit === num3LastDigit) {
    return true;
  } else {
    return false;
  }
}

console.log(rightMostDigit(123, 456, 789)); // false
console.log(rightMostDigit(22, 32, 42)); // true