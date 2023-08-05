import { MouseEventHandler } from "react";

export type Todos = {
  id: string;
  title: string;
  status: string;
};

export type TodoContext = {
  todos: Todos[];
  // saveTodo: (title: string) => void;
  updateTodo: (id: string) => void;
};
