const newString = (str1, str2) => {
  let firstChar = str1.charAt(0);
  let lastChar = str1.charAt(str1.length - 1);

  return firstChar + str2 + lastChar;
}

console.log(newString('Hello', 'world')); // Output: Hworldo
console.log(newString('Hi', 'there')); // Output: Htherei