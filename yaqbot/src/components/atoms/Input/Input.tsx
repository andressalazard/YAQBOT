interface InputProps {
  inputType: string;
  placeholder?: string;
  isDisabled?: boolean;
  id: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input({
  inputType,
  id,
  placeholder,
  isDisabled,
  value,
  onChange,
}: InputProps) {
  return (
    <input
      id={id}
      value={value}
      type={inputType}
      placeholder={placeholder}
      disabled={isDisabled}
      onChange={onChange}
    ></input>
  );
}

export default Input;
