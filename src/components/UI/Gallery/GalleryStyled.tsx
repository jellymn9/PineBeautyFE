import { styled } from "styled-components";

export const GalleryContainer = styled.div`
  display: flex;
  overflow-x: scroll;
  picture {
    img {
      height: 300px;
    }
  }

  gap: 10px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: grid;
    grid-template-columns: 274px; //20vw;

    picture {
      img {
        width: 100%;
        height: auto;
      }
    }
  }

  @media screen and (min-width: ${({ theme }) =>
      theme.breakpoints.largeDesktop}) {
    display: grid;
    gap: 10px;
    grid-template-columns: 274px 274px;

    picture:first-child {
      grid-column: span 2;
    }
  }
`;

export const GalleryImage = styled.img`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
  }
`;
