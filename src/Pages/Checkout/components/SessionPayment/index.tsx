import { useState } from 'react';

import { BsCurrencyDollar } from 'react-icons/bs'
import { PaymentMethod } from '../PaymentMethod';

import { CiCreditCard2 } from 'react-icons/ci'
import { CiMoneyBill } from 'react-icons/ci';

import { 
    DivPayment,
    TitlePayment,
    ContentPaymentMethod,
  } from "./styles";

export function SessionPayment() {
  const [typePayment, setTypePayment] = useState<'creditCard' | 'debitCard' | 'money'>('creditCard');
  
    return (
        <DivPayment>
          <TitlePayment>
            <BsCurrencyDollar
              size={22} 
              color='#8047F8'
              className="iconPayment" 
            />
            <h2>Pagamento</h2>
            <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
          </TitlePayment>

          <ContentPaymentMethod>
            <PaymentMethod 
              onClick={() => setTypePayment('creditCard')}
              isActive={typePayment === 'creditCard'}
            >
              <CiCreditCard2 size={16} color='#8047F8' /> 
              CARTÃO DE CRÉDITO
            </PaymentMethod>

            <PaymentMethod 
              onClick={() => setTypePayment('debitCard')}
              isActive={typePayment === 'debitCard'}
            >
              <CiCreditCard2 size={16} color='#8047F8' /> 
              CARTÃO DE DÉBITO
            </PaymentMethod>

            <PaymentMethod 
              onClick={() => setTypePayment('money')}
              isActive={typePayment === 'money'}
            >
              <CiMoneyBill size={16} color='#8047F8' />
              DINHEIRO
            </PaymentMethod>
          </ContentPaymentMethod>
        </DivPayment>
  );
}