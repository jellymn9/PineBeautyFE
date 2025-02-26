import styled from "styled-components";
import { Link } from "react-router-dom";

import colors from "../../utils/colors";
import breakpoints from "../../utils/breakpoints";
//import { HorizonalSeparator } from "../../utils/globalStyles";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 30px;
  background-color: ${colors.white};
`;

export const LinksContainer = styled.div`
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
