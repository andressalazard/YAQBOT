import type React from 'react';
import styles from './Image.module.css';

interface ImageStyleProps {
  bgColor: string;
  borderRadius?: string;
  width: string;
  height: string;
}
interface ImageProps {
  src?: string;
  alt: string | 'default img';
  stylesProps: ImageStyleProps;
}

function Image({ src, alt, stylesProps }: ImageProps) {
  const imgStyles = {
    '--bg_color': stylesProps.bgColor,
    '--border-radius': stylesProps.borderRadius,
    '--width': stylesProps.width,
    '--height': stylesProps.height,
  } as React.CSSProperties;

  return (
    <img className={styles.image} style={imgStyles} src={src} alt={alt}></img>
  );
}

export default Image;
