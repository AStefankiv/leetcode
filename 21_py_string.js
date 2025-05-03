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




const strs = ["flower","flow","flight"];
function longestCommonPrefix(strs) {
  if (!strs.length) return "";

  let prefix = strs[0]; // Assume first word is the prefix

  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      // Reduce the prefix
      prefix = prefix.slice(0, -1);
      if (!prefix) return "";
    }
  }

  return prefix;
}
console.log(longestCommonPrefix(strs));