const romanToInteger = (s) => {
  const roman = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    if (roman[s[i]] < roman[s[i + 1]]) {
      result += roman[s[i + 1]] - roman[s[i]];
      i++;
    }
    else {
      result += roman[s[i]];
    }
  }
  return result;
}

console.log(romanToInteger('III')); // 3
console.log(romanToInteger('IV')); // 4
console.log(romanToInteger('IX')); // 9