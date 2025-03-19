import styled from "styled-components";

export const Container = styled.div`
  --container-width: 12.864vw;

  display: grid;
  gap: 50px 16px;
  //grid-template-columns: min-content min-content min-content;
  grid-template-columns: var(--container-width) var(--container-width) var(
      --container-width
    );
`;
