import React, { useState } from 'react';
import PlantDetailCard from '../../molecules/PlantDetailCard/PlantDetailCard';
import DescriptionRack from '../DescriptionRack/DescriptionRack';
import { descriptionType } from '../../../models/dataModel';
import styles from './PlantInfo.module.css';
import Toggle from '../../atoms/Toogle/Toogle';
import ToggleOption from '../../molecules/ToggleOption/ToggleOption';

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

  const options = [
    { label: 'Mostrar esta planta como pública', isToggle: false },
    { label: 'Activar el autoregado de la planta', isToggle: true },
  ];

  return (
    <div className={styles.content}>
      <PlantDetailCard name={name} nickname={nickname} status={status} type={type} image={image} />
      <div>
        <DescriptionRack descriptionList={details} />
        {options.map((option, index) => (
          <ToggleOption key={index} label={option.label} isToggle={option.isToggle} />
        ))}
      </div>

      {/* <section className={styles.plant_description}>
        Here goes the details of the plant
        <section className={styles.options}>here goes edit button and delete button</section>
      </section> */}
    </div>
  );
};

export default PlantInfo;
