const nums = [1, 1, 0, 2, 2, 2];

const maxIn_Row = (nums) => {
  let count = 1;
  let maxCount = 0;
  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] === nums[i + 1]) {
      count += 1;
    } else {
      maxCount = Math.max(maxCount, count);
      count = 1;
    }
  }

  return maxCount;
}

console.log(maxIn_Row(nums));// 3