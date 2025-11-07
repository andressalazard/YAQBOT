import React from 'react';
import styles from './PlantInfo.module.css';
import PlantDetailCard from '../../molecules/PlantDetailCard/PlantDetailCard';

interface PlantInfoProps {
  image: string;
  plant: {
    name: string;
    nickname: string;
    status: string;
    type: string;
  };
}

const PlantInfo: React.FC<PlantInfoProps> = ({ image, plant }) => {
  const { name, nickname, status, type } = plant;
  return (
    <div className={styles.content}>
      <PlantDetailCard name={name} nickname={nickname} status={status} type={type} image={image} />
      <section className={styles.plant_description}>
        Here goes the details of the plant
        <section className={styles.options}>here goes edit button and delete button</section>
      </section>
    </div>
  );
};

export default PlantInfo;
