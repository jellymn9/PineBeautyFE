import { User, Search, ShoppingCart } from "lucide-react";

import { routes } from "../../utils/constants";
import Icon from "../Icon/Icon";
import { Container, LinksContainerNav, LinkStyled } from "./HeaderStyled";
import { useCallback, useEffect, useRef, useState } from "react";

const navLinks = [
  { route: routes.home, nameOrIcon: "home" },
  { route: routes.products, nameOrIcon: "products" },
  { route: "", nameOrIcon: "contact" },
  { route: "", nameOrIcon: <User size={22} strokeWidth={2} /> },
  { route: "", nameOrIcon: <Search size={22} strokeWidth={2} /> },
  { route: "", nameOrIcon: <ShoppingCart size={22} strokeWidth={2} /> },
];

function Header() {
  const currentScrollY = useRef(0);
  const [isScrollingUp, setScrollingUp] = useState(false);
  const [isStickyHeader, setStickyHeader] = useState(false);

  const handleScroll = useCallback(() => {
    //BUG improve further, there is bug when scrolled bit down from main header! Switch to sticky header makes bouncing effect
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
  }, [isScrollingUp, isStickyHeader]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <Container $isSticky={isStickyHeader} $isActive={isScrollingUp}>
      <Icon name="logo" width="75px" height="75px" />
      <LinksContainerNav>
        {navLinks.map(({ route, nameOrIcon }) => (
          <LinkStyled to={route}>{nameOrIcon}</LinkStyled>
        ))}
      </LinksContainerNav>
    </Container>
  );
}

export default Header;
