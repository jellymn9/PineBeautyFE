import { ShoppingCart, Dot } from "lucide-react";
import { isCartEmpty } from "../../state/selectors/cartSelector";
import { useAppSelector } from "../../withTypes";
import { CartContainer } from "./CartIconStyled";

export const CartIcon = () => {
  const isEmpty = useAppSelector(isCartEmpty);

  return (
    <CartContainer>
      {!isEmpty && <Dot size={24} />}
      <ShoppingCart size={22} strokeWidth={2} />{" "}
    </CartContainer>
  );
};
