import styled from 'styled-components';

export const HeaderContainer = styled.header`
    height: 6.5rem;
    width: 100%;
    max-width: 1144px;
    padding: 0px 0.75rem;
    margin: 0 auto;

    nav {
        width: 100%;
        height: 100%;

        display: flex;
        justify-content: space-between;
        align-items: center;

        div {
            display: flex;
            gap: 0.75rem;
            align-items: center;
            justify-content: center;
        }
    }
`

export const Localization = styled.div`
    width: auto;
    height: 2.375rem;
    background-color: ${props => props.theme['purple-300']}; 
    padding: 0.5rem;
    border-radius: 6px;
    color: ${props => props.theme['purple-800']};

    display: flex;
    gap: 0.125rem;
`

export const Cart = styled.a`
    width: 2.375rem;
    height: 2.375rem;
    background-color: ${props => props.theme['yellow-300']};
    border-radius: 0.375rem;

    display: flex;
    justify-content: center;
    align-items: center;
`