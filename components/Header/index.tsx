import { useEffect, useState } from 'react'
import { StyledHeader, TextWrapper, Filter } from './styles'

interface HeaderProps {
  title: string
}

export const Header = (props: HeaderProps): JSX.Element => {
  const [date, setDate] = useState('')

  useEffect(() => {
    const locale = window.navigator.language
    const actualDate = new Date()
    const day = actualDate.toLocaleDateString(locale, { weekday: 'long' })
    const dayNumber = actualDate.getDate()
    const month = actualDate.toLocaleDateString(locale, { month: 'long' })
    setDate(`${day}, ${dayNumber} ${month}`)
  }, [])

  return (
    <StyledHeader>
      <Filter />
      <TextWrapper>
        <h1>{props.title}</h1>
        <p style={{ textTransform: 'capitalize' }}>{date}</p>
      </TextWrapper>
    </StyledHeader>
  )
}
