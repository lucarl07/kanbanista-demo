// Types & styles:
import * as types from 'utils/types'
import { type DragEndEvent } from '@dnd-kit/core'
import styles from 'styles/App.module.css'

// Modules & components:
import { useState } from 'react'
import { DndContext } from '@dnd-kit/core'
import Column from './components/Column'

const COLUMNS: types.Column[] = [
  { id: 1, name: 'A fazer' },
  { id: 2, name: 'Em andamento' },
  { id: 3, name: 'Concluído' },
]

const INITIAL_TASKS: types.Task[] = [
  {
    id: 1,
    title: 'Discutir campanha com a equipe de vendas',
    description: 'Lorem ipsum dolor sit...',
    priority: 'Low',
    dueDate: new Date(2025, 8, 30),
    columnId: 2
  },
  {
    id: 2,
    title: 'A quesito de curiosidade, você sabe até quantos caracteres é possível colocar num título aqui?',
    description: 'Lorem ipsum dolor sit...',
    priority: 'High',
    dueDate: new Date(2026, 2, 28),
    columnId: 3
  },
  {
    id: 3,
    title: 'Não muitos...',
    priority: 'High',
    columnId: 3
  },
  {
    id: 4,
    title: 'Ir à exposição póstuma de Piet Mondrian',
    description: 'Lorem ipsum dolor sit...',
    priority: 'Medium',
    dueDate: new Date(new Date().setHours(14, 30)),
    columnId: 3
  },
  {
    id: 5,
    title: 'Levar o Billy ao banho e tosa',
    priority: 'Low',
    dueDate: new Date(2025, 6, 22),
    columnId: 3
  },
]

export default function App() {
  const [tasks, setTasks] = useState<types.Task[]>(INITIAL_TASKS)

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event

    if (!over) return;

    const taskId = active.id as number
    const newColumnId = over.id as types.Task['columnId']

    setTasks(() => tasks.map(task => task.id === taskId ? {
      ...task, columnId: newColumnId
    } : task))
  }

  return (
    <main className={styles.main}>
      <div className={styles.columns}>
        <DndContext onDragEnd={handleDragEnd}>
          {COLUMNS.map(column => (
            <Column 
              key={column.id} 
              column={column} 
              tasks={tasks.filter(task => task.columnId === column.id)}
            />
          ))}
        </DndContext>
      </div>
    </main>
  )
}