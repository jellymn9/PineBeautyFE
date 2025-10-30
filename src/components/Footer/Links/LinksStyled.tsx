import styled from "styled-components";
import { Link } from "react-router-dom";
import colors from "@/utils/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 16px;
`;

export const SingleLink = styled(Link)`
  text-decoration: none;
  color: ${colors.white};
  text-transform: capitalize;
`;

export const Heading = styled.h4`
  font-family: Montserrat-Variable; //add this 2 props to global style
  letter-spacing: 0.02em;
  text-transform: uppercase;
  font-weight: 400;
`;
