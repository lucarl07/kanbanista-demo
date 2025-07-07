import { useReducer } from 'react'
import type { TaskDraft, Task } from 'src/types'

type Output = [
  state: TaskDraft,
  dispatch: React.ActionDispatch<[next: TaskDraft]>
]

export default function useDraftReducer(
  columnId: Task['columnId'], 
  defState?: TaskDraft
): Output {
  const initialState: TaskDraft = defState || {
    title: '',
    description: '',
    priority: undefined,
    dueDate: undefined,
    columnId: columnId
  }

  const reducer = (prev: TaskDraft, next: TaskDraft) => {
    return { ...prev, ...next }
  }

  return useReducer(reducer, initialState)
}