import express from "express";
import mysql from "mysql2";

const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "277jinali",
  database: "book-store",
});

app.get("/", (req, res, next) => {
  res.json("Hello");
});
app.get("/books", (req, res, next) => {
  const sql = `SELECT * FROM books`;
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    console.log(data);

    return res.json(data);
  });
});
app.post("/books", (req, res, next) => {
  const q = "INSERT INTO books (`title`, `desc`, `cover`) VALUES (?)";
  const values = ["Narnina II", "this is a desc", "cover.png"];

  //   const title = req.body.title;
  //   const desc = req.body.desc;
  //   const cover = req.body.cover;
  db.query(q, [values], (err, data) => {
    // if (err) return res.json(err);
    console.log(data);

    return res.json({
      message: "Book added successfully",
    });
  });
});

app.listen(3000, () => {
  console.log("Connected on port 3000");
});
