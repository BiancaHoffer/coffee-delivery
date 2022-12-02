import { BiMinus, BiPlus } from "react-icons/bi";
import { IoCart } from "react-icons/io5";
import { ButtonCart } from "../../../../components/ButtonCart";
import { Cart, useCart } from "../../../../hooks/useCart";
import { ContainerAmountCoffee, Tags, ContainerCoffeeCard, AddCart } from "./styles";
import { ProductFormatted } from '../SessionCoffees';
import { useState } from "react";

interface CoffeeCardProps {
  key: number;
  product: ProductFormatted;
}

export function CoffeeCard({ product }: CoffeeCardProps) {
  const [amount, setAmount] = useState(1);
  const { cart, addCart } = useCart();
  
  function handleAddCart(product: Cart) {
    const newProduct = {
      ...product,
      amount,
    }

    addCart(newProduct); 
    setAmount(1);
    console.log(cart)
  }

  function handleIncrement() {
    setAmount(state => state + 1)
  }

  function handleDecrement() {
    setAmount(state => state - 1)
  }

  return (
    <ContainerCoffeeCard>
      <img src={product.image} alt={`Imagem ${product.title}`} />
      <Tags>
        <p className="tag">
          {product.tags.tag1}
        </p>
        {product.tags.tag2 && (
          <p className="tag">
            {product.tags.tag2}
          </p>
        )}
        {product.tags.tag3 && (
          <p className="tag">
            {product.tags.tag3}
          </p>
        )}
      </Tags>

      <h2>{product.title}</h2>
      <p className="description">
        {product.resume}
      </p>

      <AddCart>
        <p className="valueCoffe">
          {product.priceFormattd}
        </p>
        <div className="contentAmountCoffeeAndButtonCart">
          <ContainerAmountCoffee>
            <button 
              onClick={() => handleDecrement()}
              disabled={amount <= 1}>
                <BiMinus size={16} />
            </button>
            <input 
              type="number" 
              value={amount}
              readOnly
            />
            <button 
              onClick={() => handleIncrement()}
            >
                <BiPlus size={16} />
            </button>
          </ContainerAmountCoffee>
          <ButtonCart
            hoverActive='purple'
            variant="purple"
            onClick={() => handleAddCart(product)}
          >
            <IoCart size={22} color="#FAFAFA" />
          </ButtonCart>
        </div>
      </AddCart>
    </ContainerCoffeeCard>
  );
}