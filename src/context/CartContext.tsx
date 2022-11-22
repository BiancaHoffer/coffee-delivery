import { createContext, ReactNode, useEffect, useState } from "react";
import { CoffeeData } from "../Pages/Home/components/SessionCoffees";
import { api } from "../services/api";

interface CartProviderProps {
    children: ReactNode;
}   

interface CartContextData {
    addCart: (productId: number) => void
}

export const CartContext = createContext({} as CartContextData);

export function CartProvider({ children }: CartProviderProps) {
    const [cart, setCart] = useState<CoffeeData[]>([]);

    console.log("cart:", cart)

    async function addCart(productId: number) {
        const updateCart = [...cart];
        
        // conferindo se já existe algum produto com mesmo ID. 
        const productExistis = updateCart.find(product => product.id === productId);

        console.log(productExistis)
    }

    return (
        <CartContext.Provider value={{ addCart }}>
            { children }
        </CartContext.Provider>
    )
}