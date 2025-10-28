import { XIcon } from "lucide-react";
import { InnerWrapper, ToastContainer } from "./ToastStyled";
import Button from "../Button/Button";

export type ToastMessageTypeT = "success" | "error" | "info";

interface ToastPropsI {
  message: string;
  messageType?: ToastMessageTypeT;
  setVisible: React.Dispatch<React.SetStateAction<string>>;
}

export const Toast = ({
  message,
  messageType = "info",
  setVisible,
}: ToastPropsI) => {
  return (
    <ToastContainer messageType={messageType}>
      <InnerWrapper>
        <p>{message}</p>
        <Button handleClick={() => setVisible("")} text="" icon={<XIcon />} />
      </InnerWrapper>
    </ToastContainer>
  );
};
