import { XIcon } from "lucide-react";
import { InnerWrapper, ToastContainer } from "./ToastStyled";
import Button from "../Button/Button";
import { useToast } from "../../context/ToastContext";

//export type ToastMessageTypeT = "success" | "error" | "info";

export const Toast = () => {
  const { toastMessage, isToastVisible, hideToast, messageType } = useToast();

  if (!isToastVisible) return null;
  return (
    <ToastContainer $messageType={messageType}>
      <InnerWrapper>
        <p>{toastMessage}</p>
        <Button handleClick={hideToast} text="" icon={<XIcon size={25} />} />
      </InnerWrapper>
    </ToastContainer>
  );
};
