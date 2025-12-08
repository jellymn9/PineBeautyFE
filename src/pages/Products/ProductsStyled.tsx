import styled from "styled-components";

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

export const SectionHeading = styled.h1`
  padding-left: 10%;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.typography.fontFamilyBase};
  font-weight: 500;
  text-transform: uppercase;
`;
