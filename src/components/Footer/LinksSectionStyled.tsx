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
  text-decoration: none;
  color: ${({ isTag }) => (isTag ? `${colors.olivine}` : `${colors.gray}`)};
`;

export const ProfileParagraph = styled.p`
  color: ${colors.gray};
  margin: 0;
`;

export const InfoItem = styled.span`
  color: ${colors.gray};
`;
