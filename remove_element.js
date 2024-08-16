const removeElement = (arr, items) => {
  return arr.filter((item) => !items.includes(item));
}

const arrayNums = [1, 2, 3, 4, 4, 5, 6, 6, 7];
const items = [4, 6];

console.log(removeElement(arrayNums, items));