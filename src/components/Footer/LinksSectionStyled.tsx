import styled from "styled-components";

import colors from "../../utils/colors";
import { Link } from "react-router-dom";

export const Container = styled.div`
  background-color: ${colors.alabaster};
  padding: 48px 24px 48px 24px;
  display: grid;
  grid-template-columns: 190px auto auto auto;
  grid-gap: 24px;
  font-family: DidactGothic-Regular;
`;

export const FooterLink = styled(Link)<{
  isTag?: boolean;
}>`
  color: ${({ isTag }) => (isTag ? `${colors.olivine}` : `${colors.black}`)};
`;
