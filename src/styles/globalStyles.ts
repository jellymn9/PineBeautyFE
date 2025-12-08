import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

 /* ==============================
     MONTSERRAT – VARIABLE (UI FONT)
     ============================== */
  @font-face {
    font-family: "Montserrat";
    src: url("/fonts/Montserrat-Variable.woff2") format("woff2");
    font-weight: 100 900;
    font-style: normal;
    font-display: swap;
  }

  /* ==============================
     DIDACT GOTHIC – REGULAR
     ============================== */
  @font-face {
    font-family: "Didact Gothic";
    src: url("/fonts/DidactGothic-Regular.woff2") format("woff2");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  /* ==============================
     AVENIR – REGULAR (CUSTOM)
     ============================== */
  @font-face {
    font-family: "Avenir";
    src: url("/fonts/Avenir-Regular.woff2") format("woff2");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Avenir";
    src: url("/fonts/Avenir-Medium.woff2") format("woff2");
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Avenir";
    src: url("/fonts/Avenir-Bold.woff2") format("woff2");
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  :root{
    --section-padding: ${({ theme }) => theme.spacing.sectionPadding};
    --section-margin: ${({ theme }) => theme.spacing.sectionMargin};
    width: inherit;
    height: inherit;
    min-height: 100vh;
  }

  body {
  min-height: 100vh;
  width: 100%;
  height: 100%;
  margin: 0;
}

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
    //line-height: 38px;
    line-height: 24px;
  }

  h3 {
    font-size: 24px;
    @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        font-size: 18px;
    }
  }

  h4 {
    font-size: 18px;

     @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
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

  .keen-slider {
    width: fit-content;
  }
  .keen-slider:not([data-keen-slider-disabled]){
    width: inherit;

    .keen-slider__slide {
      min-width: fit-content !important;
      max-width: fit-content !important;
    }
  }

  .keen-slider__slide {
    min-width: fit-content !important;
    max-width: fit-content !important;
  }

`;
