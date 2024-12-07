const divideCode = (code, division) => {
  const codeShort = code.replace(/-/g, "");
  let result = [];
  for (let i = 0; i < codeShort.length; i += division) {
    result.push(codeShort.slice(i, i + division));
  }
  return result.join("-");
}

console.log(divideCode("5F3Z-2e-9-wR", 4)); // 5F3Z-2e9wR
console.log(divideCode("2-5g-3-J", 2)); // 25-g3-J
console.log(divideCode("2-5g-3-J", 3)); // 25g-3J