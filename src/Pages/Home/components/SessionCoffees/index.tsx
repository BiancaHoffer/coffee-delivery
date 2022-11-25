import {
  CoffeeSession,
  ContainerCoffeeCard, 
  ContentCoffeeCard, 
  ContainerTag, 
  GridAddCart,
  ContainerAmountCoffee,
} from "./styles";

import { useState, useEffect } from 'react';

import { IoCart } from "react-icons/io5";

import { ButtonCart } from "../../../../components/ButtonCart";

import { api } from "../../../../services/api";
import { useCart } from "../../../../hooks/useCart";
import { Coffee } from "../../../../@types/types";
import { BiMinus, BiPlus } from "react-icons/bi";
import { AmountCoffee } from "../../../../components/AmountCoffee";

interface CoffeeFormattedPrice extends Coffee {
  priceFormattd: string; 
}

interface CartItemsAmount {
  [key: number]: number;
}

export function SessionCoffees() {
  const [coffees, setCoffees] = useState<CoffeeFormattedPrice[]>([]);

  const { cart, addCoffeeToCart } = useCart();

   // listar quantiadade de itens por id
   const cartCoffeesAmount = cart.reduce((sumAmount: any, coffee: any) => {
    // criei novo objeto, ou seja uma cópia de sumAmount
    const copySumAmount = {...sumAmount};
    // pegando produto pelo id = pegando amount do café especifico
    copySumAmount[coffee.id] = coffee.amount;

    return copySumAmount;
  }, {} as CartItemsAmount)

  useEffect(() => {
    async function getCoffes() {
       const response = await api.get<Coffee[]>('/coffees');

       const data  = response.data.map(product => ({
        ...product, 
        priceFormattd: new Intl.NumberFormat('pt-bt', {
          style: 'currency',
          currency: 'BRL'
        }).format(product.price)
       })) 
       
       setCoffees(data);
    }
    getCoffes();
   }, []);

   function handleAddCoffee(id: number) {
    addCoffeeToCart(id)
   }

  return (
    <CoffeeSession>
      <h1>Nossos cafés</h1>
      <ContainerCoffeeCard>
        {coffees.map((coffee) => {
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
                  {coffee.priceFormattd}
                </p>
                <div className="contentAmountCoffeeAndButtonCart">
                  <ContainerAmountCoffee>
                    <button disabled={true}>
                        <BiMinus size={16} />
                    </button>
                    <input 
                      type="number" 
                      value={cartCoffeesAmount[coffee.id] || 0} 
                    />
                    <button disabled={true}>
                        <BiPlus size={16} />
                    </button>
                  </ContainerAmountCoffee>
                  <ButtonCart 
                    variant="purple"
                    onClick={() => handleAddCoffee(coffee.id)}
                  >
                    <IoCart size={22} color="#FAFAFA" />
                  </ButtonCart>
                </div>
              </GridAddCart>
            </ContentCoffeeCard>
          )
        })}
      </ContainerCoffeeCard>
    </CoffeeSession>
  )
}