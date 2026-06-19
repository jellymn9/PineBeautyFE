import { useCartContext } from "@/context/CartContext";
import { ROUTES } from "@/utils/constants";
import { Navigate } from "react-router-dom";

const CartGuard = ({ children }: { children: React.ReactNode }) => {
  const { cartItems } = useCartContext();

  if (cartItems.length === 0) {
    return <Navigate to={ROUTES.cart} replace />;
  }

  return <>{children}</>;
};

export default CartGuard;
