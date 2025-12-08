import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  //background-color: ${({ theme }) => theme.colors.babyPowder};
  display: flex;
  flex-direction: column;
`;

export const ContentContainer = styled.main`
  //width: 1000px;
  width: 100%;
  align-self: center;
  flex: 1;
  display: flex;
  flex-direction: column;
  //overflow: hidden;
`;
