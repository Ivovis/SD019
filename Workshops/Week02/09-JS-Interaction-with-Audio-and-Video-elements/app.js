const image = document.querySelector("img");

image.addEventListener("load", function (event) {
  console.log("Image loaded", event);
});

const audio = document.querySelector("audio");

audio.addEventListener("play", function (event) {
  console.log("playing", event);
});

const video = document.querySelector("video");

video.addEventListener("time", function (event) {
  console.log("Time event:", event);
});

const button1 = document.querySelector("button");
button1.addEventListener("click", function (event) {
  audio.play();
});

const button2 = document.getElementById("button2");
button2.addEventListener("click", function (event) {
  audio.pause();
});

const button3 = document.getElementById("button3");
button3.addEventListener("click", function (event) {
  audio.currentTime = 0;
  audio.pause();
});
