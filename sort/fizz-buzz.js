// FizzBuzz = can divide by 3 and 5
// Fizz = can divide by 3
// Buzz = can divide by 5

const fizzBuzz = (num) => {
  for (let i = 0; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
};

fizzBuzz(15);
