// const array = [1,2,6,3,4,5,6];
// const val = 6;
// const newArray = array.filter((item) => item !== val);

// console.log(newArray); // [1, 2, 3, 4, 5]

const removeElement = (nums, val) => {
  return nums.filter((item) => item !== val);
}

const array = [1,2,6,3,4,5,6];
const val = 6;

console.log(removeElement(array, val)); // [1, 2, 3, 4, 5]