const isPalindrome = (string) => {
  let opposite = string.split('').reverse().join('');
  return string === opposite;
}

const str = 'racecar';
console.log(isPalindrome(str)); // true
const str2 = 'hello';
console.log(isPalindrome(str2)); // false