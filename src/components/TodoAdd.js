import { useState } from "react";

const TodoAdd = ({ addTodo }) => {
  const [title, setTitle] = useState("");

  const updateTitle = (e) => {
    setTitle(e.target.value);
  };

  //to prevent submitting data with enter
  // const checkKeyDown = (e) => {
  //   if (e.code === "Enter") e.preventDefault();
  // };

  const submit = (e) => {
    e.preventDefault();
    addTodo(title);
  };

  return (
    <form onSubmit={submit}>
      <input
        type="text"
        className="form-control add-todo"
        placeholder="Add todo"
        onChange={updateTitle}
      />
      <br />
      <button className="btn btn-success" type="submit">
        Add
      </button>
    </form>
  );
};
export default TodoAdd;
