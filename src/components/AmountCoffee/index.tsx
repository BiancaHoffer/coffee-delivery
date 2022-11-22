import { useContext } from 'react';
import { BiMinus, BiPlus } from "react-icons/bi";
import { CartContext } from '../../context/CartContext';
import { ContainerAmountCoffee } from './styles';

export function AmountCoffee() {
  return (
    <ContainerAmountCoffee>
        <button>
            <BiMinus size={16} color='#8047F8' />
        </button>
        <input 
          type="number" 
          //value={amount} 
          //onChange={e => setAmountCoffee(Number(e.target.value))}
          placeholder="0" 
        />
        <button>
            <BiPlus size={16} color='#8047F8' />
        </button>
    </ContainerAmountCoffee>
  );
}