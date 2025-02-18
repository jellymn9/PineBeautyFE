import styled from "styled-components";
import breakpoints from "../../utils/breakpoints";

export const Container = styled.div`
  display: flex;
  grid-gap: 30px;
  padding: 36px 0;

  flex-direction: column;

  justify-content: center;

  @media screen and (min-width: ${breakpoints.tablet}) {
    flex-direction: row;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  grid-gap: 20px;
  flex-direction: column;

  @media screen and (min-width: ${breakpoints.tablet}) {
    flex-direction: row;
  }
`;

export const TileAndDescContainer = styled.div`
  max-width: 300px;
`;

export const Title = styled.h3`
  text-transform: uppercase;
  margin: 0;

  font-size: 18px;
  line-height: 28px;

  font-family: Montserrat-Variable;
  font-weight: 400;
`;

export const Description = styled.p`
  font-family: Avenir;
  font-size: 16px;
  line-height: 26px;
`;
