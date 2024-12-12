const nums = [1, 3, 5, 6];
// const target = 5;
// for (let i = 0; i < nums.length; i += 1) {
//   if (nums[i] === target) {
//     console.log(i);
//     break;
//   }
// }

// const missing = 2;
// for (let i = 0; i < nums.length; i += 1) {
//   if (nums[i + 1] !== nums[i] + 1 && missing === nums[i] + 1) {
//     console.log(i + 1);
//     break;
//   }
// }

const searchInsert = (nums, target) => {
  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] >= target) {
      return i;
    }
  }
  return nums.length;
}

console.log(searchInsert(nums, 5)); // 2
console.log(searchInsert(nums, 2)); // 1
console.log(searchInsert(nums, 7)); // 4