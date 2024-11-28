import Button from "../Button/Button";
import { Amount, Container } from "./CounterStyled";

interface CounterPropsI {
  quantity: number;
  updateCart: (q: number) => void;
}

const Counter = ({ quantity, updateCart }: CounterPropsI) => {
  const increase = () => {
    updateCart(quantity + 1);
  };

  const decrease = () => {
    updateCart(quantity - 1);
  };

  return (
    <Container>
      <Button icon="minus" handleClick={decrease} disabled={quantity === 0} />
      <Amount>{quantity}</Amount>
      <Button icon="plus" handleClick={increase} />
    </Container>
  );
};

export default Counter;
