import styled from "styled-components";

export const CartInsertWrapper = styled.div<{ $isEmpty: boolean }>`
  position: relative;

  svg:first-child {
    display: none;
    position: absolute;
    top: -8px;

    transition: all 0.3s;

    ${({ $isEmpty }) =>
      !$isEmpty &&
      `
    top: -1px;
    display: unset;`}
  }
`;
