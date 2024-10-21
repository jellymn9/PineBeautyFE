import styled from "styled-components";

import colors from "../../utils/colors";

export const Container = styled.div`
  display: grid;
  grid-gap: 60px;
  grid-template-columns: calc(200px + 40px) auto;
`;

export const ProductsSection = styled.section`
  width: auto;

  height: 300px;
  overflow-y: scroll;
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
