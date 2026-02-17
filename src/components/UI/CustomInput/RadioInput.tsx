import { RadioInputLabel, CustomRadioInput } from "./InputStyled";

type ControlledPropsT = {
  checked: boolean;
  onChange: (value: string) => void;
  defaultChecked?: never;
};

type UncontrolledPropsT = {
  checked?: never;
  onChange?: never;
  defaultChecked?: boolean;
};

type RadioInputPropsT = {
  name: string;
  value: string;
  label: string;
} & (ControlledPropsT | UncontrolledPropsT);

const RadioInput = ({
  name,
  value,
  label,
  onChange,
  checked,
  defaultChecked,
}: RadioInputPropsT) => {
  return (
    <RadioInputLabel>
      <CustomRadioInput
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={() => onChange?.(value)}
        defaultChecked={defaultChecked}
      />
      {label}
    </RadioInputLabel>
  );
};

export default RadioInput;
