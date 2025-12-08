import { css } from "styled-components";
import { theme } from "@/styles/theme";

export const buttonVariants = {
  primary: css`
    background-color: ${theme.colors.ebony};
    color: ${theme.colors.white};
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
    color: ${theme.colors.black};
    border: 1px solid ${theme.colors.gray};

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
