import $ from 'styles/DeleteTaskDialog.module.css'
import { type Props as TaskProps } from 'components/Task'
import Modal, { type Props as ModalProps } from 'layouts/Modal'
import getBoardData from 'utils/getBoardData'

type SomeModalProps = Pick<ModalProps, 'open' | 'onClose'>

interface Props extends SomeModalProps, TaskProps {}

export default function DeleteTaskDialog({ task, open, onClose }: Props) {
  const handleConfirm = () => {
    const { TASKS } = getBoardData()
    const taskIndex = TASKS.findIndex(
      prevTask => prevTask.id === task.id
    )

    TASKS.splice(taskIndex, 1)
    localStorage.setItem('tasks', JSON.stringify(TASKS))
    
    window.location.reload()
    onClose()
  }

  return (
    <Modal name="Excluir cartão" open={open} onClose={onClose}>
      <div className={$.content_wrapper}>
        <h1 className={$.title}>
          Tem certeza que deseja excluir o cartão?
        </h1>
        <ul className={$.warning_list}>
          <li>
            Você está prestes a excluir o cartão “{task.title}” fora da lixeira.
          </li>
          <li className={$.strong_warning}>
            Essa ação é permanente e, portanto, irreversível.
          </li>
        </ul>
        <div className={$.btn_group}>
          <button onClick={handleConfirm}>
            Excluir
          </button>
          <button onClick={onClose}>
            Cancelar
          </button>
        </div>
      </div>
    </Modal>
  )
}