import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

 /* ==============================
     MONTSERRAT – VARIABLE
     ============================== */
  @font-face {
    font-family: "Montserrat";
    src: url("/fonts/Montserrat-VariableFont_wght.ttf") format("truetype");
    font-weight: 100 900;
    font-style: normal;
    font-display: swap;
  }

  /* ==============================
     DIDACT GOTHIC – REGULAR
     ============================== */
  @font-face {
    font-family: "Didact Gothic";
    src: url("/fonts/DidactGothic-Regular.ttf") format("truetype");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  /* ==============================
     JOSEFIN SANS – VARIABLE
     ============================== */
  @font-face {
    font-family: "Josefin Sans";
    src: url("/fonts/JosefinSans-VariableFont_wght.ttf") format("truetype");
    font-weight: 100 700;
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
  overflow-x: hidden;
}

  h1, h2, h3, h4, h5 {
    margin: 0;
    letter-spacing: 0.02em;
    font-weight: 400;
  }

  p {
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
