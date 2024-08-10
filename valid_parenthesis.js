const parenthesis = (str) => {
  const open = ['(', '[', '{'];
  const close = [')', ']', '}'];
  for (let i = 0; i < str.length; i++) {
    if (open.includes(str[i])) {//if open is found in the string
      if (!close.includes(str[i + 1]))
        return false;
    }
  }
  return true;
}

console.log(parenthesis('()'));
console.log(parenthesis('()[]{}'));
console.log(parenthesis('(]'));