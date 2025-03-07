import { useCallback, useEffect, useRef, useState } from "react";
import { useMediaQuery } from "@custom-react-hooks/use-media-query";
import { ShoppingCart, Menu } from "lucide-react";

import { navLinks } from "../../utils/constants";
//import { routes } from "../../utils/constants";
import Icon from "../Icon/Icon";
import {
  CircleAnimation,
  Container,
  ContainerBlock,
  HoverBar,
  InnerContainer,
  LinksContainerNav,
  LinkStyled,
  MobileContainer,
  //NavBarAnimation,
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

  const [hoverLinkWidth, setHoverLinkWidth] = useState(0);
  const [translateStep, setTranslateStep] = useState(0); // consider adding reducer for this
  const prevOffsetLeft = useRef(0);

  const handleScroll = useCallback(() => {
    const newScrollY = window.scrollY;

    // checks if scroll position is over header height
    if (newScrollY > 135 && !isStickyHeader) {
      setStickyHeader(true);
    } else if (newScrollY < 135 && isStickyHeader) {
      setStickyHeader(false);
    }

    clearTimeout(timeout.current);
    timeout.current = setTimeout(() => {
      // checks if user scrolls up or down
      if (newScrollY > currentScrollY.current && isScrollingUp) {
        setScrollingUp(false);
      } else if (newScrollY < currentScrollY.current && !isScrollingUp) {
        setScrollingUp(true);
      }

      currentScrollY.current = newScrollY;
    }, 100);
  }, [isScrollingUp, isStickyHeader]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const { openDrawer } = useDrawer();

  const isTabletOrMobile = useMediaQuery(`(max-width: ${breakpoints.tablet})`);

  const handleHover = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (event.target instanceof HTMLElement) {
      const targetChild = event.target;
      //width
      const targetWidth = targetChild.clientWidth;
      setHoverLinkWidth(targetWidth);
      //step
      const targetOffsetLeft = targetChild.offsetLeft;
      const parentOffsetLeft = event.currentTarget.offsetLeft;
      const sign = targetOffsetLeft >= prevOffsetLeft.current ? 1 : -1;
      const translateX =
        prevOffsetLeft.current -
        parentOffsetLeft +
        sign * Math.abs(targetOffsetLeft - prevOffsetLeft.current);
      setTranslateStep(translateX);

      prevOffsetLeft.current = targetOffsetLeft;
    }
  };

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
                <div onMouseOver={(e) => handleHover(e)}>
                  <HoverBar $step={translateStep} $linkWidth={hoverLinkWidth} />
                  {navLinks.map(({ route, nameOrIcon }) => (
                    <LinkStyled to={route} key={route}>
                      {nameOrIcon}
                    </LinkStyled>
                  ))}
                </div>
                <CircleAnimation>
                  <LinkStyled to={""}>
                    <ShoppingCart size={22} strokeWidth={2} />
                  </LinkStyled>
                </CircleAnimation>
              </LinksContainerNav>
            </InnerContainer>
          </Container>
        </ContainerBlock>
      )}
    </>
  );
}

export default Header;
