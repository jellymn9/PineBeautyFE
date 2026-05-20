import { forwardRef } from "react";

import { RadioInputLabel, CustomRadioInput } from "./InputStyled";

type RadioInputPropsT = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "type"
> & {
  label: string;
};

const RadioInput = forwardRef<HTMLInputElement, RadioInputPropsT>(
  ({ label, ...props }, ref) => {
    return (
      <RadioInputLabel>
        <CustomRadioInput ref={ref} type="radio" {...props} />

        {label}
      </RadioInputLabel>
    );
  },
);

RadioInput.displayName = "RadioInput";

export default RadioInput;
