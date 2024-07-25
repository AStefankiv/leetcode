const multipleOf3and7 = (n) => {
  return n % 3 === 0 && n % 7 === 0;
}

console.log(multipleOf3and7(21)); // true
console.log(mjson(multipleOf3and7(14))); // false