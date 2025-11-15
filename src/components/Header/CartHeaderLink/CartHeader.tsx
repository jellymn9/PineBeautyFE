import { CartInsertWrapper } from "./CartHeaderStyled";
import { Dot } from "lucide-react";
import { memo, useContext } from "react";
import { CartContext } from "@/context/CartContext";

interface CartHeaderProps {
  icon: JSX.Element;
}

const CartHeader = memo(function ({ icon }: CartHeaderProps) {
  const { cartItems } = useContext(CartContext);
  const isCartEmpty = !cartItems.length;

  return (
    <CartInsertWrapper $isEmpty={isCartEmpty}>
      <Dot />
      {icon}
    </CartInsertWrapper>
  );
});

export default CartHeader;
