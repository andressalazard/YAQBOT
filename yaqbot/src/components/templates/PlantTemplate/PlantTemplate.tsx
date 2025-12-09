import React, { useEffect } from 'react';
import RenderTemplate from '../RenderTemplate/RenderTemplate';
import AddPlantButton from '../../molecules/AddPlantButton/AddPlantButton';
import NewPlantForm from '../../molecules/NewPlantForm/NewPlantForm';
import { usePlant } from '../../context/PlantContext';
import PlantsDashboard from '../../organisms/PlantsDashboard/PlantsDashboard';
import styles from './PlantTemplate.module.css';
import { useAppSelector } from '../../../hooks/hook';

const PlantTemplate: React.FC = () => {
  const { isEditing, changeEdition, plantsCatalog, getPlantsCatalog, userPlants, getUserPlants } =
    usePlant();
  const userid = useAppSelector((state) => state.auth.userid);

  useEffect(() => {
    if (isEditing) {
      getPlantsCatalog();
    }

    if (!userid) {
      return;
    }
    getUserPlants(userid);
  }, [isEditing, userid]);

  return (
    <RenderTemplate>
      <div className={styles.pageContent}>
        <h1 className={styles.pageTitle}>Mis plantas registradas</h1>

        <div className={styles.content}>
          <PlantsDashboard ownedPlants={userPlants} />

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
