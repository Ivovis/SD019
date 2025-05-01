console.log("on line");

const button = document.querySelector("button");
console.log(button.textContent);

button.addEventListener("click", function (event) {
  console.log(event);
});

button.addEventListener("dblclick", function (event) {
  console.log("that tickles!");
});

button.addEventListener("mouseover", function (event) {
  console.log("Who's that");
});
