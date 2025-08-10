type ButtonType = 'button' | 'submit' | 'reset' | undefined;

interface ButtonProps {
  label: string;
  className?: string;
  type?: ButtonType;
  onClick?: () => void;
}

const baseStyle = {
  padding: '0.5rem 1rem',
  borderRadius: '0.5rem',
  cursor: 'pointer'
};

const Button = ({ label = 'Button', type = 'button', onClick, className }: ButtonProps) => {
  return (
    <button style={baseStyle} className={className} type={type} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
