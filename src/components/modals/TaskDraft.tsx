// Types & styles:
import * as types from 'src/types'
import styles from 'styles/TaskDraft.module.css'

// Other imports:
import getBoardData from 'utils/getBoardData'
import updateTask from 'utils/updateTask'
import useDraftReducer from 'src/hooks/useDraftReducer'
import Modal, { type Props as ModalProps } from 'layouts/Modal'

type SomeModalProps = Omit<ModalProps, 'name' | 'children'>
interface Props extends SomeModalProps {
  column: types.Column,
  defaults?: types.Task
}

export default function TaskDraft({ column, open, onClose, defaults }: Props) {
  const { COLUMNS } = getBoardData()
  const [formState, updateForm] = useDraftReducer(column.id, defaults)
  
  const dueDateToString = formState.dueDate?.toISOString().split('.')[0]

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    let success: boolean
    
    if (!defaults) {
      success = updateTask(formState, 'create')
    } else {
      success = updateTask(formState, 'edit', defaults.id)
    }
    
    if (success) {
      window.location.reload()
      onClose()
    }
  }

  return (
    <Modal 
      open={open} onClose={onClose}
      name={defaults ? 'Editar cartão' : 'Criar cartão'}>
        <form method="post" onSubmit={handleSubmit} className={styles.form}>
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
              name="priority" id="sel-priority" 
              defaultValue={defaults?.priority || "0"}
              onChange={(e) => updateForm({ priority: e.target.value as types.TaskPriority })}>
                <option value="0" disabled>Escolha uma opção...</option>
                <option value="Low">Baixa</option>
                <option value="Medium">Média</option>
                <option value="High">Alta</option>
            </select>
            <input 
              value={dueDateToString}
              type="datetime-local" 
              name="dueDate" 
              id="in-due-date"
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
              name="column" id="sel-column" 
              defaultValue={column.id}
              onChange={(e) => updateForm({ columnId: Number(e.target.value) })}>
              {COLUMNS.map(column => (
                <option key={column.id} value={column.id}>
                  {column.name}
                </option>
              ))}
            </select>
            <button type="submit" className={styles.btn_submit}>
              {defaults ? 'Salvar alterações' : 'Criar cartão'}
            </button>
            <button type="reset" className={styles.btn_clear}>
              Limpar tudo
            </button>
          </div>
        </form>
    </Modal>
  )
}
