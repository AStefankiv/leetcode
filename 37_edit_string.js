const editString = (str) => {
  const firstThree = str.slice(0, 3);
  const nextThree = str.slice(3);
  if (str.length < 3) {
    return str.toUpperCase();
  }
  return firstThree.toLowerCase() + nextThree;
}

console.log(editString('Python'));
console.log(editString('hi'));