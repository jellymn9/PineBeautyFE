import styled from "styled-components";
import colors from "../../utils/colors";
import breakpoints from "../../utils/breakpoints";
import { convertToPixels } from "../../helpers/layoutHelper";

const mobileWidth = 100; // %
const tabletWidth = 92.668; //vw
const laptopWidth = 1148; //px

const categoryWidthMobile = 77.042; //vw
const categoryWithTablet = 28.951; //vw
const categoryWidthLaptop = 362.66; //px

const thumbWidth = 40;

// export const CategoriesAndScrollContainer = styled.div`
//   gap: 16px;
//   display: flex;
//   overflow-x: auto;
//   flex-direction: column;

//   width: 100%;

//   -ms-overflow-style: none;
//   scrollbar-width: none;
//   &::-webkit-scrollbar {
//     display: none;
//   }
// `;

export const CategoriesContainer = styled.div`
  gap: 16px;
  display: flex;
  overflow-x: auto;
  white-space: nowrap;

  width: ${mobileWidth}%;

  @media screen and (min-width: ${breakpoints.tablet}) {
    width: ${tabletWidth}vw;
  }

  @media screen and (min-width: ${breakpoints.laptop}) {
    width: ${laptopWidth}px;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Category = styled.div<{ $imageURL: string }>`
  flex: 0 0 auto;

  background-image: url(${({ $imageURL }) => $imageURL});
  background-color: yellow;
  background-size: contain;
  background-repeat: no-repeat;
  width: ${categoryWidthMobile}vw;
  height: calc(77.042vw / 0.707);

  padding: auto auto;
  color: ${colors.white};
  font-size: 22px;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: ${breakpoints.tablet}) {
    width: ${categoryWithTablet}vw;
    height: calc(28.951vw / 0.707);
  }

  @media screen and (min-width: ${breakpoints.laptop}) {
    width: ${categoryWidthLaptop}px;
    height: calc(362.66px / 0.707);
  }
`;

export const CustomScrollbar = styled.div`
  width: ${mobileWidth}%;
  height: 6px;
  background-color: ${colors.whiteTransparent2};
  border: 1px solid red;

  @media screen and (min-width: ${breakpoints.tablet}) {
    width: ${tabletWidth}vw;
  }

  @media screen and (min-width: ${breakpoints.laptop}) {
    width: ${laptopWidth}px;
  }
`;

export const CustomScrollThumb = styled.div<{
  $offset: { containerWidth: number; overflowWidth: number };
  $scrollLeft: number;
}>`
  --category-width-px: ${convertToPixels(categoryWidthMobile)};

  @media screen and (min-width: ${breakpoints.tablet}) {
    --category-width-px: ${convertToPixels(categoryWithTablet)};
  }

  @media screen and (min-width: ${breakpoints.laptop}) {
    --category-width-px: ${convertToPixels(categoryWithTablet)};
  }

  --category-width-px: ${convertToPixels(77.042)};
  --step-constant: ${({ $offset }) =>
    `${$offset.containerWidth}/ (${$offset.overflowWidth} - ${thumbWidth} - var(--category-width-px))`};
  --test-t: calc(4px / 4);

  width: ${thumbWidth}px;
  background-color: ${colors.blackTransparent1};
  height: inherit;

  transition: margin-left 0.3s linear;

  margin-left: ${({ $scrollLeft }) =>
    `calc((${$scrollLeft}px) * var(--step-constant))`};
`;
