import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 60px;
`;

export const BannerAndHeading = styled.div`
  --banner-aspect-ratio: 2;

  width: 100vw;
  height: calc(100vw / var(--banner-aspect-ratio));

  display: flex;
  align-items: center;
  position: relative;
`;

export const BannerImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const SectionHeading = styled.h1`
  padding-left: 10%;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.typography.fontFamilyBase};
  font-weight: 500;
  text-transform: uppercase;
  z-index: 10;
`;
