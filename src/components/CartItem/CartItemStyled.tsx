import styled from "styled-components";
import colors from "../../utils/colors";
import breakpoints from "../../utils/breakpoints";

export const Item = styled.li`
  display: flex;
  flex-direction: column;
`;

export const ItemInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px 0;
  align-items: flex-start;

  @media screen and (min-width: ${breakpoints.tablet}) {
    flex-direction: row;
  }
`;

export const ItemImg = styled.img`
  width: 100%;
  height: auto;
  max-width: 600px;
  background: lightblue;
  text-align: center;

  @media screen and (min-width: ${breakpoints.tablet}) {
    width: 180px;
    height: 180px;
  }
`;

export const ItemPrice = styled.span`
  margin-top: 6px;
  font-size: 16px;
  line-height: 26px;
`;

export const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  color: ${colors.gray};
  font-size: 12px;
  line-height: 22px;
  grid-gap: 6px;
`;

export const ItemDetailsAndActions = styled.div`
  max-width: 553px;
  width: auto;
  display: flex;
  flex-direction: column;
  padding-left: 0px;
  padding-top: 30px;
  justify-content: space-between;
  height: 180px;

  @media screen and (min-width: ${breakpoints.tablet}) {
    padding-left: 30px;
    padding-top: 0px;
  }
`;

export const ItemName = styled.h3`
  font-size: 16px;
  line-height: 26px;
`;

export const HSeparator = styled.div`
  height: 2px;
  background-color: ${colors.timberwolf};
`;

export const BtnWrapper = styled.div`
  align-self: flex-end;
  margin-left: auto;
  margin-right: 0;

  @media screen and (min-width: ${breakpoints.tablet}) {
    margin-left: auto;
    margin-right: 0;
    align-self: flex-start;
  }
`;

export const DetailsAndBtnWrapper = styled.div`
  display: flex;
  width: 100%;
`;
