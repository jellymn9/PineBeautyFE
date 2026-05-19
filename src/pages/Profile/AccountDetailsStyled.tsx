import styled from "styled-components";

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  grid-gap: ${({ theme }) => theme.spacing.md};
  width: 100%;

  @media screen and (min-width: ${({ theme }) =>
      theme.breakpoints.smallDesktop}) {
    width: 50%;
  }
`;
