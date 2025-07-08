// // fetch and display data for user 1
// document.getElementById('fetchUser1').addEventListener('click', async function() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
//     const user = await response.json();
//     document.getElementById('user1Name').textContent = user.name;
//     document.getElementById('user1Email').textContent = user.email;
// });

// // fetch and display data for user 2
// document.getElementById('fetchUser2').addEventListener('click', async function() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users/2');
//     const user = await response.json();
//     document.getElementById('user2Name').textContent = user.name;
//     document.getElementById('user2Email').textContent = user.email;
// });

// // fetch and display data for user 3
// document.getElementById('fetchUser3').addEventListener('click', async function() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users/3');
//     const user = await response.json();
//     document.getElementById('user3Name').textContent = user.name;
//     document.getElementById('user3Email').textContent = user.email;
// });

// create a single function that adds an event listener to a given element's id

// the common factor is that the users are all referred to by number

// here are the users you want,(using strings because that was the type used above)
const users = ["1", "2", "3"];

// here we add a listener for each member of the array
users.forEach(function (userNumber) {
  document
    .getElementById(`fetchUser${userNumber}`)
    .addEventListener("click", async function () {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userNumber}`
      );
      const user = await response.json();
      document.getElementById(`user${userNumber}Name`).textContent = user.name;
      document.getElementById(`user${userNumber}Email`).textContent =
        user.email;
    });
});

// // my test
// users.forEach(function (userNumber) {
//   console.log("element id:", `fetchUser${userNumber}`);
//   console.log(
//     "url:",
//     `https://jsonplaceholder.typicode.com/users/${userNumber}`
//   );
//   console.log("name:", `user${userNumber}Name`);
//   console.log("name:", `user${userNumber}Email`);
//   console.log("------------------");
// });
