import { 
  ContainerCoffeeSelected, 
  CardCoffeeSelected, 
  ContainerConfirmOrder,
  Price,
  TotalValue,
} from "./slyles";

import { CiTrash } from 'react-icons/ci'

import { useCart } from "../../../../hooks/useCart";
import { AmountCoffee } from "../../../../components/AmountCoffee";

export function SessionCoffeeSelected() {
  const { cart, removeProductToCart, uptadeProductAmount } = useCart();

  const priceFormatted = cart.map(coffee => ({
    ...coffee,
    priceFormatted: new Intl.NumberFormat('pt-bt', {
      style: 'currency',
      currency: 'BRL'
    }).format(coffee.price),
    subTotal: new Intl.NumberFormat('pt-bt', {
      style: 'currency',
      currency: 'BRL'
    }).format(coffee.price * coffee.amount)
  }))

  const total = cart.reduce((sumTotal, coffee) => {
    return sumTotal + coffee.price * coffee.amount + 3.50
  }, 0)

  const totalFormatted = new Intl.NumberFormat('pt-bt', {
    style: 'currency',
    currency: 'BRL'
  }).format(total)


  function handleRemoveCoffeeToCart(id: number) {
    removeProductToCart(id)
  }

  return (
    <ContainerCoffeeSelected>
      {priceFormatted.map((item) => {
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
                onClick={() => handleRemoveCoffeeToCart(item.id)}
              >
                <CiTrash size={15} color='#8047F8' />
                REMOVER
              </button>
            </div>
            <span>{item.subTotal}</span>
          </CardCoffeeSelected>
        )
      })}
      <ContainerConfirmOrder>
        <Price>
          <p>Total de itens </p>
          <p className="priceitem">{totalFormatted}</p>
        </Price>
        <Price>
          <p>Entrega</p>
          <p className="priceitem">R$ 3,50</p>
        </Price>
        <TotalValue>
          <p>Total</p>
          <p>{totalFormatted}</p>
        </TotalValue>
        <button>CONFIRMAR PEDIDO</button>
      </ContainerConfirmOrder>
    </ContainerCoffeeSelected>
  )
}