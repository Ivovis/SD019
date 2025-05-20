import express from "express";
import dotenv from "dotenv";
import pg from "pg";

const app = express();

// IF YOU LEAVE OUT THE () on .json() you will not get and error, the get will not be returned
app.use(express.json());
dotenv.config();

// IF YOU HAVE A CAPITOL C for connectionString you will get
// Error: connect ECONNREFUSED 127.0.0.1:5432
const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});

app.listen(8080, function () {
  console.log("servers up on port 8080");
});

app.get("/", function (request, response) {
  response.json({ message: "Welcome to my server" });
});

// This was copied and pasted directly from Manny's demo repo
// I used the queries.sql to build the staff table on supabase.com
// once this failed the same as mine I searched further and found the capitol C noted above.
app.get("/staff", async function (request, response) {
  //read the staff data in our database
  const query = await db.query(`SELECT * FROM staff;`);
  //   console.log(query); //this is a Response object
  //parse the data into JSON and wrangle the data to just be the rows property
  const data = response.json(query.rows);
  //   console.log(data); //this is our wrangled data in JSON format
});

app.get("/messages", async function (request, response) {
  const messages = await db.query("SELECT * FROM messages");
  const data = response.json(messages.rows);
  console.log(data);
});
