const num = 121;
const numStr = num.toString();
const reverseNum = numStr.split('').reverse().join('');
const isPalindrome = numStr === reverseNum;

console.log(isPalindrome ? `${num} is palindrome` : `${num} isn't palindrome`);