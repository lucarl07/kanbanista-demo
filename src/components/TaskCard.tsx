import * as types from 'utils/types'
import styles from 'styles/TaskCard.module.css'
import { useDraggable } from '@dnd-kit/core'

interface TaskCardProps {
  task: types.Task
}

const TaskCard = ({ task }: TaskCardProps) => {
  const { attributes, listeners, setNodeRef, transform }
    = useDraggable({ id: task.id });

  const style = transform ? {
    transform: `translate(${transform.x}px, ${transform.y}px)`
  } : undefined;

  return (
    <div 
      {...listeners} {...attributes} 
      ref={setNodeRef} style={style} className={styles.card}>
        {task.title}
    </div>
  )
}

export default TaskCard