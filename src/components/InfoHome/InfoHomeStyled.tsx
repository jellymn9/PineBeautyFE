import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  grid-gap: 30px;
  padding: 36px 30px;

  flex-direction: column;

  justify-content: center;
  align-items: center;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;

    align-items: flex-start;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  grid-gap: 20px;
  //flex-direction: column;
  justify-content: center;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;
  }
`;

export const TileAndDescContainer = styled.div`
  max-width: 300px;
`;

export const Title = styled.h4`
  text-transform: uppercase;
  margin-bottom: 6px;

  font-family: ${({ theme }) => theme.typography.fontFamilyBase};
  font-weight: 400;
`;

export const Description = styled.p`
  font-family: Avenir;
  font-size: 16px;
  line-height: 26px;
`;
