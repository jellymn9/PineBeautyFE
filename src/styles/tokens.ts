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
  xs: "4px",
  sm: "8px",
  md: "16px",
  lg: "24px",
  xl: "32px",
  "2xl": "40px",
  "3xl": "48px",
  "4xl": "60px",
  "5xl": "80px",
  sectionPadding: "60px", // Keep for backward compatibility
  sectionMargin: "40px", // Keep for backward compatibility
};

export const fontSizes = {
  xs: "12px",
  sm: "14px",
  md: "16px",
  lg: "18px",
  xl: "24px",
  "2xl": "28px",
  "3xl": "32px",
  "4xl": "42px",
  "5xl": "48px",
};

export const lineHeights = {
  xs: "18px", // pairs well with fontSizes.xs (12px)
  sm: "20px", // pairs well with fontSizes.sm (14px)
  md: "24px", // pairs well with fontSizes.md (16px)
  lg: "28px", // pairs well with fontSizes.lg (18px)
  xl: "32px", // pairs well with fontSizes.xl (24px)
  "2xl": "38px", // pairs well with fontSizes["2xl"] (28px)
  "3xl": "42px", // pairs well with fontSizes["3xl"] (32px)
  "4xl": "52px", // pairs well with fontSizes["4xl"] (42px)
  "5xl": "60px", // pairs well with fontSizes["5xl"] (48px)

  tight: "1.2",
  normal: "1.5",
  relaxed: "1.75",
};

export const typography = {
  fontFamilyBase:
    "'Montserrat', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",

  /* Secondary / alternative UI text */
  fontFamilyAlt: "'Didact Gothic', system-ui, sans-serif",

  /* Brand / marketing / special sections */
  fontFamilyBrand: "'Josefin Sans', 'Montserrat', system-ui, sans-serif",
};
