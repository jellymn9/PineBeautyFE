import { CartInsertWrapper } from "./CartHeaderStyled";
import { Dot } from "lucide-react";
import { memo } from "react";
import { useCartContext } from "@/context/CartContext";

interface CartHeaderProps {
  icon: JSX.Element;
}

const CartHeader = memo(function ({ icon }: CartHeaderProps) {
  const { isEmpty } = useCartContext();

  return (
    <CartInsertWrapper $isEmpty={isEmpty}>
      <Dot />
      {icon}
    </CartInsertWrapper>
  );
});

export default CartHeader;
