const word = 'level';
const word2 = 'lever';

const isPalindrome = (text) => {
  return text.split('').reverse().join('') === text;
}
console.log(isPalindrome(word));
console.log(isPalindrome(word2));