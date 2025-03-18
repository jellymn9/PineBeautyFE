import styled from "styled-components";

export const Container = styled.div`
  --aspect-ratio: 0.651; //will be moved up, most probably
  --height-row: calc(12.864vw * var(--aspect-ratio));

  display: grid;
  gap: 50px 16px;
  //grid-template-columns: min-content min-content min-content;
  grid-template-columns: 12.864vw 12.864vw 12.864vw;
  //grid-template-rows: var(--height-row);
`;
