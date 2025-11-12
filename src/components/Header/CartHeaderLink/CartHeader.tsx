import { getCartItemsLocal } from "@/helpers/cartHelper";
import { CartInsertWrapper } from "./CartHeaderStyled";
import { useAuth } from "@/context/AuthContext";
import { useCart } from "@/helpers/customHooks/cartCustomHooks";
import { Dot } from "lucide-react";
import { memo } from "react";

interface CartHeaderProps {
  icon: JSX.Element;
}

const CartHeader = memo(function ({ icon }: CartHeaderProps) {
  const { user } = useAuth();
  const { isEmpty } = useCart(user?.uid || null);
  const isCartEmpty = user ? isEmpty : !getCartItemsLocal()?.length;

  return (
    <CartInsertWrapper $isEmpty={isCartEmpty}>
      <Dot />
      {icon}
    </CartInsertWrapper>
  );
});

export default CartHeader;
