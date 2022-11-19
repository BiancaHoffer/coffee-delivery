import { useState } from 'react'

import { IoCart } from "react-icons/io5";
import { BiMinus, BiPlus } from 'react-icons/bi'

import image from '../../assets/Imagem.svg';
import imageCoffee from '../../assets/coffee1.svg';

import { ListOfQualities } from "./components/ListOfQualities";

import { HomeContainer, MainContent, MainSession, CoffeeSession, CoffeeCard, CoffeeContent, CoffeeBuy } from "./styles";

export function Home() {
  const [amount, setAmount] = useState(0);
  
  return (
    <HomeContainer>
      <MainSession>
        <MainContent>
          <div>
            <section className="contentText">
              <h1>
                Encontre o café perfeito <br />
                para qualquer hora do dia
              </h1>
              <p>
                Com o Coffee Delivery você recebe seu café onde estiver, a <br />
                qualquer hora
              </p>
            </section>
            
            <ListOfQualities />   
          </div>

          <div className="contentImage">
            <img src={image} alt="Imagem café" />
          </div>
        </MainContent>
      </MainSession>
    

    <CoffeeSession>
      <h1>Nossos cafés</h1>
      <CoffeeContent>
        <CoffeeCard>
          <img src={imageCoffee} />
          <div className="tags">
            TRADICIONAL
          </div>
          <h2>Café com leite</h2>
          <p>O tradicional café feito com água quente e grãos moídos</p>
            
          <CoffeeBuy>
            <p>
              <span>R$</span>9.90
            </p>

            <div>
              <div className="contentAmount">
                <button
                  onClick={() => setAmount(amount - 1)}
                >
                  <BiMinus size={16} color='#8047F8' />
                </button>
                <input 
                  type="number" 
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                />
                <button
                  onClick={() => setAmount(amount + 1)}
                >
                  <BiPlus size={16} color='#8047F8' />
                </button>
              </div>

              <button>
                <IoCart size={20} />
              </button>
            </div>
          </CoffeeBuy>
        </CoffeeCard>
      </CoffeeContent>
    </CoffeeSession>
    </HomeContainer>
  );
}