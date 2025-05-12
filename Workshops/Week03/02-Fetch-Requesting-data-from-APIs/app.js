/* "https://randomfox.ca/floof" */

console.log("online");

async function fetchFoxes() {
  const resp = await fetch("https://randomfox.ca/floof");
  const data = await resp.json();
  //   console.log(data.image);
  return data.image;
}

const foxBox = document.getElementById("fox-box");

function createFoxImages(foxSrc) {
  const foxImg = document.createElement("img");
  foxImg.src = foxSrc;
  foxImg.alt = "a fox";
  foxImg.width = "200";
  foxImg.height = "200";
  foxBox.appendChild(foxImg);
}

async function getTheFoxes() {
  const foxSrc = await fetchFoxes();
  createFoxImages(foxSrc);
}

function test() {
  for (let i = 0; i < 20; i++) {
    getTheFoxes();
  }
}

async function getMyStuffOverThere() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");

  console.log("HTTP Response:", response);

  const json = await response.json();
  console.log("JSON Data:", json);
  console.log(response.status);

  const response2 = await fetch("https://api.github.com/repos/ivovis/SD019");
  const json2 = await response2.json();

  console.log("JSON Data:", json2);
  console.log(response2.status);
  console.log("The repo is called", json2.description);

  document.getElementById(
    "head1"
  ).textContent = `My repo description is \"${json2.description}\"`;
}

test();
getMyStuffOverThere();
