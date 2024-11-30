const arrayOne = [1, 2];
const arrayTwo = [1, 2, 3];

let count = 0;
for (let i = 0; i < arrayTwo.length; i += 1) {
  if (arrayTwo[i] >= arrayOne[i]) {
    count += 1;
  }
}

console.log(count);