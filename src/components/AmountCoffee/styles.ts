import styled from "styled-components";

export const ContainerAmountCoffee = styled.div`
    grid-column: 2 / 2; 

    width: 4.5rem;
    padding: 0.563rem;
    background: ${props => props.theme['gray-300']};
    border-radius: 0.375rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.125rem;

    input {
        width: 1.25rem;
        background: transparent;
        border: 0px solid transparent;
        padding: 0 0.3rem;
        font-size: 1rem;
        color: ${props => props.theme["gray-800"]};

        &[type=number]::-webkit-inner-spin-button { 
            -webkit-appearance: none;
        } 
    }

    button {
        cursor: pointer;
        border: 0;
        background: transparent;

        display: flex;
        align-items: center;
        justify-content: center;
    }
`