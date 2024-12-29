const nums = [0, 1, 2, 3, 4, 8, 9, 10];

const shortSummaryRanges = (array) => {
  const result = [];
  let start = array[0];

  for (let i = 1; i <= array.length; i += 1) {
    if (i === array.length || array[i] !== array[i - 1] + 1) {
      if (start === array[i - 1]) {
        result.push(start);
      } else {
        result.push(`${start}->${array[i - 1]}`);
      }
      start = array[i];
    }
  }

  return result;
}
;
console.log(shortSummaryRanges(nums)); // ["0->4", "8->10"]