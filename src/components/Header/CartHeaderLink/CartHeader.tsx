import { CartInsertWrapper } from "./CartHeaderStyled";
import { Dot } from "lucide-react";
import { memo } from "react";
import { useCartContext } from "@/context/CartContext";

interface CartHeaderProps {
  icon: JSX.Element;
}

const CartHeader = memo(function ({ icon }: CartHeaderProps) {
  const { cartItems } = useCartContext();
  const isCartEmpty = !cartItems.length;

  return (
    <CartInsertWrapper $isEmpty={isCartEmpty}>
      <Dot />
      {icon}
    </CartInsertWrapper>
  );
});

export default CartHeader;
