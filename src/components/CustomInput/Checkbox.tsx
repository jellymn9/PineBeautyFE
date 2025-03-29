import {
  CheckboxContainer,
  CheckboxInput,
  CheckedSign,
  Label,
} from "./InputStyled";

export interface CheckboxInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  checked?: true;
  handleChange: (
    c: boolean,
    value: React.InputHTMLAttributes<HTMLInputElement>["value"] //change handling type here
  ) => void;
}

const Checkbox = ({
  id,
  label,
  value,
  checked = undefined,
  name,
  handleChange,
}: CheckboxInputProps) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(e.target.checked, value);
  };

  return (
    <CheckboxContainer>
      <Label htmlFor={id}>{label}</Label>
      <CheckboxInput
        type="checkbox"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={(e) => onChange(e)}
      />
      <CheckedSign />
    </CheckboxContainer>
  );
};

export default Checkbox;
