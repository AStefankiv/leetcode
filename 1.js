const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
const lettersObject = {};
for (let i = 0; i < letters.length; i += 1) {
  if (!lettersObject[letters[i]]) {
    lettersObject[letters[i]] = 1;
  } else {
    lettersObject[letters[i]] += 1;
  }
}

console.log(lettersObject);