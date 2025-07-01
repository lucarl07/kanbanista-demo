import COLUMNS from 'data/COLUMNS.ts'

import * as types from 'src/types'
import { useReducer } from 'react'
import Modal, { type ModalProps } from 'components/Modal'
import styles from 'styles/CreateTask.module.css'

interface CreateTaskProps 
extends Omit<ModalProps, 'name' | 'children'> {
  column: types.Column
}

const columns = COLUMNS as types.Column[]

export default function CreateTask({ column, open, onClose }: CreateTaskProps) {
  const initialState: types.TaskDraft = {
    title: '',
    description: '',
    priority: undefined,
    dueDate: new Date(),
    columnId: column.id
  }

  const formReducer = (prev: types.TaskDraft, next: types.TaskDraft) => {
    return { ...prev, ...next }
  }

  const [formState, updateForm] = useReducer(formReducer, initialState)

  return (
    <Modal open={open} onClose={onClose}>
      <form action="/" method="post" className={styles.form}>
        <input 
          type="text" name="title" 
          value={formState.title}
          placeholder="Digite o nome do cartão..."
          className={styles.task_title}
          onChange={(e) => updateForm({ title: e.target.value })} />
        <div className={styles.grid_A}>
          <label htmlFor="sel-priority">Prioridade:</label>
          <label htmlFor="in-due-date">Data de conclusão:</label>
          <select 
            name="priority" id="sel-priority" defaultValue="0"
            onChange={(e) => updateForm({ priority: e.target.value as types.TaskPriority })}>
              <option value="0">Escolha uma opção...</option>
              <option value="Low">Baixa</option>
              <option value="Medium">Média</option>
              <option value="High">Alta</option>
          </select>
          <input 
            type="datetime-local" name="dueDate" id="in-due-date"
            // T.B.D: Assign value to input (with proper conversion)
            onChange={(e) => updateForm({ dueDate: new Date(e.target.value) })} />
        </div>
        <div className={styles.txt_description_wrapper}>
          <label htmlFor="txt-description">Descrição:</label>
          <textarea 
            value={formState.description}
            name="description" id="txt-description" 
            placeholder="Comece a escrever sobre a tarefa..."
            onChange={(e) => updateForm({ description: e.target.value })} />
        </div>
        <div className={styles.grid_B}>
          <label htmlFor="sel-column">Lista:</label>
          <select 
            name="column" id="sel-column" defaultValue={column.id}
            onChange={(e) => updateForm({ columnId: Number(e.target.value) })}>
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
