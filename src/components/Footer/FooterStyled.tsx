import styled from "styled-components";

import colors from "../../utils/colors";
import breakpoints from "../../utils/breakpoints";

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
  }
`;

export const Subscription = styled.div`
  //max-width: 500px;
  //width: auto;
  display: flex;
  flex-direction: column;
  grid-gap: 12px;
  margin-bottom: 60px;

  font-family: Avenir;
  font-weight: 400;

  //color: ${colors.white};
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
