import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { GlobalSyles } from '../styles/GlobalStyles'
import { theme } from '../styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalSyles />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
