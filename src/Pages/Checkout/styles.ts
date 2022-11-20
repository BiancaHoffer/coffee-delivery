import styled from "styled-components";

export const CheckoutContainer = styled.div`
    max-width: 1144px;
    height: auto;
    padding: 0px 0.75rem;
    margin: 0 auto;
    margin: 2.5rem auto;

    display: flex;
    justify-content: space-between;
    gap: 2rem;

    h1 {
        font-family: 'Baloo 2', sans-serif;
        font-size: 1.125rem;
        font-weight: 800;
        color: ${props => props.theme["gray-800"]};
        margin-bottom: 1.375rem;
    }
`

export const AddressAndPaymentContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
`;

export const CoffeeSelectedContainer = styled.div`
    
`









