const isPalindrome = (string) => {
  let opposite = string.split('').reverse(' ').join('')
  if (opposite === string) {
    return true;
  }
  return false;
}

console.log(palindrome('hello'));
console.log(palindrome('level'));