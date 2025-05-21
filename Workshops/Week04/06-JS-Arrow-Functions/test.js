const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;

console.log(add(2, 3));
console.log(sub(2, 3));
console.log(mul(2, 3));
console.log(div(2, 3));

pseudoEventListener = () => {
  let count = 0;
  return (count += 1);
};

console.log(
  "return can only be omitted when a single operation is performed ",
  pseudoEventListener()
);
