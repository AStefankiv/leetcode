const array = [1, 1, 2, 3, 3];

const singleNumber1 = (array) => {
  let singleNumber = 0;
  for (let i = 0; i < array.length; i++) {
    singleNumber ^= array[i];
  }
  return singleNumber;
}

console.log(singleNumber1(array));




const singleNumber2 = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    if (nums.indexOf(nums[i]) === nums.lastIndexOf(nums[i])) {
      return nums[i];
    }
  }
}

console.log(singleNumber2(array));