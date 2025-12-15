import styled from "styled-components";

export const SliderMainContainer = styled.div`
  display: flex;
  grid-gap: 32px;
  align-items: center;
`;

export const SliderContainer = styled.div`
  --card-container-width: 48.427vw;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    --card-container-width: 22.427vw;
  }

  width: calc(var(--card-container-width) * 3 + 2 * 16px) !important;
  //border: 1px solid red;

  display: flex;

  overflow: hidden;
`;

export const Slider = styled.div`
  justify-content: center;

  width: fit-content;
`;
