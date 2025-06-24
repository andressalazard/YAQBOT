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
      className='px-10 py-4 bg-white rounded-xl'
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
