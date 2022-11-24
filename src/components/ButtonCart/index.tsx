import { ReactNode, MouseEventHandler, DOMAttributes } from 'react';
import { IoCart } from "react-icons/io5";
import { ContainerButtonCart, ColorButtonProps } from "./styles";

interface ButtonCartProps {
    variant: "purple" | "yellow";
    children: ReactNode;
    onClick: MouseEventHandler;
}

export function ButtonCart({ variant, children, onClick }: ButtonCartProps) {
    return (
        <ContainerButtonCart variant={variant} onClick={onClick}>
            { children }
        </ContainerButtonCart>
    )
}