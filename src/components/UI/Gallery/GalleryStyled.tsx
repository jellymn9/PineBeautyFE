import { styled } from "styled-components";

export const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: 20vw 20vw; //change later
  gap: 10px;

  picture:first-child {
    grid-column: span 2;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 20vw 20vw;
  }

  @media screen and (min-width: ${({ theme }) =>
      theme.breakpoints.largeDesktop}) {
    grid-template-columns: 288px 288px;
  }
`;

export const GalleryImage = styled.img`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
  }
`;
