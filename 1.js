const nums = [1, 1, 0, 2, 2, 2];
let count = 1;
let max = 0;
for (let i = 1; i < nums.length; i++) {
  if (nums[i] === nums[i + 1]) {
    count++;
  } else {
    max = Math.max(max, count);
    count = 1;
  }
}
console.log(max); // 3