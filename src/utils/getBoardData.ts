import type { Task, Column } from 'src/types'

type Output = {
  COLUMNS: Column[];
  TASKS: Task[];
}

export default function getBoardData(): Output {
  const COLUMNS = JSON.parse(
    localStorage.getItem('columns')!
  ) as Column[]
  
  const TASKS = JSON.parse(
    localStorage.getItem('tasks') || '[]'
  ) as Task[]
  
  // Transform Task dates because of JSON parsing
  TASKS.forEach(task => {
    if (task['dueDate']) {
      task['dueDate'] = new Date(task['dueDate'])
    }
    task['createdAt'] = new Date(task['createdAt'])
  })

  return { COLUMNS, TASKS };
}