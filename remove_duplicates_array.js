const removeDuplicates = (arr) => {
  // return arr.filter((item, index) => arr.indexOf(item) === index);
  return [...new Set(arr)];
  // const result = [];
  // for (let i = 0; i < arr.length; i++) {
  //   if (!result.includes(arr[i])) {
  //     result.push(arr[i]);
  //   }
  // }
  // return result;
}
  
const arr = [1, 2, 3, 4, 4, 5, 6, 6, 7];
console.log(removeDuplicates(arr)); // [1, 2, 3, 4, 5, 6, 7]