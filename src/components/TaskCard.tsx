import * as types from 'utils/types'
import styles from 'styles/TaskCard.module.css'

interface TaskCardProps {
  task: types.Task
}

const TaskCard = ({ task }: TaskCardProps) => {
  return (
    <div className={styles.card}>
      {task.title}
    </div>
  )
}

export default TaskCard