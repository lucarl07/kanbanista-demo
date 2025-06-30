import * as types from 'src/types'
import styles from 'styles/Column.module.css'

import CreateTask from 'layouts/modals/CreateTask'
import Task from 'components/Task'
import { useDroppable } from '@dnd-kit/core'
import { useState } from 'react'

interface ColumnProps {
  column: types.Column
  tasks: types.Task[]
}

function onCheckOptions(): void {
  console.log('Ver mais opções')
}

function Column({ column, tasks }: ColumnProps) {
  const { setNodeRef } = useDroppable({ id: column.id })
  
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  return (
    <>
      <CreateTask column={column} open={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <section className={styles.column}>
        <header>
          <h1>{column.name}</h1>
          <div className={styles.button_wrapper}>
            <button onClick={() => setIsModalOpen(true)}>+</button>
            <button onClick={() => onCheckOptions()}>…</button>
          </div>
        </header>
        <hr />
        <div 
          ref={setNodeRef}
          className={styles.task_list_wrapper}>  
            <div className={styles.task_list}>
              {tasks.map(task => (
                <Task key={task.id} task={task}/>
              ))}
            </div>
            <button onClick={() => setIsModalOpen(true)}>
              + Adicionar cartão
            </button>
        </div>
      </section>
    </>
  )
}

export default Column