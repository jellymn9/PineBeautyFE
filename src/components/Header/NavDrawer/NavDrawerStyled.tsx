import styled from "styled-components";
import colors from "../../../utils/colors";
import { Link } from "react-router-dom";

export const Container = styled.aside<{ $isOpen: boolean }>`
  position: fixed;
  left: 0;
  background-color: ${colors.blackTransparent1};
  width: 100%;
  backdrop-filter: blur(10px);

  transition: width 0.5s;
  overflow-y: hidden;
  ${({ $isOpen }) =>
    !$isOpen &&
    `
    width: 0px;
  `}
`;

export const Drawer = styled.nav<{ $isOpen: boolean }>`
  left: 0;
  width: 300px;
  background-color: ${colors.white};
  height: 100vh;
  display: flex;
  flex-direction: column;

  button {
    align-self: end;
    padding: 18px 12px;
  }
`;

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
