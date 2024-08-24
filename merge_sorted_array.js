const merge = (arr1, n, arr2, m) => {
  const arary1Sliced = arr1.slice(0, n);
  const arary2Sliced = arr2.slice(0, m);
  return arary1Sliced.concat(arary2Sliced).sort((a, b) => a - b);
}

const arr1 = [1, 2, 3, 0, 0, 0];
const arr2 = [2, 5, 6];
console.log(merge(arr1, 3, arr2, 3)); // [1, 2, 2, 3, 5, 6]