import styled from "styled-components";

import colors from "@/styles/colors";
import breakpoints from "@/styles/breakpoints";

export const MainContainer = styled.div`
  background-color: ${colors.ebony};
  padding: 48px 24px 0px 24px;

  color: ${colors.white};
`;

export const Container = styled.footer`
  display: flex;
  flex-direction: column;

  padding-bottom: 48px;

  grid-gap: 30px;

  @media screen and (min-width: ${breakpoints.tablet}) {
    flex-direction: row;
    justify-content: space-between;

    grid-gap: 11vw;
  }
`;

export const Subscription = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 12px;
  margin-bottom: 60px;

  font-family: Avenir;
  font-weight: 400;

  @media screen and (min-width: ${breakpoints.tablet}) {
    max-width: 380px;
    order: 5;

    padding-top: 100px;
  }
`;

export const FormHeading = styled.h3`
  font-size: 26px;
  font-weight: 400;
`;

export const InputTemporarily = styled.input`
  height: 26px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid ${colors.whiteTransparent2};
`;

export const CaptchaInfo = styled.i`
  font-size: 14px;
`;

export const SubFooter = styled.div`
  font-family: Montserrat-Variable; //add this 2 props to global style
  letter-spacing: 0.02em;

  font-size: 12px;
  text-transform: uppercase;
  padding-bottom: 12px;
`;

export const IconAndLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 32px;

  @media screen and (min-width: ${breakpoints.tablet}) {
    grid-gap: 22px;

    width: 100%;
  }
`;
