import styled from "styled-components";

import image from "../../assets/productMockupImage.jpg";
import colors from "../../utils/colors";

export const Card = styled.div`
  height: auto;
  min-height: 290px;
  width: auto;
  border: 1px solid ${colors.gray};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  &:hover {
    div:nth-child(2) {
      height: 130px;
    }
  }
`;

export const ProductImage = styled.div`
  width: 210px;
  height: 210px;
  background-image: url(${image});
  background-color: ${colors.babyPowder};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const NameAndPriceContainer = styled.div`
  padding-top: 12px;
  padding-bottom: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-gap: 12px;
  background-color: ${colors.whiteTransparent1};
  height: calc(292px - 210px - 12px - 14px);
  position: absolute;
  bottom: 0;
  width: 100%;
  transition: height 0.5s;
`;

export const Name = styled.h3`
  font-size: 16px;
  line-height: 26px;
  font-family: JosefinSans;
  margin: 0;
  font-weight: 500;
  text-transform: capitalize;
`;

export const Price = styled.span`
  font-weight: 700;
  font-size: 18px;
  line-height: 28px;
`;
