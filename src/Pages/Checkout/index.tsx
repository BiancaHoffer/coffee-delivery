import { useState  } from 'react';

import { useForm, FormProvider } from 'react-hook-form';

import { toast } from 'react-toastify';

import { useNavigate } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';

import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';

import { SessionPayment } from './components/SessionPayment';
import { SessionAddress } from './components/SessionAddress';
import { SessionCoffeeSelected } from './components/SessionCoffeeSelected';

import { 
  CheckoutContainer, 
  AddressAndPaymentContainer, 
  CoffeeSelectedContainer
} from "./styles";

const newFormValidationSchema = zod.object({
  cep: zod.string().min(1, 'Informe o CEP'),
  street: zod.string().min(1, 'Informe a Rua'),
  number: zod.string().min(1, "Informe o Número"),
  complement: zod.string(),
  district: zod.string().min(1, "Informe o Bairro"),
  city: zod.string().min(1, "Informe a Cidade"),
  uf: zod.string().min(1, "Informe a UF"),
})

export type OrderData = zod.infer<typeof newFormValidationSchema>;

type NewFormData = OrderData;

export function Checkout() {
  const [dataForm, setDataForm] = useState<NewFormData>();

  const { clearCart } = useCart();
  const navigate = useNavigate();
    
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

  const { handleSubmit } = newForm;

  function handleNewForm(data: NewFormData) {
    if ( data !== undefined ) {
      setDataForm(data);
      clearCart();
      navigate('/checkout/success');
    } else {
      toast.error("Erro, tente novamente mais tarde.")
      return;
    } 
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