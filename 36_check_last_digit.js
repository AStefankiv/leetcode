const lastSameDigit = (n1, n2, n3) => {
    const n1_str = n1.toString();
    const n2_str = n2.toString();
    const n3_str = n3.toString();
    return n1_str[n1_str.length - 1] === n2_str[n2_str.length - 1] && n2_str[n2_str.length - 1] === n3_str[n3_str.length - 1];
}

console.log(lastSameDigit(10, 20, 30));
console.log(lastSameDigit(11, 21, 31));
console.log(lastSameDigit(12, 22, 33));