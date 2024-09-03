const nums = [0, 1, 2, 4, 5, 7];

for (let i = 0; i < nums.length; i += 1) {
  let start = nums[i];
  while (nums[i + 1] - nums[i] === 1) {
    i += 1;
  }
  if (start !== nums[i]) {
    console.log(start + '->' + nums[i]);
  } else {
    console.log(start);
  }
}

const summaryRanges = (nums) => {
  const result = [];
  for (let i = 0; i < nums.length; i += 1) {
    let start = nums[i];
    while (nums[i + 1] - nums[i] === 1) {
      i += 1;
    }
    if (start !== nums[i]) {
      result.push(start + '->' + nums[i]);
    } else {
      result.push(start.toString());
    }
  }
  return result;
}

