interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div>
      <span className={className}>YAQBOT</span>
    </div>
  );
};

export default Logo;
