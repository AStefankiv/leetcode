const closestTo100 = (a, b) => {
  const distanceA = Math.abs(100 - a);
  const distanceB = Math.abs(100 - b);
  if (distanceA < distanceB) {
    return a;
  } else {
    return b;
  }
}

const num1 = 95;
const num2 = 88;

console.log(closestTo100(num1, num2)); // 99