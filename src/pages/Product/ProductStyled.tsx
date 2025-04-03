import styled from "styled-components";

import colors from "../../utils/colors";
import image from "../../assets/productMockupImage.jpg";
import breakpoints from "../../utils/breakpoints";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 60px;
`;

export const ProductSection = styled.section`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${breakpoints.tablet}) {
    flex-direction: row;
    //flex: 1;

    grid-gap: 30px;
  }
`;

export const Gallery = styled.div`
  display: grid;
  grid-template-columns: 300px 150px;
  gap: 10px;
`;

export const FirstImage = styled.div<{ $imageURL: string }>`
  grid-column: span 2;

  background-image: url(${({ $imageURL }) => $imageURL});
  background-color: transparent;
  background-size: contain;
  background-repeat: no-repeat;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ReviewsSection = styled.section``;

export const RelatedProductsSection = styled.section``;

export const ProductImage = styled.div`
  min-width: 310px;
  min-height: 310px;
  background-image: url(${image});
  background-color: ${colors.babyPowder};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
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
