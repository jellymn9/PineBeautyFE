import {
  CheckboxContainer,
  CheckboxInput,
  CheckedSign,
  Label,
} from "./InputStyled";

interface CheckboxInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  checked?: boolean;
}

const Checkbox = ({
  id,
  label,
  value,
  //checked = false,
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
        //checked={checked ?? undefined}
      />
      <CheckedSign />
    </CheckboxContainer>
  );
};

export default Checkbox;
