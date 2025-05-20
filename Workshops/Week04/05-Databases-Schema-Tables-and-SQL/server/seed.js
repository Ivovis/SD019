import pg from "pg";
import dotenv from "dotenv";
dotenv.config();

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});

db.query(
  `INSERT INTO messages (msg_name,content) VALUES ('hello there','general Kenobi')`
);

db.query(`INSERT INTO messages (msg_name,content) VALUES ($1,$2)`, [
  "Does anyone else...",
  "love Apples",
]);

db.query(`INSERT INTO messages (msg_name, content) VALUES ($1, $2)`, [
  "hot take: ",
  "I think oranges suck",
]);

// EVERY TIME YOU RUN THIS THE DATABASE GET MORE PLUMP !
