import style from './Header.module.css'

import logoTodoList from '../../assets/Logo.svg'

export function Header() {
  return (
    <header className={style.header}>
      <img src={logoTodoList} alt="Lista de Tarefas" />
      <form className={style.taskForm} action="">
        <input type="text" />
        <button>Criar</button>
      </form>
    </header>
  )
}