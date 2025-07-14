// Styles & types:
import styles from 'styles/ContextMenu.module.css'
import * as types from 'src/types'

// Modules:
import { useRef } from 'react'
import useClickOutside from 'hooks/useClickOutside'
import useContextMenuOptions from 'hooks/useContextMenuOptions'

// Option modals & dialogs:
import TaskView from 'components/modals/TaskView'
import DeleteTaskDialog from 'components/modals/DeleteTaskDialog'

interface Props {
  x: number
  y: number
  task: types.Task
  onClose: () => void
}

type ReducerAction = types.ContextMenuReducerAction

export default function ContextMenu({ x, y, task, onClose }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [state, dispatch] = useContextMenuOptions()

  useClickOutside(ref, () => {
    const stateValues: boolean[] = Object.values(state)

    if (stateValues.every(val => val === false)) {
      /* When there is not any option currently open,
      closes the menu when clicking anything outside: */
      onClose() 
    }
  })

  const handleCloseModal = (
    actionType: ReducerAction[0]
  ) => {
    dispatch([actionType, false])
    onClose()
  }

  const relativeStyle: React.CSSProperties = {
    top: `${y}px`,
    left: `${x}px`,
  }

  return (
    <>
      {/* Option modals: */}
      <TaskView 
        task={task} open={state.isViewTaskOpen} 
        onClose={() => handleCloseModal('viewTask')} />

      <DeleteTaskDialog 
        task={task} open={state.isDeleteTaskOpen} 
        onClose={() => handleCloseModal('deleteTask')} />

      {/* Component: */}
      <div 
        ref={ref} style={relativeStyle} 
        className={styles.context_menu}>
          <ul className={styles.options}>
            <li onClick={() => dispatch(['viewTask', true])}>
              🎫 Abrir cartão
            </li>
            <hr className={styles.separator} />
            <li onClick={() => dispatch(['deleteTask', true])}>
              🗑️ Excluir cartão
            </li>
          </ul>
      </div>
    </>
  )
}