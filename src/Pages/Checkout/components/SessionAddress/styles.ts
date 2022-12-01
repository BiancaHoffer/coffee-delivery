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



export const ContainerInputs = styled.div`
    display: grid;
    grid-template-columns: 12.5rem 17.25rem 3.75rem;
    column-gap: 0.75rem;
    row-gap: 1rem;
    grid-auto-flow: dense;

    .cep {
        grid-column: 1 / 4;
        width: 12.5rem;
    }
    
    .street {
        grid-column: 1 / 4;
    }

    .number {
        grid-column: 1 / 2;
    }
`

export const ContentInputComplement = styled.div`
    grid-column: 2 / 4;
    width: 21.75rem;
    height: 2.625rem;
    background: ${props => props.theme["gray-100"]};
    border-radius: 0.25rem; 

    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
        font-style: italic;
        font-size: 0.75rem;
        padding: 0rem 1rem;
        height: 100%;
        color: ${props => props.theme["gray-400"]};

        display: flex;
        align-items: center;
        justify-content: center;

        border-color: ${props => props.theme["gray-300"]};
        border-style: solid;
        border-width: 1px 1px 1px 0px;
        border-radius: 0 0.25rem 0.25rem 0; 
    }
`;

export const InputComplement = styled.input`
    height: 100%;
    width: 100%;
    background: ${props => props.theme["gray-100"]}; 
    font-size: 0.875rem;
    color: ${props => props.theme["gray-500"]};
    padding: 0.75rem;

    border: 0.25rem;
    border-color: ${props => props.theme["gray-300"]};
    border-width: 1px 0 1px 1px;
    border-style: solid;
    border-radius: 0.25rem 0 0 0.25rem;
   

    transition: 0.3s;

    &:focus {
        border: 1px solid ${props => props.theme['yellow-800']};
        border-radius: 0.25rem;
    }

    &::-webkit-input-placeholder {
        color: ${props => props.theme["gray-400"]};
}
`

