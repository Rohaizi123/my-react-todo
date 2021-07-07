import { useState } from "react";

const TodoListMarkDone = ({ markAllDoneTodo }) => {
  const [condition, setCondition] = useState("");
  const markAll = (e) => {
    markAllDoneTodo(e.target.value);
    setCondition("");
  };

  return (
    <div id="checkbox1" className="checkbox">
      <label>
        <input type="checkbox" onChange={markAll} checked={condition} />
        Mark all as done
      </label>
    </div>
  );
};

export default TodoListMarkDone;
