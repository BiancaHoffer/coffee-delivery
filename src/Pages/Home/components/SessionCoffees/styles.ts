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

export const CoffeeList = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin: 0 auto;
    gap: 2rem;
`