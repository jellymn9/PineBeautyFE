import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 60px;
  align-self: center;
  padding-top: 24px;
`;

export const SecondaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  grid-gap: 24px;

  &:focus {
    outline: none;
  }
`;

export const ProductSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;
    //flex: 1;

    grid-gap: 30px;
  }
`;

export const GalleryAndDescription = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 45px;
`;

export const Gallery = styled.div`
  display: grid;
  grid-template-columns: 20vw 20vw; //change later
  gap: 10px;

  img:first-child {
    grid-column: span 2;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 20vw 20vw;
  }

  @media screen and (min-width: ${({ theme }) =>
      theme.breakpoints.largeDesktop}) {
    grid-template-columns: 288px 288px;
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;

  position: sticky;
  top: 135px; //header height, adapt later
  height: fit-content;
  //border: 1px solid red;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 450px;
  }
`;

export const ProductImage = styled.img`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
  }
`;

export const ReviewsSection = styled.section``;

export const RelatedProductsSection = styled.section``;

export const ProductData = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 32px;
  padding-bottom: 32px;
  grid-gap: 26px;
`;

export const ProductName = styled.h3`
  font-family: ${({ theme }) => theme.typography.fontFamilyBase};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.black};
  text-transform: capitalize;
  padding-bottom: 20px;
`;

export const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 16px;
  padding-bottom: 20px;
`;

export const ProductContents = styled.span`
  // create global style for this
  color: ${({ theme }) => theme.colors.blackTransparent1};
  text-transform: uppercase;
  font-size: 12px;
`;

export const ProductDescription = styled.p`
  font-size: 14px;
  line-height: 24px;
  margin: 0;
`;

export const Price = styled.b`
  color: ${({ theme }) => theme.colors.imperialRed};
  font-size: 30px;
  line-height: 40px;
`;

export const CounterAndAddBtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  grid-gap: 26px;
`;

export const NoProductMessage = styled.p`
  color: ${({ theme }) => theme.colors.blackTransparent1};
  text-align: center;
  line-height: 48px;
  font-size: 28px;
  padding: 36px;
`;
