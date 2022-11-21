import { ItemListConfirmedOrder } from "./components/ItemListConfirmedOrder";
import { ContainerSuccess } from "./styles";

import { RiTimer2Fill } from "react-icons/ri";

export function Success() {
  return (
    <ContainerSuccess>
      <h1>Uhu! Pedido confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>

      <div>
        <ItemListConfirmedOrder variant="purple">
          <RiTimer2Fill size={16} />
        </ItemListConfirmedOrder>
      </div>
    </ContainerSuccess>
  );
}