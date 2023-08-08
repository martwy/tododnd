import type { FC } from 'react'
import { useDrag } from "react-dnd"

import { Todos } from '../utils/types'


export const Task: FC<Todos> = ({id, title}) => {

    const [ { isDragging }, drag] = useDrag(() => ({
        type: "task",
        item: {id},
        collect: (monitor) => ({
          isDragging: !!monitor.isDragging(),
        }),
      }))
    
  return (
    <div ref={drag} className={`shadow-md rounded-md cursor-grab p-4 ${isDragging ? "opacity-25" : "opacity-100"}`}>
        {title}
    </div>
  )
}
