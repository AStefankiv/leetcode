const nums = [0, 1, 2, 3, 4, 8, 9, 10];
// const result = [];

// let currentChunk = [nums[0]]; // Start with the first number

// for (let i = 1; i < nums.length; i += 1) {
//     // Check if the current number is consecutive
//     if (nums[i] === nums[i - 1] + 1) {
//         currentChunk.push(nums[i]);
//     } else {
//         // If not consecutive, push the current chunk to result and start a new chunk
//         result.push(currentChunk);
//         currentChunk = [nums[i]];
//     }
// }

// // Push the last chunk after the loop
// result.push(currentChunk);
// console.log(result); // [[0, 1, 2], [4, 5, 6], [8, 9]]



const SummaryRanges = (array) => {
  const result = [];
  let currentChunk = [array[0]];

  for (let i = 1; i < array.length; i += 1) {
    if (array[i] === array[i - 1] + 1) {
      currentChunk.push(array[i]);
    } else {
      result.push(currentChunk);
      currentChunk = [array[i]];
    }
  }

  result.push(currentChunk);
  return result;
}

const resultSort = SummaryRanges(nums);
console.log('Summary Ranges:', resultSort); // [[0, 1, 2, 3, 4, 5, 6], [8, 9, 10]]

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

const resultShort = shortSummaryRanges(nums);
console.log('Short Summary Ranges:', resultShort); // [ '0->6', '8->10' ]