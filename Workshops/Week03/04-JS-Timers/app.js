function messageOn() {
  document.getElementById("message").textContent = "Now you see me";
  setTimeout(messageOff, 5000);
}
function messageOff() {
  document.getElementById("message").textContent = "";
}
