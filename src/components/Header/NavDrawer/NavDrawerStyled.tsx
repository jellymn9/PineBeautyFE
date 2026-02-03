import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavLinks = styled(Link)`
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  line-height: ${({ theme }) => theme.lineHeights.xs};
  //height: 42px;
  padding: 18px 10px;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.typography.fontFamilyBase};
  color: ${({ theme }) => theme.colors.black};
`;

export const HSeparator = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.timberwolf};
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
