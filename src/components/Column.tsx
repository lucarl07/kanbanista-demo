import * as types from 'utils/types'
import styles from 'styles/Column.module.css'

interface ColumnProps {
  column: types.Column
  tasks: types.Task[]
}

const Column = ({ column, tasks }: ColumnProps) => {
  return (
    <section className={styles.column}>
      <header>
        <h1>{column.name}</h1>
        <div className={styles.button_wrapper}>
          <button onClick={() => console.log('Adicionar cartão')}>+</button>
          <button onClick={() => console.log('Mais opções')}>…</button>
        </div>
      </header>
      <hr />
      <div className={styles.task_list_wrapper}>  
        <div className={styles.task_list}>
          {/* T.B.D */}
        </div>
        <button onClick={() => console.log('Adicionar cartão')}>+ Adicionar cartão</button>
      </div>
    </section>
  )
}

export default Column