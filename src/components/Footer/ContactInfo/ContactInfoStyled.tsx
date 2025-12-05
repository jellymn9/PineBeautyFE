import styled from "styled-components";
import colors from "@/styles/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 16px;
`;

export const InfoItem = styled.span`
  color: ${colors.white};
`;

export const InfoItemContainer = styled.div`
  display: flex;
  grid-gap: 12px;
  align-items: center;
`;

export const Heading = styled.h4`
  font-family: Montserrat-Variable; //add this 2 props to global style
  text-transform: uppercase;
`;
