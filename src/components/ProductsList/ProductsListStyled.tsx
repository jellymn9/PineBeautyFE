import styled from "styled-components";
import breakpoints from "../../utils/breakpoints";

export const Container = styled.div`
  --card-container-width: 46vw;

  display: grid;
  gap: 50px 16px;
  justify-content: center;
  grid-template-columns: var(--card-container-width) var(--card-container-width);

  @media screen and (min-width: ${breakpoints.tablet}) {
    --card-container-width: 29.427vw;

    grid-template-columns:
      var(--card-container-width) var(--card-container-width)
      var(--card-container-width);
  }

  @media screen and (min-width: ${breakpoints.smallDesktop}) {
    --card-container-width: 279px;

    grid-template-columns:
      var(--card-container-width) var(--card-container-width)
      var(--card-container-width);
  }
`;
