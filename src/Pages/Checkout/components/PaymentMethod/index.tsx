import { ReactNode, EventHandler, MouseEventHandler } from 'react';
import { useFormContext } from 'react-hook-form';
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