const largestArraySum = (a, b, c) => {
  const sumA = a.reduce((acc, curr) => acc + curr, 0);
  const sumB = b.reduce((acc, curr) => acc + curr, 0);
  const sumC = c.reduce((acc, curr) => acc + curr, 0);
  const largestSum = Math.max(sumA, sumB, sumC);
  if (largestSum === sumA) {
    return a;
  }
  if (largestSum === sumB) {
    return b;
  }
  return c;
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [6, 7, 8, 9, 10];
const array3 = [11, 12, 13, 14, 15];

console.log(largestArraySum(array1, array2, array3)); // [11, 12, 13, 14, 15]