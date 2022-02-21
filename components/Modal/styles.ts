import styled from 'styled-components'

export const StyledModal = styled.div`
  position: absolute;
  z-index: 5;
  top: 10rem;
  width: 100%;
  width: 16rem;
  left: calc(50vw - 10rem);
  height: 8rem;
  padding: 2rem;
  border-radius: 1rem;
  background: #fff;

  display: flex;
  justify-content: center;
  flex-direction: column;

  .title {
    font-weight: bold;
    text-align: center;
    font-size: 1.2rem;
    margin-top: 0px;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    input {
      border-radius: 6px;
      margin-right: 0.25rem;
      padding: 0.5rem 1rem;
      border: 1px solid ${(props) => props.theme.colors.active};
      font-size: 1rem;
      width: calc(100% - 4rem);
    }

    button {
      background: ${(props) => props.theme.gradientSecondary};
      color: white;
      border: none;
      margin-top: 1rem;
      border-radius: 6px;
      padding: 0.5rem 1rem;
      &:hover {
        cursor: pointer;
      }
    }
  }
`

export const Backdrop = styled.div`
  position: absolute;
  background: #000;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 5;
  opacity: 0.4;
`

export const FormWrapper = styled.div``
