const nums = [1, 1, 0, 2, 2, 2];
const noDuplicates = [...new Set(nums)].sort((a, b) => a - b);
console.log([...new Set(nums)]);