import type { Column /*, Task*/ } from '../src/types'

export const INITIAL_COLUMNS: Column[] = [
  { id: 1, name: 'A fazer' },
  { id: 2, name: 'Em andamento' },
  { id: 3, name: 'Concluído' },
]

localStorage.setItem(
  'columns',
  JSON.stringify(INITIAL_COLUMNS)
)

/* Former initial tasks:
const INITIAL_TASKS: Task[] = [
  {
    id: crypto.randomUUID(),
    title: 'Discutir campanha com a equipe de vendas',
    description: 'Lorem ipsum dolor sit...',
    priority: 'Low',
    dueDate: new Date(2025, 8, 30),
    columnId: 2,
    createdAt: new Date(2024, 9, 13)
  },
  {
    id: crypto.randomUUID(),
    title: 'A quesito de curiosidade, você sabe até quantos caracteres é possível colocar num título aqui?',
    description: 'Lorem ipsum dolor sit...',
    priority: 'High',
    dueDate: new Date(2026, 2, 28),
    columnId: 3,
    createdAt: new Date(2024, 9, 13)
  },
  {
    id: crypto.randomUUID(),
    title: 'Não muitos...',
    priority: 'High',
    columnId: 3,
    createdAt: new Date(2024, 9, 13)
  },
  {
    id: crypto.randomUUID(),
    title: 'Ir à exposição póstuma de Piet Mondrian',
    description: 'Lorem ipsum dolor sit...',
    priority: 'Medium',
    dueDate: new Date(new Date().setHours(14, 30)),
    columnId: 3,
    createdAt: new Date(2024, 9, 13)
  },
  {
    id: crypto.randomUUID(),
    title: 'Levar o Billy ao banho e tosa',
    priority: 'Low',
    dueDate: new Date(2025, 6, 22),
    columnId: 3,
    createdAt: new Date(2024, 9, 13)
  },
]
*/