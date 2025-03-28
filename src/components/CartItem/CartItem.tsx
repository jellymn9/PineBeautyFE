import { formatPrice } from "../../helpers/formatters";
import { remove } from "../../state/reducers/cartReducer";
import { CartItemT, RawProductT } from "../../utils/types";
import { useAppDispatch } from "../../withTypes";
import Button from "../Button/Button";
import Counter from "../Counter/Counter";
import Icon from "../Icon/Icon";
import {
  Item,
  ItemImg,
  ItemDetailsAndActions,
  ItemPrice,
  ItemName,
  ActionsContainer,
  ItemInnerContainer,
  HSeparator,
} from "./CartItemStyled";

interface CartItemPropsI {
  product: RawProductT & CartItemT;
}

export const CartItem = ({ product }: CartItemPropsI) => {
  const { id, price, name, quantity, currency } = product;

  const dispatch = useAppDispatch();

  return (
    <Item>
      <ItemInnerContainer>
        <ItemImg>img</ItemImg>
        <ItemDetailsAndActions>
          <ItemName>{name.toLocaleUpperCase()}</ItemName>
          <ActionsContainer>
            <Counter id={id} quantity={quantity} />
            <Button
              variant="regular"
              text=""
              icon={<Icon name="delete" width="22px" height="22px" />}
              handleClick={() => dispatch(remove(id))}
            />
          </ActionsContainer>
        </ItemDetailsAndActions>
        <ItemPrice>{formatPrice(price, currency)}</ItemPrice>
      </ItemInnerContainer>
      <HSeparator />
    </Item>
  );
};
