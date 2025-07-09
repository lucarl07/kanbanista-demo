// Data loading:
// import 'data/LOAD_DATA' // [Will be continuously commented & uncommented on development]
import getBoardData from 'utils/getBoardData'

// Types & styles:
import * as types from 'src/types'
import { type DragEndEvent } from '@dnd-kit/core'
import styles from 'styles/Board.module.css'

// Modules & components:
import { useState } from 'react'
import { DndContext } from '@dnd-kit/core'
import sortTasks from 'utils/sortTasks'
import Column from 'components/Column'

export default function Board() {
  const { COLUMNS, TASKS } = getBoardData()
  const [tasks, setTasks] = useState<types.Task[]>(TASKS)

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event

    if (!over) return;

    const taskId = active.id as string
    const newColumnId = over.id as types.Task['columnId']
    const updatedTasks = tasks.map(task => task.id === taskId 
      ? { ...task, columnId: newColumnId }
      : task)

    setTasks(() => updatedTasks)
  }
  
  return (
    <main className={styles.main}>
      <div className={styles.columns}>
        <DndContext onDragEnd={handleDragEnd}>
          {COLUMNS.map(column => (
            <Column 
              key={column.id} 
              column={column} 
              tasks={tasks
                .filter(task => task.columnId === column.id)
                .sort(sortTasks)
              }
            />
          ))}
        </DndContext>
      </div>
    </main>
  )
}