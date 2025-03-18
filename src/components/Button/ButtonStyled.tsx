import styled from "styled-components";

import colors from "../../utils/colors";

export const CustomButton = styled.button`
  // background-color: ${colors.olivine};
  // padding: 6px 12px;
  // border: none;
  // border-radius: 6px;
  // transition: background-color 0.5s;
  // &:hover {
  //   background-color: ${colors.celticBlue};
  // }

  width: fit-content;
  border: none;
  background-color: ${colors.white};
  padding: 18px 48px;
`;

export const InnerContainer = styled.div`
  display: flex;
  grid-gap: 10px;
`;

export const ButtonText = styled.span`
  display: inline-block;
  font-size: 12px;
  line-height: 22px;
  min-width: 74px;
  width: fit-content;
  text-transform: uppercase;
  font-family: Montserrat-Variable;
  color: ${colors.black};
`;
