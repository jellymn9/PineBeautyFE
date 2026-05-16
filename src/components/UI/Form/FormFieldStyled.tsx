import styled from "styled-components";

export const ErrorStyled = styled.span`
  color: ${({ theme }) => theme.colors.imperialRed};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: ${({ theme }) => theme.lineHeights.sm};
`;
