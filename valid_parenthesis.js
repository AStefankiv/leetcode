const parenthesisOpenClose = (str) => {
  let open = {
    '{': '}',
    '[': ']',
    '(': ')'
  };
  let firstHalf = str.slice(0, str.length / 2);
  let secondHalf = str.slice(str.length / 2);
  let secondHalfReversed = secondHalf.split('').reverse().join('');
  if (firstHalf.length !== secondHalf.length) {
    return false;
  }
  for (let i in open) {
    if (firstHalf.includes(i)) {
      if (secondHalfReversed.includes(open[i])) {
        return true;
      }
    }
  }
};

const str = '({[]})';
console.log(parenthesisOpenClose(str)); // true
const str2 = '({[})';
console.log(parenthesisOpenClose(str2)); // false



// let open = {
//   '{': '}',
//   '[': ']',
//   '(': ')'
// };

// for (let i in open) {
//   console.log(i);//open
//   console.log(open[i]);//close
// }