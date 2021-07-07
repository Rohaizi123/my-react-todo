const TodoListDone = ({ todos, removeDoneTodo }) => {
  const removeTodo = (todo) => {
    removeDoneTodo(todo.title);
  };

  return (
    <div className="todolist">
      <h1>Already Done</h1>
      {todos.length === 0 ? (
        <div>
          <h5>
            <b>No Task Done</b>
          </h5>
        </div>
      ) : (
        <div>
          <h5>
            <b>Task Done</b>
          </h5>
        </div>
      )}
      <ul id="done-items" className="list-unstyled">
        {todos.map((todo, i) => {
          return (
            <li key={i}>
              {i + 1}. {todo.title}
              <button
                className="remove-item btn btn-danger btn-xs pull-right"
                onClick={() => {
                  removeTodo(todo);
                }}
              >
                <span className="glyphicon glyphicon-remove"></span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoListDone;
