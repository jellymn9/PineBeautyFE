export const convertToPixels = (vwValue: number) => {
  const viewportWidth = window.innerWidth;
  return (vwValue / 100) * viewportWidth; //px
};
