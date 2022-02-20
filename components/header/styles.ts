import styled from 'styled-components'
import { device } from '../../styles/devices'

export const StyledHeader = styled.header`
  background: url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80');
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
  padding: 3rem 8rem;
  height: 10rem;
  position: relative;

  @media screen and ${device.mobileL} {
    padding: 2rem 4rem;
  }
`

export const Filter = styled.div`
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 1) 35%,
    rgba(0, 212, 255, 1) 100%
  );
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  width: 100%;
  opacity: 0.7;
`

export const TextWrapper = styled.div`
  position: absolute;
  z-index: 2;
  h1 {
    font-size: 2.5rem;
    font-weight: lighter;
    width: 16rem;
    text-transform: uppercase;
    @media screen and ${device.mobileL} {
      margin-top: 3rem;
    }
  }

  p {
    text-transform: capitalize;
  }
`
