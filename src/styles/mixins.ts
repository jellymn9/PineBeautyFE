import { css } from "styled-components";

export const buttonBase = css`
  width: fit-content;
  border-width: 2px;
  border-style: solid;
  transition: background-color 150ms ease;

  &:hover {
    background-color: transparent;
  }

  &:disabled {
    opacity: 0.7;
  }
`;

export const buttonVariants = {
  primary: css`
    ${({ theme }) => css`
      background-color: ${theme.colors.ebony};
      border-color: ${theme.colors.ebony};
      color: ${theme.colors.white};
      padding: 18px 48px;

      &:hover {
        color: ${theme.colors.ebony};
      }

      &:disabled {
        background-color: #b8d4f8;
        cursor: not-allowed;
        opacity: 0.7;
      }
    `}
  `,
  outlined: css`
    ${({ theme }) => css`
      background: transparent;
      color: ${theme.colors.black};
      border-color: ${theme.colors.black};
      padding: 18px 48px;

      &:hover {
        background-color: ${theme.colors.blackTransparent2};
      }

      &:disabled {
        color: #a2a2a2;
        border-color: #a2a2a2;
        cursor: not-allowed;
      }
    `}
  `,
} as const;

export type BtnVariantT = keyof typeof buttonVariants;
