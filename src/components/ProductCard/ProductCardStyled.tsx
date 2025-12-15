import styled from "styled-components";

export const Card = styled.article`
  height: auto;
  min-height: fit-content;

  min-width: var(--card-container-width) !important;
  width: var(--card-container-width) !important;

  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;

  a {
    width: inherit;
  }
`;

export const ProductImage = styled.div<{ $imageURL: string }>`
  --aspect-ratio: 0.9;

  width: var(--card-container-width);
  //consider adding alternative to --card-container-width undefined value
  height: calc(var(--card-container-width) * var(--aspect-ratio));
  background-image: url(${({ $imageURL }) => $imageURL});
  background-color: ${({ theme }) => theme.colors.babyPowder};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;

export const NameAndPriceContainer = styled.div`
  padding-top: 12px;
  padding-bottom: 12px;
  display: flex;
  flex-direction: column;
  align-items: start;
  grid-gap: 12px;
`;

export const Name = styled.h4`
  font-size: 14px;
  line-height: 24px;

  font-family: ${({ theme }) => theme.typography.fontFamilyBrand};
  font-weight: 500;
  text-transform: capitalize;
`;

export const Price = styled.span`
  text-wrap-mode: nowrap;
  font-size: 12px;
  line-height: 22px;
`;
