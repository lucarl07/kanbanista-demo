// Data files:
import COLUMNS from 'data/COLUMNS.ts'
import TASKS from 'data/INITIAL_TASKS.ts'

// Types & styles:
import * as types from 'src/types'
import { type DragEndEvent } from '@dnd-kit/core'
import styles from 'styles/App.module.css'

// Modules & components:
import { useState } from 'react'
import { DndContext } from '@dnd-kit/core'
import sortTasks from 'utils/sortTasks'
import Column from 'components/Column'

const columns = COLUMNS as types.Column[]

export default function Board() {
  const [tasks, setTasks] = useState<types.Task[]>(TASKS)

  function handleDragEnd(event: DragEndEvent) {
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
          {columns.map(column => (
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