import React from 'react';
import DescriptionRack from '../DescriptionRack/DescriptionRack';
import { descriptionType } from '../../../models/dataModel';
import styles from './PlantInfo.module.css';

interface PlantInfoProps {
  details: descriptionType[];
}

const PlantInfo: React.FC<PlantInfoProps> = ({ details }) => {
  return (
    <div className={styles.content}>
      <div className={styles.header}>
        <div className={styles.details_board}>
          <h1 className={styles.field_name}>DETALLES DE MI PLANTA</h1>
          <DescriptionRack descriptionList={details} />
        </div>
      </div>
    </div>
  );
};

export default PlantInfo;
