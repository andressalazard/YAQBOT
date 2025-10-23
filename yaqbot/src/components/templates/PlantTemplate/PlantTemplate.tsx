import React, { useEffect, useState } from 'react';
import styles from './PlantTemplate.module.css';
import RenderTemplate from '../RenderTemplate/RenderTemplate';
import { retrievedPlant } from '../../../models/dataModel';
import PlantCard from '../../molecules/PlantCard/PlantCard';

const plantsMock: retrievedPlant[] = [
  {
    id: '06badb29-e268-4f96-8637-c9b730193408',
    name: 'Carmelita',
    type: 'planta de interior',
    status: 'Agua',
  },

  {
    id: '02bdcfe2-7093-4d78-9024-993cc220bdba',
    name: 'Pancho',
    type: 'planta trepadora',
    status: 'Estoy bien',
  },

  {
    id: '9031b166-309f-4988-a50a-8b851f22c4af',
    name: 'Becky',
    type: 'planta de interior',
    status: 'Agua',
  },
];

const PlantTemplate: React.FC = () => {
  const [plantsList, setPlantsList] = useState<retrievedPlant[]>([]);

  useEffect(() => {
    //here we are going to fetch from API the users registered plants
    setPlantsList(plantsMock);
  }, []);

  return (
    <RenderTemplate>
      <div className={styles.pageContent}>
        <h1 className={styles.pageTitle}>Mis plantas registradas</h1>

        <div className={styles.content}>
          <section className={styles.dashboard}>
            {plantsList.map((plant, index) => (
              <PlantCard key={index} plant={plant} />
            ))}
          </section>

          <section className={styles.newRegister}>Aqui se agregará una nueva planta</section>
        </div>
      </div>
    </RenderTemplate>
  );
};

export default PlantTemplate;
