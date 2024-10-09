const firstRow = 'qwertyuiop';
const secondRow = 'asdfghjkl';
const thirdRow = 'zxcvbnm';

// const words = ["Hello","Alaska","Dad","Peace"];
const word = ["Dad"];
const wordLowerCase = word[0].toLowerCase();

const findWords = (words) => {
  let result;
  for (let i = 0; i < words.length; i += 1) {
    if (firstRow.includes(words[i])) {
      result = "firstRow";
    } else if (secondRow.includes(words[i])) {
      result = "secondRow";
    } else if (thirdRow.includes(words[i])) {
      result = "thirdRow";
    }
  }
  return result;
}

console.log(findWords(wordLowerCase));