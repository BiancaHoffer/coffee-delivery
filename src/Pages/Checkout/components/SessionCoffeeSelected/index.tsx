import { 
  ContainerCoffeeSelected, 
  CardCoffeeSelected, 
  ContainerConfirmOrder,
  Price,
  TotalValue
} from "./slyles";

import { CiTrash } from 'react-icons/ci'

import imageCoffee from '../../../../assets/coffee1.svg';
import { AmountCoffee } from "../../../../components/AmountCoffee";
import { useCart } from "../../../../hooks/useCart";

export function SessionCoffeeSelected() {
  const { cart, removeProductToCart } = useCart();

  function handleProductToCart(id: number) {
    removeProductToCart(id)
  }

  return (
    <ContainerCoffeeSelected>
      {cart.map((item) => {
        return (
          <CardCoffeeSelected key={item.id}>
            <img src={item.image} alt={`Imagem ${item.title}`} />
            <p>{item.title}</p>
            <div className="ContentAmountAndButtonRemove">
              <AmountCoffee />
              <button 
                className="buttonRemove" 
                onClick={() => handleProductToCart(item.id)}
              >
                <CiTrash size={15} color='#8047F8' />
                REMOVER
              </button>
            </div>
            <span>R$ 9.90</span>
          </CardCoffeeSelected>
        )
      })}
      

      <ContainerConfirmOrder>
        <Price>
          <p>Total de itens </p>
          <p className="priceitem">R$ 29,70</p>
        </Price>
        <Price>
          <p>Entrega</p>
          <p className="priceitem">R$ 3,50</p>
        </Price>
        <TotalValue>
          <p>Total</p>
          <p>R$ 33,20</p>
        </TotalValue>
        <button>CONFIRMAR PEDIDO</button>
      </ContainerConfirmOrder>
    </ContainerCoffeeSelected>
  )
}