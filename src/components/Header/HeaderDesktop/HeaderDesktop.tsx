//import Icon from "@/components/Icon/Icon";
import {
  Container,
  ContainerBlock,
  InnerContainer,
} from "./HeaderDesktopStyled";
import LinksNav from "../Navigation/LinksNav";
import { useCallback, useEffect, useRef, useState } from "react";

const HeaderDesktop = () => {
  const timeout = useRef(0);
  const currentScrollY = useRef(0);
  const [isScrollingUp, setScrollingUp] = useState(false);
  const [isStickyHeader, setStickyHeader] = useState(false);

  const handleScroll = useCallback(() => {
    const newScrollY = window.scrollY;

    // checks if scroll position is over header height
    if (newScrollY > 135 && !isStickyHeader) {
      setStickyHeader(true);
    } else if (newScrollY < 135 && isStickyHeader) {
      setStickyHeader(false);
    }

    clearTimeout(timeout.current);
    timeout.current = window.setTimeout(() => {
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

  return (
    <ContainerBlock>
      <Container $isSticky={isStickyHeader} $isActive={isScrollingUp}>
        <InnerContainer>
          {/* <Icon name="logo" width="75px" height="75px" /> */}
          <LinksNav />
        </InnerContainer>
      </Container>
    </ContainerBlock>
  );
};

export default HeaderDesktop;
