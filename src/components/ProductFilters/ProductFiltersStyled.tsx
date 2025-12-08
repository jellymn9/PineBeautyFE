import styled from "styled-components";

export const FiltersContainer = styled.section`
  height: inherit;
`;

export const FiltersHeading = styled.h3`
  font-family: ${({ theme }) => theme.typography.fontFamilyBase};
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.black};
`;

export const FiltersList = styled.ul`
  font-family: ${({ theme }) => theme.typography.fontFamilyBase};
  text-transform: uppercase;

  list-style-type: none;
  padding: 0;
  display: flex;
  //flex-direction: column;
  grid-gap: 14px;
`;

export const FilterListItem = styled.li``;
