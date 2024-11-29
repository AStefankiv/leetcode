const sentence = "The quick brown fox jumps over the lazy dog.";
let array = [];
const words = sentence.split(" ");
console.log(words.length);

const countSegments = (str) => {
  const words = str.split(" ");
  return words.length;
}

console.log(countSegments(sentence));