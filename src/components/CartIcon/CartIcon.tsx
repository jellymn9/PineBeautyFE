import { totalItemsQuantity } from "../../state/selectors/cartSelector";
import { useAppSelector } from "../../withTypes";
import Icon from "../Icon/Icon";
import { CartLink, CartNumber } from "./CartIconStyled";

export const CartIcon = () => {
  const totalQuantity = useAppSelector(totalItemsQuantity);

  return (
    <CartLink to="/cart">
      <Icon name="cart" width="24px" height="24px" />
      <CartNumber>{totalQuantity}</CartNumber>
    </CartLink>
  );
};
