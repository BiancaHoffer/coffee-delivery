import { ItemListConfirmedOrder } from "./components/ItemListConfirmedOrder";
import { ContainerSuccess, InfosContainer, Infos } from "./styles";

import image from '../../assets/Illustration.svg'

import { RiTimer2Fill } from "react-icons/ri";
import { HiLocationMarker } from 'react-icons/hi';
import { FiDollarSign } from 'react-icons/fi'

export function Success() {
  return (
    <ContainerSuccess>
      <section>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p> 
        <InfosContainer>
          <Infos>
            <ItemListConfirmedOrder variant="purple">
            <HiLocationMarker size={16} color="FAFAFA" />
            </ItemListConfirmedOrder>
            <p>
              Entrega em <span>Rua João Daniel Martinelli, 102</span> <br/> 
              Farrapos - Porto Alegre, RS
            </p>
          </Infos>
          <Infos>
            <ItemListConfirmedOrder variant="yellow">
              <RiTimer2Fill size={16} color="FAFAFA"/>
            </ItemListConfirmedOrder>
            <p>
              Previsão de entrega <br/> 
              <span>20 min - 30 min</span>
            </p>
          </Infos>
          <Infos>
            <ItemListConfirmedOrder variant="yellowDark">
              <FiDollarSign size={16} color="FAFAFA" />
            </ItemListConfirmedOrder>
            <p>
              Pagamento na entrega <br />
              <span>Cartão de Crédito</span>
            </p>
          </Infos>
        </InfosContainer>
      </section>

      <section>
        <img 
          src={image}
          alt="Imagem de um homem levando um produto" 
        />
      </section>
    </ContainerSuccess>
  );
}