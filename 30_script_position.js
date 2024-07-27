const scriptFifth = (str) => {
  const fifth = str.slice(4, 10);
  if (fifth === 'script') {
    return true;
  } else {
    return false;
  }
}

console.log(scriptFifth('javascript')); // script
console.log(scriptFifth('java')); // false
console.log(scriptFifth('javascriptses')); // false