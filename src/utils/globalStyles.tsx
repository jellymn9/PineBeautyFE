import { createGlobalStyle } from "styled-components";
import breakpoints from "./breakpoints";

export const GlobalStyles = createGlobalStyle`

  h1, h2, h3, h4 {
    margin: 0;
    letter-spacing: 0.02em;
    font-weight: 400;
  }
  
  h1 {
    font-size: 42px;
    line-height: 52px;
    font-family: Avenir;
  }

  h2 {
    //font-size: 28px;
    font-size: 14px;
    //line-heght: 38px;
    line-heght: 24px;
  }

  h3 {
    font-size: 24px;
    @media screen and (max-width: ${breakpoints.tablet}) {
        font-size: 18px;
    }
  }

  h4 {
    font-size: 18px;

     @media screen and (max-width: ${breakpoints.tablet}) {
        font-size: 14px;
      }
  }

  h5 {
    font-size: 16px;
  }

  p {
    font-family: Avenir;
    margin: 0;
  }

  a {
    text-decoration: none;
    color: unset;
  }

`;
