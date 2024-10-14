const rgbColor = (r: number, g: number, b: number, alpha = 1) => {
  return `rgb(${r},${g},${b},${alpha})`;
};

const colors = {
  platinum: rgbColor(224, 224, 224), //"#e0e0e0",
  babyPowder: rgbColor(252, 251, 244), //"#fcfbf4",
  olivine: rgbColor(146, 185, 86), //"#92b956",
  black: rgbColor(0, 0, 0), //"#000",
  white: rgbColor(255, 255, 255), // "#fff",
  alabaster: rgbColor(231, 227, 218), //"#e7e3da",
  gray: rgbColor(119, 119, 119), //"#777777",
  celticBlue: rgbColor(34, 103, 216), //"#2267d8",
  whiteTransparent1: rgbColor(255, 255, 255, 0.34),
};

export default colors;
