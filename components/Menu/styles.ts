import styled from 'styled-components'

export const MenuButton = styled.button`
  position: absolute;
  width: 2rem;
  height: 2rem;
  background: none;
  border: none;
  top: 1rem;
  left: 1rem;
  z-index: 1;

  svg {
    color: white;
    font-size: 1.2rem;
  }

  &:hover {
    cursor: pointer;
  }
`
