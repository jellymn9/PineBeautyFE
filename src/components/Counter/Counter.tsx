import { Minus, Plus } from "lucide-react";
import Button from "@/components/Button/Button";
import colors from "@/utils/colors";
import { Amount, Container } from "./CounterStyled";
import { CartItemLocalT } from "@/utils/types/cartTypes";
import { useContext } from "react";
import { CartContext } from "@/context/CartContext";

interface CounterPropsI {
  quantity: number;
  //userId: string;
  product: CartItemLocalT;
}

const iconsStrokeWidth = 1.5;
const iconColor = colors.black;

const Counter = ({ product, quantity }: CounterPropsI) => {
  const { increase, decrease } = useContext(CartContext);

  const handlePlus = () => increase(product);
  const handleMinus = () => decrease(product);
  // userId
  //   ? async () => {
  //       await increaseCartItemQuantity(userId, product.id);
  //     }
  //   : () => plusAction(product);

  //const decrease =
  // userId
  //   ? async () => {
  //       await decreaseProductQuantity(userId, product.id);
  //     }
  //   : () => plusAction(product);

  return (
    <Container>
      <Button
        variant="icon"
        icon={
          <Minus size={22} strokeWidth={iconsStrokeWidth} color={iconColor} />
        }
        handleClick={handleMinus}
        disabled={quantity === 0}
      />
      <Amount>{quantity}</Amount>
      <Button
        variant="icon"
        icon={
          <Plus size={22} strokeWidth={iconsStrokeWidth} color={iconColor} />
        }
        handleClick={handlePlus}
      />
    </Container>
  );
};

export default Counter;
