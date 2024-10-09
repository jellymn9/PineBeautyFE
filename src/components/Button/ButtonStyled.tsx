import styled from "styled-components";

import colors from "../../utils/colors";

export const CustomButton = styled.button`
  background-color: ${colors.olivine};
  padding: 6px 12px;
  border: none;
  border-radius: 6px;
  transition: background-color 0.5s;
  &:hover {
    background-color: ${colors.celticBlue};
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  grid-gap: 10px;
`;

export const ButtonText = styled.span`
  font-size: 16px;
  line-height: 26px;
`;
