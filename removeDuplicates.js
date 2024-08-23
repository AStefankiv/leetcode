const removeDuplicates = (arr) => {
  const result = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}

const arr = [1, 2, 3, 4, 4, 5, 6, 6, 7, 7];
console.log(removeDuplicates(arr)); // [1, 2, 3, 4, 5, 6, 7]