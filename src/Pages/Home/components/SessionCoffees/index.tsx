import {
  CoffeeSession,
  ContainerCoffeeCard, 
  ContentCoffeeCard, 
  ContainerTag, 
  GridAddCart,
} from "./styles";

import { useState, useEffect } from 'react';

import { IoCart } from "react-icons/io5";

import { ButtonCart } from "../../../../components/ButtonCart";
import { AmountCoffee } from "../../../../components/AmountCoffee";

import { CartContext } from "../../../../context/CartContext";
import { api } from "../../../../services/api";
import { useCart } from "../../../../hooks/useCart";

export interface CoffeeData {
  id: number;
  price: number;
  image: string;
  title: string;
  resume: string;
  tags: {
    tag1: string;
    tag2: string;
    tag3: string;
  };
  
}

interface newItemData {
  id: number;
  price: number;
  image: string;
  title: string;
  amount?: number;
}

export function SessionCoffees() {
  const [coffees, setCoffees] = useState<CoffeeData[]>([]);
  const [cart, setCart] = useState<newItemData[]>([]); // vazio
  const [coffeeIdSelected, setCoffeeIdSelected] = useState<number | null>(null);
  const [amount, setAmount] = useState(1);

  function addItemToCart(data: newItemData) {
    const newItem: newItemData  = {
      id: data.id,
      price: data.price,
      image: data.image,
      title: data.title,
      amount,
    }

    setCart(state => [...state, newItem]);
    setCoffeeIdSelected(data.id);

    console.log("cart:", cart)
    //console.log("items:", coffees)
    //console.log("id selecionado", coffeeIdSelected)
  }

  useEffect(() => {
    async function getCoffes() {
       const response = await api.get('/coffees');
       const data = await response.data;
       setCoffees(data);
    }
    getCoffes();
   }, []);


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
                  <span>R$</span>{coffee.price}
                </p>
                <div className="contentAmountCoffeeAndButtonCart">
                  <AmountCoffee />
                  <button 
                    //variant="purple"
                    onClick={() => addItemToCart(coffee)}
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