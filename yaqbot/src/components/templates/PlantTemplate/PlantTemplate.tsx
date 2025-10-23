import React, { useEffect, useState } from 'react';
import styles from './PlantTemplate.module.css';
import RenderTemplate from '../RenderTemplate/RenderTemplate';

const PlantTemplate: React.FC = () => {
  const [plantsList, setPlantsList] = useState([]);

  useEffect(() => {
    //here we are going to fetch from API the users registered plants
  }, []);

  return (
    <RenderTemplate>
      <div className={styles.pageContent}>
        <section>here goes an option to register new plant!</section>

        <section className={styles.dashboard}>
          {plantsList.map((plant, index) => (
            <PlantCard key={index} plant={plant} />
          ))}
        </section>
      </div>
    </RenderTemplate>
  );
};

export default PlantTemplate;
