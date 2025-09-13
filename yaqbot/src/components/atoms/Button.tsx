export type ButtonType = 'button' | 'submit' | 'reset' | undefined;

interface ButtonProps {
  label?: string;
  className?: string;
  type?: ButtonType;
  children?: React.ReactNode;
  onClick?: () => void;
}

const Button = ({ label = 'Button', type = 'button', onClick, className, children }: ButtonProps) => {
  return (
    <button className={className} type={type} onClick={onClick}>
      {children || label}
    </button>
  );
};

export default Button;
