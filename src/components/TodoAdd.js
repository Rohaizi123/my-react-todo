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
      <div className="d-flex justify-content-center">
        <button id="btn1" className="btn btn-primary" type="submit">
          Add
        </button>
        <button className="btn btn-primary" type="reset">
          Reset
        </button>
      </div>
    </form>
  );
};
export default TodoAdd;
