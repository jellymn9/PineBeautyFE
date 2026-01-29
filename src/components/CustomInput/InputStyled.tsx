import styled from "styled-components";

export const CheckboxContainer = styled.div`
  --label-line-height: ${({ theme }) => theme.lineHeights.md};
  --checkbox-width-height: 18px;
  --checkbox-sign-w-h: 12px;

  display: flex;
  flex-wrap: nowrap;
  grid-gap: 4px;

  align-items: center;

  position: relative;
`;

export const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: var(--label-line-height);
`;

export const CheckedSign = styled.div`
  --inner-spaceing: calc(
    (var(--checkbox-width-height) - var(--checkbox-sign-w-h)) / 2
  );

  position: absolute;
  width: var(--checkbox-sign-w-h);
  height: var(--checkbox-sign-w-h);
  background-color: ${({ theme }) => theme.colors.black};
  top: calc(
    ((var(--label-line-height) - var(--checkbox-width-height)) / 2) +
      var(--inner-spaceing)
  );
  right: var(--inner-spaceing);

  z-index: 1;
  display: none;
`;

export const CheckboxInput = styled.input`
  appearance: none;

  margin: 0px;

  z-index: 2;
  background-color: transparent;

  position: relative;
  width: var(--checkbox-width-height);
  height: var(--checkbox-width-height);
  border: 1px solid gray;

  &:checked ~ div {
    display: unset;
  }
`;
