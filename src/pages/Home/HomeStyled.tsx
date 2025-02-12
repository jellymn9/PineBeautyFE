import styled from "styled-components";
import colors from "../../utils/colors";

export const Hero = styled.div`
  background-image: url("gen3.jpg");
  background-size: cover;
  padding: 60px 40px;
  background-position: bottom;

  min-height: 500px;
`;

export const FlagHeading = styled.p`
  text-transform: uppercase;
  font-family: Montserrat-Variable;
`;

export const MainHeading = styled.h1`
  font-size: 38px;
  font-family: Avenir;
`;

export const SectionParagraph = styled.p`
  font-family: Avenir;
`;

export const SustainableAndPure = styled.div`
  background-color: ${colors.ebony};
  color: ${colors.whiteTransparent2};

  padding: 60px 17vw;
`;

export const SustainableFlag = styled.p`
  font-size: 12px;
  text-transform: uppercase;
  font-family: Montserrat-Variable;
`;

export const SustainableHeading = styled.h2`
  font-size: 24px;
  font-weight: 400;
  font-family: Avenir;
`;

export const DecorativeSeparator = styled.div`
  height: 4px;
  width: 24px;
  border-radius: 2px;
  background-color: ${colors.whiteTransparent1};
`;

export const Categories = styled.div``;
