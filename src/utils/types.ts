export type Column = {
  id: number
  name: string
}

export type Task = {
  id: number
  title: string
  description?: string
  priority: 'Low' | 'Medium' | 'High'
  dueDate?: Date
  columnId: number
}