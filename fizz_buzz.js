const fizzBuzz = (n) => {
    let result = [];
    if (n % 3 === 0 && n % 5 === 0) {
        result.push('FizzBuzz');
    }
    return result;
};

console.log(fizzBuzz(15)); // ['FizzBuzz']