import styles from 'styles/ContextMenu.module.css'
import { useRef, type CSSProperties } from 'react'
import useOnOutsideClick from 'hooks/useOnOutsideClick'

interface Props {
  x: number
  y: number
  onClose: () => void
}

export default function ContextMenu({ x, y, onClose }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  // Closes the menu when clicking anything outside:
  useOnOutsideClick(ref, onClose)

  const relativeStyle: CSSProperties = {
    top: `${y}px`,
    left: `${x}px`,
  }

  return (
    <div ref={ref} style={relativeStyle} 
      className={styles.context_menu}>
        Opções (T.B.D.)
    </div>
  )
}