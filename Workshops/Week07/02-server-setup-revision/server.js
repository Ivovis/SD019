import express from "express";
import cors from "cors";
import { db } from "./utils/dbConnections.js";

const app = express();
app.use(express.json());
app.use(cors());

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Server up on port ${process.env.SERVER_PORT}`);
});

// root route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the machine." });
});

app.get("/biscuits", async (req, res) => {
  try {
    const data = await db.query(`SELECT * from biscuits`);
    res.json(data.rows);
  } catch (error) {
    console.log("ERROR:", error);
    res.status(500).json({ success: false });
  }
});

// bugger me it worked first time!
// thats also the first time I have used try/catch in JS
// ============================================================

// app.post("/addBiscuit", (res, req) => {
//   //
//   console.log("TheBody", req.body);

//   const { biscuit_name, src, description, crunchiness } = req.body;

//   try {
//     const insert = db.query(
//       `INSERT INTO biscuits (biscuit_name,src,description,crunchiness) VALUES ($1,$2,$3,$4)`,
//       [biscuit_name, src, description, crunchiness]
//     );
//   } catch (error) {
//     console.log("ERROR:");
//     res.status(500).json({ success: false });
//   }
// });

app.post("/addBiscuit", (req, res) => {
  // const body = req.body; // in the body object, we are storing the new values to add to the table
  const { biscuit_name, src, description, crunchiness } = req.body; //destructured version of the body

  try {
    const insert = db.query(
      `INSERT INTO biscuits (biscuit_name, src, description, crunchiness) VALUES ($1, $2, $3, $4)`,
      [biscuit_name, src, description, crunchiness]
    ); // if you are NOT destructuring the body object, use dot notation (body.biscuit_name ...)
    res.status(200).json({ success: true }); // this is to have a confirmation that the body was sent to the db correctly
  } catch (error) {
    console.log(
      "Error, error, error, something broke! Check your connection string"
    );
    res.status(500).json({ success: false });
  }
});
