import * as types from 'src/types'
import styles from 'styles/Task.module.css'

import React, { useState } from 'react'
import { useDraggable } from '@dnd-kit/core'

import TaskView from 'components/modals/TaskView'
import ContextMenu from 'components/ContextMenu'
import imgTaskDescription from 'assets/images/task_description.png'

export interface Props {
  task: types.Task
}

interface ContextMenuState {
  show: boolean
  x: number
  y: number
}

const initialContextMenu: ContextMenuState = {
  show: false, x: 0, y: 0 
}

const Task = ({ task }: Props) => {
  // Modal & context menu state:
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [contextMenu, setContextMenu]
    = useState<ContextMenuState>(initialContextMenu)

  // Draggable component arguments:
  const { attributes, listeners, setNodeRef, transform }
    = useDraggable({ id: task.id });

  // Event handlers:
  const handleContextMenu = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault()

    const { pageX, pageY } = e
    setContextMenu({ show: true, x: pageX, y: pageY })
  }
  const closeContextMenu = () => setContextMenu(initialContextMenu)

  // Component logic:
  const relativeStyle = {
    transform: `translate(${transform?.x || 0}px, ${transform?.y || 0}px)`
  }
  const priority = task.priority === 'High' ? 'Alta' : (
    task.priority === 'Medium' ? 'Média' : 'Baixa'
  )

  return (
    <>
      <TaskView task={task} open={isOpen} onClose={() => setIsOpen(false)} />

      {contextMenu.show && (
        <ContextMenu 
          x={contextMenu.x} y={contextMenu.y} 
          task={task} onClose={closeContextMenu} />
      )}

      <article 
        {...listeners} {...attributes} ref={setNodeRef}
        onContextMenu={handleContextMenu}
        className={styles.card}
        style={relativeStyle}>
          <span className={styles.title}>
            {task.title}
          </span>
          <div className={styles.info}>
            <div className={styles.leftArea}>
              <div className={styles.label}>
                {priority}
              </div>
              {task.description && (
                <img src={imgTaskDescription} alt="O cartão tem descrição" />
              )}
            </div>
            <span className={styles.dueDate}>
              {task.dueDate?.toDateString() || 'S/P'}
            </span>
          </div>
      </article>
    </>
  )
}

export default Task