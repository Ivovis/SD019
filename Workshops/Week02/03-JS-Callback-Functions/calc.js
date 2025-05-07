function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) return 0;
  return a / b;
}

function myCalculatorFunction(a, b, operationCallback) {
  console.log("doing a calculation using the numbers: ", a, b);
  console.log("We might have code that saves the result to a log or database");
  return operationCallback(a, b);
}

const result = myCalculatorFunction(1, 2, add);
console.log("addition: ", result);

const result2 = myCalculatorFunction(3, 2, multiply);
console.log("multiplication: ", result2);

const result3 = myCalculatorFunction(3, 4, divide);
console.log("division: ", result3);

const result4 = myCalculatorFunction(3, 1, sub);
console.log("subtraction: ", result4);
