const searchInsertPosition = (nums, target) => {
  if (!nums.includes(target)) {
    return 'Target not found';
  }
  return nums.indexOf(target);
}

console.log(searchInsertPosition([1, 3, 5, 6], 5)); // 2
console.log(searchInsertPosition([1, 3, 5, 6], 2)); // 1