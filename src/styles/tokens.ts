import { rgbColor } from "@/helpers/styleHelper";

export const colors = {
  platinum: rgbColor(224, 224, 224), //"#e0e0e0",
  babyPowder: rgbColor(252, 251, 244), //"#fcfbf4",
  olivine: rgbColor(146, 185, 86), //"#92b956",
  black: rgbColor(0, 0, 0), //"#000",
  white: rgbColor(255, 255, 255), // "#fff",
  alabaster: rgbColor(231, 227, 218), //"#e7e3da",
  gray: rgbColor(119, 119, 119), //"#777777",
  timberwolf: rgbColor(119, 119, 119, 0.34),
  celticBlue: rgbColor(34, 103, 216), //"#2267d8",
  whiteTransparent1: rgbColor(255, 255, 255, 0.34),
  whiteTransparent2: rgbColor(255, 255, 255, 0.7),
  imperialRed: rgbColor(248, 53, 62), //#f8353e,
  ebony: rgbColor(83, 87, 78), //#53574e
  blackTransparent1: rgbColor(0, 0, 0, 0.34),
  blackTransparent2: rgbColor(0, 0, 0, 0.07),
};

export const spacing = {
  sectionPadding: "60px",
  sectionMargin: "40px",
};

export const typography = {
  fontFamilyBase:
    "'Montserrat', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",

  /* Secondary / alternative UI text */
  fontFamilyAlt: "'Didact Gothic', system-ui, sans-serif",

  /* Brand / marketing / special sections */
  fontFamilyBrand:
    "'Josefin Sans Variable', 'Montserrat', system-ui, sans-serif",
  h1: {
    fontSize: "42px",
    lineHeight: "52px",
    fontWeight: 400,
    letterSpacing: "0.02em",
  },
  // adjust h2–h5
};
