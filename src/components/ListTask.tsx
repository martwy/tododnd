import React, { useContext, useState } from "react";
import { AppContext } from "../App";
import { TodoContext } from "../utils/types";
function ListTask() {
  const [todo, setTodo] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [finished, setFinished] = useState([]);
  const statuses = ["todo", "in progress", "finished"];
  const appData = useContext(AppContext) as TodoContext;
  const { todos } = appData;
  return (
    <>
      <div className="grid grid-cols-3 gap-6 w-1/2 mx-auto mt-32 first:inline">
        {statuses.map((status) => (
          <span
            className={`flex items-center h-12 pl-4 rounded-md uppercase text-sm text-white ${
              status == "todo" && "bg-slate-500"
            } ${status == "in progress" && "bg-pink-600"} ${
              status == "finished" && "bg-green-500"
            }`}
          >
            {status}
          </span>
        ))}
        {todos.map((todo) => (
          <div key={todo.id} className="shadow-md rounded-md cursor-grab p-4">
            <span>{todo.title}</span>
          </div>
        ))}
      </div>
    </>
  );
}

export default ListTask;
