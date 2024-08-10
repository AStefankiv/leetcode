const two_arrays = (arr1, arr2) => {
  const merge = arr1.concat(arr2);
  return merge.sort((a, b) => a - b);
};