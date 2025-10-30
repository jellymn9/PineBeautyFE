import styled from "styled-components";
import colors from "@/utils/colors";
import { ToastMessageTypeT } from "@/context/ToastContext";

export const ToastContainer = styled.div<{
  $messageType: ToastMessageTypeT;
}>`
  position: fixed;
  top: 10%;
  left: 40%;
  z-index: 1000;
  min-width: 300px;
  width: fit-content;
  padding: 16px 24px;
  background-color: ${colors.babyPowder};
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

  color: ${colors.black};
  fotnt-size: 16px;
  border-width: 2px;
`;

export const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
`;
