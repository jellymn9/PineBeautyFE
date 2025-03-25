import styled from "styled-components";

import colors from "../../utils/colors";

export const CustomButton = styled.button<{ $isIcon: boolean }>`
  width: fit-content;
  border: none;

  background-color: ${({ $isIcon }) =>
    $isIcon ? "transparent" : `${colors.white}`};

  ${({ $isIcon }) => !$isIcon && `padding: 18px 48px;`};
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
