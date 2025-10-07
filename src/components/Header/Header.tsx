import { useCallback, useEffect, useRef, useState } from "react";
import { useMediaQuery } from "@custom-react-hooks/use-media-query";
import { ShoppingCart, Menu, Dot } from "lucide-react";

import { navLinks, routes } from "../../utils/constants";
import Icon from "../Icon/Icon";
import {
  BarAnimationContainer,
  CartInsertWrapper,
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
import { useHoverBarAnimation } from "../../helpers/customHooks";

function Header() {
  const timeout = useRef(0);
  const currentScrollY = useRef(0);
  const [isScrollingUp, setScrollingUp] = useState(false);
  const [isStickyHeader, setStickyHeader] = useState(false);

  const { hoverLinkWidth, translateStep, handleHover, handleMouseLeave } =
    useHoverBarAnimation();

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
                  {navLinks.textualLinks.map(({ route, name }) => (
                    <LinkStyled to={route} key={route}>
                      {name}
                    </LinkStyled>
                  ))}
                </BarAnimationContainer>
                <CircleAnimation>
                  {navLinks.iconLinks.map(({ route, icon }) => {
                    if (route === routes.cart) {
                      return (
                        <LinkStyled to={route}>
                          <CartInsertWrapper>
                            <Dot />
                            {icon}
                          </CartInsertWrapper>
                        </LinkStyled>
                      );
                    } else {
                      return <LinkStyled to={route}>{icon}</LinkStyled>;
                    }
                  })}
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
