import { styled } from "styled-components";

export const ImageStyled = styled.img<{ $isModal?: boolean }>`
  height: ${({ $isModal }) => ($isModal ? "auto" : "300px")};
  width: ${({ $isModal }) => ($isModal ? "auto" : "auto")};
  max-width: ${({ $isModal }) => ($isModal ? "700px" : "unset")};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
    height: auto;
  }
`;
