import { styled } from "styled-components";

export const ImageStyled = styled.img`
  height: 300px;
  width: auto;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
    height: auto;
  }
`;
