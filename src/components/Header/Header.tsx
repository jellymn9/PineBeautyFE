import { useMediaQuery } from "@custom-react-hooks/use-media-query";
import { ShoppingCart, Menu } from "lucide-react";

import { useDrawer } from "@/context/DrawerContext";
import Icon from "@/components/Icon/Icon";
import { MobileContainer } from "./HeaderStyled";
import HeaderDesktop from "./HeaderDesktop/HeaderDesktop";
import CartHeader from "./CartHeaderLink/CartHeader";
import { useTheme } from "styled-components";

const SHOPPING_CART = <ShoppingCart />;

function Header() {
  const { openDrawer } = useDrawer();
  const theme = useTheme();

  const isTabletOrMobile = useMediaQuery(
    `(max-width: ${theme.breakpoints.tablet})`
  );

  return (
    <>
      {isTabletOrMobile ? (
        <MobileContainer>
          <Menu onClick={openDrawer} />
          <Icon name="logo" width="55px" height="55px" />
          <CartHeader icon={SHOPPING_CART} />
        </MobileContainer>
      ) : (
        <HeaderDesktop />
      )}
    </>
  );
}

export default Header;
