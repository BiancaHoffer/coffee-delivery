import styled from "styled-components";

export const ContainerConfirmOrder = styled.div`
    width: 100%; 
    margin: 1.5rem 0;

    button {
        margin-top: 0.75rem;
        width: 100%;
        background: ${props => props.theme["yellow-500"]};
        font-weight: 700;
        font-size: 0.875rem;
        padding: 0.75rem;
        border: 0;
        border-radius: 0.375rem;
        cursor: pointer;
        color: ${props => props.theme.white};

        &:disabled {
            background: ${props => props.theme["yellow-800"]};
        }

        a {
            color: ${props => props.theme.white};
        }
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

