import { useEffect, useRef } from "react";

import { useToast } from "@/context/ToastContext";
import { CloseButton } from "../CloseBtn/CloseBtn";
import { InnerWrapper, ToastContainer } from "./ToastStyled";

export const Toast = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { toastMessage, isToastVisible, hideToast, messageType } = useToast();

  useEffect(() => {
    if (!isToastVisible) return;
    const basePageElement = document.activeElement as HTMLElement | null;

    if (containerRef.current) {
      containerRef.current?.focus();
    }

    return () => {
      basePageElement?.focus();
    };
  }, [isToastVisible]);

  if (!isToastVisible) return null;

  return (
    <ToastContainer $messageType={messageType} ref={containerRef} tabIndex={-1}>
      <InnerWrapper>
        <p>{toastMessage}</p>
        <CloseButton handleClose={hideToast} />
      </InnerWrapper>
    </ToastContainer>
  );
};
