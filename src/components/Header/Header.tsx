import { useMediaQuery } from "@custom-react-hooks/use-media-query";
import { ShoppingCart, Menu } from "lucide-react";

import breakpoints from "@/utils/breakpoints";
import { useDrawer } from "@/context/DrawerContext";
import Icon from "@/components/Icon/Icon";
import { MobileContainer } from "./HeaderStyled";
import HeaderDesktop from "./HeaderDesktop/HeaderDesktop";
import CartHeader from "./CartHeaderLink/CartHeader";

function Header() {
  const { openDrawer } = useDrawer();

  const isTabletOrMobile = useMediaQuery(`(max-width: ${breakpoints.tablet})`);

  return (
    <>
      {isTabletOrMobile ? (
        <MobileContainer>
          <Menu onClick={openDrawer} />
          <Icon name="logo" width="55px" height="55px" />
          <CartHeader icon={<ShoppingCart />} />
        </MobileContainer>
      ) : (
        <HeaderDesktop />
      )}
    </>
  );
}

export default Header;
