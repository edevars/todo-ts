import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { AddTask } from '../components/AddTask'
import { Header } from '../components/Header'
import { Menu } from '../components/Menu'
import { List } from '../components/List'
import { useTask } from '../hooks/useTasks'
import { PageWrapper } from '../styles/PageWrapper'
import { ItemInterface, ListItems, TaskListType } from '../types'

const Home: NextPage = () => {
  const { tasks, createTask, updateTaskProperty, deleteTask } = useTask()
  const [pendingTasks, setPendingTasks] = useState<ListItems>([])
  const [completedTasks, setCompletedTasks] = useState<ListItems>([])
  const [tasksShowed, setTasksShowed] = useState<TaskListType>('todo')

  useEffect(() => {
    const calculatePendingTasks = () => {
      const tasksToDo = tasks.filter(
        (task: ItemInterface) => task.checked !== true
      )
      setPendingTasks(tasksToDo)
    }

    const calculateCompletedTasks = () => {
      const tasksDone = tasks.filter((task: ItemInterface) => task.checked)
      setCompletedTasks(tasksDone)
    }
    calculatePendingTasks()
    calculateCompletedTasks()
  }, [tasks])

  const renderList = (tasksToShow: ListItems) => {
    return (
      <List
        items={tasksToShow}
        updateTaskProperty={updateTaskProperty}
        deleteTask={deleteTask}
      />
    )
  }

  const renderTasksByType = (taskType: TaskListType) => {
    switch (taskType) {
      case 'completed':
        return renderList(completedTasks)
      case 'todo':
        return renderList(pendingTasks)
      case 'all':
        return renderList(tasks)
    }
  }

  return (
    <>
      <Head>
        <title>Todo App</title>
        <meta
          name="description"
          content="Manage your tasks in the easiest way possible"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header title={tasksShowed} />
      <PageWrapper>
        {tasksShowed === 'todo' && <AddTask createTask={createTask} />}
        <Menu
          totalTasks={tasks.length}
          pendingTasks={pendingTasks.length}
          setTasksShowed={setTasksShowed}
        />
        {renderTasksByType(tasksShowed)}
      </PageWrapper>
    </>
  )
}

export default Home
