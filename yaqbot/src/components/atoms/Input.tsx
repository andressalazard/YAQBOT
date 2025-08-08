interface InputProps {
  inputType: string;
  placeholder?: string;
  isDisabled?: boolean;
  className?: string;
  id: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input({ inputType, id, placeholder, className, isDisabled, value, onChange }: InputProps) {
  return <input className={className} id={id} value={value} type={inputType} placeholder={placeholder} disabled={isDisabled} onChange={onChange}></input>;
}

export default Input;
