console.log("on line");

let exampleGlobal = "This is a global variable it can be accessed everywhere";

function myFunction(paraName, paraValue1, paraValue2) {
  let result = paraValue1 + paraValue2;
  console.log(
    `(This is from within the function) Hey ${paraName}, the numbers added up are ${result}`
  );

  console.log(
    `This is also from within the function, that global variable is set to \"${exampleGlobal}\"`
  );

  return result;
}

console.log(
  `The result of the function call was ${myFunction("Manny or Joe", 40, 2)}`
);
