import styled from "styled-components";

import colors from "@/utils/colors";

export const FiltersContainer = styled.section`
  height: inherit;
`;

export const FiltersHeading = styled.h3`
  font-family: Montserrat-Variable;
  text-transform: uppercase;
  color: ${colors.black};
`;

export const FiltersList = styled.ul`
  font-family: Montserrat-Variable;
  text-transform: uppercase;

  list-style-type: none;
  padding: 0;
  display: flex;
  //flex-direction: column;
  grid-gap: 14px;
`;

export const FilterListItem = styled.li``;

// export const FilterLink = styled.a`
//   text-decoration: none;
//   color: ${colors.black};
//   text-transform: capitalize;
// `;
