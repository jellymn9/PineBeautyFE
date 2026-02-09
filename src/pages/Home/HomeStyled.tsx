import styled from "styled-components";

export const Hero = styled.div`
  background-image: url("gen3.jpg");
  background-size: cover;
  padding: 9vw 3.889vw;
  background-position: bottom;
  min-height: 466px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
  }
  @media screen and (min-width: ${({ theme }) =>
      theme.breakpoints.smallDesktop}) {
    background-image: url("gen3.jpg");
    background-size: cover;
    padding: 9vw 3.889vw;
    background-position: bottom;
  }
  @media screen and (min-width: ${({ theme }) =>
      theme.breakpoints.largeDesktop}) {
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
  font-family: ${({ theme }) => theme.typography.fontFamilyBase};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: ${({ theme }) => theme.lineHeights.sm};
`;

export const MainHeading = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes["4xl"]};
  line-height: ${({ theme }) => theme.lineHeights["4xl"]};
  font-family: ${({ theme }) => theme.typography.fontFamilyBrand};
`;

export const SectionParagraph = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: ${({ theme }) => theme.lineHeights.md};
  font-family: ${({ theme }) => theme.typography.fontFamilyBrand};
`;

export const SustainableAndPure = styled.div`
  background-color: ${({ theme }) => theme.colors.ebony};
  color: ${({ theme }) => theme.colors.whiteTransparent2};

  padding: ${({ theme }) => theme.spacing["4xl"]} 17vw;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
  }
  @media screen and (min-width: ${({ theme }) =>
      theme.breakpoints.smallDesktop}) {
    padding: 6.944vw 10.833vw;
  }
  @media screen and (min-width: ${({ theme }) =>
      theme.breakpoints.largeDesktop}) {
  }
`;

export const SustainableFlag = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  line-height: ${({ theme }) => theme.lineHeights.xs};
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.typography.fontFamilyBase};
`;

export const SustainableHeading = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes["xl"]};
  line-height: ${({ theme }) => theme.lineHeights["xl"]};
  font-weight: 400;
  font-family: ${({ theme }) => theme.typography.fontFamilyBrand};
  margin: 12px 0;
`;

export const DecorativeSeparator = styled.div`
  height: 4px;
  width: 24px;
  border-radius: 2px;
  background-color: ${({ theme }) => theme.colors.whiteTransparent1};
`;

export const CleanBeautyContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 680px;
  overflow-y: hidden;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    flex-direction: row;
  }
`;

export const CleanBeautyText = styled.div`
  box-sizing: border-box;
  //width: 50%;
  height: 100%;
  color: ${({ theme }) => theme.colors.whiteTransparent2};
  background-color: ${(props) => props.theme.colors.ebony};
  padding: ${({ theme }) => theme.spacing["2xl"]}
    ${({ theme }) => theme.spacing["2xl"]};

  align-content: center;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    padding: 0 ${({ theme }) => theme.spacing["2xl"]};
    width: 50%;
  }
`;

export const CleanBeautyImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    width: 50%;
  }
`;
