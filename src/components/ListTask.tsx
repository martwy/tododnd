import { useContext, useEffect, useState } from "react";
import { AppContext } from "../App";
import { TodoContext, Todos } from "../utils/types";
import { Task } from "./Task";
import { Section } from "./Section";
function ListTask() {
  const [todo, setTodo] = useState<Todos[]>([]);
  const [inProgress, setInProgress] = useState<Todos[]>([]);
  const [finished, setFinished] = useState<Todos[]>([]);
  const appData = useContext(AppContext) as TodoContext;
  const { todos } = appData;

  useEffect(()=>{
    const todoList = [...todos].filter(todo => todo.status === "todo")
    const inProgressList = [...todos].filter(todo => todo.status === "inProgress")
    const finishedList = [...todos].filter(todo => todo.status === "finished")

    setTodo(todoList)
    setInProgress(inProgressList)
    setFinished(finishedList)
  },[todos])




  return (
    <>      
      <div className="flex justify-center gap-20 mt-32">
      <Section status="todo">
        <span  className="flex items-center h-12 pl-4 rounded-md text-sm text-white bg-slate-500">TODO</span>
        
        {todo.map(todo => <Task key={todo.id} id={todo.id} title={todo.title} status={todo.status} />)}
        </Section>
        <Section status="inProgress">
          
        <span  className="flex items-center h-12 pl-4 rounded-md text-sm text-white bg-pink-600">IN PROGRESS</span>

        
        {inProgress.map(todo => <Task key={todo.id} id={todo.id} title={todo.title} status={todo.status} />)}
          
        </Section>
        <Section status="finished">
        <span  className="flex items-center h-12 pl-4 rounded-md text-sm text-white bg-green-500">FINISHED</span>

        {finished.map(todo => <Task key={todo.id} id={todo.id} title={todo.title} status={todo.status} />)}
        </Section>
      </div>
    </>
  );
}

export default ListTask;
