import {
  CoffeeSession,
  ContainerCoffeeCard, 
  ContentCoffeeCard, 
  ContainerTag, 
  GridAddCart,
} from "./styles";

import { useContext } from 'react'

import { IoCart } from "react-icons/io5";

import { ButtonCart } from "../../../../components/ButtonCart";
import { AmountCoffee } from "../../../../components/AmountCoffee";

import { CartContext } from "../../../../context/CartContext";

export function SessionCoffees() {
  const { coffees, addCoffee } = useContext(CartContext)

  function handleAddCoffee(id: number){
    addCoffee(id);
  }

  return (
    <CoffeeSession>
      <h1>Nossos cafés</h1>

      <ContainerCoffeeCard>
        {coffees.map(coffee => {
          return (
            <ContentCoffeeCard key={coffee.id}>
              <img src={coffee.image} alt={`Imagem ${coffee.title}`} />
              <ContainerTag>
                <p className="tag">
                  {coffee.tags.tag1}
                </p>
                {coffee.tags.tag2 && (
                  <p className="tag">
                    {coffee.tags.tag2}
                  </p>
                )}
                {coffee.tags.tag3 && (
                  <p className="tag">
                    {coffee.tags.tag3}
                  </p>
                )}
              </ContainerTag>

              <h2>{coffee.title}</h2>
              <p className="description">
                {coffee.resume}
              </p>

              <GridAddCart>
                <p className="valueCoffe">
                  <span>R$</span>{coffee.price}
                </p>
                <div className="contentAmountCoffeeAndButtonCart">
                  <AmountCoffee />
                  <button 
                    //variant="purple"
                    onClick={() => handleAddCoffee(coffee.id)}
                  
                  >
                    <IoCart size={22} color="#FAFAFA" />
                  </button>
                </div>
              </GridAddCart>
            </ContentCoffeeCard>
          )
        })}
        
      </ContainerCoffeeCard>
    </CoffeeSession>
  )
}