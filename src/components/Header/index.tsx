import { HeaderContainer, Localization, Cart } from "./styles";
import { HiLocationMarker } from 'react-icons/hi'
import { IoCart } from 'react-icons/io5';

import logo from '../../assets/Logo.svg';

export function Header() {
  return (
    <HeaderContainer>
      <nav>
        <img src={logo} alt="Logo Coffee Delivery" />

        <div>
          <Localization>
            <HiLocationMarker size={22} color='#8047F8' />
            Porto Alegre, SC
          </Localization>

          <Cart href="#">
            <IoCart size={22} color='#C47F17'/>
          </Cart>
        </div>
      </nav>
    </HeaderContainer> 
  );
}