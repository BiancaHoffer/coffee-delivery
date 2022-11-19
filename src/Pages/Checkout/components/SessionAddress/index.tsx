import { HiOutlineLocationMarker } from 'react-icons/hi';

import { 
    ContainerInputs,
    ContainerAddress,
    TitleAddress,
    InputCEP,
    InputNumber,
    InputDistrict,
    InputCity,
    ContentInputComplement,
    InputComplement,
    InputRoad,
    InputUF
  } from "./styles";

export function SessionAddress() {
    return (
        <ContainerAddress>
          <TitleAddress>
            <HiOutlineLocationMarker 
              size={22} 
              color='#C47F17' 
              className="iconLocation" 
            />
            <h2>Endereço de Entrega</h2>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </TitleAddress>   
        
          <ContainerInputs>
            <InputCEP placeholder='CEP'/>
            <InputRoad placeholder='Rua' />
            <InputNumber placeholder='Número' />
            <ContentInputComplement>
                <InputComplement placeholder='Complemento' />
                <p>Opcional</p>
            </ContentInputComplement>
            <InputDistrict placeholder='Bairro' />
            <InputCity placeholder='Cidade' />
            <InputUF placeholder='UF' />
          </ContainerInputs>
        </ContainerAddress>
    )
}