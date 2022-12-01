import { ReactNode, MouseEventHandler } from 'react';
import { RadioBox } from './styles';

interface PaymentMethodProps {
    isActive: boolean;
    onClick: MouseEventHandler;
    children: ReactNode;
}

export function PaymentMethod({ isActive, onClick, children }: PaymentMethodProps) {        
    return (
        <RadioBox 
            type="button"
            onClick={onClick}
            isActive={isActive}
        >
            { children }
        </RadioBox>
    )
}