import styled from "styled-components";

export const BreadcrumbsNav = styled.nav`
  font-family: ${({ theme }) => theme.typography.fontFamilyBase};
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  line-height: ${({ theme }) => theme.lineHeights.xs};
  color: ${({ theme }) => theme.colors.gray};
  text-transform: uppercase;
`;
