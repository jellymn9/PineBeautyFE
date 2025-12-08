import styled from "styled-components";

import { BtnVariantT, buttonVariants, buttonBase } from "@/styles/mixins";

export const CustomButton = styled.button<{
  $isIcon: boolean;
  $variant?: BtnVariantT;
}>`
  ${buttonBase}
  width: fit-content;

  ${({ $variant = "primary" }) => buttonVariants[$variant]}
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
