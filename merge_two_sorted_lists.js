const two_arrays = (arr1, arr2) => {
  const merge = arr1.concat(arr2);
  return merge.sort((a, b) => a - b);
};

console.log(two_arrays([1, 3, 5], [2, 4, 6])); // [1, 2, 3, 4, 5, 6]