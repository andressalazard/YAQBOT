interface ButtonProps {
  label: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: () => void;
}

const Button = ({
  label = 'Button',
  type = 'button',
  onClick,
}: ButtonProps) => {
  const baseStyle = 'rounded-xl bg-red-300';

  return (
    <button type={type} className='bg-red-300' onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
