import type { FC } from 'react'
import { useDrop } from "react-dnd"
import { useContext } from 'react'
import { AppContext } from "../App";


import { TodoContext, Sections } from '../utils/types'

export const Section: FC<Sections> = ({status, children}) => {
    const appData = useContext(AppContext) as TodoContext;
    const { updateTodo } = appData;

    const [ { isOver }, drop] = useDrop(() => ({
        accept: "task",
        drop: (item:Object) => updateTodo(item, status),
        collect: (monitor) => ({
          isOver: !!monitor.isOver(),
        }),
      }))
    
  return (
    <div ref={drop} className={`flex flex-col w-60 h-60 ${isOver ? "bg-slate-200" : null}`}>{children}</div>
  )
}
