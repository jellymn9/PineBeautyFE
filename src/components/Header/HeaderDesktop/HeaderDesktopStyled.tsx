import styled from "styled-components";

export const ContainerBlock = styled.div`
  height: 135px;
  z-index: 1000;
`;

export const Container = styled.header<{
  $isSticky: boolean;
  $isActive: boolean;
}>`
  padding: 30px 30px;
  background-color: ${({ theme }) => theme.colors.white};
  backdrop-filter: blur(10px);

  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  ${({ $isSticky, theme }) =>
    $isSticky &&
    `
        background-color: ${theme.colors.whiteTransparent1};
        display: none;
    `}

  ${({ $isActive }) =>
    $isActive &&
    `
        display: block;
  `}

  &:hover {
    background-color: ${({ theme }) => theme.colors.white};
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  align-items: center;
`;
