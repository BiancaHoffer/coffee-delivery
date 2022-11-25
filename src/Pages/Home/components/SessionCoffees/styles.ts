import styled from "styled-components";

export const CoffeeSession = styled.main`
    max-width: 1144px;
    padding: 0px 0.75rem;
    margin: 0 auto;

    h1 {
        margin: 3.375rem 0;
        font-family: 'Baloo 2', sans-serif;
        font-weight: 800;
        color: ${props => props.theme['gray-800']};
    }
`;

export const ContainerCoffeeCard = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin: 0 auto;
    gap: 2rem;
`

export const ContentCoffeeCard = styled.div`
    max-width: 16rem;
    height: 19.375rem;
    background: ${props => props.theme['gray-200']};
    border-radius: 0.375rem 2.25rem 0.375rem 2.25rem;
    padding: 1.5rem;
    margin-bottom: 2.625rem;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;

    position: relative;

    img {
        position: relative;
        top: -0.5rem;
        height: 7.5rem;
        width: 7.5rem;
    }

    h2 {
        font-size: 1.25rem;
        font-weight: 800;
        font-family: 'Baloo 2', sans-serif;
        text-align: center;
        margin: 1.125rem 0 0.5rem 0;
    }

    .description {
        font-size: 0.875rem;
        text-align: center;
        color: ${props => props.theme["gray-400"]};
        margin-bottom: 2.313rem;
    }
`;

export const ContainerTag = styled.div`
    width: 100%;

    display: flex;
    justify-content: space-evenly;
    align-items: center;

    p {
        background: ${props => props.theme["yellow-300"]};
        padding: 0.25rem 0.5rem; 
        border-radius: 6.25rem;
        color: ${props => props.theme["yellow-800"]};
        font-size: 0.625rem;
        font-weight: 700;
        text-transform: uppercase;
    }
`

export const GridAddCart = styled.div`
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
        font-family: 'Baloo 2', sans-serif;
        font-size: 1.5rem;
    }

    span {
        font-family: 'Roboto', sans-serif;
        font-size: 0.875rem;
        margin-right: 0.25rem;
    }

    .contentAmountCoffeeAndButtonCart {
        display: flex;
        gap: 0.5rem;
    }
`

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

        &:disabled {
            color: ${props => props.theme["gray-400"]};
        }
    }
`
