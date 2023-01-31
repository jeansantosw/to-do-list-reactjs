import { TasksProps } from '../../App'
import { Task } from '../task/Task'
import style from './ListTasks.module.css'

import listImage from '../../assets/list.png'

interface ListTasksProps {
  tasks: TasksProps[]
  onDelete: (taskId: string) => void
  onComplete: (taskId: string) => void
}

export function ListTasks({ tasks, onDelete, onComplete }: ListTasksProps) {
  const taskCount = tasks.length

  const completedTasks = tasks.filter(task => {
    return task.isCompleted
  }).length

  return (
    <section className={style.tasks}>
      <header className={style.header}>
        <div>
          <p>Tarefas criadas</p>
          <span>{taskCount}</span>
        </div>

        <div>
          <p className={style.textPurple}>Concluídas</p>
          <span>
            {completedTasks} de {taskCount}
          </span>
        </div>
      </header>

      <div className={style.list}>
        {tasks.map(task => {
          return (
            <Task
              key={task.nameTask}
              task={task}
              onDelete={onDelete}
              onComplete={onComplete}
            />
          )
        })}

        {
          tasks.length <= 0 && (
            <section className={style.empty}>
              <div>
                <img src={listImage} />
                <p>Você ainda não tem tarefas cadastradas</p>
                <span>Criar tarefas e organizar seus itens a fazer</span>
              </div>
            </section>
          )
        }

      </div>
    </section>
  )
}
