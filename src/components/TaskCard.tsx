import * as types from 'utils/types'
import styles from 'styles/TaskCard.module.css'

import { useDraggable } from '@dnd-kit/core'
import imgTaskDescription from 'assets/images/task_description.png'

interface TaskCardProps {
  task: types.Task
}

const TaskCard = ({ task }: TaskCardProps) => {
  const { attributes, listeners, setNodeRef, transform }
    = useDraggable({ id: task.id });

  const style = transform ? {
    transform: `translate(${transform.x}px, ${transform.y}px)`
  } : undefined;

  const taskPriority = task.priority === 'High' ? 'Alta' : (
    task.priority === 'Medium' ? 'Média' : 'Baixa'
  )

  return (
    <article 
      {...listeners} {...attributes} 
      ref={setNodeRef} style={style} className={styles.card}>
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
          {/* <div className={styles.rightArea}> */}
          <span className={styles.dueDate}>
            {task.dueDate?.toDateString() || 'S/P'}
          </span>
          {/* </div> */}
        </div>
    </article>
  )
}

export default TaskCard