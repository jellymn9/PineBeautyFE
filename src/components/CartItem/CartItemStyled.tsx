import styled from "styled-components";
import colors from "../../utils/colors";

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  //height: 100px;
`;

export const ItemInsideContainer = styled.div`
  display: flex;
  margin: 16px 0;
`;

export const ItemImg = styled.div`
  width: 180px;
  height: 180px;
  background: lightblue;
  text-align: center;
  border-radius: 12px;
`;

export const ItemDetailsAndActions = styled.div`
  min-width: 400px;
  max-width: 553px;
  width: auto;
  display: flex;
  flex-direction: column;
  padding-left: 30px;
  justify-content: space-between;
`;

export const ItemName = styled.h3`
  font-size: 16px;
  line-height: 26px;
`;

export const ActionsContainer = styled.div`
  display: flex;
  grid-gap: 60px;
`;

export const ItemPrice = styled.span`
  min-width: 60px;
  width: auto;
  justify-self: end;
  text-align: end;
`;

export const HSeparator = styled.div`
  height: 2px;
  background-color: ${colors.timberwolf};
`;
