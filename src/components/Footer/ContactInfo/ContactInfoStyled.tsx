import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 16px;
`;

export const InfoItem = styled.span`
  color: ${({ theme }) => theme.colors.white};
`;

export const InfoItemContainer = styled.div`
  display: flex;
  grid-gap: 12px;
  align-items: center;
`;

export const Heading = styled.h4`
  //add this 2 props to global style
  font-family: ${({ theme }) => theme.typography.fontFamilyBase};
  text-transform: uppercase;
`;
