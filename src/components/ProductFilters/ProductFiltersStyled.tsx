import styled from "styled-components";

import colors from "../../utils/colors";

export const FiltersContainer = styled.section`
  height: inherit;
  width: 200px;
  background-color: ${colors.alabaster};
  padding: 20px;
`;

export const FiltersHeading = styled.h3`
  color: ${colors.olivine};
`;

export const FiltersList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  grid-gap: 14px;
`;

export const FilterListItem = styled.li``;

export const FilterLink = styled.a`
  text-decoration: none;
  color: ${colors.black};
  text-transform: capitalize;
`;
