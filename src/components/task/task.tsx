import { Trash, CheckCircle } from 'phosphor-react'

import style from './task.module.css'

export function Task() {
  return (
    <div className={style.task}>
      {/* <button>Task completa</button> */}
      {/* <input type="checkbox" /> */}
      <CheckCircle />

      <p className={style.textCompleted}>titulo da task completa</p>

      <button className={style.deleteButton}>
        <Trash size={20} />
      </button>
    </div>
  )
}
