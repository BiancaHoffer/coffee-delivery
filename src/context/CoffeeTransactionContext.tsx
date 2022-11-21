import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";

export const CoffeeTransactionContext = createContext({} as CoffeeTransactionContextData);

interface CoffeeTransactionProviderProps {
    children: ReactNode;
}   

interface CoffeeTransactionContextData {
    amount: number;
    setAmountCoffee: (amount: number) => void;
}

export function CoffeeTransactionProvider({ children }: CoffeeTransactionProviderProps) {
    const [amount, setAmount] = useState(0);  
    const [coffees, setCoffees] = useState([])

    useEffect(() => {
     async function getCoffes() {
        const response = await api.get('/coffees');
        const data = await response.data;
        setCoffees(data);
     }

     getCoffes();
    }, [])

    console.log(coffees);


    function setAmountCoffee(amount: number) {
        setAmount(amount);
    }

    return (
        <CoffeeTransactionContext.Provider value={{ amount, setAmountCoffee }}>
            { children }
        </CoffeeTransactionContext.Provider>
    )
}