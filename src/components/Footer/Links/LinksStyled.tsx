import styled from "styled-components";
import colors from "../../../utils/colors";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 12px;
`;

export const SingleLink = styled(Link)`
  text-decoration: none;
  color: ${colors.white};
`;
