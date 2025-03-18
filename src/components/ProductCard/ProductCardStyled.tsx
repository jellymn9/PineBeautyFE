import styled from "styled-components";

import image from "../../assets/productMockupImage.jpg";
import colors from "../../utils/colors";

export const Card = styled.article`
  height: auto;
  min-height: 290px;
  width: fit-content;
  border: 1px solid ${colors.gray};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
`;

export const ProductImage = styled.div`
  --aspect-ratio: 0.9;

  width: 18.041vw;
  height: calc(18.041vw / var(--aspect-ratio));
  background-image: url(${image});
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

export const Name = styled.h3`
  font-size: 16px;
  line-height: 26px;
  font-family: JosefinSans;
  font-weight: 500;
  text-transform: capitalize;
`;

export const Price = styled.span`
  font-weight: 700;
  font-size: 18px;
  line-height: 28px;
`;
