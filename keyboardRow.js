const firstRow = 'qwertyuiop';
const secondRow = 'asdfghjkl';
const thirdRow = 'zxcvbnm';

const words = ["Hello","Alaska","Dad","Peace"];

const findWords = (words) => {
  const result = [];
  words = words.map(word => word.toLowerCase());
  for (let i = 0; i < words.length; i+= 1) {
    let firstRowCount = 0;
    let secondRowCount = 0;
    let thirdRowCount = 0;
    for (let j = 0; j < words[i].length; j+= 1) {
      if (firstRow.includes(words[i][j])) {
        firstRowCount += 1;
      } else if (secondRow.includes(words[i][j])) {
        secondRowCount += 1;
      } else if (thirdRow.includes(words[i][j])) {
        thirdRowCount += 1;
      }
    }
    if (firstRowCount === words[i].length || secondRowCount === words[i].length || thirdRowCount === words[i].length) {
      result.push(words[i]);
    }
  }
  return result;
}

console.log(findWords(words));