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
      {/* About alternating refs: 
      * For UX reasons, if there's currently not any card on a list,
      * dnd-kit's nodeRef will be set to the .task_list_wrapper div.
      */}
      <div 
        ref={tasks.length <= 0 ? setNodeRef : undefined}
        className={styles.task_list_wrapper}>  
          <div 
            ref={tasks.length > 0 ? setNodeRef : undefined} 
            className={styles.task_list}>
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