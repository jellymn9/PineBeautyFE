import styled from "styled-components";

export const Container = styled.div`
  --card-container-width: 46vw;

  display: grid;
  gap: 50px 16px;
  grid-template-columns: var(--card-container-width) var(--card-container-width);

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    --card-container-width: 29.427vw;

    grid-template-columns:
      var(--card-container-width) var(--card-container-width)
      var(--card-container-width);
  }

  @media screen and (min-width: ${({ theme }) =>
      theme.breakpoints.smallDesktop}) {
    --card-container-width: 279px;

    grid-template-columns:
      var(--card-container-width) var(--card-container-width)
      var(--card-container-width);
  }
`;
