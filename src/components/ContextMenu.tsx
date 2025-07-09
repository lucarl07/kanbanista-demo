// Styles & types:
import styles from 'styles/ContextMenu.module.css'
import * as types from 'src/types'

// Modules:
import { useRef, type CSSProperties } from 'react'
import useClickOutside from 'hooks/useClickOutside'
import useContextMenuOptions from 'hooks/useContextMenuOptions'

// Option modals & dialogs:
import DelTask from 'components/modals/DeleteTaskDialog'

interface Props {
  x: number
  y: number
  task: types.Task
  onClose: () => void
}

export default function ContextMenu({ x, y, task, onClose }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [state, dispatch] = useContextMenuOptions()

  useClickOutside(ref, () => {
    const stateValues: boolean[] = Object.values(state)

    if (stateValues.every(val => val === false)) {
      // When there is not any option currently open,
      // closes the menu when clicking anything outside:
      onClose() 
    }
  })

  const relativeStyle: CSSProperties = {
    top: `${y}px`,
    left: `${x}px`,
  }

  return (
    <>
      {/* Option modals & dialogs: */}
      <DelTask 
        task={task} open={state.isDeleteTaskOpen} 
        onClose={() => dispatch(['deleteTask', false])} />

      {/* Component: */}
      <div 
        ref={ref} style={relativeStyle} 
        className={styles.context_menu}>
          Opções (T.B.D.)
          <hr className={styles.separator} />
          <ul className={styles.options}>
            <li onClick={() => dispatch(['deleteTask', true])}>
              🗑 Excluir cartão
            </li>
          </ul>
      </div>
    </>
  )
}