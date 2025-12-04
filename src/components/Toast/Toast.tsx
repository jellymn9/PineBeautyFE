import { useToast } from "@/context/ToastContext";
import { InnerWrapper, ToastContainer } from "./ToastStyled";
import { CloseButton } from "../CloseBtn/CloseBtn";

export const Toast = () => {
  const { toastMessage, isToastVisible, hideToast, messageType } = useToast();

  if (!isToastVisible) return null;
  return (
    <ToastContainer $messageType={messageType}>
      <InnerWrapper>
        <p>{toastMessage}</p>
        <CloseButton handleClose={hideToast} />
      </InnerWrapper>
    </ToastContainer>
  );
};
