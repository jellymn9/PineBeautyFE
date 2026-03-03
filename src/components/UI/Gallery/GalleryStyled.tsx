import { styled } from "styled-components";

export const GalleryContainer = styled.div`
  display: flex;
  overflow-x: scroll;

  gap: 10px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: grid;
    grid-template-columns: 274px; //20vw;
  }

  @media screen and (min-width: ${({ theme }) =>
      theme.breakpoints.largeDesktop}) {
    display: grid;
    gap: 10px;
    grid-template-columns: 274px 274px;

    button:first-child {
      grid-column: span 2;
    }
  }
`;

export const WrappingButton = styled.button`
  appearance: none;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
`;
