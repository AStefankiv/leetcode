const nums = [1,1,0,1,1,1];
let count = 0;
let max = 0;
for (let i = 0; i < nums.length; i += 1) {
  if (nums[i] === 1) {
    count += 1;
    max = Math.max(max, count);
  }
  else {
    count = 0;
  }
}

console.log(max); // 3