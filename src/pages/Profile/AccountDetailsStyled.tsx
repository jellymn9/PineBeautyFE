import styled from "styled-components";

export const Container = styled.div`
  padding: ${({ theme }) => theme.spacing.lg} 0
    ${({ theme }) => theme.spacing["5xl"]} 0;
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  grid-gap: ${({ theme }) => theme.spacing.md};
  width: 100%;

  > :last-child {
    margin-top: ${({ theme }) => theme.spacing.lg};
  }

  @media screen and (min-width: ${({ theme }) =>
      theme.breakpoints.smallDesktop}) {
    width: 50%;
  }
`;
