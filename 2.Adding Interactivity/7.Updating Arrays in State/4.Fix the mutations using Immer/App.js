import { useState } from "react";
import { useImmer } from "use-immer";
import AddTodo from "./AddTodo.js";
import TaskList from "./TaskList.js";

let nextId = 3;
const initialTodos = [
  { id: 0, title: "Buy milk", done: true },
  { id: 1, title: "Eat tacos", done: false },
  { id: 2, title: "Brew tea", done: false },
];

export default function TaskApp() {
  const [todos, setTodos] = useImmer(initialTodos);

  function handleAddTodo(title) {
    setTodos((todos) => {
      todos.push({
        id: nextId++,
        title: title,
        done: false,
      });
    });
  }

  function handleChangeTodo(nextTodo) {
    setTodos((todos) => {
      for (let todo of todos) {
        if ( todo.id === nextTodo.id ) {
          todo.done = nextTodo.done;
          todo.title = nextTodo.title;
          break;
        }
      }
    });
  }

  function handleDeleteTodo(todoId) {
    setTodos((todos) => todos.filter((todo) => todo.id !== todoId));
  }

  return (
    <>
      <AddTodo onAddTodo={handleAddTodo} />
      <TaskList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </>
  );
}
