const date = new Date();
console.log(date);

const christmas2024 = new Date(2024, 11, 25); // 25th December 2024
console.log(christmas2024);

const daysBeforeChristmas = (date, christmas) => {
  const diff = christmas - date;
  const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
  return days;
}

console.log(daysBeforeChristmas(date, christmas2024));