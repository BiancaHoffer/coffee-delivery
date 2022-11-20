import { useState } from 'react';

import { 
  CheckoutContainer, 
  AddressAndPaymentContainer, 
  CoffeeSelectedContainer
} from "./styles";


import { SessionPayment } from './components/SessionPayment';
import { SessionAddress } from './components/SessionAddress';
import { SessionCoffeeSelected } from './components/SessionCoffeeSelected';

export function Checkout() {
  return (
    <CheckoutContainer>
      <section>
        <h1>Complete seu pedido</h1>

        <AddressAndPaymentContainer>
          <SessionAddress />
          <SessionPayment />     
        </AddressAndPaymentContainer>
      </section>

      <section>
        <h1>Cafés selecionados</h1>
        <CoffeeSelectedContainer>
          <SessionCoffeeSelected />
        </CoffeeSelectedContainer>
      </section>
    </CheckoutContainer>
  );
}