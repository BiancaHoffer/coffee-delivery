import {
  CoffeeSession,
  CoffeeList,
} from "./styles";

import { useState, useEffect, CSSProperties } from 'react';

import { toast } from "react-toastify";

import { api } from "../../../../services/api";

import { formatPrice } from "../../../../utils/formatPrice";
import { CoffeeCard } from "../CoffeeCard";
import { Product } from "../../../../@types/coffee";
import { Loading } from "../../../../components/Loading";

export interface ProductFormatted extends Product {
  priceFormattd: string; 
}

// interface CartItemsAmount {
//  [key: number]: number;
//}

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getProducts() {
      setLoading(true);
      try {
       const response = await api.get<Product[]>('/coffees');

       const data = response.data.map(product => ({
        ...product, 
        priceFormattd: formatPrice(product.price),
       })) 
       
       setProducts(data);
      } catch (error) {
        toast.error("Erro ao renderizar lista de cafés, tente novamente mais tarde.")

        setLoading(false);
      } finally {
        setLoading(false);
      }
    }
    getProducts();
   }, []);

   if (loading) {
    return (
      <CoffeeSession>
        <h1>Nossos cafés</h1>
        <Loading />
      </CoffeeSession>
    )
   }

  return (
    <CoffeeSession>
      <h1>Nossos cafés</h1>
      <CoffeeList>
        {products.map((product) => {
          return (
            <>
              <CoffeeCard key={product.id} product={product} />
            </>  
          )
        })}
      </CoffeeList>
    </CoffeeSession>
  )
}