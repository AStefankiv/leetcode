// const indexOfArray = (array, element) => {
//   return array.indexOf(element);
// }

// const array = [1, 2, 3, 4, 5];
// const element = 3;
// console.log(indexOfArray(array, element)); // 2


const findMissingNumber = (array) => {
  for (let i = 0; i < array.length; i++) {
    const missingNumber = (array[i] + 1)
    if (array[i + 1] !== missingNumber) {
      return missingNumber;
    }
    if (missingNumber === array[array.length - 1]) {
      return 'No missing number';
    }
  }
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(findMissingNumber(array)); // No missing number
const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 10];
console.log(findMissingNumber(array2)); // 9