const sentence = "The quick brown fox jumps over the lazy dog.";

const countSegments = (str) => {
  const words = str.split(" ");
  return words.length;
}

console.log(countSegments(sentence));