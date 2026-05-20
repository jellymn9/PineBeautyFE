import styled from "styled-components";

export const ErrorStyled = styled.span`
  color: ${({ theme }) => theme.colors.imperialRed};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: ${({ theme }) => theme.lineHeights.sm};
`;

export const LabelCustom = styled.label`
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: ${({ theme }) => theme.lineHeights.lg};
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.typography.fontFamilyBase};
`;

export const TextFormFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: ${({ theme }) => theme.spacing.sm};
  align-items: flex-start;

  width: 100%;
`;
