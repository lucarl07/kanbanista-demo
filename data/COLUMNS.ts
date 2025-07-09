/** Why not JSON?
 * Answer: I found it would be a hassle to do the proper conversions from JSON to 
 * TypeScript, especially considering I'd have to import the Node.js "fs" module
 * for asynchronous operations w/ "readFile" just to not depend on Node experimental
 * features.
 */

import type { Column } from '../src/types'

const INITIAL_COLUMNS: Column[] = [
  { id: 1, name: 'A fazer' },
  { id: 2, name: 'Em andamento' },
  { id: 3, name: 'Concluído' },
]

localStorage.setItem(
  'columns',
  JSON.stringify(INITIAL_COLUMNS)
)

export default INITIAL_COLUMNS