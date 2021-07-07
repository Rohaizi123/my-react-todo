import { useEffect, useState } from "react";
import TodoAdd from "./TodoAdd";
import TodoListMarkDone from "./TodoListMarkDone";
import TodoListPending from "./TodoListPending";
import TodoListDone from "./TodoListDone";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [todosPending, setTodosPending] = useState([]);
  const [todosDone, setTodosDone] = useState([]);

  const addTodo = (todo) => {
    const temp = [...todos];
    temp.push({ title: todo, state: "pending" });
    setTodos(temp);
    console.log(temp);
  };

  const markAllDoneTodo = () => {
    const temp = [...todos];
    for (var i = 0; i < temp.length; i++) {
      temp[i].state = "done";
    }
    setTodos(temp);
  };

  const markDoneTodo = (todoTitle) => {
    const index = todos.findIndex((todo) => todo.title === todoTitle);
    const temp = [...todos];
    temp[index].state = "done";
    setTodos(temp);
  };

  const removeDoneTodo = (todoTitle) => {
    const index = todos.findIndex((todo) => todo.title === todoTitle);
    const temp = [...todos];
    temp.splice(index, 1);
    setTodos(temp);
  };

  //this code always run when render, needs to do something after render
  useEffect(() => {
    console.log("updating todos", todos);
    const pending = todos.filter((todo) => todo.state === "pending");
    setTodosPending(pending);
    const dones = todos.filter((todo) => todo.state === "done");
    setTodosDone(dones);
  }, [todos]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="todolist not-done">
            <h1>Todos</h1>
            <TodoAdd addTodo={addTodo} />
            <TodoListMarkDone markAllDoneTodo={markAllDoneTodo} />
          </div>
          <div className="todolist not-done">
            <TodoListPending todos={todosPending} markDoneTodo={markDoneTodo} />
          </div>
        </div>
        <div className="col-md-6">
          <TodoListDone todos={todosDone} removeDoneTodo={removeDoneTodo} />
        </div>
      </div>
    </div>
  );
};

export default Todos;
