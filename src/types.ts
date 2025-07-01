export type TaskPriority = 'Low' | 'Medium' | 'High'
export type PortugueseTaskPriority = 'Baixa' | 'Média' | 'Alta'

export type UUID = `${string}-${string}-${string}-${string}-${string}`

export type Column = {
  id: number // Will probably implement a way to retrofit UUIDs here on official releases.
  name: string
}

export type Task = {
  id: UUID
  title: string
  description?: string
  priority: TaskPriority
  dueDate?: Date
  columnId: number
  createdAt: Date
}
export type NewTask = Omit<Task, 'id' | 'createdAt'>
export type TaskDraft = Partial<NewTask>

export type DataActionTypes = 'POST' | 'PUT' | 'DELETE'