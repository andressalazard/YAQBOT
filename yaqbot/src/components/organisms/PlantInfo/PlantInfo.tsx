import React from 'react';
import PlantDetailCard from '../../molecules/PlantDetailCard/PlantDetailCard';
import DescriptionRack from '../DescriptionRack/DescriptionRack';
import { descriptionType } from '../../../models/dataModel';
import styles from './PlantInfo.module.css';

interface PlantInfoProps {
  image: string;
  plant: {
    name: string;
    nickname: string;
    status: string;
    type: string;
  };
  details: descriptionType[];
}

const PlantInfo: React.FC<PlantInfoProps> = ({ image, plant, details }) => {
  const { name, nickname, status, type } = plant;
  return (
    <div className={styles.content}>
      <PlantDetailCard name={name} nickname={nickname} status={status} type={type} image={image} />
      <DescriptionRack descriptionList={details} />

      {/* <section className={styles.plant_description}>
        Here goes the details of the plant
        <section className={styles.options}>here goes edit button and delete button</section>
      </section> */}
    </div>
  );
};

export default PlantInfo;
