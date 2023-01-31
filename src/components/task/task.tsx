import { Trash, CheckCircle } from 'phosphor-react'
import { TasksProps } from '../../App'

import style from './task.module.css'

interface TaskProps {
  task: TasksProps
  onDelete: (taskId: string) => void
  onComplete: (taskId: string) => void
}

export function Task({ task, onDelete, onComplete }: TaskProps) {
  // const isCompleted = true

  return (
    <div className={style.task}>
      <button
        className={style.checkContainer}
        onClick={() => onComplete(task.nameTask)}
      >
        {task.isCompleted ? (
          <CheckCircle className={style.checkCircle} />
        ) : (
          <div />
        )}
      </button>

      <p className={task.isCompleted ? style.textCompleted : ''}>{task.nameTask}</p>

      <button
        className={style.deleteButton}
        onClick={() => onDelete(task.nameTask)}
      >
        <Trash size={20} />
      </button>
    </div>
  )
}
