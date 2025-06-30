import COLUMNS from 'data/COLUMNS.ts'

import * as types from 'src/types'
import { useReducer } from 'react'
import Modal, { type ModalProps } from 'components/Modal'
import styles from 'styles/CreateTask.module.css'

interface CreateTaskProps 
extends Omit<ModalProps, 'name' | 'children'> {
  column: types.Column
}

function reducer(state, action) {
  /** T.B.D: Form reducer logic **/
  return 0
}

const columns = COLUMNS as types.Column[]

export default function CreateTask({ column, open, onClose }: CreateTaskProps) {
  const [formState, updateForm] = useReducer(reducer, 0) /** T.B.D: Assign <form> fields to formState **/

  return (
    <Modal open={open} onClose={onClose}>
      <form action="/" method="post" className={styles.form}>
        <input 
          type="text" name="title" 
          placeholder="Digite o nome do cartão..."
          className={styles.task_title} />
        <div className={styles.grid_A}>
          <label htmlFor="sel-priority">Prioridade:</label>
          <label htmlFor="in-due-date">Data de conclusão:</label>
          <select name="priority" id="sel-priority">
            <option value="">Escolha uma opção...</option>
            <option value="Low">Baixa</option>
            <option value="Medium">Média</option>
            <option value="High">Alta</option>
          </select>
          <input type="datetime-local" name="dueDate" id="in-due-date" />
        </div>
        <div className={styles.txt_description_wrapper}>
          <label htmlFor="txt-description">Descrição:</label>
          <textarea 
            name="description" id="txt-description" 
            placeholder="Comece a escrever sobre a tarefa..." />
        </div>
        <div className={styles.grid_B}>
          <label htmlFor="sel-column">Lista:</label>
          <select name="column" id="sel-column" defaultValue={column.id}>
            {columns.map(column => (
              <option key={column.id} value={column.id}>
                {column.name}
              </option>
            ))}
          </select>
          <button type="submit" className={styles.btn_submit}>
            Criar cartão
          </button>
          <button type="reset" className={styles.btn_clear}>
            Limpar tudo
          </button>
        </div>
      </form>
    </Modal>
  )
}
