const strictSort = (x, y, z) => {
  if (x < y && y < z) {
    return 'strict mode';
  } else if (z > y) {
    return 'soft mode';
  } else {
    return 'default mode';
  }
}

console.log(strictSort(1, 2, 3));// strict mode
console.log(strictSort(3, 2, 1));// soft mode
console.log(strictSort(1, 3, 2));// default mode