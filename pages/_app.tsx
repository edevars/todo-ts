import type { AppProps } from 'next/app'
import Head from 'next/head'
import { GlobalSyles } from '../styles/GlobalStyles'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Todo App</title>
        <meta name="description" content="Manage your tasks in the easiest way possible" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalSyles />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp