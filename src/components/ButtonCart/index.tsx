import { ReactNode } from 'react';
import { IoCart } from "react-icons/io5";
import { ContainerButtonCart, ColorButtonProps } from "./styles";

interface ButtonCartProps {
    variant: "purple" | "yellow";
    children: ReactNode;
}

export function ButtonCart({ variant, children }: ButtonCartProps) {
    return (
        <ContainerButtonCart variant={variant} >
            { children }
        </ContainerButtonCart>
    )
}