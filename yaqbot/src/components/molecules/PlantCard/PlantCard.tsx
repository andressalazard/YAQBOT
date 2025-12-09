import React from 'react';
import { retrievedPlant } from '../../../models/dataModel';
import styles from './PlantCard.module.css';
import { Link } from 'react-router-dom';
import Spinner from '../../atoms/Spinner/Spinner';
import { usePlant } from '../../context/PlantContext';

interface PlantCardProps {
  data: retrievedPlant;
}

const PlantCard: React.FC<PlantCardProps> = ({ data: plant }) => {
  const { setChosenPlantId } = usePlant();
  return (
    <div className={styles.plantCard}>
      {!plant ? (
        <Spinner />
      ) : (
        <div className={styles.description}>
          <div className={styles.details}>
            <span className={`material-symbols-outlined ${styles.potIcon}`}>potted_plant</span>
            <div>
              <h3>{plant.nickname}</h3>
              <h2>{plant.plant.name}</h2>
              <p>{plant.plant.type}</p>
              <p>Status: {plant.status}</p>
            </div>
          </div>
          <Link
            className={styles.seeDetails}
            to={`/plant/${plant.id}`}
            onClick={() => {
              setChosenPlantId(plant.id);
            }}
          >
            Ver detalles
          </Link>
        </div>
      )}
    </div>
  );
};

export default PlantCard;
