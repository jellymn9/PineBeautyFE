import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  //padding: 0 60px;
  align-self: center;
  padding-top: 24px;
  width: 100%;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 60px;
  }
`;

export const SecondaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  width: 100%;
  grid-gap: 24px;

  &:focus {
    outline: none;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    align-self: center;
    width: auto;
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

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;

  padding: 30px 60px;

  position: sticky;
  top: 135px; //header height, adapt later
  height: fit-content;
  //border: 1px solid red;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 450px;
    padding: 0;
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
  font-size: ${({ theme }) => theme.fontSizes.xs};
  line-height: ${({ theme }) => theme.lineHeights.xs};
`;

export const ProductDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: ${({ theme }) => theme.lineHeights.sm};
  margin: 0;
`;

export const Price = styled.b`
  color: ${({ theme }) => theme.colors.imperialRed};
  font-size: ${({ theme }) => theme.fontSizes["2xl"]};
  line-height: ${({ theme }) => theme.lineHeights["2xl"]};
`;

export const CounterAndAddBtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  grid-gap: 26px;
`;

export const NoProductMessage = styled.p`
  color: ${({ theme }) => theme.colors.blackTransparent1};
  text-align: center;
  line-height: ${({ theme }) => theme.lineHeights["2xl"]};
  font-size: ${({ theme }) => theme.fontSizes["2xl"]};
  padding: 36px;
`;

export const AccordionWrapper = styled.div<{ $isShownMobile?: boolean }>`
  ${({ $isShownMobile }) => !$isShownMobile && "display: none;"}

  padding: 30px 0;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0;
  }
`;
