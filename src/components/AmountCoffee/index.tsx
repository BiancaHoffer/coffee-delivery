import { useState } from 'react';
import { BiMinus, BiPlus } from "react-icons/bi";
import { Coffee } from '../../@types/types';
import { useCart } from '../../hooks/useCart';
import { ContainerAmountCoffee } from "./styles";

interface AmountCoffeeProps {
    value: number;
    coffee: Coffee;
    disabled?: boolean;
}

export function AmountCoffee({ value, coffee, disabled }: AmountCoffeeProps) {
    const { cart, uptadeProductAmount } = useCart();

    function handleCoffeeIncrement(coffee: Coffee) {
    uptadeProductAmount({ id: coffee.id, amount: coffee.amount + 1 })
    }

    function handleCoffeeDecrement(coffee: Coffee) {
    uptadeProductAmount({ id: coffee.id, amount: coffee.amount - 1 })
      }

    return (
    <ContainerAmountCoffee>
        <button onClick={() => handleCoffeeDecrement(coffee)} disabled={disabled}>
              <BiMinus size={16} />  
        </button>
        <input 
            type="number" 
            value={value} 
        />
        <button onClick={() => handleCoffeeIncrement(coffee)}>
            <BiPlus size={16} />
        </button>
    </ContainerAmountCoffee>
  );
}