import { DefaultTheme } from 'styled-components'

const theme: DefaultTheme = {
  gradient:
    'linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, #0000ffad 35%, rgba(0, 212, 255, 1) 100%)',
  gradientSecondary: 'linear-gradient(90deg,#0000ffad,rgba(0, 212, 255, 1))',
  colors: {
    main: '#0000ffad',
    secondary: '#009fff',
    light: '#ffffff',
    active: '#bfc1c2',
    success: '#00e676',
    error: '#ec2f4b',
  },
}

export { theme }
