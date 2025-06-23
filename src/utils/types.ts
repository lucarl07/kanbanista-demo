export type UUID = `${string}-${string}-${string}-${string}-${string}`

export type Column = {
  id: number // Will probably implement a way to retrofit UUIDs here on official releases.
  name: string
}

export type Task = {
  id: UUID
  title: string
  description?: string
  priority: 'Low' | 'Medium' | 'High'
  dueDate?: Date
  columnId: number
}