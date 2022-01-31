import type { NextPage } from 'next'
import Head from 'next/head'
import { AddTask } from '../components/AddTask'
import { Header } from '../components/header'
import { List } from '../components/List'
import { useTask } from '../hooks/useTasks'
import { PageWrapper } from '../styles/PageWrapper'


const Home: NextPage = () => {

  const { tasks, createTask } = useTask()

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
        <List items={tasks} />
      </PageWrapper>
    </>
  )
}

export default Home
