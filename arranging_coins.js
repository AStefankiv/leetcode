const arrangeCoins = (n) => {
  let row = 0;
  while (n >= row + 1) {
    row += 1;
    n -= row;
  }
  return row;
}

console.log(arrangeCoins(5)); // 2
console.log(arrangeCoins(8)); // 3