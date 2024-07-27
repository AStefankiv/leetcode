const start_java = (str) => {
  const firstFour = str.slice(0, 4);
  if (firstFour === 'java') {
    return true;
  } else {
    return false;
  }
}

console.log(start_java('javascript')); // false
console.log(start_java('java')); // undefined
console.log(start_java('javelin')); // false