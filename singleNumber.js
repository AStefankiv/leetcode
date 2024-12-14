const nums = [3, 3, 2, 2, 1];
const singleNumber = (nums) => {
  const hash = {};
  for (let i = 0; i < nums.length; i += 1) {
    if (!hash[nums[i]]) {
      hash[nums[i]] = 1;
    } else {
      hash[nums[i]] += 1;
    }
    if (hash[nums[i]] > 1) {
      delete hash[nums[i]];
    }
  }
  return Object.keys(hash)[0];
}

console.log(singleNumber(nums));