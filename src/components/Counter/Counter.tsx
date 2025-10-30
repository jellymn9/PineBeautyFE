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

interface CounterPropsI {
  quantity: number;
  id: string;
  userId: string;
}

const iconsStrokeWidth = 1.5;
const iconColor = colors.black;

const Counter = ({ id, userId, quantity }: CounterPropsI) => {
  const increase = async () => {
    await increaseCartItemQuantity(userId, id);
  };

  const decrease = async () => {
    await decreaseProductQuantity(userId, id);
  };

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
