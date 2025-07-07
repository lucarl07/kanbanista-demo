import { type CSSProperties } from 'react'

interface Props {
  x: number
  y: number
}

export default function ContextMenu({ x, y }: Props) {
  const style: CSSProperties = {
    position: 'absolute',
    zIndex: 1,
    top: `${y}px`,
    left: `${x}px`,
  }

  return (
    <div style={style}>
      ContextMenu
    </div>
  )
}