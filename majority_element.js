const array = [1, 1, 2, 3, 3, 3, 3];
const majorityElement = (array) => {
  let object = {};
  
  // Count the frequency of each element in the array
  for (let i = 0; i < array.length; i++) {
    if (object[array[i]] === undefined) {
      object[array[i]] = 1;
    } else {
      object[array[i]]++;
    }
  }

  // Check for the majority element
  for (let key in object) {
    if (object[key] > array.length / 2) {
      return key;
    }
  }

  // If no majority element is found
  return null;
}

console.log(majorityElement(array)); // null or the majority element if it exists
