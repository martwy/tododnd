import React, { useContext, useState } from "react";
import { AppContext } from "../App";
import { TodoContext } from "../utils/types";

function CreateTask() {
  const appData = useContext(AppContext) as TodoContext;
  const { saveTodo } = appData;
  const [taskName, setTaskName] = useState("");
  return (
    <>
      <div className="flex justify-center text-3xl font-bold font-sans mt-6">
        <span>ToDo List</span>
      </div>
      <div className="flex justify-center mt-10">
        <input
          type="text"
          value={taskName}
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            setTaskName(e.currentTarget.value)
          }
          className="border-2 border-slate-500 bg-slate-200 rounded-md w-60 h-12 px-1 mr-4"
        ></input>
        <button
          type="submit"
          onClick={saveTodo(taskName)}
          className="border-2 border-sky-400 bg-slate-200 px-4 h-12 rounded-md"
        >
          Add
        </button>
      </div>
    </>
  );
}

export default CreateTask;
