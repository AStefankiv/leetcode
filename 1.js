const code = "5F3Z-2e-9-wR";
const codeShort = code.replace(/-/g, "");
console.log(codeShort); // 5F3Z2e9w

let result = [];
for (let i = 0; i < codeShort.length; i += 4) {
  result.push(codeShort.slice(i, i + 4));
}

console.log(result.join("-")); // 5F3Z-2e9w