const validateInt = (number) => {
  if (!Number.isInteger(number)) {
    throw new Error('The number is not an integer');
  }
  console.log('The number is an integer');
}

try {
  validateInt(1);
  validateInt('1');
} catch (error) {
  console.log(error.message);
}