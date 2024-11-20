import Button from "../Button/Button";
import { Amount, Container } from "./CounterStyled";

const Counter = () => {
  return (
    <Container>
      <Button icon="minus" handleClick={() => {}} />
      <Amount>0</Amount>
      <Button icon="plus" handleClick={() => {}} />
    </Container>
  );
};

export default Counter;
