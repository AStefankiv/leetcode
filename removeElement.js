const removeElement = (arr, element) => {
  return arr.filter((el) => !(el === element));
};

console.log(removeElement([1, 2, 3, 4, 5], 4)); // [1, 2, 3, 5]
console.log(removeElement([1, 2, 3, 4, 5], 2)); // [1, 3, 4, 5]