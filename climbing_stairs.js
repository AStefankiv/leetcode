const climbingStairs = (n) => {
  let steps = n / 2;
  return Math.ceil(steps);
}

console.log(climbingStairs(1)); // 1
console.log(climbingStairs(7)); // 4