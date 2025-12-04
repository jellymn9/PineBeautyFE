import styled from "styled-components";
import colors from "@/utils/colors";

export const Container = styled.div`
  background-color: transparent;
  //border-radius: 10px;
  border: 1px solid ${colors.blackTransparent1};
  height: auto;
  width: min-content;
  min-width: 104px;
  height: 40px;
  display: flex;
  flex-direction: row;
  grid-gap: 12px;
  align-items: center;
  justify-content: center;
  color: ${colors.black};
`;

export const Amount = styled.span``;
