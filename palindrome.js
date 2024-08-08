const isPalindrome = (string) => {
  let opposite = string.split('').reverse(' ').join('')
  if (opposite === string) {
    return 'Is a palindrome';
  }
  return 'Not a palindrome';
}

console.log(palindrome('hello'));
console.log(palindrome('level'));