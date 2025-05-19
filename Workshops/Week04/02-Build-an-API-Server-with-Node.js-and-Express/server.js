import express from "express";

// init
const app = express();

// tell express to use json data structures
app.use(express.json());

// set up port for server
app.listen("8080");

// create the root route ---> http://localhost:8080/

app.get("/", function (request, response) {
  response.json({ message: "welcome to my server" });
});

// another route
app.get("/usersdata", function (request, response) {
  response.json({ staff: 2 });
});
