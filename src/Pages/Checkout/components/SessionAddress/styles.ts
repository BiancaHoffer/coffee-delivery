import styled from 'styled-components';

export const ContainerAddress = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 40rem;
    padding: 2.5rem;
    border-radius: 0.375rem;
    background-color: ${props => props.theme["gray-200"]};
`

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

export const ContainerInputs = styled.div`
    display: grid;
    grid-template-rows: repeat(4, 2.625rem);
    grid-template-columns: auto auto auto;
    gap: 0.75rem;
`

export const InputBase = styled.input`
    background: ${props => props.theme["gray-100"]};
    border: 1px solid ${props => props.theme["gray-300"]};
    padding: 0.75rem;
    border-radius: 0.25rem;
    font-size: 0.875rem;
    color: ${props => props.theme["gray-500"]};

    transition: 0.3s;

    &:focus {
        border: 1px solid ${props => props.theme["gray-400"]};
    }

    &::-webkit-input-placeholder {
        color: ${props => props.theme["gray-400"]};
    }
`

export const InputCEP = styled(InputBase)`
    grid-column: 1 / 4;
    width: 12.5rem;
`

export const InputRoad = styled(InputBase)`
    grid-column: 1 / 4;
    width: 35rem;
`

export const InputNumber = styled(InputBase)`
     width: 12.5rem;
`

export const ContentInputComplement = styled.div`
    grid-column: 2 / 4;
    width: 21.75rem;
    background: ${props => props.theme["gray-100"]};
    
    border-color: ${props => props.theme["gray-300"]};
    border-style: solid;
    border-width: 1px 1px 1px 0px;
    border-radius: 0.25rem; 

    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
        font-style: italic;
        font-size: 0.75rem;
        padding: 0rem 1rem;
        color: ${props => props.theme["gray-400"]};

        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export const InputComplement = styled(InputBase)`
    width: 17.125rem;
    height: 2.625rem;

    border-color: ${props => props.theme["gray-300"]};
    border-style: solid;
    border-width: 1px 0px 1px 1px;
    border-radius: 0.25rem; 
`

export const InputDistrict =styled(InputBase)`
     width: 12.5rem;
`

export const InputCity = styled(InputBase)`
    width: 17.25rem;
`

export const InputUF = styled(InputBase)`
    width: 3.75rem;
`

//&:focus {
 //   transition: 0.3s;
 //   border: 1px solid ${props => props.theme["gray-400"]};
//}

