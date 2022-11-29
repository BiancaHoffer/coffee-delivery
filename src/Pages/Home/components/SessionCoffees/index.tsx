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
import { BiMinus, BiPlus } from "react-icons/bi";
import { formatPrice } from "../../../../utils/formatPrice";
import { useCart, Cart } from "../../../../hooks/useCart";

export interface Product {
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
  amount: number;
}

interface ProductFormatted extends Product {
  priceFormattd: string; 
}

interface AmountStateProps {
  id: number;
}


interface CartItemsAmount {
  [key: number]: number;
}

export function SessionCoffees() {
   /*// listar quantiadade de itens por id
   const cartCoffeesAmount = cart.reduce((sumAmount, coffee: any) => {
    // criei novo objeto, ou seja uma cópia de sumAmount
    const copySumAmount = {...sumAmount};
    // pegando produto pelo id = pegando amount do café especifico
    copySumAmount[coffee.id] = coffee.amount;

    return copySumAmount;
  }, {} as CartItemsAmount)*/

  const [products, setProducts] = useState<ProductFormatted[]>([]);

  const { cart, addCart, amount, amountState} = useCart();

  useEffect(() => {
    async function getCoffes() {
       const response = await api.get<Product[]>('/coffees');

       const data = response.data.map(product => ({
        ...product, 
        priceFormattd: formatPrice(product.price),
       })) 
       
       setProducts(data);
    }
    getCoffes();
   }, []);

  function handleAddCart(id: number) {
    addCart(id)
  }

  return (
    <CoffeeSession>
      <h1>Nossos cafés</h1>
      <p>{JSON.stringify(cart)}</p>
      <ContainerCoffeeCard>
        {products.map((product) => {
          return (
            <ContentCoffeeCard key={product.id}>
              <img src={product.image} alt={`Imagem ${product.title}`} />
              <ContainerTag>
                <p className="tag">
                  {product.tags.tag1}
                </p>
                {product.tags.tag2 && (
                  <p className="tag">
                    {product.tags.tag2}
                  </p>
                )}
                {product.tags.tag3 && (
                  <p className="tag">
                    {product.tags.tag3}
                  </p>
                )}
              </ContainerTag>
              <h2>{product.title}</h2>
              <p className="description">
                {product.resume}
              </p>

              <GridAddCart>
                <p className="valueCoffe">
                  {product.priceFormattd}
                </p>
                <div className="contentAmountCoffeeAndButtonCart">
                  <ContainerAmountCoffee>
                    <button 
                      onClick={() => amountState(amount - 1)}
                      disabled={amount <= 1}>
                        <BiMinus size={16} />
                    </button>
                    <input 
                      type="number" 
                      value={amount}
                      readOnly
                    />
                    <button 
                      onClick={() => amountState(amount + 1)}
                    >
                        <BiPlus size={16} />
                    </button>
                  </ContainerAmountCoffee>
                  <ButtonCart 
                    variant="purple"
                    onClick={() => handleAddCart(product.id)}
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