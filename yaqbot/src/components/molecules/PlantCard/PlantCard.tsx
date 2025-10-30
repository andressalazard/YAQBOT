import React from 'react';
import { retrievedPlant } from '../../../models/dataModel';
import styles from './PlantCard.module.css';
import { Link } from 'react-router-dom';
import Spinner from '../../atoms/Spinner/Spinner';

interface PlantCardProps {
  plant: retrievedPlant;
}

const PlantCard: React.FC<PlantCardProps> = ({ plant }) => {
  return (
    <div className={styles.plantCard}>
      {!plant ? (
        <Spinner />
      ) : (
        <div className={styles.description}>
          <div className={styles.details}>
            <span className={`material-symbols-outlined ${styles.potIcon}`}>potted_plant</span>
            <div>
              <h3>{plant.name}</h3>
              <p>{plant.type}</p>
              <p>Status: {plant.status}</p>
            </div>
          </div>
          <Link className={styles.seeDetails} to={`/plant/${plant.id}`}>
            Ver detalles
          </Link>
        </div>
      )}
    </div>
  );
};

export default PlantCard;
