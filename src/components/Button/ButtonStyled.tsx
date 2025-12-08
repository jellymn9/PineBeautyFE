import styled from "styled-components";

import { BtnVariantT, buttonVariants } from "@/styles/buttonStyles";

export const CustomButton = styled.button<{
  $isIcon: boolean;
  $variant?: BtnVariantT;
}>`
  width: fit-content;
  border: none;
  color: ${({ theme }) => theme.colors.black};

  background-color: ${({ $isIcon, theme }) =>
    $isIcon ? "transparent" : theme.colors.white};

  ${({ $isIcon }) => !$isIcon && `padding: 18px 48px;`};

  ${({ $variant }) => $variant && buttonVariants[$variant]}

  :hover {
  }

  :disabled {
    //color with opacity so it is light gray
    color: rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(0, 0, 0, 0.3);
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  grid-gap: 10px;
`;

export const ButtonText = styled.span`
  display: inline-block;
  font-size: 12px;
  line-height: 22px;
  min-width: 74px;
  width: fit-content;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.typography.fontFamilyBase};
`;
