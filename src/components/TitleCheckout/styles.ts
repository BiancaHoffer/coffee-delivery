import styled from 'styled-components'

export const TitleAddress = styled.div`
    display: grid;
    grid-template-columns: 2rem auto;
    grid-area: auto;
    align-items: center;
    margin-bottom: 2rem;

    .iconLocation {
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