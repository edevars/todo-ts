import styled from 'styled-components'

export const StyledForm = styled.form`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr auto;
  margin-top: 2rem;

  input {
    border-radius: 6px;
    margin-right: 0.25rem;
    padding: 0rem 1rem;
    border: 2px solid ${(props) => props.theme.colors.active};
  }
`

export const AddButton = styled.button`
  background: ${(props) => props.theme.gradientSecondary};
  color: white;
  border: none;
  width: 3rem;
  height: 2rem;
  border-radius: 6px;

  &:hover {
    cursor: pointer;
  }
`
