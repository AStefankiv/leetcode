const removeElement = (arr, item) => {
  return arr.filter(element => element !== item);
}

const arrayNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(removeElement(arrayNums, 5)); // [1, 2, 3, 4, 6, 7, 8, 9]