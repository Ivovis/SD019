console.log("\n --- Callback Functions --- \n");

function notifyUser() {
  console.log("notifyUser function called");
}

function myAwesomeFunction(notifyUserCallback) {
  console.log("Running myAwesomeFunction... doing complex tasks ...");
  console.log("Complex task complete. I will notify the user.");
  notifyUserCallback();
}

console.log(
  "\n calling myAwesomeFunction passing it the notifyUser function as a parameter\n"
);

myAwesomeFunction(notifyUser);

console.log("\n Heres the result using and anonymous function\n");

myAwesomeFunction(function () {
  console.log("anon told the user");
});

console.log("\n and now with the shorthand version (I like this one)\n");

myAwesomeFunction(() => {
  console.log("Pointy told the user");
});

function myAwesomeFunction2(onSuccessCallback, onFailureCallback) {
  console.log("Running myAwesomeFunction... doing complex tasks ...");
  console.log("Complex task complete. I will notify the user.\n");
  const success = Math.random() > 0.5;
  if (success) {
    onSuccessCallback({ message: "this is the message of success" });
  } else {
    onFailureCallback();
  }
}

function onAwesomeSuccess(data) {
  console.log("it was successful: ", data.message);
}

function onAwesomeFailure() {
  console.log("It Failed :(");
}

myAwesomeFunction2(onAwesomeSuccess, onAwesomeFailure);

// re-running the app.js gave expected 50-50 results
