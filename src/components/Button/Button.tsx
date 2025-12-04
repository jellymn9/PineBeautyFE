import { BtnVariantT } from "@/utils/buttonStyles";
import { ButtonText, InnerContainer, CustomButton } from "./ButtonStyled";

interface ButtonPropsI {
  text?: string;
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
  //add aria-label for icon buttons
  return (
    <CustomButton
      {...(handleClick && { onClick: handleClick })}
      disabled={!!disabled}
      type={type}
      $isIcon={variant === "icon"}
      $variant={styleVariant}
    >
      {variant === "icon" && !!icon ? (
        icon
      ) : (
        <>
          {icon ? (
            <InnerContainer>
              {icon}
              {text && <ButtonText>{text}</ButtonText>}
            </InnerContainer>
          ) : (
            <ButtonText>{text}</ButtonText>
          )}
        </>
      )}
    </CustomButton>
  );
};

export default Button;
