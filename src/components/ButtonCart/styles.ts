import styled from "styled-components";

export interface ColorButtonProps {
    variant: 'purple' | 'yellow'
}

const colorButtonCart = {
    purple: '#4B2995',
    yellow : '#F1E9C9',
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

    a {
        display: flex;
        justify-content: center;
        align-items: center;
    }

`