import { useState } from 'react';

import { BsCurrencyDollar } from 'react-icons/bs'
import { PaymentMethod } from '../PaymentMethod';

import { CiCreditCard2 } from 'react-icons/ci'
import { CiMoneyBill } from 'react-icons/ci';

import { 
    DivPayment,
    ContentPaymentMethod,
  } from "./styles";
  
import { TitleCheckout } from '../../../../components/TitleCheckout';

export function SessionPayment() {
  const [typePayment, setTypePayment] = useState<'creditCard' | 'debitCard' | 'money'>('creditCard');
  
    return (
        <DivPayment>
          <TitleCheckout 
            title='Pagamento'
            subtitle='O pagamento é feito na entrega. Escolha a forma que deseja pagar'
            icon={<BsCurrencyDollar
              size={22} 
              color='#8047F8'
              className="iconPayment" 
            />}
          />

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