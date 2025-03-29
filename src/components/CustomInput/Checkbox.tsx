import {
  CheckboxContainer,
  CheckboxInput,
  CheckedSign,
  Label,
} from "./InputStyled";

interface CheckboxInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  checked?: true;
  handleChange: (c: boolean) => void;
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
    handleChange(e.target.checked);
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
