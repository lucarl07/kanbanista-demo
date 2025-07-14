import { useReducer } from 'react'
import type { 
  ContextMenuReducerAction as ReducerAction 
} from 'src/types'

interface OptionsState {
  isViewTaskOpen: boolean
  isEditTaskOpen: boolean
  isArchiveTaskOpen: boolean
  isDeleteTaskOpen: boolean
}

type Output = [
  state: OptionsState, 
  dispatch: React.ActionDispatch<[action: ReducerAction]>
]

export default function useContextMenuOptions(): Output {
  const initialOptionsState: OptionsState = {
    isViewTaskOpen: false,
    isEditTaskOpen: false,
    isArchiveTaskOpen: false,
    isDeleteTaskOpen: false
  }

  const reducer = (state: OptionsState, action: ReducerAction): OptionsState => {
    if (action[1] === undefined) {
      console.error('Second value necessary in tuple parameter.')
      return state;
    }

    switch (action[0]) {
      case 'viewTask':
        return { ...state, isViewTaskOpen: action[1] }
      case 'editTask':
        return { ...state, isEditTaskOpen: action[1] }
      case 'archiveTask':
        window.alert('(T.B.D)')
        break;
      case 'viewTask':
        console.log(`Chegou até a função reducer!`)
        return { ...state, isViewTaskOpen: action[1] }
      case 'deleteTask':
        return { ...state, isDeleteTaskOpen: action[1] }
      default:
        console.error(`Invalid action "${action[0]}".`)
        break;
    }
    return state;
  }

  return useReducer(reducer, initialOptionsState)
}