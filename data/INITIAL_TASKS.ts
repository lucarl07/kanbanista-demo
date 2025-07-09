/** Why not JSON?
 * Answer: I found it would be a hassle to do the proper conversions from JSON to 
 * TypeScript, especially considering I'd have to import the Node.js "fs" module
 * for asynchronous operations w/ "readFile" just to not depend on Node experimental
 * features.
 */

import type { Task, DataActionTypes } from '../src/types'

const tasks: Task[] = [
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

export function updateTasks(action: DataActionTypes, task: Task) {
  const taskIndex = tasks.findIndex(x => x.id === task.id)

  switch (action) {
    case 'POST':
      tasks.push(task)
      break;
    case 'DELETE':
      tasks.splice(taskIndex, 1)
      console.log('Apagado!', tasks)
      break;
    case 'PUT':
      window.alert('(T.B.D.)')
      break;
    default:
      console.error('Invalid action given.')
      break;
  }
}

export default tasks