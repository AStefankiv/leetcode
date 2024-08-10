const longestCommonPrefix = (array) => {
  if (array.length === 0) return '';
  let prefix = array[0];// flower
  for (let i = 1; i < array.length; i++) {
    while (array[i].indexOf(prefix) !== 0) {//while the prefix is not at the beginning of the array[i]
      prefix = prefix.substring(0, prefix.length - 1);
    }
  }
  return prefix;
}

console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
console.log(longestCommonPrefix(['dog', 'racecar', 'car']));
console.log(longestCommonPrefix(['car', 'car', 'cactus']));