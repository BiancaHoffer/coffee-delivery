import styled from "styled-components";

export const ContainerCoffeeSelected = styled.div`
    padding: 2.5rem;
    width: 28rem;
    background: ${props => props.theme["gray-200"]};
    border-radius: 0.375rem 2.75rem 0.375rem 2.75rem;
`

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
    }
`;


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

export const ContainerConfirmOrder = styled.div`
    width: 100%; 
    margin: 1.5rem 0;

    button {
        margin-top: 0.75rem;
        width: 100%;
        background: ${props => props.theme["yellow-500"]};
        color: ${props => props.theme.white};
        font-weight: 700;
        font-size: 0.875rem;
        padding: 0.75rem;
        border: 0;
        border-radius: 0.375rem;
        cursor: pointer;
    }
`;

export const PriceBase = styled.div`
    width: 100%;
    margin-bottom: 0.75rem;

    display: flex;
    justify-content: space-between;
`;

export const Price = styled(PriceBase)`
    font-size: 0.875rem;
    
    .priceitem {
        font-size: 1rem
    }
`

export const TotalValue = styled(PriceBase)`
    font-size: 1.25rem;
    font-weight: 700;
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

        display: flex;
        align-items: center;
        justify-content: center;
    }
`

