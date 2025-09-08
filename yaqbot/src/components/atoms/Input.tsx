interface InputProps {
  inputType: string;
  placeholder?: string;
  isDisabled?: boolean;
  className?: string;
  id: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const baseStyle = {
  padding: '0.5rem 1rem',
  borderRadius: '0.5rem',
  color: '#000',
};

function Input({ inputType, id, placeholder, className, isDisabled, value, onChange }: InputProps) {
  return <input className={className} style={baseStyle} id={id} value={value} type={inputType} placeholder={placeholder} disabled={isDisabled} onChange={onChange}></input>;
}

export default Input;
