import styled from "styled-components";

export const IconButton = styled.button`
  background: none;
  border: none;
  &:hover {
    cursor: pointer;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }
`;
