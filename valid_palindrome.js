const sentence1 = "A man, a plan, a canal: Panama";
const sentence1ToLower = sentence1.toLowerCase();
const sentence1WithoutSpecialChars = sentence1ToLower.replace(/[^a-zA-Z0-9]/g, '');
const sentence1Reversed = sentence1WithoutSpecialChars.split('').reverse().join('');
console.log(sentence1WithoutSpecialChars === sentence1Reversed); // true