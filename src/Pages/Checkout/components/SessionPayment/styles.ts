import styled from "styled-components";

export const DivPayment = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 40rem;
    padding: 2.5rem;
    border-radius: 0.375rem;
    background-color: ${props => props.theme["gray-200"]};
`

export const TitlePayment = styled.div`
        display: grid;
        grid-template-columns: 2rem auto;
        grid-area: auto;
        align-items: center;
        margin-bottom: 2rem;
    
        .iconPayment {
            grid-column: 1;
        }

        h2 {
            grid-column: 2;
            font-size: 1rem;
            font-weight: normal;
            line-height: 130%;
            color: ${props => props.theme["gray-800"]};
            margin-bottom: 0.125rem;
        }

        p {
            grid-column: 2;
            font-size: 0.875rem;
            line-height: 130%;
            color: ${props => props.theme["gray-800"]}
        }
`

export const ContentPaymentMethod = styled.div`
    width: 100%;
    
    display: flex;
    justify-content: space-between;

`