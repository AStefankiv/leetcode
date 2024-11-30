const findDisappearedNumbers = (nums) => {
  const sorted = new Set(nums)
  let missedNums = [];

  const start = Math.min(...sorted);
  const end = Math.max(...sorted);
  console.log("Start: ", Math.min(...sorted));

  for (let i = start; i <= end; i += 1) {
    if (!sorted.has(i)) {
      missedNums.push(i);
    }
  }

  return missedNums;
}

console.log(findDisappearedNumbers([56, 57, 59, 61, 62]));