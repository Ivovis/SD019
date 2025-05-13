/*

these were notes taken during the demo

const staff = {
  staffName: "Manny",
  staffLoc: "Norwich",
  StaffRoll: "instructor",
};

// add new data to local storage
// Step 1: stringify the data

const theData = JSON.stringify(staff);

// then store it
localStorage.setItem("staff", theData);

// retrieve data from local storage
// step 1: get the data back

const dataBack = localStorage.getItem("staff");

// step 2: parse the string'd data
const ndata = JSON.parse(dataBack);

console.log(ndata);

// show how many keys are in local storage
console.log(localStorage.length);

// key the key name based on index, can use .length to loops all keys
console.log(localStorage.key(0));

// clear all items
// localStorage.clear();

*/

const form = document.querySelector("form");

// form.addEventListener("submit", function (event) {
//   event.preventDefault();

//   const formData = new FormData(form);
//   const color = formData.get("color");

//   console.log("The color is", color);

//   localStorage.setItem("color", color);
//   console.log("done it");
// });

function savePreferences(event) {
  event.preventDefault();

  const formData = new FormData(form);
  const color = formData.get("color");
  const preferences = {
    color,
  };
  localStorage.setItem("prefs", JSON.stringify(preferences));
  location.reload(); // would be better to just update the elements, but this function is a new toy so I'm playing with it.
}

form.addEventListener("submit", savePreferences);

// const preferences = JSON.parse(localStorage.getItem("prefs"));

// if (preferences) {
//   const input = document.querySelector("input");
//   input.value = preferences.color;
// }

function loadPreferences() {
  const preferences = JSON.parse(localStorage.getItem("prefs"));

  if (preferences) {
    const input = document.querySelector("input");
    input.value = preferences.color || "#003300";

    const body = document.querySelector("body");
    body.style.color = preferences.color || "#330000";
  }
}

function clearPreferences(event) {
  event.preventDefault();
  localStorage.removeItem("prefs");
  location.reload(); // I looked this up
}

function setBackground(event) {
  console.log(event);

  const body = document.querySelector("body");
  body.setAttribute("background-color", "#880088"); // this didn't work
}

document.getElementById("pickerID").addEventListener("input", setBackground);

document.getElementById("butReset").addEventListener("click", clearPreferences);

loadPreferences();
