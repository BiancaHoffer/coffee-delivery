import {
  CoffeeSession,
  CoffeeList,
} from "./styles";

import { useState, useEffect } from 'react';

import { api } from "../../../../services/api";

import { formatPrice } from "../../../../utils/formatPrice";
import { useCart } from "../../../../hooks/useCart";
import { CoffeeCard } from "../CoffeeCard";
import { Product } from "../../../../@types/coffee";

export interface ProductFormatted extends Product {
  priceFormattd: string; 
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

  const { cart } = useCart();

  useEffect(() => {
    async function getProducts() {
       const response = await api.get<Product[]>('/coffees');

       const data = response.data.map(product => ({
        ...product, 
        priceFormattd: formatPrice(product.price),
       })) 
       
       setProducts(data);
    }
    getProducts();
   }, []);

  return (
    <CoffeeSession>
      <h1>Nossos cafés</h1>
      <CoffeeList>
        {products.map((product) => {
          return (
            <CoffeeCard key={product.id} product={product} />
          )
        })}
      </CoffeeList>
    </CoffeeSession>
  )
}