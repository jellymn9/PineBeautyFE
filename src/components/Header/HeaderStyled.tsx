import styled from "styled-components";
import { Link } from "react-router-dom";

import colors from "../../utils/colors";

export const ContainerBlock = styled.div`
  height: 135px;
`;

export const Container = styled.header<{
  $isSticky: boolean;
  $isActive: boolean;
}>`
  padding: 30px 30px;
  background-color: ${colors.white};
  backdrop-filter: blur(10px);

  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  ${({ $isSticky }) =>
    $isSticky &&
    `
        background-color: ${colors.whiteTransparent1};
        display: none;
    `}

  ${({ $isActive }) =>
    $isActive &&
    `
        display: block;
  `}

  &:hover {
    background-color: ${colors.white};
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  align-items: center;
`;

export const LinksContainerNav = styled.nav`
  display: flex;
  align-items: center;
  background-color: transparent;
  padding: 16px;
  grid-gap: 20px;
`;

export const BarAnimationContainer = styled.div`
  display: flex;
  grid-gap: inherit;
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
  color: ${colors.black};
  text-transform: uppercase;

  font-family: Montserrat-Variable;
  letter-spacing: 0.02em;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  background-color: transparent;
`;

export const HoverBar = styled.div<{
  $linkWidth: number;
  $step: number;
}>`
  height: 2px;
  top: 80px;
  position: absolute;
  z-index: -1;

  transition: width 0.4s cubic-bezier(0.215, 0.61, 0.355, 1),
    transform 0.3s linear;

  width: 0;
  background-color: ${colors.blackTransparent2};

  transform: ${({ $step }) => ` translate(${$step}px)`};
  width: ${({ $linkWidth }) => ` ${$linkWidth}px`};
`;

export const MobileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 26px 16px;
  align-items: center;
`;

export const CircleAnimation = styled.div`
  display: inherit;
  grid-gap: inherit;

  a {
    position: relative;
  }

  a::before {
    content: "";

    z-index: -1;
    position: absolute;
    top: 11px;
    left: 11px;

    height: 1px;
    width: 1px;
    opacity: 0;

    border-radius: 50%;
    background-color: ${colors.blackTransparent2};
    outline: 0px solid ${colors.blackTransparent2};

    transition: outline 0.3s, opacity 0.3s;
  }

  a:hover::before {
    outline: 22px solid ${colors.blackTransparent2};
    opacity: 1;
  }
`;
