const arrayNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const plusOne = (array, num) => {
  const lastNum = array.slice(-1);
  if (lastNum >= 9) {
    const splitNumIntoArray = num.toString().split('');
    const splitNumIntoArrayNum = splitNumIntoArray.map((num) => parseInt(num));
    for (let i = 0; i < splitNumIntoArrayNum.length; i++) {
      array.push(splitNumIntoArrayNum[i]);
    }
  } else {
    array.push(num);
  }
  return array;
}

console.log(plusOne(arrayNums, 10)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 0]
console.log(plusOne(arrayNums, 1)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 1]