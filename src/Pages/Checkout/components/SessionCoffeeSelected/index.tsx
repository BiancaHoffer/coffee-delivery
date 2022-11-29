import { 
  ContainerCoffeeSelected, 
  CardCoffeeSelected, 
  ContainerConfirmOrder,
  Price,
  TotalValue,
} from "./slyles";

import { CiTrash } from 'react-icons/ci'

import { AmountCoffee } from "../../../../components/AmountCoffee";
import { NavLink } from "react-router-dom";
import { useCart } from "../../../../hooks/useCart";

export function SessionCoffeeSelected() {
  const { cart } = useCart();
  
  return (
    <ContainerCoffeeSelected>
      {cart.map((item) => {
        return (
          <CardCoffeeSelected key={item.id}>
            <img src={item.image} alt={`Imagem ${item.title}`} />
            <p>{item.title}</p>
            <div className="ContentAmountAndButtonRemove">
              <AmountCoffee 
                coffee={item}
                value={item.amount}
                disabled={item.amount <= 1}
              />
              <button 
                className="buttonRemove" 
              >
                <CiTrash size={15} color='#8047F8' />
                REMOVER
              </button>
            </div>
            <span>...</span>
          </CardCoffeeSelected>
        )
      })}
      <ContainerConfirmOrder>
        <Price>
          <p>Total de itens </p>
          <p className="priceitem">{}</p>
        </Price>
        <Price>
          <p>Entrega</p>
          <p className="priceitem">R$ 3,50</p>
        </Price>
        <TotalValue>
          <p>Total</p>
          <p>{}</p>
        </TotalValue>
        <button>
          <NavLink to={'/checkout/success'}>
            CONFIRMAR PEDIDO
          </NavLink>
        </button>
      </ContainerConfirmOrder>
    </ContainerCoffeeSelected>
  )
}
