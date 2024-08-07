const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i += 1) {
    for (let j = i + 1; j < nums.length; j += 1) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
}

const arrayNums = [2, 4, 6, 8, 10];
const targetNum = 12
console.log(twoSum(arrayNums, targetNum))