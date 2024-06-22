const celsius_to_fahrenheit = (celsius) => {
  fahrenheit = (celsius * 9/5) + 32;
  return "The temp is " + celsius + " degrees celsius, which is " + fahrenheit + " degrees fahrenheit.";
}

const fahrenheit_to_celsius = (fahrenheit) => {
  celsius = (fahrenheit - 32) * 5/9;
  return "The temp is " + fahrenheit + " degrees fahrenheit, which is " + celsius + " degrees celsius.";
}

console.log(celsius_to_fahrenheit(0));
console.log(fahrenheit_to_celsius(32));