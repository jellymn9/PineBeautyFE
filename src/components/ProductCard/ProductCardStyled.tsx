import styled from "styled-components";

import colors from "../../utils/colors";

export const Card = styled.article`
  height: auto;
  min-height: fit-content;
  width: min-content;
  border: 1px solid ${colors.gray};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
`;

export const ProductImage = styled.div<{ imageURL: string }>`
  --aspect-ratio: 0.9;

  width: var(--container-width);
  height: calc(var(--container-width) * var(--aspect-ratio));
  background-image: url(${({ imageURL }) => imageURL});
  background-color: ${colors.babyPowder};
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

  font-family: Avenir;
  font-weight: 500;
  text-transform: capitalize;
`;

export const Price = styled.span`
  text-wrap-mode: nowrap;
  font-size: 12px;
  line-height: 22px;
`;
