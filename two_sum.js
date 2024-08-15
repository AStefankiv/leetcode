const two_sum = (nums, target) => {
  for (let i = 0; i < nums.length; i += 1) {
    for (let j = i + 1; j < nums.length; j += 1) {
      if (nums[i] + nums[j] === target) {
        return [nums[i], nums[j]];
      }
    }
  }
}

const nums = [33, 44, 55, 66, 77, 88, 99];
const target = 143;
console.log(two_sum(nums, target)); // [44, 99]