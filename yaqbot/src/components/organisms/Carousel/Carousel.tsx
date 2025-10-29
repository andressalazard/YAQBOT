import React, { useState } from 'react';
import styles from './Carousel.module.css';
import Button from '../../atoms/Button';
import CarouselItem from './CarouselItem';

interface CarouselProps {
  items: React.ReactNode[];
  itemsPerSlide?: number;
  onSelectItem?: (index: number) => void;
}

const Carousel: React.FC<CarouselProps> = ({ items, itemsPerSlide = 3, onSelectItem }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const totalItems = items.length;

  const totalSlides = Math.ceil(totalItems / itemsPerSlide);
  const maxWidth = (totalItems / itemsPerSlide) * 100;
  const start = currentIndex * itemsPerSlide;
  const end = start + itemsPerSlide;

  const goToPrev = () => {
    setCurrentIndex((prevState) => (prevState === 0 ? totalSlides - 1 : prevState - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevState) => (prevState === totalSlides - 1 ? 0 : prevState + 1));
  };

  const handleSelect = (index: number) => {
    setSelectedIndex(index);
    if (onSelectItem) {
      onSelectItem(index);
    }
  };

  return (
    <div className={styles.carousel}>
      <Button
        className={`material-icons ${styles.carousel_btn}`}
        onClick={() => {
          goToPrev();
        }}
      >
        arrow_back
      </Button>
      <section
        className={styles.carousel_track}
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          width: `${maxWidth}px`,
        }}
      >
        {items.map((item, i) => (
          <CarouselItem
            key={i}
            isActive={i >= start && i < end}
            onClick={() => {
              handleSelect(i);
            }}
            isSelected={i === selectedIndex}
          >
            {item}
          </CarouselItem>
        ))}
      </section>
      <Button
        className={`material-icons ${styles.carousel_btn}`}
        onClick={() => {
          goToNext();
        }}
      >
        arrow_forward
      </Button>
    </div>
  );
};

export default Carousel;
