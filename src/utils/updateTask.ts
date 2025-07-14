import * as types from 'src/types'
import getBoardData from 'utils/getBoardData'

type WithRequired<T, K extends keyof T> = T & { [P in K]-?: T[P] }

type RequiredTask = WithRequired<types.TaskDraft, 'title' | 'priority' | 'columnId'>

const { COLUMNS, TASKS } = getBoardData()

function createNewTask(draft: types.TaskDraft) {
  const finalDraft: types.Task = {
    id: crypto.randomUUID(),
    ...draft as RequiredTask,
    createdAt: new Date()
  }

  TASKS.push(finalDraft)
  localStorage.setItem('tasks', JSON.stringify(TASKS))
}

function editTask(draft: types.TaskDraft, taskId: types.UUID) {
  const task = TASKS.find(task => task.id === taskId)!
  const finalDraft: types.Task = { ...task, ...draft } 
  const updatedTASKS = TASKS.filter(task => task.id !== taskId)

  updatedTASKS.push(finalDraft)
  localStorage.setItem('tasks', JSON.stringify(updatedTASKS))
}

export default function addTask(
  draft: types.TaskDraft, 
  action: 'create' | 'edit',
  taskId?: types.UUID
): boolean {
  const priorities: types.TaskPriority[] = ['Low', 'Medium', 'High']

  // Validations:
  if (!draft.title || draft.title.length <= 0) {
    console.error('No title present.')
    return false
  }
  if (!draft.priority || !priorities.includes(draft.priority)) {
    console.error(`Invalid priority "${draft.priority}"`)
    return false
  }
  if (
    !draft.columnId || 
    COLUMNS.some(column => column.id === draft.columnId) === false
  ) {
    console.error('No title present.')
    return false
  }

  // Parsing:
  const trimmedDescription = draft.description?.trim()
  if (
    trimmedDescription &&
    trimmedDescription.length === 0
  ) {
    draft['description'] = undefined
  } else {
    draft['description'] = trimmedDescription
  }

  // Submission:
  switch (action) {
    case 'create': 
      createNewTask(draft)
      return true
    case 'edit': 
      if (!taskId) return false
      editTask(draft, taskId)
      return true
    default:
      console.error('Unexpected addTask() action parameter.')
      return false
  }
}