import { X } from "lucide-react";
import { CloseBtn } from "./CloseBtnStyled";

interface CloseBtnPropsI {
  handleClose: () => void;
  iconSize?: number;
}

export const CloseButton = ({ handleClose, iconSize }: CloseBtnPropsI) => {
  return (
    <CloseBtn aria-label="Close" onClick={handleClose}>
      <X size={iconSize || 24} />
    </CloseBtn>
  );
};
