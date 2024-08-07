import styled from "styled-components";

import colors from "./colors";

export const FlexRow = styled.div<{
  justifyContent?:
    | "center"
    | "flex-end"
    | "flex-start"
    | "space-between"
    | "space-around";
  alignItems?: "center" | "flex-end" | "flex-start";
  gridGap?: number;
}>`
  display: flex;
  flex-direction: row;
  ${({ justifyContent }) =>
    !!justifyContent &&
    `justify-content: ${justifyContent}; ${console.log(justifyContent)}`}
  ${({ alignItems }) => !!alignItems && `align-items: ${alignItems};`}
  ${({ gridGap }) => !!gridGap && `grid-gap: ${gridGap}px;`}
`;

export const FlexColumn = styled.div<{
  justifyContent?:
    | "center"
    | "flex-end"
    | "flex-start"
    | "space-between"
    | "space-around";
  alignItems?: "center" | "flex-end" | "flex-start";
  gridGap?: number;
}>`
  display: flex;
  flex-direction: column;
  ${({ justifyContent }) =>
    !!justifyContent && `justify-content: ${justifyContent};`}
  ${({ alignItems }) => !!alignItems && `align-items: ${alignItems};`}
  ${({ gridGap }) => !!gridGap && `grid-gap: ${gridGap}px;`}
`;

export const HorizonalSeparator = styled.div`
  width: auto;
  height: 2px;
  background-color: ${colors.olivine};
  border: 1px solid ${colors.olivine};
  border-radius: 2px;
`;
