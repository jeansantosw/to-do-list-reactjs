import { Task } from '../task/task'
import style from './ListTasks.module.css'

export function ListTasks() {
  return (
    <section className={style.tasks}>
      <header className={style.header}>
        <div>
          <p>Tarefas criadas</p>
          <span>Quantidade de tasks</span>
        </div>

        <div>
          <p className={style.textPurple}>Concluídas</p>
          <span>0 de 5</span>
        </div>
      </header>

      <div className={style.list}>
        <Task />

        <section className={style.empty}>
          <div>
            <p>Você ainda não tem tarefas cadastradas</p>
            <span>Crie tarefas e organize seus itens a fazer</span>
          </div>
        </section>
      </div>
    </section>
  )
}
