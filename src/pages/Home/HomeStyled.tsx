import styled from "styled-components";
import colors from "../../utils/colors";
import breakpoints from "../../utils/breakpoints";

export const Hero = styled.div`
  background-image: url("gen3.jpg");
  background-size: cover;
  padding: 9vw 3.889vw;
  background-position: bottom;
  min-height: 466px;

  @media screen and (min-width: ${breakpoints.mobile}) {
  }
  @media screen and (min-width: ${breakpoints.smallDesktop}) {
    background-image: url("gen3.jpg");
    background-size: cover;
    padding: 9vw 3.889vw;
    background-position: bottom;
  }
  @media screen and (min-width: ${breakpoints.largeDesktop}) {
  }
`;

export const HeroInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 60px;

  height: 356px;
  justify-content: center;
`;

export const FlagHeading = styled.p<{ marginBottom?: number }>`
  margin-bottom: ${({ marginBottom }) => marginBottom || 16}px;
  text-transform: uppercase;
  font-family: Montserrat-Variable;
  font-size: 14px;
`;

export const MainHeading = styled.h1`
  font-size: 42px;
  font-family: Avenir;
`;

export const SectionParagraph = styled.p`
  font-family: Avenir;
`;

export const SustainableAndPure = styled.div`
  background-color: ${colors.ebony};
  color: ${colors.whiteTransparent2};

  padding: 60px 17vw;

  @media screen and (min-width: ${breakpoints.mobile}) {
  }
  @media screen and (min-width: ${breakpoints.smallDesktop}) {
    padding: 6.944vw 10.833vw;
  }
  @media screen and (min-width: ${breakpoints.largeDesktop}) {
  }
`;

export const SustainableFlag = styled.p`
  font-size: 12px;
  text-transform: uppercase;
  font-family: Montserrat-Variable;
`;

export const SustainableHeading = styled.h3`
  font-size: 24px;
  font-weight: 400;
  font-family: Avenir;
  margin: 12px 0;
`;

export const DecorativeSeparator = styled.div`
  height: 4px;
  width: 24px;
  border-radius: 2px;
  background-color: ${colors.whiteTransparent1};
`;

//export const Categories = styled.div``;
