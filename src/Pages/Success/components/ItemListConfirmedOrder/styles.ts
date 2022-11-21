import styled, { css } from "styled-components";

export const ContainerItemListConfirmedOrder = styled.div`

`;

export type IconVariant = 'purple' | 'yellowDark' | 'yellow';

interface IconVariantProps {
    variant: IconVariant;
}

const iconVariants = {
    purple: '#8047F8',
    yellow: '#DBAC2C', 
    yellowDark: '#C47F17',
}

export const ContentIcon = styled.div<IconVariantProps>`
    ${props => { return css`background-color: ${iconVariants[props.variant]}` }};
`;