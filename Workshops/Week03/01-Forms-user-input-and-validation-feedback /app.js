const mainForm = document.getElementById("main-form");

console.log(mainForm);

function handler(event) {
  event.preventDefault();

  const formData = new FormData(mainForm);
  console.log(formData);

  const formValues = Object.fromEntries(formData);
  console.log(formValues);

  document.getElementById("reply").textContent = `Hi ${formValues.userName}`;
}

mainForm.addEventListener("submit", handler);
