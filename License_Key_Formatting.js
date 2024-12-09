const divideCode = (code, division) => {
  const codeShort = code.replace(/-/g, "");
  let result = [];
  for (let i = 0; i < codeShort.length; i += division) {
    console.log("i: ", i, '-', i + division);
    result.push(codeShort.slice(i, i + division));
  }
  return result.join("-");
}

console.log(divideCode("5F3Z-2e-9-wR", 4)); // 5F3Z-2e9wR