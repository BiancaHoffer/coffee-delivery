import styled from 'styled-components';

export const CardCoffeeSelected = styled.div`
    max-width: 23rem;
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-template-rows: auto auto;
    padding-bottom: 2.5rem;
    border-bottom: 1px solid ${props => props.theme["gray-300"]};
    gap: 1rem;

    &:not(:first-child) {
        padding-top: 2.5rem;
    }

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
    }

    span {
        grid-column: 4 / 4;
        grid-row: 1 / 3;
        font-weight: 700;
        width: 70px;
        text-align: end;
    }

    .ContentAmountAndButtonRemove {
        display: flex;
        gap: 0.5rem;
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

        transition: 0.3s;

        &:hover {
            filter: brightness(0.9);
        }
    }
`;

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
        color: ${props => props.theme["purple-500"]};

        display: flex;
        align-items: center;
        justify-content: center;

        transition: 0.3s;

        &:disabled {
            color: ${props => props.theme["gray-400"]};
        }

        &:hover {
            color: ${props => props.theme['purple-800']};
        }
    }
`