const positive_negative = (x, y) => {
  if ((x < 0 && y > 0) || (x > 0 && y < 0)) {
    return true;
  } else {
    return false;
  }
}

console.log(positive_negative(2, 2)); // false
console.log(positive_negative(-2, 2)); // true
console.log(positive_negative(2, -2));