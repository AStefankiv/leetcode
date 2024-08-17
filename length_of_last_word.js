const lengthOfLastWord = (s) => {
  return s.split(' ').pop().length;
}

console.log(lengthOfLastWord('Hello World')); // 5
console.log(lengthOfLastWord('I love to code')); // 4