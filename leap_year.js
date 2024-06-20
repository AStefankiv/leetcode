const leapYear = (year) => {
  return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}

console.log(leapYear(2020)) // true
console.log(leapYear(2021)) // false
console.log(leapYear(2022)) // false
console.log(leapYear(2023)) // false
console.log(leapYear(2024)) // true