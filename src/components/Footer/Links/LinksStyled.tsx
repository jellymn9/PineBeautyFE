import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 16px;
`;

export const SingleLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
  text-transform: capitalize;
`;

export const Heading = styled.h4`
  //add this 2 props to global style
  font-family: ${({ theme }) => theme.typography.fontFamilyBase};
  letter-spacing: 0.02em;
  text-transform: uppercase;
  font-weight: 400;
`;
