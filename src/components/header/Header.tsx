import style from './Header.module.css'

import LogoTodoList from '../../assets/Logo.svg'

export function Header() {
  return (
    <header className={style.header}>
      <img src={LogoTodoList} alt="Lista de Tarefas" />
    </header>
  )
}