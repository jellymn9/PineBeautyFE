import styled from "styled-components";
import colors from "../../utils/colors";

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

export const DrawerBox = styled.nav<{ $isOpen: boolean }>`
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
