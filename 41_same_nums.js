const sameNums = (x, y, z) => {
  if (x === y && y === z) {
    return 30;
  }
  if (x === y || y === z || x === z) {
    return 40;
  }
  return 20;
}

console.log(sameNums(3, 3, 3));// 30
console.log(sameNums(3, 3, 2));// 40
console.log(sameNums(3, 2, 1));// 20