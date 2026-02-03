import styled from "styled-components";
import { Link } from "react-router-dom";

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

export const HoverBar = styled.div<{
  $linkWidth: number;
  $step: number;
}>`
  height: 2px;
  top: 80px;
  position: absolute;
  z-index: -1;

  transition:
    width 0.4s cubic-bezier(0.215, 0.61, 0.355, 1),
    transform 0.3s linear;

  width: 0;
  background-color: ${({ theme }) => theme.colors.blackTransparent2};

  transform: ${({ $step }) => ` translate(${$step}px)`};
  width: ${({ $linkWidth }) => ` ${$linkWidth}px`};
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black};
  text-transform: uppercase;

  font-family: ${({ theme }) => theme.typography.fontFamilyBase};
  letter-spacing: 0.02em;
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: ${({ theme }) => theme.lineHeights.sm};
  background-color: transparent;
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
    background-color: ${({ theme }) => theme.colors.blackTransparent2};
    outline: 0px solid ${({ theme }) => theme.colors.blackTransparent2};

    transition:
      outline 0.3s,
      opacity 0.3s;
  }

  a:hover::before {
    outline: 22px solid ${({ theme }) => theme.colors.blackTransparent2};
    opacity: 1;
  }
`;
