import styled from 'styled-components';
import { device } from '../../styles/devices';

export const StyledController = styled.div`
    display: flex;
    flex-direction: column;
`

export const FilterButtons = styled.ul`
    display: grid;
    grid-template-columns: 1fr repeat(3, 70px) 1fr;
    list-style: none;
    padding: 0;
    align-items: center;
    margin: 1rem 0px;
    text-align: center;

    li{
        height: 100%;
    }
    

    button {
        width: 100%;
        background: ${props => props.theme.colors.light};
        color: ${props => props.theme.colors.main};
        border: none;
        height: 100%;

        &:hover {
            cursor: pointer;
        }
    }


    @media screen and ${device.laptop} {
        display: none;
    }
`
