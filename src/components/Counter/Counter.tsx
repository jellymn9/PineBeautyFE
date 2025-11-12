// import { useAppDispatch } from "../../withTypes";
// import { remove, upsert } from "../../state/reducers/cartReducer";
import { Minus, Plus } from "lucide-react";
import Button from "@/components/Button/Button";
import colors from "@/utils/colors";
import {
  decreaseProductQuantity,
  increaseCartItemQuantity,
} from "@/APIs/carts";
import { Amount, Container } from "./CounterStyled";
import { plusAction } from "@/helpers/cartHelper";
import { CartItemT } from "@/utils/types/cartTypes";

interface CounterPropsI {
  quantity: number;
  userId: string;
  product: CartItemT;
}

const iconsStrokeWidth = 1.5;
const iconColor = colors.black;

const Counter = ({ product, userId, quantity }: CounterPropsI) => {
  const increase = userId
    ? async () => {
        await increaseCartItemQuantity(userId, product.id);
      }
    : () => plusAction(product);

  const decrease = userId
    ? async () => {
        await decreaseProductQuantity(userId, product.id);
      }
    : () => plusAction(product);

  return (
    <Container>
      <Button
        variant="icon"
        icon={
          <Minus size={22} strokeWidth={iconsStrokeWidth} color={iconColor} />
        }
        handleClick={decrease}
        disabled={quantity === 0}
      />
      <Amount>{quantity}</Amount>
      <Button
        variant="icon"
        icon={
          <Plus size={22} strokeWidth={iconsStrokeWidth} color={iconColor} />
        }
        handleClick={increase}
      />
    </Container>
  );
};

export default Counter;
