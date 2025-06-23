import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import 'src/index.css'
import Board from 'layouts/Board'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Board />
  </StrictMode>,
)
