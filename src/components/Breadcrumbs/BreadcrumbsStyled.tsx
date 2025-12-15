import styled from "styled-components";

export const BreadcrumbsNav = styled.nav`
  font-family: ${({ theme }) => theme.typography.fontFamilyBase};
  font-weight: 400;
  font-size: 12px;
  line-height: 22px;
  color: ${({ theme }) => theme.colors.gray};
  text-transform: uppercase;
`;
