import { useReducer } from 'react'

interface OptionsState {
  isEditTaskOpen: boolean
  isArchiveTaskOpen: boolean
  isDeleteTaskOpen: boolean
}

type ReducerAction = [
  type: 'editTask' | 'archiveTask' | 'deleteTask', 
  value?: boolean
]

type Output = [
  state: OptionsState, 
  dispatch: React.ActionDispatch<[action: ReducerAction]>
]

export default function useContextMenuOptions(): Output {
  const initialOptionsState: OptionsState = {
    isEditTaskOpen: false,
    isArchiveTaskOpen: false,
    isDeleteTaskOpen: false
  }

  const reducer = (
    state: OptionsState, 
    action: ReducerAction
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

  return useReducer(reducer, initialOptionsState)
}