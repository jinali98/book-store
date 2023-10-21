import "dotenv/config";
import express from "express";
import mysql from "mysql2";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.DB_PASSWORD,
  database: "book-store",
});

app.get("/books", (req, res, next) => {
  const sql = `SELECT * FROM books`;
  db.query(sql, (err, data) => {
    if (err) return res.json(err);

    return res.json(data);
  });
});

app.post("/book", (req, res, next) => {
  const q = "INSERT INTO books (`title`, `desc`, `cover`) VALUES (?)";
  const values = [req.body.title, req.body.desc, req.body.cover];

  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);

    return res.json({
      message: "Book added successfully",
    });
  });
});

app.listen(3000, () => {
  console.log("Connected on port 3000");
});
