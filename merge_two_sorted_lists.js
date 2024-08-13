const twoArraysMerge = (arr1, arr2) => {
  const merged = arr1.concat(arr2);
  return merged.sort(a, b => a - b);
};

const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6];
console.log(twoArraysMerge(arr1, arr2)); // [1, 2, 3, 4, 5, 6]