import { HiOutlineLocationMarker } from 'react-icons/hi';

import { useFormContext } from 'react-hook-form';

import { 
    ContainerInputs,
    ContainerAddress,
    ContentInputComplement,
    InputComplement,
  } from "./styles";

import { Input } from '../../../../components/Input';
import { TitleCheckout } from '../../../../components/TitleCheckout';

interface ErrorsType {
  errors: {
    [key: string] : {
      message: string;
    }
  }
}

export function SessionAddress() {
  const { register, formState } = useFormContext();  

  const { errors } = formState as unknown as ErrorsType;
  
  return (
        <ContainerAddress>
          <TitleCheckout 
            title='Endereço de Entrega'
            subtitle='Informe o endereço onde deseja receber seu pedido '
            icon={<HiOutlineLocationMarker
              size={22}
              color='#C47F17'
              className="iconLocation"
            />}
          /> 

          <ContainerInputs>
            <Input 
              type="number" 
              placeholder="CEP"
              className="cep"
              {...register("cep")}
              error={errors.cep?.message}
            />
            <Input 
              placeholder="Rua"
              className="street"
              {...register("street")}
              error={errors.street?.message}
            />
            <Input 
              type="number"  
              placeholder="Número"
              className="number"
              {...register("number")}
              error={errors.number?.message}
            />
            <ContentInputComplement>
                <InputComplement
                  placeholder="Complemento"
                  className="complement"
                  {...register("complement")}
                />
                <p>Opcional</p>
            </ContentInputComplement>
            <Input 
              placeholder="Bairro"
              className="district"
              {...register("district")}
              error={errors.district?.message}
            />
            <Input 
              placeholder="Cidade"
              className="city"
              {...register("city")}
              error={errors.city?.message}
            />
            <Input 
              placeholder="UF" 
              className="uf"
              {...register("uf")}
              error={errors.uf?.message}
            />
          </ContainerInputs>
        </ContainerAddress>
    )
}