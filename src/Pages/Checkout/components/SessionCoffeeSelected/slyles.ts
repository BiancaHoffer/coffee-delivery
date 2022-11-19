import styled from "styled-components";

export const ContainerCoffeeSelected = styled.div`
    padding: 2.5rem;
    max-width: 28rem;
    background: ${props => props.theme["gray-200"]};
    border-radius: 0.375rem;
`

export const CardCoffeeSelected = styled.div`
    width: 23rem;
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-template-rows: auto auto;
    //align-items: center;
    gap: 1rem;

    img {
        width: 4rem;
        height: 4rem;

        grid-row: 1 / 3;
        grid-column: 1 / 1;
    }

    p {
        grid-column: 2 / 4;
        font-size: 1rem;
        color: ${props => props.theme['gray-800']};
        font-weight: 600;
    }

    span {
        grid-column: 4 / 4;
        grid-row: 1 / 3;
    }

    .buttonRemove {
        padding: 0.563rem;
        background: ${props => props.theme['gray-300']};
        border-radius: 0.375rem;
        border: 0;
        font-size: 0.75rem;
        cursor: pointer;

        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.25rem;
    }
`;

export const ContainerAmountCoffeeButtonRemove = styled.div`
    display: flex;
    gap: 0.5rem;
`

export const AmountCoffee = styled.div`
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