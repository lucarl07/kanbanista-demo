import { type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import styles from 'styles/Modal.module.css'

export interface Props {
  name?: string
  open: boolean
  children?: ReactNode
  onClose(): void
}

export default function Modal({ name, open, children, onClose }: Props) {
  return open && createPortal(
    <>
      <div className={styles.overlay} onClick={onClose} />
      <div className={styles.modal}>
        <header className={styles.header}>
          <h1>{name || 'Modal'}</h1>
          <button onClick={onClose}>X</button>
        </header>
        <article className={styles.content}>
          {children}
        </article>
      </div>
    </>,
    document.body
  )
}
