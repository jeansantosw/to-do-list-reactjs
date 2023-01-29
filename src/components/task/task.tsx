import style from './task.module.css'

export function Task() {
  return (
    <div className={style.task}>
      <button>Task completa</button>

      <p className={style.textCompleted}>titulo da task completa</p>

      <button className={style.deleteButton}>Lixeira</button>
    </div>
  )
}
