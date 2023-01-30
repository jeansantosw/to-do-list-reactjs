import { Trash, CheckCircle } from 'phosphor-react'
import { TasksProps } from '../../App'

import style from './task.module.css'

interface TaskProps {
  task: TasksProps;
}

export function Task({ task }: TaskProps) {
  return (
    <div className={style.task}>
      {/* <button>Task completa</button> */}
      <input type="checkbox" />
      <CheckCircle />

      <p className={style.textCompleted}>{task.nameTask}</p>

      <button className={style.deleteButton}>
        <Trash size={20} />
      </button>
    </div>
  )
}
