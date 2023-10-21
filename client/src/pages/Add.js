import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export const Add = () => {
  const [book, setBook] = useState({
    title: "",
    desc: "",
    cover: "",
  });

  const navigate = useNavigate();

  const inputChangeHandler = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const formSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const results = await axios.post("http://localhost:3000/book", book);
      console.log(results);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <button>
        <Link to="/">Home</Link>
      </button>
      <div className="form">
        <h1>Add New Book</h1>
        <input
          type="text"
          placeholder="title"
          name="title"
          onChange={inputChangeHandler}
        />
        <input
          type="text"
          placeholder="desc"
          name="desc"
          onChange={inputChangeHandler}
        />
        <input
          type="text"
          placeholder="cover"
          name="cover"
          onChange={inputChangeHandler}
        />
        <button onClick={formSubmitHandler}>Add</button>
      </div>
    </div>
  );
};
