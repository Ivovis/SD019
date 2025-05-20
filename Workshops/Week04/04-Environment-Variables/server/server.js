import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pg from "pg";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", function (request, response) {
  response.send("This is the roots route");
});

app.listen(8080, function () {
  console.log("Server is runnign on port 8080");
});

dotenv.config();

const db = new pg.Pool({
  connectionString: process.env.URL,
});

console.log(process.env.URL);
