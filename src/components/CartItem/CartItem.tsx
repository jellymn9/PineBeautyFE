import { remove } from "../../state/reducers/cartReducer";
import { CartItemT, RawProductT } from "../../utils/types";
import { useAppDispatch } from "../../withTypes";
import Button from "../Button/Button";
import Counter from "../Counter/Counter";
import {
  Item,
  ItemImg,
  ItemDetailsAndActions,
  ItemPrice,
  ItemName,
  ActionsContainer,
  ItemInsideContainer,
  HSeparator,
} from "./CartItemStyled";

interface CartItemPropsI {
  product: RawProductT & CartItemT;
}

export const CartItem = ({ product }: CartItemPropsI) => {
  const { id, price, name, quantity } = product;

  const dispatch = useAppDispatch();

  return (
    <Item>
      <ItemInsideContainer>
        <ItemImg>img</ItemImg>
        <ItemDetailsAndActions>
          <ItemName>{name}</ItemName>
          <ActionsContainer>
            <Counter id={id} quantity={quantity} />
            <Button
              text=""
              icon="delete"
              handleClick={() => dispatch(remove(id))}
            />
          </ActionsContainer>
        </ItemDetailsAndActions>
        <ItemPrice>{price}</ItemPrice>
      </ItemInsideContainer>
      <HSeparator />
    </Item>
  );
};
