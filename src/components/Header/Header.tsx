import { ShoppingCart, Menu } from "lucide-react";

import { useDrawer } from "@/context/DrawerContext";
import { MobileContainer } from "./HeaderStyled";
import HeaderDesktop from "./HeaderDesktop/HeaderDesktop";
import CartHeader from "./CartHeaderLink/CartHeader";

const SHOPPING_CART = <ShoppingCart />;

function Header() {
  const { openDrawer } = useDrawer();

  return (
    <>
      <MobileContainer>
        <Menu onClick={openDrawer} />
        <img src="/logo.svg" alt="Pine Beauty Logo" width="55" height="55" />
        <CartHeader icon={SHOPPING_CART} />
      </MobileContainer>
      <HeaderDesktop />
    </>
  );
}

export default Header;
