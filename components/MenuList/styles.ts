import styled from 'styled-components'
import { device } from '../../styles/devices'

interface AsideProps {
  visible: boolean
}

export const StyledAside = styled.aside<AsideProps>`
  display: ${(props) => (props.visible ? 'inherit' : 'none')};
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  height: 100vh;
  width: 18rem;
  max-width: 100vw;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
`

export const CloseWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  margin-top: 1rem;

  button {
    border: none;
    background-color: transparent;
    margin-right: 1rem;

    &:hover {
      cursor: pointer;
    }
  }
`

export const FilterButtons = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
  align-items: center;
  margin: 1rem 0px;
  text-align: center;

  li {
    height: 100%;
    width: calc(100% - 4rem);
    margin: 0rem 2rem;
  }

  button {
    display: grid;
    grid-template-columns: 1.2rem 1fr;
    column-gap: 1rem;
    background-color: transparent;
    align-items: center;
    width: 100%;
    border: none;
    height: 100%;

    &:hover {
      cursor: pointer;
    }

    svg {
      font-size: 1.2rem;
    }

    p {
      text-align: left;
      span {
        color: ${(props) => props.theme.colors.secondary};
        font-weight: bold;
      }
    }
  }

  @media screen and ${device.laptop} {
    display: none;
  }
`
