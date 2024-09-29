// const s = "abab";
// const doubleS = s + s;
// const doubleS_sliced = doubleS.slice(1, -1);
// console.log(doubleS_sliced); // "bababa"
// console.log(doubleS_sliced.includes(s)); // true


const repeatedSubstringPattern = (s) => {
  return (s + s).slice(1, -1).includes(s);
}

const s = "abab";
console.log(repeatedSubstringPattern(s)); // true
const t = "aba";
console.log(repeatedSubstringPattern(t)); // false