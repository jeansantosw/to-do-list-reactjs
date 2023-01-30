import { TasksProps } from '../../App'
import { Task } from '../task/Task'
import style from './ListTasks.module.css'

interface ListTasksProps {
  tasks: TasksProps[]
}

export function ListTasks({ tasks }: ListTasksProps) {
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
        {tasks.map(task => {
         return <Task key={task.nameTask} task={task} />
        })}
      </div>
    </section>
  )
}
