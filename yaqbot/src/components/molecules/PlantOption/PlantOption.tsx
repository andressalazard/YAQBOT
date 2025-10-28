import React from 'react';
import styles from './PlantOption.module.css';
import Image from '../../atoms/Image';

interface PlantOptionProps {
  image: string;
  title: string;
  type: string;
  weather: string[];
}

const PlantOption: React.FC<PlantOptionProps> = ({ image, title, type, weather }) => {
  return (
    <div className={styles.plantCard}>
      <Image src={image} alt="plant-image" className={styles.plantImage} />
      <section className={styles.details}>
        <h1>{title}</h1>
        <p>
          Tipo de planta: <span>{type}</span>
        </p>
        {/* <ul>
          {weather.map((w, index) => (
            <li key={index}>{w}</li>
          ))}
        </ul> */}
      </section>
    </div>
  );
};

export default PlantOption;
