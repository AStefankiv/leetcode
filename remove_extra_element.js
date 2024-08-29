const array = [1, 2, 3, 9, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < array.length; i++) {
//   if (array[i] + 1 !== array[i + 1]) {
//     console.log(array[i + 1]);
//     break;
//   }
// }

const extraElement = (array) => {
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] + 1 !== array[i + 1]) {
      return 'Extra element: ' + array[i + 1] + ' at index: ' + (i + 1);
    }
  }
  return 'No extra element found';
}

console.log(extraElement(array)); // 9