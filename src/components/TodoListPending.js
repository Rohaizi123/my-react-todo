const TodoListPending = ({ todos, markDoneTodo }) => {
  const changeState = (e) => {
    markDoneTodo(e.target.value);
  };

  return (
    <>
      <ul id="sortable" className="list-unstyled">
        {todos.map((todo, i) => {
          return (
            <li className="ui-state-default" key={i}>
              <div className="checkbox">
                <label>
                  <input
                    type="checkbox"
                    value={todo.title}
                    checked={todo.state !== "pending"}
                    onChange={changeState}
                  />
                  {todo.title}
                </label>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="todo-footer">
        <strong>
          <span className="count-todos"></span>
        </strong>
        Items Left <b>{todos.length}</b>
      </div>
    </>
  );
};

export default TodoListPending;
