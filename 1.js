const array = [2, 7, 9, 11];
const sum = 11;

for (let i = 0; i < array.length; i += 1) {
  for (let j = 1; j <array.length; j += 1) {
    if (array[i] + array[j] === sum) {
      console.log(array[i], array[j]);
    }
  }
}