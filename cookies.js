// const arrayOne = [1, 2];
// const arrayTwo = [1, 2, 3];

// let count = 0;
// for (let i = 0; i < arrayTwo.length; i += 1) {
//   if (arrayTwo[i] >= arrayOne[i]) {
//     count += 1;
//   }
// }

// console.log(count);

const findContentChildren = (g, s) => {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  let count = 0;
  for (let i = 0; i < s.length; i += 1) {
    if (s[i] >= g[count]) {
      count += 1;
    }
  }
  return count;
}

console.log(findContentChildren([1, 2, 3], [1, 1]));
console.log(findContentChildren([1, 2], [1, 2, 3]));