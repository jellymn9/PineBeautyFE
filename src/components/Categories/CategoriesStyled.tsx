import styled from "styled-components";

export const CategoriesContainer = styled.div`
  gap: 16px;
  display: flex;
  overflow-x: auto;
  white-space: nowrap;

  width: 100%;

  padding: 0 20px;
`;

export const Category = styled.div`
  flex: 0 0 auto;
  width: calc(100% - 20%);
  height: auto;
  background-image: url("bodyA2.jpg");
  background-size: cover;
  background-repeat: no-repeat;

  height: 200px;
  width: 300px;
`;
