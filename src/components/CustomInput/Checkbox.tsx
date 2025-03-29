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
}

const Checkbox = ({
  id,
  label,
  value,
  checked = undefined,
  name,
}: CheckboxInputProps) => {
  return (
    <CheckboxContainer>
      <Label htmlFor={id}>{label}</Label>
      <CheckboxInput
        type="checkbox"
        id={id}
        name={name}
        value={value}
        checked={checked ?? undefined}
      />
      <CheckedSign />
    </CheckboxContainer>
  );
};

export default Checkbox;
