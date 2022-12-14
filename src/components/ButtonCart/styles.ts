import styled from "styled-components";

export interface ColorButtonProps {
    variant: 'purple' | 'yellow';
    hoverActive: 'purple' | 'inactive';
}

const colorButtonCart = {
    purple: '#4B2995',
    yellow : '#F1E9C9',
}

const hoverActive = {
    purple:  '#8047F8',
    inactive: null,
}

export const ContainerButtonCart = styled.button<ColorButtonProps>`
    width: 2.375rem;
    height: 2.375rem;
    background-color: ${props => colorButtonCart[props.variant]};
    border-radius: 0.375rem;
    border: 0;
    cursor: pointer;
    
    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;

    transition: 0.3s;

    &:hover {
        background-color: ${props => hoverActive[props.hoverActive]}
    }

    a {
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
    }

    span {
        width: 1.25rem;
        height: 1.25rem;
        background: ${props => props.theme["yellow-800"]};
        color: ${props => props.theme.white};
        border-radius: 100%;
        font-size: 0.75rem;
        

        display: flex;
        justify-content: center;
        align-items: center;

        position: absolute;
        top: -0.5rem;
        right: -0.5rem;
    }

`