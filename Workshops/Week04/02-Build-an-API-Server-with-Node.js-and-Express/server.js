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

// create new data -> http://localhost:8080/newData
app.post("/newData", function (request, response) {
  const data = response.body;
  response.json({ message: "body got", data });
});

// =======================================================================
// everything above was done during the demo everything below during the workshop ...

app.get("/messages", function (request, response) {
  response.json({ message: "hello World" });
});

app.post("/messages", function (request, response) {
  // response.json({ message: "hello again?" });

  const data = request.body;
  console.log("the request", request);

  response.send(data);
});

// app.use already defined in the demo above
