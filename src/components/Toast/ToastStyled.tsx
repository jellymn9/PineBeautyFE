import styled from "styled-components";
import colors from "@/utils/colors";
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
  background-color: ${colors.babyPowder};
  border-style: solid;
  border-color: ${(props) => {
    switch (props.$messageType) {
      case "success":
        return colors.olivine;
      case "error":
        return colors.imperialRed;
      case "info":
        return colors.celticBlue;
    }
  }};
  border-width: 2px;

  color: ${colors.black};
  font-size: 16px;
`;

export const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
