import React, { createContext, useContext, useState, ReactNode } from "react";

interface ToastContextType {
  showToast: (message: string, type: ToastMessageTypeT) => void;
  hideToast: () => void;
  toastMessage: string | null;
  isToastVisible: boolean;
  messageType: ToastMessageTypeT;
}

export type ToastMessageTypeT = "success" | "error" | "info";

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isToastVisible, setIsToastVisible] = useState(false);
  const [messageType, setMessageType] = useState<ToastMessageTypeT>("info");

  const showToast = (message: string, type: ToastMessageTypeT) => {
    setToastMessage(message);
    setMessageType(type);
    setIsToastVisible(true);
  };

  const hideToast = () => {
    setToastMessage(null);
    setIsToastVisible(false);
  };

  return (
    <ToastContext.Provider
      value={{
        showToast,
        hideToast,
        toastMessage,
        isToastVisible,
        messageType,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = (): ToastContextType => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};
