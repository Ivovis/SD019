console.log("--- Loops ---");

console.log("showing the iteration variable values:\n");
for (let i = 0; i < 5; i++) {
  console.log("Iteration", i);
}

// skipped while loops until Manny has demo'ed them

const foods = ["Pizza", "Chocolate", "Ice Cream", "Cheese"];

console.log("\nlisting an array one item at a time:\n");
for (let i = 0; i < foods.length; i++) {
  console.log(foods[i]);
}

console.log("\nnow using the 'of' format of for:\n");

for (let food of foods) {
  console.log(food);
}

console.log("\nHears the foreach method used to list the array items:  \n");

foods.forEach(function (food) {
  console.log(food);
});

console.log(
  "\nHears the foreach method used to list the array items this time with the index as well:\n"
);

foods.forEach(function (food, index) {
  console.log(index, food);
});

console.log(
  "The actual workshop now follows, I opted to use multiple arrays in a single loop and added a conditional just for the last items extended information"
);

const animalList = ["Cat", "Dog", "Stingray", "Owl"];
const colourList = ["Red", "Green", "Blue", "Alpha"]; // sorry that last one was dim

const numberList = [7, 5, 8, 4]; // not my pin

for (i = 0; i < 4; i++) {
  console.log(
    `I have a ${colourList[i]} ${animalList[i]} and it is ${numberList[i]} years old. `
  );
  if (i === 3) {
    console.log("That last one is a bit bossy\n\n");
  }
}
