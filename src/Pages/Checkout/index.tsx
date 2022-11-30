import { useState, FormEvent } from 'react';

import { 
  CheckoutContainer, 
  AddressAndPaymentContainer, 
  CoffeeSelectedContainer
} from "./styles";

import { useForm, FormProvider } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';

import { SessionPayment } from './components/SessionPayment';
import { SessionAddress } from './components/SessionAddress';
import { SessionCoffeeSelected } from './components/SessionCoffeeSelected';



const newFormValidationSchema = zod.object({
  cep: zod.string().max(8, 'Informe o CEP').min(8, 'Informe o CEP'),
  street: zod.string().min(1, 'Informe a rua'),
  number: zod.string().min(1, "Informe o número da casa"),
  complement: zod.string().min(3).optional(),
  district: zod.string().min(1, "Informe o bairro"),
  city: zod.string().min(1, "Informe o bairro"),
  uf: zod.string().min(1, "Informe o estado").max(2, "Informe o estado"),
})

export type OrderData = zod.infer<typeof newFormValidationSchema>

type NewFormData = OrderData

export function Checkout() {
  const newForm = useForm<NewFormData>({
    resolver: zodResolver(newFormValidationSchema),
    defaultValues: {
      cep: '',
      complement: '',
      city: '',
      number: '',
      district: '',
      street: '',
      uf: '',
    }
  })

  const { handleSubmit, register, watch, reset } = newForm;

  function handleNewForm(data: NewFormData) {
    console.log(data);
  }
  
  return (
    <CheckoutContainer onSubmit={handleSubmit(handleNewForm)}>
      <FormProvider {...newForm}>
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
      </FormProvider>
    </CheckoutContainer>
  );
}