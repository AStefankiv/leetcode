const py_string = (str) => {
  const first_two = str.slice(0, 2);
  if (first_two === 'Py') {
    return str;
  } else {
    return 'Py' + str;
  }
};

console.log(py_string('Python'));
console.log(py_string('thon'));