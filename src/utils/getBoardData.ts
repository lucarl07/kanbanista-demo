import type { Task, Column } from 'src/types'

type Output = {
  COLUMNS: Column[];
  TASKS: Task[];
}

type TaskProperties = Task[keyof Task]

function taskReviver(key: string, value: TaskProperties) {
  // Transform date-string properties back to Date:
  if (value && ['dueDate', 'createdAt'].includes(key)) {
    return new Date(value)
  }
  return value;
}

export default function getBoardData(): Output {
  const COLUMNS = JSON.parse(
    localStorage.getItem('columns')!
  ) as Column[]
  
  const TASKS = JSON.parse(
    localStorage.getItem('tasks') || '[]',
    taskReviver
  ) as Task[]
  
  return { COLUMNS, TASKS };
}