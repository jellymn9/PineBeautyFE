import styled from "styled-components";
import { Link } from "react-router-dom";

import colors from "../../utils/colors";

export const Container = styled.header<{
  $isSticky: boolean;
  $isActive: boolean;
}>`
  padding: 30px 30px;
  background-color: ${colors.white};
  backdrop-filter: blur(10px);

  ${({ $isSticky }) =>
    $isSticky &&
    `
        background-color: ${colors.whiteTransparent1};
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
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
`;

export const LinksContainerNav = styled.nav`
  display: flex;
  grid-gap: 36px;

  align-items: center;
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
  color: ${colors.black};
  text-transform: uppercase;

  font-family: Montserrat-Variable;
  letter-spacing: 0.02em;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
`;

export const MobileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 26px 16px;
  align-items: center;
`;
