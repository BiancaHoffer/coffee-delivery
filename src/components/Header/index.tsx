import { HeaderContainer, Localization, Cart } from "./styles";
import { HiLocationMarker } from 'react-icons/hi'
import { IoCart } from 'react-icons/io5';

import logo from '../../assets/Logo.svg';
import { ButtonCart } from "../ButtonCart";
import { NavLink } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

export function Header() {
  const { cart  } = useCart()
  const cartSize = cart.length; //quantos arrays cart possui  

  return (
    <HeaderContainer>
      <nav>
        <NavLink to="/" title="home">
          <img src={logo} alt="Logo Coffee Delivery" />
        </NavLink>
        
        <div>
          <Localization>
            <HiLocationMarker size={22} color='#8047F8' />
            Porto Alegre, SC
          </Localization>

          <ButtonCart variant="yellow">
            <NavLink to="/checkout" title="checkout">
              <IoCart size={22} color="#C47F17" /> 
              { !cartSize ? null :  <span>{cartSize}</span>}
            </NavLink>
          </ButtonCart> 
        </div>
      </nav>
    </HeaderContainer> 
  );
}