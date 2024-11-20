import styled from "styled-components";

import colors from "../../utils/colors";
import image from "../../assets/productMockupImage.jpg";

export const ProductImage = styled.div`
  min-width: 310px;
  min-height: 310px;
  background-image: url(${image});
  background-color: ${colors.babyPowder};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  grid-gap: 18px;
`;

export const ProductData = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 32px;
  padding-bottom: 32px;
  grid-gap: 26px;
`;

export const ProductName = styled.h2`
  font-family: Cinzel-Bold;
  font-size: 22px;
  color: ${colors.olivine};
  text-transform: uppercase;
`;

export const ProductDescription = styled.p`
  font-size: 14px;
  line-height: 24px;
  margin: 0;
`;

export const Price = styled.b`
  color: ${colors.imperialRed};
  font-size: 30px;
  line-height: 40px;
`;

export const CounterAndAddBtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  grid-gap: 26px;
`;
