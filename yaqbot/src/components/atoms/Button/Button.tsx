import React from "react";
import styles from "./Button.module.css";

interface ButtonStylesProps {
  bgColor?: string;
  width?: string;
  borderRadius?: string;
  color?: string;
}

interface ButtonProps {
  label: string;
  stylesProps: ButtonStylesProps;
}

function Button({ label, stylesProps }: ButtonProps) {
  const buttonStyle: ButtonStylesProps = {
    bgColor: "#445522",
    width: "80%",
    borderRadius: "20px",
    color: "#ffffff",
  };
  stylesProps = { ...buttonStyle, ...stylesProps };
  const style = {
    "--bg-color": stylesProps.bgColor,
    "--width": stylesProps.width,
    "--color": stylesProps.color,
    "--border-radius": stylesProps.borderRadius,
  } as React.CSSProperties;
  return (
    <button className={styles.button} style={style}>
      {label}
    </button>
  );
}

export default Button;
