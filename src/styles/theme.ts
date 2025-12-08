import { colors, spacing, typography } from "./tokens";

export const theme = {
  colors,
  spacing,
  typography,
  breakpoints: {
    smallMobile: "320px",
    mobile: "480px",
    tablet: "768px",
    smallDesktop: "1024px",
    laptop: "1280px",
    largeDesktop: "1440px",
    fullHDscreen: "1920px",
  },
  radii: {
    sm: "4px",
    md: "8px",
    lg: "12px",
    round: "999px",
  },
};

export type AppTheme = typeof theme;
