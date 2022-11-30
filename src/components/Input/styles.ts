import styled from 'styled-components';

export const InputContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    position: relative;

    > p {
        color: red;
    }
`;

export const InputBase = styled.input`
    background: ${props => props.theme["gray-100"]};
    border: 1px solid ${props => props.theme["gray-300"]};
    padding: 0.75rem;
    border-radius: 0.25rem;
    font-size: 0.875rem;
    color: ${props => props.theme["gray-500"]};

    transition: 0.3s;

    &:focus {
        border: 1px solid ${props => props.theme['yellow-800']};
    }

    &::-webkit-input-placeholder {
        color: ${props => props.theme["gray-400"]};
    }
`