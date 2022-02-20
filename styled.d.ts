import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      main: string
      secondary: string
      active: string
      light: string
      success: string
      error: string
    }
    gradient: string
  }
}
