import styled from "styled-components";


export const ContainerSuccess = styled.div`
    width: 100%;
    max-width: 1144px;
    padding: 0px 0.75rem;
    margin: 0 auto;
    margin-top: 5rem;

    display: flex;
    justify-content: space-between;
    align-items: end;

    h1 {
        font-family: 'baloo 2', sans-serif;
        font-size: 2rem;
        color: ${props => props.theme["yellow-800"]};
        line-height: 3rem;
    }

    p {
        font-size: 1.25rem;
        color: ${props => props.theme["gray-800"]};
        margin-bottom: 2.5rem;
    }
`

export const InfosContainer = styled.div`
    padding: 2.5rem;
    border-radius: 6px 36px 6px 36px;
    background: ${props => props.theme.white};
    min-width: 32rem;

    display: flex;
    flex-direction: column;
    gap: 2rem;

    position: relative;

    &::before {
        content: "";
        position: absolute;
        inset: -1px;
        border-radius: 7px 37px 7px 37px;
        z-index: -1;
        background: linear-gradient(102.89deg, #DBAC2C 2.61%, #8047F8 98.76%);
    }
`;

export const Infos = styled.div`
    display: flex;
    gap: 0.75rem;
    align-items: center;

    
    p {
        margin-bottom: 0;
        font-size: 1rem;
    }

    span {
        font-weight: bold;
    }

`
