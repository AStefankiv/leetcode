const person = {
  name: 'John',
  age: 20,
  address: {
    city: 'New York',
    country: 'USA'
  }
};

try {
  console.log(person.address.street);
} catch (error) {
  console.log(error);
}