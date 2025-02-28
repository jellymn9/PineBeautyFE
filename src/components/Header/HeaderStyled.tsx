import styled from "styled-components";
import { Link } from "react-router-dom";

import colors from "../../utils/colors";
//import breakpoints from "../../utils/breakpoints";

export const Container = styled.div<{ $isSticky: boolean; $isActive: boolean }>`
  display: flex;
  justify-content: space-between;
  padding: 30px 30px;
  background-color: ${colors.white};
  backdrop-filter: blur(10px);
  width: 100%;

  ${({ $isSticky }) =>
    $isSticky &&
    `
        background-color: ${colors.whiteTransparent1};
        position: fixed;
        top: 0;
        display: none;
    `}

  ${({ $isActive }) =>
    $isActive &&
    `
        display: flex;
  `}

  &:hover {
    background-color: ${colors.white};
  }
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
