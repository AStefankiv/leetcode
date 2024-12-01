const line = 'abab';
const split = line.split('');
console.log(split);

const repeatedSubstringPattern = (s) => {
  const  doubleS = s + s;
  const substring = doubleS.slice(1, doubleS.length - 1);
  console.log(substring);
  return substring.includes(s);
}

console.log(repeatedSubstringPattern('abab')); // true
console.log(repeatedSubstringPattern('aba')); // false