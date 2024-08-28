const array = [1, 1, 2, 3, 3, 3];
let object = {};
for (let i = 0; i < array.length; i++) {
  if (object[array[i]] === undefined) {
    object[array[i]] = 1;
  } else {
    object[array[i]] += 1;
  }
}

max_value = Math.max(...Object.values(object));
console.log(max_value);