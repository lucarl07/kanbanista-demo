import * as types from 'src/types'
import COLUMNS from 'data/COLUMNS'
import { updateTasks } from 'data/INITIAL_TASKS'

type WithRequired<T, K extends keyof T> = T & { [P in K]-?: T[P] }

type RequiredTask = WithRequired<types.TaskDraft, 'title' | 'priority' | 'columnId'>

const columns = COLUMNS as types.Column[]

export default function addTask(task: types.TaskDraft): void {
  const priorities: types.TaskPriority[] = ['Low', 'Medium', 'High']

  if (!task.title || task.title.length <= 0) {
    console.error('No title present.')
    return;
  }

  if (!task.priority || !priorities.includes(task.priority)) {
    console.error(`Invalid priority "${task.priority}"`)
    return;
  }

  if (
    !task.columnId || 
    columns.some(column => column.id === task.columnId) === false
  ) {
    console.error('No title present.')
    return;
  }

  const finalDraft: types.Task = {
    id: crypto.randomUUID(),
    ...task as RequiredTask,
    createdAt: new Date()
  }

  updateTasks('POST', finalDraft)
}