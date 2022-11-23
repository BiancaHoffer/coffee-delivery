import { createContext, ReactNode, useEffect, useState } from "react";
import { CoffeeData } from "../Pages/Home/components/SessionCoffees";
import { api } from "../services/api";

interface CartProviderProps {
    children: ReactNode;
}   

interface CartContextData {
    cart: any;
    amount: number;
    addCoffeeToCart: (id: number) => void;
}

export const CartContext = createContext({} as CartContextData);

export function CartProvider({ children }: CartProviderProps) {
    const [cart, setCart] = useState<any>([]);
    const [amount, setAmount] = useState(1);

    /*function addToCart(product: any) {
        setCart((old: any) => ({...old, [product.id]: product}))
        console.log(cart)
    }*/

    async function addCoffeeToCart(id: number) {
        // não conseuigmos fazer manipulação direta do array dentro do estado
        // por isso precisamos fazer uma cópia do estado que vai armazenar o item do carinho
        const copyCart = [...cart];

        // agora, precisamos verificar se o item já existe no carrinho, utilizando find()
        const coffeeExistsInCart = copyCart.find((coffee: any) => coffee.id === id)

        // lógica para incrementar novo item
        const currentAmount = coffeeExistsInCart ? coffeeExistsInCart.amount : 0;
        const amountItem = currentAmount + 1 

        // se não encontrar nenhum item com o id selecionado pela função addCoffeeCart()
        // vai adicionar um novo objeto nesse array com o id que o usuário passou
        if (!coffeeExistsInCart) {
            const coffee = await api.get(`/coffees/${id}`);

            const newCoffee = {
                ...coffee.data,
                amount,
            };

            copyCart.push(newCoffee);
        } else {
            // se já existir este item no carrinho, pegamos a quantidade atual e adicionamos mais um
            coffeeExistsInCart.amount = amountItem;
        }

        // agora passamos para o estado os produtos que foram armazenados na copia do mew array o "copyCart"
        setCart(copyCart);
    }

    function amountState(id: number) {
        
    }

    function removeProductToCart(id: number) {

    }

    return (
        <CartContext.Provider value={{ amount, cart, addCoffeeToCart }}>
            { children }
        </CartContext.Provider>
    )
}