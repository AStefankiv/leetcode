const sum_of_two = (num1, num2) => {
  const sum = num1 + num2;
  if (sum >= 50 && sum <= 80) {
    return 65;
  } else {
    return 80;
  }
}

console.log(sum_of_two(20, 30));// 65
console.log(sum_of_two(50, 50));// 80