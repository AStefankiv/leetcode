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

  let countKids = 0;
  for (let i = 0; i < s.length; i += 1) {
    if (s[i] >= g[countKids]) {
      countKids += 1;
    }

    if (countKids === g.length) {
      break;
    }
  }

  return countKids;
}

console.log(findContentChildren([1, 2, 3], [1, 1]));// 1
console.log(findContentChildren([1, 2], [1, 3, 3]));// 2