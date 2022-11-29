import { createContext, ReactNode, useContext, useState } from "react";
import { Product } from "../Pages/Home/components/SessionCoffees";
import { produce } from 'immer';
import { api } from "../services/api";

interface CartProviderProps {
    children: ReactNode;
}   

export interface Cart {
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

  interface  UpdateAmountProps {
    id: number;
    amount: number;
  }

  interface AmountStateProps {
    id: number;
    number: number
  }

  interface CartContextData {
    cart: Cart[];
    amount: number;
    amountState: (number: number) => void;
    addCart: (id: number) => Promise<void>;
    updateAmount: (props: UpdateAmountProps) => void;
}

export const CartContext = createContext({} as CartContextData);

export function CartProvider({ children }: CartProviderProps) {
    const [cart, setCart] = useState<Cart[]>([]);
    const [amount, setAmount] = useState(1);

    function amountState(number: number) {
        setAmount(number);
    }

    async function addCart(id: number) {
        const copyCart = [...cart];

        const productExists = copyCart.find(product => product.id === id); 
        
        const currentAmount = productExists ? productExists.amount : 0;

        const increment = currentAmount + 1;
        setAmount(increment)
        

        if (productExists) {
            productExists.amount = amount;
        } else {
            const product = await api.get(`/coffees/${id}`);

            const newProduct: Cart = {
                ...product.data,
                amount,
            };

            copyCart.push(newProduct);
        }

        setCart(copyCart);
    }

      

      function updateAmount({id, amount}: UpdateAmountProps) {
        if (amount <= 0) {
            return;
        }
       
        const copyCart = [...cart]
        const productExists = copyCart.find(product => product.id === id)

        if (productExists) {
            productExists.amount = amount;
        } else {
            throw Error;
        }
      }

    return (
        <CartContext.Provider value={{ cart, amount, amountState, addCart, updateAmount }}>
            { children }
        </CartContext.Provider>
    )
}

export function useCart() {
    const context = useContext(CartContext);
    
    return context;
}