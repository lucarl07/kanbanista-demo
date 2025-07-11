import * as types from 'src/types'
import getBoardData from 'utils/getBoardData'

type WithRequired<T, K extends keyof T> = T & { [P in K]-?: T[P] }

type RequiredTask = WithRequired<types.TaskDraft, 'title' | 'priority' | 'columnId'>

const { COLUMNS, TASKS } = getBoardData()

export default function addTask(task: types.TaskDraft): boolean {
  const priorities: types.TaskPriority[] = ['Low', 'Medium', 'High']

  if (!task.title || task.title.length <= 0) {
    console.error('No title present.')
    return false
  }

  if (!task.priority || !priorities.includes(task.priority)) {
    console.error(`Invalid priority "${task.priority}"`)
    return false
  }

  if (
    !task.columnId || 
    COLUMNS.some(column => column.id === task.columnId) === false
  ) {
    console.error('No title present.')
    return false
  }

  let trimmedDescription = task.description?.trim()
  
  if (
    trimmedDescription &&
    trimmedDescription.length === 0
  ) {
    trimmedDescription = undefined
  }

  const finalDraft: types.Task = {
    id: crypto.randomUUID(),
    ...task as RequiredTask,
    description: trimmedDescription,
    createdAt: new Date()
  }

  TASKS.push(finalDraft)
  localStorage.setItem('tasks', JSON.stringify(TASKS))

  return true
}