import React from 'react';
import PlantDetailCard from '../../molecules/PlantDetailCard/PlantDetailCard';
import DescriptionRack from '../DescriptionRack/DescriptionRack';
import { descriptionType } from '../../../models/dataModel';
import styles from './PlantInfo.module.css';
import PlantConfiguration from '../../molecules/PlantConfiguration/PlantConfiguration';

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
      <div className={styles.header}>
        <div className={styles.details_board}>
          <h1 className={styles.field_name}>DETALLES DE MI PLANTA</h1>
          <DescriptionRack descriptionList={details} />
        </div>
        <PlantConfiguration />
      </div>

      {/* <section className={styles.plant_description}>
        Here goes the details of the plant
        <section className={styles.options}>here goes edit button and delete button</section>
      </section> */}
    </div>
  );
};

export default PlantInfo;
