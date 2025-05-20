import express from "express";
import dotenv from "dotenv";
import pg from "pg";

const app = express();
app.use(express.json());
dotenv.config();

const db = new pg.Pool({
  ConnectionString: process.env.DATABASE_URL,
});

app.listen(8080, function () {
  console.log("servers up on port 8080");
});

app.get("/", function (request, response) {
  response.json({ message: "Welcome to my server" });
});

// app.get("/messages", async function (request, response) {
//   const q = await db.query(`SELECT * FROM messages;`);

//   //  const data = response.json(messages.rows);
//   //  console.log("data:", data);

//   // this below works with the above commented out
//   // proving that the route works and is being called
//   response.json({ message: "what messages" });
// });

// Create a new database for storing some data sent to your API
// completed as part of the example given in the workshop

app.get("/messages", async function (request, response) {
  const messages = await db.query("SELECT * FROM messages");
  response.json(messages.rows);
});
