import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export const Book = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:3000/books");
        console.log(res.data);
        setBooks(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchAllBooks();
  }, []);

  return (
    <div>
      <button>
        <Link to="/add">Add a new book</Link>
      </button>
      <div className="books">
        {books.map((book) => (
          <div key={book.id} className="book">
            {book.cover && <img src={book.cover} alt={book.title} />}
            <h2>{book.title}</h2>
            <p>{book.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
