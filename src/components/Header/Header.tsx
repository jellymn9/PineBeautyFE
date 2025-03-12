import { useCallback, useEffect, useRef, useState } from "react";
import { useMediaQuery } from "@custom-react-hooks/use-media-query";
import { ShoppingCart, Menu, Search, User } from "lucide-react";

import { navLinks } from "../../utils/constants";
//import { routes } from "../../utils/constants";
import Icon from "../Icon/Icon";
import {
  BarAnimationContainer,
  CircleAnimation,
  Container,
  ContainerBlock,
  HoverBar,
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
    const target = event.target;
    const currentTarget = event.currentTarget;
    if (target instanceof HTMLElement && target !== currentTarget) {
      //width
      const targetWidth = target.clientWidth;
      setHoverLinkWidth(targetWidth);
      //step
      const targetOffsetLeft = target.offsetLeft;
      const parentOffsetLeft = currentTarget.offsetLeft;
      const sign = targetOffsetLeft >= prevOffsetLeft.current ? 1 : -1;
      const translateX =
        prevOffsetLeft.current -
        parentOffsetLeft +
        sign * Math.abs(targetOffsetLeft - prevOffsetLeft.current);
      setTranslateStep(translateX);

      prevOffsetLeft.current = targetOffsetLeft;
    }
  };

  const handleMouseLeave = () => {
    setHoverLinkWidth(0);
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
                <BarAnimationContainer
                  onMouseOver={(e) => handleHover(e)}
                  onMouseLeave={handleMouseLeave}
                >
                  <HoverBar $step={translateStep} $linkWidth={hoverLinkWidth} />
                  {navLinks.map(({ route, nameOrIcon }) => (
                    <LinkStyled to={route} key={route}>
                      {nameOrIcon}
                    </LinkStyled>
                  ))}
                </BarAnimationContainer>
                <CircleAnimation>
                  <LinkStyled to={""}>
                    <ShoppingCart size={22} strokeWidth={2} />
                  </LinkStyled>
                  <LinkStyled to={""}>
                    <Search size={22} strokeWidth={2} />
                  </LinkStyled>
                  <LinkStyled to={""}>
                    <User size={22} strokeWidth={2} />
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
