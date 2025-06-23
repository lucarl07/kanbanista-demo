/** Why not JSON?
 * Answer: I found it would be a hassle to do the proper conversions from JSON to 
 * TypeScript, especially considering I'd have to import the Node.js "fs" module
 * for asynchronous operations w/ "readFile" just to not depend on Node experimental
 * features.
 */

export default [
  {
    id: 1,
    title: 'Discutir campanha com a equipe de vendas',
    description: 'Lorem ipsum dolor sit...',
    priority: 'Low',
    dueDate: new Date(2025, 8, 30),
    columnId: 2
  },
  {
    id: 2,
    title: 'A quesito de curiosidade, você sabe até quantos caracteres é possível colocar num título aqui?',
    description: 'Lorem ipsum dolor sit...',
    priority: 'High',
    dueDate: new Date(2026, 2, 28),
    columnId: 3
  },
  {
    id: 3,
    title: 'Não muitos...',
    priority: 'High',
    columnId: 3
  },
  {
    id: 4,
    title: 'Ir à exposição póstuma de Piet Mondrian',
    description: 'Lorem ipsum dolor sit...',
    priority: 'Medium',
    dueDate: new Date(new Date().setHours(14, 30)),
    columnId: 3
  },
  {
    id: 5,
    title: 'Levar o Billy ao banho e tosa',
    priority: 'Low',
    dueDate: new Date(2025, 6, 22),
    columnId: 3
  },
]