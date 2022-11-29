import { 
  ContainerCoffeeSelected, 
  CardCoffeeSelected, 
  ContainerConfirmOrder,
  ContainerAmountCoffee,
  Price,
  TotalValue,
} from "./slyles";

import { CiTrash } from 'react-icons/ci'

import { NavLink } from "react-router-dom";
import { useCart } from "../../../../hooks/useCart";
import { BiMinus, BiPlus } from "react-icons/bi";

export function SessionCoffeeSelected() {
  const { cart, amount, amountState } = useCart();
  
  return (
    <ContainerCoffeeSelected>
      {cart.map((item) => {
        return (
          <CardCoffeeSelected key={item.id}>
            <img src={item.image} alt={`Imagem ${item.title}`} />
            <p>{item.title}</p>
            <div className="ContentAmountAndButtonRemove">
              <ContainerAmountCoffee>
                <button 
                  onClick={() => amountState(amount - 1)}
                  disabled={amount <= 1}
                >
                    <BiMinus size={16} />
                </button>
                <input 
                  type="number" 
                  value={item.amount}
                  readOnly
                />
                <button 
                  onClick={() => amountState(amount + 1)}
                >
                    <BiPlus size={16} />
                </button>
              </ContainerAmountCoffee>
  
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
