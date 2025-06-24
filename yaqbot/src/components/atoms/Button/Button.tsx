type ButtonType = 'button' | 'submit' | 'reset' | undefined;

interface ButtonProps {
  label: string;
  type?: ButtonType;
  onClick?: () => void;
}

const Button = ({
  label = 'Button',
  type = 'button',
  onClick,
}: ButtonProps) => {
  return (
    <button
      className='bg-blue-500 hover:bg-fuchsia-500 px-10 py-12'
      type={type}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
