import styled from 'styled-components'

export const StyledItem = styled.li`
  padding: 0.5rem 1rem;
  display: grid;
  grid-template-columns: auto auto 1fr;
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

  &:hover {
    .controlButtons {
      opacity: 1;
    }
  }

  .controlButtons {
    display: flex;
    justify-content: flex-end;
    height: 100%;
    align-items: center;
    opacity: 1;
    transition: opacity 300ms ease-in-out;

    button {
      font-size: 0.8rem;
      margin-right: 0.5rem;
      background: transparent;
      border: none;
      color: ${(props) => props.theme.colors.active};

      &:hover {
        cursor: pointer;
      }
    }

    @media screen and (min-width: 1024px) {
      opacity: 0;
      button {
        font-size: 1rem;
      }
    }
  }
`
