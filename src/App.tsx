import { useState } from 'react'

import { Header } from './components/header/Header'

import './global.css'
import { ListTasks } from './components/listTasks/ListTasks'

export interface TasksProps {
  nameTask: string;
  isCompleted: boolean;
}

export function App() {

  const [tasks, setTasks] = useState<TasksProps[]>([
    {
      nameTask: 'Estudando Node',
      isCompleted: false
    },
    {
      nameTask: 'Estudando ReactJs',
      isCompleted: true
    },
    {
      nameTask: 'Estudando Javascript',
      isCompleted: true
    }
  ])

  return (
    <>
      <Header />
      <ListTasks tasks={tasks} />
    </>
  )
}
