const last_three = (str) => {
  const lastThree = str.slice(-3);
  return lastThree + str + lastThree;
}

console.log(last_three('hello')); // llohellollo