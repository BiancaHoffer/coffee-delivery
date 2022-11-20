import { BiMinus, BiPlus } from "react-icons/bi";
import { ContainerAmountCoffee } from './styles';

export function AmountCoffee() {
  return (
    <ContainerAmountCoffee>
        <button>
            <BiMinus size={16} color='#8047F8' />
        </button>
        <input type="number"></input>
        <button>
            <BiPlus size={16} color='#8047F8' />
        </button>
    </ContainerAmountCoffee>
  );
}