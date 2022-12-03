import { BiMinus, BiPlus } from 'react-icons/bi';
import { CiTrash } from 'react-icons/ci';
import { useCart } from '../../../../hooks/useCart';
import { CardCoffeeSelected, ContainerAmountCoffee } from './styles';

interface CartFormatted {
  id: number;
    price: number;
    image: string;
    title: string;
    resume: string;
    tags: string[];
    amount: number;
    priceFormatted: string;
    subTotal: string;
}

interface CoffeeSelectedProps {
  item: CartFormatted;
}


export function CoffeeSelected({ item }: CoffeeSelectedProps) {
  const { removeCart, updateAmount } = useCart();

  function handleRemoveItem(id: number) {
    removeCart(id)
  }

  function handleIncrement(id: number) {
    updateAmount(id, "increment");
  }

  function handleDecrement(id: number) {
    updateAmount(id, "decrement");
  }
  
  return (
    <CardCoffeeSelected>
      <img src={item.image} alt={`Imagem ${item.title}`} />
      <p>{item.title}</p>
      <div className="ContentAmountAndButtonRemove">
        <ContainerAmountCoffee>
          <button
            type='button'
            onClick={() => handleDecrement(item.id)}
            disabled={item.amount <= 1}
          >
            <BiMinus size={16} />
          </button>
          <input
            type="number"
            value={item.amount}
            readOnly
          />
          <button
            type='button'
            onClick={() => handleIncrement(item.id)}
          >
            <BiPlus size={16} />
          </button>
        </ContainerAmountCoffee>

        <button
          className="buttonRemove"
          type='button'
          onClick={() => handleRemoveItem(item.id)}
        >
          <CiTrash size={15} color='#8047F8' />
          REMOVER
        </button>
      </div>
      <span>{item.subTotal}</span>
    </CardCoffeeSelected>
  )
}