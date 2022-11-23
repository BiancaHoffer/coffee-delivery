import { useContext, useEffect } from 'react';
import { BiMinus, BiPlus } from "react-icons/bi";
import { useCart } from '../../hooks/useCart';
import { api } from '../../services/api';
import { ContainerAmountCoffee } from './styles';

export function AmountCoffee() {
const { cart } = useCart();

// const amountCart = cart.map((a: any) => {return (a.amount)})

/*
  useEffect(() => {
    async function getCoffesId() {
      const response = await api.get(`/coffees/1`);
      const dataCoffees = await response.data;
      console.log(dataCoffees)
    }

    getCoffesId();
  }, [amountState])*/
  
  return (
    <ContainerAmountCoffee>
        <button >
            <BiMinus size={16} color='#8047F8' />
            
        </button>
        <input 
          type="number" 
          // value={amountCart} 
          //onChange={e => amountState(Number(e.target.value))}
          placeholder="0" 
        />
        <button >
            <BiPlus size={16} color='#8047F8' />
        </button>
    </ContainerAmountCoffee>
  );
}