const array = [1, 1, 2, 3, 3, 3];
let object = {};
for (let i = 0; i < array.length; i++) {
  if (object[array[i]] === undefined) {
    object[array[i]] = 1;
  } else {
    object[array[i]] += 1;
  }
}
console.log(object); // { '1': 2, '2': 1, '3': 3 }

// object[array[0]] = 1;
// console.log(object[array[0]]); // 1
// object[array[0]] += 1;
// console.log(object[array[0]]); // 2
// console.log(object);