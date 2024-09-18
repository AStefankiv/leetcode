// const stringOne = '11';
// const stringTwo = '123';
// console.log(Number(stringOne) + Number(stringTwo)); // 134

const addStrings = (num1, num2) => {
    return (Number(num1) + Number(num2)).toString();
}

console.log(addStrings('11', '123')); // 134
console.log(addStrings('456', '77')); // 533