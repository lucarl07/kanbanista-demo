// Data:
import getBoardData from 'utils/getBoardData'
const { COLUMNS } = getBoardData()

// Types:
import * as types from 'src/types'
import { type Props as ModalProps } from 'layouts/Modal'
import { type Props as TaskProps } from 'components/Task'

// Other imports:
import toPTBRLocale from 'utils/toPTBRLocale'
import Modal from 'src/layouts/Modal'
import styles from 'styles/TaskView.module.css'

type SomeModalProps = Omit<ModalProps, 'name' | 'children'>
interface Props extends SomeModalProps, TaskProps {}

const columns = COLUMNS as types.Column[]
const priorities: types.TaskPriority[] = ['Low', 'Medium', 'High']

export default function TaskView({ task, open, onClose }: Props) {
  const createdAtTime = toPTBRLocale(task.createdAt, 'time')
  const createdAtDate = toPTBRLocale(task.createdAt, 'date')
  
  return (
    <Modal name="Visualizar cartão" open={open} onClose={onClose}>
      <h1>{task.title}</h1>
      <p>
        Cartão criado às <strong>{createdAtTime}</strong> em <strong>{createdAtDate}</strong>
      </p>
      <div className={styles.info}>
        <dl className={styles.info_dl}>
          <div>
            <dt>Data de conclusão</dt>
            <dt>Lista atual</dt>
            <dt>Prioridade</dt>
          </div>
          <div>
            <dd>{task?.dueDate?.toLocaleDateString() || 'Sem prazo'}</dd>
            <dd>
              <select 
                name="selColumn" id="col-select"
                defaultValue={columns.find(col => col.id === task.columnId)?.id}>
                  {columns.map((col) => (
                    <option key={col.id} value={col.id}>
                      {col.name}
                    </option>
                  ))}
              </select>
            </dd>
            <dd>
              <select 
                name="selPriority" id="prt-select"
                defaultValue={priorities.findIndex(prt => prt === task.priority)}>
                  <option value="0">Baixa</option>
                  <option value="1">Média</option>
                  <option value="2">Alta</option>
              </select>
            </dd>
          </div>
        </dl>
        <dl className={styles.desc_dl}>
          <dt>Descrição</dt>
          <dd>{task.description}</dd>
        </dl>
      </div>
    </Modal>
  )
}
