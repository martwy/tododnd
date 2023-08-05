import React, { createContext, useState } from "react";
import CreateTask from "./components/CreateTask";
import { TodoContext, Todos } from "./utils/types";
import "./App.css";
import ListTask from "./components/ListTask";
import uuid from "react-uuid";

export const AppContext = createContext<TodoContext | null>(null);

function App() {
  const [todos, setTodos] = useState<Todos[]>([
    {
      id: "1",
      title: "post 1",
      status: "finished",
    },
    {
      id: "2",
      title: "post 2",
      status: "todo",
    },
    {
      id: "3",
      title: "post 3",
      status: "inProgress",
    },
  ]);

  function saveTodo(title: string) {
    const newTodo: Todos = {
      id: uuid(),
      title: title,
      status: "todo",
    };
    setTodos([...todos, newTodo]);
  }

  function updateTodo(id: string) {
    todos.filter((todo: Todos) => {
      if (todo.id === id) {
        todo.status = "done";
        setTodos([...todos]);
      }
    });
  }
  return (
    <AppContext.Provider value={{ todos, saveTodo, updateTodo }}>
      <div>
        <CreateTask />
        <ListTask />
      </div>
    </AppContext.Provider>
  );
}

export default App;
