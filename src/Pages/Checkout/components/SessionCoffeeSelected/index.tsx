import { 
  ContainerCoffeeSelected, 
} from "./slyles";

import { useCart } from "../../../../hooks/useCart";

import { CoffeeSelected } from "../CoffeeSelected";
import { ConfirmOrder } from "../ConfirmOrder";

export function SessionCoffeeSelected() {
  const { cart, priceFormattedAndSubTotal } = useCart();

  const itemExists = cart.length;

  if (!itemExists) {
    return (
      <ContainerCoffeeSelected>
        <p>Seu carrinho está vazio 😔</p>
      </ContainerCoffeeSelected>
    )
  }

  return (
    <ContainerCoffeeSelected>
      {priceFormattedAndSubTotal.map((item) => {
        return (
          <CoffeeSelected key={item.id} item={item} />
        )
      })}
      
      <ConfirmOrder />
    </ContainerCoffeeSelected>
  )
}
