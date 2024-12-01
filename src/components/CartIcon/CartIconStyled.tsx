import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import colors from "../../utils/colors";

const fadeIn = keyframes`
    from {min-width: 0px; line-height: 0px;}
    to { min-width: 28px; line-height: 28px;}
`;

export const CartLink = styled(Link)`
  text-decoration: none;
  color: ${colors.black};
  position: relative;
  width: fit-content;
`;

export const CartNumber = styled.span`
  position: absolute;
  border-radius: 50%;
  background-color: ${colors.celticBlue};
  font-size: 18px;
  line-height: 28px;
  min-width: 28px;
  width: auto;
  bottom: 11px;
  left: 10px;
  text-align: center;
  animation-name: ${fadeIn};
  animation-duration: 0.5s;
`;
