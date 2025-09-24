import React, { useState } from "react";

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addTodo(value);

    setValue("");
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="What is your task?"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      ></input>
      <button type="submit" className="todo-btn">
        Submit
      </button>
    </form>
  );
};
