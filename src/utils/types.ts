import type { ReactNode } from 'react'

export type Todos = {
  id: string;
  title: string;
  status: string;
};

export type Sections = {
  status: string;
  children?: ReactNode;
}

export type TodoContext = {
  todos: Todos[];
  saveTodo: (title: string) => void;
  updateTodo: (id:Object, status:string) => void;
};
