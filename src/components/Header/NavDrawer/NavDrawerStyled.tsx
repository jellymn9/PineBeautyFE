import styled from "styled-components";
import { Link } from "react-router-dom";
import colors from "@/styles/colors";

export const NavLinks = styled(Link)`
  text-decoration: none;
  font-size: 12px;
  line-height: 22px;
  //height: 42px;
  padding: 18px 10px;
  text-transform: uppercase;
  font-family: Montserrat-Variable;
  color: ${colors.black};
`;

export const HSeparator = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${colors.timberwolf};
`;

export const InputContainer = styled.div`
  display: flex;
  padding: 18px;
`;

export const SearchInput = styled.input``;

export const IconsContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
`;
