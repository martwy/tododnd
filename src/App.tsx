import { createContext, useState } from "react";
import CreateTask from "./components/CreateTask";
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import { TodoContext, Todos } from "./utils/types";
import "./App.css";
import ListTask from "./components/ListTask";
import uuid from "react-uuid";


export const AppContext = createContext<TodoContext | null>(null);

function App() {
  const [todos, setTodos] = useState<Todos[]>([]);

  function saveTodo(title: string) {
    const newTodo: Todos = {
      id: uuid(),
      title: title,
      status: "todo",
    };
    setTodos([...todos, newTodo]);
  }

  function updateTodo(id:Object, status:string) {
    const idString = Object.values(id)[0]
    setTodos((prev) => {
      const newStatus = prev.map((todo) => {
        if (todo.id === idString){
          return {...todo, status: status}
        }
        return todo
      });
      return newStatus
    });
  }
  return (
    <DndProvider backend={HTML5Backend}>
    <AppContext.Provider value={{ todos, saveTodo, updateTodo }}>
      <div>
        <CreateTask />
        <ListTask />
      </div>
    </AppContext.Provider>
    </DndProvider>
  );
}

export default App;
