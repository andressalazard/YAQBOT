import React, { useEffect, useState } from 'react';
import RenderTemplate from '../RenderTemplate/RenderTemplate';
import { retrievedPlant } from '../../../models/dataModel';
import AddPlantButton from '../../molecules/AddPlantButton/AddPlantButton';
import NewPlantForm from '../../molecules/NewPlantForm/NewPlantForm';
import { usePlant } from '../../context/PlantContext';
import PlantsDashboard from '../../organisms/PlantsDashboard/PlantsDashboard';
import styles from './PlantTemplate.module.css';

const plantsMock: retrievedPlant[] = [
  {
    id: '06badb29-e268-4f96-8637-c9b730193408',
    name: 'Aloe Vera',
    nickname: 'Carmelita',
    type: 'planta de interior',
    status: 'Agua',
  },

  {
    id: '02bdcfe2-7093-4d78-9024-993cc220bdba',
    name: 'Filodendro',
    nickname: 'Pancho',
    type: 'planta trepadora',
    status: 'Estoy bien',
  },

  {
    id: '9031b166-309f-4988-a50a-8b851f22c4af',
    name: 'Monstera Deliciosa',
    nickname: 'Becky',
    type: 'planta de interior',
    status: 'Agua',
  },
  {
    id: '9031b166-309f-4988-a50a-8b851f22c4af',
    name: 'Monstera Deliciosa',
    nickname: 'Becky2',
    type: 'planta de interior',
    status: 'Agua',
  },
];

const PlantTemplate: React.FC = () => {
  const [plantsList, setPlantsList] = useState<retrievedPlant[]>([]);
  const { isEditing, changeEdition, plantsCatalog, getPlantsCatalog } = usePlant();

  useEffect(() => {
    //here we are going to fetch from API the users registered plants
    setPlantsList(plantsMock);
    getPlantsCatalog();
  }, [isEditing]);

  return (
    <RenderTemplate>
      <div className={styles.pageContent}>
        <h1 className={styles.pageTitle}>Mis plantas registradas</h1>

        <div className={styles.content}>
          <PlantsDashboard ownedPlants={plantsList} />

          <section className={styles.newRegister}>
            <AddPlantButton
              handleClick={() => {
                changeEdition();
              }}
            />
            {isEditing === true && <NewPlantForm plantsCatalog={plantsCatalog} />}
          </section>
        </div>
      </div>
    </RenderTemplate>
  );
};

export default PlantTemplate;
