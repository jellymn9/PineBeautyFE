import { CheckboxContainer, Label } from "./InputStyled";

interface CheckboxInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  //value: string;
  //name: string;
  //id: string;
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
      <input
        type="checkbox"
        id={id}
        name={name}
        value={value}
        //checked={checked ?? undefined}
      />
    </CheckboxContainer>
  );
};

export default Checkbox;
