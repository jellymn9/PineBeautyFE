import { XIcon } from "lucide-react";

import Button from "@/components/Button/Button";
import { useToast } from "@/context/ToastContext";
import { InnerWrapper, ToastContainer } from "./ToastStyled";

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
