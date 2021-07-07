const TodoListMarkDone = ({ markAllDoneTodo }) => {
  const markAll = (e) => {
    markAllDoneTodo(e.target.value);
  };

  return (
    <button id="checkAll" className="btn btn-success" onClick={markAll}>
      Mark all as done
    </button>
  );
};

export default TodoListMarkDone;
