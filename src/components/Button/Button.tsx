import { BtnVariantT } from "@/styles/mixins";
import { ButtonText, InnerContainer, CustomButton } from "./ButtonStyled";

interface ButtonPropsI {
  text: string;
  handleClick?: () => void;
  variant?: "regular" | "icon";
  icon?: JSX.Element;
  disabled?: boolean;
  type?: "submit" | "reset" | "button";
  styleVariant?: BtnVariantT;
}

const Button = function ({
  text,
  handleClick,
  icon,
  disabled,
  type = "button",
  variant = "regular",
  styleVariant,
}: ButtonPropsI) {
  return (
    <CustomButton
      {...(handleClick && { onClick: handleClick })}
      disabled={!!disabled}
      type={type}
      $isIcon={variant === "icon"}
      $variant={styleVariant}
    >
      <>
        {icon ? (
          <InnerContainer>
            {icon}
            <ButtonText>{text}</ButtonText>
          </InnerContainer>
        ) : (
          <ButtonText>{text}</ButtonText>
        )}
      </>
    </CustomButton>
  );
};

export default Button;
