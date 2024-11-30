const coins = 5;

const arrangeCoins = (n) => {
  let k = 0;
  while (n >= k + 1) {
    k += 1;
    n -= k;
  }
  return k;
}

console.log(arrangeCoins(coins)); // 2
console.log(arrangeCoins(8)); // 3