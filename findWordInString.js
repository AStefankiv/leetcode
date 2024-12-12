const wordInString = (string, word) => {
  let index = 0;
  for (let i = 0; i < string.length; i += 1) {
    if (string.slice(i, i + word.length) === word) {
      index = i;
      break;
    }
  }
  return index;
}

console.log(wordInString('hello', 'lo')); // 3
console.log(wordInString('hello', 'he')); // 0