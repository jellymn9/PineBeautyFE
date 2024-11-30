import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "../../utils/colors";

export const CartLink = styled(Link)`
  text-decoration: none;
  color: ${colors.black};
  position: relative;
`;

export const CartNumber = styled.span`
  position: absolute;
  border-radius: 50%;
  background-color: ${colors.celticBlue};
`;
