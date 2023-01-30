// Importing Libraries
import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, FormEvent, useState } from 'react'

// Style import
import style from './Header.module.css'

// Image import
import logoTodoList from '../../assets/Logo.svg'

export function Header() {
  // Status of my application
  const [task, setTask] = useState(['Estudar reactjs'])
  const [newTask, setNewTask] = useState('')

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()
    setTask([...task, newTask])
    setNewTask('')
  }

  function handleChanceValueTask(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value)
    
  }

  return (
    <header className={style.header}>
      <img src={logoTodoList} alt="Lista de Tarefas" />
      <form className={style.taskForm} onSubmit={handleCreateNewTask}>
        <input
          onChange={handleChanceValueTask}
          value={newTask}
          name="comment"
          placeholder="Criar uma nova tarefa"
        />
        <button>Criar {<PlusCircle size={20} />}</button>
      </form>
    </header>
  )
}
