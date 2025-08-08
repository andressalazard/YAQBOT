type ButtonType = 'button' | 'submit' | 'reset' | undefined;

interface ButtonProps {
  label: string;
  className?: string;
  type?: ButtonType;
  onClick?: () => void;
}

const Button = ({ label = 'Button', type = 'button', onClick, className }: ButtonProps) => {
  return (
    <button className={className} type={type} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
