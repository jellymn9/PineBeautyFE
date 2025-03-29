import styled from "styled-components";

import colors from "../../utils/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 60px;
`;

export const BannerAndHeading = styled.div<{ $imageURL: string }>`
  --banner-aspect-ratio: 1.777;

  width: 100vw;
  height: calc(100vw / var(--banner-aspect-ratio));
  background-color: transparent;
  background-image: url(${({ $imageURL }) => $imageURL});
  background-repeat: no-repeat;
  background-size: contain;

  display: flex;
  align-items: center;
`;

export const ProductsSection = styled.section`
  width: auto;

  padding-bottom: 32px;
  height: 721px;
  overflow-y: scroll;

  &&::-webkit-scrollbar {
    //display: none;
  }
`;

export const SectionHeading = styled.h1`
  padding-left: 10%;
  color: ${colors.white};
  font-family: Cinzel-Bold;
  font-weight: 500;
`;

export const SectionDescription = styled.p`
  font-size: 16px;
  line-height: 26px;
  font-weight: 500;
  font-family: DidactGothic-Regular;
`;
