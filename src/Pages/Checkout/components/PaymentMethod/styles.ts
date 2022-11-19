import styled from 'styled-components'

interface RadioBoxProps {
    isActive: boolean;
}

const colors = {
    purple: '#EBE5F9',
    purpleDark: '#8047F8',
};

export const RadioBox = styled.button<RadioBoxProps>`
    background: ${props => props.isActive ? colors.purple : props.theme['gray-300']};
    border: 1px solid ${props => props.isActive ? colors.purpleDark : 'transparent'};
    border-radius: 0.375rem;
    font-size: 0.75rem;
    padding: 1rem;
    color: ${props => props.theme['gray-500']};
    min-width: 10.938rem;

    cursor: pointer;
    transition: 0.2s;

    display: flex;
    align-items: center;
    gap: 0.75rem;
`