import * as types from 'utils/types'
import styles from 'styles/Column.module.css'
import TaskCard from 'components/TaskCard'
import { useDroppable } from '@dnd-kit/core'

interface ColumnProps {
  column: types.Column
  tasks: types.Task[]
}

const Column = ({ column, tasks }: ColumnProps) => {
  const { setNodeRef } = useDroppable({ id: column.id })

  return (
    <section className={styles.column}>
      <header>
        <h1>{column.name}</h1>
        <div className={styles.button_wrapper}>
          {/* All console logs are placeholders for callback functions */}
          <button onClick={() => console.log('Adicionar cartão')}>+</button>
          <button onClick={() => console.log('Mais opções')}>…</button>
        </div>
      </header>
      <hr />
      <div 
        ref={setNodeRef}
        className={styles.task_list_wrapper}>  
          <div className={styles.task_list}>
            {tasks.map(task => (
              <TaskCard key={task.id} task={task}/>
            ))}
          </div>
          <button onClick={() => console.log('Adicionar cartão')}>
            + Adicionar cartão
          </button>
      </div>
    </section>
  )
}

export default Column