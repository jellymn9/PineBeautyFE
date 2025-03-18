import styled from "styled-components";

import colors from "../../../utils/colors";
import { Link } from "react-router-dom";
import breakpoints from "../../../utils/breakpoints";

export const Container = styled.div`
  background-color: ${colors.ebony};

  // flex-direction: column;
  // grid-gap: 24px;
  font-family: DidactGothic-Regular;
`;

export const FooterLink = styled(Link)`
  text-decoration: none;
  color: ${colors.white};
`;

export const ProfileParagraph = styled.p`
  color: ${colors.gray};
  margin: 0;
`;

export const InfoItem = styled.span`
  color: ${colors.white};
`;

export const InfoItemContainer = styled.div`
  display: flex;
  grid-gap: 12px;
  align-items: center;
`;

export const HSeparator = styled.div`
  // consider adding this to global style later..
  height: 2px;
  background-color: ${colors.whiteTransparent1};
`;

export const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  grid-gap: 50px;

  @media screen and (min-width: ${breakpoints.tablet}) {
    width: auto;
  }
`;
