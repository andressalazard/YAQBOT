import { cssElementsProps } from '../types/cssStyles';
import styles from './Card.module.css';

import React from 'react';

interface CardProps {
  children: React.ReactNode;
  stylesProps: cssElementsProps;
}

const Card: React.FC<CardProps> = ({ children, stylesProps }) => {
  const cardStyles = {
    '--bg_color': stylesProps.bgColor,
    '--border-radius': stylesProps.borderRadius,
    '--width': stylesProps.width,
    '--height': stylesProps.height,
  } as React.CSSProperties;
  return (
    <div className={styles.card} style={cardStyles}>
      {children}
    </div>
  );
};

export default Card;
