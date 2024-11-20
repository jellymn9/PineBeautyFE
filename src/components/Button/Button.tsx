import { IconNamesT } from "../../utils/types";
import Icon from "../Icon/Icon";
import { ButtonText, InnerContainer, CustomButton } from "./ButtonStyled";

interface ButtonPropsI {
  text?: string;
  handleClick: () => void;
  icon?: IconNamesT;
}

const Button = function ({ text, handleClick, icon }: ButtonPropsI) {
  return (
    <CustomButton onClick={handleClick}>
      {icon ? (
        <InnerContainer>
          <Icon name={icon} width="22px" height="22px" />
          {text && <ButtonText>{text}</ButtonText>}
        </InnerContainer>
      ) : (
        <ButtonText>{text}</ButtonText>
      )}
    </CustomButton>
  );
};

export default Button;
