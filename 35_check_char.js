const check_char = (str, char) => {
  const second_and_fourth = str.slice(2, 3);
  if (second_and_fourth === char) {
    return true;
  } else {
    return false;
  }
}

console.log(check_char('javascript', 'v')); // true
console.log(check_char('javascript', 'a')); // false