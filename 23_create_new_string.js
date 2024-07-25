const newString = (str) => {
  let firstChar = str.charAt(0);
  let lastChar = str.charAt(str.length - 1);
  if (str.length < 2) {
    return str;
  } else {
    return lastChar + str.slice(1, -1) + firstChar;
  }
}

console.log(newString('Hello')); // Output: oellH
console.log(newString('Hi')); // Output: Hi