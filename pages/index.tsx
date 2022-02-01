import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { AddTask } from '../components/AddTask'
import { Header } from '../components/header'
import { Info } from '../components/Info'
import { List } from '../components/List'
import { useTask } from '../hooks/useTasks'
import { PageWrapper } from '../styles/PageWrapper'
import { ItemInterface } from '../types'


const Home: NextPage = () => {

  const { tasks, createTask, updateTaskProperty } = useTask()
  const [pendingTasks, setPendingTasks] = useState<number>(0)

  const calculatePendingTasks = () => {
    const tasksToDo = tasks.filter((task: ItemInterface) => task.checked !== true).length
    setPendingTasks(tasksToDo)
  }

  useEffect(() => {
    calculatePendingTasks()
  }, [tasks])

  return (
    <>
      <Head>
        <title>Todo App</title>
        <meta name="description" content="Manage your tasks in the easiest way possible" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <PageWrapper>
        <AddTask createTask={createTask} />
        <Info pendingTasks={pendingTasks} />
        <List 
          items={tasks} 
          updateTaskProperty={updateTaskProperty} 
        />
      </PageWrapper>
    </>
  )
}

export default Home
