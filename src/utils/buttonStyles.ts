import { css } from "styled-components";
import colors from "./colors";

export const buttonVariants = {
  primary: css`
    background-color: ${colors.ebony};
    color: ${colors.white};
    border: none;

    &:hover {
    }

    &:disabled {
      background-color: #b8d4f8;
      cursor: not-allowed;
      opacity: 0.7;
    }
  `,
  outlined: css`
    background: transparent;
    color: ${colors.black};
    border: 1px solid ${colors.gray};

    &:hover {
    }

    &:disabled {
      color: #a2a2a2;
      border-color: #a2a2a2;
      cursor: not-allowed;
    }
  `,
};

export type BtnVariantT = keyof typeof buttonVariants;
