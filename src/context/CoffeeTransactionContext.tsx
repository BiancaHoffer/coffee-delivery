import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";

export const CoffeeTransactionContext = createContext({} as CoffeeTransactionContextData);

interface CoffeeTransactionProviderProps {
    children: ReactNode;
}   

interface CoffeeData {
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

interface CoffeeTransactionContextData {
    amount: number;
    setAmountCoffee: (amount: number) => void;
    coffees: CoffeeData[];
}

export function CoffeeTransactionProvider({ children }: CoffeeTransactionProviderProps) {
    const [amount, setAmount] = useState(0);  
    const [coffees, setCoffees] = useState<CoffeeData[]>([]);

    useEffect(() => {
     async function getCoffes() {
        const response = await api.get('/coffees');
        const data = await response.data;
        setCoffees(data);
     }

     getCoffes();
    }, []);


    /*console.log(coffees.map(coffee => {
        return {
            id: coffee.id,
            price: coffee.price,
            title: coffee.title,
            resume: coffee.resume,
            tags: coffee.tags.tag2
        }
    }));*/

    function setAmountCoffee(amount: number) {
        setAmount(amount);
    }

    return (
        <CoffeeTransactionContext.Provider value={{ amount, setAmountCoffee, coffees }}>
            { children }
        </CoffeeTransactionContext.Provider>
    )
}