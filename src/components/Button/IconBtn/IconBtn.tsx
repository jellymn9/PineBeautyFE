import { IconButton } from "./IconBtnStyled";

interface IconBtnPropsI {
  icon: JSX.Element;
  label: string;
  handleClick: () => void;
  disabled?: boolean;
}

const IconBtn = ({ icon, label, handleClick, disabled }: IconBtnPropsI) => {
  return (
    <IconButton aria-label={label} onClick={handleClick} disabled={disabled}>
      {icon}
    </IconButton>
  );
};

export default IconBtn;
