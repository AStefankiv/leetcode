const sentence1 = "A man, a plan, a canal: Panama";

const validPalindrome = (s) => {
  const sToLower = s.toLowerCase();
  const sWithoutSpecialChars = sToLower.replace(/[^a-zA-Z0-9]/g, '');
  const sReversed = sWithoutSpecialChars.split('').reverse().join('');
  return sWithoutSpecialChars === sReversed;
}

console.log(validPalindrome(sentence1)); // true
console.log(validPalindrome("race a car")); // false