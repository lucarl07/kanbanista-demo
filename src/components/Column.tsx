import { type ReactNode } from 'react'
import styles from 'styles/Column.module.css'

interface ColumnProps {
  title: string
  onAddCard?: () => void
  onToggleOptions?: () => void
  children: ReactNode
}

const Column = ({ title, onAddCard, onToggleOptions, children }: ColumnProps) => {
  return (
    <section className={styles.column}>
      <header>
        <h1>{title}</h1>
        <div className={styles.button_wrapper}>
          <button onClick={onAddCard}>+</button>
          <button onClick={onToggleOptions}>…</button>
        </div>
      </header>
      <hr />
      <div className={styles.list}>  
        <ol>
          {children}
        </ol>
        <button onClick={onAddCard}>+ Adicionar cartão</button>
      </div>
    </section>
  )
}

export default Column