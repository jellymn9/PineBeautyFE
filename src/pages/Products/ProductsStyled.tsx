import styled from "styled-components";

import colors from "../../utils/colors";

export const Container = styled.div`
  display: grid;
  grid-gap: 60px;
  grid-template-columns: calc(200px + 40px) auto;
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

export const SectionHeading = styled.h2`
  color: ${colors.olivine};
  font-family: Cinzel-Bold;
  font-weight: 500;
`;

export const SectionDescription = styled.p`
  font-size: 16px;
  line-height: 26px;
  font-weight: 500;
  font-family: DidactGothic-Regular;
`;
