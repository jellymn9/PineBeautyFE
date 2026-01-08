import {
  CheckboxContainer,
  CheckboxInput,
  CheckedSign,
  Label,
} from "./InputStyled";

export type CheckboxInputProps = {
  label: string;
  id: string;
  name?: string;
  value?: string;
  checked?: boolean; // controlled
  defaultChecked?: boolean; // uncontrolled
  onCheckedChange?: (
    checked: boolean,
    value: string | (string & readonly string[]) | undefined
  ) => void;
} & Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "onChange" | "type" | "checked" | "defaultChecked"
>;

const Checkbox = ({
  id,
  label,
  name,
  value,
  checked,
  defaultChecked,
  onCheckedChange,
  ...rest
}: CheckboxInputProps) => {
  const isControlled = checked !== undefined;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onCheckedChange?.(e.target.checked, value);
  };

  return (
    <CheckboxContainer>
      <Label htmlFor={id}>{label}</Label>
      <CheckboxInput
        {...rest}
        type="checkbox"
        id={id}
        name={name}
        value={value}
        defaultChecked={isControlled ? undefined : defaultChecked}
        checked={isControlled ? checked : undefined}
        onChange={(e) => onChange(e)}
      />
      <CheckedSign />
    </CheckboxContainer>
  );
};

export default Checkbox;
