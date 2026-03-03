import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

 /* ==============================
     MONTSERRAT – VARIABLE
     ============================== */
  @font-face {
    font-family: "Montserrat";
    src: url("/fonts/Montserrat-VariableFont_wght.woff2") format("woff2");
    font-weight: 100 900;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Montserrat Fallback';
    src: local(Arial);
    size-adjust: 100%;
    ascent-override: normal;
    descent-override: normal;
    line-gap-override: normal;
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

  @font-face {
    font-family: 'DidactGothic-Regular Fallback';
    src: local('Arial');
    size-adjust: 104%;
    ascent-override: 92%;
    descent-override: 8%;
  }

  /* ==============================
     JOSEFIN SANS – VARIABLE
     ============================== */
  @font-face {
    font-family: "Josefin Sans";
    src: url("/fonts/JosefinSans-VariableFont_wght.woff2") format("woff2");
    font-weight: 100 700;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Josefin Sans Fallback';
    src: local(Arial);
    size-adjust: 100%;
    ascent-override: normal;
    descent-override: normal;
    line-gap-override: normal;
 }

  :root{
    --section-padding: ${({ theme }) => theme.spacing.sectionPadding};
    --section-margin: ${({ theme }) => theme.spacing.sectionMargin};
  }
  
  #root {
    min-height: 100vh;
  }

  body {
  min-height: 100vh;
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
