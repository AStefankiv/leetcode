// const numbers = [2, 7, 9, 11];
// const target = 9;

// const twoSum = (array, target) => {
//   let result = [];
//   for (let i = 0; i < array.length; i += 1) {
//     for (let j = 1; j < array.length; j += 1) {
//       if (array[i] + array[j] === target) {
//         result.push(array[i], array[j])
//       }
//       return result;
//     }
//   }
//   return result;
// }
// console.log(twoSum(numbers, target));



// const number = 121;
// const isPalindrome = (num) => {
//   const numToString = num.toString();// '121'
//   const numReverse = num.toString().split("").reverse().join("");
//   return numToString === numReverse;
// }
// console.log(isPalindrome(number));




const nums = [0,1,2,4,5,7];

const rangeNums = (nums) => {
  let result = [];
  let start = nums[0];
  let end = nums[0];

  for (let i = 1; i < nums.length; i += 1) {
    if (nums[i] - nums[i - 1] === 1) {
      end = nums[i];
    } else {
      if (start === end) {
        result.push(start);
      } else {
        result.push(`${start}->${end}`);
      }
      start = nums[i];
      end = nums[i];
    }
  }

  if (start === end) {
    result.push(start);
  } else {
    result.push(`${start}->${end}`);
  }

  return result;
}
console.log(rangeNums(nums));