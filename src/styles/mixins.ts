// src/styles/mixins.ts
import { css } from "styled-components";
//import { BtnVariantT } from "../wherever"; // or define here

export const buttonBase = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  border: none;
  padding: 0.6rem 1.2rem;
  transition: background-color 150ms ease, color 150ms ease,
    border-color 150ms ease;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }
`;

export const buttonVariants = {
  primary: css`
    ${({ theme }) => css`
      background-color: ${theme.colors.ebony};
      color: ${theme.colors.white};

      &:hover:not(:disabled) {
        background-color: ${theme.colors.black};
      }
    `}
  `,
  outlined: css`
    ${({ theme }) => css`
      background: transparent;
      color: ${theme.colors.black};
      border: 1px solid ${theme.colors.gray};

      &:hover:not(:disabled) {
        border-color: ${theme.colors.ebony};
      }
    `}
  `,
} as const;

export type BtnVariantT = keyof typeof buttonVariants;
