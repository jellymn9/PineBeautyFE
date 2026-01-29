import styled from "styled-components";

export const FormHeading = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes["3xl"]};
  line-height: ${({ theme }) => theme.lineHeights["3xl"]};
`;

export const FormCustom = styled.form`
  display: flex;
  flex-direction: column;
  grid-gap: 30px;
`;

export const LabelCustom = styled.label`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  line-height: ${({ theme }) => theme.lineHeights.lg};
  color: ${({ theme }) => theme.colors.gray};
`;

export const InputCustom = styled.input<{
  $isValidated: boolean;
  $customValid?: boolean;
}>`
  //line-height: 40px;
  padding: 8px 12px;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  line-height: ${({ theme }) => theme.lineHeights.lg};
  letter-spacing: 0.01em;
  padding-left: 12px;
  border: 1px solid ${({ theme }) => theme.colors.timberwolf};
  border-radius: 6px;
  font-family: ${({ theme }) => theme.typography.fontFamilyBrand};

  outline: ${({ $isValidated, $customValid, theme }) =>
    !$isValidated
      ? ` none`
      : $customValid
        ? `${theme.colors.olivine} auto 2px`
        : `${theme.colors.imperialRed} auto 2px`};
`;

export const LabelInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 12px;
`;

export const FieldError = styled.span`
  color: ${({ theme }) => theme.colors.imperialRed};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: ${({ theme }) => theme.lineHeights.sm};
`;
