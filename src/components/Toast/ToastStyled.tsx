import styled from "styled-components";
import { ToastMessageTypeT } from "@/context/ToastContext";

export const ToastContainer = styled.div<{
  $messageType: ToastMessageTypeT;
}>`
  position: fixed;
  top: 5%;
  left: 40%;
  z-index: 1000;
  min-width: 300px;
  width: fit-content;
  padding: 16px 24px;
  background-color: ${({ theme }) => theme.colors.babyPowder};
  border-style: solid;
  border-color: ${(props) => {
    switch (props.$messageType) {
      case "success":
        return props.theme.colors.olivine;
      case "error":
        return props.theme.colors.imperialRed;
      case "info":
        return props.theme.colors.celticBlue;
    }
  }};
  border-width: 2px;

  color: ${({ theme }) => theme.colors.black};
  font-size: 16px;

  &:focus {
    outline: none;
  }
`;

export const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
