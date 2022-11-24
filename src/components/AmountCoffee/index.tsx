import { useContext, useEffect } from 'react';
import { BiMinus, BiPlus } from "react-icons/bi";
import { useCart } from '../../hooks/useCart';
import { api } from '../../services/api';
import { ContainerAmountCoffee } from './styles';

interface CartItemsAmount {
  [key: number]: number;
}

export function AmountCoffee(coffeeId: any) {
  const { cart } = useCart();
  
 // listar quantiadade de itens por id
 const cartCoffeesAmount = cart.reduce((sumAmount: any, coffee: any) => {
  // criei novo objeto, ou seja uma cópia de sumAmount
  const copySumAmount = {...sumAmount};
  // pegando produto pelo id = pegando amount do café especifico
  copySumAmount[coffee.id] = coffee.amount;

  return copySumAmount;
}, {} as CartItemsAmount)


  return (
    <ContainerAmountCoffee>
        <button >
            <BiMinus size={16} color='#8047F8' />
            
        </button>
        <p></p>
        <input 
          //type="number" 
          //value={cartCoffeesAmount[coffeeId] || 0} 
          //onChange={e => amountState(Number(e.target.value))}
          //placeholder="0" 
        />

        <input value={cartCoffeesAmount[coffeeId] || 0 } />
        <button >
            <BiPlus size={16} color='#8047F8' />
        </button>
    </ContainerAmountCoffee>
  );
}