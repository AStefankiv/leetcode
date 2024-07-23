const removeChar = (str, char) => {
  let str_arrary = str.split('');
  let new_str = '';
  for (let i = 0; i < str_arrary.length; i++) {
    if (str_arrary[i] !== char) {
      new_str += str_arrary[i];
    }
  }
  return new_str;
}

console.log(removeChar('hello', 'e'));