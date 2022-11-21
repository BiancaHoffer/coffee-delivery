import { useContext } from 'react';
import { BiMinus, BiPlus } from "react-icons/bi";
import { CoffeeTransactionContext } from '../../context/CoffeeTransactionContext';
import { ContainerAmountCoffee } from './styles';

export function AmountCoffee() {
  const { amount, setAmountCoffee } = useContext(CoffeeTransactionContext);
  
  return (
    <ContainerAmountCoffee>
        <button onClick={() => setAmountCoffee(amount - 1)}>
            <BiMinus size={16} color='#8047F8' />
        </button>
        <input 
          type="number" 
          value={amount} 
          onChange={e => setAmountCoffee(Number(e.target.value))}
          placeholder="0" 
        />
        <button onClick={() => setAmountCoffee(amount + 1)}>
            <BiPlus size={16} color='#8047F8' />
        </button>
    </ContainerAmountCoffee>
  );
}