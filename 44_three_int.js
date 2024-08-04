const threeInt = (a, b, c) => {
  return (
    (a >= 20 && (a < b || a < c)) ||
    (b >= 20 && (b < a || b < c)) ||
    (c >= 20 && (c < a || c < b))
  )
}

console.log(threeInt(10, 20, 30)) // true
console.log(threeInt(20, 20, 10)) // true
console.log(threeInt(30, 40, 50)) // false