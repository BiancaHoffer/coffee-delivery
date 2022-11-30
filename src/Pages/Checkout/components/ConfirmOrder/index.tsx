import { useState } from 'react'
import { NavLink } from "react-router-dom";
import { useCart, Cart } from "../../../../hooks/useCart";
import { formatPrice } from "../../../../utils/formatPrice";
import { ContainerConfirmOrder, Price, TotalValue } from "./styles";
import { useFormContext } from 'react-hook-form';


export function ConfirmOrder() {
  const { totalProducts, totalShipping } = useCart();
  const { watch } = useFormContext();

  return (
    <ContainerConfirmOrder>
      <Price>
        <p>Total de itens </p>
        <p className="priceitem">{formatPrice(totalProducts)}</p>
      </Price>
      <Price>
        <p>Entrega</p>
        <p className="priceitem">R$ 3,50</p>
      </Price>
      <TotalValue>
        <p>Total</p>
        <p>{formatPrice(totalShipping)}</p>
      </TotalValue>
      <button type="submit"> 
          CONFIRMAR PEDIDO
      </button>
    </ContainerConfirmOrder>
  )
}