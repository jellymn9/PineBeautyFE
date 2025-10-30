import { totalItemsQuantity } from "@/state/selectors/cartSelector";
import { routes } from "@/utils/constants";
import { useAppSelector } from "@/withTypes";
import Icon from "../Icon/Icon";
import { CartLink, CartNumber } from "./CartIconStyled";

export const CartIcon = () => {
  const totalQuantity = useAppSelector(totalItemsQuantity);

  return (
    <CartLink to={routes.cart}>
      <Icon name="cart" width="24px" height="24px" />
      {!!totalQuantity && <CartNumber>{totalQuantity}</CartNumber>}
    </CartLink>
  );
};
