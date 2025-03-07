import styled from "styled-components";
import { Link } from "react-router-dom";

import colors from "../../utils/colors";

const linkStyledPadding = 16;

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
`;

export const LinkStyled = styled(Link)`
  height: 100%;
  display: inline-block;

  text-decoration: none;
  color: ${colors.black};
  text-transform: uppercase;
  padding: 0 ${linkStyledPadding}px;

  font-family: Montserrat-Variable;
  letter-spacing: 0.02em;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  background-color: transparent;

  //border: 1px solid red;
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
  background-color: ${colors.blackTransparent1};

  transform: ${({ $step }) => ` translate(${$step + linkStyledPadding}px)`};
  width: ${({ $linkWidth }) => ` ${$linkWidth - 2 * linkStyledPadding}px`};
`;

export const MobileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 26px 16px;
  align-items: center;
`;

export const CircleAnimation = styled.div`
  a::before {
    z-index: -1;
    position: absolute;
    display: none;
    content: "";
    height: 22px;
    width: 22px;
    border-radius: 16px;
    background-color: ${colors.blackTransparent1};
  }

  &:hover {
    a::before {
      display: block;
    }
  }
`;
