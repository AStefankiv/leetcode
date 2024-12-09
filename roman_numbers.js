const countRomanNumeral = (num) => {
  const roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };
  let result = 0;
  for (let i = 0; i < num.length; i += 1) {
    if(roman[num[i]] < roman[num[i + 1]]) {
      result += roman[num[i + 1]] - roman[num[i]];
      i += 1;
    } else {
      result += roman[num[i]];
    }
  }
  return result;
}

console.log(countRomanNumeral('III')); // 3
console.log(countRomanNumeral('IV')); // 4
console.log(countRomanNumeral('IX')); // 9