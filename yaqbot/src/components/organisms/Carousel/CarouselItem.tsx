import React from 'react';
import styles from './CarouselItem.module.css';

interface CarouselItemProps {
  children: React.ReactNode;
  isActive?: boolean;
  isSelected?: boolean;
  onClick?: () => void;
}

const CarouselItem: React.FC<CarouselItemProps> = ({
  children,
  isActive = false,
  onClick,
  isSelected = false,
}) => {
  return (
    <div
      className={`${styles.carouselItem} ${isActive ? styles.active : styles.inactive} ${isSelected ? styles.selected : ''}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default CarouselItem;
