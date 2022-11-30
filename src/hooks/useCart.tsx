import { createContext, ReactNode, useContext, useState } from "react";
import { produce } from 'immer';
import { api } from "../services/api";
import { Product } from "../@types/coffee";
import { toast } from "react-toastify";
import { formatPrice } from "../utils/formatPrice";

export interface Cart extends Product {
    amount: number;
  }

interface CartProviderProps {
    children: ReactNode;
}   

export interface UpdateAmountProps {
    id: number;
    type: "increment" | "decrement";
}

interface CartFormatted extends Cart{
      priceFormatted: string;
      subTotal: string;
  }

interface CartContextData {
    cart: Cart[];
    addCart: (product: Cart) => void;
    removeCart: (id: number) => void;
    updateAmount: (id: number, type:  "increment" | "decrement") => void;
    priceFormattedAndSubTotal: CartFormatted[];
    totalProducts: number;
    totalShipping: number;
} 

export const CartContext = createContext({} as CartContextData);

export function CartProvider({ children }: CartProviderProps) {
    const [cart, setCart] = useState<Cart[]>([]);

    const priceFormattedAndSubTotal = cart.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
        subTotal: formatPrice(product.price * product.amount),
     }));

    const totalProducts = 
            cart.reduce((sumTotal, product) => {
            return sumTotal + product.price * product.amount;
        }, 0)
       
    const totalShipping = totalProducts + 3.50;

    function addCart(product: Cart) {
        const copyCart = [...cart];

        const productIndex = copyCart.findIndex(cartItem => cartItem.id === product.id); 
        
        if (productIndex < 0) {
            copyCart.push(product);
            toast.success('Item adicinado no carrinho.');     
        } else {
            copyCart[productIndex].amount += product.amount;
        }

        setCart(copyCart);
    }

    function removeCart(id: number) {
        const copyCart = [...cart];
        const productIndex = copyCart.findIndex(cartItem => cartItem.id === id); 

        if (productIndex >= 0 ) {
            copyCart.splice(productIndex, 1)
            setCart(copyCart)
        } else {
            throw Error()
        }
    }
      
    function updateAmount(
        id: number,
        type: "increment" | "decrement"
    ) {
        const copyCart = [...cart];
        const productIndex = copyCart.findIndex(product => product.id === id);

        if (productIndex >= 0) {
            const item = copyCart[productIndex];
            copyCart[productIndex].amount = 
                type === "increment" ? item.amount + 1 : item.amount - 1;
        } else {
            throw Error();
        }

        setCart(copyCart);
    }

    return (
        <CartContext.Provider value={{ 
            cart, 
            addCart, 
            removeCart, 
            updateAmount, 
            priceFormattedAndSubTotal, 
            totalProducts, 
            totalShipping 
        }}>
            { children }
        </CartContext.Provider>
    )
}

export function useCart() {
    const context = useContext(CartContext);
    
    return context;
}