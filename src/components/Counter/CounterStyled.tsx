import styled from "styled-components";
import colors from "../../utils/colors";

export const Container = styled.div`
  background-color: transparent;
  //border-radius: 10px;
  border: 1px solid ${colors.blackTransparent1};
  height: auto;
  width: min-content;
  height: 40px;
  display: flex;
  flex-direction: row;
  grid-gap: 12px;
  align-items: center;
  color: ${colors.black};
`;

export const Amount = styled.span``;
