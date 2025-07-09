// Styles & types:
import styles from 'styles/ContextMenu.module.css'
import * as types from 'src/types'

// Modules:
import { useRef, useReducer, type CSSProperties } from 'react'
import useOnOutsideClick from 'hooks/useOnOutsideClick'

// Option modals & dialogs:
import DelTask from 'components/modals/DeleteTaskDialog'

interface Props {
  x: number
  y: number
  task: types.Task
  onClose: () => void
}
interface OptionsState {
  isEditTaskOpen: boolean
  isArchiveTaskOpen: boolean
  isDeleteTaskOpen: boolean
}

const initialOptionsState: OptionsState = {
  isEditTaskOpen: false,
  isArchiveTaskOpen: false,
  isDeleteTaskOpen: false
}
const reducer = (
  state: OptionsState, action: [string, boolean?]
): OptionsState => {
  switch (action[0]) {
    case 'editTask': 
    case 'archiveTask':
      window.alert('(T.B.D)')
      break;
    case 'deleteTask':
      if (action[1] === undefined) {
        console.error('Second value necessary in tuple argument when action[0] == "deleteTask".')
        break;
      }
      return { ...state, isDeleteTaskOpen: action[1] }
    default:
      console.error(`Invalid action "${action[0]}".`)
      break;
  }
  return state;
}

export default function ContextMenu({ x, y, task, onClose }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  useOnOutsideClick(ref, onClose) // Closes the menu when clicking anything outside

  const [state, dispatch] = useReducer(reducer, initialOptionsState)

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