import styles from "./NumberCircle.module.css";

interface NumberCircleProps {
  content: string;
  onClick: () => void;
  size?: number; // Tamaño del círculo en píxeles
  className?: string; // Clase CSS adicional para personalización
}

const NumberCircle = ({
  content,
  onClick,
  size = 40,
  className = "",
}: NumberCircleProps) => {
  const circleStyle = {
    width: `${size}px`,
    height: `${size}px`,
    fontSize: `${size / 2}px`, // Tamaño de fuente proporcional al tamaño del círculo
  };

  return (
    <div
      style={circleStyle}
      className={`${styles.circle} ${styles[className]}`}
      onClick={onClick}
    >
      {content}
    </div>
  );
};
export default NumberCircle;
