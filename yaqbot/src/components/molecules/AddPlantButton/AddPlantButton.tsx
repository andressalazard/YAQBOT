import React from 'react';
import styles from './AddPlantButton.module.css';

const AddPlantButton: React.FC = () => {
  return (
    <div className={styles.add_plant_body}>
      <h1>¿Quieres añadir una nueva planta?</h1>
      <button className={`material-icons ${styles.add_plant_button}`}>add</button>
    </div>
  );
};

export default AddPlantButton;
