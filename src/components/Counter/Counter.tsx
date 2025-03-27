import { useAppDispatch } from "../../withTypes";
import { remove, upsert } from "../../state/reducers/cartReducer";
import Button from "../Button/Button";
import { Amount, Container } from "./CounterStyled";
import Icon from "../Icon/Icon";

interface CounterPropsI {
  quantity: number;
  id: string;
}

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
        icon={<Icon name="minus" width="22px" height="22px" />}
        handleClick={decrease}
        disabled={quantity === 0}
      />
      <Amount>{quantity}</Amount>
      <Button
        variant="icon"
        icon={<Icon name="plus" width="22px" height="22px" />}
        handleClick={increase}
      />
    </Container>
  );
};

export default Counter;
