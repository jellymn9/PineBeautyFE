import styled from "styled-components";
import { convertToPixels } from "@/helpers/layoutHelper";
import { Link } from "react-router-dom";

const mobileWidth = 100; // %
const tabletWidth = 92.668; //vw
const laptopWidth = 1148; //px

const categoryWidthMobile = 77.042; //vw
const categoryWithTablet = 28.951; //vw
const categoryWidthLaptop = 362.66; //px

const thumbWidth = 40;

export const CategoriesContainer = styled.div`
  gap: 16px;
  display: flex;
  overflow-x: auto;
  white-space: nowrap;

  width: ${mobileWidth}%;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: ${tabletWidth}vw;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    width: ${laptopWidth}px;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CategoryLink = styled(Link)``;

export const Category = styled.div<{ $imageURL: string }>`
  flex: 0 0 auto;

  background-image: url(${({ $imageURL }) => $imageURL});
  background-color: transparent;
  background-size: contain;
  background-repeat: no-repeat;
  width: ${categoryWidthMobile}vw;
  height: calc(77.042vw / 0.707);

  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes["xl"]};
  line-height: ${({ theme }) => theme.lineHeights["xl"]};
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: ${categoryWithTablet}vw;
    height: calc(28.951vw / 0.707);
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    width: ${categoryWidthLaptop}px;
    height: calc(362.66px / 0.707);
  }
`;

export const CustomScrollbar = styled.div`
  width: ${mobileWidth}%;
  height: 6px;
  background-color: ${({ theme }) => theme.colors.whiteTransparent2};
  margin-top: 20px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: ${tabletWidth}vw;

    display: none;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    width: ${laptopWidth}px;
  }
`;

export const CustomScrollThumb = styled.div<{
  $offset: { containerWidth: number; overflowWidth: number };
  $scrollLeft: number;
}>`
  --category-width-px: ${Math.ceil(convertToPixels(categoryWidthMobile))};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    --category-width-px: ${Math.ceil(convertToPixels(categoryWithTablet))};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    --category-width-px: ${Math.ceil(convertToPixels(categoryWithTablet))};
  }

  --category-width-px: ${Math.ceil(convertToPixels(77.042))};
  --step-constant: ${({ $offset }) =>
    `${$offset.containerWidth}/ (${$offset.overflowWidth} - ${thumbWidth} - var(--category-width-px))`};

  width: ${thumbWidth}px;
  background-color: ${({ theme }) => theme.colors.blackTransparent1};
  height: inherit;
  border-radius: 6px;

  transition: margin-left 0.3s linear;

  margin-left: ${({ $scrollLeft }) =>
    `calc((${$scrollLeft}px) * var(--step-constant))`};
`;
