const messageForm = document.querySelector("#messageForm");

function handleSubmitMessageForm(event) {
  event.preventDefault();
  console.log("form submitted");

  const formData = new FormData(messageForm);

  const message = formData.get("message");
  fetch("http://localhost:8080/messages", {
    method: "POST",
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify({ message }),
  });
}

messageForm.addEventListener("submit", handleSubmitMessageForm);
