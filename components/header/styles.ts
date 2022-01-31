import styled from 'styled-components';

export const StyledHeader = styled.header`
    background: ${props => props.theme.gradient};
    color: ${props => props.theme.colors.active};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 10rem;

    h1 {
        font-size: 2.5rem;
        font-weight: lighter;
        border-top: 1px solid ${props => props.theme.colors.active};
        border-bottom: 1px solid ${props => props.theme.colors.active};
        padding: 0.5rem 0;
        width: 16rem;
        text-align: center;
    }
`