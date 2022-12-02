import { ReactNode, MouseEventHandler, DOMAttributes } from 'react';
import { ContainerButtonCart, ColorButtonProps } from "./styles";

interface ButtonCartProps {
    variant: "purple" | "yellow";
    hoverActive: 'purple' | 'inactive';
    children: ReactNode;
    onClick?: MouseEventHandler;
}

export function ButtonCart({ variant, hoverActive, children, onClick }: ButtonCartProps) {
    return (
        <ContainerButtonCart variant={variant} hoverActive={hoverActive} onClick={onClick}>
            { children }
        </ContainerButtonCart>
    )
}