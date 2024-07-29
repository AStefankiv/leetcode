const numbers_range = (a, b) => {
  if ((a >= 40 && a <= 60 && b >= 40 && b <= 60) || (a >= 70 && a <= 100 && b >= 70 && b <= 100)) {
    return true;
  } else {
    return false;
  }
}

console.log(numbers_range(44, 56)); // true
console.log(numbers_range(70, 95)); // true
console.log(numbers_range(50, 89)); // false
console.log(numbers_range(100, 105)); // false