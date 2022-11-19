import styled, { css } from "styled-components";

export type IconVariant = 'purple' | 'yellowDark' | 'yellow' | 'gray';

interface IconVariantProps {
    variant: IconVariant;
}

export const ItemContainer = styled.div`
    display: flex;
    gap: 0.75rem;
    align-items: center;
`

const iconVariants = {
    purple: '#8047F8',
    yellowDark: '#C47F17',
    yellow: '#DBAC2C',
    gray: '#574F4D',
}

export const ContentIcon = styled.div<IconVariantProps>`
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    color: ${props => props.theme.white};
    ${props => { return css`background-color: ${iconVariants[props.variant]}` }};

    display: flex;
    justify-content: center;
    align-items: center;
`;

