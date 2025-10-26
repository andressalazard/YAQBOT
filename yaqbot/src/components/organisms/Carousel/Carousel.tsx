import React from 'react';
import styles from './Carousel.module.css';
import Button from '../../atoms/Button';
import CarouselItem from './CarouselItem';

interface CarouselProps {
  items: React.ReactNode[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  return (
    <div className={styles.carousel}>
      <Button className={`material-icons ${styles.carrousel_btn}`}>arrow_back</Button>
      <section className={styles.carousel_track}>
        {items.map((item, i) => (
          <CarouselItem key={i}>{item}</CarouselItem>
        ))}
      </section>
      <Button className={`material-icons ${styles.carrousel_btn}`}>arrow_forward</Button>
    </div>
  );
};

export default Carousel;
