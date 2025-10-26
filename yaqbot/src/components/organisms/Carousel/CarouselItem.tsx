import React from 'react';
import styles from './CarouselItem.module.css';

interface CarouselItemProps {
  children: React.ReactNode;
}

const CarouselItem: React.FC<CarouselItemProps> = ({ children }) => {
  return <div className={styles.carouselItem}>{children}</div>;
};

export default CarouselItem;
