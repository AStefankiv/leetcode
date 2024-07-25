const multipleOf3and7 = (n) => {
  if (n % 3 === 0 && n % 7 === 0) {
    return true;
  }
  return false;
};

console.log(multipleOf3and7(21)); // true
console.log(multipleOf3and7(18)); // false
console.log(multipleOf3and7(14)); // false
console.log(multipleOf3and7(42)); // true