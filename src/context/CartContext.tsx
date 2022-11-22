import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";

interface CartProviderProps {
    children: ReactNode;
}   

interface Coffee {
    id: number;
    price: number;
    image: string;
    title: string;
    resume: string;
    tags: {
        tag1: string;
        tag2?: string;
        tag3?: string;
    };
}

interface CartContextData {
    amount: number;
    setAmountCoffee: (amount: number) => void;
    coffees: Coffee[];
    addCoffee: (coffeeId: number) => Promise<void>;
}

export const CartContext = createContext({} as CartContextData);

export function CartProvider({ children }: CartProviderProps) {
    const [amount, setAmount] = useState(0);  
    const [coffees, setCoffees] = useState<Coffee[] >([]);


    async function addCoffee(coffeeId: number) {
        try {
            // selecionar café escolhido
            const coffeeSelected = coffees.find(coffee => coffee.id === coffeeId);    
        } catch (error) {
            console.log(error)
        }
    }

    // setAmount 
    function setAmountCoffee(amount: number) {
           setAmount(amount); 
    }

    // render coffees
    useEffect(() => {
     async function getCoffes() {
        const response = await api.get('/coffees');
        const data = await response.data;
        setCoffees(data);
     }

     getCoffes();
    }, []);

    return (
        <CartContext.Provider value={{ amount, setAmountCoffee, coffees, addCoffee }}>
            { children }
        </CartContext.Provider>
    )
}