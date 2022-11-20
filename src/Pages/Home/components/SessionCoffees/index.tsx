import {
  CoffeeSession,
  ContainerCoffeeCard, 
  ContentCoffeeCard, 
  ContainerTag, 
  GridAddCart,
} from "./styles";

import { IoCart } from "react-icons/io5";

import imageCoffee from '../../../../assets/coffee1.svg';

import { ButtonCart } from "../../../../components/ButtonCart";
import { AmountCoffee } from "../../../../components/AmountCoffee";

export function SessionCoffees() {
  return (
    <CoffeeSession>
      <h1>Nossos cafés</h1>

      <ContainerCoffeeCard>
        <ContentCoffeeCard>
          <img src={imageCoffee} />
          <ContainerTag>
            <p className="tag">
              TRADICIONAL
            </p>
          </ContainerTag>

          <h2>Expresso Tradicional</h2>
          <p className="description">
            O tradicional café feito com água quente e grãos moídos
          </p>

          <GridAddCart>
            <p className="valueCoffe">
              <span>R$</span>9,90
            </p>
            <div className="contentAmountCoffeeAndButtonCart">
              <AmountCoffee />
              <ButtonCart variant="purple">
                <IoCart size={22} color="#FAFAFA" />
              </ButtonCart>
            </div>
          </GridAddCart>
        </ContentCoffeeCard>
      </ContainerCoffeeCard>
    </CoffeeSession>
  )
}