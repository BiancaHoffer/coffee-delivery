import { ReactNode } from 'react';
import { RadioBox } from './styles';

interface PaymentMethodProps {
    isActive: boolean;
    onClick: () => void;
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