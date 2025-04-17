import { useAppDispatch } from "../../withTypes";
import { remove, upsert } from "../../state/reducers/cartReducer";
import Button from "../Button/Button";
import { Amount, Container } from "./CounterStyled";
import { Minus, Plus } from "lucide-react";
import colors from "../../utils/colors";

interface CounterPropsI {
  quantity: number;
  id: string;
}

const iconsStrokeWidth = 1.5;
const iconColor = colors.black;

const Counter = ({ id, quantity }: CounterPropsI) => {
  const dispatch = useAppDispatch();

  const updateCart = (newQuantity: number) => {
    if (newQuantity) {
      dispatch(upsert({ id, quantity: newQuantity }));
    } else {
      dispatch(remove(id));
    }
  };

  const increase = () => {
    updateCart(quantity + 1);
  };

  const decrease = () => {
    updateCart(quantity - 1);
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
