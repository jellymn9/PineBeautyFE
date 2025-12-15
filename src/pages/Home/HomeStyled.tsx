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
  font-size: 14px;
`;

export const MainHeading = styled.h1`
  font-size: 42px;
  font-family: ${({ theme }) => theme.typography.fontFamilyBrand};
`;

export const SectionParagraph = styled.p`
  font-family: ${({ theme }) => theme.typography.fontFamilyBrand};
`;

export const SustainableAndPure = styled.div`
  background-color: ${({ theme }) => theme.colors.ebony};
  color: ${({ theme }) => theme.colors.whiteTransparent2};

  padding: 60px 17vw;

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
  font-size: 12px;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.typography.fontFamilyBase};
`;

export const SustainableHeading = styled.h3`
  font-size: 24px;
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
