// Importing Libraries
import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, FormEvent, useState } from 'react'

// Style import
import style from './Header.module.css'

// Image import
import logoTodoList from '../../assets/Logo.svg'

interface HeaderProps {
  onAddTask: (taskName: string) => void
}

export function Header({onAddTask}: HeaderProps) {
  // Status of my application
  const [task, setTask] = useState('')

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()
    onAddTask(task)
    setTask('')
  }

  function handleChanceValueTask(event: ChangeEvent<HTMLInputElement>) {
    setTask(event.target.value)
    
  }

  return (
    <header className={style.header}>
      <img src={logoTodoList} alt="Lista de Tarefas" />
      <form className={style.taskForm} onSubmit={handleCreateNewTask}>
        <input
          onChange={handleChanceValueTask}
          value={task}
          name="comment"
          placeholder="Criar uma nova tarefa"
        />
        <button>Criar {<PlusCircle size={20} />}</button>
      </form>
    </header>
  )
}
