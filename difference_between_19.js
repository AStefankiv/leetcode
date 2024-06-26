const different_between_19 = (number) => {
  if (number > 19) {
    return (number - 19) * 3;
  } else if (number < 19) {
    return number - 19;
  } else {
    return 19 - number;
  }
}

console.log(different_between_19(12)); // 7
console.log(different_between_19(19)); // 0
console.log(different_between_19(22)); // 9
console.log(different_between_19(37)); // 54