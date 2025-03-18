import { X } from "lucide-react";
import { CloseBtn } from "./CloseBtnStyled";

interface CloseBtnPropsI {
  handleClose: () => void;
}

export const CloseButton = ({ handleClose }: CloseBtnPropsI) => {
  return (
    <CloseBtn aria-label="Close" onClick={handleClose}>
      <X />
    </CloseBtn>
  );
};
