import styled from 'styled-components'

export const StyledItem = styled.li`
  margin-bottom: 2rem;
  padding: 0rem 1rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.colors.active};

  input {
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 1rem;
  }

  p {
    font-size: 1rem;
  }
`
