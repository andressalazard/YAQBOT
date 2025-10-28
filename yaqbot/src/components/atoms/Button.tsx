export type ButtonType = 'button' | 'submit' | 'reset' | undefined;

interface ButtonProps {
  label?: string;
  className?: string;
  type?: ButtonType;
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

const Button = ({ label = 'Button', type = 'button', onClick, className, children, disabled = false }: ButtonProps) => {
  return (
    <button className={className} type={type} onClick={onClick} disabled={disabled}>
      {children || label}
    </button>
  );
};

export default Button;
