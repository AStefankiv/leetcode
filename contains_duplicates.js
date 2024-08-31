const array = [1, 2, 3, 9, 4, 5, 6, 7, 8, 9, 10];

const containsDuplicates = (array) => {
  for (let i = 0; i < array.length; i += 1) {
    if (array.indexOf(array[i]) !== array.lastIndexOf(array[i])) {
      return 'Duplicate element: ' + array[i] + ' at index: ' + i;
    }
  }
  return 'No duplicate element found';
}

console.log(containsDuplicates(array)); // 9