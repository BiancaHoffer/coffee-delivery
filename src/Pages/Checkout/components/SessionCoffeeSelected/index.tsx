import { ContainerCoffeeSelected, CardCoffeeSelected, AmountCoffee, ContainerAmountCoffeeButtonRemove } from "./slyles";

import { CiTrash } from 'react-icons/ci'

import imageCoffee from '../../../../assets/coffee1.svg';
import { BiMinus, BiPlus } from "react-icons/bi";

export function SessionCoffeeSelected() {
    return (
        <ContainerCoffeeSelected>
            <CardCoffeeSelected>
                <img src={imageCoffee} alt="Imagem expresso tradicional" />
                
                <p>Expresso Tradicional</p>
                
                <ContainerAmountCoffeeButtonRemove>
                    <AmountCoffee>
                        <button>
                            <BiMinus size={16} color='#8047F8' />
                        </button>
                        <input type="number"></input>
                        <button>
                            <BiPlus size={16} color='#8047F8' />
                        </button>
                    </AmountCoffee>

                    <button className="buttonRemove">
                        <CiTrash size={15} color='#8047F8' />
                        REMOVER
                    </button>
                </ContainerAmountCoffeeButtonRemove>
                <span>R$ 9.90</span>
            </CardCoffeeSelected>
        </ContainerCoffeeSelected>
    )
}