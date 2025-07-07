import * as types from 'src/types'
import styles from 'styles/TaskCard.module.css'

import { useState } from 'react'
import { useDraggable } from '@dnd-kit/core'
import TaskView from 'layouts/modals/TaskView'
import imgTaskDescription from 'assets/images/task_description.png'

export interface TaskProps {
  task: types.Task
}

const Task = ({ task }: TaskProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const { attributes, listeners, setNodeRef, transform }
    = useDraggable({ id: task.id });

  const style = transform ? {
    transform: `translate(${transform.x}px, ${transform.y}px)`
  } : undefined;

  const taskPriority = task.priority === 'High' ? 'Alta' : (
    task.priority === 'Medium' ? 'Média' : 'Baixa'
  )

  const handleMouseUp = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (e.button === 0) {
      setIsOpen(true)
    }
  }
  const handleContextMenu = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault()
  }

  return (
    <>
      <TaskView task={task} open={isOpen} onClose={() => setIsOpen(false)} />
      <article 
        {...listeners} {...attributes} ref={setNodeRef}
        onMouseUp={handleMouseUp}
        style={style} className={styles.card}>
          <span className={styles.title}>
            {task.title}
          </span>
          <div className={styles.info}>
            <div className={styles.leftArea}>
              <div className={styles.label}>
                {taskPriority}
              </div>
              {task.description?.length && (
                <img src={imgTaskDescription} alt="O cartão tem descrição" />
              )}
            </div>
            <span className={styles.dueDate}>
              {task.dueDate?.toDateString() || 'S/P'}
            </span>
          </div>
      </article>
    </>
  )
}

export default Task