const nums = [1,2,3,1];
let hash = {};
for (let i = 0; i < nums.length; i += 1) {
  if (!hash[nums[i]]) {
    hash[nums[i]] = 1;
  } else {
    hash[nums[i]] += 1;
  }
  if (hash[nums[i]] > 1) {
    console.log(true);
    break;
  }
}
console.log(hash);