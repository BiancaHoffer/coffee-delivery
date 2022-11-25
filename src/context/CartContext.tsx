import { createContext, ReactNode, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Coffee } from "../@types/types";
//import { CoffeeData } from "../Pages/Home/components/SessionCoffees";
import { api } from "../services/api";

interface CartProviderProps {
    children: ReactNode;
}   

interface uptadeProductAmountProps {
    id: number;
    amount: number;
}

interface CartContextData {
    cart: Coffee[];
    amount: number;
    addCoffeeToCart: (id: number) => void;
    removeProductToCart: (id: number) => void;
    uptadeProductAmount: (props: uptadeProductAmountProps) => void
}

export const CartContext = createContext({} as CartContextData);

export function CartProvider({ children }: CartProviderProps) {
    const [cart, setCart] = useState<Coffee[]>(() => {
    // guardar itens do carrinho no localstorage na chave @CoffeeDelivery:cart'
    const storagedCart = localStorage.getItem('@CoffeeDelivery:cart');
    
    // se tiver item, retornar o array convertido em JSON.parse. JSON.parse retorna em valor original, ou seja, um array
    if (storagedCart) {
        return JSON.parse(storagedCart);
    }    

    // se for nulo, ou seja, se o carrinho(cart) estiver vazio, retorna "null";
    return [];
    });
    const [amount, setAmount] = useState(1); // uso do estado pois não há estoque. 

    /*function addToCart(product: any) {
        setCart((old: any) => ({...old, [product.id]: product}))
        console.log(cart)
    }*/

    async function addCoffeeToCart(id: number) {
        try {
            // copyCart é um novo array com valores de cart. Qualquer alteração feita nele
            // não afeta o cart 
            const copyCart = [...cart];

            // agora, precisamos verificar se o item já existe no carrinho, utilizando find()
            const coffeeExistsInCart = copyCart.find((coffee) => coffee.id === id)

            // lógica para incrementar novo item
            // currentamount é a quantidade atual de produto no carrinho.
            // se o produto existe, pegamos o amount dele, denão a quantidade é zero. 
            const currentAmount = coffeeExistsInCart ? coffeeExistsInCart.amount : 0;
            // quantidade desejada, a atual + 1
            const amountItem = currentAmount + 1 

            // se o produto existe, vamos conseguir atualizar a quantidade dele 
            if (coffeeExistsInCart) {
                coffeeExistsInCart.amount = amountItem;
            } else {
                // se não axiste vai ser adicionado no carrinho
                const coffee = await api.get(`/coffees/${id}`);

                const newCoffee = {
                    ...coffee.data,
                    amount,
                };

                copyCart.push(newCoffee);
            }

            // agora perpetuamos todas as lógias realizadas em copyCart
            setCart(copyCart);
            // adicionando array no local storage
            localStorage.setItem('@CoffeeDelivery:cart', JSON.stringify(copyCart));
        } catch {
            toast.error('Erro na adição do produto')
        }
    }

    function removeProductToCart(id: number) {
        try {
            // primeiro precisamos verificar se ele existe no carrinho
            
            // criamos uma cópia do array cart
            const copyCart = [...cart];

            //uso o findIndex para ter acesso ao método splice, para poder remover do array
            const productIndex = copyCart.findIndex(coffee => coffee.id === id)

            // se encontrou o item podemos realizar a remoção, podemos fazer isso com o splice() pois utilizaos o findindex
            if (productIndex >= 0 ) {
                // aqui pegamos a cópia do array, encontramos o id selecionado pelo index e apagamos 1 item por vez
                copyCart.splice(productIndex, 1);
                setCart(copyCart);
                localStorage.setItem('@CoffeeDelivery:cart', JSON.stringify(copyCart));
            } else {
                // se não encontrar forçar um erro
                throw Error();
            }
        } catch {
            toast.error('Houve um erro ao adicionar o item no carrinho. ')
        }
    }

    async function uptadeProductAmount({id, amount}: uptadeProductAmountProps) {
        try {
            if (amount <= 0 ) {
                return;
            }

            const copyCart = [...cart];
            const coffeeExistsInCart = copyCart.find((coffee) => coffee.id === id);

            // verificar se produto existe no carrinho
            if (coffeeExistsInCart) {
                // coffeeExistsInCart.amount recebe amount
                coffeeExistsInCart.amount = amount;
                setCart(copyCart);
                localStorage.setItem('@CoffeeDelivery:cart', JSON.stringify(copyCart));
            } else {
                throw Error();
            }

        } catch {
            toast.error('Erro na alteração de quantidade do produto');
        }
    }

    return (
        <CartContext.Provider value={{ amount, cart, addCoffeeToCart, removeProductToCart, uptadeProductAmount }}>
            { children }
        </CartContext.Provider>
    )
}