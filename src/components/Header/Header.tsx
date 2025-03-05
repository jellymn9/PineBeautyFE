import { useCallback, useEffect, useRef, useState } from "react";
import { useMediaQuery } from "@custom-react-hooks/use-media-query";
import { ShoppingCart, Menu } from "lucide-react";

import { navLinks } from "../../utils/constants";
//import { routes } from "../../utils/constants";
import Icon from "../Icon/Icon";
import {
  Container,
  ContainerBlock,
  InnerContainer,
  LinksContainerNav,
  LinkStyled,
  MobileContainer,
} from "./HeaderStyled";
import breakpoints from "../../utils/breakpoints";
import { useDrawer } from "../../context/DrawerContext";

// const navLinks = [
//   { route: routes.home, nameOrIcon: "home" },
//   { route: routes.products, nameOrIcon: "products" },
//   { route: "2", nameOrIcon: "contact" },
//   { route: "1", nameOrIcon: <User size={22} strokeWidth={2} /> },
//   { route: "3", nameOrIcon: <Search size={22} strokeWidth={2} /> },
//   { route: "4", nameOrIcon: <ShoppingCart size={22} strokeWidth={2} /> },
// ];

function Header() {
  const timeout = useRef(0);
  const currentScrollY = useRef(0);
  const [isScrollingUp, setScrollingUp] = useState(false);
  const [isStickyHeader, setStickyHeader] = useState(false);

  const handleScroll = useCallback(() => {
    clearTimeout(timeout.current);
    timeout.current = setTimeout(() => {
      const newScrollY = window.scrollY;

      if (newScrollY > 135 && !isStickyHeader) {
        setStickyHeader(true);
      } else if (newScrollY < 135 && isStickyHeader) {
        setStickyHeader(false);
      }

      if (newScrollY > currentScrollY.current && isScrollingUp) {
        setScrollingUp(false);
      } else if (newScrollY < currentScrollY.current && !isScrollingUp) {
        setScrollingUp(true);
      }

      currentScrollY.current = newScrollY;
    }, 1000);
  }, [isScrollingUp, isStickyHeader]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const { openDrawer } = useDrawer();

  const isTabletOrMobile = useMediaQuery(`(max-width: ${breakpoints.tablet})`);

  return (
    <>
      {isTabletOrMobile ? (
        <MobileContainer>
          <Menu onClick={openDrawer} />
          <Icon name="logo" width="55px" height="55px" />
          <ShoppingCart />
        </MobileContainer>
      ) : (
        <ContainerBlock>
          <Container $isSticky={isStickyHeader} $isActive={isScrollingUp}>
            <InnerContainer>
              <Icon name="logo" width="75px" height="75px" />
              <LinksContainerNav>
                {navLinks.map(({ route, nameOrIcon }) => (
                  <LinkStyled to={route} key={route}>
                    {nameOrIcon}
                  </LinkStyled>
                ))}
                <LinkStyled to={""}>
                  <ShoppingCart />
                </LinkStyled>
              </LinksContainerNav>
            </InnerContainer>
          </Container>
        </ContainerBlock>
      )}
    </>
  );
}

export default Header;
