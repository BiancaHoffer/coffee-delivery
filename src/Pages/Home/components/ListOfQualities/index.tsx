import { FaBox } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import { RiTimer2Fill } from "react-icons/ri";
import { SiCoffeescript } from "react-icons/si";

import { ItemListOfQualities } from "../ItemListOfQualities";

import { ListContainer } from "./styles";

export function BannerListOfQualities() {
  return (
    <ListContainer>
      <ItemListOfQualities
        phrase="Compra simples e segura" 
        variant="yellowDark" 
        Icon={<IoCart size={16} />} 
      />
      <ItemListOfQualities
        phrase="Entrega rápida e rastreada" 
        variant="yellow" 
        Icon={<RiTimer2Fill size={16} />} 
      />
      <ItemListOfQualities
        phrase="Embalagem mantém o café intacto" 
        variant="gray" 
        Icon={<FaBox size={12} />} 
      />
      <ItemListOfQualities 
        phrase="O café chega fresquinho até você" 
        variant="purple" 
        Icon={<SiCoffeescript size={16} />}
      />
    </ListContainer>
  );
}