import { useState } from 'react'

import { Header } from './components/header/Header'

import './global.css'
import { ListTasks } from './components/listTasks/ListTasks'

export interface TasksProps {
  nameTask: string
  isCompleted: boolean
}

export function App() {
  const [tasks, setTasks] = useState<TasksProps[]>([
  ])

  function addTask(taskName: string) {
    setTasks([...tasks, { nameTask: taskName, isCompleted: false }])
  }

  function deleteTask(taskId: string) {
    const newTasks = tasks.filter(task => { return task.nameTask !== taskId })
    setTasks(newTasks)
  }

  function toggleTaskCompleted(taskId: string) {
    const newTasks = tasks.map(task => {
      if(task.nameTask === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted
        }
      }
      return task;
    })
    setTasks(newTasks)
  }

  return (
    <>
      <Header onAddTask={addTask} />
      <ListTasks tasks={tasks} onDelete={deleteTask} onComplete={toggleTaskCompleted} />
    </>
  )
}
