/*
  Exercise 3
  New JavaScript (ES6) syntax
*/

// Task
// Note that all three functions below are equivalent. Convert your function in Exercise 1 to ES6 syntax

function adder(a, b) {
  return a + b;
}

const adder2 = (a, b) => a + b;

const adder3 = (a, b) => {
  return a + b;
};

// Task
// Which of the following lines generates an error? Why? Fix the code so it does not generate an error.
const a = 1;
let b = 2;

a = b + 1;
b = a + 2;
