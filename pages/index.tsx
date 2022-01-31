import type { NextPage } from 'next'
import Head from 'next/head'
import { Header } from '../components/header'
import { PageWrapper } from '../styles/PageWrapper'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Todo App</title>
        <meta name="description" content="Manage your tasks in the easiest way possible" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <PageWrapper>
      </PageWrapper>
    </>
  )
}

export default Home
