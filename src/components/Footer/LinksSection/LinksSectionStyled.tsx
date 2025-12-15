import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.ebony};

  font-family: ${({ theme }) => theme.typography.fontFamilyAlt};
`;

export const FooterLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
`;

export const ProfileParagraph = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  margin: 0;
`;

export const InfoItem = styled.span`
  color: ${({ theme }) => theme.colors.white};
`;

export const InfoItemContainer = styled.div`
  display: flex;
  grid-gap: 12px;
  align-items: center;
`;

export const HSeparator = styled.div`
  // consider adding this to global style later..
  height: 2px;
  background-color: ${({ theme }) => theme.colors.whiteTransparent1};
`;

export const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  grid-gap: 50px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: auto;
  }
`;
